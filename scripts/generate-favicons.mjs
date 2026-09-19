import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function generateFavicons() {
  const logoPath = path.join(rootDir, 'public', 'assets', 'logo-bds.png');
  const logoBuf = fs.readFileSync(logoPath);
  const base64Logo = `data:image/png;base64,${logoBuf.toString('base64')}`;

  // 1. Generate transparent SVG wrapper of the authentic logo
  const svgPath = path.join(rootDir, 'public', 'favicon.svg');
  // Dimensions 1774 x 887, centered in 1774 x 1774 square
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1774 1774" fill="none">
  <image href="${base64Logo}" x="0" y="443" width="1774" height="887" preserveAspectRatio="xMidYMid meet" />
</svg>
`;
  fs.writeFileSync(svgPath, svgContent, 'utf8');
  console.log(`Generated SVG: ${svgPath}`);

  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage();

  const sizes = [
    { size: 16, name: 'favicon-16x16.png', target: 'public/assets', opaque: false },
    { size: 32, name: 'favicon-32x32.png', target: 'public/assets', opaque: false },
    { size: 48, name: 'favicon-48x48.png', target: 'public/assets', opaque: false },
    { size: 96, name: 'favicon-96x96.png', target: 'public/assets', opaque: false },
    { size: 180, name: 'apple-touch-icon.png', target: 'public/assets', opaque: true },
    { size: 192, name: 'favicon-192x192.png', target: 'public/assets', opaque: false },
    { size: 512, name: 'favicon-512x512.png', target: 'public/assets', opaque: false }
  ];

  for (const item of sizes) {
    await page.setViewportSize({ width: item.size, height: item.size });
    
    // For apple-touch-icon, Apple requires an opaque background. For standard favicons, transparent background is required.
    const bgColor = item.opaque ? '#ffffff' : 'transparent';
    const padding = item.opaque ? Math.round(item.size * 0.1) : 0;

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html, body {
              width: 100%;
              height: 100%;
              overflow: hidden;
              background-color: ${bgColor};
              display: flex;
              align-items: center;
              justify-content: center;
              padding: ${padding}px;
            }
            img {
              width: 100%;
              height: auto;
              max-height: 100%;
              object-fit: contain;
              display: block;
            }
          </style>
        </head>
        <body>
          <img src="${base64Logo}" alt="BDS Logo" />
        </body>
      </html>
    `;
    await page.setContent(html);
    const destDir = path.join(rootDir, item.target);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    const outPath = path.join(destDir, item.name);
    await page.screenshot({ path: outPath, omitBackground: !item.opaque });
    console.log(`Generated: ${outPath} (${item.size}x${item.size})`);
  }

  // Also copy apple-touch-icon.png and favicon-48x48.png to public/ root
  fs.copyFileSync(
    path.join(rootDir, 'public', 'assets', 'apple-touch-icon.png'),
    path.join(rootDir, 'public', 'apple-touch-icon.png')
  );
  fs.copyFileSync(
    path.join(rootDir, 'public', 'assets', 'favicon-48x48.png'),
    path.join(rootDir, 'public', 'favicon-48x48.png')
  );

  // Generate multi-image ICO (16x16, 32x32, 48x48)
  const icoPath = path.join(rootDir, 'public', 'favicon.ico');
  const img16 = fs.readFileSync(path.join(rootDir, 'public', 'assets', 'favicon-16x16.png'));
  const img32 = fs.readFileSync(path.join(rootDir, 'public', 'assets', 'favicon-32x32.png'));
  const img48 = fs.readFileSync(path.join(rootDir, 'public', 'assets', 'favicon-48x48.png'));

  const icoBuffer = createIcoFromPngs([
    { width: 16, height: 16, buffer: img16 },
    { width: 32, height: 32, buffer: img32 },
    { width: 48, height: 48, buffer: img48 }
  ]);
  fs.writeFileSync(icoPath, icoBuffer);
  console.log(`Generated ICO: ${icoPath} (size: ${icoBuffer.length} bytes)`);

  await browser.close();
}

function createIcoFromPngs(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved. Must always be 0.
  header.writeUInt16LE(1, 2); // Specifies image type: 1 for icon (.ICO) image
  header.writeUInt16LE(images.length, 4); // Specifies number of images in the file.

  const entries = [];
  let offset = 6 + (images.length * 16);

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // Color count (0 = >= 8bpp)
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // Size of image data in bytes
    entry.writeUInt32LE(offset, 12); // Offset of image data
    entries.push(entry);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...images.map(i => i.buffer)]);
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});

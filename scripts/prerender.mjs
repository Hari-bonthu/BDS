import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const routes = [
  '/',
  '/services',
  '/portfolio',
  '/insights',
  '/about',
  '/contact',
  '/services/short-form-video-ads',
  '/services/content-creation',
  '/services/social-media-management',
  '/services/platform-coverage',
  '/services/content-operations',
  '/services/community-management',
  '/services/reporting-insights',
  '/privacy',
  '/terms'
];

// Simple SPA static server
function createServer() {
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    let filePath = path.join(distDir, decodeURIComponent(url.pathname));

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // SPA fallback
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(indexHtml);
    }
  });
}

async function runPrerender() {
  console.log('🚀 Starting BDS Pre-Rendering Engine...');
  const server = createServer();

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  console.log(`🌐 Local pre-render server listening on port ${port}`);

  let browser;
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
  } catch {
    browser = await chromium.launch({ headless: true });
  }

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (compatible; BDSPrerenderBot/1.0; +https://bhargavdigitalsolutions.com)'
  });

  const page = await context.newPage();

  for (const route of routes) {
    const targetUrl = `http://127.0.0.1:${port}${route}`;
    try {
      await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForSelector('#root > div', { timeout: 5000 });
      // Short delay for React title/meta useEffect to settle
      await page.waitForTimeout(250);

      const html = await page.content();
      const pageTitle = await page.title();

      let targetPath;
      if (route === '/') {
        targetPath = path.join(distDir, 'index.html');
      } else {
        const outDir = path.join(distDir, route.replace(/^\//, ''));
        fs.mkdirSync(outDir, { recursive: true });
        targetPath = path.join(outDir, 'index.html');
      }

      fs.writeFileSync(targetPath, html, 'utf-8');
      console.log(`  ✓ Pre-rendered [${route}] -> ${path.relative(distDir, targetPath)} ("${pageTitle.slice(0, 45)}...")`);
    } catch (err) {
      console.error(`  ✗ Failed to pre-render route ${route}:`, err.message);
    }
  }

  // Generate / Preserve 404.html for GitHub Pages fallback
  const public404Path = path.resolve(__dirname, '../public/404.html');
  if (fs.existsSync(public404Path)) {
    const custom404Html = fs.readFileSync(public404Path, 'utf-8');
    fs.writeFileSync(path.join(distDir, '404.html'), custom404Html, 'utf-8');
    console.log('  ✓ Preserved branded public/404.html -> dist/404.html');
  } else {
    const rootHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
    fs.writeFileSync(path.join(distDir, '404.html'), rootHtml, 'utf-8');
    console.log('  ✓ Generated dist/404.html from index.html');
  }

  await browser.close();
  server.close();
  console.log('✅ BDS Pre-Rendering completed successfully!\n');
}

runPrerender().catch((err) => {
  console.error('Fatal pre-render error:', err);
  process.exit(1);
});

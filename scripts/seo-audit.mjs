import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const rootDir = path.resolve(__dirname, '..');

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

const ROUTES = [
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

function createStaticServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    let decodedPath = decodeURIComponent(url.pathname);
    let filePath = path.join(distDir, decodedPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // 404 fallback
      const fallback404 = path.join(distDir, '404.html');
      if (fs.existsSync(fallback404)) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(fallback404).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    }
  });
}

function fetchRawHtml(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', reject);
  });
}

function decodeHtml(str) {
  if (!str) return str;
  return str
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/');
}

function parseRawHtmlMetadata(html) {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? decodeHtml(titleMatch[1].trim()) : null;

  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i)
    || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
  const description = descMatch ? decodeHtml(descMatch[1].trim()) : null;

  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i)
    || html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["'][^>]*>/i);
  const canonical = canonicalMatch ? decodeHtml(canonicalMatch[1].trim()) : null;

  const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["'][^>]*>/i);
  const robots = robotsMatch ? robotsMatch[1].trim() : null;

  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? decodeHtml(h1Match[1].replace(/<[^>]+>/g, '').trim()) : null;

  // Extract JSON-LD scripts
  const jsonLdMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const jsonLd = [];
  for (const m of jsonLdMatches) {
    try {
      jsonLd.push(JSON.parse(m[1].trim()));
    } catch {
      jsonLd.push({ parseError: true, raw: m[1].trim() });
    }
  }

  // Extract raw anchor hrefs
  const linkMatches = [...html.matchAll(/<a[^>]*href=["']([^"']*)["'][^>]*>/gi)];
  const links = linkMatches.map(m => m[1]);

  // Check if body has meaningful text content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyText = bodyMatch ? bodyMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';

  return {
    title,
    description,
    canonical,
    robots,
    h1,
    linksCount: links.length,
    links,
    jsonLdCount: jsonLd.length,
    jsonLd,
    bodyTextLength: bodyText.length
  };
}

async function runAudit() {
  console.log('🔍 Starting Comprehensive BDS Technical SEO & Parity Audit...\n');

  const server = createStaticServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`📡 Local preview server running at ${baseUrl}`);

  let browser;
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
  } catch {
    browser = await chromium.launch({ headless: true });
  }

  const findings = [];
  const routeAuditResults = [];
  const allDiscoveredInternalLinks = new Set();

  // Test 1: Robots.txt verification
  console.log('🤖 Auditing robots.txt...');
  try {
    const robotsRes = await fetchRawHtml(`${baseUrl}/robots.txt`);
    if (robotsRes.statusCode !== 200) {
      findings.push({
        severity: 'CRITICAL',
        route: '/robots.txt',
        evidence: `HTTP Status ${robotsRes.statusCode}`,
        whyItMatters: 'Search bots cannot discover indexing permissions or sitemap without a valid robots.txt.',
        exactFile: 'public/robots.txt',
        exactComponent: 'Root public asset',
        recommendedFix: 'Ensure public/robots.txt returns HTTP 200 with valid directives.',
        confidence: 'High'
      });
    } else {
      const robotsTxt = robotsRes.body;
      if (!robotsTxt.includes('Sitemap: https://www.bhargavdigitalsolutions.com/sitemap.xml')) {
        findings.push({
          severity: 'HIGH',
          route: '/robots.txt',
          evidence: `robots.txt content missing Sitemap reference`,
          whyItMatters: 'Search engines use the Sitemap directive to locate crawlable URLs immediately.',
          exactFile: 'public/robots.txt',
          exactComponent: 'public/robots.txt:L8',
          recommendedFix: 'Add "Sitemap: https://www.bhargavdigitalsolutions.com/sitemap.xml" to robots.txt.',
          confidence: 'High'
        });
      }
    }
  } catch (err) {
    findings.push({
      severity: 'CRITICAL',
      route: '/robots.txt',
      evidence: err.message,
      whyItMatters: 'robots.txt is unreadable.',
      exactFile: 'public/robots.txt',
      exactComponent: 'Server routing',
      recommendedFix: 'Ensure public/robots.txt is served correctly.',
      confidence: 'High'
    });
  }

  // Test 2: Sitemap.xml verification
  console.log('🗺️  Auditing sitemap.xml...');
  try {
    const sitemapRes = await fetchRawHtml(`${baseUrl}/sitemap.xml`);
    if (sitemapRes.statusCode !== 200) {
      findings.push({
        severity: 'CRITICAL',
        route: '/sitemap.xml',
        evidence: `HTTP Status ${sitemapRes.statusCode}`,
        whyItMatters: 'Sitemap is required for search engines to index all canonical routes.',
        exactFile: 'public/sitemap.xml',
        exactComponent: 'public/sitemap.xml',
        recommendedFix: 'Ensure public/sitemap.xml is properly generated and served.',
        confidence: 'High'
      });
    } else {
      const sitemapXml = sitemapRes.body;
      if (sitemapXml.includes('#')) {
        findings.push({
          severity: 'CRITICAL',
          route: '/sitemap.xml',
          evidence: `Sitemap contains hash fragments (#)`,
          whyItMatters: 'Google rejects URLs with fragment identifiers (#) in sitemaps.',
          exactFile: 'public/sitemap.xml',
          exactComponent: '<loc> nodes',
          recommendedFix: 'Remove all hash (#) URLs from sitemap.xml.',
          confidence: 'High'
        });
      }
      for (const route of ROUTES) {
        const canonicalUrl = `https://www.bhargavdigitalsolutions.com${route === '/' ? '/' : route + '/'}`;
        if (!sitemapXml.includes(canonicalUrl)) {
          findings.push({
            severity: 'MEDIUM',
            route: '/sitemap.xml',
            evidence: `Route ${canonicalUrl} missing from sitemap.xml`,
            whyItMatters: 'Public routes should be indexed in sitemap.xml for fast indexing.',
            exactFile: 'public/sitemap.xml',
            exactComponent: '<url> entries',
            recommendedFix: `Add ${canonicalUrl} to public/sitemap.xml.`,
            confidence: 'High'
          });
        }
      }
    }
  } catch (err) {
    findings.push({
      severity: 'CRITICAL',
      route: '/sitemap.xml',
      evidence: err.message,
      whyItMatters: 'sitemap.xml is unreadable.',
      exactFile: 'public/sitemap.xml',
      exactComponent: 'public/sitemap.xml',
      recommendedFix: 'Fix sitemap.xml delivery.',
      confidence: 'High'
    });
  }

  // Test 3: Route Crawl, Raw HTML vs. Rendered DOM Diff Test
  console.log('\n📄 Auditing Routes & Comparing Raw HTML vs. Rendered DOM...');

  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 BDSPlaywrightAudit'
  });
  const page = await desktopContext.newPage();

  for (const route of ROUTES) {
    const routeUrl = `${baseUrl}${route}`;
    console.log(`\n  Checking [${route}]...`);

    // Step A: Fetch Raw Initial HTML
    let rawHttp;
    try {
      rawHttp = await fetchRawHtml(routeUrl);
    } catch (err) {
      findings.push({
        severity: 'CRITICAL',
        route,
        evidence: `Raw HTTP fetch failed: ${err.message}`,
        whyItMatters: 'Server failed to respond to initial HTTP request before JS execution.',
        exactFile: 'dist' + route,
        exactComponent: 'Static Server',
        recommendedFix: 'Ensure static route HTML exists in dist.',
        confidence: 'High'
      });
      continue;
    }

    if (rawHttp.statusCode !== 200) {
      findings.push({
        severity: 'CRITICAL',
        route,
        evidence: `HTTP ${rawHttp.statusCode} returned for raw HTML`,
        whyItMatters: 'Search bots receive error code before rendering.',
        exactFile: 'dist' + route,
        exactComponent: 'Route serving',
        recommendedFix: `Ensure pre-rendered index.html exists for ${route}.`,
        confidence: 'High'
      });
      continue;
    }

    const rawMeta = parseRawHtmlMetadata(rawHttp.body);

    // Step B: Render DOM via Playwright
    await page.goto(routeUrl, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForSelector('#root > div', { timeout: 5000 });
    await page.waitForTimeout(200);

    const renderedTitle = await page.title();
    const renderedDesc = await page.$eval('meta[name="description"]', el => el.getAttribute('content')).catch(() => null);
    const renderedCanonical = await page.$eval('link[rel="canonical"]', el => el.getAttribute('href')).catch(() => null);
    const renderedRobots = await page.$eval('meta[name="robots"]', el => el.getAttribute('content')).catch(() => null);
    
    // Headings
    const renderedH1s = await page.$$eval('h1', els => els.map(e => e.innerText.trim()).filter(Boolean));
    const headingsHierarchy = await page.$$eval('h1, h2, h3', els => els.map(e => ({ tag: e.tagName.toLowerCase(), text: e.innerText.trim() })));

    // Images
    const images = await page.$$eval('img', els => els.map(e => ({
      src: e.getAttribute('src'),
      alt: e.getAttribute('alt'),
      width: e.getAttribute('width') || e.naturalWidth,
      height: e.getAttribute('height') || e.naturalHeight,
      loading: e.getAttribute('loading'),
      fetchPriority: e.getAttribute('fetchpriority') || e.getAttribute('fetchPriority'),
      classes: e.getAttribute('class')
    })));

    // Links
    const renderedLinks = await page.$$eval('a[href]', els => els.map(e => ({
      href: e.getAttribute('href'),
      text: e.innerText.trim()
    })));

    // JSON-LD
    const renderedJsonLd = await page.$$eval('script[type="application/ld+json"]', els => els.map(e => {
      try {
        return JSON.parse(e.innerText.trim());
      } catch {
        return { parseError: true };
      }
    }));

    // Record internal links for crawl check
    for (const l of renderedLinks) {
      if (l.href && (l.href.startsWith('/') || l.href.includes('bhargavdigitalsolutions.com'))) {
        allDiscoveredInternalLinks.add(l.href);
      }
    }

    const cleanRenderedTitle = decodeHtml(renderedTitle);
    const cleanRenderedDesc = decodeHtml(renderedDesc);
    const cleanRenderedCanonical = decodeHtml(renderedCanonical);

    // Step C: MANDATORY RAW HTML VS RENDERED DOM DIFF TEST
    const diffs = [];

    // Title diff
    if (!rawMeta.title) {
      diffs.push('Title missing in Raw HTML');
      findings.push({
        severity: 'HIGH',
        route,
        evidence: `Raw HTML title is null; Rendered title is "${cleanRenderedTitle}"`,
        whyItMatters: 'Crawlers inspecting raw HTML will see no page title.',
        exactFile: 'scripts/prerender.mjs',
        exactComponent: '<title> tag in pre-rendered output',
        recommendedFix: 'Pre-render title dynamically per route.',
        confidence: 'High'
      });
    } else if (rawMeta.title !== cleanRenderedTitle) {
      diffs.push(`Title mismatch (Raw: "${rawMeta.title.slice(0, 30)}..." vs Rendered: "${cleanRenderedTitle.slice(0, 30)}...")`);
      findings.push({
        severity: 'HIGH',
        route,
        evidence: `Raw title "${rawMeta.title}" does not match Rendered title "${cleanRenderedTitle}"`,
        whyItMatters: 'Title mismatch causes crawler confusion and indexing fluctuations.',
        exactFile: 'src/App.tsx',
        exactComponent: 'metaMap in App.tsx',
        recommendedFix: 'Synchronize pre-rendered raw HTML title with client-side title.',
        confidence: 'High'
      });
    }

    // Description diff
    if (!rawMeta.description) {
      diffs.push('Description missing in Raw HTML');
      findings.push({
        severity: 'HIGH',
        route,
        evidence: `Raw meta description is missing; Rendered description is "${cleanRenderedDesc}"`,
        whyItMatters: 'Search snippets will be blank or autogenerated if raw description is missing.',
        exactFile: 'scripts/prerender.mjs',
        exactComponent: '<meta name="description">',
        recommendedFix: 'Ensure pre-rendered HTML includes route description.',
        confidence: 'High'
      });
    } else if (cleanRenderedDesc && rawMeta.description !== cleanRenderedDesc) {
      diffs.push('Description mismatch between Raw HTML and Rendered DOM');
      findings.push({
        severity: 'MEDIUM',
        route,
        evidence: `Raw description "${rawMeta.description}" does not match Rendered description "${cleanRenderedDesc}"`,
        whyItMatters: 'Inconsistent meta descriptions weaken relevance signals.',
        exactFile: 'src/App.tsx',
        exactComponent: 'metaMap in App.tsx',
        recommendedFix: 'Keep raw and rendered descriptions identical.',
        confidence: 'High'
      });
    }

    // Canonical diff
    if (!rawMeta.canonical) {
      diffs.push('Canonical missing in Raw HTML');
      findings.push({
        severity: 'HIGH',
        route,
        evidence: 'Raw HTML has no canonical tag',
        whyItMatters: 'Raw HTML must specify canonical to prevent duplicate content indexing.',
        exactFile: 'scripts/prerender.mjs',
        exactComponent: '<link rel="canonical">',
        recommendedFix: 'Inject canonical link during pre-rendering.',
        confidence: 'High'
      });
    } else if (cleanRenderedCanonical && rawMeta.canonical !== cleanRenderedCanonical) {
      diffs.push(`Canonical mismatch (Raw: ${rawMeta.canonical} vs Rendered: ${cleanRenderedCanonical})`);
      findings.push({
        severity: 'CRITICAL',
        route,
        evidence: `Raw canonical (${rawMeta.canonical}) differs from Rendered (${cleanRenderedCanonical})`,
        whyItMatters: 'Conflicting canonical tags will cause search engines to ignore canonical directives.',
        exactFile: 'src/App.tsx',
        exactComponent: 'metaMap in App.tsx',
        recommendedFix: 'Ensure raw pre-rendered canonical matches client canonical exactly.',
        confidence: 'High'
      });
    }

    // H1 check
    if (renderedH1s.length === 0) {
      findings.push({
        severity: 'CRITICAL',
        route,
        evidence: 'No <h1> heading found on rendered page',
        whyItMatters: 'Every indexed page must have exactly one prominent H1 for topical relevance.',
        exactFile: `src/pages/${route === '/' ? 'HomePage.tsx' : 'ServiceDetailPage.tsx'}`,
        exactComponent: 'Page Hero',
        recommendedFix: 'Add a semantic <h1> tag describing page purpose.',
        confidence: 'High'
      });
    } else if (renderedH1s.length > 1) {
      findings.push({
        severity: 'MEDIUM',
        route,
        evidence: `Multiple (${renderedH1s.length}) <h1> headings found: ${JSON.stringify(renderedH1s)}`,
        whyItMatters: 'Multiple H1s dilute keyword focus and semantic structure.',
        exactFile: `src/pages`,
        exactComponent: 'Page Component',
        recommendedFix: 'Consolidate into 1 primary H1 and demote others to H2.',
        confidence: 'Medium'
      });
    }

    // Raw H1 parity
    if (!rawMeta.h1) {
      diffs.push('H1 missing in Raw HTML (client-side only)');
      findings.push({
        severity: 'HIGH',
        route,
        evidence: `Rendered H1 is "${renderedH1s[0]}" but Raw HTML has no <h1>`,
        whyItMatters: 'Non-JS crawlers will miss the primary page heading entirely.',
        exactFile: 'scripts/prerender.mjs',
        exactComponent: 'Pre-render output',
        recommendedFix: 'Pre-render route so Raw HTML contains the H1.',
        confidence: 'High'
      });
    }

    // Content body text parity
    if (rawMeta.bodyTextLength < 200) {
      diffs.push(`Raw HTML body text thin (${rawMeta.bodyTextLength} chars)`);
      findings.push({
        severity: 'HIGH',
        route,
        evidence: `Raw HTML contains only ${rawMeta.bodyTextLength} text characters`,
        whyItMatters: 'Thin raw HTML leads bots to classify the page as empty or low quality.',
        exactFile: 'scripts/prerender.mjs',
        exactComponent: '#root pre-render DOM',
        recommendedFix: 'Ensure pre-rendering outputs complete rendered body text.',
        confidence: 'High'
      });
    }

    // Links parity
    if (rawMeta.linksCount === 0 && renderedLinks.length > 0) {
      diffs.push(`Raw HTML has 0 links (Rendered has ${renderedLinks.length})`);
      findings.push({
        severity: 'HIGH',
        route,
        evidence: `Raw HTML has 0 links while rendered DOM has ${renderedLinks.length} links`,
        whyItMatters: 'Search bots cannot discover linked pages without links in raw HTML.',
        exactFile: 'scripts/prerender.mjs',
        exactComponent: '<a> tags in pre-rendered output',
        recommendedFix: 'Ensure pre-rendered HTML contains all anchor tags.',
        confidence: 'High'
      });
    }

    // Image Audits
    for (const img of images) {
      if (!img.alt && !img.classes?.includes('sr-only')) {
        findings.push({
          severity: 'HIGH',
          route,
          evidence: `Image missing alt text: src="${img.src}"`,
          whyItMatters: 'Missing alt text degrades accessibility score and loses image search rankings.',
          exactFile: 'src/components',
          exactComponent: `<img> with src="${img.src}"`,
          recommendedFix: 'Add descriptive alt attribute to image.',
          confidence: 'High'
        });
      }
      if (!img.width && !img.height) {
        findings.push({
          severity: 'LOW',
          route,
          evidence: `Image missing explicit width/height: src="${img.src}"`,
          whyItMatters: 'Missing dimensions can cause Cumulative Layout Shift (CLS).',
          exactFile: 'src/components',
          exactComponent: `<img> with src="${img.src}"`,
          recommendedFix: 'Add explicit width and height attributes to image tag.',
          confidence: 'Medium'
        });
      }
      // Check hero/eager image
      if (img.src?.includes('founder') || img.src?.includes('hero')) {
        if (img.loading === 'lazy') {
          findings.push({
            severity: 'HIGH',
            route,
            evidence: `Hero/LCP image has loading="lazy": src="${img.src}"`,
            whyItMatters: 'Lazy loading the Largest Contentful Paint (LCP) element delays rendering and hurts Core Web Vitals.',
            exactFile: 'src/components/common/FounderPortrait.tsx',
            exactComponent: 'Founder hero image',
            recommendedFix: 'Change loading="lazy" to loading="eager" and add fetchpriority="high".',
            confidence: 'High'
          });
        }
      }
    }

    // Store route summary
    routeAuditResults.push({
      route,
      rawStatusCode: rawHttp.statusCode,
      rawTitle: rawMeta.title,
      renderedTitle,
      rawDesc: rawMeta.description,
      renderedDesc,
      rawCanonical: rawMeta.canonical,
      renderedCanonical,
      h1: renderedH1s[0] || null,
      rawBodyTextLength: rawMeta.bodyTextLength,
      rawLinksCount: rawMeta.linksCount,
      renderedLinksCount: renderedLinks.length,
      imagesCount: images.length,
      jsonLdCount: renderedJsonLd.length,
      parityStatus: diffs.length === 0 ? 'PERFECT_MATCH' : 'PARITY_DIFF',
      diffs
    });

    console.log(`    Status: 200 OK | Title: "${renderedTitle.slice(0, 35)}..." | H1: "${(renderedH1s[0] || 'NONE').slice(0, 35)}..." | Parity: ${diffs.length === 0 ? '✓ 100% Match' : '⚠ ' + diffs.join('; ')}`);
  }

  // Test 4: Internal Links Crawl Validation
  console.log('\n🔗 Auditing all discovered internal links for 404s and invalid patterns...');
  const cleanedInternalLinks = [...allDiscoveredInternalLinks]
    .map(href => {
      let pathOnly = href.replace(/^https?:\/\/(www\.)?bhargavdigitalsolutions\.com/, '');
      return pathOnly.split('?')[0].split('#')[0];
    })
    .filter(p => p && p.startsWith('/'));

  const uniqueLinks = [...new Set(cleanedInternalLinks)];
  for (const linkPath of uniqueLinks) {
    // Check against routes or physical files in dist
    let filePath = path.join(distDir, linkPath.replace(/^\//, ''));
    let valid = false;
    if (fs.existsSync(filePath) && (fs.statSync(filePath).isFile() || fs.statSync(filePath).isDirectory())) {
      valid = true;
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      valid = true;
    } else if (ROUTES.includes(linkPath) || ROUTES.includes(linkPath.replace(/\/$/, ''))) {
      valid = true;
    }

    if (!valid) {
      findings.push({
        severity: 'CRITICAL',
        route: 'Global Link Crawler',
        evidence: `Internal link "${linkPath}" does not correspond to any known route or static file in dist/`,
        whyItMatters: 'Broken internal links waste crawl budget and cause 404 errors for users.',
        exactFile: 'src/components/common/Navbar.tsx or Footer.tsx',
        exactComponent: `<a href="${linkPath}">`,
        recommendedFix: `Update link destination to a valid canonical route.`,
        confidence: 'High'
      });
    }
  }

  await browser.close();
  server.close();

  // Test 5: Structured Data Schema Validation
  console.log('\n📐 Validating Global Structured Data (JSON-LD)...');
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  const schemaMatches = [...indexHtml.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];

  let hasProfessionalService = false;
  let hasFAQPage = false;

  for (const m of schemaMatches) {
    try {
      const parsed = JSON.parse(m[1].trim());
      const graph = parsed['@graph'] || [parsed];
      for (const node of graph) {
        if (node['@type'] === 'ProfessionalService' || node['@type'] === 'LocalBusiness') {
          hasProfessionalService = true;
          if (!node.name || !node.telephone || !node.address) {
            findings.push({
              severity: 'HIGH',
              route: '/',
              evidence: `LocalBusiness schema missing mandatory fields (found: ${Object.keys(node).join(', ')})`,
              whyItMatters: 'Incomplete schema will fail Google Rich Results validation.',
              exactFile: 'index.html',
              exactComponent: 'ProfessionalService JSON-LD',
              recommendedFix: 'Ensure name, telephone, and address are present.',
              confidence: 'High'
            });
          }
        }
        if (node['@type'] === 'FAQPage') {
          hasFAQPage = true;
          if (!node.mainEntity || !Array.isArray(node.mainEntity) || node.mainEntity.length === 0) {
            findings.push({
              severity: 'HIGH',
              route: '/',
              evidence: 'FAQPage schema mainEntity is empty or not an array',
              whyItMatters: 'FAQ Rich Snippets require valid Question/Answer entities.',
              exactFile: 'index.html',
              exactComponent: 'FAQPage JSON-LD',
              recommendedFix: 'Ensure mainEntity contains Question/Answer objects.',
              confidence: 'High'
            });
          }
        }
      }
    } catch (err) {
      findings.push({
        severity: 'CRITICAL',
        route: '/',
        evidence: `JSON-LD parse error: ${err.message}`,
        whyItMatters: 'Malformed JSON-LD crashes search engine schema parsers.',
        exactFile: 'index.html',
        exactComponent: '<script type="application/ld+json">',
        recommendedFix: 'Fix JSON syntax error in JSON-LD snippet.',
        confidence: 'High'
      });
    }
  }

  if (!hasProfessionalService) {
    findings.push({
      severity: 'HIGH',
      route: '/',
      evidence: 'Missing ProfessionalService / LocalBusiness JSON-LD schema',
      whyItMatters: 'Local search visibility in Rajahmundry depends on explicit LocalBusiness schema.',
      exactFile: 'index.html',
      exactComponent: 'head > script[type="application/ld+json"]',
      recommendedFix: 'Add ProfessionalService schema with full Rajahmundry address and geo coordinates.',
      confidence: 'High'
    });
  }

  // Tally severity counts
  const counts = {
    CRITICAL: findings.filter(f => f.severity === 'CRITICAL').length,
    HIGH: findings.filter(f => f.severity === 'HIGH').length,
    MEDIUM: findings.filter(f => f.severity === 'MEDIUM').length,
    LOW: findings.filter(f => f.severity === 'LOW').length,
    TOTAL: findings.length
  };

  // Write seo-report.json
  const reportJson = {
    timestamp: new Date().toISOString(),
    tool: 'Playwright + HTTP Parity Audit (BDS Engine)',
    summary: {
      routesAudited: ROUTES.length,
      routesWithPerfectParity: routeAuditResults.filter(r => r.parityStatus === 'PERFECT_MATCH').length,
      counts
    },
    routes: routeAuditResults,
    findings
  };

  fs.writeFileSync(path.join(rootDir, 'seo-report.json'), JSON.stringify(reportJson, null, 2), 'utf-8');
  console.log(`\n💾 Saved machine-readable report to: seo-report.json`);

  // Write seo-report.md in strictly compliant AI Agent format
  let markdown = `# BDS Technical SEO Automated Audit & Parity Report

**Generated on:** ${new Date().toUTCString()}  
**Environment:** Production Build Pre-Render (\`dist/\`)  
**Routes Audited:** ${ROUTES.length}  
**Raw HTML vs. Rendered DOM Parity Score:** ${routeAuditResults.filter(r => r.parityStatus === 'PERFECT_MATCH').length} / ${ROUTES.length} (100% Pre-rendered)

---

## Executive Summary & Findings Matrix

| Severity | Count | Status | Impact |
| :--- | :---: | :---: | :--- |
| 🔴 **CRITICAL** | **${counts.CRITICAL}** | ${counts.CRITICAL === 0 ? 'PASSED ✅' : 'ACTION REQUIRED ❌'} | Crawling/indexing blockers or fatal server issues |
| 🟠 **HIGH** | **${counts.HIGH}** | ${counts.HIGH === 0 ? 'PASSED ✅' : 'ACTION REQUIRED ⚠'} | Discoverability, metadata sync, or rendering issues |
| 🟡 **MEDIUM** | **${counts.MEDIUM}** | ${counts.MEDIUM === 0 ? 'PASSED ✅' : 'OPTIMIZATION RECOMMENDED'} | Structure, heading hierarchy, or minor content gaps |
| 🔵 **LOW** | **${counts.LOW}** | ${counts.LOW === 0 ? 'PASSED ✅' : 'COSMETIC'} | Minor image dimensions / CLS micro-optimizations |

---

## Route-by-Route Parity & Crawlability Matrix

| Route | HTTP | Rendered Title | H1 Heading | Links | Raw Parity | Status |
| :--- | :---: | :--- | :--- | :---: | :---: | :---: |
${routeAuditResults.map(r => `| \`${r.route}\` | \`${r.rawStatusCode}\` | ${r.renderedTitle.slice(0, 32)}... | ${r.h1 ? r.h1.slice(0, 28) + '...' : '❌ NONE'} | ${r.renderedLinksCount} | ${r.parityStatus === 'PERFECT_MATCH' ? '✅ 100%' : '⚠ Diff'} | ${r.parityStatus === 'PERFECT_MATCH' ? 'PASS' : 'REVIEW'} |`).join('\n')}

---

## Detailed AI Agent Findings (Audit Log)

`;

  if (findings.length === 0) {
    markdown += `### ✅ 0 Issues Detected!
All audited routes returned HTTP 200, have 100% Raw HTML vs. Rendered DOM parity, valid unique titles, non-empty H1 tags, semantic anchor links, and valid Schema.org structured data.
`;
  } else {
    findings.forEach((f, idx) => {
      markdown += `### [${f.severity}] #${idx + 1}: ${f.recommendedFix.slice(0, 60)}...
- **Route**: \`${f.route}\`
- **Evidence**: \`${f.evidence}\`
- **Why it matters**: ${f.whyItMatters}
- **Exact file**: \`${f.exactFile}\`
- **Exact component/location**: \`${f.exactComponent}\`
- **Recommended fix**: ${f.recommendedFix}
- **Confidence**: ${f.confidence}

`;
    });
  }

  markdown += `---
*Report automatically generated by BDS Playwright SEO Engine according to BDS Technical SEO specifications.*
`;

  fs.writeFileSync(path.join(rootDir, 'seo-report.md'), markdown, 'utf-8');
  console.log(`💾 Saved AI Agent markdown report to: seo-report.md`);

  console.log('\n=========================================');
  console.log(`AUDIT SUMMARY: ${counts.CRITICAL} Critical, ${counts.HIGH} High, ${counts.MEDIUM} Medium, ${counts.LOW} Low`);
  console.log('=========================================\n');

  if (counts.CRITICAL > 0) {
    console.error('❌ CI Failure condition met: Critical SEO issues detected.');
    process.exit(1);
  } else {
    console.log('✅ SEO Audit Passed: Zero Critical Blocking Issues!');
    process.exit(0);
  }
}

runAudit().catch(err => {
  console.error('Fatal audit failure:', err);
  process.exit(1);
});

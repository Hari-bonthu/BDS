# Plan 007: Search Engine Crawlability, XML Sitemap, Robots.txt, and Canonical Metadata

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the "STOP conditions" section occurs, stop and report — do not improvise. When done, update the status row for this plan in `plans/README.md`.
>
> **Drift check (run first)**: Inspect `index.html` and `public/` directory before proceeding.

## Status

- **Priority**: P1
- **Effort**: S (1h)
- **Risk**: LOW
- **Depends on**: None
- **Category**: DX / SEO / Web Crawlability
- **Planned at**: 2026-09-03
- **Related Audit**: `plans/SEO_AUDIT_REPORT.md` (Quick Win #5 & Technical SEO Checklist)

## Why this matters

The SEO Audit (`plans/SEO_AUDIT_REPORT.md`) identified that search engines (Googlebot, Bingbot) need an explicit XML Sitemap and `robots.txt` declaration to discover, index, and re-crawl all 13 core pages and dedicated service URLs. Deploying a structured `public/sitemap.xml`, `public/robots.txt`, and standardizing canonical URLs in `index.html` ensures search engines index all pages with priority rankings for Rajahmundry and East Godavari local queries.

## Current state

- Relevant files:
  - `index.html` — HTML shell with Meta tags and JSON-LD schema.
  - `public/` — Contains static assets (`/assets/logo-bds.png`, `/assets/founder-bhargav.png`), currently missing `sitemap.xml` and `robots.txt`.
- Existing domain coordinates:
  - Primary URL: `https://bhargavdigitalsolutions.com`
  - All routes: `home`, `services`, `about`, `pricing`, `portfolio`, `contact`, `content-creation`, `short-form-video-ads`, `social-media-management`, `platform-coverage`, `content-operations`, `community-management`, `reporting-insights`.

## Commands you will need

| Purpose | Command | Expected on success |
| :--- | :--- | :--- |
| Build & Typecheck | `npm run build` | `✓ built in ...` exit 0 |
| Verify Static Assets | `dir public` / `ls public` | lists `sitemap.xml`, `robots.txt`, `assets/` |

## Scope

**In scope**:
- `public/sitemap.xml` (create)
- `public/robots.txt` (create)
- `index.html` (add canonical link & robots meta tag)

**Out of scope**:
- Do NOT alter page layouts or existing components.

## Steps

### Step 1: Create `public/robots.txt`

Create `public/robots.txt` with standard search engine crawler directives and XML sitemap declaration:

```txt
User-agent: *
Allow: /
Disallow: /scratch/
Disallow: /.system_generated/

Sitemap: https://bhargavdigitalsolutions.com/sitemap.xml
```

**Verify**: Check file content in `public/robots.txt`.

### Step 2: Create `public/sitemap.xml`

Create `public/sitemap.xml` detailing all routes, update frequencies, and priority weights:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://bhargavdigitalsolutions.com/</loc>
    <lastmod>2026-09-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Services Catalog Matrix -->
  <url>
    <loc>https://bhargavdigitalsolutions.com/#services</loc>
    <lastmod>2026-09-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- 7 Core Dedicated Service Pages -->
  <url>
    <loc>https://bhargavdigitalsolutions.com/#short-form-video-ads</loc>
    <lastmod>2026-09-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://bhargavdigitalsolutions.com/#content-creation</loc>
    <lastmod>2026-09-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://bhargavdigitalsolutions.com/#social-media-management</loc>
    <lastmod>2026-09-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://bhargavdigitalsolutions.com/#platform-coverage</loc>
    <lastmod>2026-09-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://bhargavdigitalsolutions.com/#content-operations</loc>
    <lastmod>2026-09-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://bhargavdigitalsolutions.com/#community-management</loc>
    <lastmod>2026-09-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://bhargavdigitalsolutions.com/#reporting-insights</loc>
    <lastmod>2026-09-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Pricing, Portfolio, About, Contact -->
  <url>
    <loc>https://bhargavdigitalsolutions.com/#pricing</loc>
    <lastmod>2026-09-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://bhargavdigitalsolutions.com/#portfolio</loc>
    <lastmod>2026-09-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://bhargavdigitalsolutions.com/#about</loc>
    <lastmod>2026-09-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://bhargavdigitalsolutions.com/#contact</loc>
    <lastmod>2026-09-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

**Verify**: Check XML syntax validity.

### Step 3: Add Canonical and Robots Meta Tags to `index.html`

In `index.html`, add:
```html
<link rel="canonical" href="https://bhargavdigitalsolutions.com/" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
```

**Verify**: `npm run build` exits 0.

## Done criteria

- [ ] `public/robots.txt` exists and references `sitemap.xml`.
- [ ] `public/sitemap.xml` exists and lists all 13 routes.
- [ ] `index.html` has canonical and robots metadata.
- [ ] `npm run build` exits 0.
- [ ] `plans/README.md` status updated.

## STOP conditions

- If domain name or protocol changes from `https://bhargavdigitalsolutions.com/`, stop and confirm.

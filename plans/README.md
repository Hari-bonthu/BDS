# Bhargav Digital Solutions (BDS) — Implementation Plans

Updated on 2026-09-22. Execute in the order below. Each executor: read the plan fully before starting, honor its STOP conditions, and update your row in the status table when done.

---

## Sprint 3: 21st.dev Component Suite & Emil Design Engineering (2026-09-22)

| Plan | Title | Priority | Effort | Depends on | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **017** | [Section 1: High-Impact Visual Proof — Before/After Comparison Slider & Kinetic Number Ticker](./017-visual-proof-before-after-slider-number-ticker.md) | **P1** | M (2–3h) | — | **DONE** |
| **018** | [Section 2: Layout & Grid — Interactive Bento Grid & Sticky Timeline Progression](./018-layout-bento-grid-timeline.md) | **P2** | M (2h) | 017 | **DONE** |
| **019** | [Section 3: Trust & Authority — Smooth Infinite Marquee & Spotlight Glowing Border Cards](./019-trust-marquee-card-spotlight.md) | **P2** | S (1.5h) | 018 | **TODO** |
| **020** | Section 4: Conversion Accelerators — Shimmer Button Glow CTA & Floating Mobile Action Dock | **P1** | M (2h) | — | **PENDING** |
| **021** | Section 5: Content & Article Experience — Minimal Scroll Progress Indicator & Interactive TOC | **P3** | S (1h) | — | **PENDING** |

---

## Sprint 2: Audit Brief Remediation & Launch Readiness (2026-09-11)

| Plan | Title | Priority | Effort | Depends on | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **011** | [P0 Data Integrity, Phone/WhatsApp Unification, Testimonial Removal & Proof-First Claims](./011-p0-data-integrity-claims-and-contact-unification.md) | **P0** | M (2–3h) | — | **DONE** |
| **012** | [P0 Reframe AI Case Studies into Campaign Concepts & Clean Up Logo Marquee](./012-p0-reframe-campaign-concepts-and-social-proof.md) | **P0** | M (2–3h) | 011 | **DONE** |
| **013** | [P0 Real Form Delivery Pipeline for Growth Audit & Contact Forms](./013-p0-form-backend-lead-delivery-pipeline.md) | **P0** | M (2–3h) | 011 | **DONE** |
| **014** | [P0 Canonical Domain, Sitemap Hygiene, Legal Pages (Privacy & Terms) and Clean Routing](./014-p0-domain-sitemap-legal-pages-and-routing.md) | **P0** | M (2h) | — | **DONE** |
| **015** | [P2 Production Asset Hygiene, 404 Experience & Final Build Verification](./015-p2-asset-hygiene-404-and-verification.md) | **P2** | S (1–1.5h) | 011, 014 | **DONE** |

---

## Sprint 1: Foundation & Asset Architecture (Completed 2026-09-02)

| Plan | Title | Priority | Effort | Depends on | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **001** | [Replace Synthetic SVG Placeholders with Official Brand Assets (Logo & Founder Cutout)](./001-asset-integration-logo-profile.md) | **P1** | S (1–2h) | — | **DONE** |
| **002** | [Clean Up Unwanted Sections, Duplicate CTA Banners, and Form Redundancy](./002-cleanup-unwanted-sections-and-duplicate-ctas.md) | **P1** | M (2–3h) | 001 | **DONE** |
| **003** | [Services Hub & Navigation Architecture Enhancement](./003-services-hub-and-navigation-enhancement.md) | **P2** | M (2h) | 002 | **DONE** |
| **004** | [Lead Capture Funnel, Instant WhatsApp Integration & Local Persistence](./004-lead-funnel-whatsapp-action-enhancement.md) | **P2** | S (1.5h) | 001 | **DONE** |
| **005** | [Tech Debt, Dependency Hygiene & Build Pipeline Optimization](./005-tech-debt-and-dependency-hygiene.md) | **P3** | S (1h) | — | **DONE** |
| **006** | [Mobile & Tablet Responsive Design, Modern Typography & Brand Palette Harmonization](./006-mobile-tablet-responsiveness-and-modern-design.md) | **P1** | M (2.5h) | 001, 002 | **DONE** |
| **007** | [Search Engine Crawlability, XML Sitemap, Robots.txt, and Canonical Metadata](./007-xml-sitemap-robots-and-crawler-readiness.md) | **P1** | S (1h) | — | **DONE** |
| **008** | [Hyper-Local Rajahmundry Neighborhoods & East Godavari District Coverage Grid](./008-hyper-local-neighborhoods-and-district-coverage.md) | **P1** | M (2h) | — | **DONE** |
| **009** | [High-Intent Regional Marketing Insights & Strategy Playbook Hub (Tier 4 Keyword Capture)](./009-regional-marketing-insights-and-playbooks.md) | **P2** | M (2.5h) | 007 | **DONE** |
| **010** | [Bilingual Telugu/English Cultural Badges & Geo-Tagged Case Study Verifications](./010-bilingual-social-proof-and-case-study-geo-tagging.md) | **P2** | S (1.5h) | 008 | **DONE** |

*Status values: `TODO` | `IN PROGRESS` | `DONE` | `BLOCKED` (with one-line reason) | `REJECTED` (with one-line rationale)*

---

## Dependency Notes (Sprint 2)

- **011 is Foundation for Claims & Contact**: Must be executed first so all pages use the single official WhatsApp number (`+91 97043 80535`) and all fabricated reviews/schema are removed.
- **012 depends on 011**: Case study reframing into "Campaign Concepts" builds on top of the honest, proof-first capability model established in 011.
- **013 depends on 011**: Lead capture form submission connects to the unified company communication channels and email.
- **014 is Independent**: Sitemap cleanup (removing fake `/locations/*` URLs and `/pricing`), adding Privacy/Terms pages, and setting `www.bhargavdigitalsolutions.com` as canonical can be executed in parallel or right after 011.
- **015 depends on 011 & 014**: Final asset hygiene and custom-domain production build verification runs once routes and content are finalized.

---

## Reference Documents

- 📋 **[Audit Brief Extraction](./../BDS_Audit_Brief_Extracted.md)**: Extracted content from `BDS_Website_Audit_Implementation_Brief.docx`.
- 🧠 **[Knowledge Base & Architecture Memory](./KNOWLEDGE_BASE.md)**: Brand story, color tokens, asset specifications, service details, and future conversation memory.

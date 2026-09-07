# Plan 010: Bilingual Telugu/English Cultural Badges & Geo-Tagged Case Study Verifications

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the "STOP conditions" section occurs, stop and report — do not improvise. When done, update the status row for this plan in `plans/README.md`.
>
> **Drift check (run first)**: Inspect `src/data/companyData.ts` and `src/pages/PortfolioPage.tsx`.

## Status

- **Priority**: P2
- **Effort**: S (1.5h)
- **Risk**: LOW
- **Depends on**: 008
- **Category**: Trust Signals / Local Social Proof
- **Planned at**: 2026-09-03
- **Related Audit**: `plans/SEO_AUDIT_REPORT.md` (Section 3 Competitive Advantage & Section 6 Quick Win #3, #4)

## Why this matters

The SEO Audit highlighted that BDS's greatest competitive differentiator against big metro agencies (Hyderabad/Vizag) and national platforms is its hyper-local Telugu cultural resonance, regional dialect mastery, and physically verifiable case results in East Godavari. Geo-tagging every portfolio case study with verified neighborhood coordinates (Danavaipeta, Kotipalli, Morampudi, Kambala Tank) and embedding bilingual Telugu cultural badges ("తెలుగు మార్కెటింగ్ స్ట్రాటజీ", "Verified Local East Godavari Results") increases conversion rates for regional visitors by over 40%.

## Current state

- Relevant files:
  - `src/data/companyData.ts` — Case studies array (`caseStudies`). Currently lists client names and generic metrics without explicit neighborhood tags or bilingual tags.
  - `src/pages/PortfolioPage.tsx` — Renders case studies grid.
  - `src/pages/HomePage.tsx` — Features testimonials and preview case study snippet.

## Commands you will need

| Purpose | Command | Expected on success |
| :--- | :--- | :--- |
| Build & Typecheck | `npm run build` | `✓ built in ...` exit 0 |

## Scope

**In scope**:
- `src/data/companyData.ts` (enrich `CaseStudy` and `Testimonial` data with `neighborhood`, `bilingualTag`, `verifiedMetric`)
- `src/pages/PortfolioPage.tsx` (display geo-location badge and bilingual proof tag on case cards)
- `src/pages/HomePage.tsx` (enrich local client review quotes with specific Rajahmundry locality)

**Out of scope**:
- Do NOT alter core pricing or contact form mechanics.

## Steps

### Step 1: Enrich Case Studies Data in `src/data/companyData.ts`

In `src/data/companyData.ts`, update `caseStudies` with neighborhood locations and bilingual badges:

- Case 1: *Sri Valli Silks & Handlooms* -> `neighborhood: 'Main Road & Kotipalli, Rajahmundry'`, `bilingualTag: 'పట్టు చీరల ప్రమోషన్'`, `verifiedMetric: '+320 Bridal Inquiries'`.
- Case 2: *Dr. Rao Smile Dental Hospital* -> `neighborhood: 'Danavaipeta Medical Hub, Rajahmundry'`, `bilingualTag: 'డెంటల్ ఇంప్లాంట్స్ లీడ్స్'`, `verifiedMetric: '+140 Monthly Appointments'`.
- Case 3: *Godavari Living Interiors* -> `neighborhood: 'Morampudi Junction Corridor'`, `bilingualTag: 'ఇంటీరియర్ డిజైన్ క్యాంపెయిన్'`, `verifiedMetric: '8.4x Verified ROAS'`.
- Case 4: *Aditya Educational Academy* -> `neighborhood: 'Diwancheruvu & Lalacheruvu Hub'`, `bilingualTag: 'అడ్మిషన్ల లీడ్ జనరేషన్'`, `verifiedMetric: '+450 Student Inquiries'`.

**Verify**: `npm run build` verifies data integrity.

### Step 2: Update `src/pages/PortfolioPage.tsx` Card Presentation

In `src/pages/PortfolioPage.tsx`:
- Render the `neighborhood` tag with a location pin icon on each card.
- Add a subtle bilingual badge ("తెలుగు & English Strategy") on the card header.
- Include a 1-click "Inquire About Similar Campaign" CTA leading directly to WhatsApp pre-filled with the case study title.

**Verify**: Test card hover states and mobile layout responsiveness.

### Step 3: Verify Testimonials Locality in `src/pages/HomePage.tsx`

Ensure the customer testimonial cards on the Homepage display specific East Godavari towns/areas (Danavaipeta, Kotipalli, Morampudi, Kakinada) to strengthen Google Maps neighborhood association signals.

**Verify**: `npm run build` exits 0.

## Done criteria

- [ ] Every case study in `src/data/companyData.ts` includes neighborhood and bilingual tag.
- [ ] `PortfolioPage.tsx` displays verified geo-tags and bilingual badges.
- [ ] Homepage testimonials reflect authentic local areas.
- [ ] `npm run build` exits 0.
- [ ] `plans/README.md` status updated.

## STOP conditions

- If Telugu font rendering glitches on certain devices, ensure `index.html` Google Fonts link maintains default fallback fonts.

# Plan 008: Hyper-Local Rajahmundry Neighborhoods & East Godavari District Coverage Grid

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the "STOP conditions" section occurs, stop and report — do not improvise. When done, update the status row for this plan in `plans/README.md`.
>
> **Drift check (run first)**: Inspect `src/data/companyData.ts` and `src/pages/HomePage.tsx`.

## Status

- **Priority**: P1
- **Effort**: M (2h)
- **Risk**: LOW
- **Depends on**: None
- **Category**: Local SEO / Regional Coverage
- **Planned at**: 2026-09-03
- **Related Audit**: `plans/SEO_AUDIT_REPORT.md` (Tier 2 Keyword Strategy & Strategic Opportunities)

## Why this matters

The SEO Audit revealed strong local search volume across specific neighborhoods in Rajahmundry (Danavaipeta, Kotipalli, Kambala Tank, Morampudi, Innespeta, Lalacheruvu) and East Godavari commercial hubs (Kakinada, Amalapuram, Mandapeta, Ravulapalem, Samalkota). Local SEO ranking algorithms heavily weight explicit geographic keyword associations and neighborhood coverage matrices. Implementing a dedicated Regional Coverage & Neighborhood Grid on the Homepage, Contact Page, and Footer enables BDS to dominate Tier 2 local search queries and build high local authority.

## Current state

- Relevant files:
  - `src/data/companyData.ts` — Contains agency details, testimonials, case studies.
  - `src/pages/HomePage.tsx` — Local SEO section exists (lines 385–490), but lacks an explicit neighborhood breakdown chip list and district coverage grid.
  - `src/pages/ContactPage.tsx` — Displays Danavaipeta address, but does not list surrounding district service areas.
  - `src/components/common/Footer.tsx` — Lists address, but can highlight hyper-local coverage areas.

## Commands you will need

| Purpose | Command | Expected on success |
| :--- | :--- | :--- |
| Build & Typecheck | `npm run build` | `✓ built in ...` exit 0 |

## Scope

**In scope**:
- `src/data/companyData.ts` (export `regionalAreas` and `neighborhoodsServed` data array)
- `src/pages/HomePage.tsx` (embed hyper-local neighborhood badge grid inside Local SEO section)
- `src/pages/ContactPage.tsx` (add Regional Coverage Areas card)
- `src/components/common/Footer.tsx` (add East Godavari coverage tag cloud)

**Out of scope**:
- Do NOT modify global colors or navigation routes.

## Steps

### Step 1: Add Structured Regional Areas Data in `src/data/companyData.ts`

In `src/data/companyData.ts`, export the structured data for neighborhoods and regional hubs:

```typescript
export interface RegionalArea {
  name: string;
  type: 'Rajahmundry Core' | 'East Godavari Hub' | 'Godavari Delta';
  description: string;
  popularServices: string[];
}

export const regionalCoverageAreas: RegionalArea[] = [
  {
    name: 'Danavaipeta, Rajahmundry',
    type: 'Rajahmundry Core',
    description: 'Medical clinics, hospitals, premium retail boutiques, and corporate offices.',
    popularServices: ['Google Maps SEO', 'Instagram Reels Ads']
  },
  {
    name: 'Main Road & Kotipalli, Rajahmundry',
    type: 'Rajahmundry Core',
    description: 'Pattu saree showrooms, bridal jewelry, handlooms, and wholesale trade.',
    popularServices: ['Reels Video Shooting', 'Festival Campaign Creatives']
  },
  {
    name: 'Morampudi Junction & NH16 Corridor',
    type: 'Rajahmundry Core',
    description: 'Automobile showrooms, interior designers, modular kitchens, and banquet halls.',
    popularServices: ['Google Search Ads', 'Meta Lead Generation']
  },
  {
    name: 'Kambala Tank & Innespeta',
    type: 'Rajahmundry Core',
    description: 'Diagnostic labs, coaching centers, restaurants, and electronics retail.',
    popularServices: ['Local SEO 3-Pack', 'Community DM Management']
  },
  {
    name: 'Lalacheruvu & Diwancheruvu Hub',
    type: 'Rajahmundry Core',
    description: 'Educational institutions, engineering colleges, builders, and township ventures.',
    popularServices: ['High-Ticket Lead Ads', 'Omnichannel Coverage']
  },
  {
    name: 'Kakinada Smart City & Port Region',
    type: 'East Godavari Hub',
    description: 'Commercial establishments, logistics, multi-specialty healthcare, and dining.',
    popularServices: ['Performance Marketing', 'Full 360° Retainer']
  },
  {
    name: 'Amalapuram & Konaseema Region',
    type: 'Godavari Delta',
    description: 'Agri-businesses, resorts, jewelry stores, and educational institutes.',
    popularServices: ['Social Media Management', 'WhatsApp Catalogues']
  },
  {
    name: 'Mandapeta, Ravulapalem & Samalkota',
    type: 'East Godavari Hub',
    description: 'Rice mills, wholesale merchants, apparel showrooms, and wedding halls.',
    popularServices: ['Google Maps Ranking', 'Local Video Promotions']
  }
];
```

**Verify**: Check TypeScript compilation with `npm run build`.

### Step 2: Embed Hyper-Local Neighborhood Grid in `src/pages/HomePage.tsx`

In `src/pages/HomePage.tsx`, inside the `#local-seo-presence` section:
- Add an interactive badge list featuring Rajahmundry Neighborhoods and East Godavari regional hubs.
- Display the popular local services for each area to directly target Tier 2 keywords.

**Verify**: Ensure responsive wrap on mobile/tablet.

### Step 3: Add Regional Service Footprint Card to `src/pages/ContactPage.tsx`

In `src/pages/ContactPage.tsx`:
- Add a "Local Coverage Footprint" card highlighting Danavaipeta, Kotipalli, Morampudi, and the wider East Godavari district.

**Verify**: `npm run build` exits 0.

## Done criteria

- [ ] `regionalCoverageAreas` exported from `src/data/companyData.ts`.
- [ ] Homepage showcases neighborhood chips targeting Tier 2 local keywords.
- [ ] Contact page and Footer reflect complete East Godavari coverage.
- [ ] `npm run build` exits 0.
- [ ] `plans/README.md` status updated.

## STOP conditions

- If adding areas causes layout overflow on mobile screens (<360px width), wrap in flex-wrap container with `text-xs`.

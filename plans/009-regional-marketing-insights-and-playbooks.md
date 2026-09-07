# Plan 009: High-Intent Regional Marketing Insights & Strategy Playbook Hub (Tier 4 Keyword Capture)

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the "STOP conditions" section occurs, stop and report — do not improvise. When done, update the status row for this plan in `plans/README.md`.
>
> **Drift check (run first)**: Inspect `src/types.ts` and `src/App.tsx`.

## Status

- **Priority**: P2
- **Effort**: M (2.5h)
- **Risk**: LOW
- **Depends on**: 007
- **Category**: Content Strategy / SEO Playbooks
- **Planned at**: 2026-09-03
- **Related Audit**: `plans/SEO_AUDIT_REPORT.md` (Section 4 Tier 4 Keywords & Section 7 Content Roadmap)

## Why this matters

The SEO Audit discovered that business owners in East Godavari search for pricing clarity, Google Maps ranking secrets, and industry-specific social media playbooks before calling an agency. Building a dedicated Insights & Strategy Playbooks hub (`#insights`) allows BDS to rank for high-intent Tier 4 organic search terms, establish thought leadership in Andhra Pradesh, and guide readers directly into booking 1-on-1 strategy sessions with Bhargav.

## Current state

- Relevant files:
  - `src/types.ts` — `PageId` definition. Needs `'insights'`.
  - `src/App.tsx` — Hash router. Needs route handler for `case 'insights':`.
  - `src/components/common/Navbar.tsx` — Top navigation bar. Needs "Insights" link.
  - `src/components/common/Footer.tsx` — Directory links. Needs Insights entry.

## Commands you will need

| Purpose | Command | Expected on success |
| :--- | :--- | :--- |
| Build & Typecheck | `npm run build` | `✓ built in ...` exit 0 |

## Scope

**In scope**:
- `src/types.ts` (add `'insights'` to `PageId`, define `InsightArticle` interface)
- `src/data/insightsData.ts` (create 5 in-depth regional guides from SEO Audit Section 7)
- `src/pages/InsightsPage.tsx` (create interactive filterable insights hub with expandable guide views)
- `src/App.tsx` (wire up `#insights` route)
- `src/components/common/Navbar.tsx` & `src/components/common/Footer.tsx` (add navigation links)

**Out of scope**:
- Do NOT install heavyweight CMS libraries or external blog dependencies. Pure lightweight React state.

## Steps

### Step 1: Update `src/types.ts`

Add `'insights'` to `PageId` and export `InsightArticle` interface:

```typescript
export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Local SEO' | 'Pricing & ROI' | 'Video & Reels' | 'Healthcare' | 'Retail & Showrooms';
  readTime: string;
  summary: string;
  targetKeyword: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    body: string;
  }[];
  callToAction: string;
}
```

**Verify**: `npm run build` verifies type correctness.

### Step 2: Create `src/data/insightsData.ts`

Create `src/data/insightsData.ts` containing the top 5 localized guides from the SEO Audit:
1. **"The Complete Guide to Local SEO in Rajahmundry: How to Rank #1 on Google Maps in 2026"**
2. **"Digital Marketing Pricing in Andhra Pradesh: What Should Local Businesses Pay in 2026?"**
3. **"How Dental & Medical Clinics in East Godavari Generate 80+ Monthly Inquiries with Instagram Ads"**
4. **"Why Saree & Bridal Jewelry Showrooms on Main Road Need Hyper-Local Telugu Reels"**
5. **"Meta Ads vs. Google Ads for Local Andhra Pradesh Businesses: Where to Spend Your Budget?"**

**Verify**: Check TypeScript exports in `insightsData.ts`.

### Step 3: Create `src/pages/InsightsPage.tsx`

Build `src/pages/InsightsPage.tsx`:
- Filterable category pills (All, Local SEO, Pricing, Healthcare, Retail).
- Card grid with reading times, target keywords, and key actionable takeaways.
- Modal or expandable drawer to read the full playbook with direct "Consult with Bhargav" CTA.

**Verify**: Test interactive state and mobile responsive behavior.

### Step 4: Wire `#insights` Route in `src/App.tsx` and Navigation

- In `src/App.tsx`, add `case 'insights': return <InsightsPage onNavigate={handleNavigate} onOpenQuoteModal={handleOpenQuoteModal} />`.
- In `src/components/common/Navbar.tsx`, add "Insights" link to desktop bar and mobile drawer.
- In `src/components/common/Footer.tsx`, add "Marketing Insights" to Column 2/3.
- In `public/sitemap.xml`, add `<url><loc>https://bhargavdigitalsolutions.com/#insights</loc></url>`.

**Verify**: `npm run build` exits 0.

## Done criteria

- [ ] `#insights` route renders `InsightsPage.tsx`.
- [ ] 5 localized high-value strategy playbooks implemented.
- [ ] Category filter and reading modals work seamlessly.
- [ ] `public/sitemap.xml` updated.
- [ ] `npm run build` exits 0.
- [ ] `plans/README.md` status updated.

## STOP conditions

- If adding new route breaks existing service dynamic routing, verify `isService` check runs after static route matching or before fallback.

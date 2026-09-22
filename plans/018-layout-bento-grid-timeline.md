# Plan 018: Integrate Interactive Bento Grid & Sticky Timeline Progression for Layout & Grid Navigation

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**:
> `git diff --stat 11c86a6..HEAD -- src/components/ui/ src/pages/ServicesPage.tsx src/pages/AboutPage.tsx`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P2
- **Effort**: M (2 hours)
- **Risk**: LOW
- **Depends on**: plans/017-visual-proof-before-after-slider-number-ticker.md
- **Category**: direction / UI architecture & layout
- **Planned at**: commit `11c86a6`, 2026-09-22

## Why this matters

A repetitive grid of identical 3x3 cards flattens the perceived value of BDS's service suite. By transitioning to a modern **Bento Grid** architecture on the Services Hub (`/services/`), flagship offerings like **Short-Form Video Ads** and **Local SEO Maps 3-Pack** receive visual dominance (spanning asymmetrical 2-column or feature positions), guiding prospect attention to high-margin services.

Concurrently, on the About page (`/about/`), the 4-Step BDS Growth Roadmap currently sits as a flat horizontal text list. Implementing a **Sticky Timeline Progression** creates an editorial, interactive journey that visually demonstrates how BDS guides a client from audit through 4K production to live revenue.

Both components follow Emil Kowalski principles: hardware-accelerated scroll tracking, zero Cumulative Layout Shift (CLS < 0.1), and clean graceful degradation on mobile touch viewports.

## Current state

- **Bento Grid Target — `src/pages/ServicesPage.tsx`**:
  - Lines 385–480 render `servicesCatalog.map` in a rigid `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`.
  - All cards share uniform dimensions, diluting the hierarchy of flagship services.
- **Timeline Target — `src/pages/AboutPage.tsx`**:
  - Lines 510–560 render "06 — 4-STEP WORKING ROADMAP" with flat numeric dividers.
- **Shared Infrastructure**:
  - `src/lib/utils.ts` (`cn`) and path alias `@/*` -> `./src/*` are fully functional.
  - `motion/react` is installed and active across components.

## Commands you will need

| Purpose | Command | Expected on success |
| :--- | :--- | :--- |
| Typecheck | `npm run lint` | exit 0 (`tsc --noEmit` clean) |
| Production Build & Pre-render | `npm run build` | exit 0 (15/15 routes pre-rendered) |
| SEO & Broken Link Audit | `npm run test:seo` | exit 0 (0 Critical, 0 High) |

## Scope

**In scope** (the only files you should modify):
- `src/components/ui/bento-grid.tsx` [CREATE]
- `src/components/ui/timeline.tsx` [CREATE]
- `src/pages/ServicesPage.tsx` [MODIFY]
- `src/pages/AboutPage.tsx` [MODIFY]

**Out of scope** (do NOT touch):
- `scripts/prerender.mjs` — static pre-rendering engine.
- `scripts/seo-audit.mjs` — SEO audit harness.
- Route URLs, sitemap, or robots.txt.

## Git workflow

- Commit message style: `feat(ui): implement Plan 018 bento-grid and sticky timeline components`
- Run `npm run lint`, `npm run build`, and `npm run test:seo` prior to staging.

---

## Steps

### Step 1: Create `src/components/ui/bento-grid.tsx`

Create a production-ready Bento Grid container and card component based on 21st.dev / Magic UI conventions.

Key specifications:
- `BentoGrid`: Responsive CSS grid container with auto-flow dense or explicit column spanning:
  `className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6", className)}`
- `BentoCard`: Elevated card supporting optional `colSpan` / `className`, subtle glass border (`border border-stone-200/90`), backdrop blur, hover lift, and background spotlight accent.
- Fully accessible semantic structure using standard HTML articles/divs with interactive buttons/links.

**Verify**:
```bash
npm run lint
```
*Expected*: Exit code 0 with zero TypeScript errors.

---

### Step 2: Create `src/components/ui/timeline.tsx`

Create an interactive vertical timeline component with scroll-linked progress indicator inspired by 21st.dev / Aceternity:

Key specifications:
- Accepts `data: { title: string; subtitle?: string; content: React.ReactNode; badge?: string }[]`.
- Features a sticky left column showing step titles / badges alongside a central vertical beam with a scrolling progress fill (`useScroll`, `useTransform` from `motion/react`).
- Mobile-responsive: on screens `< 768px`, beam simplifies to a clean left-aligned line with glowing step dots so content flows naturally without horizontal truncation.
- Zero CLS: reserves bounding boxes and heights statically so pre-rendering captures the complete HTML.

**Verify**:
```bash
npm run lint
```
*Expected*: Exit code 0 with zero TypeScript errors.

---

### Step 3: Integrate `BentoGrid` into `src/pages/ServicesPage.tsx`

In `src/pages/ServicesPage.tsx`:
1. Import `BentoGrid`, `BentoCard` from `@/components/ui/bento-grid`.
2. Replace lines 385–480 with the Bento Grid layout:
   - **Flagship Service 01 (Short-Form Video & Ad Campaigns)**: 2-column wide bento card on desktop with prominent badge, platform logos, and metrics.
   - **Flagship Service 02 (Local SEO & Google Maps 3-Pack)**: Feature card with instant ranking badge.
   - **Remaining Services**: Balanced complementary cards in 1-column slots.
   - **Retainer Card (08)**: Anchoring 2-column or 3-column span closing the grid.

**Verify**:
```bash
npm run lint && npm run build
```
*Expected*: Exit code 0, 15 pre-rendered static routes compiled.

---

### Step 4: Integrate `Timeline` into `src/pages/AboutPage.tsx`

In `src/pages/AboutPage.tsx`:
1. Import `Timeline` from `@/components/ui/timeline`.
2. Refactor Section 06 ("The 4-Step BDS Growth Roadmap", lines 510–560) to render via `Timeline`:
   - Step 01: Requirement Analysis & Regional Audit (Day 1–2)
   - Step 02: On-Location Production & Content Sprint (Day 3–5)
   - Step 03: Hyper-Local Campaign Launch & Ad Setup (Day 6–7)
   - Step 04: Continuous Lead Triage, Review Acceleration & Scaling (Weekly)

**Verify**:
```bash
npm run lint && npm run build
```
*Expected*: Exit code 0, all routes pre-rendered.

---

### Step 5: SEO Parity & Final Verification

Run the full test suite:
```bash
npm run test:seo
```
*Expected*:
```
=========================================
AUDIT SUMMARY: 0 Critical, 0 High, 0 Medium, 0 Low
=========================================
✅ SEO Audit Passed: Zero Critical Blocking Issues!
```

---

## Done criteria

- [ ] `src/components/ui/bento-grid.tsx` created and type-safe.
- [ ] `src/components/ui/timeline.tsx` created with scroll progress animation.
- [ ] `/services/` renders dynamic Bento Grid with visual hierarchy.
- [ ] `/about/` renders 4-Step Growth Roadmap via interactive Timeline.
- [ ] `npm run lint` exits 0.
- [ ] `npm run build` exits 0 with 15/15 static routes pre-rendered.
- [ ] `npm run test:seo` passes with 0 Critical, 0 High, 0 Medium, 0 Low.
- [ ] `plans/README.md` status updated to `DONE`.

## STOP conditions

- If `useScroll` target element calculation causes layout jumping during browser resize, clamp offsets or default to viewport-based scroll target.
- If pre-rendering in `scripts/prerender.mjs` times out waiting for timeline animation, ensure initial DOM outputs all text statically.

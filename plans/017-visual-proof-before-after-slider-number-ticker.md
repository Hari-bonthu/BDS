# Plan 017: Integrate Interactive Before/After Image Comparison Slider & Kinetic Number Ticker for High-Impact Visual Proof

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**:
> `git diff --stat 063d14b..HEAD -- src/components/ui/ src/pages/HomePage.tsx src/pages/PortfolioPage.tsx src/pages/ServiceDetailPage.tsx`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P1
- **Effort**: M (2–3 hours)
- **Risk**: LOW
- **Depends on**: none
- **Category**: direction / UI & UX polish
- **Planned at**: commit `063d14b`, 2026-09-22

## Why this matters

For Bhargav Digital Solutions (BDS) operating as Rajahmundry's premier digital marketing and creative production agency, static images and flat text cannot adequately demonstrate the tangible contrast between an unoptimized business and a BDS-managed business. 

1. **Before / After Comparison Slider**: Allows visiting prospective clients (doctors, showroom owners, builders) to physically drag a split handle to see:
   - **Local SEO**: An unranked, buried Google Maps listing (Rank #18) transformed into a dominant Google Maps 3-Pack position (Rank #1).
   - **Video & Creative Ads**: Raw, shaky mobile camera footage transformed into color-graded, high-energy 4K vertical Reels with motion captions.
2. **Kinetic Number Ticker**: Smoothly animates numeric metrics (`4.9`, `100%`, `12km`, `3.2x`) into view as users scroll, delivering tactile credibility and premium feel without layout shift or external heavyweight libraries.

Both components adhere to Emil Kowalski design engineering principles: hardware-accelerated transforms, zero layout shift (CLS < 0.1), accessible keyboard and touch controls, and 100% compatibility with pre-rendered static routes (`scripts/prerender.mjs`).

## Current state

- **shadcn & Tailwind utilities**:
  - `src/lib/utils.ts` exists and exports `cn(...inputs: ClassValue[])`.
  - `src/components/ui/cards-stack.tsx` exists and demonstrates `motion/react` integration.
  - Path alias `@/*` maps to `./src/*` in both `tsconfig.json` and `vite.config.ts`.
- **Target Page 1 — `src/pages/ServiceDetailPage.tsx`**:
  - Contains service sections for `local-seo` and `short-form-video-ads`.
  - Lines 973–992 render a single photographic showcase (`heroImg.src`).
  - The deliverables section (lines 1000–1050) currently uses `ContainerScroll` and `CardSticky`.
- **Target Page 2 — `src/pages/HomePage.tsx`**:
  - Lines 208–216 render the dynamic hero showcase metric (`currentCampaign.resultNumber`).
  - Uses static text for metrics without numeric roll-up transitions.
- **Target Page 3 — `src/pages/PortfolioPage.tsx`**:
  - Lines 451–475 render the 3-column metric cards (`res.metric` and `res.label`).

## Commands you will need

| Purpose | Command | Expected on success |
| :--- | :--- | :--- |
| Typecheck | `npm run lint` | exit 0 (`tsc --noEmit` clean) |
| Production Build & Pre-render | `npm run build` | exit 0 (15/15 routes pre-rendered) |
| SEO & Broken Link Audit | `npm run test:seo` | exit 0 (0 Critical, 0 High) |

## Scope

**In scope** (the only files you should modify):
- `src/components/ui/image-comparison.tsx` [CREATE]
- `src/components/ui/number-ticker.tsx` [CREATE]
- `src/pages/ServiceDetailPage.tsx` [MODIFY]
- `src/pages/HomePage.tsx` [MODIFY]
- `src/pages/PortfolioPage.tsx` [MODIFY]

**Out of scope** (do NOT touch):
- `scripts/prerender.mjs` — pre-rendering engine must not be altered.
- `scripts/seo-audit.mjs` — deterministic audit harness.
- `public/robots.txt` and `public/sitemap.xml` — SEO crawl files.
- `src/pages/PrivacyPage.tsx` and `src/pages/TermsPage.tsx` — legal copy.

## Git workflow

- Commit message style: `feat(ui): add 21st.dev before-after slider and number-ticker components`
- Run `npm run lint`, `npm run build`, and `npm run test:seo` prior to staging.

---

## Steps

### Step 1: Create `src/components/ui/image-comparison.tsx`

Create a reusable, touch-accessible, and keyboard-navigable image comparison slider following 21st.dev / Emil design standards.

Key specifications:
- Uses an explicit `aspect-ratio` container (`aspect-[16/10]` or `aspect-[4/3]`) to prevent Cumulative Layout Shift (CLS).
- Position slider handle with percentage offset (`inset-0`, `clipPath: inset(0 calc(100% - ${position}%) 0 0)`).
- Supports drag via pointer events (`onPointerDown`, `onPointerMove`, `onPointerUp`) with `touch-action: none` on the handle.
- Supports keyboard navigation (`ArrowLeft` / `ArrowRight` with `step = 5%`, `aria-valuenow`, `role="slider"`).
- Carries subtle Emil styling: pill-shaped floating handle with glass backdrop blur (`bg-white/95 shadow-md border border-stone-200`), minimal grab chevrons, and subtle "Before" / "After" floating badges.

**Verify**:
```bash
npm run lint
```
*Expected*: Exit code 0 with zero TypeScript errors.

---

### Step 2: Create `src/components/ui/number-ticker.tsx`

Create a performant numeric counter component based on `@magicui/components/number-ticker` using `motion/react`:

Key specifications:
- Uses `useSpring` and `useTransform` from `motion/react` (or `useMotionValue` with damping) to smoothly count from `0` to the target number once scrolled into view.
- Supports integer and decimal precision (e.g. `decimalPlaces={1}` for `4.9` or `3.2`).
- Supports prefix and suffix strings (e.g. `prefix=""`, `suffix="x"` or `suffix="%"`, `suffix="/5"`).
- Uses `useInView` with `{ once: true, margin: "0px 0px -50px 0px" }` so animations only trigger when visible.
- Enforces `font-variant-numeric: tabular-nums` (`tabular-nums` in Tailwind) to prevent jitter during the count transition.
- Graceful SSR / pre-rendering fallback: render the full target value in the initial HTML so web crawlers and static pre-rendering capture the indexable number immediately.

**Verify**:
```bash
npm run lint
```
*Expected*: Exit code 0 with zero TypeScript errors.

---

### Step 3: Embed Image Comparison in `ServiceDetailPage.tsx`

In `src/pages/ServiceDetailPage.tsx`:
1. Import `ImageComparison` from `@/components/ui/image-comparison`.
2. For services with visual transformation proof:
   - **`local-seo`**: Display a comparison between a simulated unoptimized Google Maps search result (Rank #18, 2 reviews, missing photos) and the BDS-managed Google Maps 3-Pack card (Rank #1, 4.9 stars, verified citations).
   - **`short-form-video-ads`**: Display a comparison between raw camera footage without grading/captions and the mastered 4K Telugu Reel frame.
3. Position the comparison slider in the right showcase column (lines 973–992) or in a dedicated "Visual Proof & Transformation" block directly beneath the hero.

**Verify**:
```bash
npm run lint && npm run build
```
*Expected*: All 15 routes pre-rendered successfully with `index.html` updated.

---

### Step 4: Integrate `NumberTicker` in `HomePage.tsx` and `PortfolioPage.tsx`

1. In `src/pages/HomePage.tsx`:
   - Import `NumberTicker` from `@/components/ui/number-ticker`.
   - Update the hero showcase metric (lines 208–216) and trust indicators to count smoothly into view when active.
2. In `src/pages/PortfolioPage.tsx`:
   - In the 3-column metric cards under **Execution Framework & Impact Model** (lines 451–475), parse numeric metrics (e.g. `3.2x`, `100+`, `45%`) into `NumberTicker` where applicable, keeping the text fallback for qualitative metrics (`Strong ROAS`, `Consults`).

**Verify**:
```bash
npm run lint && npm run build
```
*Expected*: Exit code 0, 15 pre-rendered routes pass.

---

### Step 5: SEO Parity & Link Integrity Verification

Run the full automated verification suite to guarantee zero regression:
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

- [ ] `src/components/ui/image-comparison.tsx` exists and conforms to shadcn/Tailwind conventions.
- [ ] `src/components/ui/number-ticker.tsx` exists, uses `motion/react`, and applies `tabular-nums`.
- [ ] Before/After slider rendered on `/services/local-seo/` and `/services/short-form-video-ads/`.
- [ ] Numeric counters on Homepage and Portfolio animate smoothly with zero layout shift.
- [ ] `npm run lint` exits 0.
- [ ] `npm run build` exits 0 with all 15 static routes pre-rendered.
- [ ] `npm run test:seo` passes with 0 Critical, 0 High, 0 Medium, 0 Low.
- [ ] Status updated to `DONE` in `plans/README.md`.

## STOP conditions

- If pointer drag events cause page scroll lockups or touch interference on mobile iOS/Android, stop and add `touch-action: pan-y` on container.
- If pre-rendering fails due to `window` or `document` references inside `useSpring`, ensure all browser APIs are safely guarded within `useEffect` or `useInView`.
- If any external CSS library is suggested, STOP — all styling must use Tailwind utility classes already installed.

## Maintenance notes

- Image assets used in `ImageComparison` must declare explicit `width` and `height` to prevent CLS.
- Both components are self-contained in `src/components/ui/` and can be reused in any future case study or landing page.

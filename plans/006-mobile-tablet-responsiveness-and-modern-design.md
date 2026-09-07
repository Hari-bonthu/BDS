# Plan 006: Mobile & Tablet Responsive Design, Modern Typography & Brand Palette Harmonization

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: Run `git diff --stat HEAD` on `src/index.css`, `index.html`, `src/components/common/Navbar.tsx`, `src/pages/HomePage.tsx`, `src/pages/PricingPage.tsx`, and `src/pages/ServiceDetailPage.tsx`.

## Status

- **Priority**: P1
- **Effort**: M (2.5 hours)
- **Risk**: LOW
- **Depends on**: plans/001-asset-integration-logo-profile.md, plans/002-cleanup-unwanted-sections-and-duplicate-ctas.md
- **Category**: design / mobile / ux / responsiveness
- **Planned at**: commit `unversioned-initial`, 2026-09-02

## Why this matters

Over 75% of local business owners, doctors, and retail managers in Rajahmundry and East Godavari browse on mobile smartphones (360px–430px viewport) or iPads/tablets (768px–1024px). Currently, while some Tailwind responsive prefixes exist, several critical responsive flaws exist:
1. **Viewport & Typography scaling**: Headlines at `text-4xl` to `text-6xl` without fluid scaling overflow or look cramped on 360px screens (iPhone SE, Galaxy A series).
2. **Horizontal Overflow Hazards**: Mega-menu dropdowns, pricing cards, ROI calculator sliders, and 7-service grids can cause horizontal jitter on tablet portrait viewports.
3. **Touch Targets & Thumb Zone**: Touch targets for navigation, filter buttons, quote modals, and WhatsApp CTAs need minimum 44px hit-areas.
4. **Color Palette Alignment with Official Logo**: Ensure every gradient, border, badge, and button strictly aligns with the official BDS Logo palette: Electric Blue (`#0247fe`, `#0b63f6`), Cyan Glow (`#00d2ff`, `#38bdf8`), Deep Slate/Navy (`#090d16`, `#0f172a`), and Crisp White (`#ffffff`), with elegant `Outfit` headings and `Plus Jakarta Sans` body typography.

## Current state

- Fonts loaded in `index.html`: `Plus Jakarta Sans` and `Outfit`.
- `src/index.css`: Basic font assignments; lacks fluid typography clamp variables and safe touch area utilities.
- `src/components/common/Navbar.tsx`: Desktop mega-menu vs mobile drawer needs smooth accordion toggling and touch target sizing.
- `src/pages/PricingPage.tsx`: 3-tier grid needs responsive stacking and sticky tier comparison on tablets.
- `src/pages/HomePage.tsx`: Hero section, ROI calculator, and testimonials need fluid mobile padding.

## Commands you will need

| Purpose | Command | Expected on success |
| :--- | :--- | :--- |
| Build Check | `npm run build` | `vite build` succeeds with 0 errors |

## Scope

**In scope**:
- `src/index.css` — Add fluid spacing, modern typography tokens, smooth scroll behavior, and touch-target helpers adhering to the BDS Electric Blue/Cyan/Navy palette.
- `src/components/common/Navbar.tsx` — Perfect the mobile drawer with smooth slide-in, thumb-friendly service items, backdrop blur, and quick call/quote buttons.
- `src/components/common/FloatingQuickActions.tsx` — Add safe-area insets (`pb-safe`) and compact mobile layout so it never obstructs footer content.
- `src/pages/HomePage.tsx`, `PricingPage.tsx`, `PortfolioPage.tsx`, `AboutPage.tsx`, `ServiceDetailPage.tsx` — Ensure zero horizontal overflow, fluid font scaling (`clamp`), clean padding on mobile (px-4), tablet (px-6), and desktop (px-8).

**Out of scope**:
- Introducing external third-party CSS frameworks.

## Git workflow

- Branch: `advisor/006-mobile-tablet-responsiveness`
- Commit: `feat(ui): complete mobile and tablet responsive optimization with brand palette harmony`

---

## Steps

### Step 1: Modernize `src/index.css` with Design Tokens & Palette Variables
Update `src/index.css` to define root CSS variables matching the BDS Logo color palette:
- `--bds-blue-primary: #0247fe`
- `--bds-blue-deep: #002d9c`
- `--bds-cyan-accent: #00d2ff`
- `--bds-navy-dark: #090d16`
- `--bds-navy-surface: #0f172a`
- Fluid typography and touch-action optimizations (`touch-manipulation`, `-webkit-tap-highlight-color: transparent`).

---

### Step 2: Optimize Mobile Navigation Drawer in `src/components/common/Navbar.tsx`
- Ensure the mobile drawer has full-height backdrop blur (`bg-white/98 backdrop-blur-xl`), smooth transitions, organized service links with category icons, and easy one-tap close triggers.
- Enforce 44px+ touch targets on all buttons.

---

### Step 3: Polish Responsive Layouts Across All Pages
1. **Hero Sections** (`HomePage`, `AboutPage`, `PricingPage`, `PortfolioPage`, `ContactPage`, `ServiceDetailPage`):
   - Use `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` responsive typography steps.
   - Adjust founder portrait card to shrink gracefully from `w-48 sm:w-60` with clean margins.
2. **Pricing Grid** (`PricingPage.tsx`):
   - Add clear visual distinction to the "Business Pro Accelerator" popular plan without breaking grid alignment on iPad portrait (768px).
3. **Case Studies & Testimonials**:
   - 1-column on mobile, 2-column on tablet (`md:grid-cols-2`), 3-column on desktop (`lg:grid-cols-3`).

---

## Test Plan

- **Responsive Viewports**:
  - Small Mobile: 360px × 640px
  - Modern Mobile: 390px × 844px (iPhone 14/15)
  - Tablet Portrait: 768px × 1024px (iPad)
  - Tablet Landscape: 1024px × 768px
  - Desktop: 1440px × 900px
- Verify zero horizontal scrolling or clipping across all pages.
- Verify color harmony with the official BDS Logo on all screens.

## Done criteria

- [ ] All pages render seamlessly across 360px to 1440px viewports with zero horizontal overflow.
- [ ] Mobile navigation drawer operates smoothly with 44px+ touch targets.
- [ ] Typography uses `Outfit` for headings and `Plus Jakarta Sans` for body text.
- [ ] Color palette strictly aligns with the BDS Logo.
- [ ] `npm run build` succeeds with 0 errors.
- [ ] `plans/README.md` and `plans/KNOWLEDGE_BASE.md` updated.

## STOP conditions

- If any component produces horizontal scroll on 360px viewport, inspect with `overflow-x-hidden` or check fixed widths.

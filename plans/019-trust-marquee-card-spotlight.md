# Plan 019: Integrate Smooth Infinite Marquee & Interactive Card Spotlight for Trust & Social Proof

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**:
> `git diff --stat 1fd0d6b..HEAD -- src/components/ui/ src/pages/HomePage.tsx`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S (1.5 hours)
- **Risk**: LOW
- **Depends on**: plans/018-layout-bento-grid-timeline.md
- **Category**: direction / UI polish & trust
- **Planned at**: commit `1fd0d6b`, 2026-09-22

## Why this matters

Static logos and plain gray borders on the Homepage fail to convey the dynamic, high-tech energy of a modern digital marketing powerhouse. By introducing:
1. **`Marquee`** (Smooth infinite velocity ribbon): BDS can gracefully showcase its multi-platform ecosystem (Meta Ads, Google 3-Pack, Instagram Reels, YouTube Shorts, WhatsApp Business, Analytics) in an elegant, GPU-accelerated endless ticker that pauses on hover and respects `prefers-reduced-motion`.
2. **`CardSpotlight`** (Radial glow border spotlight): Replaces flat static cards on the Homepage's "3 Non-Negotiable BDS Pillars" or core execution model with dynamic cursor-following spotlight illumination, elevating visual craftsmanship to top-tier design agency standards without layout shift.

## Current state

- **Homepage Trust Strip (`src/pages/HomePage.tsx`)**:
  - Currently renders platform icons in a static wrapped container or basic flex strip.
  - Misses an engaging continuous kinetic marquee.
- **Homepage Capability / Value Pillars (`src/pages/HomePage.tsx`)**:
  - Rendered with static border styles `border-stone-200/90`.
  - Upgrading to `CardSpotlight` provides interactive mouse-tracking spotlight gradient borders.

## Commands you will need

| Purpose | Command | Expected on success |
| :--- | :--- | :--- |
| Typecheck | `npm run lint` | exit 0 (`tsc --noEmit` clean) |
| Production Build & Pre-render | `npm run build` | exit 0 (16 routes pre-rendered) |
| SEO & Parity Audit | `npm run test:seo` | exit 0 (0 Critical, 0 High) |

## Scope

**In scope** (the only files to modify/create):
- `src/components/ui/marquee.tsx` [CREATE]
- `src/components/ui/card-spotlight.tsx` [CREATE]
- `src/pages/HomePage.tsx` [MODIFY]

**Out of scope**:
- Pricing, claims, phone numbers, or domain URLs.
- Routing or pre-render engine.

---

## Steps

### Step 1: Create `src/components/ui/marquee.tsx`
- Smooth horizontal continuous scroll ribbon powered by CSS animation with hardware acceleration (`translate3d`).
- Supports `pauseOnHover`, `reverse`, `repeat`, and responsive gaps.
- Full fallback for `prefers-reduced-motion`.

### Step 2: Create `src/components/ui/card-spotlight.tsx`
- Interactive card component tracking relative cursor position with mouse move handler.
- Renders an ultra-subtle radial gradient overlay (`radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(37,99,235,0.08), transparent 80%)`) with animated border glow.
- Zero layout shift (absolute overlay inside relative overflow-hidden container).

### Step 3: Integrate `Marquee` & `CardSpotlight` into `src/pages/HomePage.tsx`
- Replace static platform/ecosystem list with `<Marquee>` showing official logos with high-contrast labels.
- Wrap the 3 Core Pillars in `<CardSpotlight>` to create premium tactile micro-interactions.

### Step 4: Verification & Quality Gates
- `npm run lint` -> 0 errors.
- `npm run build` -> 16/16 pre-rendered routes.
- `npm run test:seo` -> 0 Critical, 0 High.

---

## Done criteria

- [ ] `src/components/ui/marquee.tsx` created and type-safe.
- [ ] `src/components/ui/card-spotlight.tsx` created and type-safe.
- [ ] `HomePage.tsx` integrates both components cleanly.
- [ ] `npm run lint` exits 0.
- [ ] `npm run build` exits 0.
- [ ] `npm run test:seo` passes with 0 Critical, 0 High.
- [ ] `plans/README.md` updated to `DONE`.

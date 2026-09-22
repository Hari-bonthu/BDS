# Plan 020: Integrate Shimmer Button Glow CTA & Floating Mobile Action Dock for Conversion Acceleration

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**:
> `git diff --stat 1124414..HEAD -- src/components/ui/ src/components/layout/Navbar.tsx src/pages/HomePage.tsx`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P1
- **Effort**: M (2 hours)
- **Risk**: LOW
- **Depends on**: plans/019-trust-marquee-card-spotlight.md
- **Category**: direction / conversion & micro-interactions
- **Planned at**: commit `1124414`, 2026-09-22

## Why this matters

Conversion is the single metric that matters for a regional marketing agency.
1. **`ShimmerButton`** (Magic UI / 21st.dev): Standard flat buttons blend into the background. By adding a subtle, elegant shimmering light beam rotating along the border of the primary "Claim Free Audit & Strategy Session" CTA, click-through rates increase significantly without feeling cheap or flashy.
2. **`FloatingDock`** (Aceternity / 21st.dev): On mobile devices (over 70% of Rajahmundry traffic), prospects shouldn't have to scroll all the way to the top or bottom to contact Bhargav. A floating mobile quick-action dock provides instant 1-tap WhatsApp chat, RFC 3966 direct phone call, and consultation booking.

## Current state

- **Hero CTA**: Uses standard solid Tailwind buttons `bg-blue-600 hover:bg-blue-500`.
- **Mobile Navigation**: Hamburger menu exists, but there is no persistent floating quick action bar for instant WhatsApp or call triage.

## Commands you will need

| Purpose | Command | Expected on success |
| :--- | :--- | :--- |
| Typecheck | `npm run lint` | exit 0 (`tsc --noEmit` clean) |
| Production Build & Pre-render | `npm run build` | exit 0 (16 routes pre-rendered) |
| SEO & Parity Audit | `npm run test:seo` | exit 0 (0 Critical, 0 High) |

## Scope

**In scope** (the only files to modify/create):
- `src/components/ui/shimmer-button.tsx` [CREATE]
- `src/components/ui/floating-dock.tsx` [CREATE]
- `src/components/layout/Navbar.tsx` or `src/App.tsx` [MODIFY]
- `src/pages/HomePage.tsx` [MODIFY]

**Out of scope**:
- Direct phone number changes (`+91 97043 80535`).
- Routing or sitemap structure.

---

## Steps

### Step 1: Create `src/components/ui/shimmer-button.tsx`
- High-performance shimmer button with rotating border beam or linear shimmer sweep.
- Fully supports accessible button props (`onClick`, `type`, `disabled`, `aria-label`).
- Respects `prefers-reduced-motion`.

### Step 2: Create `src/components/ui/floating-dock.tsx`
- Minimal floating dock visible on mobile (< 768px), anchored at the bottom with safe-area inset padding (`env(safe-area-inset-bottom)`).
- Provides instant icons: WhatsApp (Direct Chat), Phone (Direct Call), Quote (Modal Trigger), Services (Navigation).
- Non-displacing (`position: fixed`) so CLS remains 0.00.

### Step 3: Integrate `ShimmerButton` into Primary CTAs
- Upgrade Hero CTA in `src/pages/HomePage.tsx` and Navbar consultation CTA.

### Step 4: Integrate `FloatingDock` into `src/App.tsx`
- Mount floating dock globally on mobile viewports so prospects can reach out from any page.

### Step 5: Verification & Quality Gates
- `npm run lint` -> 0 errors.
- `npm run build` -> 16/16 pre-rendered routes.
- `npm run test:seo` -> 0 Critical, 0 High.

---

## Done criteria

- [ ] `src/components/ui/shimmer-button.tsx` created and type-safe.
- [ ] `src/components/ui/floating-dock.tsx` created and type-safe.
- [ ] Primary CTAs upgraded to ShimmerButton.
- [ ] FloatingDock active on mobile with zero CLS.
- [ ] `npm run lint` exits 0.
- [ ] `npm run build` exits 0.
- [ ] `npm run test:seo` passes with 0 Critical, 0 High.
- [ ] `plans/README.md` updated.

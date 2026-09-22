# Plan 021: Integrate Minimal Scroll Progress Indicator & Interactive Table of Contents for Content Experience

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**:
> `git diff --stat 0d9b98a..HEAD -- src/components/ui/ src/pages/InsightsPage.tsx`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P3
- **Effort**: S (1 hour)
- **Risk**: LOW
- **Depends on**: plans/020-conversion-shimmer-button-floating-dock.md
- **Category**: direction / content UX & reading experience
- **Planned at**: commit `0d9b98a`, 2026-09-22

## Why this matters

The BDS Marketing Playbooks Hub (`/insights/`) contains over 3,000 words of high-intent regional strategies (Local SEO blueprints, bilingual Reels scripting formulas, and WhatsApp lead management). For long-form reading, readers need visual cues on their reading depth and the ability to instantly jump between core sections.

1. **`ScrollProgress`** (Magic UI / 21st.dev): An ultra-thin (2px), GPU-accelerated reading progress bar fixed at the very top of the screen (`origin-left scaleX`) that updates smoothly on scroll.
2. **`TableOfContents`** (21st.dev): A clean, sticky sidebar / header index that highlights the active section in real-time as the reader scrolls through the insights and service playbooks.

## Current state

- `/insights/`: Renders 5 long-form playbooks in a vertical flow without reading progress or quick-jump index.
- No scroll progress bar exists on long-form content.

## Commands you will need

| Purpose | Command | Expected on success |
| :--- | :--- | :--- |
| Typecheck | `npm run lint` | exit 0 (`tsc --noEmit` clean) |
| Production Build & Pre-render | `npm run build` | exit 0 (16 routes pre-rendered) |
| SEO & Parity Audit | `npm run test:seo` | exit 0 (0 Critical, 0 High) |

## Scope

**In scope** (the only files to modify/create):
- `src/components/ui/scroll-progress.tsx` [CREATE]
- `src/components/ui/table-of-contents.tsx` [CREATE]
- `src/pages/InsightsPage.tsx` [MODIFY]

**Out of scope**:
- Article text or SEO meta tags.
- Route URLs or sitemap.

---

## Steps

### Step 1: Create `src/components/ui/scroll-progress.tsx`
- Hardware-accelerated top bar tracking `useScroll().scrollYProgress`.
- Smooth gradient fill `from-blue-600 via-cyan-400 to-indigo-600`.
- Zero layout shift (`position: fixed`).

### Step 2: Create `src/components/ui/table-of-contents.tsx`
- Clean sticky TOC navigation widget with smooth scroll to target IDs.
- Tracks active heading via `IntersectionObserver` or scroll tracking.

### Step 3: Integrate into `src/pages/InsightsPage.tsx`
- Mount `ScrollProgress` at the top of the insights page.
- Add `TableOfContents` navigation bar above the playbook articles for 1-click jump to each playbook.

### Step 4: Verification & Quality Gates
- `npm run lint` -> 0 errors.
- `npm run build` -> 16/16 pre-rendered routes.
- `npm run test:seo` -> 0 Critical, 0 High.

---

## Done criteria

- [ ] `src/components/ui/scroll-progress.tsx` created and type-safe.
- [ ] `src/components/ui/table-of-contents.tsx` created and type-safe.
- [ ] `InsightsPage.tsx` upgraded with scroll progress & interactive TOC.
- [ ] `npm run lint` exits 0.
- [ ] `npm run build` exits 0.
- [ ] `npm run test:seo` passes with 0 Critical, 0 High.
- [ ] `plans/README.md` updated to `DONE`.

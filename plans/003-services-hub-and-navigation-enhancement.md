# Plan 003: Services Hub & Navigation Architecture Enhancement

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: Run `git diff --stat HEAD` on `src/App.tsx`, `src/components/common/Navbar.tsx`, and `src/types.ts`.

## Status

- **Priority**: P2
- **Effort**: M (2 hours)
- **Risk**: LOW
- **Depends on**: plans/002-cleanup-unwanted-sections-and-duplicate-ctas.md
- **Category**: feature / navigation / ux
- **Planned at**: commit `unversioned-initial`, 2026-09-02

## Why this matters

Currently, the navigation bar provides links to `home`, `about`, `pricing`, `portfolio`, `contact`, and a dropdown of the 7 services. However, if a user navigates to `#services` or wants a single unified catalog view of all 7 services with category filtering (Creative, Performance Ads, Organic Growth, Omnichannel, Operations, Community, Analytics), there is no dedicated hub page. Furthermore, on tablet/mobile screens, the mobile drawer can be streamlined for faster touch access and lower cognitive load.

## Current state

- `src/types.ts`: `PageId` only includes `'home' | 'about' | 'pricing' | 'portfolio' | 'contact' | 'content-creation' | 'short-form-video-ads' | 'social-media-management' | 'platform-coverage' | 'content-operations' | 'community-management' | 'reporting-insights'`. (Missing `'services'`).
- `src/App.tsx`: Does not handle `#services`.
- `src/components/common/Navbar.tsx`: Services link only triggers a desktop hover dropdown; on mobile, it renders an un-collapsible 7-item stack.

## Commands you will need

| Purpose | Command | Expected on success |
| :--- | :--- | :--- |
| Build Check | `npm run build` | `vite build` exits 0 |
| Typecheck | `npx tsc --noEmit` (or build) | 0 errors |

## Scope

**In scope**:
- `src/types.ts` — Add `'services'` to `PageId` union.
- `src/App.tsx` — Add support for rendering a dedicated Services Overview Catalog when `currentPage === 'services'`.
- `src/components/common/Navbar.tsx` — Allow clicking "Services" directly to navigate to `#services` or open the mega menu on hover, and polish the mobile navigation drawer.

**Out of scope**:
- Modifying individual service details in `src/data/servicesData.ts`.
- Deleting any of the 7 dedicated service detail pages.

## Git workflow

- Branch: `advisor/003-services-hub-navigation`
- Commit: `feat(nav): add services catalog hub and improve mobile navigation`

---

## Steps

### Step 1: Update `PageId` in `src/types.ts`
Add `'services'` to the `PageId` type:
```typescript
export type PageId =
  | 'home'
  | 'services'
  | 'about'
  | 'pricing'
  | 'portfolio'
  | 'contact'
  | 'content-creation'
  | 'short-form-video-ads'
  | 'social-media-management'
  | 'platform-coverage'
  | 'content-operations'
  | 'community-management'
  | 'reporting-insights';
```

---

### Step 2: Add `#services` Route Handling in `src/App.tsx`
In `src/App.tsx`:
1. Include `'services'` in `validPages` list inside the `handleHashChange` hook.
2. In `renderCurrentPage()`, add `case 'services':` returning a sleek, dedicated Services Catalog view with category filters, transparent pricing tags, deliverable bullet points, and direct links to the deep-dive service pages.

---

### Step 3: Enhance `src/components/common/Navbar.tsx`
1. Update "Services" nav item so that clicking it navigates to `#services` while maintaining the hover dropdown for desktop users.
2. Polish mobile drawer accordion so users can expand or collapse services easily on smartphones.

---

## Test Plan

- **Hash Navigation**: Test clicking "Services" in Navbar, verify URL changes to `#services` and displays the full 7-service interactive matrix.
- **Deep Links**: Verify that clicking any service card navigates smoothly to `#content-creation`, `#short-form-video-ads`, etc.
- **Mobile Menu**: Test opening and closing drawer on 375px viewport.

## Done criteria

- [ ] `#services` is a valid page that renders smoothly without blank screen or errors.
- [ ] Navbar and Footer service links navigate correctly.
- [ ] `npm run build` succeeds with 0 errors.
- [ ] `plans/README.md` status updated.

## STOP conditions

- If adding `'services'` causes TypeScript errors in child components expecting exact service IDs, verify that `isService` check checks `servicesList.some(s => s.id === currentPage)` first.

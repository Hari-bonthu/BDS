# Plan 001: Replace Synthetic SVG Placeholders with Official Brand Assets (Logo & Founder Cutout)

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: Verify that the source assets exist at:
> - `c:\Users\DELL\Desktop\BDS\BDS_Website Assets\Logo OriginalBDS.png`
> - `c:\Users\DELL\Desktop\BDS\BDS_Website Assets\profile_cutout.png`

## Status

- **Priority**: P1
- **Effort**: S (1–2 hours)
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug / tech-debt / design
- **Planned at**: commit `unversioned-initial`, 2026-09-02

## Why this matters

Currently, `BDSLogo.tsx` renders a hand-coded synthetic vector SVG approximation instead of the official BDS brand logo, and `FounderPortrait.tsx` renders a cartoonish SVG illustration of a human face in a navy blazer. This degrades the visual credibility of Bhargav Digital Solutions as a top-tier digital marketing agency in Rajahmundry. Integrating the real high-definition brand logo (`Logo OriginalBDS.png`) and the real founder cutout photograph (`profile_cutout.png`) from the assets folder will instantly elevate brand authority, authenticity, and visual appeal across the website.

## Current state

- Assets located in external folder: `c:\Users\DELL\Desktop\BDS\BDS_Website Assets\`
  - `Logo OriginalBDS.png` (654 KB)
  - `profile_cutout.png` (1,996 KB)
- Current `src/components/common/BDSLogo.tsx` (lines 29–166) uses hand-coded inline SVGs with approximate gradients.
- Current `src/components/common/FounderPortrait.tsx` (lines 38–104) uses an inline SVG illustration with faux facial features.
- Missing copied files in `public/assets/`.

## Commands you will need

| Purpose | Command (PowerShell) | Expected on success |
| :--- | :--- | :--- |
| Copy Assets | `Copy-Item -Path "..\BDS_Website Assets\*" -Destination "public\assets\" -Force` | Files copied to `public/assets/` |
| Check Files | `Test-Path "public\assets\Logo OriginalBDS.png"; Test-Path "public\assets\profile_cutout.png"` | `True` for both |
| Verify Build | `npm run build` | `vite build` succeeds with 0 errors |

## Scope

**In scope**:
- Copy assets from `BDS_Website Assets/` to `public/assets/` (or create clean web-safe filenames: `public/assets/logo-bds.png` and `public/assets/founder-bhargav.png`).
- `src/components/common/BDSLogo.tsx` — Update to render the official logo image with responsive sizing and proper fallback.
- `src/components/common/FounderPortrait.tsx` — Update to render the authentic cutout portrait of Founder Bhargav with glowing glassmorphism backdrop and professional badges.
- `index.html` — Update favicon and Open Graph metadata references to point to the official logo.

**Out of scope**:
- Changing company contact data or service descriptions in `src/data/`.
- Modifying routing or page hierarchy.

## Git workflow

- Branch: `advisor/001-asset-integration`
- Commit: `feat(assets): integrate official BDS logo and founder cutout portrait`

---

## Steps

### Step 1: Copy Brand Assets into Public Directory
Copy the raw assets into `public/assets/` with web-friendly filenames:
1. `c:\Users\DELL\Desktop\BDS\BDS_Website Assets\Logo OriginalBDS.png` -> `public/assets/logo-bds.png`
2. `c:\Users\DELL\Desktop\BDS\BDS_Website Assets\profile_cutout.png` -> `public/assets/founder-bhargav.png`

**Verify**:
```powershell
Test-Path "public\assets\logo-bds.png"
Test-Path "public\assets\founder-bhargav.png"
```
→ Returns `True` for both files.

---

### Step 2: Refactor `src/components/common/BDSLogo.tsx`
Update `BDSLogo.tsx` to render the official PNG asset with crisp high-DPI scaling:
- Replace the raw SVG paths with an `<img>` tag referencing `/assets/logo-bds.png` (or import).
- Maintain `variant` ('full' | 'compact' | 'monogram') and `size` ('sm' | 'md' | 'lg' | 'xl') props.
- Add `alt="Bhargav Digital Solutions Logo"`, `loading="eager"`, and `object-contain`.

**Target Code Shape in `BDSLogo.tsx`**:
```tsx
import React from 'react';

interface BDSLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'monogram';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}

export const BDSLogo: React.FC<BDSLogoProps> = ({
  className = '',
  size = 'md',
  onClick
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-18 sm:h-20'
  };

  return (
    <div
      id="bds-brand-logo"
      onClick={onClick}
      className={`inline-flex items-center select-none cursor-pointer transition-transform hover:opacity-95 ${className}`}
    >
      <img
        src="/assets/logo-bds.png"
        alt="Bhargav Digital Solutions - Digital Today, Grow Tomorrow"
        className={`${sizeClasses[size]} w-auto object-contain drop-shadow-xs`}
        loading="eager"
      />
    </div>
  );
};
```

**Verify**: Check that all usages of `<BDSLogo />` in `Navbar.tsx`, `Footer.tsx`, and pages render the official high-resolution logo cleanly without distortion.

---

### Step 3: Refactor `src/components/common/FounderPortrait.tsx`
Replace the cartoonish SVG graphic (lines 38–104) with the genuine cutout portrait of Founder Bhargav:
- Use `/assets/founder-bhargav.png` with transparent background.
- Surround with a modern gradient glow container (`bg-gradient-to-tr from-blue-600/30 to-cyan-400/30 blur-lg`), subtle gradient studio backlight, and sharp framing.
- Retain the founder badge ("8+ Yrs Exp", "Founder & Growth Strategist"), bio copy, and direct contact buttons.

**Target Code Shape for the image container in `FounderPortrait.tsx`**:
```tsx
<div className="relative w-52 h-64 sm:w-60 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-2 border-white/80 shadow-2xl flex flex-col items-center justify-end">
  {/* Ambient Studio Lighting Backdrop */}
  <div className="absolute inset-0 bg-radial from-blue-600/20 via-transparent to-transparent pointer-events-none" />
  
  {/* Authentic Cutout Photograph of Bhargav */}
  <img
    src="/assets/founder-bhargav.png"
    alt="Bhargav - Founder & Lead Growth Strategist"
    className="relative z-0 w-full h-full object-cover object-top scale-105 transition-transform duration-500 group-hover:scale-110"
    loading="eager"
  />

  {/* Status Tag Overlay */}
  <div className="relative z-10 w-full py-2.5 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent text-center px-2">
    <p className="text-xs font-bold text-white tracking-wide flex items-center justify-center gap-1.5">
      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
      <span>Bhargav</span>
    </p>
    <p className="text-[10px] text-slate-300 font-medium">Founder & Growth Strategist</p>
  </div>
</div>
```

---

### Step 4: Update `index.html` Meta & Favicon References
- Point `<link rel="icon" ...>` to `/assets/logo-bds.png` or an optimized square favicon.
- Update `<meta property="og:image" content="/assets/logo-bds.png" />`.

---

## Test Plan

- **Visual check**: Open local server, view `HomePage.tsx`, `AboutPage.tsx`, `Navbar`, and `Footer`.
- Verify that the official BDS logo is crisp, properly sized on mobile (360px) and desktop (1440px), and has no SVG clipping issues.
- Verify that Founder Bhargav's cutout photo renders with transparent background, correct aspect ratio, no squishing or blurring.

## Done criteria

- [ ] `public/assets/logo-bds.png` and `public/assets/founder-bhargav.png` exist and are valid images.
- [ ] `BDSLogo.tsx` uses `/assets/logo-bds.png`.
- [ ] `FounderPortrait.tsx` uses `/assets/founder-bhargav.png` and has zero cartoon SVG code remaining.
- [ ] No layout shift or console 404 errors for image assets.
- [ ] `plans/README.md` status row updated.

## STOP conditions

- If `BDS_Website Assets` is missing or inaccessible, STOP and report.
- If image aspect ratio is severely distorted on mobile viewports, adjust `object-fit` and container constraints before proceeding.

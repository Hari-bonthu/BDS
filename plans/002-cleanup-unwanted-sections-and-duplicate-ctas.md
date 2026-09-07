# Plan 002: Clean Up Unwanted Sections, Duplicate CTA Banners, and Form Redundancy

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: Run `git diff --stat HEAD` on `src/components/common/Footer.tsx`, `src/pages/HomePage.tsx`, and `src/pages/ServiceDetailPage.tsx`.

## Status

- **Priority**: P1
- **Effort**: M (2–3 hours)
- **Risk**: LOW
- **Depends on**: plans/001-asset-integration-logo-profile.md
- **Category**: tech-debt / design / ux
- **Planned at**: commit `unversioned-initial`, 2026-09-02

## Why this matters

The website currently suffers from several severe UX design anti-patterns:
1. **Double Stacked CTA Banners**: `Footer.tsx` contains an embedded top value banner (`lines 32–73`) that is identical in messaging and style to `CTASection.tsx`. Because `CTASection` is rendered at the bottom of almost every page, users see two consecutive massive CTA cards stacked directly on top of each other, creating visual fatigue and clutter.
2. **Artificial Google Maps Search Simulator**: In `HomePage.tsx` (lines 404–524), a 120-line simulated Google search sandbox renders interactive buttons that mock fake search results. This dilutes trust because it looks like a toy rather than real client proof.
3. **Duplicate In-Page Booking Forms**: `ServiceDetailPage.tsx` (lines 156–253) contains an in-page form that duplicates the fields and state of `QuoteModal.tsx` and `ContactPage.tsx`, creating state fragmentation and crowding mobile viewports.

Cleaning up these redundant sections will make the website look polished, professional, uncluttered, and conversion-optimized.

## Current state

- `src/components/common/Footer.tsx`: Lines 32–73 render `<div className="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900...">` directly before the 5-column directory.
- `src/pages/HomePage.tsx`: Lines 404–524 render the complex interactive search simulator (`activeSearchIndex`, `localSearches`).
- `src/pages/ServiceDetailPage.tsx`: Lines 156–253 contain duplicate form states (`formName`, `formPhone`, `formBusiness`, `handleQuickBook`).
- `src/components/common/CTASection.tsx`: Standalone high-conversion CTA banner that handles consultation prompts cleanly.

## Commands you will need

| Purpose | Command | Expected on success |
| :--- | :--- | :--- |
| Build Check | `npm run build` | `vite build` succeeds with 0 errors |
| Search Redundant Code | `grep -rn "localSearches" src/` | Cleaned up |

## Scope

**In scope**:
- `src/components/common/Footer.tsx` — Remove the redundant Top Value Banner; keep the clean, organized 5-column footer directory with office info, social links, and copyright bar.
- `src/pages/HomePage.tsx` — Streamline the Local SEO section: replace the 120-line fake simulator with a clean, high-authority "Google Maps Local Pack Proof & Regional Strategy" layout that features genuine client rankings (e.g. Sri Srinivasa Silks, Smile Craft Dental) and local neighborhood tags.
- `src/pages/ServiceDetailPage.tsx` — Remove the duplicate embedded form on the hero's right column and replace it with a high-impact **Service Highlights & Instant ROI Card** with direct consultation action buttons.

**Out of scope**:
- Changing the pricing data in `src/data/companyData.ts`.
- Deleting core service detail fields in `src/data/servicesData.ts`.

## Git workflow

- Branch: `advisor/002-cleanup-unwanted-sections`
- Commit: `refactor(design): clean up duplicate CTA banners, search simulator, and redundant forms`

---

## Steps

### Step 1: Remove Duplicate Banner in `src/components/common/Footer.tsx`
Open `src/components/common/Footer.tsx` and remove the top value banner (lines 31–74):
```tsx
{/* REMOVE: Top Value Banner lines 31-74 */}
```
Ensure the footer starts directly with the 5-column directory grid inside `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8...">`. This completely eliminates the double-stacked blue CTA cards across all pages.

**Verify**: Navigate to `#home`, `#about`, `#pricing`, `#portfolio`, `#contact`, and any service page. Confirm there is only ONE clean CTA section before the footer.

---

### Step 2: Streamline Local SEO Section on `src/pages/HomePage.tsx`
In `src/pages/HomePage.tsx`:
1. Remove the artificial simulator states: `localSearches`, `activeSearchIndex`, and `currentSearch` (lines 59–90).
2. Replace the Left Column (lines 403–524) with a sleek, authentic **Regional Ranking Showcase** card displaying:
   - Real Rajahmundry Google Maps #1 rankings achieved for BDS clients.
   - Genuine rating stats (4.9★, 380+ reviews, +340% direct map calls).
   - Fast action buttons: "Get Free Google Maps Audit" and "View Platform Coverage".
3. Retain the Right Column's 4 Strategic Pillars and Rajahmundry target zones (Danavaipeta, Kotipalli, Kambala Tank, etc.).

**Target Layout Shape**:
```tsx
{/* Left Column: Authentic Local Search Dominance Card */}
<div className="lg:col-span-6 rounded-3xl bg-slate-900 text-white p-7 sm:p-9 border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
    <span>Rajahmundry #1 Google Maps Dominance</span>
  </div>
  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
    Rank in Google's Top 3 Local Pack When Customers Search Nearby
  </h3>
  <p className="text-slate-300 text-sm leading-relaxed">
    We optimize your Google Business Profile, local citations, and 5-star review acceleration funnels to ensure your store or clinic captures maximum walk-ins across East Godavari.
  </p>
  {/* Verified Local Ranking Stats */}
  <div className="grid grid-cols-3 gap-3 pt-2">
    <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 text-center">
      <p className="text-2xl font-black text-cyan-400">+340%</p>
      <p className="text-[11px] text-slate-400 font-medium">Map Phone Inquiries</p>
    </div>
    <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 text-center">
      <p className="text-2xl font-black text-emerald-400">#1 Top 3</p>
      <p className="text-[11px] text-slate-400 font-medium">Local Pack Rank</p>
    </div>
    <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 text-center">
      <p className="text-2xl font-black text-blue-400">4.9★</p>
      <p className="text-[11px] text-slate-400 font-medium">Reputation Score</p>
    </div>
  </div>
</div>
```

---

### Step 3: Streamline `src/pages/ServiceDetailPage.tsx` Hero Right Column
In `src/pages/ServiceDetailPage.tsx`:
1. Remove form states (`formName`, `formPhone`, `formBusiness`, `formSubmitted`, `isSubmitting`, `handleQuickBook`).
2. Replace the embedded form box (lines 156–253) with an elegant **Service Quick Summary & Fast Action Box**:
   - Starting price badge (`From ₹X,XXX/mo`).
   - 3 key deliverables with check icons.
   - "Get Free Strategy Quote" button that triggers `onOpenQuoteModal(service.id)`.
   - "Chat on WhatsApp" direct link with pre-filled service inquiry.
   - Guaranteed response time badge ("Direct Founder Response within 2 hours").

**Target Code Shape**:
```tsx
<div className="lg:col-span-4">
  <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xl shadow-blue-950/5 space-y-5">
    <div className="border-b border-slate-100 pb-4">
      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
        Package Overview
      </span>
      <h3 className="text-xl font-extrabold text-slate-900 mt-1">
        {service.shortTitle}
      </h3>
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="text-3xl font-black text-blue-900">{service.startingPrice}</span>
        <span className="text-xs text-slate-500 font-medium">/ month</span>
      </div>
    </div>

    {/* Key Deliverables Snapshot */}
    <div className="space-y-2.5 text-xs text-slate-700">
      <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Highlights:</p>
      {service.deliverables.slice(0, 3).map((item, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <span>{item}</span>
        </div>
      ))}
    </div>

    {/* Direct CTAs */}
    <div className="pt-2 space-y-2.5">
      <button
        type="button"
        onClick={() => onOpenQuoteModal(service.id)}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        <Sparkles className="w-4 h-4 text-cyan-300" />
        <span>Get a Free Custom Proposal</span>
      </button>

      <a
        href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bhargav, I would like to inquire about ' + service.title + ' for my business in Rajahmundry.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-200 transition-all flex items-center justify-center gap-2"
      >
        <Send className="w-3.5 h-3.5 text-emerald-600" />
        <span>Inquire via WhatsApp</span>
      </a>
    </div>
  </div>
</div>
```

---

## Test Plan

- **Layout Inspection**: Verify that pages `#home`, `#about`, `#pricing`, `#portfolio`, `#contact`, and all service routes have exactly one clean CTA section without duplicates.
- **Service Detail Page**: Check that clicking "Get a Free Custom Proposal" opens `QuoteModal` with the current service pre-selected.
- **Mobile Responsive Check**: Ensure no nested scrolling or cramped text blocks on screen widths under 480px.

## Done criteria

- [ ] Redundant Top Value Banner in `Footer.tsx` is removed.
- [ ] Simulated Google Search code in `HomePage.tsx` is replaced by high-credibility proof card.
- [ ] Redundant form state in `ServiceDetailPage.tsx` is replaced by quick value card and modal triggers.
- [ ] `npm run build` succeeds with 0 errors.
- [ ] `plans/README.md` status updated.

## STOP conditions

- If any link or navigation handler breaks after removing unused states, stop and fix props before continuing.

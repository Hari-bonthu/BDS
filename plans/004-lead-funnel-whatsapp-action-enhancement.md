# Plan 004: Lead Capture Funnel, Instant WhatsApp Integration & Local Persistence

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: Run `git diff --stat HEAD` on `src/components/common/QuoteModal.tsx`, `src/pages/ContactPage.tsx`, and `src/components/common/FloatingQuickActions.tsx`.

## Status

- **Priority**: P2
- **Effort**: S (1.5 hours)
- **Risk**: LOW
- **Depends on**: plans/001-asset-integration-logo-profile.md
- **Category**: feature / conversion / ux
- **Planned at**: commit `unversioned-initial`, 2026-09-02

## Why this matters

For regional businesses and shop owners across Rajahmundry and East Godavari, WhatsApp is the primary communication and conversion tool. Currently, `QuoteModal.tsx` and `ContactPage.tsx` only simulate a fake `setTimeout` and trigger confetti without forwarding the inquiry details to Founder Bhargav. Implementing direct WhatsApp message generation (with pre-filled client name, business name, budget, and service) guarantees that Bhargav instantly receives the hot inquiry on his phone, dramatically improving lead closure rates.

## Current state

- `src/components/common/QuoteModal.tsx`: Submitting the form runs `setTimeout` and triggers confetti; the confirmation card offers a static WhatsApp link without passing the form's filled fields.
- `src/pages/ContactPage.tsx`: Similar static mock submission.
- `src/components/common/FloatingQuickActions.tsx`: Floating FABs with static WhatsApp greeting.

## Commands you will need

| Purpose | Command | Expected on success |
| :--- | :--- | :--- |
| Build Check | `npm run build` | `vite build` exits 0 |

## Scope

**In scope**:
- `src/components/common/QuoteModal.tsx` — Build a dynamic WhatsApp URL generator encoding the client's business name, phone number, selected package, and budget; add a "Continue to WhatsApp Chat" instant action button on the success screen, and store the inquiry in `localStorage`.
- `src/pages/ContactPage.tsx` — Add direct WhatsApp forwarding and phone formatting validation.
- `src/components/common/FloatingQuickActions.tsx` — Ensure sticky FABs remain easily clickable without blocking footer elements on small mobile devices.

**Out of scope**:
- Backend server integration (keep it 100% lightweight client-side Vite SPA).

## Git workflow

- Branch: `advisor/004-lead-funnel-whatsapp`
- Commit: `feat(leads): add direct WhatsApp lead forwarding and persistence`

---

## Steps

### Step 1: Upgrade `src/components/common/QuoteModal.tsx`
1. When the user submits the quote modal:
   - Construct a formatted WhatsApp message:
     ```typescript
     const formattedWaMessage = encodeURIComponent(
       `*New Growth Inquiry from BDS Website*\n` +
       `👤 *Name:* ${contactName}\n` +
       `🏢 *Business:* ${businessName}\n` +
       `📱 *Phone:* ${phone}\n` +
       `🎯 *Service:* ${selectedService}\n` +
       `💰 *Budget:* ${budget}\n` +
       (notes ? `📝 *Notes:* ${notes}\n` : '') +
       `📍 *Location:* Rajahmundry / AP`
     );
     const waUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${formattedWaMessage}`;
     ```
   - Store inquiry object in `localStorage` under key `bds_client_inquiries`.
   - On the success card, provide a prominent green CTA: **"Send Details Directly to Bhargav via WhatsApp"** that opens `waUrl` in a new tab.

---

### Step 2: Upgrade `src/pages/ContactPage.tsx`
1. Apply the same formatted WhatsApp link construction and `localStorage` logging upon submission of the Contact Page form.
2. Ensure phone inputs enforce clean numeric input with clear placeholder (`e.g. 9704380535`).

---

### Step 3: Polish `src/components/common/FloatingQuickActions.tsx`
1. Add a subtle glowing ring to the WhatsApp button to attract attention without being disruptive.
2. Ensure the tooltip is dismissible and has an auto-hide timeout after 8 seconds.

---

## Test Plan

- **Form Submission**: Open `QuoteModal`, fill in sample data (`Name: Siva`, `Business: Godavari Silks`, `Phone: 9876543210`), click submit.
- **WhatsApp Link Check**: Verify that the success button generates a valid `wa.me/919704380535?text=...` URL with all fields properly encoded.
- **Persistence Check**: Open browser DevTools -> Application -> Local Storage -> Verify `bds_client_inquiries` is stored.

## Done criteria

- [ ] Submitting Quote Modal generates pre-filled WhatsApp deep-link.
- [ ] Submitting Contact Page generates pre-filled WhatsApp deep-link.
- [ ] Inquiries are safely persisted to `localStorage`.
- [ ] `npm run build` succeeds.
- [ ] `plans/README.md` status updated.

## STOP conditions

- If URL encoding of special characters causes malformed URLs, use standard `encodeURIComponent` and verify formatting.

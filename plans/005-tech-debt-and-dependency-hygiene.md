# Plan 005: Tech Debt, Dependency Hygiene & Build Pipeline Optimization

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: Run `git diff --stat HEAD` on `package.json`, `metadata.json`, and `index.html`.

## Status

- **Priority**: P3
- **Effort**: S (1 hour)
- **Risk**: LOW
- **Depends on**: none
- **Category**: tech-debt / dx / dependencies
- **Planned at**: commit `unversioned-initial`, 2026-09-02

## Why this matters

The `package.json` currently carries legacy boilerplate from a generic template:
- Name is set to `"react-example"` instead of `"bhargav-digital-solutions-website"`.
- Contains unused heavy dependencies: `@google/genai` (^2.4.0), `express` (^4.21.2), `@types/express`, `dotenv`, and `tsx` which are never imported in the client-side SPA.
- The `"clean"` script uses Unix `rm -rf dist server.js` which throws errors on Windows environments without bash.
- `metadata.json` has boilerplate descriptions.

Cleaning up dependencies and scripts will reduce bundle audit warnings, speed up CI/install times, and make the codebase clean and professional.

## Current state

- `package.json` (lines 1–38):
  - `"name": "react-example"`
  - `"dependencies"` includes `@google/genai`, `express`, `dotenv`
  - `"devDependencies"` includes `@types/express`, `tsx`
  - `"scripts"` includes `"clean": "rm -rf dist server.js"`

## Commands you will need

| Purpose | Command | Expected on success |
| :--- | :--- | :--- |
| Build Check | `npm run build` | `vite build` succeeds with 0 errors |
| Dependency Audit | `npm list --depth=0` | Clean dependency tree |

## Scope

**In scope**:
- `package.json` — Update project name to `"bhargav-digital-solutions-website"`, remove dead dependencies (`@google/genai`, `express`, `@types/express`, `dotenv`, `tsx`), and fix cross-platform scripts.
- `metadata.json` — Update project metadata to reflect Bhargav Digital Solutions.

**Out of scope**:
- Changing React 19, Vite, Tailwind CSS v4, Lucide React, or Canvas Confetti dependencies.

## Git workflow

- Branch: `advisor/005-tech-debt-dependencies`
- Commit: `chore(deps): clean up unused dependencies and update project metadata`

---

## Steps

### Step 1: Clean Up `package.json`
Update `package.json` to:
```json
{
  "name": "bhargav-digital-solutions-website",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.14",
    "@types/canvas-confetti": "^1.9.0",
    "@vitejs/plugin-react": "^5.0.4",
    "canvas-confetti": "^1.9.4",
    "lucide-react": "^0.546.0",
    "motion": "^12.23.24",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "vite": "^6.2.3"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "autoprefixer": "^10.4.21",
    "tailwindcss": "^4.1.14",
    "typescript": "~5.8.2"
  }
}
```

---

### Step 2: Update `metadata.json`
Update `metadata.json` with official project details:
```json
{
  "name": "Bhargav Digital Solutions (BDS)",
  "description": "Full-service, affordably priced digital marketing solutions provider for businesses in Rajahmundry, East Godavari, and Andhra Pradesh.",
  "requestFrame": "custom",
  "theme": "light"
}
```

---

## Test Plan

- **Clean Install & Build**: Run `npm run build` and confirm Vite bundles the assets cleanly.
- **Run dev**: Test `npm run dev` to verify the application boots up instantly.

## Done criteria

- [ ] `package.json` has clean dependencies and proper project name.
- [ ] `metadata.json` updated.
- [ ] `npm run build` succeeds with 0 errors.
- [ ] `plans/README.md` status updated.

## STOP conditions

- If removing any dependency breaks imports in `src/`, verify with `grep -rn "<package-name>" src/` before uninstalling.

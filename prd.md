# South Bound Sips — Product Requirements

## What is this project?

South Bound Sips is an **artisan sodas & traveling bar** business. This is their website, built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Current state: "Coming Soon" placeholder

The site is currently a **single-page countdown placeholder** while the full website is being built. The launch date is **March 1, 2026**. After launch, this countdown page will be replaced with a full multi-page website (5-6 pages).

### Why the countdown exists

The business needed a live URL immediately for marketing/social media while the real site is in development. The countdown page:

- Shows a timer counting down to March 1, 2026
- Collects visitor emails via an inquiry form (sent through Resend to the business owners)
- Is intentionally set to `robots: noindex, nofollow` because it's temporary

### What to keep vs. what's temporary

| Keep for the full site | Temporary (countdown-only) |
|---|---|
| `layout.tsx` — fonts (Playfair Display, Outfit) and the general layout shell | `CountdownPage.tsx` — the entire component is a placeholder |
| `globals.css` — base Tailwind setup | The countdown timer logic |
| `/api/southboundsips/route.ts` — email inquiry endpoint (may evolve but the concept stays) | The `noindex` robots meta (remove at launch) |
| Assets in `public/southboundsips/` (logo) | The single-page `h-screen` layout |
| Brand colors: `#c9e5d6` (mint green), `#2f4e7e` (navy), `#de7f34` (orange/copper), `#D4A574` (tan) | The Ephesis font (loaded via CDN in the component, not in layout — only used for the "New Website Launching" headline) |

## Tech stack

- **Framework:** Next.js 16 with App Router (`src/app/`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Email:** Resend (API key in `.env.local`)
- **Fonts:** Playfair Display + Outfit via `next/font/google` (CSS variables `--font-playfair`, `--font-outfit`)
- **Hosting:** Vercel

## File structure

```
src/app/
  layout.tsx          — Root layout. Loads Playfair Display + Outfit fonts.
  globals.css         — Tailwind import + base theme variables.
  page.tsx            — Index route. Just renders <CountdownPage />.
  CountdownPage.tsx   — "use client" component. The entire coming-soon page.
  api/
    southboundsips/
      route.ts        — POST endpoint. Accepts { email }, sends via Resend.

public/
  southboundsips/
    logo.png          — Brand logo.
  southbound/
    top-design.png    — Decorative floral header image (used 3x overlapping at top of countdown page).
```

## API route

`POST /api/southboundsips` — Receives `{ email: string }`, sends a notification email to the business owners via Resend. The from address is `hello@cloverfield.studio` (the dev studio). Recipients are `events@southboundsips.com` and `nguyen.william0121@gmail.com`.

## Environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key for sending inquiry emails |

## Brand colors (reference)

- Mint green background: `#c9e5d6`
- Navy (text/buttons): `#2f4e7e`
- Orange/copper (accents/headlines): `#de7f34`
- Tan (links): `#D4A574`

# chumak-cv

Minimal, bilingual (RU/EN) personal CV / portfolio — a static single-page
site with smooth scroll navigation, a dark theme and subtle scroll
animations. Mobile-first.

## Tech stack

- **Vite** + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (via `@tailwindcss/vite`, CSS-first `@theme`)
- **Motion** (Framer Motion) — scroll-in animations, respects `prefers-reduced-motion`
- **i18next** + **react-i18next** — RU/EN with `localStorage` persistence
- **lucide-react** — icons
- **@fontsource** — self-hosted Inter (Latin + Cyrillic) and Geist Mono
- ESLint + Prettier

## Getting started

```bash
pnpm install
pnpm dev        # start dev server (http://localhost:5173)
pnpm build      # type-check + production build to dist/
pnpm preview    # preview the production build
pnpm lint       # ESLint
pnpm format     # Prettier --write
```

## Editing content

All content lives in two places. No component changes are needed.

### 1. Section data — `src/data/`

Each file is a typed array/object. Every translatable string is an object
`{ ru: '…', en: '…' }`.

| File | Section |
| --- | --- |
| `hero.ts` | Name, role, pitch, location, optional `avatar` |
| `experience.ts` | Work history (role, company, period, bullets, tech) |
| `projects.ts` | Project cards (title, description, tech, optional `links`) |
| `education.ts` | Degrees |
| `skills.ts` | Skill categories and items |
| `languages.ts` | Spoken languages and levels |
| `contact.ts` | Email + social links |

Notes:

- **Avatar:** add an image to `public/` and set `hero.avatar = '/your-image.jpg'`.
- **Project links:** add `links: { live, source }` per project when you have public URLs.
- **GitHub:** uncomment the GitHub entry in `contact.ts` once you have your username.

### 2. UI strings — `src/i18n/locales/`

`en.json` and `ru.json` hold navigation labels, button text, the SEO
title/description and accessibility labels. Keys are type-checked.

## Design tokens

Colors and fonts are defined once via Tailwind v4 `@theme` in
`src/index.css` and exposed as utilities (`bg-bg`, `text-text-primary`,
`text-accent`, `border-border`, `font-mono`, …). Change them in one place.

## Deploy to Vercel

This is a static Vite SPA — no extra config needed.

1. Push the repo to GitHub.
2. Import it in Vercel. The Vite preset is auto-detected:
   - Build command: `pnpm build`
   - Output directory: `dist`
3. Deploy. There is no client-side routing, so no rewrites / `vercel.json`
   are required.

## Accessibility & performance

- Semantic landmarks, skip-to-content link, visible focus rings, AA contrast.
- Touch targets ≥ 44×44px; iOS-safe 16px minimum body font.
- Animations limited to `opacity`/`transform`, disabled under
  `prefers-reduced-motion`.
- Self-hosted fonts with `font-display: swap`; lazy images.

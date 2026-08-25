# chumak-cv

Minimal, bilingual (RU/EN) personal CV / portfolio — a static single-page
site with smooth scroll navigation, light/dark themes and subtle scroll
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

### Facts come first

`docs/candidate-evidence.md` is the publication policy for every factual claim on
the site, in the CV PDFs and in `public/llms.txt`: what may be published, what may
not, and which wordings are barred. Change a fact there first, then propagate it.

`HUMAN_INPUT_REQUIRED.md` lists the open questions. This repository is public, so
neither file carries anything a project's own publication policy disallows.

### 1. Section data — `src/data/`

Each file is a typed array/object. Every translatable string is an object
`{ ru: '…', en: '…' }`.

| File            | Section                                                       |
| --------------- | ------------------------------------------------------------- |
| `hero.ts`       | Name, role, stack, pitch, location, availability, proof strip |
| `work.ts`       | Selected-work cards (context, role, system, evidence, stack)  |
| `experience.ts` | Work history (role, company, period, bullets, tech)           |
| `skills.ts`     | Skill groups — Frontend first, always                         |
| `principles.ts` | The three "How I work" statements                             |
| `education.ts`  | Degrees                                                       |
| `languages.ts`  | Spoken languages and levels                                   |
| `contact.ts`    | Email + social links                                          |
| `resume.ts`     | Which CV PDF the download button serves, per language         |

**Avatar:** add an image to `public/` and set `hero.avatar = '/your-image.jpg'`.

### 2. UI strings — `src/i18n/locales/`

`en.json` and `ru.json` hold navigation labels, button text, the SEO
title/description and accessibility labels. Keys are type-checked.

## CV PDFs

The HTML in `scripts/` is the source; the PDFs in `public/` are build output.
Never edit a PDF.

```bash
./scripts/build-cv.sh
```

It renders all three variants through headless Chrome and then checks each one:
page count, extractable name, core keyword, and whether the last page is a blank
tail. See `docs/tailor-cv.md` for which variant to send where.

## Design tokens & theming

Fonts and color utilities are defined via Tailwind v4 `@theme` in
`src/index.css` and exposed as utilities (`bg-bg`, `text-text-primary`,
`text-accent`, `border-border`, `font-mono`, …).

Colors use `@theme inline` pointing at raw CSS variables, so the whole site
re-themes at runtime by flipping `data-theme` on `<html>`. Edit the
`[data-theme='dark']` / `[data-theme='light']` blocks to tune each palette.
The theme toggle lives in the header (and mobile menu); the choice persists
to `localStorage` and defaults to the OS `prefers-color-scheme`. An inline
script in `index.html` applies it before paint to avoid a flash.

## Deploy

`main` deploys itself: `.github/workflows/deploy.yml` runs `format:check`, `lint`
and `build`, then rsyncs `dist/` to the server behind `chumak.is-a.dev` and
health-checks the live URL. `scripts/deploy.sh` does the same thing by hand.

## Accessibility & performance

- Semantic landmarks, skip-to-content link, visible focus rings, AA contrast.
- Touch targets ≥ 44×44px; iOS-safe 16px minimum body font.
- Animations limited to `opacity`/`transform`, disabled under
  `prefers-reduced-motion`.
- Self-hosted fonts with `font-display: swap`; lazy images.

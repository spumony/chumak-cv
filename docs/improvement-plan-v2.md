# План улучшений v2 (по ресёрчу май 2026)

Вторая итерация улучшений. Источник — ресёрч про эффективные CV/портфолио
для Senior FE → AI Product Engineer (см. чат + плановый файл сессии).

Предыдущая итерация — [`docs/improvement-plan.md`](./improvement-plan.md)
(сохранён как history).

## Изменения, сделанные в этом раунде

### 1. Now — датированный манифест

`src/sections/Focus.tsx`, `src/data/focus.ts`. Заменили карточку проекта +
3 чипа на 4-строчный манифест **Building / Reading / Open to / Not taking**

- строка «Updated 28 May 2026». Транзишн-пилюли остались. Источник идеи —
  Sivers /now convention; типичный анти-абандон сигнал на персональных
  сайтах в 2026.

### 2. Selected Work — 3 кейса (Problem → Approach → Stack → Outcome)

`src/sections/Work.tsx`, `src/data/work.ts`, новый id `'work'` в
`SECTION_IDS` / `NAV_SECTION_IDS`. Кейсы:

1. **Learning Platform / Bookmark Manager** — `in-progress`, accent-ring +
   live dot. AI-проект из старой Now-карточки переехал сюда в полной
   P → A → S → O форме (содержание 3 старых хайлайт-чипов слилось в
   Outcome).
2. **EVCARGO** — `shipped`. Production e-mobility logistics frontend в
   Scrum-команде.
3. **Multisoft restaurant CRM** — `current`, accent-ring + live dot.
   Lead frontend на CRM-платформе для ресторанов.

### 3. Skills — 2026-стек + новая 4-я группа Practice

`src/data/skills.ts`. Перегруппировано в 4 тира:

- **Frontend · 5 лет** — React, TypeScript, Next.js (App Router), Tailwind,
  TanStack Query, **Zod**, **Vitest**, **Playwright**, **A11y (WCAG 2.2)**.
- **Fullstack · на практике** — Node.js, PostgreSQL, Drizzle, Server Components/
  Actions, Session auth (bcrypt), REST API design, Inngest, **Sentry**, **Vercel**.
- **AI engineering · learning** (`upcoming: true`, muted dashed) — Vercel AI
  SDK, OpenAI / Anthropic / **Gemini** SDK, Embeddings + pgvector, RAG, Evals,
  Observability, **Streaming UX (SSE)**, **Prompt versioning**, LLM agents / MCP.
- **Practice** (новая) — Design systems, A/B testing, Product metrics,
  Cross-functional, Mentoring, Async written communication, Product/UI design.

### 4. Hero — pitch v5 «Honest-transition»

`src/data/hero.ts`. Pitch переписан с keyword-плотностью под Boolean-поиск:
Vercel AI SDK, RAG on pgvector, streaming UIs, evals + явная сигнал
готовности (senior FE / AI Product roles, EU remote, 10–20 hr/wk retainers).
Не заявляет «shipping production AI features» (честно — учится).

### 5. Freelance — Who I work with + What I don't do

`src/data/freelance.ts`, `src/sections/Freelance.tsx`. Добавили:

- Tagline «Seed–Series B teams shipping AI features in TypeScript/React stacks».
- FAQ-пункт «What I don't do» (one-off, design-only, agency subcontract) —
  снимает 80% не-целевых заявок (по ресёрчу).

### 6. EN PDF — restructure + rename

`scripts/cv.html`, `public/Alexandr-Chumak-Senior-FE-Engineer.pdf`.
ATS-friendly: одна колонка, Arial, text-selectable. Структура:
**Summary** → Experience → **Projects** (с Learning Platform) → Skills →
Education → Languages. Имя файла теперь содержит роль (Jobscan best practice).
Скачивание на сайте — language-aware (RU выдаёт RU-файл).

### 7. RU PDF — CIS-конвенции

`scripts/cv-ru.html`, `public/Alexandr-Chumak-Senior-FE-Engineer-RU.pdf`.
Структура по ресёрчу: Personal (имя · ДР · город · Telegram · email · LI +
photo placeholder) → Tech (стек одной строкой сверху) → Education →
Experience → Projects → Skills → Languages. Даты DD.MM.YYYY.
**Заполнить вручную**: ДР, Telegram-handle, фото.

### 8. OG image (1200×627)

`scripts/og.html` → `public/og.png`. Тёмная карточка под палитру сайта:
Open-to-work dot, имя, role-line transition, 6 пилюль (React, TypeScript,
Next.js, Vercel AI SDK, RAG, Evals), локация. Генерируется через headless
Chrome `--screenshot --window-size=1200,627`.

## Верификация (через chrome-devtools MCP, prod-grade dev build)

- **Lighthouse mobile (navigation): Accessibility 100 · Best Practices 100 ·
  SEO 100 · Agentic Browsing 100** (0 проваленных аудитов).
- Console чист (no warnings, no errors).
- Скриншоты Selected Work / Hero / Freelance / Contact на 1024 — рендерятся
  корректно в обеих темах.
- `pnpm lint` + `pnpm build` — без ошибок.

## Отложено (вне scope, нужен ввод или архитектурно неподходяще)

- **hreflang + раздельные `/ru/` URL** — нужен клиентский роутинг
  (новый dep + рефакторинг архитектуры). Сейчас сайт — один URL с
  client-side i18n; hreflang в этой архитектуре не имеет смысла.
- **Cal.com / GitHub / Telegram links** — поля опциональны
  (`bookingUrl` в `freelance.ts`, GitHub-link закомментирован в
  `contact.ts`, Telegram-плейсхолдер в `scripts/cv-ru.html`).
- **Фото в RU PDF** — placeholder-рамка готова, вставить руками.
- **Testimonials / company logos / GitHub-stats dashboard** — нужны реальные
  данные/согласие клиентов.
- **Блог / writing** — запрещён конституцией (`CLAUDE.md`).

## Чек-лист (эффект/усилие, из ресёрча)

| #   | Изменение                                              | Сделано?                                                        |
| --- | ------------------------------------------------------ | --------------------------------------------------------------- |
| 1   | Hero pitch v5 (honest-transition с keyword-плотностью) | ✅                                                              |
| 2   | Now — датированный манифест                            | ✅                                                              |
| 3   | AI-проект как полноценный кейс (P → A → S → O)         | ✅                                                              |
| 4   | 2–3 кейс-стади (EVCARGO + Multisoft + AI)              | ✅                                                              |
| 5   | Skills без progress bars, 4 группы с тирами            | ✅                                                              |
| 6   | Work With Me блок: niche / process / FAQ               | ✅ (предыдущий раунд + What-I-dont-do FAQ)                      |
| 7   | OG image + meta-теги                                   | ✅ (1200×627 PNG сгенерён)                                      |
| 8   | Schema.org `Person` JSON-LD                            | ✅ (предыдущий раунд)                                           |
| 9   | hreflang EN+RU                                         | ⏸ (вне scope, см. выше)                                         |
| 10  | Mobile 320/375/768 без overflow, A11y ≥ 95             | ✅ (Lighthouse A11y = 100)                                      |
| 11  | Performance (LCP/INP/CLS field)                        | (mobile-friendly markup; field-data measure требует prod-хоста) |
| 12  | ATS-friendly EN PDF, 1 page, single-column             | ✅ (с ролью в имени файла)                                      |
| 13  | Две PDF-версии (EN + RU CIS-формат)                    | ✅                                                              |
| 14  | Action+Scope+Result в Experience                       | ✅ (предыдущий раунд)                                           |
| 15  | AI-keywords (Vercel AI SDK, RAG, pgvector, evals, MCP) | ✅                                                              |
| 16  | Drop Redux/jQuery как headline-навыки                  | ✅ (никогда не были — Skills чисты)                             |
| 17  | /chat или Cal.com booking                              | ⏸ (поле есть, URL нужен от владельца)                           |
| 18  | Lighthouse A11y ≥ 95                                   | ✅ (100)                                                        |
| 19  | «Что не беру» в Freelance                              | ✅                                                              |
| 20  | OG превью на LinkedIn / Slack                          | ⏸ (после деплоя — нужен production URL для Post Inspector)      |

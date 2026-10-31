# Publication policy for CV and site claims

This repository is **public**. Everything in this file is published with it, so it
records what may appear on the site and in the CV PDFs — and what may not. It is
not the working notebook; the fuller internal detail is kept outside the repository.

Change a fact here first, then propagate it to `src/data/*` and to the CV HTML in
`scripts/`, and run `./scripts/build-cv.sh` so the PDFs cannot drift from the HTML.

## Rules

1. A claim goes public only if it can be defended in an interview and evidenced on
   request.
2. A number goes public only if it can be re-derived on demand. Volatile counts stay
   off the Core CV, where a stale figure would outlive the document.
3. A project's own publication policy wins. Where a policy allows the product name
   only, nothing further is published — here, on the site, in the CV, or in
   `llms.txt`.
4. Nothing about employment disputes, private repositories, third-party credentials
   or internal verification status belongs in this repository.

## Published — commercial experience

| Claim                     | Value                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TeamArt overall           | TeamArt Outsourcing (outsourcing company, Chișinău / Bucharest), Frontend Developer, Remote, Feb 2021 – Aug 2026                                                                                                                                                                                                                                                                                                 |
| EVCARGO tenure            | TeamArt — EVCARGO, Frontend Developer, Remote, Feb 2021 – Dec 2025 (five years)                                                                                                                                                                                                                                                                                                                                  |
| EVCARGO scope             | Logistics and transport CRM for a UK logistics operator, web and mobile, in a cross-functional Scrum team; built and maintained the shared design system and component library; client-side architecture around them; REST data layer on React Query and Axios covering auth refresh, caching, pagination, filtering, invalidation and error handling; frontend code review, estimation and release coordination |
| EVCARGO mobile            | Contributed to the React Native app and cross-platform releases, including Android SDK upgrades and iOS release validation                                                                                                                                                                                                                                                                                       |
| EVCARGO testing           | Introduced Playwright coverage for critical user flows                                                                                                                                                                                                                                                                                                                                                           |
| Multisoft tenure          | TeamArt — Multisoft, Frontend Developer, Remote, Jan 2026 – Aug 2026. A TeamArt client project, not a separate employer                                                                                                                                                                                                                                                                                          |
| Multisoft scope           | Restaurant CRM for a Romanian HoReCa software vendor: interfaces for administrators, kitchen staff and waiters. Only frontend engineer on the project; built the Next.js/TypeScript client from zero; designed and documented the component system, routing structure and frontend conventions; dense tables, filtering, validation and long forms over REST APIs                                                |
| Freelance                 | Web Developer, Remote, Aug 2019 – Dec 2020 — client web apps in JavaScript/React, legacy UI refactoring                                                                                                                                                                                                                                                                                                          |
| Exterior Security Systems | Web Designer, Chișinău, Oct 2018 – Mar 2019 — one line, no bullets                                                                                                                                                                                                                                                                                                                                               |
| Commercial experience     | 6+ years since Aug 2019                                                                                                                                                                                                                                                                                                                                                                                          |
| Availability              | Looking for work, available immediately. Everything at TeamArt is written in the past tense                                                                                                                                                                                                                                                                                                                      |
| Work authorisation        | EU citizen — no sponsorship required for EU roles                                                                                                                                                                                                                                                                                                                                                                |
| Phone                     | +373 6993 6993 — in the CV PDFs only, not on the site                                                                                                                                                                                                                                                                                                                                                            |

**Not published:** team sizes, module counts, customer or user numbers, and any
performance or reliability figure. None was measured, and an invented one is the
fastest way to lose a technical screen.

## Published — Rivella

Rivella leads the site and both CVs because it is deployed, running and verifiable
without opening a private repository. Every figure is re-derivable from its own
repository on request.

| Claim               | Value                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Ownership           | Built and deployed solo                                                                                                                    |
| Status              | Deployed and running at `rivella.app`                                                                                                      |
| Admin frontend      | Next.js · React · TypeScript                                                                                                               |
| API                 | NestJS · Prisma · TypeScript                                                                                                               |
| Database            | PostgreSQL 16                                                                                                                              |
| Delivery            | GitHub Actions builds Docker images into a container registry; the VPS pulls and recreates the containers                                  |
| Data model          | Tenant-scoped, with non-null tenant keys across all 12 tenant-scoped tables                                                                |
| Runtime             | One bot process per active tenant; per-slug webhook routing; separate superadmin auth strategy and table                                   |
| Assistant           | Bounded tool-calling loop over 15 tools, capped at 8 iterations and 120 seconds per turn, with an output validator in front of every reply |
| Knowledge retrieval | PostgreSQL full-text search with a keyword-scorer fallback                                                                                 |
| Integrations        | Telegram and YClients — availability, creation, rescheduling, cancellation, manager confirmation, booking-race fallback                    |
| Scheduled jobs      | 5 — reminders, post-visit follow-up, no-show detection, abandoned-booking recovery, daily digest                                           |
| Tests               | 138 API tests passing across 12 suites                                                                                                     |
| API surface         | 46-path OpenAPI spec                                                                                                                       |
| Locales             | RU / EN, English default                                                                                                                   |

**Barred for Rivella:** RAG or vector-search wording of any kind — the knowledge
layer is full-text search, and the terminology has been wrong here before.
Also barred: "tenant isolation enforced in the schema", which overstates what is
verified — say the data model is tenant-scoped with non-null tenant keys. No user,
traffic, revenue or latency figures; none were measured.

## Published — Prosvetum

The publication policy for this project was widened on 2026-10-31: it is
published on the App Store and may appear on the site, in the CVs and in
`llms.txt`, within the facts below.

| Claim     | Value                                                                                         |
| --------- | --------------------------------------------------------------------------------------------- |
| Ownership | Built solo, 2026                                                                              |
| Status    | Published on the App Store on 18 Sep 2026, version 1.0, seller Alexandr Ciumac                |
| Link      | `https://apps.apple.com/app/id6787093203`                                                     |
| Product   | iOS app with book summaries: audio, quizzes, spaced-repetition flashcards and an AI mentor    |
| App       | React Native (Expo), TypeScript, NativeWind                                                   |
| Backend   | Supabase: PostgreSQL with row-level security, Edge Functions `chat`, `recommend`, `audio-url` |
| AI mentor | Answers grounded in vector search over Voyage embeddings in pgvector                          |
| Offline   | The TanStack Query cache is persisted to AsyncStorage                                         |
| Delivery  | Sentry for error monitoring; builds and App Store submission through EAS                      |

**Barred for Prosvetum:** "TestFlight" and "beta" — the app is on the App Store.
"Full offline mode" — only the query cache is persisted. Semantic search as a
user-facing feature — vector search is used only inside the AI mentor. Any claim
that the database enforces paid access — that is in the backlog, not built. No
user, download, revenue or rating figures.

## Published — Profit Controller

Added on 2026-10-31 at the candidate's request. The repository is private, so the
CVs carry the name and the facts below but no link.

| Claim     | Value                                                                                                                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ownership | Built solo, 2026                                                                                                                                                                                          |
| Product   | Restaurant analytics: turns iiko POS data into ranked findings, each quantified in money and backed by evidence                                                                                           |
| Stack     | Next.js (App Router), TypeScript, Drizzle ORM, PostgreSQL, better-auth; an assistant on the Claude API explains the computed metrics                                                                      |
| Tests     | 600+ Vitest tests (642 passing on 2026-10-31: `pnpm exec vitest run --project unit --project connectors --project golden`), plus integration tests and Playwright end-to-end tests, run in GitHub Actions |
| Delivery  | Docker and Caddy                                                                                                                                                                                          |

**Barred for Profit Controller:** customer, restaurant or revenue figures, and any
claim that it runs for a paying client. None is evidenced here.

## Published — education and languages

| Claim                        | Value                                        |
| ---------------------------- | -------------------------------------------- |
| M.Sc. Information Technology | Technical University of Moldova, 2018 – 2020 |
| B.Sc. Information Technology | Technical University of Moldova, 2015 – 2018 |
| Russian                      | Native                                       |
| English                      | B2 — professional working proficiency        |
| Romanian                     | B2                                           |
| Ukrainian                    | B2                                           |

Language levels are held here until explicitly changed. They are checked on the
first call, and a level that cannot be sustained for ten minutes costs more than it
buys.

## Keywords that must not appear

No evidence supports them and a technical screen would expose them: AWS · Azure ·
GCP · Kubernetes · GraphQL · Kafka · microservices · distributed systems ·
high-scale · millions of users · principal architecture · any revenue, conversion,
traffic or Core Web Vitals figure.

Also barred, because they contradict the CV: "Lead" or "Ведущий" as a title;
"Present", "настоящее время", "currently", "Now" or a current-role badge for
TeamArt or Multisoft; Multisoft as a separate employer or "Romania / Remote" as a
place of work; "e-mobility" or "электротранспорт"; "Jan 2021" or "01.2021";
"order, menu and reporting modules" for Multisoft — say "interfaces for
administrators, kitchen staff and waiters".

Docker, GitHub Actions CI/CD and VPS deployment **are** supported — by Rivella, and
only at the scale Rivella actually runs at.

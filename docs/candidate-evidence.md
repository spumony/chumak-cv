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

| Claim                     | Value                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Current role              | Lead Frontend Developer, Multisoft (Romania / Remote), Jan 2026 to present                                                                                                                                                                                                                                                                                                       |
| Multisoft scope           | Sole frontend engineer; built the Next.js/TypeScript client from zero; component system, routing structure and frontend conventions; order, menu and reporting modules; dense tables, filtering, validation, long forms over REST APIs                                                                                                                                           |
| EVCARGO tenure            | TeamArt — EVCARGO, Frontend Developer, Remote, Jan 2021 – Dec 2025 (five years)                                                                                                                                                                                                                                                                                                  |
| EVCARGO scope             | Production e-mobility logistics platform in a cross-functional Scrum team; built and maintained the shared design system and component library; client-side architecture around them; REST data layer on React Query and Axios covering auth refresh, caching, pagination, filtering, invalidation and error handling; frontend code review, estimation and release coordination |
| EVCARGO mobile            | Contributed to the React Native app and cross-platform releases, including Android SDK upgrades and iOS release validation                                                                                                                                                                                                                                                       |
| EVCARGO testing           | Introduced Playwright coverage for critical user flows                                                                                                                                                                                                                                                                                                                           |
| Freelance                 | Web Developer, Remote, Aug 2019 – Dec 2020 — client web apps in JavaScript/React, legacy UI refactoring                                                                                                                                                                                                                                                                          |
| Exterior Security Systems | Web Designer, Chișinău, Oct 2018 – Mar 2019 — one line, no bullets                                                                                                                                                                                                                                                                                                               |
| Commercial experience     | 6+ years, Aug 2019 to present, continuous                                                                                                                                                                                                                                                                                                                                        |
| Work authorisation        | EU citizen — no sponsorship required for EU roles                                                                                                                                                                                                                                                                                                                                |

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

## Not published — the personal iOS project

One personal project has a publication policy of **the product name only**. It is
therefore absent from the CVs, from Selected Work, from `llms.txt` and from the OG
image, and no technology drawn solely from it appears in any skills list.

Do not reintroduce it, in whole or in part, without an explicit widening of that
policy. That includes indirect reintroduction: a skills entry, a stack tag or an OG
pill that only that project could support is a disclosure by another route.

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

Docker, GitHub Actions CI/CD and VPS deployment **are** supported — by Rivella, and
only at the scale Rivella actually runs at.

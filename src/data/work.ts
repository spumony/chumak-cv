import type { CaseStudy } from '../types'

/**
 * Order is deliberate: Rivella is the strongest public technical proof — it is
 * deployed, it is verifiable, and nothing about it depends on a private
 * repository. Prosvetum is the published mobile proof, Profit Controller the
 * private one. EVCARGO is the long-running commercial evidence.
 *
 * Multisoft is a TeamArt client project: it sits with EVCARGO as commercial
 * evidence, not as an own product.
 *
 * Visible text stays short: one line of context, one of role, 2–3 facts. The
 * architecture detail lives in `system`, which renders collapsed.
 * Every line in `evidence` is governed by docs/private/candidate-evidence.md.
 */
export const work: CaseStudy[] = [
  {
    title: {
      ru: 'Rivella — мультитенантный AI-ассистент записи',
      en: 'Rivella — multi-tenant AI booking assistant',
    },
    badge: { ru: 'Развёрнут', en: 'Deployed' },
    context: {
      ru: 'Бизнесы, которые живут на записи, теряют заявки вне рабочих часов. Rivella сама отвечает клиентам в Telegram и доводит их до брони.',
      en: 'Appointment-based businesses lose the enquiries that arrive after hours. Rivella answers customers in Telegram on its own and takes them to a booking.',
    },
    role: {
      ru: 'Сделал и развернул один: админка, API, модель данных, ассистент и деплой.',
      en: 'Built and deployed solo: the admin panel, API, data model, assistant and deployment.',
    },
    system: {
      ru: 'Next.js и TypeScript на админке, NestJS и Prisma на API, PostgreSQL 16 в кластере. Модель данных с разделением по тенантам: ненулевой ключ тенанта на всех 12 таблицах, у каждого тенанта свой процесс бота за вебхуком по слагу, у суперадмина отдельная стратегия аутентификации и своя таблица. Ассистент работает в ограниченном цикле с вызовом инструментов — 15 инструментов, не больше 8 итераций и 120 секунд на диалог — с полнотекстовым поиском PostgreSQL (tsvector) по базе знаний тенанта и валидатором ответа перед отправкой. YClients: слоты, создание, перенос и отмена записей, бронь подтверждает менеджер, гонка на стороне провайдера обработана. Пять фоновых задач: напоминания, follow-up после визита, неявки, брошенные заявки, ежедневный дайджест.',
      en: 'Next.js and TypeScript on the admin, NestJS and Prisma on the API, PostgreSQL 16 in the cluster. A tenant-scoped data model with non-null tenant keys across all 12 tenant-scoped tables, each tenant running its own bot process behind a per-slug webhook, and the superadmin on a separate auth strategy with its own table. The assistant runs a bounded tool-calling loop — 15 tools, capped at 8 iterations and 120 seconds per turn — with PostgreSQL full-text search (tsvector) over that tenant’s knowledge base and an output validator in front of every reply. YClients: availability, creating, rescheduling and cancelling appointments, a manager confirms the booking, and the provider’s booking race is handled. Five scheduled jobs: reminders, post-visit follow-ups, no-show detection, abandoned-booking recovery and a daily digest.',
    },
    evidence: [
      {
        ru: 'Работает в продакшене у нескольких бизнесов: GitHub Actions собирает Docker-образы, VPS их разворачивает.',
        en: 'Running in production for several businesses: GitHub Actions builds Docker images and a VPS deploys them.',
      },
      {
        ru: 'Ассистент на Claude API: 15 инструментов, проверка каждого ответа перед отправкой, поиск по базе знаний клиента.',
        en: 'Assistant on the Claude API: 15 tools, every reply checked before it is sent, search over each client’s knowledge base.',
      },
      {
        ru: '138 тестов API, OpenAPI-спека на 46 путей, интеграции с Telegram и YClients.',
        en: '138 API tests, a 46-path OpenAPI spec, Telegram and YClients integrations.',
      },
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'NestJS',
      'Prisma',
      'PostgreSQL 16',
      'Docker',
      'GitHub Actions',
      'Telegram Bot API',
      'YClients API',
    ],
    links: { live: 'https://rivella.app' },
  },
  {
    title: {
      ru: 'Prosvetum — саммари книг с AI-ментором (iOS)',
      en: 'Prosvetum — book summaries with an AI mentor (iOS)',
    },
    badge: { ru: 'В App Store', en: 'App Store' },
    period: { ru: '2026', en: '2026' },
    context: {
      ru: 'iOS-приложение с саммари книг: текст и аудио, квизы, карточки для повторения и AI-ментор, который отвечает на вопросы по книге.',
      en: 'An iOS app with book summaries: text and audio, quizzes, flashcards and an AI mentor that answers questions about the book.',
    },
    role: {
      ru: 'Сделал один: приложение, бэкенд на Supabase, AI-ментор, сборки и релиз.',
      en: 'Built solo: the app, the Supabase backend, the AI mentor, the builds and the release.',
    },
    system: {
      ru: 'Приложение на React Native (Expo), TypeScript и NativeWind. Бэкенд на Supabase: PostgreSQL с row-level security и Edge Functions для чата, рекомендаций и выдачи аудио. AI-ментор отвечает с опорой на векторный поиск по эмбеддингам Voyage в pgvector. Кэш TanStack Query сохраняется в AsyncStorage.',
      en: 'The app is React Native (Expo), TypeScript and NativeWind. The backend is Supabase: PostgreSQL with row-level security and Edge Functions for chat, recommendations and audio delivery. The AI mentor grounds its answers in vector search over Voyage embeddings in pgvector. The TanStack Query cache is persisted to AsyncStorage.',
    },
    evidence: [
      {
        ru: 'В App Store с 18 сентября 2026 года, на английском и русском.',
        en: 'On the App Store since 18 September 2026, in English and Russian.',
      },
      {
        ru: 'Мониторинг ошибок в Sentry, сборки и отправка в App Store через EAS.',
        en: 'Error monitoring in Sentry; builds and App Store submission through EAS.',
      },
    ],
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'NativeWind',
      'TanStack Query',
      'Supabase',
      'pgvector',
      'Sentry',
      'EAS',
    ],
    links: { live: 'https://apps.apple.com/app/id6787093203' },
  },
  {
    title: {
      ru: 'Profit Controller — аналитика для ресторанов',
      en: 'Profit Controller — restaurant analytics',
    },
    period: { ru: '2026', en: '2026' },
    context: {
      ru: 'Превращает данные POS-системы iiko в ранжированный список находок с оценкой в деньгах и обоснованием по каждой.',
      en: 'Turns data from the iiko POS system into ranked findings, each quantified in money and backed by evidence.',
    },
    role: {
      ru: 'Сделал один: коннектор к iiko, расчёт метрик, интерфейс, ассистент и деплой.',
      en: 'Built solo: the iiko connector, the metrics engine, the interface, the assistant and the deployment.',
    },
    system: {
      ru: 'Next.js (App Router), TypeScript, Drizzle ORM и PostgreSQL, аутентификация на better-auth. Деплой через Docker и Caddy.',
      en: 'Next.js (App Router), TypeScript, Drizzle ORM and PostgreSQL, with better-auth for authentication. Deployed with Docker and Caddy.',
    },
    evidence: [
      {
        ru: '600+ тестов на Vitest, интеграционные и e2e-тесты на Playwright в GitHub Actions.',
        en: '600+ Vitest tests, plus integration and Playwright end-to-end tests, run in GitHub Actions.',
      },
      {
        ru: 'Ассистент на Claude API объясняет рассчитанные метрики.',
        en: 'An assistant on the Claude API explains the computed metrics.',
      },
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Drizzle ORM',
      'PostgreSQL',
      'better-auth',
      'Claude API',
      'Vitest',
      'Playwright',
      'Docker',
    ],
  },
  {
    title: {
      ru: 'Multisoft — CRM для ресторанов: админка, кухня, официанты',
      en: 'Multisoft — restaurant CRM: admin, kitchen and waiter apps',
    },
    badge: { ru: 'TeamArt', en: 'TeamArt' },
    period: { ru: '01.2026 — 08.2026', en: 'Jan 2026 — Aug 2026' },
    context: {
      ru: 'CRM для ресторанов у румынского разработчика ПО для HoReCa, на рынке с 1991 года: три отдельных приложения для администратора, кухни и официантов.',
      en: 'A restaurant CRM for a Romanian HoReCa software vendor in business since 1991: three separate apps for administrators, kitchen staff and waiters.',
    },
    role: {
      ru: 'Единственный фронтенд-разработчик на проекте: все три приложения на Next.js и TypeScript с нуля.',
      en: 'The only frontend engineer on the project: all three apps built from scratch in Next.js and TypeScript.',
    },
    evidence: [
      {
        ru: 'Спроектировал систему компонентов, структуру роутинга и фронтенд-стандарты, описал их в документации.',
        en: 'Designed and documented the component system, routing structure and frontend conventions.',
      },
      {
        ru: 'Таблицы с большим объёмом данных, фильтры, валидация и длинные формы поверх REST API.',
        en: 'Dense tables, filtering, validation and long forms over REST APIs.',
      },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API'],
  },
  {
    title: {
      ru: 'EVCARGO — CRM для логистики и перевозок',
      en: 'EVCARGO — logistics and transport CRM',
    },
    badge: { ru: '5 лет', en: '5 years' },
    period: { ru: '02.2021 — 12.2025', en: 'Feb 2021 — Dec 2025' },
    context: {
      ru: 'CRM для логистики и перевозок британского оператора примерно на 3 000 сотрудников: веб и мобильное приложение.',
      en: 'A logistics and transport CRM for a UK logistics operator of around 3,000 staff: a web app and a mobile app.',
    },
    role: {
      ru: 'Фронтенд платформы в Scrum-команде: дизайн-система, библиотека компонентов, клиентская архитектура, code review.',
      en: 'Frontend across the platform in a Scrum team: the design system, component library, client architecture and code review.',
    },
    system: {
      ru: 'Сначала общая дизайн-система и библиотека компонентов, затем клиентская архитектура вокруг них — поэтому новые экраны сразу выглядели и работали единообразно. Данные из REST шли через React Query и Axios в одном месте, поэтому обновление токенов, кэширование, пагинация, фильтрация, инвалидация и обработка ошибок работали одинаково на всех экранах. В мобильном приложении — обновления Android SDK и проверка сборок iOS. Ещё оценка задач и координация релизов.',
      en: 'The shared design system and component library came first, then the client architecture around them, so new screens inherited consistency instead of re-deriving it. REST data went through React Query and Axios in one place, so auth refresh, caching, pagination, filtering, invalidation and error handling behaved identically everywhere. On mobile, Android SDK upgrades and iOS release validation. Also estimation and release coordination.',
    },
    evidence: [
      {
        ru: 'Слой данных на React Query и Axios: токены, кэш, пагинация и ошибки работают одинаково на всех экранах.',
        en: 'A React Query and Axios data layer: auth refresh, caching, pagination and errors behave the same on every screen.',
      },
      {
        ru: 'Участвовал в мобильном приложении на React Native и кросс-платформенных релизах.',
        en: 'Contributed to the React Native app and cross-platform releases.',
      },
      {
        ru: 'Внедрил тесты Playwright на критичные сценарии.',
        en: 'Introduced Playwright coverage for critical user flows.',
      },
    ],
    stack: [
      'React',
      'TypeScript',
      'Next.js',
      'React Query',
      'React Native',
      'Playwright',
    ],
  },
]

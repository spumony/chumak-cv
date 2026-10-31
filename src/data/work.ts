import type { CaseStudy } from '../types'

/**
 * Order is deliberate: Rivella is the strongest public technical proof — it is
 * deployed, it is verifiable, and nothing about it depends on a private
 * repository. Prosvetum is the published mobile proof, Profit Controller the
 * private one. EVCARGO is the long-running commercial evidence.
 *
 * Multisoft lives in Experience as a TeamArt project, not as a case study.
 * Every line in `evidence` is governed by docs/candidate-evidence.md.
 */
export const work: CaseStudy[] = [
  {
    title: 'Rivella — multi-tenant AI booking assistant',
    badge: { ru: 'Развёрнут', en: 'Deployed' },
    context: {
      ru: 'Бизнесы, живущие на записи, теряют заявки, которые приходят вне рабочих часов: отвечает менеджер, а он работает по графику. Rivella отвечает сама и доводит клиента до брони.',
      en: 'Businesses that run on appointments lose the enquiries that arrive outside working hours, because a human manager only answers during them. Rivella replies on its own and takes the customer to a booking.',
    },
    role: {
      ru: 'Собрал и развернул один: фронтенд админки, бэкенд, схема данных, ассистент, интеграции и вся доставка до продакшена.',
      en: 'Built and deployed solo: the admin frontend, the backend, the data model, the assistant, the integrations and the whole path to production.',
    },
    system: {
      ru: 'Next.js и TypeScript на админке, NestJS и Prisma на API, PostgreSQL 16 в кластере. Спроектировал модель данных с разделением по арендаторам: ненулевой ключ арендатора на всех 12 таблицах, у каждого свой процесс бота за вебхуком по слагу, у суперадмина отдельная стратегия аутентификации и своя таблица. Ассистент крутит ограниченный цикл с вызовом инструментов — 15 инструментов, не больше 8 итераций и 120 секунд на диалог, — с полнотекстовым поиском PostgreSQL (tsvector) по базе знаний арендатора и валидатором ответа перед отправкой.',
      en: 'Next.js and TypeScript on the admin, NestJS and Prisma on the API, PostgreSQL 16 in the cluster. I designed a tenant-scoped data model with non-null tenant keys across all 12 tenant-scoped tables, each tenant running its own bot process behind a per-slug webhook, and the superadmin on a separate auth strategy with its own table. The assistant runs a bounded tool-calling loop — 15 tools, capped at 8 iterations and 120 seconds per turn — with PostgreSQL full-text search (tsvector) over that tenant’s knowledge base and an output validator in front of every reply.',
    },
    evidence: [
      {
        ru: 'Развёрнут и работает: GitHub Actions собирает Docker-образы в GHCR, VPS пересоздаёт контейнеры.',
        en: 'Deployed and running: GitHub Actions builds Docker images into GHCR and the VPS recreates the containers.',
      },
      {
        ru: '138 тестов API проходят в 12 наборах, REST-поверхность описана OpenAPI-спекой на 46 путей.',
        en: '138 API tests pass across 12 suites, and the REST surface is documented as a 46-path OpenAPI spec.',
      },
      {
        ru: 'Telegram и YClients: читает слоты, создаёт, переносит и отменяет записи, бронь подтверждает менеджер, есть обработка гонки на стороне провайдера.',
        en: 'Telegram and YClients: reads availability, creates, reschedules and cancels appointments, a manager confirms the booking, and the provider’s booking race is handled.',
      },
      {
        ru: 'Пять фоновых задач: напоминания, follow-up после визита, отслеживание неявок, возврат брошенных заявок, ежедневный дайджест.',
        en: 'Five scheduled jobs: reminders, post-visit follow-ups, no-show detection, abandoned-booking recovery and a daily digest.',
      },
      {
        ru: 'Админка с аналитикой, CRM, подписками и базой знаний, на русском и английском.',
        en: 'Admin panel with analytics, CRM, subscriptions and a knowledge base, in Russian and English.',
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
    title: 'Prosvetum — book summaries with an AI mentor (iOS)',
    badge: { ru: 'В App Store', en: 'App Store' },
    period: { ru: '2026', en: '2026' },
    context: {
      ru: 'iOS-приложение с саммари книг: текст и аудио, квизы и карточки для повторения, чтобы идеи удерживались, и AI-ментор, который отвечает на вопросы по книге.',
      en: 'An iOS app with book summaries: text and audio, quizzes and spaced-repetition flashcards so the ideas stick, and an AI mentor that answers questions about the book.',
    },
    role: {
      ru: 'Собрал один и опубликовал в App Store в сентябре 2026: приложение, бэкенд на Supabase, AI-ментор, сборки и релиз.',
      en: 'Built solo and published on the App Store in September 2026: the app, the Supabase backend, the AI mentor, the builds and the release.',
    },
    system: {
      ru: 'Приложение на React Native (Expo), TypeScript и NativeWind. Бэкенд на Supabase: PostgreSQL с row-level security и Edge Functions для чата, рекомендаций и выдачи аудио. AI-ментор отвечает с опорой на векторный поиск по эмбеддингам Voyage в pgvector. Кэш TanStack Query сохраняется в AsyncStorage.',
      en: 'The app is React Native (Expo), TypeScript and NativeWind. The backend is Supabase: PostgreSQL with row-level security and Edge Functions for chat, recommendations and audio delivery. The AI mentor grounds its answers in vector search over Voyage embeddings in pgvector. The TanStack Query cache is persisted to AsyncStorage.',
    },
    evidence: [
      {
        ru: 'Опубликовано в App Store 18 сентября 2026 года, версия 1.0.',
        en: 'Published on the App Store on 18 September 2026, version 1.0.',
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
    title: 'Profit Controller — restaurant analytics',
    period: { ru: '2026', en: '2026' },
    context: {
      ru: 'Аналитика для ресторанов: превращает данные POS-системы iiko в ранжированный список находок с оценкой в деньгах и обоснованием по каждой.',
      en: 'Restaurant analytics: turns data from the iiko POS system into ranked findings, each quantified in money and backed by evidence.',
    },
    role: {
      ru: 'Собрал один: коннектор к iiko, расчёт метрик, интерфейс, ассистент и деплой.',
      en: 'Built solo: the iiko connector, the metrics engine, the interface, the assistant and the deployment.',
    },
    system: {
      ru: 'Next.js (App Router), TypeScript, Drizzle ORM и PostgreSQL, аутентификация на better-auth. Ассистент на Claude API объясняет рассчитанные метрики.',
      en: 'Next.js (App Router), TypeScript, Drizzle ORM and PostgreSQL, with better-auth for authentication. An assistant on the Claude API explains the computed metrics.',
    },
    evidence: [
      {
        ru: '600+ тестов на Vitest, интеграционные тесты и e2e-тесты на Playwright в GitHub Actions.',
        en: '600+ Vitest tests, plus integration tests and Playwright end-to-end tests, run in GitHub Actions.',
      },
      {
        ru: 'Деплой через Docker и Caddy.',
        en: 'Deployed with Docker and Caddy.',
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
    title: 'EVCARGO — logistics and transport CRM',
    badge: { ru: '5 лет', en: '5 years' },
    period: { ru: '02.2021 — 12.2025', en: 'Feb 2021 — Dec 2025' },
    context: {
      ru: 'CRM для логистики и перевозок британского логистического оператора: веб-приложение и мобильное приложение. Несколько продуктовых направлений, и один интерфейс, который должен был оставаться единым во всех.',
      en: 'A logistics and transport CRM for a UK logistics operator, with a web app and a mobile app. Several product areas, and one interface that had to hold together across all of them.',
    },
    role: {
      ru: 'Фронтенд платформы: дизайн-система и библиотека компонентов, клиентская архитектура, code review по фронтенду.',
      en: 'Frontend across the platform: the design system and component library, the client-side architecture, and frontend code review.',
    },
    system: {
      ru: 'Сначала общая дизайн-система и библиотека компонентов, затем клиентская архитектура вокруг них — новые экраны наследовали консистентность, а не собирали её заново. Данные из REST шли через React Query и Axios в одном месте, поэтому обновление токенов, кэширование, пагинация, фильтрация, инвалидация и обработка ошибок работали одинаково на всех экранах.',
      en: 'The shared design system and component library came first, then the client architecture around them, so new screens inherited consistency instead of re-deriving it. REST data went through React Query and Axios in one place, so auth refresh, caching, pagination, filtering, invalidation and error handling behaved identically everywhere.',
    },
    evidence: [
      {
        ru: 'Пять лет на одной продакшн-платформе, в кросс-функциональной Scrum-команде.',
        en: 'Five years on the same production platform, in a cross-functional Scrum team.',
      },
      {
        ru: 'Участвовал в мобильном приложении на React Native и кросс-платформенных релизах, включая обновления Android SDK и проверку сборок iOS.',
        en: 'Contributed to the React Native app and cross-platform releases, including Android SDK upgrades and iOS release validation.',
      },
      {
        ru: 'Внедрил тесты Playwright на критичные пользовательские сценарии.',
        en: 'Introduced Playwright coverage for critical user flows.',
      },
      {
        ru: 'Вёл code review по фронтенду, оценку и координацию релизов.',
        en: 'Ran frontend code review, estimation and release coordination.',
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

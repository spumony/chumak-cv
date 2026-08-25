import type { CaseStudy } from '../types'

/**
 * Order is deliberate: Rivella is the strongest public technical proof — it is
 * deployed, it is verifiable, and nothing about it depends on a private
 * repository. EVCARGO is the long-running commercial evidence.
 *
 * Multisoft lives in Experience, where it is already prominent as the current role.
 * Every line in `evidence` is governed by docs/candidate-evidence.md.
 *
 * A third personal project is deliberately absent: its publication policy allows
 * the product name and nothing else, and a card carrying only a name is not a
 * portfolio entry. Do not add it back without an explicit widening of that policy.
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
    title: 'EVCARGO — e-mobility logistics platform',
    badge: { ru: '5 лет', en: '5 years' },
    period: { ru: '01.2021 — 12.2025', en: 'Jan 2021 — Dec 2025' },
    context: {
      ru: 'Продакшн-платформа логистики для электротранспорта. Несколько продуктовых направлений, и один интерфейс, который должен был оставаться единым во всех.',
      en: 'A production logistics platform in e-mobility. Several product areas, and one interface that had to hold together across all of them.',
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

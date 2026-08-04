import type { CaseStudy } from '../types'

export const work: CaseStudy[] = [
  {
    title: 'Multisoft — restaurant CRM platform',
    status: 'current',
    period: { ru: '01.2026 — настоящее время', en: 'Jan 2026 — Present' },
    problem: {
      ru: 'Multisoft делает CRM для ресторанов: через неё принимают заказы и ведут меню, а поверх этого — отчётность. Пришёл на проект в январе 2026 года. Клиентскую часть начинал с нуля и веду один.',
      en: 'Multisoft sells a CRM for restaurants: orders and menu management, with reporting layered on top. I joined in January 2026. The web client started from zero and I am the only frontend engineer on it.',
    },
    approach: {
      ru: 'Архитектуру и систему компонентов взял на себя, роутинг и фронтенд-стандарты зафиксировал письменно. Стек — Next.js и TypeScript. Больше всего работы в экранах с плотными данными: модули заказов и меню, таблицы отчётов, фильтры, длинные формы.',
      en: 'The architecture and the component system were my call, and the routing and frontend standards are written down. Stack is Next.js and TypeScript. Most of the work sits in dense screens: order and menu modules, reporting tables, filtering, long forms.',
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    outcome: {
      ru: 'Делаю модули заказов, меню и отчётности на одном наборе компонентов. Фронтенд-стандарты в этом проекте написал я.',
      en: 'I build the order, menu and reporting modules on one shared component set. The frontend conventions on this codebase are the ones I wrote.',
    },
  },
  {
    title: 'Prosvetum — book summaries with an AI mentor (iOS)',
    status: 'beta',
    period: {
      ru: 'v1.0.0 в TestFlight, бета Apple',
      en: 'v1.0.0 in TestFlight, Apple beta',
    },
    problem: {
      ru: 'Нонфикшн покупают чаще, чем дочитывают. Prosvetum собирает ключевые идеи книг из общественного достояния в текст и аудио, а квизы и карточки с повторением помогают их удержать.',
      en: 'People buy nonfiction more often than they finish it. Prosvetum turns public-domain books into key ideas you can read or listen to, and quizzes and flashcards help them stick.',
    },
    approach: {
      ru: 'Платный доступ проверяет сама база, поэтому подмена на стороне приложения ничего не даёт. Наставник заперт в одной книге. Вопрос уходит в эмбеддинги Voyage, ближайшие фрагменты находит HNSW-индекс в pgvector, Claude отвечает потоком.',
      en: 'The database itself decides who gets paid content, so tampering with the app changes nothing. The mentor is fenced to one book. A question goes to Voyage embeddings, an HNSW index in pgvector finds the nearest passages, and Claude streams the answer.',
    },
    stack: ['React Native / Expo', 'TypeScript', 'Supabase', 'RAG', 'Claude'],
    outcome: {
      ru: '39 саммари в каталоге, весь контент подготовил через собственный конвейер. Сборка v1.0.0 живёт в TestFlight, публикация в App Store ещё впереди. Свой набор тестов покрывает 43 правила доступа, проходят все.',
      en: '39 summaries in the catalogue, all produced through a pipeline I wrote. The v1.0.0 build is live in TestFlight and the App Store listing is still ahead. My own test suite covers 43 access rules and all 43 pass.',
    },
  },
  {
    title: 'EVCARGO — e-mobility logistics platform',
    status: 'shipped',
    period: { ru: '01.2021 — 12.2025', en: 'Jan 2021 — Dec 2025' },
    problem: {
      ru: 'EVCARGO — логистическая платформа для электротранспорта, работавшая в продакшене. В продукте было несколько разделов, интерфейс должен был оставаться единым.',
      en: 'EVCARGO is a production logistics platform in e-mobility. The product spanned several areas and the UI had to hold together across them.',
    },
    approach: {
      ru: 'Собрал общую дизайн-систему и библиотеку компонентов, вокруг них выстроил клиентскую архитектуру. Данные из REST шли через React Query, поэтому кэширование и инвалидация работали одинаково на всех экранах. Вёл code review и техническое планирование по фронтенду.',
      en: 'I built the shared design system and component library, then designed the client-side architecture around them. REST data went through React Query, so caching and invalidation behaved the same on every screen. I ran frontend code review and technical planning.',
    },
    stack: ['React', 'TypeScript', 'Next.js', 'React Query', 'Tailwind CSS'],
    outcome: {
      ru: 'Пять лет на одной продакшн-платформе, с января 2021 по декабрь 2025 года. Новые фичи собирали из дизайн-системы, я вёл code review по фронтенду.',
      en: 'Five years on the same production platform, January 2021 to December 2025. New frontend work was built from the design system, and I ran frontend code review.',
    },
  },
  {
    title: 'Rivella — AI sales assistant',
    status: 'in-progress',
    problem: {
      ru: 'Салоны и студии с записью на услуги теряют заявки, которые приходят вне рабочих часов: отвечает менеджер, а он работает по графику. Идея — ассистент, который отвечает сам и сразу бронирует свободный слот.',
      en: 'Businesses that run on appointments lose the enquiries that arrive outside working hours, because a human manager only answers during them. The idea was an assistant that replies on its own and books a free slot right away.',
    },
    approach: {
      ru: 'Собрал продукт целиком один на Next.js (App Router) и TypeScript. Слой LLM: промпты, сценарии диалога, отработка возражений и RAG по базе знаний, своей у каждого клиента. Бэкенд со схемой данных, мультитенантностью и аутентификацией. Интеграции с YClients и Telegram — бот читает свободные слоты и создаёт записи. Админка с воронкой, аналитикой и тарифами. Интерфейс двуязычный, RU и EN.',
      en: 'Built the whole product solo on Next.js (App Router) and TypeScript. The LLM layer: prompts, dialogue flows, objection handling and RAG over a knowledge base that is separate per tenant. A backend with the data schema, multi-tenancy and auth. YClients and Telegram integrations, so the bot reads free slots and creates bookings. An admin panel with a funnel, analytics and billing tiers. The UI ships in Russian and English.',
    },
    stack: ['Next.js', 'TypeScript', 'RAG', 'Telegram Bot API', 'YClients API'],
    outcome: {
      ru: 'Продукт собран целиком, от схемы базы и слоя LLM до админки с воронкой и аналитикой. Развёрнут и работает. Платящих клиентов пока нет.',
      en: 'The product is built in full, from the database schema and the LLM layer through to the admin panel with its funnel and analytics. It is deployed and running. There are no paying customers yet.',
    },
    links: { live: 'https://rivella.app' },
  },
]

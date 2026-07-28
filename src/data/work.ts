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
    title: 'Rivella — AI sales assistant',
    status: 'in-progress',
    problem: {
      ru: 'Салоны и студии с записью на услуги теряют заявки, которые приходят вне рабочих часов: отвечает менеджер, а он работает по графику. Идея — ассистент, который отвечает сам и сразу бронирует свободный слот.',
      en: 'Businesses that run on appointments lose the enquiries that arrive outside working hours, because a human manager only answers during them. The idea was an assistant that replies on its own and books a free slot right away.',
    },
    approach: {
      ru: 'Собрал продукт целиком один на Next.js (App Router) и TypeScript. Слой LLM: промпты, сценарии диалога, база знаний под каждого клиента, отработка возражений. Бэкенд со схемой данных, мультитенантностью и аутентификацией. Интеграции с YClients и Telegram — бот читает свободные слоты и создаёт записи. Админка с воронкой, аналитикой и тарифами. Интерфейс двуязычный, RU и EN.',
      en: 'Built the whole product solo on Next.js (App Router) and TypeScript. The LLM layer: prompts, dialogue flows, a per-tenant knowledge base, objection handling. A backend with the data schema, multi-tenancy and auth. YClients and Telegram integrations, so the bot reads free slots and creates bookings. An admin panel with a funnel, analytics and billing tiers. The UI ships in Russian and English.',
    },
    stack: ['Next.js', 'TypeScript', 'LLM', 'Telegram Bot API', 'YClients API'],
    outcome: {
      ru: 'Продукт собран end-to-end: от схемы базы и слоя LLM до админки и тарифов. В продакшене пока не запускался.',
      en: 'The product is built end to end, from the database schema and the LLM layer through to the admin panel and billing tiers. It has not gone to production yet.',
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
]

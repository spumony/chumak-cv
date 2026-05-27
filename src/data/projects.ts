import type { Project } from '../types'

// Live/source links are intentionally omitted for commercial work.
// Add `links: { live, source }` per project when you have public URLs.
export const projects: Project[] = [
  {
    title: {
      ru: 'Learning Platform / Bookmark Manager',
      en: 'Learning Platform / Bookmark Manager',
    },
    description: {
      ru: 'Full-stack приложение с нуля: session-аутентификация (bcrypt, httpOnly-куки), защищённый REST API с авторизацией по владению ресурсом, менеджер закладок с фоновым скрейпингом OG-тегов (Inngest), пагинацией и поиском, и дашборд прогресса обучения. Каждая строка написана и осмыслена вручную.',
      en: 'A from-scratch full-stack app: session auth (bcrypt, httpOnly cookies), a protected REST API with ownership-based authorization, a bookmark manager with background OG-tag scraping (Inngest), pagination and search, plus a learning-progress dashboard. Every line written and reasoned through by hand.',
    },
    technologies: [
      'Next.js 16',
      'PostgreSQL',
      'Drizzle ORM',
      'Inngest',
      'TypeScript',
    ],
    featured: true,
  },
  {
    title: { ru: 'EVCARGO', en: 'EVCARGO' },
    description: {
      ru: 'Логистическая платформа в сфере электромобильности. Отвечаю за архитектуру клиентской части, дизайн-систему и производительность интерфейса в продакшене.',
      en: 'An e-mobility logistics platform. I own the client-side architecture, the design system and front-end performance in production.',
    },
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'React Query',
      'Tailwind CSS',
    ],
  },
  {
    title: { ru: 'Дизайн-система', en: 'Design System' },
    description: {
      ru: 'Библиотека переиспользуемых UI-компонентов и токенов, обеспечивающая единый визуальный язык и ускоряющая разработку фич.',
      en: 'A reusable component and token library that enforces one visual language and speeds up feature delivery.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Design Tokens'],
  },
  {
    title: { ru: 'Фриланс-проекты', en: 'Freelance Web Apps' },
    description: {
      ru: 'Набор клиентских веб-приложений: разработка с нуля, рефакторинг устаревших интерфейсов и оптимизация производительности.',
      en: 'A set of client web apps: greenfield builds, refactors of legacy interfaces and performance optimisation.',
    },
    technologies: ['React', 'JavaScript', 'CSS'],
  },
]

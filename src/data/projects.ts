import type { Project } from '../types'

// Live/source links are intentionally omitted for commercial work.
// Add `links: { live, source }` per project when you have public URLs.
export const projects: Project[] = [
  {
    title: { ru: 'EVCARGO', en: 'EVCARGO' },
    description: {
      ru: 'Логистическая платформа в сфере электромобильности. Отвечал за архитектуру клиентской части, дизайн-систему и производительность интерфейса в продакшене.',
      en: 'An e-mobility logistics platform. I owned the client-side architecture, the design system and front-end performance in production.',
    },
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'React Query',
      'Tailwind CSS',
    ],
    featured: true,
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

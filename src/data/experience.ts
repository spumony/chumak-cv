import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    company: { ru: 'TeamArt — EVCARGO', en: 'TeamArt — EVCARGO' },
    location: { ru: 'Удалённо', en: 'Remote' },
    role: {
      ru: 'Frontend-разработчик',
      en: 'Frontend Developer',
    },
    period: { ru: '2021 — настоящее время', en: '2021 — Present' },
    description: {
      ru: 'Развиваю frontend логистической платформы в сфере электромобильности — от проработки требований до релиза в Scrum-команде.',
      en: 'Building and evolving the frontend of an e-mobility logistics platform end to end — from requirements to release within a Scrum team.',
    },
    bullets: [
      {
        ru: 'Проектирую масштабируемую архитектуру клиентской части и переиспользуемые UI-компоненты.',
        en: 'Designed a scalable client-side architecture and a library of reusable UI components.',
      },
      {
        ru: 'Создаю и поддерживаю единую дизайн-систему, обеспечивая консистентность интерфейса.',
        en: 'Built and maintain a shared design system that keeps the product UI consistent.',
      },
      {
        ru: 'Интегрирую REST API и оптимизирую работу с данными на стороне клиента.',
        en: 'Integrated REST APIs and optimised client-side data handling and caching.',
      },
      {
        ru: 'Участвую в code review и техническом планировании задач.',
        en: 'Drive code reviews and technical planning across the team.',
      },
    ],
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'React Query',
      'Tailwind CSS',
      'REST API',
    ],
  },
  {
    company: { ru: 'Фриланс', en: 'Freelance' },
    location: { ru: 'Удалённо', en: 'Remote' },
    role: {
      ru: 'Web-разработчик',
      en: 'Web Developer',
    },
    period: { ru: '2019 — 2020', en: '2019 — 2020' },
    description: {
      ru: 'Разрабатывал и сопровождал веб-приложения для разных клиентов.',
      en: 'Built and maintained web applications for a range of clients.',
    },
    bullets: [
      {
        ru: 'Рефакторил и модернизировал устаревшие интерфейсы.',
        en: 'Refactored and modernised legacy interfaces.',
      },
      {
        ru: 'Повышал производительность и улучшал пользовательский опыт.',
        en: 'Improved performance and overall user experience.',
      },
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
  },
  {
    company: {
      ru: 'Exterior Security Systems',
      en: 'Exterior Security Systems',
    },
    location: { ru: 'Кишинёв, Молдова', en: 'Chișinău, Moldova' },
    role: {
      ru: 'Web-дизайнер',
      en: 'Web Designer',
    },
    period: { ru: '2018 — 2019', en: '2018 — 2019' },
    description: {
      ru: 'Разрабатывал визуальные концепции и цифровые материалы для веб-проектов и маркетинга.',
      en: 'Created visual concepts and digital assets for web projects and marketing.',
    },
    technologies: ['Figma', 'HTML', 'CSS'],
  },
]

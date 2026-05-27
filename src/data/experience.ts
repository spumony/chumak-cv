import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    company: { ru: 'Multisoft', en: 'Multisoft' },
    location: { ru: 'Румыния · удалённо', en: 'Romania · Remote' },
    role: {
      ru: 'Ведущий Frontend-разработчик',
      en: 'Lead Frontend Developer',
    },
    period: { ru: '2026 — настоящее время', en: '2026 — Present' },
    current: true,
    description: {
      ru: 'Основной фронтенд CRM-системы для ресторанов — от архитектуры до релиза.',
      en: 'Lead frontend on a restaurant CRM — from architecture to release.',
    },
    bullets: [
      {
        ru: 'Проектирую UI и клиентскую архитектуру продукта с нуля.',
        en: 'Designing the product UI and client-side architecture from scratch.',
      },
      {
        ru: 'Модули заказов, меню и отчётности, интеграция с API.',
        en: 'Order, menu and reporting modules; API integration.',
      },
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    company: { ru: 'TeamArt — EVCARGO', en: 'TeamArt — EVCARGO' },
    location: { ru: 'Удалённо', en: 'Remote' },
    role: {
      ru: 'Frontend-разработчик',
      en: 'Frontend Developer',
    },
    period: { ru: '2021 — декабрь 2025', en: '2021 — Dec 2025' },
    description: {
      ru: 'Frontend логистической платформы в сфере электромобильности.',
      en: 'Frontend of an e-mobility logistics platform.',
    },
    bullets: [
      {
        ru: 'Масштабируемая клиентская архитектура и общая дизайн-система.',
        en: 'Scalable client architecture and a shared design system.',
      },
      {
        ru: 'Интеграция REST API, code review, техническое планирование.',
        en: 'REST API integration, code reviews and technical planning.',
      },
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'React Query'],
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
      ru: 'Разработка и модернизация веб-приложений для разных клиентов.',
      en: 'Built and modernised web apps for a range of clients.',
    },
    technologies: ['React', 'JavaScript', 'CSS'],
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
      ru: 'Визуальные концепции и цифровые материалы для веба и маркетинга.',
      en: 'Visual concepts and digital assets for web and marketing.',
    },
    technologies: ['Figma', 'HTML', 'CSS'],
  },
]

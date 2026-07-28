import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    company: { ru: 'Multisoft', en: 'Multisoft' },
    location: { ru: 'Румыния · удалённо', en: 'Romania · Remote' },
    role: {
      ru: 'Ведущий Frontend-разработчик',
      en: 'Lead Frontend Developer',
    },
    period: { ru: '01.2026 — настоящее время', en: 'Jan 2026 — Present' },
    current: true,
    description: {
      ru: 'Веду фронтенд CRM-платформы для ресторанов: архитектура, система компонентов, модули заказов и меню, отчётность.',
      en: 'I own the frontend of the restaurant CRM platform: architecture, component system, order and menu modules, reporting.',
    },
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'REST API',
    ],
  },
  {
    company: { ru: 'TeamArt — EVCARGO', en: 'TeamArt — EVCARGO' },
    location: { ru: 'Удалённо', en: 'Remote' },
    role: {
      ru: 'Frontend-разработчик',
      en: 'Frontend Developer',
    },
    period: { ru: '01.2021 — 12.2025', en: 'Jan 2021 — Dec 2025' },
    description: {
      ru: 'Развивал фронтенд продакшн-платформы для логистики электротранспорта в кросс-функциональной Scrum-команде.',
      en: 'Frontend of a production logistics platform in e-mobility, inside a cross-functional Scrum team.',
    },
    technologies: ['React', 'TypeScript', 'Next.js', 'React Query'],
  },
  {
    company: { ru: 'Фриланс', en: 'Freelance' },
    location: { ru: 'Удалённо', en: 'Remote' },
    role: {
      ru: 'Web-разработчик',
      en: 'Web Developer',
    },
    period: { ru: '08.2019 — 12.2020', en: 'Aug 2019 — Dec 2020' },
    description: {
      ru: 'Разрабатывал веб-приложения для клиентов и дорабатывал существующие. Работал в одиночку.',
      en: 'Built web apps for clients and reworked existing ones. Worked solo.',
    },
    bullets: [
      {
        ru: 'Рефакторил легаси-интерфейсы на JavaScript и React.',
        en: 'Refactored legacy interfaces in JavaScript and React.',
      },
    ],
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
    period: { ru: '10.2018 — 03.2019', en: 'Oct 2018 — Mar 2019' },
    description: {
      ru: 'Рисовал страницы сайтов и маркетинговые материалы в Figma, правил вёрстку в HTML и CSS.',
      en: "Designed web pages and marketing material in Figma, and worked in the site's HTML and CSS.",
    },
    technologies: ['Figma', 'HTML', 'CSS'],
  },
]

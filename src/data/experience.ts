import type { ExperienceItem } from '../types'

// One sentence of scope, then bullets for ownership, architecture and evidence.
// Facts are governed by docs/candidate-evidence.md.
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
      ru: 'Единственный фронтенд-инженер CRM для ресторанов: архитектура фронтенда и выпуск — на мне.',
      en: 'Sole frontend engineer on a restaurant CRM: frontend architecture and delivery are mine.',
    },
    bullets: [
      {
        ru: 'Клиент на Next.js и TypeScript начинал с нуля; систему компонентов, структуру роутинга и фронтенд-стандарты спроектировал и записал.',
        en: 'Built the Next.js/TypeScript client from zero, and designed the component system, routing structure and frontend conventions written down on it.',
      },
      {
        ru: 'Модули заказов, меню и отчётности работают на одном наборе компонентов: плотные таблицы, фильтры, валидация и длинные формы поверх REST API.',
        en: 'Order, menu and reporting modules run on one shared component set: dense tables, filtering, validation and long forms over REST APIs.',
      },
      {
        ru: 'Перевожу продуктовые требования в технические планы и довожу фичи до релиза вместе с продуктовой и бэкенд-командой.',
        en: 'Take product requirements through technical planning to release with the product and backend team.',
      },
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
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
      ru: 'Пять лет на продакшн-платформе логистики электротранспорта, в кросс-функциональной Scrum-команде.',
      en: 'Five years on a production e-mobility logistics platform, in a cross-functional Scrum team.',
    },
    bullets: [
      {
        ru: 'Собирал и поддерживал общую дизайн-систему и библиотеку компонентов, вокруг них выстроил клиентскую архитектуру.',
        en: 'Built and maintained the shared design system and component library, and structured the client-side architecture around them.',
      },
      {
        ru: 'Собрал слой данных на React Query и Axios: обновление токенов, кэширование, пагинация, фильтрация, инвалидация и обработка ошибок.',
        en: 'Built the REST data layer on React Query and Axios: auth refresh, caching, pagination, filtering, invalidation and error handling.',
      },
      {
        ru: 'Участвовал в мобильном приложении на React Native и кросс-платформенных релизах, внедрил тесты Playwright на критичные сценарии и вёл code review по фронтенду.',
        en: 'Contributed to the React Native app and cross-platform releases, introduced Playwright coverage for critical flows, and ran frontend code review.',
      },
    ],
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'React Query',
      'React Native',
      'Playwright',
    ],
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
      ru: 'Разрабатывал и модернизировал клиентские веб-приложения на JavaScript и React, включая рефакторинг легаси-интерфейсов.',
      en: 'Built and modernised client web applications in JavaScript and React, including legacy UI refactoring and end-to-end feature delivery.',
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
    period: { ru: '10.2018 — 03.2019', en: 'Oct 2018 — Mar 2019' },
    description: {
      ru: 'Рисовал страницы сайтов и маркетинговые материалы в Figma, правил вёрстку в HTML и CSS.',
      en: "Designed web pages and marketing material in Figma, and worked in the site's HTML and CSS.",
    },
    technologies: ['Figma', 'HTML', 'CSS'],
  },
]

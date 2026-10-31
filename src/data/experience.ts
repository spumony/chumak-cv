import type { ExperienceItem } from '../types'

// One sentence of scope, then bullets for ownership, architecture and evidence.
// Facts are governed by docs/candidate-evidence.md.
export const experience: ExperienceItem[] = [
  {
    company: { ru: 'TeamArt — Multisoft', en: 'TeamArt — Multisoft' },
    location: { ru: 'Удалённо', en: 'Remote' },
    role: {
      ru: 'Frontend-разработчик',
      en: 'Frontend Developer',
    },
    period: { ru: '01.2026 — 08.2026', en: 'Jan 2026 — Aug 2026' },
    description: {
      ru: 'CRM для ресторана у румынского разработчика ПО для HoReCa: интерфейсы для администратора, кухни и официантов. Был единственным фронтенд-разработчиком на проекте.',
      en: 'Restaurant CRM for a Romanian HoReCa software vendor: interfaces for administrators, kitchen staff and waiters. I was the only frontend engineer on the project.',
    },
    bullets: [
      {
        ru: 'Собрал клиент на Next.js и TypeScript с нуля; спроектировал систему компонентов, структуру роутинга и фронтенд-конвенции и задокументировал их.',
        en: 'Built the Next.js/TypeScript client from scratch, and designed and documented the component system, routing structure and frontend conventions.',
      },
      {
        ru: 'Сделал плотные таблицы, фильтры, валидацию и длинные формы поверх REST API на одном общем наборе компонентов.',
        en: 'Implemented dense tables, filtering, validation and long forms over REST APIs on one shared component set.',
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
    period: { ru: '02.2021 — 12.2025', en: 'Feb 2021 — Dec 2025' },
    description: {
      ru: 'Пять лет на CRM для логистики и перевозок британского оператора, веб и мобильное приложение, в кросс-функциональной Scrum-команде.',
      en: 'Five years on a logistics and transport CRM for a UK logistics operator, web and mobile, in a cross-functional Scrum team.',
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
      ru: 'Разрабатывал и поддерживал веб-приложения на JavaScript, React и WordPress для малого бизнеса, переписывал устаревшие интерфейсы.',
      en: 'Built and maintained web applications in JavaScript, React and WordPress for small businesses; refactored legacy interfaces.',
    },
    technologies: ['React', 'JavaScript', 'WordPress'],
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

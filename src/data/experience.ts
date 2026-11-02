import type { ExperienceItem } from '../types'

// One sentence of scope per role. The TeamArt projects have no bullets on
// purpose: their detail lives in the Selected work cards.
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
      ru: 'CRM для ресторанов у румынского разработчика ПО для HoReCa: три отдельных приложения для администратора, кухни и официантов. Единственный фронтенд-разработчик на проекте.',
      en: 'Restaurant CRM for a Romanian HoReCa software vendor: three separate apps for administrators, kitchen staff and waiters. The only frontend engineer on the project.',
    },
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

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
      ru: 'Единственный фронтенд-разработчик CRM-платформы для ресторанов — отвечаю за архитектуру, UI и поставку фич.',
      en: 'Sole frontend developer on a restaurant CRM platform — owning the architecture, UI and feature delivery.',
    },
    bullets: [
      {
        ru: 'Строю клиентскую часть с нуля на Next.js и TypeScript: архитектура, система компонентов, роутинг.',
        en: 'Building the client app from scratch in Next.js and TypeScript — architecture, component system and routing.',
      },
      {
        ru: 'Реализую модули заказов, меню и отчётности: насыщенные данными таблицы, фильтры и сложные формы.',
        en: 'Shipping order, menu and reporting modules — data-heavy tables, filtering and complex forms.',
      },
      {
        ru: 'Задаю дизайн-систему и фронтенд-стандарты, держу интерфейс быстрым и консистентным.',
        en: 'Setting the design system and frontend standards, keeping the UI fast and consistent.',
      },
    ],
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
    period: { ru: '2021 — декабрь 2025', en: '2021 — Dec 2025' },
    description: {
      ru: 'Развивал фронтенд продакшн-платформы логистики в электромобильности в кросс-функциональной Scrum-команде.',
      en: 'Built the frontend of a production e-mobility logistics platform within a cross-functional Scrum team.',
    },
    bullets: [
      {
        ru: 'Создал и поддерживал общую дизайн-систему и библиотеку переиспользуемых компонентов.',
        en: 'Built and maintained a shared design system and reusable component library.',
      },
      {
        ru: 'Спроектировал масштабируемую клиентскую архитектуру, интегрировал REST API через React Query.',
        en: 'Designed scalable client-side architecture and integrated REST APIs with React Query.',
      },
      {
        ru: 'Вёл code review и техническое планирование — от требований до релиза.',
        en: 'Drove code reviews and technical planning, from requirements to release.',
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
      ru: 'Разрабатывал и модернизировал веб-приложения для клиентов под ключ.',
      en: 'Delivered and modernised web apps for clients end to end.',
    },
    bullets: [
      {
        ru: 'Рефакторил легаси-интерфейсы, повышал производительность и улучшал UX.',
        en: 'Refactored legacy interfaces and improved performance and UX.',
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
    period: { ru: '2018 — 2019', en: '2018 — 2019' },
    description: {
      ru: 'Создавал визуальные концепции и цифровые материалы для веба и маркетинга.',
      en: 'Created visual concepts and digital assets for web and marketing.',
    },
    technologies: ['Figma', 'HTML', 'CSS'],
  },
]

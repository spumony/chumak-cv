import type { CaseStudy } from '../types'

export const work: CaseStudy[] = [
  {
    title: 'Learning Platform / Bookmark Manager',
    status: 'in-progress',
    period: { ru: '2026 — в процессе', en: '2026 — in progress' },
    problem: {
      ru: 'Хочу перейти из фронтенда в AI-инжиниринг — но туториалы не дают глубины. Нужен реальный full-stack продукт, на котором можно учиться backend, БД, фоновым задачам и LLM-фичам, ловить настоящие баги и принимать архитектурные решения.',
      en: 'I wanted to move from frontend into AI engineering — but tutorials never go deep enough. I needed a real full-stack product to learn backend, databases, background jobs and LLM features on, with real bugs and real architecture calls.',
    },
    approach: {
      ru: 'Строю с нуля на Next.js 16 + TypeScript: session-аутентификация (bcrypt, httpOnly-куки), REST API с авторизацией по владению ресурсом, схема PostgreSQL с Drizzle ORM (включая baseline-миграции), фоновый скрейпинг OG-тегов через Inngest. Дальше — RAG-поиск (pgvector) и harness для evals.',
      en: 'Building from scratch on Next.js 16 + TypeScript: session auth (bcrypt, httpOnly cookies), a REST API with ownership-based authorization, a PostgreSQL schema via Drizzle ORM (including baseline migrations) and background OG-tag scraping via Inngest. Next: RAG search (pgvector) and an evals harness.',
    },
    stack: [
      'Next.js 16',
      'TypeScript',
      'PostgreSQL',
      'Drizzle ORM',
      'Inngest',
      'Zod',
    ],
    outcome: {
      ru: 'За ~месяц с нуля прошёл цепочку SQL → ORM → auth → REST → фоновые задачи, написав каждую строку руками: ловил баги (integer overflow, race conditions, валидация), разбирался в security-компромиссах (хеш vs шифрование, authN vs authZ, idempotency). Получился редкий микс «продукт + AI» — профиль Product Engineer.',
      en: 'In ~a month from zero, walked the chain SQL → ORM → auth → REST → background jobs — every line by hand. Caught my own bugs (integer overflow, race conditions, validation) and reasoned through security trade-offs (hashing vs encryption, authN vs authZ, idempotency). The product + AI mix is the Product Engineer profile.',
    },
  },
  {
    title: 'EVCARGO — e-mobility logistics platform',
    status: 'shipped',
    period: { ru: '2021 — декабрь 2025', en: '2021 — Dec 2025' },
    problem: {
      ru: 'Логистической платформе в сфере электромобильности нужно было быстро развивать продакшн-frontend в кросс-функциональной Scrum-команде — без потери качества и единства интерфейса между продуктовыми зонами.',
      en: 'A production e-mobility logistics platform needed to evolve its frontend quickly inside a cross-functional Scrum team — without losing quality or UI consistency across product areas.',
    },
    approach: {
      ru: 'Спроектировал масштабируемую клиентскую архитектуру, создал и поддерживал общую дизайн-систему и библиотеку переиспользуемых компонентов, интегрировал REST API через React Query и вёл code review + техническое планирование от требований до релиза.',
      en: 'Designed a scalable client-side architecture, built and maintained a shared design system and reusable component library, integrated REST APIs via React Query and drove code reviews and technical planning from requirements to release.',
    },
    stack: [
      'React',
      'TypeScript',
      'Next.js',
      'React Query',
      'Tailwind CSS',
    ],
    outcome: {
      ru: 'Дизайн-система и общие компоненты ускорили доставку фич между продуктовыми зонами, REST-интеграции получили консистентный кэш-слой, а полный цикл (требования → код → ревью → релиз) шёл без блокировок между продуктом, дизайном и инженерией.',
      en: 'The design system and shared components sped up feature delivery across product areas, REST integrations got a consistent caching layer, and the full cycle (requirements → code → review → release) ran without blockers across product, design and engineering.',
    },
  },
  {
    title: 'Multisoft — restaurant CRM platform',
    status: 'current',
    period: { ru: '2026 — настоящее время', en: '2026 — Present' },
    problem: {
      ru: 'CRM-платформе для ресторанов нужен единственный фронтенд-разработчик, который возьмёт ответственность за архитектуру, дизайн-систему и поставку фич — от заказов и меню до отчётности.',
      en: 'A restaurant CRM platform needed a sole frontend developer to own architecture, the design system and feature delivery — from order and menu modules to reporting.',
    },
    approach: {
      ru: 'Строю клиентскую часть с нуля на Next.js + TypeScript: архитектура, система компонентов, роутинг и дизайн-стандарты. Делаю модули заказов, меню и отчётности — насыщенные данными таблицы, фильтры и сложные формы.',
      en: 'Building the client app from scratch on Next.js + TypeScript: architecture, component system, routing and frontend standards. Shipping order, menu and reporting modules with data-heavy tables, filtering and complex forms.',
    },
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'REST API',
    ],
    outcome: {
      ru: 'Поставляю фичи как senior IC, держу UI быстрым и консистентным, задаю фронтенд-стандарты и дизайн-систему как ведущий разработчик продукта.',
      en: 'Shipping as a senior IC, keeping the UI fast and consistent, and setting the frontend standards and design system as the lead developer on the product.',
    },
  },
]

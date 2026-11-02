import type { SkillCategory } from '../types'

/**
 * Frontend first, always — it is the strongest match and the primary track.
 *
 * Every entry needs public evidence: commercial work, Rivella, Prosvetum or
 * Profit Controller.
 * Do not add a skill without it — see docs/candidate-evidence.md.
 */
export const skills: SkillCategory[] = [
  {
    category: { ru: 'Frontend', en: 'Frontend' },
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'Next.js (App Router)',
      'React Native',
      'Expo',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'TanStack Query',
      'Axios',
      'NativeWind',
      'Zod',
      {
        ru: 'Продуктовый / UI-дизайн (Figma)',
        en: 'Product / UI design (Figma)',
      },
    ],
  },
  {
    category: {
      ru: 'Архитектура и качество',
      en: 'Architecture & Quality',
    },
    items: [
      { ru: 'Дизайн-системы', en: 'Design systems' },
      { ru: 'Библиотеки компонентов', en: 'Component libraries' },
      { ru: 'Интеграция REST', en: 'REST integration' },
      { ru: 'Сценарии аутентификации', en: 'Auth flows' },
      { ru: 'Доступность', en: 'Accessibility' },
      'Playwright',
      'Jest',
      'Vitest',
      'CI/CD (GitHub Actions)',
      'EAS',
      'Sentry',
      { ru: 'Code review', en: 'Code review' },
    ],
  },
  {
    category: { ru: 'Бэкенд и данные', en: 'Backend & Data' },
    items: [
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Drizzle ORM',
      {
        ru: 'Полнотекстовый поиск PostgreSQL',
        en: 'PostgreSQL full-text search',
      },
      'Supabase',
      'pgvector',
      'Docker',
      { ru: 'Дизайн REST API', en: 'REST API design' },
      'OpenAPI / Swagger',
      'JWT',
      { ru: 'Мультитенантность', en: 'Multi-tenancy' },
    ],
  },
  {
    category: { ru: 'Прикладной AI', en: 'Applied AI' },
    items: [
      'Anthropic Claude API',
      { ru: 'Агенты с вызовом инструментов', en: 'Tool-calling agents' },
      { ru: 'Проверка ответов LLM', en: 'LLM output validation' },
      { ru: 'Эмбеддинги и pgvector', en: 'Embeddings with pgvector' },
    ],
  },
]

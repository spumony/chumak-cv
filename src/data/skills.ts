import type { SkillCategory } from '../types'

export const skills: SkillCategory[] = [
  {
    category: { ru: 'Уверенно · 5 лет', en: 'Core · 5 years' },
    items: [
      'React',
      'TypeScript',
      'Next.js (App Router)',
      'JavaScript',
      'Tailwind CSS',
      {
        ru: 'Продуктовый / UI-дизайн (Figma)',
        en: 'Product / UI design (Figma)',
      },
    ],
  },
  {
    category: { ru: 'На практике · последний месяц', en: 'Hands-on · recent' },
    items: [
      'PostgreSQL',
      'Drizzle ORM',
      'Next.js 16 (Server Components)',
      { ru: 'Session-аутентификация (bcrypt)', en: 'Session auth (bcrypt)' },
      { ru: 'Дизайн REST API', en: 'REST API design' },
      { ru: 'Фоновые задачи (Inngest)', en: 'Background jobs (Inngest)' },
    ],
  },
  {
    category: { ru: 'Изучаю дальше', en: 'Learning next' },
    upcoming: true,
    items: [
      'Embeddings',
      'RAG',
      'Evals',
      'Observability',
      { ru: 'LLM-агенты', en: 'LLM agents' },
    ],
  },
]

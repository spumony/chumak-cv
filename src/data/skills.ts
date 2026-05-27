import type { SkillCategory } from '../types'

export const skills: SkillCategory[] = [
  {
    category: { ru: 'Frontend · 5 лет', en: 'Frontend · 5 years' },
    items: [
      'React',
      'TypeScript',
      'Next.js (App Router)',
      'Tailwind CSS',
      'TanStack Query',
      {
        ru: 'Продуктовый / UI-дизайн (Figma)',
        en: 'Product / UI design (Figma)',
      },
    ],
  },
  {
    category: { ru: 'Fullstack · на практике', en: 'Fullstack · hands-on' },
    items: [
      'Node.js',
      'PostgreSQL',
      'Drizzle ORM',
      'Server Components / Actions',
      'Zod',
      { ru: 'Session-аутентификация (bcrypt)', en: 'Session auth (bcrypt)' },
      { ru: 'Дизайн REST API', en: 'REST API design' },
      'Inngest',
    ],
  },
  {
    category: { ru: 'AI-инжиниринг · изучаю', en: 'AI engineering · learning' },
    upcoming: true,
    items: [
      'Vercel AI SDK',
      'OpenAI / Anthropic SDK',
      'Embeddings + pgvector',
      'RAG',
      'Evals',
      'Observability',
      { ru: 'LLM-агенты / MCP', en: 'LLM agents / MCP' },
    ],
  },
]

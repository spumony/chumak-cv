import type { SkillCategory } from '../types'

export const skills: SkillCategory[] = [
  {
    category: { ru: 'Frontend', en: 'Frontend' },
    items: [
      'React',
      'TypeScript',
      'Next.js (App Router)',
      'React Native / Expo',
      'Tailwind CSS',
      'TanStack Query',
      'Zod',
      'Vitest',
      'Playwright',
    ],
  },
  {
    category: { ru: 'Fullstack', en: 'Fullstack' },
    items: [
      'Node.js',
      'PostgreSQL',
      'Supabase (RLS, Edge Functions)',
      'Drizzle ORM',
      'Server Components / Actions',
      { ru: 'Session-аутентификация (bcrypt)', en: 'Session auth (bcrypt)' },
      { ru: 'Дизайн REST API', en: 'REST API design' },
      'Inngest',
      'Sentry',
      'Vercel',
    ],
  },
  {
    category: { ru: 'AI', en: 'AI' },
    items: [
      'RAG',
      'Embeddings + pgvector',
      { ru: 'Векторный поиск (HNSW)', en: 'Vector search (HNSW)' },
      'Anthropic / OpenAI SDK',
      'Voyage AI',
      { ru: 'Streaming UX (SSE)', en: 'Streaming UX (SSE)' },
      { ru: 'Промптинг и сценарии диалога', en: 'Prompting & dialogue flows' },
    ],
  },
  {
    category: { ru: 'Практики', en: 'Practice' },
    items: [
      { ru: 'Дизайн-системы', en: 'Design systems' },
      {
        ru: 'Кросс-функциональная работа',
        en: 'Cross-functional collaboration',
      },
      { ru: 'Менторство', en: 'Mentoring' },
      {
        ru: 'Асинхронная работа в переписке',
        en: 'Async written communication',
      },
      {
        ru: 'Продуктовый / UI-дизайн (Figma)',
        en: 'Product / UI design (Figma)',
      },
    ],
  },
]

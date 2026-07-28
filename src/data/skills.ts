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
      { ru: 'A11y (WCAG 2.2)', en: 'A11y (WCAG 2.2)' },
    ],
  },
  {
    category: { ru: 'Fullstack', en: 'Fullstack' },
    items: [
      'Node.js',
      'PostgreSQL',
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
    upcoming: true,
    items: [
      'Vercel AI SDK',
      'OpenAI / Anthropic / Gemini SDK',
      'Embeddings + pgvector',
      'RAG',
      'Evals',
      'Observability',
      { ru: 'Streaming UX (SSE)', en: 'Streaming UX (SSE)' },
      { ru: 'Версионирование промптов', en: 'Prompt versioning' },
      { ru: 'LLM-агенты / MCP', en: 'LLM agents / MCP' },
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

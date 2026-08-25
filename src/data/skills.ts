import type { SkillCategory } from '../types'

/**
 * Frontend first, always — it is the strongest match and the primary track.
 *
 * Every entry needs public evidence outside a project whose publication policy
 * allows the product name only. Several technologies were removed for exactly
 * that reason; naming them here would disclose by another route, so the list
 * lives in the internal notes. Do not re-add a skill without public evidence.
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
      'HTML',
      'CSS',
      'Tailwind CSS',
      'TanStack Query',
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
      'CI/CD (GitHub Actions)',
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
      {
        ru: 'Полнотекстовый поиск PostgreSQL',
        en: 'PostgreSQL full-text search',
      },
      'Docker',
      { ru: 'Дизайн REST API', en: 'REST API design' },
      { ru: 'Мультитенантность', en: 'Multi-tenancy' },
    ],
  },
  {
    category: { ru: 'Прикладной AI', en: 'Applied AI' },
    items: [
      { ru: 'Агенты с вызовом инструментов', en: 'Tool-calling agents' },
      { ru: 'Проектирование агентного цикла', en: 'Agent loop design' },
      { ru: 'Интеграция LLM', en: 'LLM integrations' },
      { ru: 'Проектирование промптов', en: 'Prompt design' },
      'Anthropic / OpenAI SDK',
      { ru: 'UX AI-продуктов', en: 'AI product UX' },
    ],
  },
]

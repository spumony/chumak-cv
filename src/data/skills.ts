import type { SkillCategory } from '../types'

export const skills: SkillCategory[] = [
  {
    category: { ru: 'Языки', en: 'Languages' },
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: { ru: 'Фреймворки и библиотеки', en: 'Frameworks & Libraries' },
    items: ['React', 'Next.js', 'React Native', 'React Query'],
  },
  {
    category: { ru: 'Стили и UI', en: 'Styling & UI' },
    items: [
      'Tailwind CSS',
      { ru: 'Дизайн-системы', en: 'Design Systems' },
      { ru: 'Компонентный подход', en: 'Component-Driven' },
    ],
  },
  {
    category: { ru: 'Практики', en: 'Practices' },
    items: [
      'REST API',
      { ru: 'Чистая архитектура', en: 'Clean Architecture' },
      { ru: 'Оптимизация производительности', en: 'Performance' },
      { ru: 'Unit / E2E тесты', en: 'Unit / E2E Testing' },
      'Agile / Scrum',
    ],
  },
]

import type { SkillCategory } from '../types'

export const skills: SkillCategory[] = [
  {
    category: { ru: 'Языки', en: 'Languages' },
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: { ru: 'Фреймворки и инструменты', en: 'Frameworks & Tools' },
    items: ['React', 'Next.js', 'Node.js', 'Vite', 'Tailwind CSS', 'Git'],
  },
  {
    category: { ru: 'Прочее', en: 'Other' },
    items: ['TODO: Навык', 'TODO: Skill'],
  },
]

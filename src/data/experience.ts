import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    company: 'TODO: Company Name',
    location: { ru: 'TODO: Город (или Remote)', en: 'TODO: City (or Remote)' },
    role: { ru: 'TODO: Должность', en: 'TODO: Role' },
    period: '2022 — TODO',
    description: {
      ru: 'TODO: Одно предложение о роли, команде и зоне ответственности.',
      en: 'TODO: One sentence about the role, team and scope of ownership.',
    },
    bullets: [
      {
        ru: 'TODO: Достижение с измеримым результатом (например, ускорил загрузку на 40%).',
        en: 'TODO: Achievement with a measurable result (e.g. cut load time by 40%).',
      },
      {
        ru: 'TODO: Что вы спроектировали, внедрили или улучшили.',
        en: 'TODO: Something you designed, shipped or improved.',
      },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    company: 'TODO: Previous Company',
    location: { ru: 'TODO: Город', en: 'TODO: City' },
    role: { ru: 'TODO: Предыдущая должность', en: 'TODO: Previous Role' },
    period: '2019 — 2022',
    description: {
      ru: 'TODO: Краткое описание предыдущего опыта.',
      en: 'TODO: Short description of your previous experience.',
    },
    bullets: [
      {
        ru: 'TODO: Ключевой результат или проект.',
        en: 'TODO: A key result or project.',
      },
    ],
    technologies: ['JavaScript', 'Vue', 'Docker'],
  },
]

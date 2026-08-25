import type { LanguageItem } from '../types'

// Levels are the ones defensible on a first call — see docs/candidate-evidence.md.
export const languages: LanguageItem[] = [
  {
    name: { ru: 'Русский', en: 'Russian' },
    level: { ru: 'Родной', en: 'Native' },
    levelCode: 'Native',
  },
  {
    name: { ru: 'Английский', en: 'English' },
    level: { ru: 'Рабочий уровень', en: 'Professional working proficiency' },
    levelCode: 'B2',
  },
  {
    name: { ru: 'Румынский', en: 'Romanian' },
    level: { ru: 'Выше среднего', en: 'Upper-intermediate' },
    levelCode: 'B2',
  },
  {
    name: { ru: 'Украинский', en: 'Ukrainian' },
    level: { ru: 'Выше среднего', en: 'Upper-intermediate' },
    levelCode: 'B2',
  },
]

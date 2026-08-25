import type { HeroData } from '../types'

// Facts here are governed by docs/candidate-evidence.md. Change that first.
export const hero: HeroData = {
  name: { ru: 'Александр Чумак', en: 'Alexandr Chumak' },
  role: {
    ru: 'Senior Frontend / Product-инженер',
    en: 'Senior Frontend / Product Engineer',
  },
  stack: {
    ru: 'React · TypeScript · Next.js · React Native',
    en: 'React · TypeScript · Next.js · React Native',
  },
  pitch: {
    ru: '6+ лет в продакшене, веб и мобильные продукты. Веду архитектуру и выпуск фронтенда CRM для ресторанов как единственный фронтенд-инженер, до этого пять лет на логистической платформе EVCARGO. Параллельно собираю продукты целиком: Rivella, мультитенантный AI-ассистент записи, работает в продакшене — от схемы данных до пайплайна деплоя это моя работа.',
    en: '6+ years shipping production web and mobile software. I own frontend architecture and delivery for a restaurant CRM as the sole frontend engineer, after five years on the EVCARGO logistics platform. Alongside that I build and run products end to end — Rivella, a multi-tenant AI booking assistant, is live in production and mine from the schema to the deploy pipeline.',
  },
  location: { ru: 'Кишинёв, Молдова · UTC+2', en: 'Chișinău, Moldova · UTC+2' },
  availability: {
    ru: 'Гражданство ЕС · спонсорство для работы в ЕС не требуется · удалённо по ЕС или релокация',
    en: 'EU citizen · No sponsorship required for EU roles · Remote EU or relocation',
  },
  proof: [
    { ru: '6+ лет в продакшене', en: '6+ years in production' },
    { ru: '5 лет на EVCARGO', en: '5 years on EVCARGO' },
    { ru: 'AI-продукт в продакшене', en: 'AI product in production' },
    { ru: 'Гражданство ЕС', en: 'EU citizen, no sponsorship' },
  ],
  avatar: '/avatar.jpg',
}

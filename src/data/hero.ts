import type { HeroData } from '../types'

export const hero: HeroData = {
  name: { ru: 'Александр Чумак', en: 'Alexandr Chumak' },
  role: {
    ru: 'Senior frontend-инженер · React, TypeScript, Next.js',
    en: 'Senior Frontend Engineer · React, TypeScript, Next.js',
  },
  pitch: {
    ru: '6+ лет коммерческой разработки. Веду фронтенд CRM для ресторанов в Multisoft: в основном модули заказов и меню и плотные таблицы отчётности. Отдельно собрал в одиночку Rivella — AI-ассистент для продаж на Next.js.',
    en: '6+ years building for production. I lead the frontend of a restaurant CRM at Multisoft, mostly order and menu modules and dense reporting tables. On my own I built Rivella, an AI sales assistant on Next.js.',
  },
  location: { ru: 'Кишинёв, Молдова · UTC+2', en: 'Chișinău, Moldova · UTC+2' },
  availability: {
    ru: 'Гражданство ЕС, спонсорство не требуется. Открыт к senior-позициям во фронтенде и AI-продуктах, удалённо в ЕС.',
    en: 'EU citizen, no sponsorship needed. Open to senior frontend and AI product roles, remote across the EU.',
  },
  avatar: '/avatar.jpg',
}

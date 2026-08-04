import type { HeroData } from '../types'

export const hero: HeroData = {
  name: { ru: 'Александр Чумак', en: 'Alexandr Chumak' },
  role: {
    ru: 'Senior frontend-инженер · React, TypeScript, Next.js',
    en: 'Senior Frontend Engineer · React, TypeScript, Next.js',
  },
  pitch: {
    ru: '6+ лет коммерческой разработки. Веду фронтенд CRM для ресторанов в Multisoft. Сам собрал два AI-продукта: Prosvetum — приложение с саммари книг и RAG-ментором, уже в TestFlight, и Rivella — ассистент для записи клиентов.',
    en: '6+ years building for production. I lead the frontend of a restaurant CRM at Multisoft. I also built two AI products alone: Prosvetum, a book-summary app with a RAG mentor now in TestFlight, and Rivella, an assistant that books appointments.',
  },
  location: { ru: 'Кишинёв, Молдова · UTC+2', en: 'Chișinău, Moldova · UTC+2' },
  availability: {
    ru: 'Гражданство ЕС, спонсорство не требуется. Открыт к senior-позициям во фронтенде и AI-продуктах, удалённо в ЕС.',
    en: 'EU citizen, no sponsorship needed. Open to senior frontend and AI product roles, remote across the EU.',
  },
  avatar: '/avatar.jpg',
}

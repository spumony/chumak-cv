import type { FocusData } from '../types'

export const focus: FocusData = {
  lead: {
    ru: 'Перехожу из фронтенда в AI-инжиниринг — и учусь не по туториалам, а строя реальный продукт.',
    en: 'Moving from frontend into AI engineering — and learning by building a real product, not following tutorials.',
  },
  highlights: [
    {
      ru: '~месяц с нуля: SQL → ORM → auth → фоновые задачи, всё руками',
      en: '~a month from zero: SQL → ORM → auth → background jobs, all by hand',
    },
    {
      ru: 'Инженерно, не копипаст: ловлю баги и держу в голове security',
      en: 'Engineering, not copy-paste: catching bugs and security gotchas',
    },
    {
      ru: 'Продукт + AI = профиль Product Engineer',
      en: 'Product + AI = a Product Engineer profile',
    },
  ],
  project: {
    title: 'Learning Platform / Bookmark Manager',
    description: {
      ru: 'Full-stack приложение с нуля: session-аутентификация (bcrypt, httpOnly-куки), защищённый REST API с авторизацией по владению, менеджер закладок с фоновым скрейпингом OG-тегов, пагинацией и поиском.',
      en: 'A from-scratch full-stack app: session auth (bcrypt, httpOnly cookies), a protected REST API with ownership-based authorization, and a bookmark manager with background OG-tag scraping, pagination and search.',
    },
    technologies: [
      'Next.js 16',
      'PostgreSQL',
      'Drizzle ORM',
      'Inngest',
      'TypeScript',
    ],
  },
}

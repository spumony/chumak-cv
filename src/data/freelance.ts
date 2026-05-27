import type { FreelanceData } from '../types'

export const freelance: FreelanceData = {
  intro: {
    ru: 'Беру 1–2 долгих клиента одновременно и встраиваюсь в команду как senior-инженер — а не делаю одноразовые сайты «под ключ».',
    en: 'I take on 1–2 long-term clients at a time and embed in your team as a senior engineer — not one-off “build me a website” gigs.',
  },
  offers: [
    {
      title: { ru: 'AI-фичи для продуктов', en: 'AI features for products' },
      description: {
        ru: 'Добавляю LLM-функции (чат, умный поиск, суммаризация) в существующие Next.js/React приложения — от промптов до streaming-UI.',
        en: 'Add LLM features (chat, smart search, summarization) to existing Next.js/React apps — from prompts to streaming UI.',
      },
    },
    {
      title: {
        ru: 'Фронтенд-архитектура и аудит',
        en: 'Frontend architecture & audits',
      },
      description: {
        ru: 'Архитектура и аудит производительности для стартапов на Next.js/React — с конкретными deliverables и внедрением.',
        en: 'Architecture and performance audits for Next.js/React startups — with concrete deliverables and follow-up implementation.',
      },
    },
    {
      title: {
        ru: 'Долгосрочный part-time',
        en: 'Long-term part-time',
      },
      description: {
        ru: '10–20 часов в неделю как senior IC, встроенный в вашу команду: участвую в standup, шиплю фичи, делаю code review.',
        en: '10–20 hrs/week as a senior IC embedded in your team: standups, shipping features and code reviews.',
      },
    },
  ],
  process: [
    {
      ru: 'Интро-звонок (20 мин) — что строите, что нужно, подходим ли друг другу.',
      en: 'Intro call (20 min) — what you’re building, what you need, whether we’re a fit.',
    },
    {
      ru: 'Письменное предложение — скоуп, сроки, ставка, ритм коммуникации.',
      en: 'Written proposal — scope, timeline, rate and communication cadence.',
    },
    {
      ru: 'Пробная неделя — оплачиваемая, без долгого обязательства.',
      en: 'Trial week — paid, no long-term commitment yet.',
    },
    {
      ru: 'Встраиваюсь в команду и шиплю как senior-инженер с еженедельным синком.',
      en: 'I embed in the team and ship as a senior engineer with a weekly sync.',
    },
  ],
  faq: [
    {
      q: { ru: 'Сколько стоит?', en: 'What’s your rate?' },
      a: {
        ru: 'Зависит от скоупа: фиксированная месячная ставка для retainer и фикс-цена для аудита.',
        en: 'Depends on scope: a fixed monthly rate for retainers and a fixed price for audits.',
      },
    },
    {
      q: { ru: 'Есть ли свободные слоты?', en: 'Are you available?' },
      a: {
        ru: 'Беру 1–2 долгих клиента одновременно. Актуальный статус уточню на звонке.',
        en: 'I take 1–2 long-term clients at a time. I’ll confirm current availability on the call.',
      },
    },
    {
      q: { ru: 'NDA и договор?', en: 'NDA & contracts?' },
      a: {
        ru: 'Да — работаю по NDA и вашему договору (B2B / самозанятость).',
        en: 'Yes — I work under an NDA and your contract (B2B / sole proprietor).',
      },
    },
    {
      q: { ru: 'Как оплата и таймзона?', en: 'Payments & timezone?' },
      a: {
        ru: 'Инвойс в конце месяца, NET 14, EUR/USD (Wise или банк). UTC+2 — пересекаюсь с EU и работаю по часам команды.',
        en: 'Invoice end of month, NET 14, EUR/USD (Wise or bank). UTC+2 — overlapping with the EU and working to your team’s hours.',
      },
    },
  ],
  // bookingUrl: 'https://cal.com/your-handle/intro', // add to show a "Book a call" button
}

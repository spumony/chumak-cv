import type { FreelanceData } from '../types'

export const freelance: FreelanceData = {
  intro: {
    ru: 'В приоритете — постоянная работа в штате. Если такой позиции нет, беру одного-двух клиентов на долгий срок и работаю в команде как senior-разработчик.',
    en: "Full-time roles come first. When a full-time hire isn't on the table, I take one or two long-term clients and work in the team as a senior engineer.",
  },
  whoIWorkWith: {
    ru: 'Небольшие продуктовые команды на React и TypeScript, обычно те, кто добавляет AI-функции.',
    en: 'Small product teams on React and TypeScript, usually the ones adding AI features.',
  },
  offers: [
    {
      title: { ru: 'AI-фичи для продуктов', en: 'AI features for products' },
      description: {
        ru: 'Добавляю чат или суммаризацию в существующее приложение на Next.js. Пишу слой промптов и streaming-интерфейс.',
        en: 'Add chat or summarization to an existing Next.js app. I write the prompt layer and the streaming UI.',
      },
    },
    {
      title: {
        ru: 'Фронтенд-архитектура и аудит',
        en: 'Frontend architecture & audits',
      },
      description: {
        ru: 'Письменный разбор кодовой базы на React со списком проблем, отсортированным по важности. Дальше могу сам их и починить.',
        en: 'A written review of your React codebase with a list of problems sorted by importance. I can fix them afterwards.',
      },
    },
    {
      title: {
        ru: 'Частичная занятость',
        en: 'Long-term part-time',
      },
      description: {
        ru: '10–20 часов в неделю в вашей команде: фичи и code review. Хожу на дейли вместе с командой.',
        en: '10–20 hours a week in your team: features and code review. I join the same standups as everyone.',
      },
    },
  ],
  process: [
    {
      ru: 'Созвон на 20 минут. Рассказываете, что строите и чего не хватает.',
      en: "A 20-minute call. You describe what you're building and what's missing.",
    },
    {
      ru: 'Письменное предложение: объём работ и стоимость.',
      en: 'A written proposal: scope of work and cost.',
    },
    {
      ru: 'Оплачиваемая пробная неделя. Без обязательств по долгосрочному контракту.',
      en: 'A paid trial week. No long-term commitment on either side yet.',
    },
    {
      ru: 'Дальше — основная работа и один созвон в неделю.',
      en: 'Then the real work, with one call a week.',
    },
  ],
  faq: [
    {
      q: { ru: 'Сколько стоит?', en: "What's your rate?" },
      a: {
        ru: 'Зависит от объёма. На долгосрочных проектах — фиксированная ставка в месяц, за аудит — фиксированная цена.',
        en: 'It depends on the scope. A fixed monthly rate for long-term work, a fixed price for an audit.',
      },
    },
    {
      q: { ru: 'Есть ли свободные слоты?', en: 'Are you available?' },
      a: {
        ru: 'Уточню на созвоне.',
        en: "I'll confirm on the call.",
      },
    },
    {
      q: { ru: 'NDA и договор?', en: 'NDA & contracts?' },
      a: {
        ru: 'Да. Работаю по вашему NDA и вашему договору (B2B или самозанятость).',
        en: 'Yes. I work under your NDA and your contract (B2B or sole proprietor).',
      },
    },
    {
      q: { ru: 'Как оплата и таймзона?', en: 'Payments & timezone?' },
      a: {
        ru: 'Счёт в конце месяца, NET 14, EUR или USD (Wise или банковский перевод). Мой часовой пояс — UTC+2, подстраиваюсь под рабочие часы вашей команды.',
        en: "Invoice at the end of the month, NET 14, EUR or USD (Wise or bank transfer). My timezone is UTC+2 and I fit your team's working hours.",
      },
    },
    {
      q: { ru: 'За что не берётесь?', en: "Anything you don't take on?" },
      a: {
        ru: 'За разовые сайты «под ключ» и субподряд для агентств. Работу только по дизайну тоже не беру.',
        en: "One-off marketing sites and agency subcontracting. I don't do design-only work either.",
      },
    },
  ],
  // bookingUrl: 'https://cal.com/your-handle/intro', // add to show a "Book a call" button
}

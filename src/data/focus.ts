import type { FocusData } from '../types'

export const focus: FocusData = {
  lead: {
    ru: 'Сейчас осознанно углубляюсь в инженерную базу за AI-продуктами. Что стоит знать команде:',
    en: "Right now I'm deliberately going deep on the engineering fundamentals behind AI products. A few things worth knowing:",
  },
  highlights: [
    {
      title: {
        ru: 'Быстрый осознанный переход',
        en: 'Fast, deliberate transition',
      },
      body: {
        ru: 'За ~месяц с нуля: SQL → ORM → аутентификация → фоновые задачи — всё руками, без копипаста.',
        en: 'From zero to SQL → ORM → auth → background jobs in about a month — all hand-written, no copy-paste.',
      },
    },
    {
      title: {
        ru: 'Инженерное мышление',
        en: 'Engineering mindset',
      },
      body: {
        ru: 'Сам ловил баги (integer overflow, race conditions, валидация) и разбирался в security-компромиссах: хеш vs шифрование, authN vs authZ, idempotency.',
        en: 'I caught my own bugs (integer overflow, race conditions, validation) and reasoned about security trade-offs: hashing vs encryption, authN vs authZ, idempotency.',
      },
    },
    {
      title: {
        ru: 'Редкий микс: продукт + AI',
        en: 'A rare product + AI mix',
      },
      body: {
        ru: 'Продуктовый и дизайн-бэкграунд плюс растущий fullstack/AI — это и есть профиль Product Engineer.',
        en: 'A product and design background plus a growing fullstack/AI skillset — exactly the Product Engineer profile.',
      },
    },
  ],
}

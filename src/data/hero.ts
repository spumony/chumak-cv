import type { HeroData } from '../types'

export const hero: HeroData = {
  name: { ru: 'Александр Чумак', en: 'Alexandr Chumak' },
  role: {
    ru: 'Senior Frontend-инженер → AI Product Engineer',
    en: 'Senior Frontend Engineer → AI Product Engineer',
  },
  pitch: {
    ru: '5 лет в продакшне на React, TypeScript и Next.js — расширяюсь в AI product engineering: разбираюсь в прикладном слое (Vercel AI SDK, RAG поверх pgvector, streaming-интерфейсы, evals), строя реальное full-stack приложение, а не туториалы. Открыт к senior FE / AI Product ролям (EU, remote) и retainer’ам 10–20 ч/нед.',
    en: '5 years shipping production React, TypeScript and Next.js — now extending into AI product engineering: learning the application layer (Vercel AI SDK, RAG on pgvector, streaming UIs and evals) by building a real full-stack app, not following tutorials. Open to senior FE / AI Product roles (EU remote) and 10–20 hr/wk retainers.',
  },
  location: { ru: 'Кишинёв, Молдова · UTC+2', en: 'Chișinău, Moldova · UTC+2' },
  availability: {
    ru: 'Открыт к senior frontend / AI-product ролям в EU · удалёнка · долгосрочные контракты',
    en: 'Open to senior frontend / AI product roles across the EU · remote · long-term contracts',
  },
  avatar: '/avatar.jpg',
}

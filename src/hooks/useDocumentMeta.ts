import { useEffect } from 'react'
import { useT } from '../i18n/useT'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  )
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Keeps the document title and SEO/OG meta tags in sync with the language. */
export function useDocumentMeta() {
  const { t, lang } = useT()

  useEffect(() => {
    const title = t('meta.title')
    const description = t('meta.description')

    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:locale', lang === 'ru' ? 'ru_RU' : 'en_US')
    setMeta('name', 'twitter:card', 'summary')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
  }, [t, lang])
}

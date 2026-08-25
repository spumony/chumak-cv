import { useEffect } from 'react'
import { useT } from '../i18n/useT'

const SITE_URL = 'https://chumak.is-a.dev'

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

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

/** Keeps the document title and SEO/OG meta tags in sync with the language. */
export function useDocumentMeta() {
  const { t, lang } = useT()

  useEffect(() => {
    const title = t('meta.title')
    const description = t('meta.description')
    // Absolute URLs: relative ones break in link previews on some platforms.
    const image = `${SITE_URL}/og.png`

    document.title = title
    setCanonical(SITE_URL)
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'profile')
    setMeta('property', 'og:url', SITE_URL)
    setMeta('property', 'og:locale', lang === 'ru' ? 'ru_RU' : 'en_US')
    setMeta('property', 'og:image', image)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)
  }, [t, lang])
}

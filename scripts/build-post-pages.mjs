// Writes posts/**/index.html from src/posts/meta.json.
//
// Usage: pnpm posts:pages   (after adding a post or editing a title)
//
// Each page needs its own static <head> so LinkedIn and Telegram previews show
// the post, not the CV. The body is the same React entry for all of them.
// Output is generated: edit meta.json, not the HTML.
import { mkdirSync, rmSync, writeFileSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const SITE = 'https://chumak.is-a.dev'
const root = join(import.meta.dirname, '..')
const posts = JSON.parse(
  readFileSync(join(root, 'src/posts/meta.json'), 'utf8'),
)

const INDEX = {
  en: {
    title: 'Posts · Aleksandr Chumak',
    description:
      'Short practical posts on Claude Code, prompting and AI features in production.',
  },
  ru: {
    title: 'Посты · Александр Чумак',
    description:
      'Короткие практичные посты про Claude Code, промпты и AI-фичи в продакшене.',
  },
}

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const path = (slug, lang) =>
  `/posts/${slug ? `${slug}/` : ''}${lang === 'ru' ? 'ru/' : ''}`

function page({ slug, lang, title, description, image, type }) {
  const url = SITE + path(slug, lang)
  const other = lang === 'ru' ? 'en' : 'ru'
  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="theme-color" content="#ffffff" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="${lang}" href="${url}" />
    <link rel="alternate" hreflang="${other}" href="${SITE + path(slug, other)}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <script>
      // Same pre-paint theme script as /index.html.
      ;(function () {
        try {
          var t = localStorage.getItem('theme')
          if (t !== 'light' && t !== 'dark') t = 'light'
          document.documentElement.dataset.theme = t
          var m = document.querySelector('meta[name="theme-color"]')
          if (m) m.setAttribute('content', t === 'light' ? '#ffffff' : '#0a0a0a')
        } catch (e) {
          document.documentElement.dataset.theme = 'light'
        }
      })()
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/posts/main.tsx"></script>
  </body>
</html>
`
}

function write(slug, lang, html) {
  const dir = join(root, path(slug, lang))
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
}

rmSync(join(root, 'posts'), { recursive: true, force: true })

for (const lang of ['en', 'ru']) {
  write(
    null,
    lang,
    page({
      slug: null,
      lang,
      ...INDEX[lang],
      image: `${SITE}/og.png?v=2026-11-13`,
      type: 'website',
    }),
  )
  for (const post of posts) {
    const img = lang === 'ru' ? 'og-ru.png' : 'og.png'
    write(
      post.slug,
      lang,
      page({
        slug: post.slug,
        lang,
        ...post[lang],
        // ?v= busts LinkedIn's preview cache; bump `date` when the image changes.
        image: `${SITE}/posts/${post.slug}/${img}?v=${post.date}`,
        type: 'article',
      }),
    )
  }
}

console.log(`posts/: ${posts.length} posts × 2 languages + 2 index pages`)

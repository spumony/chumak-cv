// Animated image of a LinkedIn post: scripts/post-cards/<slug>-hook.html?anim
// → public/posts/<slug>/linkedin.gif (800px wide, loops).
//
// Usage: pnpm posts:gif <slug> [seconds=3] [fps=20]
//
// The card's CSS animations are paused and stepped frame by frame through the
// Chrome DevTools Protocol, so the loop is exact. `seconds` must be a common
// multiple of the card's animation durations. LinkedIn takes a GIF as a photo
// (Media button) up to 5 MB.
//
// Requires: Google Chrome, ffmpeg. No npm packages: Node's built-in WebSocket.
import { spawn, execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const [slug, seconds = '3', fps = '20'] = process.argv.slice(2)
if (!slug) throw new Error('usage: build-post-gif.mjs <slug> [seconds] [fps]')
const root = path.resolve(import.meta.dirname, '..')
const src = path.join(root, `scripts/post-cards/${slug}-hook.html`)
if (!fs.existsSync(src)) throw new Error(`No ${src}`)
const out = path.join(root, `public/posts/${slug}/linkedin.gif`)
const frames = Math.round(Number(seconds) * Number(fps))
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'post-gif-'))

const chrome = spawn(
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--remote-debugging-port=0',
    `--user-data-dir=${tmp}/profile`,
    '--window-size=1080,1350',
    `file://${src}?anim`,
  ],
  { stdio: ['ignore', 'ignore', 'pipe'] },
)
try {
  // Chrome prints "DevTools listening on ws://…/browser/<id>"; the page target
  // is listed at /json on the same port.
  const port = await new Promise((resolve, reject) => {
    let log = ''
    chrome.stderr.on('data', (d) => {
      log += d
      const m = log.match(/ws:\/\/127\.0\.0\.1:(\d+)\//)
      if (m) resolve(m[1])
    })
    chrome.on('exit', () => reject(new Error(`Chrome exited:\n${log}`)))
  })
  let page
  for (let i = 0; i < 50 && !page; i++) {
    const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json()
    page = list.find((t) => t.type === 'page' && t.url.startsWith('file:'))
    if (!page) await new Promise((r) => setTimeout(r, 100))
  }
  const ws = new WebSocket(page.webSocketDebuggerUrl)
  await new Promise((r) => ws.addEventListener('open', r, { once: true }))
  let id = 0
  const pending = new Map()
  ws.addEventListener('message', (e) => {
    const msg = JSON.parse(e.data)
    pending.get(msg.id)?.(msg)
  })
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      pending.set(++id, (msg) =>
        msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result),
      )
      ws.send(JSON.stringify({ id, method, params }))
    })
  const evaluate = (expression) =>
    send('Runtime.evaluate', { expression, awaitPromise: true })

  // --window-size includes the headless window frame (the page got 1080x1263),
  // so pin the viewport to the card size.
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1080,
    height: 1350,
    deviceScaleFactor: 1,
    mobile: false,
  })
  await evaluate(
    'document.fonts.ready.then(() => document.getAnimations().length)',
  )
  const { result } = await evaluate('document.getAnimations().length')
  if (!result.value) throw new Error('No CSS animations: is body.anim styled?')
  for (let i = 0; i < frames; i++) {
    const ms = (i * 1000) / Number(fps)
    await evaluate(
      `document.getAnimations().forEach(a => { a.pause(); a.currentTime = ${ms} })`,
    )
    const { data } = await send('Page.captureScreenshot', { format: 'png' })
    fs.writeFileSync(
      path.join(tmp, `f${String(i).padStart(4, '0')}.png`),
      data,
      'base64',
    )
  }
  ws.close()
} finally {
  chrome.kill()
}

// One palette for the whole loop; no dithering keeps flat UI colors clean.
execFileSync('ffmpeg', [
  '-y',
  '-loglevel',
  'error',
  '-framerate',
  fps,
  '-i',
  path.join(tmp, 'f%04d.png'),
  '-vf',
  'scale=800:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=128:stats_mode=full[p];[b][p]paletteuse=dither=none',
  '-loop',
  '0',
  out,
])
fs.rmSync(tmp, { recursive: true, force: true })
const mb = fs.statSync(out).size / 1024 / 1024
console.log(
  `  ${path.relative(root, out)}  ${frames} frames, ${mb.toFixed(2)} MB`,
)
if (mb > 5)
  throw new Error('Over 5 MB: LinkedIn will reject it. Lower fps or seconds.')

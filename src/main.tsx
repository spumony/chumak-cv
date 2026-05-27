import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted fonts (font-display: swap baked in by fontsource).
// Inter covers Latin + Cyrillic for the bilingual UI; Geist Mono for code/tech.
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/geist-mono/400.css'
import '@fontsource/geist-mono/500.css'
import './index.css'
import './i18n'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

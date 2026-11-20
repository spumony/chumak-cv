import type { Language } from '../i18n'
import { postImage, type Note } from './notes'

export function PostImage({
  note,
  lang,
  className,
}: {
  note: Note
  lang: Language
  className?: string
}) {
  return (
    <img
      src={postImage(note)}
      alt={note[lang].imageAlt}
      width={1080}
      height={1350}
      className={`rounded-xl border border-border ${className ?? ''}`}
    />
  )
}

#!/usr/bin/env bash
#
# Renders the images of one post:
#   scripts/post-cards/<slug>.html      → public/posts/<slug>/og.png, og-ru.png
#                                         (link previews, EN and RU, 1200x627)
#   scripts/post-cards/<slug>-hook.html → public/posts/<slug>/linkedin.png
#                                         (image in the LinkedIn post, 1080x1350)
#   scripts/post-cards/<slug>-carousel.html → public/posts/<slug>/carousel.pdf
#                                         (LinkedIn document post, one 1080x1350 page per slide)
#
# Usage: pnpm posts:cards <slug>
#
# After changing an image of a published post, bump its `date` in
# src/posts/meta.json and run `pnpm posts:pages`: LinkedIn caches previews by URL.
#
# Requires: Google Chrome. Same render loop as build-og.sh.

set -euo pipefail

SLUG="${1:?usage: build-post-cards.sh <slug>}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || { echo "Google Chrome not found at $CHROME" >&2; exit 1; }

cd "$(dirname "$0")/.."
HOOK="scripts/post-cards/$SLUG-hook.html"
CAROUSEL="scripts/post-cards/$SLUG-carousel.html"
[ -f "$HOOK" ] || [ -f "$CAROUSEL" ] || { echo "No $HOOK or $CAROUSEL" >&2; exit 1; }
OUT_DIR="public/posts/$SLUG"
mkdir -p "$OUT_DIR"

render() { # <src> <query> <WxH> <file>
  local SRC="$1"
  shift
  local out="$OUT_DIR/$3" profile
  profile="$(mktemp -d)"
  rm -f "$out"
  local target=(--screenshot="$PWD/$out")
  [[ "$out" == *.pdf ]] && target=(--print-to-pdf="$PWD/$out" --no-pdf-header-footer)
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars \
    --user-data-dir="$profile" --window-size="$2" \
    "${target[@]}" "file://$PWD/$SRC?$1" >/dev/null 2>&1 &
  local pid=$! prev=-1 size
  # Chrome does not always exit after writing; stop it once the file settles.
  for _ in $(seq 1 60); do
    sleep 0.5
    size=$(stat -f%z "$PWD/$out" 2>/dev/null || echo 0)
    [ "$size" -gt 0 ] && [ "$size" = "$prev" ] && break
    prev=$size
  done
  kill "$pid" 2>/dev/null || true
  wait "$pid" 2>/dev/null || true
  rm -rf "$profile"
  [ -s "$out" ] || { echo "  ✗ $out not rendered" >&2; exit 1; }
  echo "  $out  $(file -b "$out" | cut -d, -f2)"
}

# Link previews only for posts that have a page on the site.
if [ -f "scripts/post-cards/$SLUG.html" ]; then
  render "scripts/post-cards/$SLUG.html" "size=og&lang=en" 1200,627 og.png
  render "scripts/post-cards/$SLUG.html" "size=og&lang=ru" 1200,627 og-ru.png
fi
[ -f "$HOOK" ] && render "$HOOK" "" 1080,1350 linkedin.png
[ -f "$CAROUSEL" ] && render "$CAROUSEL" "" 1080,1350 carousel.pdf
exit 0

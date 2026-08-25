#!/usr/bin/env bash
#
# Regenerates every CV PDF in public/ from the HTML sources in scripts/.
#
# Usage:
#   ./scripts/build-cv.sh
#
# The HTML is the source; the PDFs are build output. Never edit a PDF — edit the
# HTML, run this, and commit both. Facts come from docs/candidate-evidence.md.
#
# Requires: Google Chrome (headless print-to-PDF, same engine that produced the
# previous PDFs) and poppler's pdftotext/pdfinfo for the validation pass
# (`brew install poppler`).

set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || { echo "Google Chrome not found at $CHROME" >&2; exit 1; }

cd "$(dirname "$0")/.."
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

# Headless Chrome writes the PDF and then does not always exit, so it is run in
# the background and killed once the file has settled. macOS has no `timeout`.
render() {
  local src="$1" out="$2" pid i size prev=-1
  echo "→ $src → $out"
  rm -f "$PWD/$out"
  "$CHROME" \
    --headless=new \
    --disable-gpu \
    --no-pdf-header-footer \
    --user-data-dir="$PROFILE" \
    --virtual-time-budget=2000 \
    --print-to-pdf="$PWD/$out" \
    "file://$PWD/$src" >/dev/null 2>&1 &
  pid=$!

  for i in $(seq 1 60); do
    sleep 0.5
    size=$(stat -f%z "$PWD/$out" 2>/dev/null || echo 0)
    [ "$size" -gt 0 ] && [ "$size" = "$prev" ] && break
    prev=$size
  done

  kill "$pid" 2>/dev/null || true
  wait "$pid" 2>/dev/null || true
  [ -s "$PWD/$out" ] || { echo "  ✗ nothing rendered" >&2; exit 1; }
}

# Each variant is a separate application target — see docs/tailor-cv.md.
render scripts/cv.html    public/Alexandr-Chumak-Senior-Frontend-Engineer.pdf
render scripts/cv-ai.html public/Alexandr-Chumak-Senior-Product-Engineer-AI.pdf
render scripts/cv-ru.html public/Alexandr-Chumak-Senior-Frontend-Engineer-RU.pdf

echo
echo "Validation"
command -v pdftotext >/dev/null || { echo "  (skipped — install poppler)"; exit 0; }

for pdf in public/Alexandr-Chumak-*.pdf; do
  pages=$(pdfinfo "$pdf" | awk '/^Pages:/ {print $2}')
  text=$(pdftotext "$pdf" - 2>/dev/null)
  words=$(printf '%s' "$text" | wc -w | tr -d ' ')
  # A page that extracts almost nothing is a blank trailing page.
  tail_words=$(pdftotext -f "$pages" -l "$pages" "$pdf" - 2>/dev/null | wc -w | tr -d ' ')

  printf '  %-52s %s pages, %s words\n' "$(basename "$pdf")" "$pages" "$words"
  [ "$pages" -le 2 ] || echo "    ✗ over 2 pages"
  [ "$tail_words" -ge 20 ] || echo "    ✗ last page is nearly empty"
  printf '%s' "$text" | grep -qE 'Chumak|Чумак' || echo "    ✗ name not extractable"
  printf '%s' "$text" | grep -q 'TypeScript' || echo "    ✗ core keyword missing"
done

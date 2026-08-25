#!/usr/bin/env bash
#
# Regenerates public/og.png from scripts/og.html.
#
# Usage:
#   ./scripts/build-og.sh
#
# The HTML is the source; the PNG is build output. Editing og.html without
# running this leaves a stale image published at /og.png — which is exactly how
# retired technology pills survived a text-only privacy sweep once already.
#
# Requires: Google Chrome.

set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || { echo "Google Chrome not found at $CHROME" >&2; exit 1; }

cd "$(dirname "$0")/.."
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

OUT="public/og.png"
echo "→ scripts/og.html → $OUT"
rm -f "$OUT"

# Chrome does not always exit after writing; run it detached and stop it once
# the file has settled. macOS has no `timeout`.
"$CHROME" \
  --headless=new \
  --disable-gpu \
  --hide-scrollbars \
  --user-data-dir="$PROFILE" \
  --window-size=1200,627 \
  --screenshot="$PWD/$OUT" \
  "file://$PWD/scripts/og.html" >/dev/null 2>&1 &
pid=$!

prev=-1
for _ in $(seq 1 60); do
  sleep 0.5
  size=$(stat -f%z "$PWD/$OUT" 2>/dev/null || echo 0)
  [ "$size" -gt 0 ] && [ "$size" = "$prev" ] && break
  prev=$size
done

kill "$pid" 2>/dev/null || true
wait "$pid" 2>/dev/null || true
[ -s "$OUT" ] || { echo "  ✗ nothing rendered" >&2; exit 1; }

echo "  $(file -b "$OUT")"

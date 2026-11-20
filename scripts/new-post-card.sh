#!/usr/bin/env bash
#
# Starts the image of a new LinkedIn post from the shared skeleton:
#   scripts/post-cards/_template-hook.html → scripts/post-cards/<slug>-hook.html
# Then edit the text and render it with `pnpm posts:cards <slug>`.
#
# Usage: pnpm posts:new-card <slug>

set -euo pipefail

SLUG="${1:?usage: new-post-card.sh <slug>}"
[[ "$SLUG" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]] || { echo "Slug must be kebab-case: $SLUG" >&2; exit 1; }

cd "$(dirname "$0")/post-cards"
OUT="$SLUG-hook.html"
[ -e "$OUT" ] && { echo "Already exists: scripts/post-cards/$OUT" >&2; exit 1; }

sed "s/__SLUG__/$SLUG/g" _template-hook.html > "$OUT"
echo "Created scripts/post-cards/$OUT"
echo "Render: pnpm posts:cards $SLUG"

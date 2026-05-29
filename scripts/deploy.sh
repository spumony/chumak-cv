#!/usr/bin/env bash
#
# Deploys the built CV-сайт to the Hetzner server (chumak.is-a.dev).
#
# Usage:
#   ./scripts/deploy.sh
#
# What it does:
#   1. Runs `pnpm build` (Vite → dist/)
#   2. rsyncs dist/ to /var/www/chumak-cv/dist/ on the server
#   3. --delete removes stale hashed assets so the directory doesn't bloat
#
# Requires:
#   - SSH access to root@204.168.196.101 via the local id_ed25519 key
#   - nginx already serving /var/www/chumak-cv/dist/ for chumak.is-a.dev
#     (set up by /etc/nginx/sites-available/chumak-cv.conf)
#

set -euo pipefail

SERVER="root@204.168.196.101"
REMOTE_PATH="/var/www/chumak-cv/dist/"
URL="https://chumak.is-a.dev/"

# Repo root, regardless of where the script is invoked from
cd "$(dirname "$0")/.."

echo "→ Building production bundle…"
pnpm build

echo "→ Syncing dist/ → ${SERVER}:${REMOTE_PATH}"
rsync -avz --delete --human-readable dist/ "${SERVER}:${REMOTE_PATH}"

echo
echo "✓ Deployed: ${URL}"

# nginx configuration

A copy of the nginx configuration serving `chumak.is-a.dev`, so the box can be
rebuilt without rediscovering it. **The server is the source of truth**; these
files are a mirror taken from it, verified byte-identical at the time of commit.
Edit the server, verify, then re-copy — not the other way round.

## Files

| File                    | Lives on the server at                                                       |
| ----------------------- | ---------------------------------------------------------------------------- |
| `chumak-cv.conf`        | `/etc/nginx/sites-available/chumak-cv.conf`, symlinked into `sites-enabled/` |
| `security-headers.conf` | `/etc/nginx/snippets/security-headers.conf`                                  |

`security-headers.conf` sits in the shared `snippets/` directory but is currently
included **only** by this vhost. If another site on the box ever includes it, it
stops being project-owned and this copy has to be treated as shared.

## Not in here, by design

- TLS certificates and keys. `chumak-cv.conf` references certbot paths
  (`/etc/letsencrypt/live/chumak.is-a.dev/…`); the material itself is never copied.
- `options-ssl-nginx.conf` and `ssl-dhparams.pem` — certbot manages both, and
  certbot regenerates them on a fresh host.
- Other virtual hosts on the same server.
- Any credential, key or SSH material. Deployment auth lives in the GitHub Actions
  secret referenced by `.github/workflows/deploy.yml`.

Every header these files set is already visible in any HTTP response from the
site, so nothing here is disclosed that a visitor could not read themselves.

## Cache policy

The reason this config is worth keeping. Verified live on 2026-08-25:

| Path                                                   | Cache-Control                          |
| ------------------------------------------------------ | -------------------------------------- |
| `index.html` and every SPA fallback route              | `no-cache, max-age=0, must-revalidate` |
| `/assets/*` — fingerprinted, including hashed `.woff2` | `public, max-age=31536000, immutable`  |
| `/og.png`, `/llms.txt`, `Alexandr-Chumak-*.pdf`        | `no-cache, max-age=0, must-revalidate` |
| other static                                           | `public, max-age=86400`                |

`index.html` must revalidate: nginx previously sent it with no `Cache-Control` at
all, so a returning visitor reused an old shell and therefore an old hashed bundle,
and the site looked like it had not deployed.

`no-store` is deliberately not used anywhere — revalidation returns `304`, so the
cost is a round trip rather than a re-download.

## Two things that will break if you edit this carelessly

**`add_header` does not inherit.** A `location` that declares its own `add_header`
silently discards every `add_header` from the enclosing block — including the whole
security-headers snippet. That is why each cache-policy `location` re-includes it.
Drop one of those includes and that path starts serving with no HSTS, no CSP and no
`X-Frame-Options`, with nothing failing loudly to tell you.

**`location ^~ /assets/` needs the `^~`.** Regex locations are matched before
prefix locations, so without it the `~* \.(woff2?|png|…)$` block wins for hashed
fonts and images under `/assets/` and hands them a one-day cache instead of
`immutable`.

Also: set `Cache-Control` with a single `add_header`. Using `expires` _and_
`add_header Cache-Control` together emits two conflicting header lines.

## Applying a change

```bash
scp deploy/nginx/chumak-cv.conf root@<server>:/tmp/chumak-cv.conf.new
ssh root@<server> 'CONF=/etc/nginx/sites-available/chumak-cv.conf; \
  cp -a "$CONF" "$CONF.backup-$(date +%Y%m%d-%H%M%S)" && \
  cp /tmp/chumak-cv.conf.new "$CONF" && \
  nginx -t && systemctl reload nginx'
```

`nginx -t` gates the reload. If it fails, restore the backup it just made — the
running config is untouched until `reload` succeeds.

## Checking this copy still matches the server

```bash
ssh root@<server> 'cat /etc/nginx/sites-available/chumak-cv.conf' | diff -u - deploy/nginx/chumak-cv.conf
```

Silence means no drift. Do the same for `security-headers.conf` against
`/etc/nginx/snippets/`.

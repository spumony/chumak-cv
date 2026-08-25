# Tailor a CV in 10 minutes

Two variants exist. Do not create a third — every extra variant is another place
for the facts to drift.

| Variant    | Source               | Output                                            | Headline                                                          |
| ---------- | -------------------- | ------------------------------------------------- | ----------------------------------------------------------------- |
| Core       | `scripts/cv.html`    | `Alexandr-Chumak-Senior-Frontend-Engineer.pdf`    | Senior Frontend Engineer · React, TypeScript, Next.js             |
| AI Product | `scripts/cv-ai.html` | `Alexandr-Chumak-Senior-Product-Engineer-AI.pdf`  | Senior Product Engineer · React, TypeScript, Next.js · Applied AI |
| Russian    | `scripts/cv-ru.html` | `Alexandr-Chumak-Senior-Frontend-Engineer-RU.pdf` | Senior Frontend-инженер · React, TypeScript, Next.js              |

The Core variant weights commercial frontend first and treats AI as the
differentiator. The AI Product variant leads with the two shipped AI products and
moves commercial experience below them. Everything else — the facts, the dates,
the numbers — is identical on purpose.

## The ten minutes

1. Copy the five must-haves out of the job description.
2. Mark each one **Strong** (provable), **Evidence** (true but needs a bullet moved
   up), or **Gap** (not true). A Gap is a gap, not a copywriting problem.
3. Pick the variant. AI-native product team, agent experiences, frontend-heavy
   full-stack → AI Product. Everything else → Core.
4. Reorder what already exists. Do not write new claims.
5. Match the headline to the vacancy title **only if it is truthful** — "Senior
   Frontend Engineer" and "Senior Product Engineer" are both defensible;
   "Full Stack Engineer" and "AI Engineer" are not.
6. Move the three to five matching skills to the front of their line.
7. Keep the project that best proves the role; the other can lose a bullet.
8. Never add a skill that is not in `docs/candidate-evidence.md` with `Use = yes`.
9. Rebuild and check:

   ```bash
   ./scripts/build-cv.sh
   ```

10. Export under a per-application name if the portal needs one:
    `Alexandr-Chumak-<Role>-<Company>.pdf`.

## Rules that do not bend

- One fact, one source: `docs/candidate-evidence.md`. If a claim is not there, it
  does not go on a CV.
- Every number carries the command or the date that produced it. If neither exists,
  the number does not exist.
- Two pages maximum. `build-cv.sh` fails loudly past that.
- No salary, no photo, no date of birth, no marital status, no street address, no
  "references available on request".
- Never claim UK work authorisation. EU citizenship is not the same right.

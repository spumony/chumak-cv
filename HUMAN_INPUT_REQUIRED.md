# Open questions

Facts that would strengthen the CV and the site but are not mine to invent. Answers
go into `docs/candidate-evidence.md` first, then into `src/data/*` and the CV HTML.

This repository is public, so keep answers here to what is safe to publish.
Anything sensitive belongs in the internal notes kept outside the repository.

### 1. Multisoft — how many production modules or workflows went live?

A number turns the role from a duty list into evidence: "standardised N workflows on
one component and data-access layer". Without one there is no such bullet.

### 2. Multisoft — who else was on the product?

Backend engineers, designer, PM, QA. "Sole frontend engineer" reads far stronger
when the surrounding team is named.

### 3. EVCARGO — team size, and how many major domains?

Both are safe seniority signals if they can be stated. The site claims neither.

### 4. Any measured performance or reliability numbers from either job?

Bundle size, load time, error-rate reduction, incident count, reduction in
duplicated UI. Measured, not remembered. If nothing was measured, the gap stays
open rather than filled.

### 5. EVCARGO — was the design system yours to own, or to build and maintain?

Both CVs and the site say **built and maintained**, the conservative reading. If you
were the person who decided what went into it, that is stronger and still truthful,
and it is one word to change.

### 6. Rivella — can a recruiter open it without credentials?

Is `rivella.app` safe to link as-is, or should the link point at a demo tenant, a
recorded walkthrough, or nothing? Both CVs link the bare domain.

### 7. EVCARGO — what may be shown under the NDA?

A sanitized architecture sketch, an anonymised wireframe or a generic
component-system diagram would each turn five years into visible proof. If none is
possible it stays text-only.

### 8. GitHub profile README — how do you want it delivered?

The README at `spumony/spumony` still names a former employer as current, which
contradicts the CV. A replacement is drafted at `docs/github-profile-README.md`.
That is a separate repository, so nothing has been pushed to it.

### 9. Old CV filenames — is anything linking to them?

The PDFs are now `Aleksandr-Chumak-*.pdf` (renamed from `Alexandr-Chumak-*.pdf` on
2026-11-02). nginx answers the old `Alexandr-Chumak-*.pdf` addresses with a 301 to
the new names, so links already sent out keep working.

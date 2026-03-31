# Batch 05 Drafts

*Mechanism choice -> data minimization proof -> retail age-verification proof.*

## Included drafts

1. `01-selective-disclosure.md`
   - Role: mechanism deep dive
   - Reader shift: `structured -> serious`
   - CTA: `deploy-age-verification`
2. `02-privacy-data-minimization.md`
   - Role: single-scene privacy proof note
   - Reader shift: `structured -> serious`
   - CTA: `minimum-disclosure-is-a-policy-problem`
3. `03-deploy-age-verification.md`
   - Role: retail use-case proof note
   - Reader shift: `serious -> confident`
   - CTA: `minimum-disclosure-is-a-policy-problem`

## Why this batch belongs together

This batch closes the privacy and disclosure cluster by moving from principle to mechanism to one bounded retail decision:

- first, explain how selective-disclosure mechanisms differ and why policy need should drive the choice
- second, show one exact minimization win by reducing a verifier request from a broad birthdate payload to the `age_over_21` claim path
- third, prove the same idea in a grocery self-checkout lane where the verifier needs only a yes/no answer

Together, these drafts turn privacy from a general promise into a specific verifier-boundary design discipline.

## Important sequencing note

This batch naturally sits adjacent to `minimum-disclosure-is-a-policy-problem`.

A clean publication path through this cluster is:

1. `minimum-disclosure-is-a-policy-problem`
2. `selective-disclosure`
3. `privacy-data-minimization`
4. `deploy-age-verification`

## Inputs used

These drafts were written against the aligned planning stack in:

- `../../priority-draft-briefs.md`
- `../../../06-revision/publication-scene-cards.md`
- `../../../06-revision/publication-post-packets.md`
- `../../../06-revision/publication-evidence-packets.md`
- `../../../06-revision/cap-narrative-profile.md`

## Follow-on batch

That follow-on batch now exists as `batch-06`, which closes the remaining implementation and ecosystem proof notes with:

- `deploy-membership-credentials`
- `impl-oid4vci`
- `impl-oid4vp`

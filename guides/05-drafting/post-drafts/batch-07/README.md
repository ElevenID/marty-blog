# Batch 07 Drafts

*Front-door recovery -> Start Here spine repair -> model handoff.*

## Included drafts

1. `01-what-is-digital-identity.md`
   - Role: Start Here entry explainer
   - Reader shift: `confused -> oriented`
   - CTA: `verifiable-credentials-explained`
2. `02-verifiable-credentials-explained.md`
   - Role: Start Here credential explainer
   - Reader shift: `oriented -> structured`
   - CTA: `issuers-holders-verifiers-explained`
3. `03-issuers-holders-verifiers-explained.md`
   - Role: Start Here role-model explainer
   - Reader shift: `oriented -> structured`
   - CTA: `credential-lifecycle`
4. `04-credential-lifecycle.md`
   - Role: Start Here lifecycle bridge
   - Reader shift: `structured -> confident`
   - CTA: `five-primitives-in-one-picture`
5. `05-the-marty-identity-model.md`
   - Role: Start Here synthesis bridge
   - Reader shift: `structured -> confident`
   - CTA: `trust-profiles-explained` or `flows-orchestrating-identity-lifecycle`

## Why this batch belongs together

This batch repairs the broken front door of the Marty publication.

The existing flagship and evaluation material is already strong, but the Start Here path leading into it was still dominated by stubs. These drafts rebuild that path in the right order:

- first, define digital identity as portable machine-readable evidence instead of an account lookup problem
- then explain what a verifiable credential is as a signed, holder-controlled proof object
- then clarify the three operational actors who issue, carry, and verify those proofs
- then show that a credential lives through approval, issuance, presentation, verification, revocation, and renewal
- finally, synthesize those foundations into the Marty Identity Model so the reader can enter the existing primitive deep dives with a stable mental map

## Important sequencing note

This batch is not meant to replace the current flagship opening sequence.
It is meant to repair the on-ramp that should feed into it.

A clean Start Here path after this batch is:

1. `what-is-digital-identity`
2. `verifiable-credentials-explained`
3. `issuers-holders-verifiers-explained`
4. `credential-lifecycle`
5. `five-primitives-in-one-picture`
6. `the-marty-identity-model`
7. `flows-orchestrating-identity-lifecycle`

Readers who want the stronger category reframe earlier can branch from `what-is-digital-identity` into `why-identity-needs-a-protocol` and then rejoin the map at `five-primitives-in-one-picture`.

## Inputs used

These drafts were written against the aligned planning stack in:

- `../../priority-draft-briefs.md`
- `../../../06-revision/publication-scene-cards.md`
- `../../../06-revision/publication-post-packets.md`
- `../../../06-revision/publication-evidence-packets.md`
- `../../../06-revision/cap-narrative-profile.md`

## Follow-on status

After these drafts are converted and merged, the main follow-on work is:

- restore the Start Here path as a real learning path instead of a placeholder path
- patch section assignments for the newly recovered posts
- validate related-reading and metadata surfaces against the new front-door sequence
- handle the former `four-actors-of-identity-systems` positioning question in `batch-09/01-four-actors-of-identity-systems.md`, where governance authority becomes the ecosystem-level fourth actor while `issuers-holders-verifiers-explained` keeps ownership of the three operational roles

*** Add File: /Volumes/Heart of Gold/Github/work/marty-blog/guides/05-drafting/post-drafts/batch-09/README.md
# Batch 09 Drafts

*Foundations series completion -> governance-authority bridge -> ecosystem actor model.*

## Included drafts

1. `01-four-actors-of-identity-systems.md`
   - Role: foundations series completion bridge
   - Reader shift: `oriented -> serious`
   - CTA: `issuers-holders-verifiers-explained`

## Why this batch belongs together

This batch resolves the last remaining stub inside the published series inventory.

Unlike `batch-07`, which repaired the default Start Here ramp, this follow-up does something narrower and more specific: it restores the missing foundations-series bridge that explains why the three operational roles still depend on a fourth institutional actor.

The point is not to reopen the three-role explainer.
The point is to make one missing ecosystem truth explicit:

- issuer, holder, and verifier explain how proof moves
- governance authority explains why some issuers count and others do not
- trust infrastructure, accreditation, and registry logic therefore belong in the mental model before the reader moves too far into trust registries or compliance profiles

## Important sequencing note

This draft is best treated as a foundations-series completion insert, not as a mandatory replacement for the existing Start Here path.

Best insertion point:

1. `what-is-digital-identity`
2. `verifiable-credentials-explained`
3. `four-actors-of-identity-systems`
4. `issuers-holders-verifiers-explained`
5. `credential-lifecycle`

That placement keeps the post from duplicating the three-role explainer.
It first introduces the ecosystem-level governance actor, then lets `issuers-holders-verifiers-explained` keep the deeper operational walkthrough of the three roles.

## Inputs used

This draft is written against the aligned planning stack in:

- `../../priority-draft-briefs.md`
- `../../../06-revision/publication-scene-cards.md`
- `../../../06-revision/publication-post-packets.md`
- `../../../06-revision/publication-evidence-packets.md`
- `../../../06-revision/cap-narrative-profile.md`

It also relies on upstream source material from:

- `foundations-identity`
- `foundations-verification`
- `building-trust-registries-at-scale`
- `trust-profiles-explained`
- `guides/03-world-building/use-cases-and-deployment-contexts.md`

## Follow-on status

After this draft is converted and merged, the main follow-on work is:

- confirm the Foundations series no longer contains any live stub entries
- validate that `four-actors-of-identity-systems` complements rather than duplicates `issuers-holders-verifiers-explained`
- decide whether later governance and trust-infrastructure cleanup waves should merge, rename, or deepen adjacent governance posts such as `trust-registries-explained`

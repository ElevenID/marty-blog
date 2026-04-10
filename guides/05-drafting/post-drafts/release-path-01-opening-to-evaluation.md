Phase: 05 - Drafting  
Purpose: Record the strongest current publication-ready path across the drafted Marty posts so editorial cleanup and release packaging can converge on one coherent sequence.  
Time to Complete: 20–30 minutes

<!-- guide:release_path_01_opening_to_evaluation -->

# Release Path 01 — Opening to Evaluation

*Category reframe -> model map -> privacy constraint -> bounded proof notes -> ecosystem breadth -> evaluation -> implementation attachment points.*

## Why This Matters

The batch manifests explain why each local set of drafts belongs together.

What they do not provide by themselves is one cross-batch publication path that can guide:

- sentence-level polish
- CTA tightening
- visual planning
- release sequencing

This file provides that layer for the strongest current opening-to-evaluation path.

## Before You Begin

Useful upstream materials:

- `batch-01/README.md`
- `batch-02/README.md`
- `batch-05/README.md`
- `batch-06/README.md`
- `../../06-revision/publication-scene-cards.md`
- `../../06-revision/publication-post-packets.md`
- `../../06-revision/cap-narrative-profile.md`

## Current Working Draft

### Why this path exists

The draft batches now contain more material than the first publication wave should try to ship at once.

What is needed instead is one clean reader path that:

- opens with the strongest category and model argument
- proves one hard constraint in concrete terms
- widens from privacy into broader ecosystem confidence
- then hands serious readers into evaluation and implementation surfaces

This file documents that path.

### Start Here on-ramp (Wave 1 recovery)

The current opening-to-evaluation spine is still the strongest category-to-evaluation path.

The new front-door recovery drafts in `batch-07` should be treated as the gentler learning ramp that feeds into that spine when the reader needs foundations before category reframe.

1. `batch-07/01-what-is-digital-identity.md`
   - Job: define digital identity as portable machine-readable evidence instead of an account lookup problem.
2. `batch-07/02-verifiable-credentials-explained.md`
   - Job: explain the credential object before standards jargon takes over.
3. `batch-07/03-issuers-holders-verifiers-explained.md`
   - Job: clarify the three operational roles in credential exchange.
4. `batch-07/04-credential-lifecycle.md`
   - Job: show the full lifecycle from approval to revocation and renewal.
5. `batch-01/02-five-primitives-in-one-picture.md`
   - Job: give the reader the Marty systems map.
6. `batch-07/05-the-marty-identity-model.md`
   - Job: turn the foundations material into the stable Marty object grammar.
7. `flows-orchestrating-identity-lifecycle`
   - Job: hand the reader into the runtime movement of the model.

Readers who want the sharper commercial and category argument earlier can branch from `what-is-digital-identity` into `why-identity-needs-a-protocol` and then rejoin at `five-primitives-in-one-picture`.

### Foundations series completion follow-up

The remaining Foundations-series gap is best treated as a governance zoom-out that can sit between credential structure and the three-role operational explainer without forcing the default Start Here path to absorb more than it needs.

1. `batch-09/01-four-actors-of-identity-systems.md`
   - Job: show that issuers, holders, and verifiers still depend on a fourth institutional actor — governance authority / trust infrastructure — to define which issuers count.
   - Best insertion point: after `verifiable-credentials-explained` and before `issuers-holders-verifiers-explained` when the publication wants the ecosystem-level actor model to be explicit.

### Core publication spine

These are the posts that currently form the strongest opening-to-evaluation sequence.

1. `batch-01/01-why-identity-needs-a-protocol.md`
   - Job: reframe identity from rented platform workflow to reusable protocol infrastructure.
   - Reader shift: `confused -> oriented`
   - Why it stays first: it changes the category before the technical model appears.

2. `batch-01/02-five-primitives-in-one-picture.md`
   - Job: give the reader the Marty map.
   - Reader shift: `oriented -> structured`
   - Why it stays second: the rest of the path is easier once the primitives are visible.

3. `batch-01/03-minimum-disclosure-is-a-policy-problem.md`
   - Job: prove one serious constraint with a clear policy boundary.
   - Reader shift: `structured -> serious`
   - Why it stays third: privacy is the strongest early proof that Marty treats hard requirements as governed objects.

4. `batch-02/01-same-trust-model-different-runtime.md`
   - Job: show that the same trust logic survives runtime variation.
   - Reader shift: `serious -> confident`
   - Why it belongs in the spine: it broadens the story from privacy into operational credibility.

5. `batch-02/02-one-protocol-many-ecosystems.md`
   - Job: show the model stretching across travel, healthcare, enterprise, and education.
   - Reader shift: `structured -> confident`
   - Why it belongs here: it prevents the opening argument from sounding overfit to one use case.

6. `batch-02/03-why-marty-is-ready-for-evaluation.md`
   - Job: convert confidence into inspectable next steps.
   - Reader shift: `confident -> design_ready`
   - Why it closes the spine: it turns the argument into a serious evaluation path.

### Optional protocol-model insert

Insert this after `why-identity-needs-a-protocol` when the publication needs to answer the explicit “why does this protocol need a minimum shared grammar at all?” question before returning to the main spine.

1. `why-the-marty-protocol-exists`
   - Job: bridge from category reframe into the minimum shared model without replacing either the map post or the later full synthesis.
   - Placement rule: keep it optional in the opening spine; do not let it absorb `introducing-mip`'s launch role or `the-marty-identity-model`'s grammar/synthesis role.

### Support inserts that strengthen the path

These drafts are not required for every reader, but they make the opening sequence materially stronger when inserted at the right points.

#### Privacy support cluster

Insert these after `minimum-disclosure-is-a-policy-problem` when the publication wants to deepen the privacy branch before returning to the main spine.

1. `batch-05/01-selective-disclosure.md`
   - Clarifies mechanism choice without turning the publication into a cryptography detour.
2. `batch-05/02-privacy-data-minimization.md`
   - Supplies one compact before/after minimization proof.
   - Published-target rule: keep `privacy-data-minimization` on the guide side and use `data-minimization-in-identity` as the canonical blog proof-note slug.
3. `batch-05/03-deploy-age-verification.md`
   - Provides the cleanest one-scene retail proof note.

#### Ecosystem support insert

Insert this immediately after `one-protocol-many-ecosystems` when the publication wants a bounded non-government example before moving into evaluation.

1. `batch-06/01-deploy-membership-credentials.md`
   - Proves portable trust outside state-issued identity and keeps the breadth claim concrete.

#### Implementation support cluster

Insert these immediately after `why-marty-is-ready-for-evaluation` when the publication wants the next practical layer for implementers.

1. `batch-06/02-impl-oid4vci.md`
   - Shows where issuance transport ends and Marty objects begin.
2. `batch-06/03-impl-oid4vp.md`
   - Shows where presentation transport ends and Marty trust/disclosure/deployment logic begins.
3. `../../04-plot-and-structure/post-sequence.md` / published target `mip-json-schemas-walkthrough`
   - The clean next handoff after the implementation notes.

#### PKI trust-depth cluster

Insert this branch after `five-primitives-in-one-picture` or alongside `trust-profiles-explained` when the publication wants a deeper trust path before returning to deployment and evaluation.

1. `batch-08/01-public-key-infrastructure-explained.md`
   - Reframes PKI as identity trust infrastructure rather than generic security jargon.
2. `batch-08/02-understanding-trust-anchors.md`
   - Makes the root-of-trust object and its distribution/caching behavior explicit.
3. `batch-08/03-certificate-chains-and-validation.md`
   - Shows the actual validation path from issuer material to trusted root.
4. `batch-08/04-how-passport-pki-works.md`
   - Applies the trust model to travel credentials and inspection runtimes.
5. `batch-08/05-understanding-csca-certificates.md`
   - Deepens the country-root layer and the PKD / master-list distribution story.

#### Wallet architecture cluster

Insert this branch after `one-protocol-many-ecosystems` or after the implementation notes when the publication wants a bounded wallet depth path before returning to governance and evaluation.

1. `batch-08/06-mobile-wallet-architectures.md`
   - Explains the wallet as a layered system of storage, keys, protocols, and UX.
2. `batch-08/07-secure-enclave-credential-storage.md`
   - Shows how hardware-backed or platform-backed key custody protects holder binding.
3. `batch-08/08-credential-portability-across-wallets.md`
   - Clarifies what portability really depends on and where the boundaries still hold.
4. `batch-08/09-eudi-wallet-model-explained.md`
   - Connects wallet architecture to the most visible regulated ecosystem now arriving in Europe.

### Best current full path

If the goal is one publication-ready reader journey rather than the shortest possible spine, this is the strongest current order:

1. `why-identity-needs-a-protocol`
2. `five-primitives-in-one-picture`
3. `minimum-disclosure-is-a-policy-problem`
4. `selective-disclosure`
4. `data-minimization-in-identity`
6. `deploy-age-verification`
7. `same-trust-model-different-runtime`
8. `one-protocol-many-ecosystems`
9. `deploy-membership-credentials`
10. `why-marty-is-ready-for-evaluation`
11. `impl-oid4vci`
12. `impl-oid4vp`
13. `mip-json-schemas-walkthrough`

### Editorial notes

- The opening three posts are already the strongest narrative front door and should remain stable.
- `why-the-marty-protocol-exists` is a useful optional insert when readers need the minimum-shared-model bridge, but it should not replace the default opening spine.
- The draft CTAs now support the opening spine more directly: `why-identity-needs-a-protocol` -> `five-primitives-in-one-picture` -> `minimum-disclosure-is-a-policy-problem` -> `same-trust-model-different-runtime` -> `one-protocol-many-ecosystems` -> `why-marty-is-ready-for-evaluation`.
- `minimum-disclosure-is-a-policy-problem` now supports both the direct return to the main spine and the optional privacy branch through `selective-disclosure` and `deploy-age-verification`.
- The privacy support cluster should now treat `data-minimization-in-identity` as the canonical blog proof note even if an older draft path still refers to `privacy-data-minimization`.
- The privacy cluster works best as an inserted branch, not as a replacement for the runtime and ecosystem flagships.
- The evaluation post now functions better because it can hand directly into the implementation proof notes from `batch-06`.
- The implementation notes should remain late in the path; they are strongest once the reader already accepts the category, the model, and the evidence path.
- `introducing-mip` should stay adjacent to launch/evaluation surfaces rather than drifting back into the opening explainer role.
- The new PKI cluster is best treated as a trust-depth branch, not as a replacement for the opening spine.
- The new wallet cluster works best as a later branch once the reader already understands trust, issuance, disclosure, and runtime as system layers.

### Status

This path is now coherent enough to guide a publication-readiness polish pass.

The next editing work should focus on sentence-level tightening and visual-asset planning for the posts in the core spine before any wider release packaging.

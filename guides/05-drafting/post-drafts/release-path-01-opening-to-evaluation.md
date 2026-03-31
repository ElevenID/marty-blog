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

### Support inserts that strengthen the path

These drafts are not required for every reader, but they make the opening sequence materially stronger when inserted at the right points.

#### Privacy support cluster

Insert these after `minimum-disclosure-is-a-policy-problem` when the publication wants to deepen the privacy branch before returning to the main spine.

1. `batch-05/01-selective-disclosure.md`
   - Clarifies mechanism choice without turning the publication into a cryptography detour.
2. `batch-05/02-privacy-data-minimization.md`
   - Supplies one compact before/after minimization proof.
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

### Best current full path

If the goal is one publication-ready reader journey rather than the shortest possible spine, this is the strongest current order:

1. `why-identity-needs-a-protocol`
2. `five-primitives-in-one-picture`
3. `minimum-disclosure-is-a-policy-problem`
4. `selective-disclosure`
5. `privacy-data-minimization`
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
- The draft CTAs now support the opening spine more directly: `why-identity-needs-a-protocol` -> `five-primitives-in-one-picture` -> `minimum-disclosure-is-a-policy-problem` -> `same-trust-model-different-runtime` -> `one-protocol-many-ecosystems` -> `why-marty-is-ready-for-evaluation`.
- `minimum-disclosure-is-a-policy-problem` now supports both the direct return to the main spine and the optional privacy branch through `selective-disclosure` and `deploy-age-verification`.
- The privacy cluster works best as an inserted branch, not as a replacement for the runtime and ecosystem flagships.
- The evaluation post now functions better because it can hand directly into the implementation proof notes from `batch-06`.
- The implementation notes should remain late in the path; they are strongest once the reader already accepts the category, the model, and the evidence path.

### Status

This path is now coherent enough to guide a publication-readiness polish pass.

The next editing work should focus on sentence-level tightening and visual-asset planning for the posts in the core spine before any wider release packaging.

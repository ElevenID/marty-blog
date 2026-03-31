# Batch 02 Drafts

*Operational proof -> ecosystem breadth -> evaluation handoff.*

## Included drafts

1. `01-same-trust-model-different-runtime.md`
   - Role: deployment-bridge flagship
   - Reader shift: `serious -> confident`
   - CTA: evaluate which deployment model fits the reader's environment
2. `02-one-protocol-many-ecosystems.md`
   - Role: breadth-proof flagship
   - Reader shift: `structured -> confident`
   - CTA: map the reader's ecosystem to a Marty deployment path or move into evaluation
3. `03-why-marty-is-ready-for-evaluation.md`
   - Role: conversion / evaluation flagship
   - Reader shift: `confident -> design_ready`
   - CTA: inspect the spec, schemas, and deployment choices

## Why this batch belongs together

This batch advances the publication from model understanding into operational and adoption confidence:

- first, show that the same trust logic can survive cloud, self-hosted, and edge conditions without rewriting the architecture
- second, prove that the same object model can stretch across travel, healthcare, enterprise access, and education ecosystems
- third, hand serious readers into inspectable artifacts, conformance surfaces, and deployment choices

Together, these drafts make Marty feel less like a thesis and more like something a serious team can evaluate.

## Important sequencing note

For drafting efficiency, this batch jumps from ecosystem breadth into evaluation readiness. In eventual publication order, `infrastructure-economics-migration` may still work well as a bridge between `one-protocol-many-ecosystems` and `why-marty-is-ready-for-evaluation` for buyer-oriented paths.

Now that `batch-06` exists, the ecosystem-to-implementation continuation is clearer as a later path:

1. `one-protocol-many-ecosystems`
2. `deploy-membership-credentials`
3. `why-marty-is-ready-for-evaluation`
4. `impl-oid4vci`
5. `impl-oid4vp`
6. `mip-json-schemas-walkthrough`

## Inputs used

These drafts were written against the aligned planning stack in:

- `../../priority-draft-briefs.md`
- `../../../06-revision/publication-scene-cards.md`
- `../../../06-revision/publication-post-packets.md`
- `../../../06-revision/publication-evidence-packets.md`
- `../../../06-revision/cap-narrative-profile.md`

## Grounding note

The evaluation draft was aligned to actual repo artifacts in the workspace, including:

- `marty-core/docker-compose.dev.yml`
- `marty-protocol/cedar/mip.cedarschema`
- `marty-protocol/cedar/policies/credential_verification.cedar`
- `marty-protocol/scripts/run-conformance.sh`

## Suggested next batch

A strong `batch-03` would deepen the operational and buyer path with:

- `the-infrastructure-economics-migration`
- `deployment-profiles-in-practice`
- `offline-verification-guide`

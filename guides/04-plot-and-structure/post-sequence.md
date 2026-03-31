# Post Sequence

Phase: 04 - Plot and Structure  
Purpose: Record recommended paths through the Marty publication rather than a single mandatory reading order.  
Time to Complete: 25–40 minutes

<!-- guide:post_sequence -->

## Why This Matters

A topic-led publication without any recommended paths leaves readers adrift.
A publication with only one mandatory sequence kills editorial freedom.

This document records curated paths — orientation defaults and role-specific entry sequences — so readers who want structure can find it and authors who want to write freely can still see where their topic connects.

## Before You Begin

Prerequisites:

- `../00-start-here/course-brief.md`
- `series-arc.md`
- `module-map.md`

This working draft is based on the published flagship post inventory, guide chapter structure, and the gravity-well arc.

## Important Note

This file does **not** define one canonical queue that every reader or author must follow.

It records:

- one useful orientation path for brand-new readers
- several alternative entry paths by question or role
- a roadmap expansion pool for future writing

## Default Orientation Path

This is the cleanest current path for a reader who wants the most guidance.
It is helpful, but not mandatory.

| Order | Source | Why it belongs here |
| --- | --- | --- |
| 1 | `why-identity-needs-a-protocol` | Establishes the core category reframe |
| 2 | `centralized-vs-verifiable` | Makes the architectural and economic contrast vivid |
| 3 | `business-case-for-credential-portability` | Strengthens the commercial case |
| 4 | `trust-profiles-explained` | Introduces the first major Marty primitive in a reader-friendly way |
| 5 | `credential-templates-designing-what-gets-issued` | Shows how issuance becomes governed structure |
| 6 | `presentation-policies-minimum-disclosure` | Makes privacy and disclosure concrete |
| 7 | `deployment-profiles-from-design-to-production` | Moves from design to operational reality |
| 8 | `flows-orchestrating-identity-lifecycle` | Shows how the primitives become end-to-end experience |
| 9 | `compliance-profiles-bridging-regulation` | Proves the model can absorb standards pressure |
| 10 | `offline-verification-design-patterns` | Demonstrates real-world deployment toughness |
| 11 | `introducing-mip` | Reveals the full protocol as a live artifact |
| 12 | `mip-json-schemas-walkthrough` | Moves the reader into implementation-ready material |
| 13 | `conformance-testing-for-implementers` | Confirms Marty is meant to be implemented, not merely admired |

## Best Entry Paths By Reader Question

### Why protocol, not platform?
1. `why-identity-needs-a-protocol`
2. `business-case-for-credential-portability`
3. `centralized-vs-verifiable`
4. `introducing-mip`

### How does trust actually work here?
1. `trust-profiles-explained`
2. `cryptographic-trust-anchors-primer`
3. `building-trust-registries-at-scale`
4. `revocation-strategies-compared`

### How does Marty handle privacy and minimum disclosure?
1. `presentation-policies-minimum-disclosure`
2. `zero-knowledge-predicates-identity`
3. `sd-jwt-selective-disclosure-deep-dive`
4. `privacy-data-minimization`

### Will this work in a real deployment?
1. `deployment-profiles-from-design-to-production`
2. `offline-verification-design-patterns`
3. `holder-binding-beyond-biometrics`
4. `deploy-airline-boarding` or `deploy-age-verification`

### Is Marty ready for evaluation?
1. `introducing-mip`
2. `mip-json-schemas-walkthrough`
3. `conformance-testing-for-implementers`
4. pricing / deployment materials

## Best Entry Paths By Reader Type

### Strategic / Buyer Path
1. `why-identity-needs-a-protocol`
2. `business-case-for-credential-portability`
3. `eudi-wallet-readiness`
4. `introducing-mip`

### Architecture Path
1. `foundations-identity`
2. `trust-profiles`
3. `credential-templates`
4. `presentation-policies`
5. `deployment-profiles`
6. `flows-orchestrating-identity-lifecycle`
7. `mip-json-schemas-walkthrough`

### Privacy / Governance Path
1. `presentation-policies-minimum-disclosure`
2. `zero-knowledge-predicates-identity`
3. `privacy-data-minimization`
4. `compliance-profiles-bridging-regulation`
5. `cedar-policies-for-identity-governance`

### Operator / Deployment Path
1. `deployment-profiles-from-design-to-production`
2. `offline-verification-guide`
3. `offline-verification-design-patterns`
4. `holder-binding-beyond-biometrics`
5. `deploy-airline-boarding`

### Implementer Path
1. `issuance-flows`
2. `presentation-flows`
3. `impl-oid4vci`
4. `impl-oid4vp`
5. `mip-json-schemas-walkthrough`
6. `conformance-testing-for-implementers`

## Published Material By Gravity Well

### Category Reframe
- `why-identity-needs-a-protocol`
- `business-case-for-credential-portability`
- `centralized-vs-verifiable`

### Model Reveal
- `trust-profiles-explained`
- `credential-templates-designing-what-gets-issued`
- `presentation-policies-minimum-disclosure`
- `deployment-profiles-from-design-to-production`
- `flows-orchestrating-identity-lifecycle`

### Constraint Layer
- `cryptographic-trust-anchors-primer`
- `zero-knowledge-predicates-identity`
- `compliance-profiles-bridging-regulation`
- `cedar-policies-for-identity-governance`
- `building-trust-registries-at-scale`
- `revocation-strategies-compared`

### Operational Proof
- `offline-verification-design-patterns`
- `holder-binding-beyond-biometrics`
- `eudi-wallet-readiness`
- `mip-and-open-badges-education-credentials`
- chapter 5 deployment guides

### Artifact and Adoption Proof
- `introducing-mip`
- `mip-json-schemas-walkthrough`
- `conformance-testing-for-implementers`
- implementation guides
- pricing / deployment materials

## Roadmap Expansion Pool

The roadmap should be treated as a **topic pool**, not a mandatory publication queue.

It currently expands the publication through these broad areas:

1. **Foundations** — identity concepts and cryptographic basics
2. **Standards** — ICAO, CSCA, mDoc, government PKI
3. **Credentials** — issuance, presentation, interoperability
4. **Wallets** — device binding and UX
5. **Privacy** — data minimization and selective disclosure
6. **Governance** — policy engines and ecosystem rules
7. **Trust Infrastructure** — registries, federation, verifier infra
8. **Marty Protocol** — deep protocol synthesis and advanced primitive explainers

Authors should feel free to pull from this pool when a topic becomes timely, useful, or clarifying.

## Pathing Rules To Preserve

- Start from a real reader question, not a fake notion of completeness.
- Use the guided path for convenience, not control.
- Let authors publish out of order when the topic is strong.
- Make every piece legible as part of the larger Marty model.
- Keep linking readers toward adjacent ideas and deeper proof.

## Content Status Notes

Some slugs referenced in the paths above are **planned or roadmap content** rather than published flagship posts. This is expected in a topic-led publication — paths are designed to hold the shape of the eventual publication even before every piece exists.

**Published flagship posts** (verified in the published content source map):
`why-identity-needs-a-protocol`, `trust-profiles-explained`, `business-case-for-credential-portability`, `cryptographic-trust-anchors-primer`, `credential-templates-designing-what-gets-issued`, `presentation-policies-minimum-disclosure`, `eudi-wallet-readiness`, `deployment-profiles-from-design-to-production`, `zero-knowledge-predicates-identity`, `flows-orchestrating-identity-lifecycle`, `compliance-profiles-bridging-regulation`, `sd-jwt-selective-disclosure-deep-dive`, `cedar-policies-for-identity-governance`, `introducing-mip`, `mip-json-schemas-walkthrough`, `post-quantum-readiness-in-identity`, `building-trust-registries-at-scale`, `offline-verification-design-patterns`, `holder-binding-beyond-biometrics`, `mip-and-open-badges-education-credentials`, `conformance-testing-for-implementers`, `revocation-strategies-compared`

**Guide chapter articles** (used in paths but published inside the guide, not as standalone posts):
`centralized-vs-verifiable`, `foundations-identity`, `foundations-credentials`, `foundations-verification`, `trust-profiles`, `credential-templates`, `presentation-policies`, `deployment-profiles`, `issuance-flows`, `presentation-flows`, `revocation-flows`, `trust-anchors`, `pki-certificate-chains`, `policy-engines`, `trust-registries`

**Planned / roadmap content** (referenced in paths but not yet published):
`privacy-data-minimization`, `selective-disclosure`, `deploy-airline-boarding`, `deploy-age-verification`, `deploy-enterprise-access`, `deploy-membership-credentials`, `deploy-future-identity`, `deployment-profiles-in-practice`, `compliance-profiles-in-practice`, `offline-verification-guide`, `impl-oid4vci`, `impl-oid4vp`

When drafting, prioritize filling the planned content gaps that appear in the most reader paths.

## Related

- `series-arc.md` — the deeper logic behind all of these paths
- `module-map.md` — the cluster-level view of the publication
- `../05-drafting/published-content-source-map.md` — source inventory for flexible drafting
- `../06-revision/publication-backlog-table.md` — the operationalized backlog driving these paths
- `../06-revision/publication-post-packets.md` — the structural drafts for the planned material

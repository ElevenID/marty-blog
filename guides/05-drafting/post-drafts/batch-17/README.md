# Batch 17 Drafts

*Governance models -> authorization models -> policy-engine rationale -> ecosystem governance.*

## Included drafts

1. `01-identity-governance-models.md`
   - Role: governance opener
   - Reader shift: `structured -> serious`
   - CTA: `rbac-vs-abac`
2. `02-rbac-vs-abac.md`
   - Role: authorization comparison bridge
   - Reader shift: `serious -> confident`
   - CTA: `policy-engines-for-identity-systems`
3. `03-policy-engines-for-identity-systems.md`
   - Role: policy-architecture bridge
   - Reader shift: `serious -> design_ready`
   - CTA: `cedar-policies-for-identity-governance`
4. `04-governing-credential-ecosystems.md`
   - Role: ecosystem governance bridge
   - Reader shift: `serious -> confident`
   - CTA: `trust-registries-explained`

## Why this batch belongs together

The privacy/compliance recovery wave repaired the reader’s sense that minimum disclosure, auditability, and change control can coexist.

The trust-infrastructure recovery wave repaired the registry, federation, verifier-runtime, and issuer-discovery layer.

What still sat between those two paths was the governance middle:

- who decides which issuers and rule sets count
- how authorization models differ once governance becomes operational
- why a policy engine exists at all instead of more hidden rule objects
- how multi-issuer ecosystems stay coherent before registries start distributing trust state

These four drafts close that gap.

Together they create a cleaner governance reading path:

- first, define governance as an unavoidable system choice rather than a vague committee function
- then compare RBAC and ABAC as two ways that governance becomes authorization logic
- then explain why policy engines exist as the runtime surface for those decisions
- finally, widen the frame to multi-issuer ecosystems where governance has to travel farther than one organization

This batch is meant to complement the existing compliance, Cedar, and trust-registry material, not to duplicate it.

## Best governance follow-on path

1. `identity-governance-models`
2. `rbac-vs-abac`
3. `policy-engines-for-identity-systems`
4. `cedar-policies-for-identity-governance`
5. `governing-credential-ecosystems`
6. `trust-registries-explained`
7. `federation-in-identity-systems`
8. `verifier-infrastructure`

## Inputs used

These drafts were written against the aligned planning stack in:

- `../../priority-draft-briefs.md`
- `../../../06-revision/publication-scene-cards.md`
- `../../../06-revision/publication-post-packets.md`
- `../../../06-revision/publication-evidence-packets.md`
- `../../../06-revision/cap-narrative-profile.md`

They also rely on upstream source material from:

- `marty-blog/src/data/blogPosts.js`
- `marty-blog/src/data/articleMeta.js`
- `marty-blog/guides/03-world-building/protocol-ecosystem-map.md`
- `marty-protocol/SPECIFICATION.md`
- `marty-protocol/docs/design-principles.md`
- `marty-protocol/docs/cedar-policies.md`
- `marty-protocol/docs/cedar-integration-guide.md`
- `marty-ui/packages/marty_common/cedar_actions.py`
- `marty-ui/packages/marty_common/cedar_engine.py`
- `marty-ui/services/organization/application/policy_set_use_cases.py`
- `marty-microservices-framework/mmf/framework/authorization/adapters/abac_engine.py`
- `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`
- `product-catalog/pricing-and-packaging.md`
- `product-catalog/offering-matrix.md`
- the existing live governance/compliance/trust posts already published in `src/data/blogPosts.js`

## Follow-on status

After these drafts are converted and merged, the main follow-on work is:

- validate that `identity-governance-models` stays at the organizational and institutional layer instead of drifting into technical registry mechanics
- confirm that `rbac-vs-abac` remains a model comparison rather than another Cedar syntax post
- confirm that `policy-engines-for-identity-systems` teaches why policy engines exist instead of turning into a generalized policy-language popularity contest
- validate that `governing-credential-ecosystems` hands cleanly into `trust-registries-explained` and `federation-in-identity-systems` without stealing their implementation detail
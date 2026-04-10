# Course Manuscript Outline

Phase: 05 - Drafting  
Purpose: Turn the live Marty blog and guide inventory into a flexible editorial outline that can be assembled into guide paths, topic collections, or future course packs without forcing a single manuscript.  
Time to Complete: 30–45 minutes

<!-- guide:course_manuscript_outline -->

## Why This Matters

The Marty publication already exists in fragments.
What we need is not one rigid book outline, but a way to assemble those fragments into coherent collections whenever useful.

This outline treats the publication as a set of reusable topical collections.

## Current Working Draft

### Collection 1 — Why Identity Needs a Protocol

**Central question:** Why is identity still sold as a platform problem instead of a reusable infrastructure layer?

**Anchor pieces:**
- `why-identity-needs-a-protocol`
- `business-case-for-credential-portability`

**Supporting pieces:**
- `foundations-identity`
- `centralized-vs-verifiable`
- `foundations-credentials`
- `foundations-verification`

**Likely lead voices:** Daniel, Aiko

**Key idea to land:** Reusable credentials plus explicit trust/disclosure logic change both the architecture and the economics.

**Conversion beat:** Marty is relevant because it explains and operationalizes that shift.

### Collection 2 — The Five Primitive Model

**Central question:** What is the minimum shared model that makes verifiable identity systems legible?

**Anchor pieces:**
- `trust-profiles-explained`
- `flows-orchestrating-identity-lifecycle`

**Supporting pieces:**
- `trust-profiles`
- `credential-templates`
- `credential-templates-designing-what-gets-issued`
- `presentation-policies`
- `presentation-policies-minimum-disclosure`
- `deployment-profiles`
- `deployment-profiles-from-design-to-production`

**Likely lead voices:** Daniel, Victor, Nora

**Key idea to land:** MIP is not just a set of standards integrations; it is a model with stable objects and operational boundaries.

**Conversion beat:** Marty becomes thinkable as a real architecture choice.

### Collection 3 — Trust, Governance, and Privacy by Design

**Central question:** Can this model survive real trust, privacy, and governance pressure?

**Anchor pieces:**
- `cryptographic-trust-anchors-primer`
- `compliance-profiles-bridging-regulation`
- `presentation-policies-minimum-disclosure`

**Supporting pieces:**
- `trust-anchors`
- `pki-certificate-chains`
- `policy-engines`
- `trust-registries`
- `data-minimization-in-identity`
- `zero-knowledge-predicates-identity`
- `sd-jwt-selective-disclosure-deep-dive`
- `cedar-policies-for-identity-governance`
- `revocation-strategies-compared`

**Likely lead voices:** Marcus, Elena, Nora

**Key idea to land:** Marty treats privacy, governance, and trust as first-class protocol concerns.

**Conversion beat:** Regulated and security-conscious readers gain reason to keep evaluating rather than dismissing the model as idealistic.

### Collection 4 — Flows and Deployments in the Real World

**Central question:** What does the Marty model look like when it reaches actual devices, environments, and user journeys?

**Anchor pieces:**
- `deployment-profiles-from-design-to-production`
- `offline-verification-design-patterns`
- `deploy-airline-boarding`

**Supporting pieces:**
- `issuance-flows`
- `presentation-flows`
- `revocation-flows`
- `selective-disclosure`
- `deployment-profiles-in-practice`
- `offline-verification-guide`
- `compliance-profiles-in-practice`
- `deploy-age-verification`
- `deploy-enterprise-access`
- `deploy-membership-credentials`
- `deploy-future-identity`
- `holder-binding-beyond-biometrics`
- `eudi-wallet-readiness`
- `mip-and-open-badges-education-credentials`

**Likely lead voices:** Sofia, Aiko, Nora

**Key idea to land:** The same protocol model spans cloud, offline, kiosk, government, enterprise, retail, and education contexts.

**Conversion beat:** Marty becomes operationally plausible.

### Collection 5 — Implementation and Adoption

**Central question:** Is Marty real enough to inspect, implement, and evaluate seriously?

**Anchor pieces:**
- `introducing-mip`
- `mip-json-schemas-walkthrough`
- `conformance-testing-for-implementers`

**Supporting pieces:**
- guide chapter 6 implementation articles
- `marty-protocol/README.md`
- `marty-protocol/SPECIFICATION.md`
- pricing and offering materials as commercial proof

**Likely lead voices:** Daniel, Elena, Sofia

**Key idea to land:** Marty is already a live protocol surface with schemas, conformance logic, deployment packaging, and governance tiers.

**Conversion beat:** Read the spec, inspect schemas, compare deployment options, and move into evaluation.

## Assembly Rule

There is no single mandatory manuscript.

Instead, use these collections to assemble:

- a new-reader onboarding path
- a standards/compliance bundle
- a privacy bundle
- a deployment/operator bundle
- an implementation/evaluation bundle

The publication should be able to behave like a course when helpful — without demanding that every author or reader pretend that one sequence fits all.

## Packaging Opportunities

**Starter Pack:** Collection 1 → Collection 2 → Collection 5  
**Standards / Compliance Pack:** Collection 1 → Collection 3 → Collection 4  
**Operator Pack:** Collection 4 → Collection 3 → Collection 5  
**Implementer Pack:** Collection 2 → Collection 5  
**Executive / Buyer Pack:** Collection 1 → Collection 4 → Collection 5

## Net-New Writing Still Needed

Based on the current corpus, the largest remaining gaps are:

- a tighter explicit bridge from editorial learning to commercial evaluation
- one clear "all five primitives in one picture" flagship article
- more customer-journey or migration storytelling
- stronger end-of-collection recap and next-step handoffs

Those gaps do not block the outline. They simply mark the next drafting opportunities.

## Drafting Rule

When in doubt:

1. start from a real reader question
2. choose the topical collection it belongs to
3. pick the best lead author for that question
4. draft from existing guide and flagship materials first
5. end with the best next step into the wider Marty system

## Related

- `published-content-source-map.md` — where the live material is coming from
- `priority-draft-briefs.md` — the highest-leverage topic packets to draft next
- `../04-plot-and-structure/module-map.md` — the structural view of the same outline

# Module Map

Phase: 04 - Plot and Structure  
Purpose: Map the current Marty guide and blog content into flexible topic clusters that support free author choice and optional guided paths.  
Time to Complete: 25–40 minutes

<!-- guide:module_map -->

## Why This Matters

Without a cluster map, topic freedom becomes invisible structure.
Authors need to see which questions the publication keeps answering so they can place new work inside those recurring patterns.

This document maps content into durable editorial clusters — not to restrict what authors write, but to show where each new topic strengthens existing coverage or fills a gap.

## Before You Begin

Prerequisites:

- `../00-start-here/course-brief.md`
- `series-arc.md`

This working draft is derived from the current guide chapters, published flagship posts, and the gravity-well arc defined in `series-arc.md`.

## Current Working Draft

Think of these less as fixed teaching modules and more as durable **editorial clusters**.
They describe the recurring kinds of questions the publication should answer.

| Cluster | Typical lead voices | Reader outcome | Core guide sources | Core flagship posts | Best entry questions | Conversion move | Current gaps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **1. Why Identity Needs a Protocol** | Daniel, Aiko | Reader understands the platform-vs-protocol thesis and the holder-controlled model | Chapter 1 foundations articles | `why-identity-needs-a-protocol`, `business-case-for-credential-portability`, `cryptographic-trust-anchors-primer` | Why is identity still expensive and fragmented? | Establish the need for Marty by reframing the category itself | Needs a sharper migration story from incumbent IDV |
| **2. The Five MIP Primitives** | Daniel, Victor, Nora | Reader can name and explain Trust Profiles, Credential Templates, Presentation Policies, Deployment Profiles, and Flows | Chapter 2 core objects + Chapter 4 flow articles | `trust-profiles-explained`, `credential-templates-designing-what-gets-issued`, `presentation-policies-minimum-disclosure`, `deployment-profiles-from-design-to-production`, `flows-orchestrating-identity-lifecycle` | Which object in the Marty model actually answers this problem? | Show that Marty is a reusable architecture, not just an opinion | Could use one unifying "all five in one diagram" flagship piece |
| **3. Trust, Governance, and Privacy** | Marcus, Elena, Nora | Reader understands why trust, revocation, governance, and minimum disclosure are protocol concerns | Chapter 3 trust/governance articles | `zero-knowledge-predicates-identity`, `compliance-profiles-bridging-regulation`, `cedar-policies-for-identity-governance`, `building-trust-registries-at-scale`, `revocation-strategies-compared` | Can this survive regulated scrutiny and real trust requirements? | Build confidence that Marty can survive hard constraints | More comparative buyer guidance would help |
| **4. Deployments and Real-World Environments** | Sofia, Aiko | Reader sees how the same model applies in offline, regulated, and operationally messy environments | Chapter 5 deployment/use-case articles | `eudi-wallet-readiness`, `offline-verification-design-patterns`, `holder-binding-beyond-biometrics`, `mip-and-open-badges-education-credentials` | Will this work in my environment? | Prove Marty is deployable across multiple contexts | Customer evidence is still mostly illustrative rather than testimonial |
| **5. Implementation and Adoption** | Daniel, Elena, Sofia | Reader knows where to go next: spec, schemas, conformance, and deployment/package evaluation | Chapter 6 implementation articles | `introducing-mip`, `mip-json-schemas-walkthrough`, `conformance-testing-for-implementers`, pricing/packaging docs | Is this real enough to evaluate or implement? | Make evaluation and implementation the natural next step | Explicit adoption landing pages are still lightweight |

## Guide-Chapter-to-Cluster Mapping

| Guide Chapter | Best-fitting cluster | Why |
| --- | --- | --- |
| **1. Foundations** | Cluster 1 | Establishes the problem space and trust triangle |
| **2. Core Objects** | Cluster 2 | Directly teaches the reusable Marty model |
| **3. Trust & Governance** | Cluster 3 | Adds the hard constraints that make the model credible |
| **4. Flows** | Cluster 2 / Cluster 4 bridge | Connects abstract primitives to lifecycle execution |
| **5. Deployments** | Cluster 4 | Proves the model in real environments |
| **6. Implementations** | Cluster 5 | Converts understanding into implementation and evaluation readiness |

## How To Use Clusters Without Rigidity

- Choose the cluster that best matches the reader's real question.
- Borrow from adjacent clusters when a topic naturally crosses boundaries.
- Use the guide chapters as grounding, not as a prison.
- If a topic does not fit any cluster, it is probably off-strategy or under-specified.

## Suggested Path For New Readers

If we later build a formal onboarding experience, the most natural cluster order is still:

1. Foundations and protocol case
2. Five primitives
3. Trust, governance, and privacy
4. Flows and deployments
5. Implementations and adoption

That preserves the core Marty selling motion:

**need → model → constraint handling → operational proof → artifact proof**

But that path should be offered as a convenience, not imposed as the only way to engage.

## Related

- `series-arc.md` — the underlying logic that holds these clusters together
- `post-sequence.md` — recommended paths through the current published material
- `../05-drafting/course-manuscript-outline.md` — the drafting view of the same cluster map

## Using This With AI

Paste this file when asking AI to:

- decide which cluster a proposed topic belongs to
- identify which cluster has the most gaps
- propose new topics within a specific cluster
- critique whether a draft serves a clear cluster or drifts

Useful prompt starter:

> Here is the module map for the Marty Protocol publication. Which cluster does this proposed topic serve, and where does it fill a gap?

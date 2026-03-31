# Publication Backlog Table

Phase: 06 - Revision  
Purpose: Convert the proposed Marty post slate into a revision-phase backlog artifact so editorial planning can prioritize, sequence, and audit future publication work without drafting the posts yet.  
Time to Complete: 25–35 minutes

<!-- guide:publication_backlog_table -->

## Why This Matters

By Phase 6, the Marty editorial system already knows a great deal:

- what the publication is trying to prove
- which reader roles matter most
- which gravity wells give the publication its structure
- which topics are already published
- which planned posts would close the biggest gaps

What it still needs is a **single planning surface** for the next posts.

This backlog is that surface.
It is not a publishing queue and it is not draft copy.
It is a revision artifact that helps the team answer:

- Which proposed posts are highest priority?
- Which reader or gravity-well gaps do they close?
- Which narrator should likely lead?
- Which source material already exists?
- How should the backlog support the Five Primitives navigation model?

## Before You Begin

Prerequisites:

- `../00-start-here/course-brief.md`
- `../00-start-here/publishing-strategy.md`
- `../04-plot-and-structure/post-sequence.md`
- `../05-drafting/course-manuscript-outline.md`
- `../05-drafting/priority-draft-briefs.md`

This file tracks the **recommended publication surface for the next wave**: net-new backlog items plus any live anchor posts or close published analogues that already define the navigation model. When a live post appears here, it is serving as a structural anchor or refresh reference rather than as a brand-new drafting task.

## How To Read This Backlog

- **Priority** indicates editorial leverage, not a mandatory publication order.
- **Gravity Well** maps the post to the deeper series arc.
- **Navigation role** indicates whether a post acts as a hub, bridge, deep dive, or conversion piece.
- **Scene shape** indicates whether the post is best treated as a 1-scene proof note, 3-scene explainer, or 4-scene bridge/evaluation piece.
- **Source anchors** are the materials already available to support planning and drafting.

## Observed Scene Patterns From Strong Flagship Posts

The current Marty flagship posts cluster into three useful scene shapes:

1. **3-scene explainer** — the default shape for strong category, privacy, and deployment posts.
	- seen in posts such as `why-identity-needs-a-protocol`, `business-case-for-credential-portability`, `presentation-policies-minimum-disclosure`, and `offline-verification-design-patterns`
2. **4-scene bridge / evaluation post** — best when the article must move from concept into spec, proof surface, or implementation handoff.
	- seen most clearly in `introducing-mip`
3. **1-scene proof note** — appropriate for sharply bounded supporting posts where one concrete example does most of the work.

This backlog uses those shapes deliberately rather than assuming every planned piece needs the same narrative weight.

## Tier 1 — Core Backlog

These are the highest-leverage proposed posts because they either establish the system-wide navigation model, strengthen the business case, or close major conversion gaps.

| Priority | Working title | Working slug | Summary | Primary reader | Likely lead persona | Gravity well | Navigation role | Scene shape | Source anchors | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P1 | Why Identity Needs a Protocol | `why-identity-needs-a-protocol` | Opening category-reframe piece explaining why identity is still treated as a platform problem, why that creates lock-in and repeated verification cost, and why Marty reframes the category as reusable protocol infrastructure. | Sponsor, architect | Daniel, Aiko | Category Reframe | Entry point | 3 scenes | `centralized-vs-verifiable`, `business-case-for-credential-portability`, `foundations-identity` | Live anchor / refresh reference |
| P1 | The Five Primitives in One Picture | `five-primitives-in-one-picture` | Foundational overview of the entire MIP model that gives readers one stable visual map of `Trust Profile`, `Credential Template`, `Presentation Policy`, `Deployment Profile`, and `Flow`, then teaches later posts to locate themselves inside that map. | Architect, implementer, sponsor | Daniel | Model Reveal | **Navigation anchor / hub** | 4 scenes | primitive guides, `flows-orchestrating-identity-lifecycle`, `marty-protocol/README.md` | Proposed flagship |
| P1 | Minimum Disclosure Is a Policy Problem | `minimum-disclosure-is-a-policy-problem` | Privacy-focused piece showing that overcollection is a structural design problem and that Marty makes minimum disclosure configurable through policy rather than leaving it to verifier restraint. | Privacy, compliance, skeptical technical buyer | Nora | Constraint Layer | Deep dive | 3 scenes | `presentation-policies-minimum-disclosure`, `privacy-data-minimization`, `zero-knowledge-predicates-identity`, `sd-jwt-selective-disclosure-deep-dive` | Proposed flagship (live analogue exists) |
| P1 | Same Trust Model, Different Runtime | `same-trust-model-different-runtime` | Deployment-focused explainer showing how the same trust logic can run across cloud, hosted, and edge/offline environments without becoming separate products or architectures. | Operator, architect, commercial evaluator | Sofia | Operational Proof | Bridge from model to deployment | 3 scenes | `deployment-profiles-from-design-to-production`, `deployment-profiles-in-practice`, `offline-verification-guide`, pricing docs | Proposed flagship |
| P1 | One Protocol, Many Ecosystems | `one-protocol-many-ecosystems` | Breadth proof demonstrating that the same Marty model can span travel, retail, enterprise, education, and regulated ecosystems without requiring a different architecture for each standards cluster. | Standards-minded architect, regulated buyer, skeptical sponsor | Aiko, Daniel | Operational Proof | Breadth / bridge piece | 3 scenes | `eudi-wallet-readiness`, `compliance-profiles-bridging-regulation`, `mip-and-open-badges-education-credentials`, deployment use cases | Proposed flagship |
| P1 | The Infrastructure Economics Migration | `infrastructure-economics-migration` | Commercial case-study piece showing why owning protocol deployments and control planes produces a better cost curve than paying a fee every time a verification happens. | Executive buyer, architectural sponsor, budget owner | Daniel, Sofia | Category Reframe / Operational Proof | Business-case conversion piece | 4 scenes | `business-case-for-credential-portability`, pricing docs, high-throughput gate case, enterprise consolidation case | Proposed flagship |
| P1 | Why Marty Is Ready for Evaluation | `why-marty-is-ready-for-evaluation` | Conversion-oriented proof piece tying together the spec, schemas, conformance tooling, and deployment model so serious buyers can see Marty as real, inspectable, and evaluation-ready. | Evaluation-ready architect or buyer | Daniel, Elena | Artifact and Adoption Proof | Conversion / evaluation piece | 4 scenes | `introducing-mip`, `mip-json-schemas-walkthrough`, `conformance-testing-for-implementers`, `marty-protocol/README.md` | Proposed flagship |

## Tier 2 — Supporting Backlog

These posts deepen the system after the core backlog is in place. They strengthen role-specific paths, fill roadmap gaps, and make the navigation model denser and more useful.

| Priority | Working title | Working slug | Summary | Primary reader | Likely lead persona | Gravity well | Navigation role | Scene shape | Source anchors | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P2 | Privacy Data Minimization | `privacy-data-minimization` | Practical privacy explainer on how to request only the minimum necessary information and why that must be enforced by protocol structure rather than verifier convenience. | Privacy and governance readers | Nora | Constraint Layer | Deep dive | 1 scene | privacy materials, presentation policy sources | Planned roadmap post |
| P2 | Selective Disclosure | `selective-disclosure` | Mechanism-focused piece showing how selective disclosure works and where it fits inside Marty's privacy and presentation-policy model. | Architect, privacy reader, implementer | Nora, Marcus | Constraint Layer | Deep dive | 3 scenes | SD-JWT, ZK, presentation policy sources | Planned roadmap post |
| P2 | Deploying Marty for Airline Boarding | `deploy-airline-boarding` | Operational case study showing how Marty supports high-throughput, offline-sensitive travel verification environments where latency, resilience, and trust-anchor freshness matter. | Operator, travel architect, regulated buyer | Sofia, Aiko | Operational Proof | Use-case proof | 3 scenes | airline deployment guide, offline materials, ICAO context | Planned roadmap post |
| P2 | Deploying Marty for Age Verification | `deploy-age-verification` | Use-case piece showing how Marty supports yes/no age checks with minimum disclosure instead of over-collecting identity data. | Privacy-conscious buyer, retail architect | Nora, Sofia | Operational Proof | Use-case proof | 1 scene | age-verification context, privacy materials | Planned roadmap post |
| P2 | Deploying Marty for Enterprise Access | `deploy-enterprise-access` | Enterprise-focused piece showing how reusable credentials can span badge, network, and application access without fragmenting policy and trust logic. | Enterprise architect, security lead | Sofia, Elena | Operational Proof | Use-case proof | 3 scenes | enterprise deployment context, Cedar/governance materials | Planned roadmap post |
| P2 | Deploying Marty for Membership Credentials | `deploy-membership-credentials` | Broader credential case showing how Marty can support non-government membership or entitlement scenarios with portable trust and policy rules. | Product owner, ecosystem architect | Victor, Nora | Operational Proof | Use-case proof | 1 scene | deployment contexts, trust/policy sources | Planned roadmap post |
| P2 | Deployment Profiles in Practice | `deployment-profiles-in-practice` | Concrete operational walkthrough comparing self-hosted, hosted, and edge/kiosk deployment choices and what actually changes between them. | Operator, platform architect | Sofia | Operational Proof | Deep dive / bridge | 3 scenes | deployment profile sources, pricing docs | Planned roadmap post |
| P2 | Compliance Profiles in Practice | `compliance-profiles-in-practice` | Applied explainer showing how regulatory and standards obligations get translated into configured compliance behavior instead of custom-coded branching logic. | Compliance lead, regulated architect | Elena, Aiko | Constraint Layer | Deep dive | 3 scenes | compliance profile sources, EUDI materials | Planned roadmap post |
| P2 | Offline Verification Guide | `offline-verification-guide` | Runtime-focused guide to trust caches, freshness, revocation trade-offs, and failure handling when verification must continue without constant network access. | Operator, implementer | Sofia | Operational Proof | Deep dive / operator anchor | 3 scenes | offline verification materials, deployment sources | Planned roadmap post |
| P2 | Implementing OID4VCI with Marty | `impl-oid4vci` | Technical guide showing how OID4VCI issuance maps into Marty's objects and flows without collapsing the architecture into a transport-specific design. | Implementer | Daniel | Artifact and Adoption Proof | Implementation deep dive | 1 scene | issuance flows, protocol docs, schema sources | Planned roadmap post |
| P2 | Implementing OID4VP with Marty | `impl-oid4vp` | Technical guide showing how OID4VP presentation maps into trust, disclosure, and deployment decisions in the Marty model. | Implementer | Daniel | Artifact and Adoption Proof | Implementation deep dive | 1 scene | presentation flows, protocol docs, schema sources | Planned roadmap post |

## Persona Backlog Views

This backlog can also be read as a **persona-organized planning surface** so the editorial bench can see which voices own which parts of the next wave.

| Persona | Primary backlog view | Why this queue fits |
| --- | --- | --- |
| **Daniel** | `Why Identity Needs a Protocol`, `The Five Primitives in One Picture`, `The Infrastructure Economics Migration`, `Why Marty Is Ready for Evaluation`, `impl-oid4vci`, `impl-oid4vp` | Daniel owns category reframe, model clarity, and evaluation handoff. |
| **Aiko** | `Why Identity Needs a Protocol`, `One Protocol, Many Ecosystems`, `deploy-airline-boarding`, `compliance-profiles-in-practice` | Aiko grounds the system in standards pressure, ecosystem legitimacy, and regulated adoption timing. |
| **Nora** | `Minimum Disclosure Is a Policy Problem`, `privacy-data-minimization`, `selective-disclosure`, `deploy-age-verification`, `deploy-membership-credentials` | Nora keeps privacy boundaries visible and concrete across both flagship and supporting posts. |
| **Sofia** | `Same Trust Model, Different Runtime`, `The Infrastructure Economics Migration`, `deploy-airline-boarding`, `deploy-enterprise-access`, `deployment-profiles-in-practice`, `offline-verification-guide` | Sofia owns runtime reality, deployment trade-offs, and operator confidence. |
| **Elena** | `Why Marty Is Ready for Evaluation`, `compliance-profiles-in-practice`, `deploy-enterprise-access` | Elena owns governance credibility, policy surfaces, and evaluation seriousness. |
| **Victor** | `One Protocol, Many Ecosystems` (support), `deploy-membership-credentials` | Victor is strongest when the story expands beyond one issuer or one regulated market. |
| **Marcus** | `selective-disclosure` (support) | Marcus sharpens the mechanism and assurance layer when a privacy post needs harder technical scrutiny. |

Posts can appear under more than one persona, but each proposed post should still have one default lead voice.

## Proposed Scene Outlines

### Core backlog scene outlines

#### Why Identity Needs a Protocol *(3 scenes)*
1. **Category error** — explain how identity got trapped in platform and per-check API framing.
2. **Economic pain** — show the re-verification tax, lock-in, and why success makes the old model more expensive.
3. **Protocol alternative** — introduce Marty as reusable infrastructure and hand the reader to the Five Primitives map.

#### The Five Primitives in One Picture *(4 scenes)*
1. **Why readers need a map** — show why identity feels fragmented without a stable system picture.
2. **Five recurring questions, five primitives** — map trust, issuance, disclosure, deployment, and orchestration to Marty objects.
3. **How the objects move together** — show how Flows make the primitives work as a system rather than a glossary.
4. **Navigation contract** — teach readers how later posts will zoom into one part of the map while marking “You are here.”

#### Minimum Disclosure Is a Policy Problem *(3 scenes)*
1. **Overcollection as the default failure** — show how routine verification asks for more than the decision requires.
2. **Policy as the boundary** — explain how claims, predicates, and proofs belong in Presentation Policies.
3. **Operational privacy** — connect freshness, revocation, and auditability to privacy-by-design behavior.

#### Same Trust Model, Different Runtime *(3 scenes)*
1. **Runtime pressure changes everything** — contrast cloud assumptions with device, lane, and offline reality.
2. **Deployment Profile as isolating layer** — show how Marty preserves trust logic while packaging environment-specific differences.
3. **Operational and economic payoff** — explain why this matters for edge deployments, operator confidence, and infrastructure pricing.

#### One Protocol, Many Ecosystems *(3 scenes)*
1. **Why ecosystems fragment** — explain how different standards clusters carry different trust assumptions.
2. **How Marty absorbs variation** — show how Compliance Profiles and primitives normalize cross-ecosystem differences.
3. **Breadth proof** — use travel, retail, enterprise, and education as evidence that one model can stretch across contexts.

#### The Infrastructure Economics Migration *(4 scenes)*
1. **Per-check pricing as a growth penalty** — show how the old IDV model punishes success.
2. **Owning deployments changes the curve** — explain the Marty alternative in infrastructure terms.
3. **Case study proof** — compare the high-throughput physical gate and the multi-vendor enterprise estate.
4. **Buying implication** — land the shift from metered verification to owned protocol infrastructure.

#### Why Marty Is Ready for Evaluation *(4 scenes)*
1. **Why skeptical teams hesitate** — frame the credibility gap any new protocol must cross.
2. **What already exists** — summarize spec, schemas, primitives, and governance surfaces.
3. **Proof of seriousness** — use conformance and deployment packaging to prove implementation readiness.
4. **Evaluation handoff** — tell the reader exactly which artifacts to inspect next.

### Supporting backlog scene outlines

- **Privacy Data Minimization** *(1 scene)* — one bounded proof note built around a single verifier request that should ask for less, showing how Marty turns that boundary into policy instead of etiquette.
- **Selective Disclosure** *(3 scenes)* — scene 1: the disclosure problem; scene 2: mechanism choices such as SD-JWT, predicates, and proofs; scene 3: policy and deployment implications.
- **Deploying Marty for Airline Boarding** *(3 scenes)* — scene 1: field-environment pressure; scene 2: trust and offline configuration; scene 3: throughput and operational win.
- **Deploying Marty for Age Verification** *(1 scene)* — one retail yes/no decision showing how credential, policy, and proof combine without overcollection.
- **Deploying Marty for Enterprise Access** *(3 scenes)* — scene 1: fragmented enterprise surfaces; scene 2: one credential / many checks architecture; scene 3: governance and operational payoff.
- **Deploying Marty for Membership Credentials** *(1 scene)* — one bounded non-government ecosystem example proving trust and policy portability outside passports and state ID.
- **Deployment Profiles in Practice** *(3 scenes)* — scene 1: what changes across self-hosted, hosted, and edge; scene 2: what stays stable in trust logic; scene 3: how to choose.
- **Compliance Profiles in Practice** *(3 scenes)* — scene 1: regulatory fragmentation; scene 2: the compliance-profile translation layer; scene 3: the operational benefit of configuration over code.
- **Offline Verification Guide** *(3 scenes)* — scene 1: cache and trust-anchor setup; scene 2: revocation and freshness trade-offs; scene 3: failure-mode policy and operator decisions.
- **Implementing OID4VCI with Marty** *(1 scene)* — one bounded issuance walkthrough showing where transport ends and Marty objects begin.
- **Implementing OID4VP with Marty** *(1 scene)* — one bounded presentation walkthrough showing where trust, disclosure, and deployment choices attach to the protocol.

## The Five Primitives Navigation Model

The backlog should support a **navigation system**, not just a list of future articles.

### Required navigation roles

| Role | What it does | Which backlog item currently plays it |
| --- | --- | --- |
| **Entry point** | Reframes the category and gives new readers a reason to continue | `Why Identity Needs a Protocol` |
| **Navigation anchor** | Gives readers the full-system map and a recurring visual reference | `The Five Primitives in One Picture` |
| **Constraint deep dive** | Explains why privacy, governance, and trust are structural rather than optional | `Minimum Disclosure Is a Policy Problem` |
| **Deployment bridge** | Connects the model to real runtime environments | `Same Trust Model, Different Runtime` |
| **Breadth proof** | Shows that the model spans multiple standards and sectors | `One Protocol, Many Ecosystems` |
| **Business-case conversion** | Explains why infrastructure economics beats per-check pricing | `The Infrastructure Economics Migration` |
| **Evaluation handoff** | Sends serious readers into specs, schemas, and deployment review | `Why Marty Is Ready for Evaluation` |

### Navigation rule for future drafts

Every deep-dive post should be able to answer:

1. Where am I on the Five Primitives map?
2. Which primitive or tension is active here?
3. Which adjacent post is the most natural next step?
4. What proof surface should the reader inspect after this?

## Recommended sequencing

This is **not** a mandatory queue, but it is the strongest current order for building a coherent publication surface:

1. `Why Identity Needs a Protocol`
2. `The Five Primitives in One Picture`
3. `Minimum Disclosure Is a Policy Problem`
4. `Same Trust Model, Different Runtime`
5. `One Protocol, Many Ecosystems`
6. `The Infrastructure Economics Migration`
7. `Why Marty Is Ready for Evaluation`

That sequence preserves the deepest motion of the publication:

`category reframe -> model -> constraint -> deployment -> breadth -> economics -> evaluation`

## Backlog decision rules

A proposed post should rise in priority if it does at least two of the following:

- closes a visible gap in a major reader path
- gives the Five Primitives map more navigational value
- strengthens the infrastructure-vs-platform business case
- creates a cleaner handoff into spec, schemas, or deployment evaluation
- turns a weakly implied topic into a repeatable, reusable editorial asset

## Related

- `cap-narrative-profile.md` — the Phase 6 system-level synthesis this backlog complements
- `publication-scene-cards.md` — the scene-level drafting cards derived from this backlog and the CAP profile
- `publication-post-packets.md` — the draft-ready packet layer for each proposed post
- `publication-evidence-packets.md` — the central collection space for evidence blocking draft progress
- `../04-plot-and-structure/post-sequence.md` — where pathing logic first appears
- `../05-drafting/priority-draft-briefs.md` — the draft-packet source for the highest-priority items
- `../00-start-here/publishing-strategy.md` — navigation and linking rules this backlog should reinforce

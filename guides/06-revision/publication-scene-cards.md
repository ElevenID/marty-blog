# Publication Scene Cards

Phase: 06 - Revision  
Purpose: Translate the proposed Marty publication backlog into CAP-aligned scene cards that can drive drafting later without pre-writing the article prose.  
Time to Complete: 45–70 minutes

<!-- guide:publication_scene_cards -->

## Why This Matters

The backlog tells us **which posts** should exist.
The CAP Narrative Profile tells us **what kinds of narrative information** each piece should preserve.

What drafting still needs is a scene-level handoff artifact.

These scene cards bridge that gap.
They let a future writer or drafting agent see, for each planned post:

- which CAP function the scene performs
- which reader-state shift it supports
- which narrator should carry it
- which entities, tensions, and settings are active
- which proof surfaces the scene should rely on
- which adjacent post or artifact the scene should hand toward

This file intentionally excludes the actual post prose.
It is a planning surface, not a draft.

## Before You Begin

Prerequisites:

- `cap-narrative-profile.md`
- `publication-backlog-table.md`
- `../05-drafting/priority-draft-briefs.md`
- `../04-plot-and-structure/series-arc.md`

These cards follow the scene-shape conventions already aligned across Phases 4–6:

- **3-scene explainer**
- **4-scene bridge / evaluation post**
- **1-scene proof note**

## How To Use These Cards

1. Pick the post card that matches the topic being drafted.
2. Use the post-level metadata to preserve the right gravity well, reader, narrator, and navigation role.
3. Use the scene cards to structure the draft.
4. Write prose only after the CAP role, proof surface, and transition logic are clear.

## Field Guide

Each scene card contains the CAP-style information most useful for drafting:

- **CAP role** — setup, trigger, complication, crisis, or resolution function inside the post
- **Event type** — diagnosis, comparison, reframe, deep dive, standards mapping, deployment pattern, implementation walkthrough, or synthesis
- **Reader-state contribution** — which part of the Marty reader transformation this scene advances
- **Focal entities** — which CAP entities are most active in the scene
- **Setting** — the dominant CAP setting domain
- **Stakes** — economic, operational, privacy, regulatory, security, or interoperability pressure
- **Active primitives / abstractions** — which Marty objects are in play
- **Proof surfaces** — which artifacts or prior posts should support the scene
- **Handoff** — where the scene should send the reader next

---

## Core backlog post cards

### Post Card — Why Identity Needs a Protocol

- **Slug:** `why-identity-needs-a-protocol`
- **CAP unit alignment:** `category_reframe`
- **Gravity well:** Category Reframe
- **Primary reader:** sponsor, architect
- **Lead narrator:** Daniel (support from Aiko)
- **Navigation role:** entry point
- **Post-level reader shift:** `confused -> oriented`
- **Dominant tensions:** platform vs protocol; portability vs lock-in; infrastructure economics vs metered verification
- **Proof surfaces:** `centralized-vs-verifiable`, `business-case-for-credential-portability`, `foundations-identity`
- **Default handoff:** `five-primitives-in-one-picture`

#### Scene Card 1 — Category error
- **CAP role:** setup
- **Event type:** diagnosis
- **Reader-state contribution:** establishes why the reader is still `confused`
- **Focal entities:** `protagonist_reader`, `antagonist_system`
- **Setting:** `public_social_market`
- **Stakes:** economic, operational
- **Active primitives / abstractions:** none foregrounded yet; `five_mip_primitives` held in reserve
- **Scene summary:** Show how identity has been framed as a platform or API category, making fragmentation look normal.
- **Proof surfaces:** category framing from `foundations-identity`, contrast from `centralized-vs-verifiable`
- **Handoff:** move from category problem into cost and duplication pressure

#### Scene Card 2 — The re-verification tax
- **CAP role:** complication
- **Event type:** comparison
- **Reader-state contribution:** pushes the reader toward `oriented` by naming the economic failure clearly
- **Focal entities:** `protagonist_reader`, `antagonist_system`, `skeptic`
- **Setting:** `threshold_decision_point`
- **Stakes:** economic, operational
- **Active primitives / abstractions:** implied absence of reusable protocol objects
- **Scene summary:** Explain why repeated verification, vendor lock-in, and custom integrations are structural outcomes of the platform model.
- **Proof surfaces:** `business-case-for-credential-portability`, pricing logic contrasts
- **Handoff:** prepare the reader for a model-level alternative rather than a better vendor pitch

#### Scene Card 3 — Protocol alternative
- **CAP role:** resolution
- **Event type:** reframe
- **Reader-state contribution:** completes `confused -> oriented`
- **Focal entities:** `protagonist_reader`, `ally_tooling`, `five_mip_primitives`
- **Setting:** `threshold_decision_point`
- **Stakes:** economic, interoperability
- **Active primitives / abstractions:** `five_mip_primitives`
- **Scene summary:** Introduce the idea that identity becomes manageable when trust, disclosure, deployment, and lifecycle logic become protocol objects rather than vendor code.
- **Proof surfaces:** Marty thesis materials; minimal reference to protocol model without full deep dive
- **Handoff:** direct to `five-primitives-in-one-picture`

### Post Card — The Five Primitives in One Picture

- **Slug:** `five-primitives-in-one-picture`
- **CAP unit alignment:** `five_primitive_model`
- **Gravity well:** Model Reveal
- **Primary reader:** architect, implementer, sponsor
- **Lead narrator:** Daniel
- **Navigation role:** navigation anchor / hub
- **Post-level reader shift:** `oriented -> structured`
- **Dominant tensions:** code vs configuration; disconnected standards vs stable objects
- **Proof surfaces:** primitive guides, `flows-orchestrating-identity-lifecycle`, `marty-protocol/README.md`
- **Default handoff:** primitive-specific deep dives chosen by reader interest

#### Scene Card 1 — Why readers need a map
- **CAP role:** setup
- **Event type:** diagnosis
- **Reader-state contribution:** strengthens `oriented`
- **Focal entities:** `protagonist_reader`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** operational, interoperability
- **Active primitives / abstractions:** `five_mip_primitives` as system frame
- **Scene summary:** Explain why identity feels fragmented when readers only see standards acronyms, wallets, and point tools instead of one stable system map.
- **Proof surfaces:** guide hub structure, protocol README summary
- **Handoff:** move into the recurring questions every credential system must answer

#### Scene Card 2 — Five recurring questions, five primitives
- **CAP role:** trigger
- **Event type:** reframe
- **Reader-state contribution:** pushes `oriented -> structured`
- **Focal entities:** `five_mip_primitives`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** operational, regulatory, privacy
- **Active primitives / abstractions:** `Trust Profile`, `Credential Template`, `Presentation Policy`, `Deployment Profile`, `Flow`
- **Scene summary:** Map each core system question to the Marty primitive that answers it.
- **Proof surfaces:** primitive guide chapters, protocol README
- **Handoff:** move from static object list into system motion

#### Scene Card 3 — Flows make the objects move
- **CAP role:** complication
- **Event type:** deep_dive
- **Reader-state contribution:** deepens `structured`
- **Focal entities:** `five_mip_primitives`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** operational
- **Active primitives / abstractions:** especially `Flow` plus all supporting objects
- **Scene summary:** Show how the primitives combine inside issuance, presentation, and verification journeys so the map feels alive rather than diagrammatic.
- **Proof surfaces:** `flows-orchestrating-identity-lifecycle`, issuance and presentation guide material
- **Handoff:** move from whole-system map into navigational use

#### Scene Card 4 — The navigation contract
- **CAP role:** resolution
- **Event type:** synthesis
- **Reader-state contribution:** secures `oriented -> structured`
- **Focal entities:** `guide_hub`, `protagonist_reader`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** clarity, continuity
- **Active primitives / abstractions:** `five_mip_primitives`
- **Scene summary:** Establish that future deep dives will show a “You are here” position on this map so readers can enter anywhere without losing orientation.
- **Proof surfaces:** publishing strategy navigation model
- **Handoff:** branch toward privacy, deployment, trust, or implementation posts

### Post Card — Minimum Disclosure Is a Policy Problem

- **Slug:** `minimum-disclosure-is-a-policy-problem`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** Constraint Layer
- **Primary reader:** privacy, compliance, skeptical technical buyer
- **Lead narrator:** Nora
- **Navigation role:** constraint deep dive
- **Post-level reader shift:** `structured -> serious`
- **Dominant tensions:** privacy vs overcollection; policy vs buried code
- **Proof surfaces:** `presentation-policies-minimum-disclosure`, `privacy-data-minimization`, `zero-knowledge-predicates-identity`, `sd-jwt-selective-disclosure-deep-dive`
- **Default handoff:** `deploy-age-verification` or `selective-disclosure`

#### Scene Card 1 — Overcollection is the default failure
- **CAP role:** setup
- **Event type:** diagnosis
- **Reader-state contribution:** tests the reader’s current `structured` model against privacy reality
- **Focal entities:** `protagonist_reader`, `antagonist_system`, `nora_patel`
- **Setting:** `institutional_environment`
- **Stakes:** privacy, regulatory
- **Active primitives / abstractions:** `Presentation Policy`
- **Scene summary:** Show how ordinary verification systems ask for too much because disclosure requirements are usually implicit and uncontrolled.
- **Proof surfaces:** privacy materials, regulatory framing, existing presentation policy post
- **Handoff:** move from failure mode into the policy layer

#### Scene Card 2 — Policy is the disclosure boundary
- **CAP role:** complication
- **Event type:** deep_dive
- **Reader-state contribution:** strengthens `serious`
- **Focal entities:** `Presentation Policy`, `skeptic`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** privacy, security
- **Active primitives / abstractions:** `Presentation Policy`, predicates, proofs, selective disclosure mechanisms
- **Scene summary:** Explain how claims, predicates, and proof types belong in explicit policy rather than application code or verifier habit.
- **Proof surfaces:** `presentation-policies-minimum-disclosure`, SD-JWT and ZK sources
- **Handoff:** move from mechanism into real operational consequences

#### Scene Card 3 — Operational privacy still has runtime consequences
- **CAP role:** resolution
- **Event type:** synthesis
- **Reader-state contribution:** completes `structured -> serious`
- **Focal entities:** `Presentation Policy`, `ally_peer`, `skeptic`
- **Setting:** `field_operation_runtime`
- **Stakes:** privacy, operational, regulatory
- **Active primitives / abstractions:** `Presentation Policy`, freshness and revocation rules
- **Scene summary:** Show that freshness, revocation, and auditability do not weaken the privacy argument; they define how privacy works in the real world.
- **Proof surfaces:** existing privacy flagship posts and deployment examples
- **Handoff:** direct to privacy-sensitive deployment examples or selective-disclosure mechanism post

### Post Card — Same Trust Model, Different Runtime

- **Slug:** `same-trust-model-different-runtime`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** Operational Proof
- **Primary reader:** operator, architect, commercial evaluator
- **Lead narrator:** Sofia
- **Navigation role:** deployment bridge
- **Post-level reader shift:** `serious -> confident`
- **Dominant tensions:** online freshness vs offline resilience; deployment variation vs model stability
- **Proof surfaces:** `deployment-profiles-from-design-to-production`, `offline-verification-guide`, `offline-verification-design-patterns`, pricing docs
- **Default handoff:** `deployment-profiles-in-practice` or `deploy-airline-boarding`

#### Scene Card 1 — Runtime pressure changes the architecture conversation
- **CAP role:** setup
- **Event type:** diagnosis
- **Reader-state contribution:** moves the reader from abstract seriousness into deployment awareness
- **Focal entities:** `sofia_rahman`, `protagonist_reader`, `field_operation_runtime`
- **Setting:** `field_operation_runtime`
- **Stakes:** operational, security
- **Active primitives / abstractions:** `Deployment Profile`
- **Scene summary:** Show why cloud assumptions collapse in kiosks, gates, lanes, and disconnected environments.
- **Proof surfaces:** offline design patterns, real deployment contexts
- **Handoff:** move from pressure into the isolating abstraction

#### Scene Card 2 — Deployment Profiles isolate what should vary
- **CAP role:** complication
- **Event type:** deployment_pattern
- **Reader-state contribution:** pushes `serious -> confident`
- **Focal entities:** `Deployment Profile`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** operational, interoperability
- **Active primitives / abstractions:** `Deployment Profile`, `Trust Profile`, revocation and cache rules
- **Scene summary:** Explain how the same trust logic can survive across hosted, self-hosted, and edge environments because the environment-specific differences are made explicit in Deployment Profiles.
- **Proof surfaces:** deployment profile sources, offline guide materials
- **Handoff:** move into business and operator payoff

#### Scene Card 3 — Operational and economic payoff
- **CAP role:** resolution
- **Event type:** synthesis
- **Reader-state contribution:** completes `serious -> confident`
- **Focal entities:** `deployment_packages`, `pricing_model`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** operational, economic
- **Active primitives / abstractions:** `Deployment Profile`, deployment packages
- **Scene summary:** Land why this separation improves operator confidence and supports pricing by deployments rather than by verification events.
- **Proof surfaces:** pricing and packaging docs, deployment package definitions
- **Handoff:** direct to deployment package comparison or infrastructure economics post

### Post Card — One Protocol, Many Ecosystems

- **Slug:** `one-protocol-many-ecosystems`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** Operational Proof
- **Primary reader:** standards-minded architect, regulated buyer, skeptical sponsor
- **Lead narrator:** Aiko (support from Daniel)
- **Navigation role:** breadth proof
- **Post-level reader shift:** `structured -> confident`
- **Dominant tensions:** standard fidelity vs implementation sanity; portability vs lock-in
- **Proof surfaces:** `eudi-wallet-readiness`, `compliance-profiles-bridging-regulation`, `mip-and-open-badges-education-credentials`, deployment use-case material
- **Default handoff:** `deploy-airline-boarding`, `deploy-age-verification`, or `why-marty-is-ready-for-evaluation`

#### Scene Card 1 — Why ecosystems fragment
- **CAP role:** setup
- **Event type:** standards_mapping
- **Reader-state contribution:** tests `structured` understanding against standards reality
- **Focal entities:** `aiko_tanaka`, `standards_cluster`, `skeptic`
- **Setting:** `public_social_market`
- **Stakes:** regulatory, interoperability
- **Active primitives / abstractions:** `Compliance Profile`, `Trust Profile`
- **Scene summary:** Explain why standards clusters feel incompatible because each arrives with different trust and compliance assumptions.
- **Proof surfaces:** EUDI, AAMVA, Open Badges, ICAO context
- **Handoff:** move into the Marty abstraction that absorbs variation

#### Scene Card 2 — Marty absorbs variation without changing the model
- **CAP role:** complication
- **Event type:** reframe
- **Reader-state contribution:** pushes toward `confident`
- **Focal entities:** `standards_cluster`, `five_mip_primitives`, `Compliance Profile`
- **Setting:** `workbench_design_review`
- **Stakes:** interoperability, operational
- **Active primitives / abstractions:** `Compliance Profile`, `Trust Profile`, `Credential Template`, `Presentation Policy`
- **Scene summary:** Show how the same object model can absorb regulatory and standards diversity without forcing a separate architecture for each ecosystem.
- **Proof surfaces:** compliance profile materials, protocol README, guide map
- **Handoff:** move into concrete ecosystem proof

#### Scene Card 3 — Breadth is the proof
- **CAP role:** resolution
- **Event type:** synthesis
- **Reader-state contribution:** completes `structured -> confident`
- **Focal entities:** `ecosystem_network`, `protagonist_reader`, `ally_tooling`
- **Setting:** `ecosystem_network`
- **Stakes:** interoperability, economic, regulatory
- **Active primitives / abstractions:** all five primitives, with `Compliance Profile` as bridge
- **Scene summary:** Walk through travel, retail, enterprise, and education as proof that one protocol model can stretch across different sectors.
- **Proof surfaces:** use-case and deployment context materials
- **Handoff:** direct to use-case deployment posts or evaluation materials

### Post Card — The Infrastructure Economics Migration

- **Slug:** `infrastructure-economics-migration`
- **CAP unit alignment:** `category_reframe` + `operational_proof`
- **Gravity well:** Category Reframe / Operational Proof
- **Primary reader:** executive buyer, architectural sponsor, budget owner
- **Lead narrator:** Daniel (support from Sofia)
- **Navigation role:** business-case conversion piece
- **Post-level reader shift:** `oriented -> evaluative`
- **Dominant tensions:** infrastructure economics vs metered verification extraction; ownership vs recurring dependency
- **Proof surfaces:** `business-case-for-credential-portability`, pricing docs, high-throughput gate case, enterprise consolidation case
- **Default handoff:** pricing model / deployment package evaluation

#### Scene Card 1 — Per-check pricing punishes growth
- **CAP role:** setup
- **Event type:** diagnosis
- **Reader-state contribution:** keeps the buyer in `oriented` but makes the old model economically untenable
- **Focal entities:** `protagonist_reader`, `antagonist_system`, `pricing_model`
- **Setting:** `threshold_decision_point`
- **Stakes:** economic
- **Active primitives / abstractions:** none foregrounded; focus is on absence of reusable infrastructure
- **Scene summary:** Show how per-check identity pricing turns adoption into a cost escalator instead of a scale advantage.
- **Proof surfaces:** business-case materials, portability economics framing
- **Handoff:** move to the owned-infrastructure alternative

#### Scene Card 2 — Owning deployments changes the curve
- **CAP role:** trigger
- **Event type:** reframe
- **Reader-state contribution:** pushes `oriented -> interested`
- **Focal entities:** `deployment_packages`, `pricing_model`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** economic, operational
- **Active primitives / abstractions:** `Deployment Profile`, deployment packages, control plane access
- **Scene summary:** Explain the Marty business model as infrastructure ownership: pay for deployments, verifier runtimes, and governance access, not for every verification event.
- **Proof surfaces:** pricing-and-packaging docs, offering matrix
- **Handoff:** move into concrete cases

#### Scene Card 3 — Case study proof
- **CAP role:** complication
- **Event type:** comparison
- **Reader-state contribution:** pushes toward `evaluative`
- **Focal entities:** `field_operation_runtime`, `institutional_environment`, `skeptic`
- **Setting:** `field_operation_runtime` and `institutional_environment`
- **Stakes:** economic, operational
- **Active primitives / abstractions:** `Deployment Profile`, `Presentation Policy`, deployment packages
- **Scene summary:** Compare the high-throughput gate and multi-vendor enterprise estate to show how verification becomes an internal protocol event instead of a metered API charge.
- **Proof surfaces:** Phase 03 case studies, pricing docs, deployment contexts
- **Handoff:** move from case proof into buying implication

#### Scene Card 4 — The buying implication
- **CAP role:** resolution
- **Event type:** synthesis
- **Reader-state contribution:** completes `oriented -> evaluative`
- **Focal entities:** `protagonist_reader`, `pricing_model`, `ally_tooling`
- **Setting:** `threshold_decision_point`
- **Stakes:** economic, strategic
- **Active primitives / abstractions:** `Deployment Profile`, control plane tiers
- **Scene summary:** Land the conclusion that identity should be bought like infrastructure and governed like infrastructure, not rented forever as a lookup service.
- **Proof surfaces:** pricing model, deployment package story, business-case framing
- **Handoff:** direct to deployment package evaluation or `why-marty-is-ready-for-evaluation`

### Post Card — Why Marty Is Ready for Evaluation

- **Slug:** `why-marty-is-ready-for-evaluation`
- **CAP unit alignment:** `artifact_adoption_proof`
- **Gravity well:** Artifact and Adoption Proof
- **Primary reader:** evaluation-ready architect or buyer
- **Lead narrator:** Daniel (support from Elena)
- **Navigation role:** conversion / evaluation piece
- **Post-level reader shift:** `confident -> design_ready`
- **Dominant tensions:** artifact proof vs elegant theory; evaluation readiness vs vague interest
- **Proof surfaces:** `introducing-mip`, `mip-json-schemas-walkthrough`, `conformance-testing-for-implementers`, `marty-protocol/README.md`
- **Default handoff:** spec, schemas, deployment comparison, control-plane evaluation

#### Scene Card 1 — Why skeptical teams hesitate
- **CAP role:** setup
- **Event type:** diagnosis
- **Reader-state contribution:** begins `confident -> design_ready` by naming the credibility bar
- **Focal entities:** `skeptic`, `protagonist_reader`, `ally_tooling`
- **Setting:** `threshold_decision_point`
- **Stakes:** strategic, security
- **Active primitives / abstractions:** `mip_specification`, `schema_conformance_suite`
- **Scene summary:** Acknowledge that a new protocol has to prove it is real, inspectable, and not just another conceptual frame.
- **Proof surfaces:** launch post framing, evaluation objections from audience docs
- **Handoff:** move from skepticism into artifact inventory

#### Scene Card 2 — What already exists
- **CAP role:** trigger
- **Event type:** implementation_walkthrough
- **Reader-state contribution:** pushes toward `design_ready`
- **Focal entities:** `mip_specification`, `five_mip_primitives`, `schema_conformance_suite`
- **Setting:** `workbench_design_review`
- **Stakes:** operational, strategic
- **Active primitives / abstractions:** spec, schemas, governance surfaces
- **Scene summary:** Summarize the current protocol surface: primitives, schemas, compliance mappings, Cedar policy artifacts, and implementation surfaces.
- **Proof surfaces:** `introducing-mip`, README, schema walkthrough
- **Handoff:** move into proof of seriousness

#### Scene Card 3 — Proof of seriousness
- **CAP role:** complication
- **Event type:** synthesis
- **Reader-state contribution:** reinforces `design_ready`
- **Focal entities:** `schema_conformance_suite`, `deployment_packages`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** operational, security, governance
- **Active primitives / abstractions:** conformance suite, deployment packages, pricing model
- **Scene summary:** Use conformance, packaging, and governance surfaces to prove that Marty is implementation-facing and buyer-facing, not just educational.
- **Proof surfaces:** conformance post, pricing docs, packaging materials
- **Handoff:** move into explicit evaluation next steps

#### Scene Card 4 — Evaluation handoff
- **CAP role:** resolution
- **Event type:** synthesis
- **Reader-state contribution:** completes `confident -> design_ready`
- **Focal entities:** `protagonist_reader`, `ally_tooling`
- **Setting:** `threshold_decision_point`
- **Stakes:** strategic, operational
- **Active primitives / abstractions:** spec, schemas, deployment packages
- **Scene summary:** Tell the reader exactly what to inspect next: spec, schemas, conformance path, and deployment/control-plane choices.
- **Proof surfaces:** evaluation materials, implementation pathing
- **Handoff:** direct to implementation and deployment review assets

---

## Supporting backlog post cards

### Post Card — Privacy Data Minimization

- **Slug:** `privacy-data-minimization`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** Constraint Layer
- **Primary reader:** privacy and governance readers
- **Lead narrator:** Nora
- **Navigation role:** proof note / supporting deep dive
- **Post-level reader shift:** `structured -> serious`
- **Dominant tensions:** privacy vs overcollection
- **Proof surfaces:** privacy materials, presentation policy sources
- **Default handoff:** `minimum-disclosure-is-a-policy-problem`

#### Scene Card 1 — One verifier request, reduced correctly
- **CAP role:** complication
- **Event type:** comparison
- **Reader-state contribution:** reinforces `serious`
- **Focal entities:** `Presentation Policy`, `nora_patel`, `skeptic`
- **Setting:** `institutional_environment`
- **Stakes:** privacy, regulatory
- **Active primitives / abstractions:** `Presentation Policy`
- **Scene summary:** Use one tightly bounded verification example to show how Marty converts “please ask for less” into a formal disclosure boundary.
- **Proof surfaces:** privacy materials and existing presentation-policy sources
- **Handoff:** direct to `minimum-disclosure-is-a-policy-problem` or `deploy-age-verification`

### Post Card — Selective Disclosure

- **Slug:** `selective-disclosure`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** Constraint Layer
- **Primary reader:** architect, privacy reader, implementer
- **Lead narrator:** Nora (support from Marcus)
- **Navigation role:** mechanism deep dive
- **Post-level reader shift:** `structured -> serious`
- **Dominant tensions:** privacy vs disclosure burden; mechanism vs policy intent
- **Proof surfaces:** SD-JWT, ZK, presentation policy sources
- **Default handoff:** `minimum-disclosure-is-a-policy-problem` or implementation/privacy posts

#### Scene Card 1 — The disclosure problem
- **CAP role:** setup
- **Event type:** diagnosis
- **Reader-state contribution:** re-grounds `structured` readers in the concrete privacy problem
- **Focal entities:** `protagonist_reader`, `Presentation Policy`, `skeptic`
- **Setting:** `institutional_environment`
- **Stakes:** privacy, regulatory
- **Active primitives / abstractions:** `Presentation Policy`
- **Scene summary:** Clarify the difference between asking for a full credential and asking only for what the decision requires.
- **Proof surfaces:** privacy and disclosure source material
- **Handoff:** move into mechanism choices

#### Scene Card 2 — Mechanism choices
- **CAP role:** complication
- **Event type:** deep_dive
- **Reader-state contribution:** deepens `serious`
- **Focal entities:** `nora_patel`, `marcus_vale`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** privacy, security
- **Active primitives / abstractions:** selective disclosure mechanisms, predicates, proofs
- **Scene summary:** Compare claims, predicates, SD-JWT, and proof options without losing sight of the policy objective.
- **Proof surfaces:** SD-JWT and ZK materials
- **Handoff:** move from mechanism into architecture consequence

#### Scene Card 3 — Policy and deployment implications
- **CAP role:** resolution
- **Event type:** synthesis
- **Reader-state contribution:** secures `serious`
- **Focal entities:** `Presentation Policy`, `Deployment Profile`
- **Setting:** `field_operation_runtime`
- **Stakes:** privacy, operational
- **Active primitives / abstractions:** `Presentation Policy`, `Deployment Profile`
- **Scene summary:** Explain how selective disclosure choices affect runtime behavior, auditability, and deployment decisions.
- **Proof surfaces:** privacy plus deployment sources
- **Handoff:** direct to age verification or deployment-sensitive privacy examples

### Post Card — Deploying Marty for Airline Boarding

- **Slug:** `deploy-airline-boarding`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** Operational Proof
- **Primary reader:** operator, travel architect, regulated buyer
- **Lead narrator:** Sofia (support from Aiko)
- **Navigation role:** use-case proof
- **Post-level reader shift:** `serious -> confident`
- **Dominant tensions:** online freshness vs offline resilience; throughput vs assurance
- **Proof surfaces:** airline deployment guide, offline materials, ICAO context
- **Default handoff:** `offline-verification-guide` or `same-trust-model-different-runtime`

#### Scene Card 1 — Field-environment pressure
- **CAP role:** setup
- **Event type:** diagnosis
- **Reader-state contribution:** grounds `serious` readers in runtime reality
- **Focal entities:** `field_operation_runtime`, `protagonist_reader`, `aiko_tanaka`
- **Setting:** `field_operation_runtime`
- **Stakes:** operational, regulatory, security
- **Active primitives / abstractions:** `Deployment Profile`, `Trust Profile`
- **Scene summary:** Show why gates, queues, and travel assurance requirements force the architecture to confront latency, offline behavior, and trust freshness.
- **Proof surfaces:** ICAO materials, travel deployment contexts
- **Handoff:** move into trust and offline configuration

#### Scene Card 2 — Trust and offline configuration
- **CAP role:** complication
- **Event type:** deployment_pattern
- **Reader-state contribution:** pushes toward `confident`
- **Focal entities:** `Trust Profile`, `Deployment Profile`, `field_operation_runtime`
- **Setting:** `field_operation_runtime`
- **Stakes:** security, operational
- **Active primitives / abstractions:** `Trust Profile`, `Deployment Profile`, cache rules, revocation windows
- **Scene summary:** Explain how cached trust anchors, policy windows, and runtime rules are configured for high-throughput boarding contexts.
- **Proof surfaces:** offline verification sources, deployment profile materials
- **Handoff:** move from configuration into throughput payoff

#### Scene Card 3 — Throughput and operational win
- **CAP role:** resolution
- **Event type:** synthesis
- **Reader-state contribution:** completes `serious -> confident`
- **Focal entities:** `deployment_packages`, `pricing_model`, `ally_peer`
- **Setting:** `field_operation_runtime`
- **Stakes:** operational, economic
- **Active primitives / abstractions:** deployment package, verifier runtime licensing
- **Scene summary:** Land why this use case proves Marty is built for real-world throughput rather than idealized cloud-only verification.
- **Proof surfaces:** deployment and pricing model materials
- **Handoff:** direct to infrastructure economics or deployment package evaluation

### Post Card — Deploying Marty for Age Verification

- **Slug:** `deploy-age-verification`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** Operational Proof
- **Primary reader:** privacy-conscious buyer, retail architect
- **Lead narrator:** Nora (support from Sofia)
- **Navigation role:** use-case proof note
- **Post-level reader shift:** `serious -> confident`
- **Dominant tensions:** privacy vs overcollection
- **Proof surfaces:** age-verification context, privacy materials
- **Default handoff:** `minimum-disclosure-is-a-policy-problem`

#### Scene Card 1 — One yes/no decision, correctly bounded
- **CAP role:** resolution
- **Event type:** deployment_pattern
- **Reader-state contribution:** reinforces `confident`
- **Focal entities:** `Presentation Policy`, `Credential Template`, `nora_patel`
- **Setting:** `institutional_environment`
- **Stakes:** privacy, operational, regulatory
- **Active primitives / abstractions:** `Presentation Policy`, `Credential Template`
- **Scene summary:** Use one concrete retail decision to show how age verification can ask only for the answer it needs instead of the whole identity record.
- **Proof surfaces:** privacy materials, age-verification deployment context
- **Handoff:** direct to selective disclosure or privacy policy deep dive

### Post Card — Deploying Marty for Enterprise Access

- **Slug:** `deploy-enterprise-access`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** Operational Proof
- **Primary reader:** enterprise architect, security lead
- **Lead narrator:** Sofia (support from Elena)
- **Navigation role:** use-case proof
- **Post-level reader shift:** `serious -> confident`
- **Dominant tensions:** governance clarity vs application sprawl; one credential vs many repeated checks
- **Proof surfaces:** enterprise deployment context, Cedar/governance materials
- **Default handoff:** `compliance-profiles-in-practice` or `why-marty-is-ready-for-evaluation`

#### Scene Card 1 — Fragmented enterprise surfaces
- **CAP role:** setup
- **Event type:** diagnosis
- **Reader-state contribution:** grounds enterprise pain in concrete surfaces
- **Focal entities:** `institutional_environment`, `protagonist_reader`, `skeptic`
- **Setting:** `institutional_environment`
- **Stakes:** operational, security
- **Active primitives / abstractions:** `Credential Template`, `Flow`
- **Scene summary:** Show how badges, network access, and internal applications often force repeated identity checks and fragmented logic.
- **Proof surfaces:** enterprise deployment materials
- **Handoff:** move into one-credential / many-checks design

#### Scene Card 2 — One credential, many checks
- **CAP role:** complication
- **Event type:** reframe
- **Reader-state contribution:** pushes toward `confident`
- **Focal entities:** `Credential Template`, `Presentation Policy`, `Flow`
- **Setting:** `workbench_design_review`
- **Stakes:** operational, security
- **Active primitives / abstractions:** `Credential Template`, `Presentation Policy`, `Flow`
- **Scene summary:** Explain how reusable credentials and presentation policies let one enterprise credential support multiple access decisions without duplicating issuance.
- **Proof surfaces:** flow and credential sources
- **Handoff:** move into governance payoff

#### Scene Card 3 — Governance and operational payoff
- **CAP role:** resolution
- **Event type:** synthesis
- **Reader-state contribution:** completes `serious -> confident`
- **Focal entities:** `Policy Set (Cedar)`, `ally_peer`, `institutional_environment`
- **Setting:** `institutional_environment`
- **Stakes:** security, governance, operational
- **Active primitives / abstractions:** `Presentation Policy`, `Policy Set (Cedar)`, deployment packaging
- **Scene summary:** Land how explicit policy and reusable credentials reduce change friction for enterprise access control.
- **Proof surfaces:** Cedar and governance materials
- **Handoff:** direct to governance, compliance, or evaluation posts

### Post Card — Deploying Marty for Membership Credentials

- **Slug:** `deploy-membership-credentials`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** Operational Proof
- **Primary reader:** product owner, ecosystem architect
- **Lead narrator:** Victor (support from Nora)
- **Navigation role:** use-case proof note
- **Post-level reader shift:** `serious -> confident`
- **Dominant tensions:** format vs trust governance; portability outside government ID
- **Proof surfaces:** deployment contexts, trust/policy sources
- **Default handoff:** `one-protocol-many-ecosystems`

#### Scene Card 1 — Trust portability outside government ID
- **CAP role:** resolution
- **Event type:** deployment_pattern
- **Reader-state contribution:** reinforces `confident`
- **Focal entities:** `ecosystem_network`, `Trust Profile`, `Credential Template`
- **Setting:** `ecosystem_network`
- **Stakes:** interoperability, economic
- **Active primitives / abstractions:** `Trust Profile`, `Credential Template`, `Presentation Policy`
- **Scene summary:** Use one bounded membership or entitlement ecosystem to prove that Marty matters beyond passports and official identity documents.
- **Proof surfaces:** Open Badges and broader deployment context materials
- **Handoff:** direct to ecosystem-breadth proof or trust-registry materials

### Post Card — Deployment Profiles in Practice

- **Slug:** `deployment-profiles-in-practice`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** Operational Proof
- **Primary reader:** operator, platform architect
- **Lead narrator:** Sofia
- **Navigation role:** deep dive / bridge
- **Post-level reader shift:** `serious -> confident`
- **Dominant tensions:** hosted convenience vs sovereignty; online vs offline resilience
- **Proof surfaces:** deployment profile sources, pricing docs
- **Default handoff:** deployment package evaluation or use-case deployments

#### Scene Card 1 — What changes across environments
- **CAP role:** setup
- **Event type:** comparison
- **Reader-state contribution:** grounds the reader in real deployment options
- **Focal entities:** `Deployment Profile`, `deployment_packages`
- **Setting:** `threshold_decision_point`
- **Stakes:** operational, economic
- **Active primitives / abstractions:** `Deployment Profile`, deployment packages
- **Scene summary:** Compare self-hosted, hosted, and edge environments in terms of what operational constraints actually vary.
- **Proof surfaces:** deployment and pricing docs
- **Handoff:** move into what remains stable

#### Scene Card 2 — What stays stable in trust logic
- **CAP role:** complication
- **Event type:** reframe
- **Reader-state contribution:** pushes toward `confident`
- **Focal entities:** `Trust Profile`, `Deployment Profile`
- **Setting:** `workbench_design_review`
- **Stakes:** operational, security
- **Active primitives / abstractions:** `Trust Profile`, `Deployment Profile`
- **Scene summary:** Show that environment variation should not force a new trust model for each runtime.
- **Proof surfaces:** deployment and trust profile sources
- **Handoff:** move into choosing criteria

#### Scene Card 3 — How to choose
- **CAP role:** resolution
- **Event type:** synthesis
- **Reader-state contribution:** completes `serious -> confident`
- **Focal entities:** `protagonist_reader`, `deployment_packages`, `pricing_model`
- **Setting:** `threshold_decision_point`
- **Stakes:** economic, operational
- **Active primitives / abstractions:** deployment packages, control plane access
- **Scene summary:** Give the reader a planning lens for choosing among deployment modes based on runtime, governance, and cost.
- **Proof surfaces:** pricing matrix and deployment package materials
- **Handoff:** direct to infrastructure economics or evaluation post

### Post Card — Compliance Profiles in Practice

- **Slug:** `compliance-profiles-in-practice`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** Constraint Layer
- **Primary reader:** compliance lead, regulated architect
- **Lead narrator:** Elena (support from Aiko)
- **Navigation role:** deep dive
- **Post-level reader shift:** `structured -> serious`
- **Dominant tensions:** governance clarity vs application sprawl; configuration vs custom code
- **Proof surfaces:** compliance profile sources, EUDI materials
- **Default handoff:** `one-protocol-many-ecosystems`

#### Scene Card 1 — Regulatory fragmentation
- **CAP role:** setup
- **Event type:** standards_mapping
- **Reader-state contribution:** grounds the reader in compliance pressure
- **Focal entities:** `elena_kovacs`, `aiko_tanaka`, `standards_cluster`
- **Setting:** `institutional_environment`
- **Stakes:** regulatory, operational
- **Active primitives / abstractions:** `Compliance Profile`
- **Scene summary:** Explain why standards and regulatory obligations feel like ever-growing branching logic when teams treat each ecosystem separately.
- **Proof surfaces:** EUDI and standards materials
- **Handoff:** move into the translation layer

#### Scene Card 2 — The compliance-profile translation layer
- **CAP role:** complication
- **Event type:** reframe
- **Reader-state contribution:** pushes toward `serious`
- **Focal entities:** `Compliance Profile`, `Trust Profile`, `Presentation Policy`
- **Setting:** `workbench_design_review`
- **Stakes:** regulatory, governance
- **Active primitives / abstractions:** `Compliance Profile`, `Trust Profile`, `Presentation Policy`
- **Scene summary:** Show how regulations and standards can be translated into explicit profile objects instead of spread through application code.
- **Proof surfaces:** compliance profile materials and protocol sources
- **Handoff:** move into operational benefit

#### Scene Card 3 — Configuration beats code
- **CAP role:** resolution
- **Event type:** synthesis
- **Reader-state contribution:** completes `structured -> serious`
- **Focal entities:** `ally_peer`, `skeptic`, `Compliance Profile`
- **Setting:** `threshold_decision_point`
- **Stakes:** governance, operational
- **Active primitives / abstractions:** `Compliance Profile`, policy artifacts
- **Scene summary:** Land the operational benefit: safer change cycles, clearer governance, and less custom branching code.
- **Proof surfaces:** governance and compliance proof surfaces
- **Handoff:** direct to evaluation or ecosystem-breadth materials

### Post Card — Offline Verification Guide

- **Slug:** `offline-verification-guide`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** Operational Proof
- **Primary reader:** operator, implementer
- **Lead narrator:** Sofia
- **Navigation role:** operator anchor
- **Post-level reader shift:** `serious -> confident`
- **Dominant tensions:** online freshness vs offline resilience
- **Proof surfaces:** offline verification materials, deployment sources
- **Default handoff:** `deploy-airline-boarding` or `same-trust-model-different-runtime`

#### Scene Card 1 — Cache and trust-anchor setup
- **CAP role:** setup
- **Event type:** deployment_pattern
- **Reader-state contribution:** grounds the operator in practical setup conditions
- **Focal entities:** `Deployment Profile`, `Trust Profile`, `field_operation_runtime`
- **Setting:** `field_operation_runtime`
- **Stakes:** operational, security
- **Active primitives / abstractions:** `Deployment Profile`, `Trust Profile`
- **Scene summary:** Explain how offline-capable verifiers get the trust anchors, snapshots, and policy material they need before disconnection.
- **Proof surfaces:** offline design patterns, deployment materials
- **Handoff:** move into revocation and freshness

#### Scene Card 2 — Revocation and freshness trade-offs
- **CAP role:** complication
- **Event type:** deep_dive
- **Reader-state contribution:** pushes toward `confident`
- **Focal entities:** `Trust Profile`, `Deployment Profile`, `skeptic`
- **Setting:** `field_operation_runtime`
- **Stakes:** security, operational
- **Active primitives / abstractions:** revocation windows, cache TTL, freshness rules
- **Scene summary:** Make the hardest offline trade-offs explicit instead of hiding them in implementation detail.
- **Proof surfaces:** offline verification design patterns, trust sources
- **Handoff:** move into operational failure modes

#### Scene Card 3 — Failure-mode policy and operator decisions
- **CAP role:** resolution
- **Event type:** synthesis
- **Reader-state contribution:** completes `serious -> confident`
- **Focal entities:** `ally_peer`, `field_operation_runtime`, `Deployment Profile`
- **Setting:** `field_operation_runtime`
- **Stakes:** operational, security
- **Active primitives / abstractions:** `Deployment Profile`, policy rules
- **Scene summary:** Explain what the system should do when freshness expires, trust cannot be updated, or runtime constraints tighten.
- **Proof surfaces:** deployment patterns and operator guidance sources
- **Handoff:** direct to airline boarding or deployment-profile comparison posts

### Post Card — Implementing OID4VCI with Marty

- **Slug:** `impl-oid4vci`
- **CAP unit alignment:** `artifact_adoption_proof`
- **Gravity well:** Artifact and Adoption Proof
- **Primary reader:** implementer
- **Lead narrator:** Daniel
- **Navigation role:** implementation proof note
- **Post-level reader shift:** `evaluative -> design_ready`
- **Dominant tensions:** transport integration vs model integrity
- **Proof surfaces:** issuance flows, protocol docs, schema sources
- **Default handoff:** schema walkthrough or implementation docs

#### Scene Card 1 — Where transport ends and Marty objects begin
- **CAP role:** resolution
- **Event type:** implementation_walkthrough
- **Reader-state contribution:** reinforces `design_ready`
- **Focal entities:** `Flow`, `Credential Template`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** operational, interoperability
- **Active primitives / abstractions:** issuance flows, `Credential Template`, `Flow`
- **Scene summary:** Use one tightly bounded issuance walkthrough to show how OID4VCI fits into Marty without becoming the architecture itself.
- **Proof surfaces:** issuance flows, spec, schemas
- **Handoff:** direct to schema walkthrough or broader implementation materials

### Post Card — Implementing OID4VP with Marty

- **Slug:** `impl-oid4vp`
- **CAP unit alignment:** `artifact_adoption_proof`
- **Gravity well:** Artifact and Adoption Proof
- **Primary reader:** implementer
- **Lead narrator:** Daniel
- **Navigation role:** implementation proof note
- **Post-level reader shift:** `evaluative -> design_ready`
- **Dominant tensions:** transport integration vs trust/disclosure design
- **Proof surfaces:** presentation flows, protocol docs, schema sources
- **Default handoff:** schema walkthrough or deployment-sensitive implementation materials

#### Scene Card 1 — Where trust, disclosure, and deployment attach to OID4VP
- **CAP role:** resolution
- **Event type:** implementation_walkthrough
- **Reader-state contribution:** reinforces `design_ready`
- **Focal entities:** `Presentation Policy`, `Trust Profile`, `Deployment Profile`
- **Setting:** `workbench_design_review`
- **Stakes:** security, operational, interoperability
- **Active primitives / abstractions:** presentation flows, `Presentation Policy`, `Trust Profile`, `Deployment Profile`
- **Scene summary:** Use one tightly bounded presentation walkthrough to show how OID4VP plugs into Marty's trust, disclosure, and deployment logic.
- **Proof surfaces:** presentation flows, spec, schemas
- **Handoff:** direct to implementation docs or deployment profile materials

## Practical drafting rule

If a writer cannot fill a scene card with concrete entities, settings, proof surfaces, and a clean handoff, the scene is not ready to be drafted yet.

## Related

- `cap-narrative-profile.md` — defines the entity registry, story architecture, and audit rules these cards inherit
- `publication-backlog-table.md` — defines which posts and scene shapes the cards operationalize
- `publication-post-packets.md` — adds source, diagram, CTA, adjacent-link, and proof-gathering requirements on top of these cards
- `publication-evidence-packets.md` — central collection point for all evidence necessitated by the post packets
- `../05-drafting/priority-draft-briefs.md` — the draft-brief layer directly upstream of these cards
- `../07-polish-and-publish/publication-checklist.md` — the layer that should be used after drafting is complete

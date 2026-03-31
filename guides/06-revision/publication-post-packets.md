# Publication Post Packets

Phase: 06 - Revision  
Purpose: Turn the Marty backlog and scene cards into draft-ready planning packets so future writing sessions know what to gather, what to draw, and where each post should lead before any prose is written.  
Time to Complete: 45–70 minutes

<!-- guide:publication_post_packets -->

## Why This Matters

The scene cards define the structure of each post.
What they do not yet hold is the **practical drafting brief at the packet level**:

- which sources are mandatory versus merely helpful
- which diagrams or tables are needed
- which CTA the post should most likely land on
- which adjacent links keep the navigation system coherent
- which proof is still missing before the draft should begin

This file provides that layer.

It should be used as the final planning surface before drafting starts.
It still does **not** contain article prose.

## Before You Begin

Prerequisites:

- `cap-narrative-profile.md`
- `publication-backlog-table.md`
- `publication-scene-cards.md`
- `../05-drafting/priority-draft-briefs.md`
- `../00-start-here/publishing-strategy.md`

## Packet Fields

Each packet contains:

- **Packet type** — flagship, supporting, or implementation note
- **Lead persona** — default narrator ownership
- **Scene card stack** — the ordered scene names the draft should follow
- **Required sources** — must-have materials for drafting
- **Helpful sources** — useful second-layer sources
- **Required diagrams / tables** — visuals or structured comparisons the post likely needs
- **Likely CTA** — where the piece should send the reader next
- **Adjacent links** — likely previous, next, and lateral posts in the navigation model
- **Proof still needed** — evidence or specificity that should be gathered before drafting
- **Draft-ready check** — what must be true before a writer starts prose

---

## Tier 1 — Core post packets

### Packet — Why Identity Needs a Protocol
- **Packet type:** flagship entry post
- **Lead persona:** Daniel (support from Aiko)
- **Primary reader:** sponsor, architect
- **Scene card stack:** `Category error` -> `The re-verification tax` -> `Protocol alternative`
- **Required sources:** `foundations-identity`, `centralized-vs-verifiable`, `business-case-for-credential-portability`
- **Helpful sources:** pricing-and-packaging materials, audience transformation docs
- **Required diagrams / tables:** platform vs protocol comparison table; repeated-verification cost curve sketch
- **Likely CTA:** continue to `five-primitives-in-one-picture`
- **Adjacent links:**
  - **previous:** none (entry point)
  - **next:** `five-primitives-in-one-picture`
  - **lateral:** `business-case-for-credential-portability`, `centralized-vs-verifiable`
- **Proof still needed:** one concrete quantitative or semi-quantitative example of duplicated verification cost that feels believable and non-hyped
- **Draft-ready check:** the category contrast is crisp, the re-verification tax is evidenced, and the handoff to the Five Primitives map is explicit

### Packet — The Five Primitives in One Picture
- **Packet type:** flagship navigation anchor
- **Lead persona:** Daniel
- **Primary reader:** architect, implementer, sponsor
- **Scene card stack:** `Why readers need a map` -> `Five recurring questions, five primitives` -> `Flows make the objects move` -> `The navigation contract`
- **Required sources:** primitive guide chapters, `flows-orchestrating-identity-lifecycle`, `marty-protocol/README.md`
- **Helpful sources:** CAP narrative profile, module map, post sequence
- **Required diagrams / tables:** primary Five Primitives map; “You are here” minimap pattern; primitive-to-question mapping table
- **Likely CTA:** choose the primitive or tension most relevant to your environment
- **Adjacent links:**
  - **previous:** `why-identity-needs-a-protocol`
  - **next:** `minimum-disclosure-is-a-policy-problem` or another primitive-specific deep dive
  - **lateral:** `trust-profiles-explained`, `credential-templates-designing-what-gets-issued`, `deployment-profiles-from-design-to-production`, `flows-orchestrating-identity-lifecycle`
- **Proof still needed:** one clean visual design decision for the canonical map and one consistent minimap treatment reusable across later posts
- **Draft-ready check:** the visual map exists, each primitive has one stable framing sentence, and the navigation contract for later posts is defined

### Packet — Minimum Disclosure Is a Policy Problem
- **Packet type:** flagship constraint deep dive
- **Lead persona:** Nora
- **Primary reader:** privacy, compliance, skeptical technical buyer
- **Scene card stack:** `Overcollection is the default failure` -> `Policy is the disclosure boundary` -> `Operational privacy still has runtime consequences`
- **Required sources:** `presentation-policies-minimum-disclosure`, `zero-knowledge-predicates-identity`, `sd-jwt-selective-disclosure-deep-dive`
- **Helpful sources:** `privacy-data-minimization`, retail and enterprise privacy examples
- **Required diagrams / tables:** disclosure options table (full claim vs predicate vs proof); policy boundary diagram
- **Likely CTA:** continue to `selective-disclosure` or `deploy-age-verification`
- **Adjacent links:**
  - **previous:** `five-primitives-in-one-picture`
  - **next:** `selective-disclosure` or `deploy-age-verification`
  - **lateral:** `zero-knowledge-predicates-identity`, `presentation-policies-minimum-disclosure`
- **Proof still needed:** one strong concrete verifier scenario where overcollection is obviously unnecessary and policy makes the correction legible
- **Draft-ready check:** the privacy failure mode is concrete, policy is clearly the control surface, and runtime/privacy trade-offs are not hand-waved away

### Packet — Same Trust Model, Different Runtime
- **Packet type:** flagship deployment bridge
- **Lead persona:** Sofia
- **Primary reader:** operator, architect, commercial evaluator
- **Scene card stack:** `Runtime pressure changes the architecture conversation` -> `Deployment Profiles isolate what should vary` -> `Operational and economic payoff`
- **Required sources:** `deployment-profiles-from-design-to-production`, `offline-verification-design-patterns`, pricing docs
- **Helpful sources:** `offline-verification-guide`, deployment package descriptions, use-case context docs
- **Required diagrams / tables:** runtime variation matrix (hosted vs self-hosted vs edge); stable trust logic vs varying environment constraints table
- **Likely CTA:** evaluate which deployment model fits your environment
- **Adjacent links:**
  - **previous:** `five-primitives-in-one-picture`
  - **next:** `deployment-profiles-in-practice` or `deploy-airline-boarding`
  - **lateral:** `offline-verification-design-patterns`, `infrastructure-economics-migration`
- **Proof still needed:** one clean comparison showing what actually changes across runtimes and what must remain invariant
- **Draft-ready check:** runtime contrast is concrete, Deployment Profile is the clear abstraction boundary, and the economic implication is visible

### Packet — One Protocol, Many Ecosystems
- **Packet type:** flagship breadth proof
- **Lead persona:** Aiko (support from Daniel)
- **Primary reader:** standards-minded architect, regulated buyer, skeptical sponsor
- **Scene card stack:** `Why ecosystems fragment` -> `Marty absorbs variation without changing the model` -> `Breadth is the proof`
- **Required sources:** `eudi-wallet-readiness`, `compliance-profiles-bridging-regulation`, `mip-and-open-badges-education-credentials`
- **Helpful sources:** use-case and deployment context docs, protocol ecosystem map
- **Required diagrams / tables:** ecosystem comparison table (travel / retail / enterprise / education); compliance profile to primitive mapping table
- **Likely CTA:** map your ecosystem to a Marty deployment path
- **Adjacent links:**
  - **previous:** `same-trust-model-different-runtime`
  - **next:** `infrastructure-economics-migration` or `why-marty-is-ready-for-evaluation`
  - **lateral:** `deploy-airline-boarding`, `deploy-age-verification`, `deploy-enterprise-access`
- **Proof still needed:** a disciplined set of 3–4 ecosystem examples that are diverse but still comparable through the same object model
- **Draft-ready check:** ecosystem fragmentation is explained without sounding like standards cynicism, and the same-model proof is visible across multiple sectors

### Packet — The Infrastructure Economics Migration
- **Packet type:** flagship business-case conversion post
- **Lead persona:** Daniel (support from Sofia)
- **Primary reader:** executive buyer, architectural sponsor, budget owner
- **Scene card stack:** `Per-check pricing punishes growth` -> `Owning deployments changes the curve` -> `Case study proof` -> `The buying implication`
- **Required sources:** `business-case-for-credential-portability`, pricing-and-packaging docs, Phase 03 infrastructure migration case studies
- **Helpful sources:** product-catalog offering matrix, deployment package docs, audience objections from buyer materials
- **Required diagrams / tables:** per-check vs infrastructure cost curve chart; case-study comparison table (gate vs enterprise estate); pricing model comparison table
- **Likely CTA:** compare deployment and control-plane tiers
- **Adjacent links:**
  - **previous:** `one-protocol-many-ecosystems`
  - **next:** `why-marty-is-ready-for-evaluation`
  - **lateral:** `same-trust-model-different-runtime`, `business-case-for-credential-portability`
- **Proof still needed:** at least one believable modeled cost story with concrete variables, plus one operational consequence beyond raw cost
- **Draft-ready check:** the cost-curve argument is legible, the case studies are specific enough to feel real, and the buying implication is infrastructure-first rather than vague savings talk

### Packet — Why Marty Is Ready for Evaluation
- **Packet type:** flagship conversion / evaluation handoff
- **Lead persona:** Daniel (support from Elena)
- **Primary reader:** evaluation-ready architect or buyer
- **Scene card stack:** `Why skeptical teams hesitate` -> `What already exists` -> `Proof of seriousness` -> `Evaluation handoff`
- **Required sources:** `introducing-mip`, `mip-json-schemas-walkthrough`, `conformance-testing-for-implementers`, `marty-protocol/README.md`
- **Helpful sources:** pricing docs, governance materials, publication checklist
- **Required diagrams / tables:** evaluation path checklist; artifact inventory table (spec / schemas / conformance / deployment choices)
- **Likely CTA:** inspect the spec, schemas, and deployment choices
- **Adjacent links:**
  - **previous:** `infrastructure-economics-migration`
  - **next:** implementation notes or deployment evaluation surfaces
  - **lateral:** `introducing-mip`, `mip-json-schemas-walkthrough`, `conformance-testing-for-implementers`
- **Proof still needed:** a clear evaluation path that feels operationally real and does not assume the reader already knows where to start
- **Draft-ready check:** the artifact inventory is complete, the skepticism is respected, and the handoff into evaluation assets is specific

---

## Tier 2 — Supporting post packets

### Packet — Privacy Data Minimization
- **Packet type:** supporting proof note
- **Lead persona:** Nora
- **Primary reader:** privacy and governance readers
- **Scene card stack:** `One verifier request, reduced correctly`
- **Required sources:** privacy materials, presentation-policy sources
- **Helpful sources:** age-verification context, regulatory references
- **Required diagrams / tables:** one before/after request boundary example
- **Likely CTA:** continue to `minimum-disclosure-is-a-policy-problem`
- **Adjacent links:** previous `minimum-disclosure-is-a-policy-problem`; next `deploy-age-verification`; lateral `selective-disclosure`
- **Proof still needed:** one especially clear verifier request example
- **Draft-ready check:** the example is concrete enough that the minimization win is obvious in a single scene

### Packet — Selective Disclosure
- **Packet type:** supporting deep dive
- **Lead persona:** Nora (support from Marcus)
- **Primary reader:** architect, privacy reader, implementer
- **Scene card stack:** `The disclosure problem` -> `Mechanism choices` -> `Policy and deployment implications`
- **Required sources:** SD-JWT and ZK materials, presentation-policy sources
- **Helpful sources:** privacy docs, age-verification scenario
- **Required diagrams / tables:** mechanism comparison table; disclosure mechanism to policy objective matrix
- **Likely CTA:** continue to `deploy-age-verification` or privacy implementation notes
- **Adjacent links:** previous `minimum-disclosure-is-a-policy-problem`; next `deploy-age-verification`; lateral `zero-knowledge-predicates-identity`
- **Proof still needed:** one crisp explanation of why mechanism choice should follow policy need rather than novelty
- **Draft-ready check:** the post can compare mechanisms without turning into a cryptography detour detached from user outcomes

### Packet — Deploying Marty for Airline Boarding
- **Packet type:** supporting use-case proof
- **Lead persona:** Sofia (support from Aiko)
- **Primary reader:** operator, travel architect, regulated buyer
- **Scene card stack:** `Field-environment pressure` -> `Trust and offline configuration` -> `Throughput and operational win`
- **Required sources:** airline deployment guide, ICAO context, offline materials
- **Helpful sources:** pricing docs, deployment package materials
- **Required diagrams / tables:** boarding-lane trust and cache flow; operational constraint table
- **Likely CTA:** continue to `offline-verification-guide` or deployment package evaluation
- **Adjacent links:** previous `same-trust-model-different-runtime`; next `offline-verification-guide`; lateral `infrastructure-economics-migration`
- **Proof still needed:** one realistic travel workflow and one clearly bounded offline policy window
- **Draft-ready check:** the travel use case feels operationally specific, not merely illustrative

### Packet — Deploying Marty for Age Verification
- **Packet type:** supporting use-case proof note
- **Lead persona:** Nora (support from Sofia)
- **Primary reader:** privacy-conscious buyer, retail architect
- **Scene card stack:** `One yes/no decision, correctly bounded`
- **Required sources:** age-verification context, privacy materials
- **Helpful sources:** selective-disclosure and presentation-policy sources
- **Required diagrams / tables:** one decision-boundary diagram (full identity vs yes/no proof)
- **Likely CTA:** continue to `minimum-disclosure-is-a-policy-problem`
- **Adjacent links:** previous `selective-disclosure`; next `minimum-disclosure-is-a-policy-problem`; lateral `privacy-data-minimization`
- **Proof still needed:** one especially clean retail scenario with minimal ambiguity
- **Draft-ready check:** the post can prove the value in one scene without needing extra architecture exposition

### Packet — Deploying Marty for Enterprise Access
- **Packet type:** supporting use-case proof
- **Lead persona:** Sofia (support from Elena)
- **Primary reader:** enterprise architect, security lead
- **Scene card stack:** `Fragmented enterprise surfaces` -> `One credential, many checks` -> `Governance and operational payoff`
- **Required sources:** enterprise deployment context, Cedar/governance materials, flow sources
- **Helpful sources:** pricing docs, deployment package docs
- **Required diagrams / tables:** enterprise surface map (badge / network / app); policy-to-access-decision table
- **Likely CTA:** continue to `compliance-profiles-in-practice` or `why-marty-is-ready-for-evaluation`
- **Adjacent links:** previous `same-trust-model-different-runtime`; next `compliance-profiles-in-practice`; lateral `deployment-profiles-in-practice`
- **Proof still needed:** one enterprise architecture example that avoids becoming generic IAM commentary
- **Draft-ready check:** the repeated-check problem and governance payoff are both visible

### Packet — Deploying Marty for Membership Credentials
- **Packet type:** supporting use-case proof note
- **Lead persona:** Victor (support from Nora)
- **Primary reader:** product owner, ecosystem architect
- **Scene card stack:** `Trust portability outside government ID`
- **Required sources:** Open Badges materials, deployment contexts, trust and policy sources
- **Helpful sources:** `one-protocol-many-ecosystems`
- **Required diagrams / tables:** ecosystem membership trust sketch
- **Likely CTA:** continue to `one-protocol-many-ecosystems`
- **Adjacent links:** previous `one-protocol-many-ecosystems`; next ecosystem trust or portability content; lateral `mip-and-open-badges-education-credentials`
- **Proof still needed:** one non-government ecosystem example that clearly benefits from portable trust logic
- **Draft-ready check:** the post demonstrates breadth beyond state-issued identity in a single, legible example

### Packet — Deployment Profiles in Practice
- **Packet type:** supporting operational deep dive
- **Lead persona:** Sofia
- **Primary reader:** operator, platform architect
- **Scene card stack:** `What changes across environments` -> `What stays stable in trust logic` -> `How to choose`
- **Required sources:** deployment profile sources, pricing docs, deployment package materials
- **Helpful sources:** offline guide, same-trust-model materials
- **Required diagrams / tables:** deployment option comparison matrix; choose-by-environment table
- **Likely CTA:** continue to deployment package evaluation
- **Adjacent links:** previous `same-trust-model-different-runtime`; next `deploy-airline-boarding`; lateral `offline-verification-guide`
- **Proof still needed:** a crisp decision framework, not just a feature list
- **Draft-ready check:** the post offers a real choosing lens and preserves the model-vs-runtime distinction

### Packet — Compliance Profiles in Practice
- **Packet type:** supporting standards/governance deep dive
- **Lead persona:** Elena (support from Aiko)
- **Primary reader:** compliance lead, regulated architect
- **Scene card stack:** `Regulatory fragmentation` -> `The compliance-profile translation layer` -> `Configuration beats code`
- **Required sources:** compliance profile materials, EUDI materials, governance docs
- **Helpful sources:** protocol ecosystem map, one-protocol-many-ecosystems materials
- **Required diagrams / tables:** regulation-to-profile translation table; code vs configuration comparison table
- **Likely CTA:** continue to `one-protocol-many-ecosystems` or evaluation materials
- **Adjacent links:** previous `one-protocol-many-ecosystems`; next `why-marty-is-ready-for-evaluation`; lateral `deploy-enterprise-access`
- **Proof still needed:** one compliance change example that shows why configuration materially reduces change friction
- **Draft-ready check:** the translation layer is concrete enough that a regulated buyer can imagine using it

### Packet — Offline Verification Guide
- **Packet type:** supporting operator anchor
- **Lead persona:** Sofia
- **Primary reader:** operator, implementer
- **Scene card stack:** `Cache and trust-anchor setup` -> `Revocation and freshness trade-offs` -> `Failure-mode policy and operator decisions`
- **Required sources:** offline verification materials, deployment sources, trust sources
- **Helpful sources:** airline boarding context, deployment profile docs
- **Required diagrams / tables:** offline verifier lifecycle; revocation/freshness trade-off table
- **Likely CTA:** continue to `deploy-airline-boarding`
- **Adjacent links:** previous `same-trust-model-different-runtime`; next `deploy-airline-boarding`; lateral `deployment-profiles-in-practice`
- **Proof still needed:** one concrete operator policy example when trust freshness expires
- **Draft-ready check:** the post explains failure-mode decisions clearly enough for an operator, not just an architect

### Packet — Implementing OID4VCI with Marty
- **Packet type:** implementation note
- **Lead persona:** Daniel
- **Primary reader:** implementer
- **Scene card stack:** `Where transport ends and Marty objects begin`
- **Required sources:** issuance flows, protocol docs, schema sources
- **Helpful sources:** `mip-json-schemas-walkthrough`, implementation docs
- **Required diagrams / tables:** issuance transport vs Marty object boundary sketch
- **Likely CTA:** continue to schema walkthrough or implementation docs
- **Adjacent links:** previous `why-marty-is-ready-for-evaluation`; next implementation docs; lateral `impl-oid4vp`
- **Proof still needed:** one bounded issuance walkthrough that keeps the transport layer subordinate to the object model
- **Draft-ready check:** the post can explain the integration in one scene without collapsing the architecture into OID4VCI itself

### Packet — Implementing OID4VP with Marty
- **Packet type:** implementation note
- **Lead persona:** Daniel
- **Primary reader:** implementer
- **Scene card stack:** `Where trust, disclosure, and deployment attach to OID4VP`
- **Required sources:** presentation flows, protocol docs, schema sources
- **Helpful sources:** deployment profile sources, presentation policy sources
- **Required diagrams / tables:** presentation transport vs trust/disclosure/deployment attachment sketch
- **Likely CTA:** continue to implementation docs or deployment materials
- **Adjacent links:** previous `why-marty-is-ready-for-evaluation`; next implementation docs; lateral `impl-oid4vci`
- **Proof still needed:** one bounded presentation walkthrough that shows OID4VP as a transport surface, not the whole design
- **Draft-ready check:** the role of trust, disclosure, and deployment in the presentation path is explicit

## Practical rule

A packet is ready for drafting only when:

1. the scene card stack is stable
2. the must-have sources are actually available
3. the required diagram or table is at least conceptually designed
4. the CTA and adjacent links make sense in the Five Primitives navigation model
5. the missing proof is either gathered or consciously deferred

## Related

- `publication-evidence-packets.md` — concrete proof and visual diagrams required before drafting
- `publication-scene-cards.md` — scene-level CAP drafting cards that these packets operationalize
- `publication-backlog-table.md` — post-level prioritization and navigation roles
- `cap-narrative-profile.md` — source of the CAP entities, settings, roles, and reader-state logic
- `../07-polish-and-publish/publication-checklist.md` — the post-draft validation layer
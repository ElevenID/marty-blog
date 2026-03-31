# Priority Draft Briefs

Phase: 05 - Drafting  
Purpose: Identify the highest-leverage topic packets authors can choose freely from the current Marty corpus with minimal invention.  
Time to Complete: 30–45 minutes

<!-- guide:priority_draft_briefs -->

## How To Use These Briefs

These briefs are **not** a mandatory queue.
They are examples of strong topics that already fit the Marty publication well.

An author should feel free to:

- pick any brief out of order
- adapt a brief to a timely standards or market development
- merge two adjacent briefs if the topic demands it
- propose a new brief if it still maps to the Marty model and reader needs

## Draft Brief 1 — Why Identity Needs a Protocol

**Goal:** Create the cleanest possible opening argument for why the category is broken before introducing too much Marty terminology.

**Primary sources:**
- `why-identity-needs-a-protocol`
- `centralized-vs-verifiable`
- `business-case-for-credential-portability`
- `foundations-identity`

**Reader:** Sponsor + architect

**Promise:** Show why the category is broken before asking the reader to learn a new model.

**Key beats:**
1. Identity is still sold as a platform problem
2. That creates lock-in and repeated verification cost
3. Verifiable credentials change the architecture
4. Marty exists to give that architecture a reusable protocol model

**Recommended scene shape:** 3-scene explainer

**Proposed scenes:**
1. **Identity is being sold as the wrong category** — show how platform and API framing makes the market feel normal when it is structurally broken.
2. **The re-verification tax is structural** — explain duplicated checks, lock-in, and why success makes the old model more expensive.
3. **A protocol changes the shape of the system** — introduce Marty as reusable infrastructure and hand the reader to the Five Primitives map.

**Best next step:** Move into the five primitives or the guide foundations cluster

---

## Draft Brief 2 — The Five Primitives in One Picture (The Navigation Anchor)

**Goal:** Produce the clearest single topic essay that explains the whole MIP model, creating a visual "minimap" that all other posts will reuse for navigation.

**Primary sources:**
- `trust-profiles`
- `credential-templates`
- `presentation-policies`
- `deployment-profiles`
- `issuance-flows`
- `flows-orchestrating-identity-lifecycle`
- `marty-protocol/README.md`

**Reader:** Architect + implementer + sponsor

**Promise:** Collapse a messy ecosystem into a stable set of reusable objects, and give the reader a permanent visual map of how identity elements fit together.

**Key beats:**
1. The five questions every credential system must answer
2. The MIP object that answers each question
3. A single, comprehensive diagram (e.g., SVG/Mermaid) that plots the Five Primitives together
4. How flows orchestrate the objects into user-facing journeys
5. Why this systemic view reduces code and organizational confusion

**Recommended scene shape:** 4-scene navigation anchor

**Proposed scenes:**
1. **Why readers need a stable map** — explain why identity feels fragmented without one model that holds the whole system together.
2. **Five recurring questions, five primitives** — map trust, issuance, disclosure, deployment, and orchestration to Marty objects.
3. **Flows turn objects into journeys** — show how the primitives work together in motion rather than sitting as a static list.
4. **The map becomes navigation** — explain how later posts will zoom into one part of the picture while showing the reader “You are here.”

**Navigational Function:** This post establishes the core visual map. Future deep-dive posts should feature a "You Are Here" snippet of this map to help the reader stay oriented.

**Best next step:** Read the deep dive for the primitive most relevant to the reader's environment

---

## Draft Brief 3 — Minimum Disclosure Is a Policy Problem

**Goal:** Show that privacy in Marty is operational and configurable, not cosmetic.

**Primary sources:**
- `presentation-policies-minimum-disclosure`
- `privacy-data-minimization`
- `zero-knowledge-predicates-identity`
- `sd-jwt-selective-disclosure-deep-dive`
- `selective-disclosure`

**Reader:** Privacy, compliance, architecture, skeptical technical buyer

**Promise:** Explain how Marty makes privacy part of protocol design rather than post-hoc verifier restraint.

**Key beats:**
1. Why traditional IDV over-collects by default
2. Presentation Policies as the place where disclosure is bounded
3. SD-JWT and ZK predicates as practical mechanisms
4. Why privacy and compliance are not inherently opposed

**Recommended scene shape:** 3-scene deep dive

**Proposed scenes:**
1. **Overcollection is the default failure mode** — show how ordinary verification asks for more data than the decision requires.
2. **Policy is where the boundary belongs** — explain claims, predicates, and proofs as policy-level disclosure choices.
3. **Operational privacy is still operational** — connect freshness, revocation, and auditability to real-world privacy-by-design behavior.

**Best next step:** Compare privacy-sensitive deployment patterns in retail, enterprise, or EUDI contexts

---

## Draft Brief 4 — Same Trust Model, Different Runtime

**Goal:** Turn deployment profiles into a memorable Marty differentiator.

**Primary sources:**
- `deployment-profiles-from-design-to-production`
- `deployment-profiles-in-practice`
- `offline-verification-guide`
- `offline-verification-design-patterns`
- pricing/packaging docs

**Reader:** Operator + architect + commercial evaluator

**Promise:** Show that Marty can preserve the same trust logic across cloud, hosted, and offline edge environments.

**Key beats:**
1. Online vs offline is an operational envelope, not a different product
2. Deployment Profiles package the environment-specific differences
3. Edge/kiosk environments make this abstraction economically and operationally valuable
4. Pricing by deployment reinforces the same worldview

**Recommended scene shape:** 3-scene bridge post

**Proposed scenes:**
1. **Runtime pressure changes the architecture conversation** — contrast cloud assumptions with edge and offline reality.
2. **Deployment Profiles isolate what should vary** — show how Marty preserves trust logic while packaging environment-specific constraints.
3. **The payoff is operational and economic** — explain why lanes, kiosks, devices, and pricing all benefit from this separation.

**Best next step:** Evaluate which deployment package matches the reader's environment

---

## Draft Brief 5 — One Protocol, Many Ecosystems

**Goal:** Use standards and regulated contexts to prove Marty's breadth.

**Primary sources:**
- `eudi-wallet-readiness`
- `compliance-profiles-bridging-regulation`
- `mip-and-open-badges-education-credentials`
- `deploy-airline-boarding`
- `deploy-age-verification`
- `deploy-enterprise-access`

**Reader:** Standards-minded architect, regulated buyer, skeptical sponsor

**Promise:** Demonstrate that Marty is not tied to one document type, one region, or one deployment context.

**Key beats:**
1. The ecosystem is fragmented because each standards cluster arrives with its own trust assumptions
2. Compliance Profiles absorb that complexity into Marty primitives
3. The same model spans travel, retail, enterprise, and education
4. This is where protocol value becomes concrete

**Recommended scene shape:** 3-scene breadth proof

**Proposed scenes:**
1. **Ecosystems fragment because trust assumptions fragment** — explain why standards clusters feel incompatible in practice.
2. **Marty absorbs variation without changing the model** — show how Compliance Profiles and primitives normalize the differences.
3. **Breadth is the proof** — walk through travel, retail, enterprise, and education as evidence that one protocol can stretch across contexts.

**Best next step:** Read the spec or map the reader's primary use case to a Marty deployment path

---

## Draft Brief 6 — Why Marty Is Ready for Evaluation

**Goal:** End a topic path or collection with evidence that Marty is live, formal, and implementable.

**Primary sources:**
- `introducing-mip`
- `mip-json-schemas-walkthrough`
- `conformance-testing-for-implementers`
- `marty-protocol/README.md`
- pricing/packaging docs

**Reader:** Evaluation-ready architect or buyer

**Promise:** Show that Marty is not just a conceptual framework but a protocol surface with schemas, tests, packaging, and governance logic.

**Key beats:**
1. Open-source launch and what is actually in the spec
2. Schemas as immediate implementation value
3. Conformance as confidence-building infrastructure
4. Deployment/governance packaging as the practical next step

**Recommended scene shape:** 4-scene evaluation handoff

**Proposed scenes:**
1. **Why serious teams hesitate** — acknowledge the credibility bar a new protocol has to clear.
2. **What already exists** — summarize the spec, schemas, primitives, and governance surfaces.
3. **Proof of seriousness** — use conformance and deployment packaging to show this is implementable, not merely interesting.
4. **Where evaluation should go next** — hand the reader into the spec, schemas, and deployment comparison surface.

**Best next step:** Read the spec, inspect the schemas, and evaluate the right deployment/control-plane path

---

## Draft Brief 7 — The Infrastructure Economics Migration (Case Study)

**Goal:** Create a convincing narrative favoring the "pay for protocol infrastructure, not for API verifications" commercial model.

**Primary sources:**
- `business-case-for-credential-portability`
- `centralized-vs-verifiable`
- `product-catalog/pricing-and-packaging.md`
- `product-catalog/offering-matrix.md`
- Use Case: High-Throughput Physical Gate or Multi-Vendor Enterprise Estate

**Reader:** Executive buyer, architectural sponsor, budget owner

**Promise:** Show exactly how migrating from a per-check IDV platform to an owned protocol deployment radically changes the cost curve at scale.

**Key beats:**
1. The trap of the per-check API model: as success and volume grow, identity costs scale punishingly.
2. The alternative: migrating to the Marty protocol model where verifying is an internal protocol event, not a metered transaction.
3. Case study illustration (e.g., physical gate offline resilience or multi-vendor tool consolidation).
4. The conclusion: identity should be bought like infrastructure (deployments & control planes), not rented like a metered lookup service.

**Recommended scene shape:** 4-scene business-case proof

**Proposed scenes:**
1. **Per-check pricing punishes growth** — show how the old IDV model gets more expensive as verification succeeds.
2. **Owning deployments changes the curve** — explain the Marty alternative in infrastructure terms.
3. **Case study proof** — use the high-throughput gate and multi-vendor enterprise estate to make the savings legible.
4. **The buying implication** — land the shift from metered verification to owned protocol infrastructure.

**Best next step:** View the pricing and packaging model or evaluate control-plane tiers.

## Related

- `course-manuscript-outline.md` — where these briefs slot into the larger editorial collections
- `published-content-source-map.md` — all current source material feeding these briefs
- `../04-plot-and-structure/series-arc.md` — the deeper logic these briefs should reinforce
- `../06-revision/publication-post-packets.md` — the expanded structural brief built from these
- `../06-revision/publication-evidence-packets.md` — where required evidence is staged before drafting

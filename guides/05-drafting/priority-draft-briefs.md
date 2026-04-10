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

## Current overlap guardrails

These rules override the normal freedom to adapt or merge briefs whenever a topic sits in a contested cluster.

- **Guide-first operational slugs:** guides stay canonical for `deployment-*`, `offline-verification-guide`, `impl-oid4vci`, `impl-oid4vp`, and similar implementation/deployment/how-to surfaces. If a blog companion survives, rename it before drafting so it carries a distinct bridge or evaluation role.
- **Selective-disclosure family:** keep `minimum-disclosure-is-a-policy-problem` as the policy-first privacy entry and `selective-disclosure` as the canonical mechanism explainer. Treat `selective-disclosure-explained` as a merge / retire surface unless it proves a distinct reader job, while `selective-disclosure-in-wallets` remains the holder-UX follow-on and `sd-jwt-selective-disclosure-deep-dive` remains the standards-specific implementation follow-on.
- **Trust-profile pair:** `trust-profiles-explained` remains the canonical concept entry. The surviving follow-on brief is `trust-profile-evaluation-and-failure-handling`, which owns runtime trust evaluation, freshness, and fail-closed behavior.
- **Protocol-overview cluster:** keep `why-identity-needs-a-protocol` = category case, `why-the-marty-protocol-exists` = minimum shared model, `introducing-mip` = launch / artifact reveal, and `the-marty-identity-model` = grammar / synthesis.
- **Privacy/data-minimization branch:** use `data-minimization-in-identity` for blog-side handoffs, supporting proof-note references, and adjacent-post planning. Reserve `privacy-data-minimization` for the guide-side source surface or for the explicit rename / retire cleanup of the duplicate live blog slug.

## Current factual wording guardrails

- **EUDI timing claims:** name the actor, obligation, and timing window. Prefer `Member States are expected to make at least one wallet available by the end of 2026` over blanket `EUDI arrives by 2026` phrasing, and keep implementing-act / ARF / pilot refinement language visible.
- **MIP repo-state claims:** verify version numbers, schema counts, conformance assets, and compliance-profile inventories against the current `marty-protocol` repo snapshot. Use `currently includes` for mutable inventories unless you are explicitly quoting a fixed release artifact.
- **Post-quantum framing:** use current algorithm names (`ML-KEM`, `ML-DSA`, `SLH-DSA`) and emphasize preparedness, long credential lifetimes, harvest-now / decrypt-later risk, and algorithm agility. Do not promise exact quantum-arrival timelines unless a cited source is attached.
- **Publication timestamps:** treat `Date` and `Updated date` as editorial provenance. Scheduling belongs in roadmap / status metadata, not in the live article timestamps.

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
- `data-minimization-in-identity`
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

---

## Draft Brief 8 — What Is Digital Identity?

**Goal:** Create the clearest possible foundations article for readers who still think digital identity means an account record or a login provider.

**Primary sources:**
- `foundations-identity`
- `centralized-vs-verifiable`
- `foundations-verification`
- `why-identity-needs-a-protocol`

**Reader:** Sponsor + architect + implementer

**Promise:** Replace a fuzzy, account-centric mental model with the idea of portable, machine-readable claims that can be verified under trust rules.

**Key beats:**
1. Digital identity is machine-readable evidence, not just an account in someone else's system
2. Issuer, holder, and verifier make that evidence portable
3. Local verification changes privacy, latency, and lock-in

**Recommended scene shape:** 3-scene explainer

**Proposed scenes:**
1. **Identity is more than an account record** — replace the “identity account” mental model with claims about a person, organization, or device.
2. **Issuer, holder, and verifier make identity portable** — introduce the trust triangle and why each role exists.
3. **Verification without calling home changes the category** — show the privacy, latency, and lock-in implications of verifiable identity.

**Best next step:** Move into `verifiable-credentials-explained`, then `issuers-holders-verifiers-explained`.

---

## Draft Brief 9 — Verifiable Credentials Explained

**Goal:** Explain what a Verifiable Credential actually is before the reader gets dragged into format acronyms or wallet hype.

**Primary sources:**
- `foundations-credentials`
- `foundations-verification`
- `centralized-vs-verifiable`
- `sd-jwt-selective-disclosure-deep-dive`

**Reader:** Sponsor + architect + implementer

**Promise:** Turn “VC” from a vague standards term into a concrete mental model: signed claims, holder control, and reusable proof.

**Key beats:**
1. A credential is a signed claim set with issuer, subject, proof, validity, and status
2. Different formats package the same job differently
3. Holder control and selective disclosure make the credential reusable

**Recommended scene shape:** 3-scene explainer

**Proposed scenes:**
1. **A credential is a signed claim set** — define the parts that make a credential useful and verifiable.
2. **Different formats, same job** — compare W3C VC, SD-JWT, and mDoc without losing the core concept.
3. **Holder control makes the credential reusable** — explain why wallets, selective disclosure, and holder binding matter operationally.

**Best next step:** Move into `issuers-holders-verifiers-explained` or `credential-lifecycle`.

---

## Draft Brief 9A — The Four Actors of Identity Systems

**Goal:** Resolve the lingering participant-model confusion by showing that identity ecosystems involve three operational roles plus a fourth institutional actor: governance authority.

**Primary sources:**
- `foundations-identity`
- `foundations-verification`
- `building-trust-registries-at-scale`
- `trust-profiles-explained`
- `guides/03-world-building/use-cases-and-deployment-contexts.md`

**Reader:** Architect + buyer + policy lead

**Promise:** Explain why issuer, holder, and verifier are the three operational actors in a credential exchange, but why real ecosystems still depend on a fourth actor that decides which issuers count at all.

**Key beats:**
1. The three operational roles explain how proof moves, but not why an issuer is authorized
2. Governance authorities define which issuers and frameworks a verifier may rely on
3. The four-actor model keeps ecosystems legible without collapsing governance into the verifier

**Recommended scene shape:** 3-scene explainer

**Proposed scenes:**
1. **Three roles still leave one question unanswered** — show that a signed credential can still come from an issuer nobody should accept if no governance layer defines authority.
2. **Governance authorities decide which issuers count** — use accreditation bodies, ICAO PKD, AAMVA-style trust lists, or enterprise trust teams as concrete examples of the fourth actor.
3. **Four actors keep the ecosystem honest** — combine governance authority with issuer, holder, and verifier so the reader can see the full ecosystem without losing the simpler operational triangle.

**Best next step:** Move into `issuers-holders-verifiers-explained`, then later into `building-trust-registries-at-scale`.

---

## Draft Brief 10 — Issuers, Holders, Verifiers Explained

**Goal:** Give readers a stable operational model of the three roles that make credential exchange work in the real world.

**Primary sources:**
- `foundations-identity`
- `foundations-verification`
- `deploy-enterprise-access`
- `deploy-age-verification`
- `guides/03-world-building/use-cases-and-deployment-contexts.md`

**Reader:** Architect + implementer + buyer

**Promise:** Explain what each role owns, what each role should not own, and why role separation matters for portability and privacy.

**Key beats:**
1. Issuers create authoritative claims under governance
2. Holders carry and selectively present those claims
3. Verifiers make bounded decisions under their own trust and policy rules

**Recommended scene shape:** 3-scene explainer

**Proposed scenes:**
1. **Issuers create authoritative claims** — show why signing a claim is a governed act, not just payload generation.
2. **Holders decide how claims travel** — explain wallets, consent, selective disclosure, and possession.
3. **Verifiers ask narrow questions under their own rules** — show how verification depends on trust and policy, not issuer surveillance.

**Best next step:** Move into `credential-lifecycle`.

---

## Draft Brief 11 — The Credential Lifecycle

**Goal:** Show that credentials are not static artifacts. They move through a governed lifecycle with approval, issuance, use, status change, and renewal consequences.

**Primary sources:**
- `flows-orchestrating-identity-lifecycle`
- `credential-templates`
- `foundations-verification`
- `deployment-profiles`
- `marty-protocol/README.md`

**Reader:** Architect + operator + implementer

**Promise:** Map the credential journey from application to verification so readers can see where trust, policy, and runtime pressure enter.

**Key beats:**
1. Application and approval set the conditions for issuance
2. Issuance and presentation turn approval into reusable proof
3. Verification, revocation, and renewal keep the system trustworthy over time

**Recommended scene shape:** 3-scene explainer

**Proposed scenes:**
1. **Application and approval set the issuance conditions** — explain evidence gathering, rules, and approval logic.
2. **Issuance and presentation turn approval into portable proof** — show what changes once a credential is real and holder-controlled.
3. **Verification, revocation, and renewal keep the system honest** — land the ongoing operational responsibilities after issuance.

**Best next step:** Move into `five-primitives-in-one-picture` or `the-marty-identity-model`.

---

## Draft Brief 12 — The Marty Identity Model

**Goal:** Synthesize the foundations material into the protocol grammar that makes Marty different from a pile of standards integrations.

**Primary sources:**
- `marty-protocol/README.md`
- `five-primitives-in-one-picture`
- `trust-profiles`
- `credential-templates`
- `presentation-policies`
- `deployment-profiles`

**Reader:** Architect + implementer + sponsor

**Promise:** Show how MIP turns roles, credentials, and lifecycle stages into a governable system with stable objects and explicit supporting abstractions.

**Key beats:**
1. Roles and credentials alone do not tell you where trust, policy, and runtime belong
2. The five primitives stabilize the system
3. Supporting abstractions keep the model practical without becoming extra primitives
4. The result is a stable operating language for the rest of Marty

**Recommended scene shape:** 4-scene bridge / model synthesis

**Proposed scenes:**
1. **Roles and credentials are not enough by themselves** — name the gap between understanding the actors and governing a real deployment.
2. **Five primitives stabilize the system** — map the recurring system questions to Trust Profiles, Credential Templates, Presentation Policies, Deployment Profiles, and Flows.
3. **Supporting abstractions keep the model practical** — explain why Compliance Profiles, Wallet Profiles, Revocation Profiles, and Cedar policy sets exist.
4. **The model becomes navigation** — hand the reader into `five-primitives-in-one-picture` and the primitive deep dives with a stable mental model.

**Best next step:** Read `five-primitives-in-one-picture`, then follow the primitive or use-case path most relevant to the environment.

---

## Draft Brief 13 — Public Key Infrastructure Explained

**Goal:** Turn PKI from generic web-security vocabulary into a clean identity-systems mental model.

**Primary sources:**
- `cryptographic-trust-anchors-primer`
- `marty-protocol/SPECIFICATION.md` (§5 Trust Profile; §5.7 root-of-trust models)
- `marty-core/marty-crypto/README.md`

**Reader:** Architect + implementer

**Promise:** Explain why public/private keys are not enough by themselves, and how certificate hierarchies turn issuer keys into reusable trust.

**Key beats:**
1. A key pair proves cryptographic control, not institutional authority
2. Certificates and certificate authorities bind keys to issuers
3. Identity ecosystems package PKI through trust anchors, trust lists, and profile rules
4. Marty makes those PKI choices explicit in Trust Profiles

**Recommended scene shape:** 3-scene explainer

**Proposed scenes:**
1. **A key pair is not a trust framework** — separate raw cryptography from governed issuer trust.
2. **Certificates create verifiable authority** — explain how certificate hierarchies let verifiers trust issuers they do not already know.
3. **Identity PKI becomes governable when trust is explicit** — connect PKI to Trust Profiles, trust lists, and ecosystem rules.

**Best next step:** Move into `understanding-trust-anchors`, then `certificate-chains-and-validation`.

---

## Draft Brief 14 — Understanding Trust Anchors

**Goal:** Give readers the clearest possible explanation of where verifier trust actually starts.

**Primary sources:**
- `cryptographic-trust-anchors-primer`
- `marty-protocol/SPECIFICATION.md` (§5.7.2 Trust Anchor Distribution)
- `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`

**Reader:** Architect + implementer + operator

**Promise:** Show that trust anchors are not abstract roots; they are concrete trust material that must be distributed, refreshed, cached, and governed.

**Key beats:**
1. Verification has to start from a declared trust root
2. Trust anchors arrive via PKD, trust lists, or pinned roots
3. Freshness, caching, and rotation are operational trust decisions

**Recommended scene shape:** 3-scene explainer

**Proposed scenes:**
1. **Verification has to start somewhere** — define trust anchors as the root objects that make issuer trust possible.
2. **Anchors are distributed, not magical** — explain PKD, trust-list, and pinned-root delivery patterns.
3. **Anchor choice shapes runtime behavior** — connect refresh cadence, cache windows, and failure handling to real deployments.

**Best next step:** Move into `certificate-chains-and-validation` or `trust-profiles-explained`.

---

## Draft Brief 15 — Certificate Chains and Validation

**Goal:** Walk readers through the actual verification path from issuer certificate to trusted root.

**Primary sources:**
- `marty-core/marty-verification/README.md`
- `marty-protocol/SPECIFICATION.md` (§5.7.3 Trust Evaluation Algorithm)
- `marty-core/marty-crypto/README.md`

**Reader:** Implementer + security architect

**Promise:** Show that chain validation is a step-by-step trust decision, not just “the library says yes.”

**Key beats:**
1. Path building links issuer material to a trusted root
2. Validation includes signature, validity period, key usage, and revocation
3. Offline constraints and stale trust material create real failure modes

**Recommended scene shape:** 3-scene technical deep dive

**Proposed scenes:**
1. **Path building turns certificates into trust decisions** — explain how a verifier finds the route from issuer cert to anchor.
2. **Validation is more than signature math** — cover expiry, allowed algorithms, key constraints, and revocation.
3. **Runtime pressure creates chain-validation pitfalls** — show what changes when the verifier is offline, hybrid, or ecosystem-specific.

**Best next step:** Move into `how-passport-pki-works`.

---

## Draft Brief 16 — How Passport PKI Works

**Goal:** Translate generic PKI knowledge into the specific trust stack used by e-passports and travel credentials.

**Primary sources:**
- `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`
- `marty-protocol/README.md`
- `marty-core/marty-verification/README.md`

**Reader:** Standards-minded architect + regulated buyer + implementer

**Promise:** Explain how a border or gate verifier can trust passport-backed data without a live call to the issuing country.

**Key beats:**
1. Passport chips need an offline-verifiable trust chain
2. ICAO PKD, CSCA roots, and document signers provide that chain
3. Inspection systems and DTC flows make the hierarchy operational

**Recommended scene shape:** 3-scene standards explainer

**Proposed scenes:**
1. **A passport chip needs a trust chain the verifier can check locally** — frame the travel-specific trust problem.
2. **CSCA, document signers, and PKD keep the chain portable** — explain the passport hierarchy and distribution path.
3. **Inspection systems turn hierarchy into operational trust** — connect the standards model to border lanes, gates, and DTC-style reuse.

**Best next step:** Move into `understanding-csca-certificates` or `what-icao-9303-specifies`.

---

## Draft Brief 17 — Understanding CSCA Certificates

**Goal:** Give readers one focused, practical explanation of the country-level root certificate in passport PKI.

**Primary sources:**
- `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`
- `cryptographic-trust-anchors-primer`
- `longfellow-zk/reference/verifier-service/server/README.md`

**Reader:** Implementer + travel architect

**Promise:** Explain what a CSCA certificate is, how it is distributed, and why rollover and freshness matter as much as the certificate contents.

**Key beats:**
1. CSCA is the country-level trust root for passport signing
2. Master lists and PKD make those roots cross-border usable
3. Rollover, staleness, and trust updates are the real operator concerns

**Recommended scene shape:** 3-scene proof-oriented explainer

**Proposed scenes:**
1. **CSCA is the country-level root** — define the object and its place in the hierarchy.
2. **PKD and master-list distribution make it travel** — explain how other verifiers learn to trust it.
3. **Rollover and stale trust are the real risk** — move from certificate anatomy into operator reality.

**Best next step:** Return to `how-passport-pki-works` or continue into verifier-infrastructure material.

---

## Draft Brief 18 — Mobile Wallet Architectures

**Goal:** Replace the “wallet app” mental model with a layered architectural explanation of how wallets actually work.

**Primary sources:**
- `marty-protocol/SPECIFICATION.md` (§13 Wallet Profile)
- `marty-authenticator/pubspec.yaml`
- `marty-authenticator/DEEP_LINKING.md`

**Reader:** Architect + implementer + product owner

**Promise:** Explain that a wallet is a combination of key custody, credential storage, presentation logic, and transport capability — not just an app with cards in it.

**Key beats:**
1. Wallets combine storage, cryptography, presentation, and user consent surfaces
2. Platform layers shape where keys, credentials, and sessions live
3. Deep links, QR, BLE, and protocol bindings turn the wallet into an exchange endpoint
4. Compatibility is determined by format × issuance protocol × compliance bundle

**Recommended scene shape:** 4-scene bridge

**Proposed scenes:**
1. **A wallet is more than a credential gallery** — define the architecture surface the app has to hold together.
2. **Platforms split storage, cryptography, and UX across layers** — explain how mobile runtime choices shape design.
3. **Protocols and deep links make the wallet an endpoint** — show how issuance and presentation actually enter the app.
4. **Compatibility is a matrix, not a logo wall** — use Wallet Profiles to explain interoperability honestly.

**Best next step:** Move into `secure-enclave-credential-storage` or `credential-portability-across-wallets`.

---

## Draft Brief 19 — Secure Enclave Credential Storage

**Goal:** Explain why wallet security depends as much on key custody as on credential format.

**Primary sources:**
- `marty-core/marty-secure-storage/src/keychain.rs`
- `marty-core/marty-secure-storage/src/database.rs`
- `marty-authenticator/pubspec.yaml`

**Reader:** Security architect + wallet implementer

**Promise:** Show how hardware-backed or platform-backed key storage protects holder binding, and where encrypted databases and app-layer storage still matter.

**Key beats:**
1. Holder binding depends on non-exportable or tightly protected key material
2. Wallet storage is layered: platform key store plus encrypted local credential store
3. Recovery, sync, and portability create trade-offs against maximum device binding

**Recommended scene shape:** 3-scene deep dive

**Proposed scenes:**
1. **Holder binding depends on where keys live** — explain why exportable keys weaken the wallet story.
2. **Secure storage is layered, not singular** — connect keychain / secure element patterns to encrypted databases and app storage.
3. **Security, recovery, and portability pull against each other** — land the trade-offs honestly instead of pretending perfect wallet portability is free.

**Best next step:** Move into `credential-portability-across-wallets`.

---

## Draft Brief 20 — Credential Portability Across Wallets

**Goal:** Clarify the real boundaries of wallet portability without collapsing into vendor marketing or defeatism.

**Primary sources:**
- `business-case-for-credential-portability`
- `marty-protocol/SPECIFICATION.md` (§13 Wallet Profile)
- `marty-authenticator/DEEP_LINKING.md`

**Reader:** Buyer + architect + governance lead

**Promise:** Explain what can move between wallets, what remains constrained by format or policy, and why portability still matters economically.

**Key beats:**
1. Portable format is not the same thing as portable wallet behavior
2. Compatibility depends on credential format, issuance protocol, and compliance bundle
3. Holder binding, attestation, and ecosystem rules limit naïve portability claims
4. Even bounded portability reduces re-verification cost and lock-in

**Recommended scene shape:** 3-scene bridge post

**Proposed scenes:**
1. **Portable format is not portable experience** — separate moving bytes from moving usable trust.
2. **Wallet Profiles make compatibility explicit** — explain the derivation matrix and override reality.
3. **Policy and economics define the real portability boundary** — land the business and governance implications.

**Best next step:** Move into `eudi-wallet-model-explained` or return to `business-case-for-credential-portability`.

---

## Draft Brief 21 — The EUDI Wallet Model Explained

**Goal:** Explain the EUDI wallet as a regulated ecosystem architecture rather than as a single app requirement.

**Primary sources:**
- `eudi-wallet-readiness`
- `marty-protocol/examples/realistic/eu-identity-wallet/trust-profile.json`
- `marty-protocol/SPECIFICATION.md` (§10.4 system compliance profiles; §13 Wallet Profile)

**Reader:** Regulated architect + product lead + implementer

**Promise:** Show how PID, mDL, trust lists, wallet compatibility, and regulatory rollout fit together in one model.

**Key beats:**
1. EUDI is a regulatory and technical bundle, not just a wallet brand
2. The same wallet ecosystem spans SD-JWT-VC PID and mDoc-based licences
3. Trust comes from shared trust-list infrastructure and common specifications
4. The end-of-2026 milestone is real, but the ecosystem is still being refined through ARF, reference implementation, and pilot feedback

**Recommended scene shape:** 4-scene standards bridge

**Proposed scenes:**
1. **EUDI is a bundle of obligations, formats, and trust rules** — frame the problem accurately.
2. **One wallet ecosystem, more than one credential model** — explain PID, mDL, and adjacent attestations.
3. **Trust lists and shared specifications hold the ecosystem together** — connect LoTL, ARF, and compatibility rules.
4. **Rollout is phased, not magical** — land the deadline carefully while acknowledging ongoing pilot and implementation work.

**Best next step:** Move into `compliance-profiles-bridging-regulation` or back into `mobile-wallet-architectures`.

---

## Draft Brief 22 — Why Identity Systems Must Protect Privacy

**Goal:** Reframe privacy in identity systems as a structural design requirement, not a nice-to-have feature or a legal appendix.

**Primary sources:**
- `minimum-disclosure-is-a-policy-problem`
- `data-minimization-in-identity`
- `presentation-policies-minimum-disclosure`
- `selective-disclosure`
- `zero-knowledge-predicates-identity`

**Reader:** Privacy lead + compliance lead + skeptical architect

**Promise:** Show that identity systems over-collect by default unless privacy is made explicit in the protocol and policy model.

**Key beats:**
1. Identity verification drifts toward overcollection when the decision boundary is implicit
2. Privacy-by-design means bounding what the verifier may ask for, not merely hoping the verifier behaves well
3. Local verification, selective disclosure, and explicit policy reduce privacy leakage without making the system less operational
4. Privacy and accountability can coexist when audit and revocation are bounded by policy too

**Recommended scene shape:** 3-scene explainer

**Proposed scenes:**
1. **Overcollection is the default identity failure** — show why legacy verification systems gather more data than the decision requires.
2. **Privacy becomes architecture when disclosure is explicit** — explain Presentation Policies, local verification, and selective disclosure as privacy control surfaces.
3. **Serious systems protect privacy without losing operational discipline** — connect privacy to auditability, freshness, and governed runtime behavior.

**Best next step:** Move into `data-minimization-in-identity` or `privacy-vs-compliance`.

---

## Draft Brief 23 — Data Minimization in Identity

**Goal:** Give one especially concrete, implementation-legible example of how a verifier request becomes smaller and safer when disclosure is policy-bound.

**Primary sources:**
- `data-minimization-in-identity`
- `presentation-policies-minimum-disclosure`
- `deploy-age-verification`

**Reader:** Implementer + privacy/governance reader

**Promise:** Show that data minimization is not abstract legal language; it is the practical difference between asking for a birthdate and asking only whether `age_over_21` is true.

**Key beats:**
1. Verifiers often ask for raw identity fields because the request boundary was never modeled
2. Presentation Policies let the verifier request only the decision-relevant output
3. Reduced disclosure lowers privacy, logging, and audit-scope risk immediately

**Recommended scene shape:** 1-scene proof note

**Proposed scenes:**
1. **One verifier request, reduced correctly** — compare an over-broad identity request with a bounded request that asks only for the answer needed.

**Best next step:** Move into `why-identity-systems-must-protect-privacy` or `deploy-age-verification`.

---

## Draft Brief 24 — Privacy vs Compliance

**Goal:** Resolve the false trade-off between privacy protection and regulated verification requirements.

**Primary sources:**
- `minimum-disclosure-is-a-policy-problem`
- `compliance-profiles-in-practice`
- `compliance-profiles-bridging-regulation`
- `eudi-wallet-readiness`

**Reader:** Compliance lead + privacy lead + regulated architect

**Promise:** Show that compliance gets stronger, not weaker, when disclosure requirements, audit rules, and trust rules are made explicit instead of being buried in application behavior.

**Key beats:**
1. Teams often treat privacy and compliance as opposing forces because legacy systems collect broadly and justify later
2. Policy-driven disclosure allows the verifier to receive only what the regulation or decision actually requires
3. Audit events, revocation checks, and provenance records make the result inspectable without turning the verifier into a surveillance sink
4. Regulated ecosystems still need bounded disclosure, not permanent payload hoarding

**Recommended scene shape:** 3-scene bridge

**Proposed scenes:**
1. **The trade-off is usually a design failure, not a legal inevitability** — name the false choice clearly.
2. **Policy can satisfy the rule without widening the request** — show how compliance and disclosure rules become explicit artifacts.
3. **Auditability is compatible with minimization** — land the operational proof that bounded disclosure still supports review, trust, and revocation.

**Best next step:** Move into `compliance-profiles-in-practice` or `why-marty-is-ready-for-evaluation`.

---

## Draft Brief 25 — How Credential Issuance Works

**Goal:** Explain issuance as a governed lifecycle that happens to use OID4VCI, not as an OAuth callback story pretending to be the whole architecture.

**Primary sources:**
- `issuance-flows`
- `impl-oid4vci`
- `credential-templates-designing-what-gets-issued`
- `flows-orchestrating-identity-lifecycle`
- `marty-protocol/README.md`

**Reader:** Architect + implementer + product owner

**Promise:** Show that issuance begins with trust, template, and approval decisions, then uses OID4VCI to deliver a credential, and finally leaves durable operational evidence behind.

**Key beats:**
1. Issuance starts before the wallet sees a credential offer
2. Authorization-code and pre-authorized-code OID4VCI flows are delivery variants, not different architectures
3. Issuance becomes operational when the system preserves flow, record, and credential state after delivery

**Recommended scene shape:** 3-scene bridge

**Proposed scenes:**
1. **Issuance starts before transport** — show how templates, approval logic, and trust context shape the credential before any wallet exchange begins.
2. **OID4VCI carries delivery, not meaning** — compare authorization-code and pre-authorized-code issuance without letting OAuth absorb the Marty object model.
3. **Issuance becomes durable operational evidence** — land the role of flow state, issuance records, and issued-credential tracking after the transport step completes.

**Best next step:** Move into `presentation-protocols` or `impl-oid4vci`.

---

## Draft Brief 26 — Presentation Protocols

**Goal:** Explain how a verifier asks a bounded question, how a wallet answers it, and how OID4VP carries that exchange without replacing the underlying disclosure policy.

**Primary sources:**
- `presentation-flows`
- `impl-oid4vp`
- `presentation-policies-minimum-disclosure`
- `foundations-verification`
- `selective-disclosure`

**Reader:** Architect + implementer

**Promise:** Show that presentation begins with the verifier's policy-shaped request, uses OID4VP and Presentation Exchange to carry the interaction, and stays safe through nonce binding and holder-controlled disclosure.

**Key beats:**
1. Presentation starts with the verifier's bounded question, not a raw credential dump
2. OID4VP turns policy into a wallet-readable request/response exchange
3. Nonces, holder binding, and same-device vs cross-device flow shape the real runtime behavior

**Recommended scene shape:** 3-scene explainer

**Proposed scenes:**
1. **The verifier asks a policy-shaped question** — show how Presentation Policy defines what the verifier is allowed to request.
2. **OID4VP carries the request and response** — explain presentation definitions, wallet matching, and returned presentation tokens.
3. **Presentation safety depends on binding and flow shape** — land nonce binding, replay prevention, and same-device versus cross-device presentation behavior.

**Best next step:** Move into `interoperability-between-credential-formats` or `impl-oid4vp`.

---

## Draft Brief 27 — Interoperability Between Credential Formats

**Goal:** Give readers a disciplined explanation of cross-format interoperability without promising magical format conversion or pretending all credential ecosystems are interchangeable by default.

**Primary sources:**
- `foundations-credentials`
- `impl-mdoc`
- `impl-oid4vci`
- `impl-oid4vp`
- `marty-protocol/SPECIFICATION.md`

**Reader:** Architect + implementer + standards-minded evaluator

**Promise:** Show that W3C VC, SD-JWT, and mDoc can coexist under one trust and policy model, but interoperability depends on explicit format/protocol/compliance bundles rather than wishful parsing alone.

**Key beats:**
1. Different credential formats still perform the same underlying job
2. Interoperability fails when teams confuse transport or binary encoding with the whole architecture
3. Marty keeps trust, template, disclosure, and deployment stable while formats vary at the edge

**Recommended scene shape:** 3-scene bridge

**Proposed scenes:**
1. **Format diversity is real, but the job is stable** — compare W3C VC, SD-JWT, and mDoc as different envelopes for trusted claims.
2. **Compatibility is bundle-based, not magical** — explain why format, issuance protocol, and compliance profile have to line up together.
3. **One model can survive multiple format families** — land Marty’s value as the layer that keeps trust and policy coherent while edge formats vary.

**Best next step:** Move into `mobile-driving-licenses-iso-18013-5`, `impl-mdoc`, or `one-protocol-many-ecosystems`.

---

## Draft Brief 28 — Mobile Driving Licenses and ISO 18013-5

**Goal:** Explain how a government driving licence becomes a phone-held, verifier-readable credential without reducing the whole story to “put the card in a wallet.”

**Primary sources:**
- `marty-protocol/SPECIFICATION.md`
- `marty-protocol/protocol/wallet-profile/SPECIFICATION.md`
- `marty-protocol/cedar/policies/credential_verification.cedar`
- `marty-protocol/docs/glossary.md`
- `marty-ui/docs/PKI-Trust-Model.md`
- `mobile-wallet-architectures`
- `interoperability-between-credential-formats`

**Reader:** Standards-minded architect + implementer + product owner

**Promise:** Show that ISO 18013-5 does more than define a digital card image. It defines the mDoc structure, reader/device exchange, and trust model that let government-issued driving licences work on personal phones without losing issuer authority or selective disclosure.

**Key beats:**
1. Putting a government licence on a personal phone is harder than making a nicer wallet card
2. ISO 18013-5 uses mDoc, namespace-based requests, and proximity exchange to make the credential usable
3. Issuer-signed data and device-bound proof do different jobs in the same presentation
4. AAMVA, EUDI, wallet compatibility, and offline/runtime policy determine whether the standard survives production

**Recommended scene shape:** 3-scene standards bridge

**Proposed scenes:**
1. **A phone-held licence still has to feel like government trust** — frame the tension between consumer-wallet convenience and institutional assurance.
2. **mDoc combines issuer-signed data with device-bound proof** — explain the structure and exchange model that makes ISO 18013-5 more than a visual wallet spec.
3. **Trust lists and runtime policy decide whether mDL works in production** — land AAMVA/EUDI trust distribution, holder binding, wallet compatibility, and offline/freshness trade-offs.

**Best next step:** Move into `how-governments-build-identity-pki` for the broader trust infrastructure, then back to `mobile-wallet-architectures` for the holder-side runtime.

---

## Draft Brief 29 — How Governments Build Identity PKI

**Goal:** Explain how governments create portable trust for passports, mobile licences, and wallet-era credentials without relying on a central phone-home verifier model.

**Primary sources:**
- `marty-ui/docs/PKI-Trust-Model.md`
- `marty-protocol/docs/implementation-guide.md`
- `marty-protocol/docs/glossary.md`
- `marty-protocol/SPECIFICATION.md`
- `how-passport-pki-works`
- `what-icao-9303-specifies`
- `mobile-driving-licenses-iso-18013-5`

**Reader:** Standards-minded architect + regulated buyer + operator

**Promise:** Show that government identity PKI is not just “countries have certificates.” It is a layered operating model of sovereign roots, delegated signers, trust-list distribution, and refresh discipline that lets other verifiers trust official credentials at scale.

**Key beats:**
1. Government trust has to travel farther than one agency boundary
2. Root authorities and shorter-lived signers separate sovereignty from operational signing
3. PKD, AAMVA DTS, and EU trusted lists distribute that trust without making every verifier call the issuer
4. Key rollover, revocation, cache freshness, and offline tolerance are the real operational burden

**Recommended scene shape:** 3-scene standards bridge

**Proposed scenes:**
1. **Government trust has to travel farther than one agency boundary** — frame why passports, mDLs, and national identity systems need portable trust rather than bilateral API trust.
2. **Root authorities, signers, and trust lists make sovereign PKI portable** — explain CSCA/IACA roots, document signers, and the distribution channels that carry them into verifier runtimes.
3. **Rollover and freshness are the real operating burden** — land the operator reality of stale roots, revocation policy, and offline cache windows.

**Best next step:** Move into `how-passport-pki-works` for the travel exemplar, then `mobile-driving-licenses-iso-18013-5` for the device-bound government-ID variant.

---

## Draft Brief 30 — Trust Profile Evaluation and Failure Handling

**Goal:** Turn the short Trust Profile explainer into an entity-level technical walkthrough that shows how trust sources, algorithms, revocation, freshness, and failure handling combine into one governed security boundary.

**Canonical role note:** This brief is the specialized runtime follow-on to `trust-profiles-explained`; keep it focused on trust evaluation order, freshness posture, and fail-closed behavior rather than re-explaining the concept introduction.

**Primary sources:**
- `trust-profiles-explained`
- `trust-profiles`
- `marty-protocol/README.md`
- `marty-protocol/SPECIFICATION.md`
- `marty-protocol/protocol/trust-profile/SPECIFICATION.md`
- `understanding-trust-anchors`
- `building-trust-registries-at-scale`

**Reader:** Implementer + security architect + platform admin

**Promise:** Show that a Trust Profile is not just a list of roots. It is the explicit trust contract that controls who counts, how validation runs, when stale trust must fail closed, and how one registry can serve multiple compliance environments without forking verifier code.

**Key beats:**
1. A Trust Profile is the security boundary, not a settings drawer
2. Trust sources, allowed algorithms, supported formats, and time policy define real verification behavior
3. Trust evaluation and trust-failure handling are normative, auditable steps rather than library side effects
4. Compatible compliance codes let one governed trust package serve more than one standards profile when the registry is shared

**Recommended scene shape:** 3-scene technical deep dive

**Proposed scenes:**
1. **A Trust Profile is the security boundary** — explain why no serious issuance or verification should happen before this object is explicit and compliant.
2. **Trust sources and time policy turn roots into runtime behavior** — show how `ROOT_CA`, `TRUST_LIST`, `PKD_URL`, `PINNED_ISSUER`, revocation, and freshness together define how trust really behaves.
3. **Evaluation and failure handling make trust auditable** — walk through the verification algorithm, fail-closed rules, and hybrid/shared-registry configurations that keep trust inspectable.

**Best next step:** Move into `building-trust-registries-at-scale`, then later into `how-everything-works-together`.

---

## Draft Brief 31 — Credential Templates Explained (Deep)

**Goal:** Expand the existing credential-template explainer into a technical walkthrough of the master issuance contract: claims, compliance, cryptographic artifacts, validity, privacy posture, and lifecycle state.

**Primary sources:**
- `credential-templates-designing-what-gets-issued`
- `credential-templates`
- `marty-protocol/README.md`
- `marty-protocol/SPECIFICATION.md`
- `marty-protocol/protocol/credential-template/SPECIFICATION.md`
- `how-credential-issuance-works`
- `mip-json-schemas-walkthrough`

**Reader:** Implementer + program/compliance architect

**Promise:** Show that a Credential Template is not merely a schema file. It is the reusable issuance contract that decides what a credential means, how long it counts, how privacy is shaped before transport, and which cryptographic or compliance surfaces make the result publishable at all.

**Key beats:**
1. A template decides more than claim names; it defines the whole issuance contract
2. Claims, validity rules, privacy posture, and issuer artifacts work together before any OID4VCI delivery happens
3. Template lifecycle and derivation rules keep issuance reusable and wallet compatibility explicit instead of ad hoc
4. Active vs draft vs deprecated status protects flows from quietly issuing the wrong thing

**Recommended scene shape:** 3-scene technical deep dive

**Proposed scenes:**
1. **A template is the master issuance contract** — reframe the template as the object that decides what kind of credential may exist at all.
2. **Claims, privacy posture, and issuer artifacts govern issuance before transport** — show how schema, derived claims, disclosure intent, keys, certs, or DIDs shape the credential before delivery.
3. **Lifecycle and derivation keep templates reusable** — explain active/draft/deprecated states, workflow references, and wallet-compatibility derivation so teams stop treating templates as disposable payload maps.

**Best next step:** Move into `how-credential-issuance-works`, then later into `how-everything-works-together`.

---

## Draft Brief 32 — Presentation Policies Explained (Deep)

**Goal:** Turn the high-level Presentation Policy explainer into a technical walkthrough of how verifiers express required claims, predicates, freshness, holder binding, and fallback behavior without rewriting application code.

**Primary sources:**
- `presentation-policies-minimum-disclosure`
- `presentation-policies`
- `marty-protocol/README.md`
- `marty-protocol/SPECIFICATION.md`
- `marty-protocol/protocol/presentation-policy/SPECIFICATION.md`
- `presentation-protocols`
- `zero-knowledge-predicates-identity`
- `selective-disclosure`

**Reader:** Implementer + privacy architect + policy author

**Promise:** Show that a Presentation Policy is a machine-readable verifier contract, not a wishlist of fields. It decides which claims matter, when predicates are preferred, when raw fallback is acceptable, how holder binding is required, and how verification changes safely as business rules evolve.

**Key beats:**
1. A presentation policy begins with the verifier’s bounded question, not the wallet’s payload inventory
2. Required claims, predicate specs, fallback policies, and accepted credential types define the proof shape explicitly
3. Holder binding and freshness rules make the policy operational rather than purely informational
4. Policy churn belongs in data diffs and versioned policy objects, not in verifier code branches

**Recommended scene shape:** 3-scene technical deep dive

**Proposed scenes:**
1. **A presentation policy is a verifier contract** — show how the object defines the least information needed for a decision.
2. **Predicates, fallback, and holder binding shape the proof request** — explain how privacy, ZK support, and proof-of-possession all sit inside the policy boundary.
3. **Dynamic policy is how verification changes without code drift** — land why policy updates belong in governed configuration and how stateless evaluation differs from full flow orchestration.

**Best next step:** Move into `presentation-protocols`, then later into `how-everything-works-together`.

---

## Draft Brief 33 — Deployment Profiles Explained (Deep)

**Goal:** Expand the deployment-profile explainer into an operational deep dive that shows how real endpoints package trust, policies, cache rules, device assignments, and update behavior without changing the underlying verification model.

**Primary sources:**
- `deployment-profiles-from-design-to-production`
- `deployment-profiles`
- `marty-protocol/README.md`
- `marty-protocol/SPECIFICATION.md`
- `marty-protocol/protocol/deployment-profile/SPECIFICATION.md`
- `deployment-profiles-in-practice`
- `offline-verification-guide`

**Reader:** Operator + platform architect + implementer

**Promise:** Show that a Deployment Profile is the runtime contract for real endpoints. It packages the trust and policy layer for lanes, devices, kiosks, mobile surfaces, and APIs while keeping online, offline, and hybrid behavior explicit instead of buried in environment-specific code.

**Key beats:**
1. Deployment Profiles are where abstract trust and disclosure become real runtime envelopes
2. Network mode, lane hierarchy, and device assignment decide how a deployment actually behaves
3. Cache TTLs, update channels, issuance capability, and operator mode turn architecture into operations
4. One trust model can survive many environments only because the deployment contract is explicit

**Recommended scene shape:** 3-scene technical deep dive

**Proposed scenes:**
1. **A deployment profile is the runtime contract** — explain why trust and presentation logic need an operational wrapper before they can run anywhere safely.
2. **Network mode, lanes, and device assignment define runtime shape** — show how physical or logical endpoints become legible through one hierarchy.
3. **Update channels and cache rules turn architecture into operations** — land the operator-facing details that keep offline and hybrid environments credible.

**Best next step:** Move into `deployment-profiles-in-practice`, then later into `how-everything-works-together`.

---

## Draft Brief 34 — Trust Registries Explained

**Goal:** Give readers the clearest possible explanation of how ecosystem governance becomes loadable trust material for verifiers.

**Primary sources:**
- `building-trust-registries-at-scale`
- `guides/03-world-building/protocol-ecosystem-map.md`
- `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`
- `deploy-membership-credentials`

**Reader:** Architect + operator + governance lead

**Promise:** Show that a trust registry is not just an issuer directory. It is the shared trust-distribution layer that tells verifiers which issuers and anchors count across a multi-organization ecosystem.

**Key beats:**
1. Governance authority has to become machine-readable trust state before verifiers can use it
2. Registries distribute more than names: roots, issuer status, validity windows, and change history
3. A registry is ecosystem-facing, while a Trust Profile is verifier-local and runtime-facing
4. Federation and offline verification only work cleanly when registry state can travel and stay current

**Recommended scene shape:** 3-scene trust-infrastructure explainer

**Proposed scenes:**
1. **Ecosystem trust needs a shared directory** — show why private verifier allowlists do not scale once multiple issuers belong to the same network.
2. **Registries publish authority as current trust state** — explain roots, issuer metadata, jurisdiction, sequence, and status as registry responsibilities rather than incidental fields.
3. **Local verifiers consume registries without centralizing decisions** — connect shared registries to local Trust Profiles, cache behavior, and partner autonomy.

**Best next step:** Move into `discovering-trusted-issuers` or `building-trust-registries-at-scale`.

---

## Draft Brief 35 — Federation in Identity Systems

**Goal:** Explain federation as shared trust across independent organizations rather than as a login redirect or a centralized partner platform.

**Primary sources:**
- `deploy-membership-credentials`
- `four-actors-of-identity-systems`
- `guides/03-world-building/protocol-ecosystem-map.md`
- `how-governments-build-identity-pki`

**Reader:** Ecosystem architect + product lead + operator

**Promise:** Show how separate issuers and verifiers can honor shared credentials under one trust framework without surrendering local verification, local policy, or operational resilience.

**Key beats:**
1. Bilateral API trust does not scale once credentials have to cross organizational boundaries
2. Federation depends on shared governance, shared registries, and shared trust packages
3. Local verifiers still keep their own policy and runtime even inside a shared network
4. Airline, education, and government examples all prove the same architecture shape

**Recommended scene shape:** 3-scene ecosystem bridge

**Proposed scenes:**
1. **Cross-org verification breaks when trust stays bilateral** — frame why separate organizations cannot keep solving issuer legitimacy one partner at a time.
2. **Shared governance and registries make federation legible** — explain the common trust layer that lets issuers and verifiers recognize each other under one framework.
3. **Local verification preserves autonomy inside a shared network** — land the privacy, resilience, and operator payoff of federation that does not phone home for every decision.

**Best next step:** Move into `trust-registries-explained` or `discovering-trusted-issuers`.

---

## Draft Brief 36 — Verifier Infrastructure

**Goal:** Explain what a real verifier stack needs beyond a cryptographic library or one policy function.

**Primary sources:**
- `offline-verification-guide`
- `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`
- `marty-ui/services/trust_profile/main.py`
- `marty-core/marty-verification/README.md`

**Reader:** Implementer + operator + platform architect

**Promise:** Show that a verifier is an infrastructure surface with trust sync, status caches, policy evaluation, audit, and failure handling — not just a signature checker.

**Key beats:**
1. A verifier needs a control plane for trust, issuer state, revocation, and policy
2. Registry sync, snapshots, and caches are what keep verifier fleets current enough to operate locally
3. Audit events, metrics, and degraded modes are part of the verifier, not support tooling bolted on later
4. Deployment posture determines how current trust can remain before acceptance has to narrow or fail

**Recommended scene shape:** 3-scene runtime deep dive

**Proposed scenes:**
1. **A verifier is a system, not a function** — inventory the trust and policy objects the runtime needs before one credential is evaluated.
2. **Snapshots, caches, and sync keep verifier fleets current** — connect trust snapshots, CRL caches, registry sync, and edge runtimes into one live architecture picture.
3. **Health signals and failure ladders make verification trustworthy** — show why freshness state, audit, and degraded handling belong inside the verifier contract itself.

**Best next step:** Move into `offline-verification-guide` or `deployment-profiles-in-practice`.

---

## Draft Brief 37 — Discovering Trusted Issuers

**Goal:** Give readers one clear explanation of how a verifier finds the issuers that count before live credential validation begins.

**Primary sources:**
- `trust-registries-explained`
- `building-trust-registries-at-scale`
- `marty-ui/services/trust_profile/main.py`
- `marty-core/marty-verification/src/trust_anchor/registry.rs`
- `understanding-trust-anchors`

**Reader:** Architect + implementer + verifier owner

**Promise:** Explain how trust lists, root chains, pinned issuers, and DID-based identifiers all solve the same problem: defining the accepted issuer boundary before signature validation starts.

**Key beats:**
1. Discovery is a trust-boundary problem that happens before validation, not during it
2. Registries, roots, pinned identifiers, and DID resolution are different discovery mechanisms for the same job
3. Issuer state, jurisdiction, and relationship status shape which issuers are in scope locally
4. Good discovery has to be cacheable, scoped, and auditable for real verifier runtimes

**Recommended scene shape:** 3-scene trust-discovery explainer

**Proposed scenes:**
1. **Issuer legitimacy must be known before signature math starts** — explain why clean cryptography is not enough without an accepted issuer set.
2. **Registries, roots, and identifiers are discovery paths** — compare trust lists, PKD, root CAs, pinned issuers, and DID-based trust sources.
3. **Discovery becomes useful only when it is scoped and current** — land jurisdiction filters, trust state, sync freshness, and auditability as runtime concerns.

**Best next step:** Move into `verifier-infrastructure` or `understanding-trust-anchors`.

---

## Draft Brief 38 — What Is a Digital Identity Wallet?

**Goal:** Create the clearest possible wallet explainer for readers who still think a wallet is either a prettier account app or a stack of digital cards.

**Primary sources:**
- `mobile-wallet-architectures`
- `product-catalog/products/authenticator/overview.md`
- `marty-authenticator/DEEP_LINKING.md`
- `credential-lifecycle`
- `issuers-holders-verifiers-explained`

**Reader:** Product owner + architect + curious buyer

**Promise:** Explain a digital identity wallet as the holder-side control surface for receiving, holding, and presenting credentials under local control.

**Key beats:**
1. A wallet is not just a gallery of cards or a branded login app
2. Wallets receive credential offers, hold credentials locally, and answer presentation requests
3. Trust, consent, and device control are why the wallet matters in the issuer/holder/verifier model

**Recommended scene shape:** 3-scene explainer

**Proposed scenes:**
1. **A wallet is the holder-side control point** — replace the “cards in an app” mental model with the wallet’s real role in the system.
2. **Receiving, holding, and presenting are different jobs** — show how issuance offers, storage, and verifier requests make the wallet an active participant.
3. **Trust, consent, and local control make the wallet matter** — land why wallets change privacy, portability, and user agency.

**Best next step:** Move into `mobile-wallet-architectures` or `device-binding-and-credential-security`.

---

## Draft Brief 39 — Device Binding and Credential Security

**Goal:** Explain why serious wallet security is really a device-binding story, not just a generic “encrypt the database” story.

**Primary sources:**
- `secure-enclave-credential-storage`
- `holder-binding-beyond-biometrics`
- `product-catalog/products/authenticator/roadmap.md`
- `marty-authenticator/DEEP_LINKING.md`
- `marty-protocol/SPECIFICATION.md`

**Reader:** Security architect + product owner + wallet implementer

**Promise:** Show how device binding limits credential theft and sharing, and why migration, backup, and recovery become the real design consequences.

**Key beats:**
1. Copyable credentials weaken holder control even when signatures remain valid
2. Device binding combines key custody, local authentication, and sometimes attestation
3. Backup, replacement, and re-binding are where the security choice becomes operationally visible

**Recommended scene shape:** 3-scene constraint deep dive

**Proposed scenes:**
1. **Copied credentials are a holder-binding failure** — define the threat clearly before diving into mechanisms.
2. **Device binding is a stack, not a single hardware checkbox** — connect key stores, local auth, proof-of-possession, and device trust signals.
3. **Migration and recovery expose the real trade-off** — show why stronger binding raises the cost of seamless transfer and backup.

**Best next step:** Move into `secure-enclave-credential-storage` or `holder-binding-beyond-biometrics`.

---

## Draft Brief 40 — Selective Disclosure in Wallets

**Goal:** Explain selective disclosure from the holder-side experience instead of from the mechanism side alone.

**Primary sources:**
- `selective-disclosure`
- `marty-authenticator/lib/widgets/selective_disclosure_sheet.dart`
- `presentation-protocols`
- `data-minimization-in-identity`
- `marty-authenticator/DEEP_LINKING.md`

**Reader:** Product owner + wallet implementer + privacy architect

**Promise:** Show how a wallet translates a verifier’s bounded request into an understandable sharing decision with required fields, optional fields, and visible privacy trade-offs.

**Key beats:**
1. Selective disclosure in a wallet is consent mediation, not just cryptographic capability
2. Required and optional claims have to be legible to the holder at decision time
3. Risk cues, privacy modes, and request context help the holder stay inside the intended boundary

**Recommended scene shape:** 3-scene operational explainer

**Proposed scenes:**
1. **A verifier request still has to make sense to the holder** — show why policy-shaped requests need a human-readable translation layer.
2. **Wallets turn policy into claim choices** — explain required attributes, optional disclosures, and request-specific selection.
3. **Risk labels and privacy modes keep consent bounded** — land the UX patterns that keep disclosure disciplined without making the flow unusable.

**Best next step:** Move into `wallet-ux-design-for-identity` or `selective-disclosure`.

---

## Draft Brief 41 — Wallet UX Design for Identity

**Goal:** Turn wallet UX into a serious identity-systems topic instead of letting it degrade into generic mobile-design advice.

**Primary sources:**
- `marty-authenticator/lib/widgets/selective_disclosure_sheet.dart`
- `product-catalog/products/authenticator/roadmap.md`
- `product-catalog/products/authenticator/overview.md`
- `marty-authenticator/DEEP_LINKING.md`
- `eudi-wallet-model-explained`

**Reader:** Product lead + architect + UX-minded implementer

**Promise:** Show that good identity-wallet UX makes requester intent, privacy boundaries, device trust, and recovery paths legible instead of hiding them behind glossy screens.

**Key beats:**
1. Identity UX fails when the wallet cannot explain who is asking and why
2. Trust signals and disclosure controls need to feel clear without becoming noisy or exhausting
3. Recovery, offline flow, and refusal paths matter as much as the happy-path presentation screen

**Recommended scene shape:** 3-scene product/architecture bridge

**Proposed scenes:**
1. **Trust fails when the wallet cannot explain itself** — frame the UX problem as a trust problem, not an aesthetics problem.
2. **Good identity UX makes request, requester, and risk legible** — show what a serious wallet has to reveal at decision time.
3. **Recovery, offline flow, and refusal paths decide whether users keep trusting the wallet** — land the operational UX layer most product demos skip.

**Best next step:** Move into `eudi-wallet-model-explained` or `deploy-age-verification`.

---

## Draft Brief 42 — Identity Governance Models

**Goal:** Explain identity governance as the question of who decides which issuers, rules, and operating boundaries count before any registry or policy-language details appear.

**Primary sources:**
- `compliance-profiles-in-practice`
- `guides/03-world-building/protocol-ecosystem-map.md`
- `product-catalog/pricing-and-packaging.md`
- `product-catalog/offering-matrix.md`
- `marty-protocol/docs/design-principles.md`

**Reader:** Buyer + architect + governance lead

**Promise:** Show how centralized, federated, and ecosystem-led governance models differ, why each one creates different operational pressure, and how Marty keeps governance explicit instead of burying it in application-by-application exceptions.

**Key beats:**
1. Governance answers who gets to decide issuer legitimacy, policy boundaries, and change control
2. Centralized, federated, and ecosystem-led governance optimize different kinds of control
3. Marty expresses those differences through profiles, policy sets, and governed runtime surfaces rather than custom-code drift

**Recommended scene shape:** 3-scene governance framing bridge

**Proposed scenes:**
1. **Every credential ecosystem inherits a governance model** — frame governance as unavoidable once more than one issuer or verifier matters.
2. **Centralized, federated, and ecosystem-led models optimize different control shapes** — compare enterprise-owned, shared-network, and accreditation-driven arrangements.
3. **Governed objects beat hidden admin habits** — land the Marty move: governance belongs in explicit profiles, policies, and operating surfaces.

**Best next step:** Move into `rbac-vs-abac` or `policy-engines-for-identity-systems`.

---

## Draft Brief 43 — RBAC vs ABAC

**Goal:** Compare role-based and attribute-based access control in identity systems without turning the post into either a generic IAM explainer or a Cedar syntax tutorial.

**Primary sources:**
- `cedar-policies-for-identity-governance`
- `marty-microservices-framework/mmf/framework/authorization/adapters/abac_engine.py`
- `marty-ui/packages/marty_common/cedar_actions.py`
- `marty-protocol/docs/cedar-policies.md`
- `deploy-enterprise-access`

**Reader:** Security architect + implementer + platform admin

**Promise:** Show when roles are enough, when attributes become necessary, and why Marty uses Cedar to support both without forcing teams into a separate authorization architecture for every surface.

**Key beats:**
1. RBAC is simple and legible, but coarse once exceptions multiply
2. ABAC handles contextual decisions, but expands the policy surface and testing burden
3. Cedar lets one governed policy layer combine roles, attributes, and explicit deny rules

**Recommended scene shape:** 3-scene authorization comparison

**Proposed scenes:**
1. **Roles get you moving fast, and then start leaking exceptions** — show where static group mapping becomes too blunt.
2. **Attributes recover nuance but widen the decision surface** — explain why department, resource state, and environment context change the model.
3. **Cedar can host both without splitting the architecture** — land the Marty pattern: actions stay legible, attributes stay explicit, and policy remains governed data.

**Best next step:** Move into `policy-engines-for-identity-systems` or `cedar-policies-for-identity-governance`.

---

## Draft Brief 44 — Policy Engines for Identity Systems

**Goal:** Explain what a policy engine actually does in an identity stack and why Marty chose Cedar instead of opaque rule objects or hardcoded authorization branches.

**Primary sources:**
- `marty-protocol/SPECIFICATION.md`
- `marty-protocol/docs/design-principles.md`
- `marty-protocol/docs/cedar-integration-guide.md`
- `marty-ui/packages/marty_common/cedar_engine.py`
- `marty-ui/services/organization/application/policy_set_use_cases.py`

**Reader:** Implementer + architect + evaluator

**Promise:** Show that policy engines are the runtime surface for access, verification, and approval decisions, and explain why deny-by-default, validation, and auditability matter more than trendy policy-language debates.

**Key beats:**
1. Hardcoded identity rules decay into application sprawl and hidden exceptions
2. A policy engine evaluates principal, action, resource, and context at runtime instead of scattering rules across services
3. Cedar fits MIP because policies can be validated, activated, and audited as governed artifacts

**Recommended scene shape:** 3-scene policy-architecture bridge

**Proposed scenes:**
1. **Hardcoded identity rules do not scale** — show why embedding policy in handlers and middleware produces drift.
2. **A policy engine turns runtime decisions into a defined evaluation surface** — explain principal/action/resource/context as the stable shape.
3. **Cedar fits MIP because policy can be validated, activated, and audited as data** — land the design-principles and PolicySet lifecycle payoff.

**Best next step:** Move into `cedar-policies-for-identity-governance` or `deploy-enterprise-access`.

---

## Draft Brief 45 — Governing Credential Ecosystems

**Goal:** Explain why multi-issuer credential ecosystems need shared governance frameworks before trust registries and federation mechanics can work cleanly.

**Primary sources:**
- `guides/03-world-building/protocol-ecosystem-map.md`
- `building-trust-registries-at-scale`
- `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`
- `marty-protocol/SPECIFICATION.md`
- `product-catalog/pricing-and-packaging.md`

**Reader:** Buyer + ecosystem architect + governance lead

**Promise:** Show how ecosystem governance decides who may issue, what counts as compliant participation, and how rule changes travel — while keeping trust registries and local verifier policy as downstream consequences rather than the whole story.

**Key beats:**
1. Portable credentials fail when each verifier reinvents issuer legitimacy privately
2. Governance frameworks decide membership, obligations, revocation consequences, and change cadence across the network
3. Marty operationalizes those decisions through compliance, trust, and registry surfaces without centralizing every runtime check

**Recommended scene shape:** 3-scene ecosystem governance bridge

**Proposed scenes:**
1. **Portable credentials need shared ecosystem rules first** — show why transport alone does not make an ecosystem trustworthy.
2. **Frameworks decide membership, obligations, and rule change cadence** — connect accreditation, compliance bundles, and trust participation.
3. **Registries distribute the outcome, but governance stays upstream** — keep the boundary clear between the rule-setting framework and the infrastructure that publishes its decisions.

**Best next step:** Move into `trust-registries-explained` or `federation-in-identity-systems`.

---

## Draft Brief 46 — Selective Disclosure Explained *(Legacy merge surface)*

**Goal:** Preserve any uniquely stronger mechanism-comparison material from the longer explainer, then fold it into `selective-disclosure` so the privacy branch keeps one canonical mechanism entry instead of two near-duplicate front doors.

**Canonical role note:** `minimum-disclosure-is-a-policy-problem` remains the policy-first privacy entry. `selective-disclosure` is now the canonical mechanism explainer. Treat `selective-disclosure-explained` as a merge / retire surface unless it proves a reader job the canonical explainer still cannot do.

**Primary sources:**
- `selective-disclosure`
- `sd-jwt-selective-disclosure-deep-dive`
- `zero-knowledge-predicates-identity`
- `presentation-policies-minimum-disclosure`
- `data-minimization-in-identity`

**Reader:** Privacy architect + implementer + skeptical buyer

**Promise:** Keep the strongest mechanism-comparison detail without forcing readers to choose between two articles that both answer the same “which mechanism fits this policy boundary?” question.

**Key beats:**
1. `selective-disclosure` already owns the policy-boundary -> mechanism-choice arc
2. Only preserve detail from `selective-disclosure-explained` if it materially sharpens the canonical comparison
3. Route narrower follow-on questions to `sd-jwt-selective-disclosure-deep-dive` or `selective-disclosure-in-wallets` instead of maintaining a second general explainer

**Recommended action:** editorial merge / retire review, not a net-new standalone draft

**Merge checklist:**
1. Compare tables and examples in `selective-disclosure-explained` against the live `selective-disclosure` article
2. Move any clearly better comparison phrasing or runtime-fit framing into `selective-disclosure`
3. Preserve distinct handoffs to `sd-jwt-selective-disclosure-deep-dive` and `selective-disclosure-in-wallets`
4. Retire or redirect `selective-disclosure-explained` if no distinct reader job remains

**Best next step:** Route the privacy path through `selective-disclosure`, then branch to `sd-jwt-selective-disclosure-deep-dive` or `selective-disclosure-in-wallets`.

---

## Draft Brief 47 — Why the Marty Protocol Exists

**Goal:** Explain why MIP had to exist after the category reframe: once identity is treated as shared infrastructure, the ecosystem still needs a minimum shared model that multiple implementations can automate.

**Canonical role note:** This brief should stay narrower than both `why-identity-needs-a-protocol` and `the-marty-identity-model`; it exists to answer the middle question, “why does the protocol need a minimum shared grammar at all?”

**Primary sources:**
- `why-identity-needs-a-protocol`
- `marty-protocol/README.md`
- `introducing-mip`
- `the-marty-identity-model`
- `why-marty-is-ready-for-evaluation`

**Reader:** Architect + evaluator + skeptical product lead

**Promise:** Show that MIP is not another vendor stack pitch. It is the minimum automatable grammar that keeps trust, issuance, disclosure, deployment, and flows from being rediscovered in incompatible ways.

**Key beats:**
1. The platform-vs-protocol category shift creates a second question: what is the minimum shared model?
2. MIP answers that question with five core primitives plus supporting abstractions rather than one monolithic runtime
3. Shared schemas, Cedar policy surfaces, and conformance fixtures are what make the protocol operational instead of rhetorical
4. The protocol exists so implementations can differ without letting the identity model dissolve back into custom integration drift

**Recommended scene shape:** 3-scene protocol motivation bridge

**Proposed scenes:**
1. **The category reframe creates a protocol problem** — once identity is infrastructure, teams still need shared objects instead of repeated platform logic.
2. **The five primitives are the minimum automatable grammar** — explain why MIP chooses a small stable model instead of rebuilding the architecture for every standard or vendor.
3. **Artifacts make the protocol real** — land schemas, policy surfaces, and conformance as the reason the model deserves evaluation.

**Best next step:** Move into `the-marty-identity-model` or `why-marty-is-ready-for-evaluation`.

---

## Draft Brief 48 — How Everything Works Together

**Goal:** Give readers the missing capstone synthesis: one end-to-end explanation of how the five MIP primitives cooperate in a live system.

**Primary sources:**
- `the-marty-identity-model`
- `flows-orchestrating-identity-lifecycle`
- `five-primitives-in-one-picture`
- `marty-protocol/README.md`
- `same-trust-model-different-runtime`
- `one-protocol-many-ecosystems`

**Reader:** Architect + implementer + evaluator

**Promise:** Show the full model in motion so readers can mentally simulate a real issuance/presentation/verification system instead of keeping five primitives in separate mental boxes.

**Key beats:**
1. A real credential journey touches all five primitives, not just one or two
2. Each primitive answers a different recurring question and hands cleanly to the next
3. Runtime and ecosystem variation change the packaging, not the underlying composition
4. Once the composition is clear, standards and transport protocols attach to the model instead of replacing it

**Recommended scene shape:** 3-scene capstone synthesis

**Proposed scenes:**
1. **One credential journey activates every primitive** — walk one issuance-to-verification path from trust and template through flow, policy, and deployment.
2. **The primitives constrain one another instead of duplicating one another** — show how each object narrows the next question rather than spawning new application logic.
3. **The same composition survives runtime and ecosystem change** — land the Marty claim that the model holds across cloud, edge, travel, enterprise, and other ecosystems.

**Best next step:** Move into `mip-json-schemas-walkthrough` or `trust-profiles-explained`.

## Related

- `course-manuscript-outline.md` — where these briefs slot into the larger editorial collections
- `published-content-source-map.md` — all current source material feeding these briefs
- `../04-plot-and-structure/series-arc.md` — the deeper logic these briefs should reinforce
- `../06-revision/publication-post-packets.md` — the expanded structural brief built from these
- `../06-revision/publication-evidence-packets.md` — where required evidence is staged before drafting

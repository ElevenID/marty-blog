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

## Current overlap guardrails

- **Privacy/data-minimization branch:** when `privacy-data-minimization` appears in proof-surface lists, treat it as the guide-side source surface unless the card is explicitly planning the duplicate live blog slug. Use `data-minimization-in-identity` for blog-side handoffs and supporting proof-note references.

## How To Use These Cards

1. Pick the post card that matches the topic being drafted.
2. Use the post-level metadata to preserve the right gravity well, reader, narrator, and navigation role.
3. Use the scene cards to structure the draft.
4. Write prose only after the CAP role, proof surface, and transition logic are clear.

## Current scene-card overlap guardrails

Use these rules before approving any contested post card or scene stack:

- **Guide-owned operational slugs stay canonical.** For `deployment-*`, `offline-verification-guide`, `impl-oid4vci`, `impl-oid4vp`, and similar implementation/deployment/how-to surfaces, keep the guide as the canonical destination. A blog card only survives if it has a distinct bridge / evaluation / overview job under a different slug.
- **Selective-disclosure roles must not split into two front-door explainers.** `minimum-disclosure-is-a-policy-problem` remains the policy-first privacy entry; `selective-disclosure` stays the canonical mechanism explainer; `selective-disclosure-explained` is now only a legacy merge / retire surface; `selective-disclosure-in-wallets` owns the holder-UX angle; `sd-jwt-selective-disclosure-deep-dive` owns the standards-specific implementation angle.
- **Trust-profile duplication should not survive by inertia.** `trust-profiles-explained` remains the canonical concept entry. The surviving follow-on scene stack is `trust-profile-evaluation-and-failure-handling`; keep it focused on runtime trust evaluation, freshness, and fail-closed behavior or merge it away.
- **Protocol-overview cards must preserve the role split.** `why-identity-needs-a-protocol` = category case; `why-the-marty-protocol-exists` = minimum shared model; `introducing-mip` = launch and artifact reveal; `the-marty-identity-model` = stable grammar and synthesis.

## Current factual wording guardrails

- **EUDI timing claims:** every scene that mentions EUDI deadlines must name the actor, obligation, and timing window. Prefer `Member States are expected to make at least one wallet available by the end of 2026` over vague `by 2026` language.
- **MIP repo-state claims:** scene proof surfaces must verify version numbers, schema counts, conformance assets, and compliance-profile inventories against the current `marty-protocol` repo. Use `currently includes` for mutable inventories unless the scene is explicitly anchored to a fixed release artifact.
- **Post-quantum framing:** use `ML-KEM`, `ML-DSA`, and `SLH-DSA`, and frame the story around preparedness, long credential lifetimes, harvest-now / decrypt-later risk, and algorithm agility. Do not script exact quantum-arrival dates without a cited source.
- **Publication timestamps:** treat `date` and `updatedDate` as editorial provenance. Scheduling belongs in roadmap / status metadata, not in live article timestamps.

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

## Wave 1 — Front-door recovery post cards

These cards repair the Start Here path so readers can reach the stronger flagship and evaluation material with a shared foundation instead of stepping directly onto half-built scaffolding.

### Post Card — What Is Digital Identity?

- **Slug:** `what-is-digital-identity`
- **CAP unit alignment:** `category_reframe`
- **Gravity well:** `Category Reframe`
- **Primary reader:** `sponsor, architect, implementer`
- **Lead narrator:** `Daniel`
- **Navigation role:** `start-here entry point`
- **Post-level reader shift:** `confused -> oriented`
- **Dominant tensions:** `account lookup vs reusable claims`; `phone-home verification vs local verification`; `physical documents vs machine-readable proof`
- **Proof surfaces:** `foundations-identity`, `centralized-vs-verifiable`, `foundations-verification`, `why-identity-needs-a-protocol`
- **Default handoff:** `verifiable-credentials-explained`

#### Scene Card 1 — Identity is more than an account record
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `replaces vague familiarity with a concrete definition of digital identity as reusable evidence`
- **Focal entities:** `protagonist_reader`, `antagonist_system`
- **Setting:** `public_social_market`
- **Stakes:** `operational`, `interoperability`
- **Active primitives / abstractions:** `digital identity as claims`; `credential as reusable evidence (held in reserve)`
- **Scene summary:** `Define digital identity as machine-readable claims about a person, organization, or device rather than as a single account in a vendor system.`
- **Proof surfaces:** `foundations-identity`, `centralized-vs-verifiable`
- **Handoff:** `move from definition into the trust triangle that makes those claims portable`

#### Scene Card 2 — Issuer, holder, and verifier make identity portable
- **CAP role:** `trigger`
- **Event type:** `reframe`
- **Reader-state contribution:** `gives the reader a stable three-role mental model for how digital identity actually moves`
- **Focal entities:** `protagonist_reader`, `issuer`, `holder`, `verifier`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `interoperability`
- **Active primitives / abstractions:** `issuer/holder/verifier model`; `cryptographic proof`; `trusted issuer key material`
- **Scene summary:** `Explain that digital identity becomes portable when an issuer signs a claim, a holder carries it, and a verifier can check it independently.`
- **Proof surfaces:** `foundations-identity`, `foundations-verification`
- **Handoff:** `move from the participant model into what local verification changes in practice`

#### Scene Card 3 — Verification without calling home changes the category
- **CAP role:** `resolution`
- **Event type:** `comparison`
- **Reader-state contribution:** `completes confused -> oriented by showing why the verifiable model is architecturally different from centralized IDV`
- **Focal entities:** `protagonist_reader`, `skeptic`, `ally_tooling`
- **Setting:** `threshold_decision_point`
- **Stakes:** `privacy`, `operational`, `economic`
- **Active primitives / abstractions:** `local verification`; `trust anchor`; `verifiable credential as reusable proof`
- **Scene summary:** `Contrast phone-home verification with local cryptographic verification, showing why the verifiable model reduces privacy leakage, latency dependence, and repeated verification cost.`
- **Proof surfaces:** `centralized-vs-verifiable`, `why-identity-needs-a-protocol`, `foundations-verification`
- **Handoff:** `direct to verifiable-credentials-explained, then issuers-holders-verifiers-explained`

### Post Card — Verifiable Credentials Explained

- **Slug:** `verifiable-credentials-explained`
- **CAP unit alignment:** `model_reveal`
- **Gravity well:** `Model Reveal`
- **Primary reader:** `sponsor, architect, implementer`
- **Lead narrator:** `Daniel`
- **Navigation role:** `start-here explainer`
- **Post-level reader shift:** `oriented -> structured`
- **Dominant tensions:** `credential as reusable evidence vs “signed blob” confusion`; `format diversity vs conceptual clarity`; `holder control vs issuer-mediated verification`
- **Proof surfaces:** `foundations-credentials`, `foundations-verification`, `centralized-vs-verifiable`, `sd-jwt-selective-disclosure-deep-dive`
- **Default handoff:** `issuers-holders-verifiers-explained`

#### Scene Card 1 — A credential is a signed claim set
- **CAP role:** `setup`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `turns the term “verifiable credential” into a concrete object with recognizable parts`
- **Focal entities:** `protagonist_reader`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `interoperability`
- **Active primitives / abstractions:** `credential as signed claim set`; `issuer`; `proof`; `validity`; `status`
- **Scene summary:** `Explain the minimum structure of a credential: issuer, subject, claims, proof, validity, and optional status material.`
- **Proof surfaces:** `foundations-credentials`, `foundations-verification`
- **Handoff:** `move from object structure into format diversity`

#### Scene Card 2 — Different formats, same job
- **CAP role:** `complication`
- **Event type:** `comparison`
- **Reader-state contribution:** `keeps the reader oriented while preventing acronym overload`
- **Focal entities:** `protagonist_reader`, `skeptic`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `interoperability`, `operational`
- **Active primitives / abstractions:** `W3C VC`; `SD-JWT`; `mDoc`
- **Scene summary:** `Compare the main credential format families as different packaging choices for the same underlying job rather than as different identity architectures.`
- **Proof surfaces:** `foundations-credentials`, `sd-jwt-selective-disclosure-deep-dive`
- **Handoff:** `move from format shape into holder control and reuse`

#### Scene Card 3 — Holder control makes the credential reusable
- **CAP role:** `resolution`
- **Event type:** `reframe`
- **Reader-state contribution:** `completes oriented -> structured by showing why credentials matter operationally, not just structurally`
- **Focal entities:** `holder`, `verifier`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `privacy`, `operational`, `security`
- **Active primitives / abstractions:** `holder binding`; `selective disclosure`; `local verification`
- **Scene summary:** `Show how holder-controlled presentation, selective disclosure, and issuer-independent verification turn a credential into reusable proof instead of another login token.`
- **Proof surfaces:** `foundations-credentials`, `centralized-vs-verifiable`, `presentation-policies-minimum-disclosure`
- **Handoff:** `direct to issuers-holders-verifiers-explained or credential-lifecycle`

### Post Card — The Four Actors of Identity Systems

- **Slug:** `four-actors-of-identity-systems`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** `Constraint Layer`
- **Primary reader:** `architect, buyer, policy lead`
- **Lead narrator:** `Daniel`
- **Navigation role:** `foundations-series bridge`
- **Post-level reader shift:** `oriented -> serious`
- **Dominant tensions:** `three operational roles vs institutional authority`; `portable proof vs ungoverned issuer claims`; `credential structure vs ecosystem legitimacy`
- **Proof surfaces:** `foundations-identity`, `foundations-verification`, `building-trust-registries-at-scale`, `trust-profiles-explained`, `guides/03-world-building/use-cases-and-deployment-contexts.md`
- **Default handoff:** `issuers-holders-verifiers-explained`

#### Scene Card 1 — Three roles still leave one question unanswered
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `exposes the gap between a valid-looking credential exchange and a trustworthy issuer ecosystem`
- **Focal entities:** `protagonist_reader`, `issuer`, `verifier`, `skeptic`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `interoperability`, `governance`
- **Active primitives / abstractions:** `issuer/holder/verifier model`; `authorized issuer`; `trust registry (held in reserve)`
- **Scene summary:** `Show that issuer, holder, and verifier explain how proof moves, but do not by themselves answer why a verifier should accept one issuer and reject another.`
- **Proof surfaces:** `foundations-identity`, `foundations-verification`, `building-trust-registries-at-scale`
- **Handoff:** `move from the missing-authority problem into the institutional actor that resolves it`

#### Scene Card 2 — Governance authorities decide which issuers count
- **CAP role:** `trigger`
- **Event type:** `reframe`
- **Reader-state contribution:** `introduces the fourth actor as the authority layer that makes issuer legitimacy inspectable`
- **Focal entities:** `governance_authority`, `issuer`, `verifier`, `protagonist_reader`
- **Setting:** `institutional_environment`
- **Stakes:** `governance`, `security`, `interoperability`
- **Active primitives / abstractions:** `trust registry`; `trust list`; `accreditation`; `governance framework`
- **Scene summary:** `Explain that accreditation bodies, ICAO-style trust infrastructure, AAMVA-style trust lists, and enterprise trust teams all play the same role: deciding which issuers belong inside the accepted ecosystem.`
- **Proof surfaces:** `building-trust-registries-at-scale`, `trust-profiles-explained`, `guides/03-world-building/use-cases-and-deployment-contexts.md`
- **Handoff:** `move from the governance actor into the full four-actor system view`

#### Scene Card 3 — Four actors keep the ecosystem honest
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes oriented -> serious by showing how institutional authority and operational roles fit together without collapsing into one platform`
- **Focal entities:** `governance_authority`, `issuer`, `holder`, `verifier`
- **Setting:** `workbench_design_review`
- **Stakes:** `operational`, `governance`, `interoperability`
- **Active primitives / abstractions:** `authorized issuer`; `trust profile`; `presentation policy`; `trust registry`
- **Scene summary:** `Land the full ecosystem model: governance authority authorizes issuers, issuers create the claims, holders carry them, and verifiers decide whether they count under local trust and policy rules.`
- **Proof surfaces:** `foundations-identity`, `building-trust-registries-at-scale`, `trust-profiles-explained`
- **Handoff:** `direct to issuers-holders-verifiers-explained, then later to building-trust-registries-at-scale`

### Post Card — Issuers, Holders, Verifiers Explained

- **Slug:** `issuers-holders-verifiers-explained`
- **CAP unit alignment:** `model_reveal`
- **Gravity well:** `Model Reveal`
- **Primary reader:** `architect, implementer, buyer`
- **Lead narrator:** `Daniel`
- **Navigation role:** `start-here explainer`
- **Post-level reader shift:** `oriented -> structured`
- **Dominant tensions:** `role separation vs collapsed platform workflows`; `holder control vs verifier overreach`; `portable proof vs issuer surveillance`
- **Proof surfaces:** `foundations-identity`, `foundations-verification`, `guides/03-world-building/use-cases-and-deployment-contexts.md`, `deploy-enterprise-access`, `deploy-age-verification`
- **Default handoff:** `credential-lifecycle`

#### Scene Card 1 — Issuers create authoritative claims
- **CAP role:** `setup`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `clarifies the issuer’s job as governed claim creation rather than generic identity storage`
- **Focal entities:** `issuer`, `protagonist_reader`
- **Setting:** `institutional_environment`
- **Stakes:** `security`, `governance`
- **Active primitives / abstractions:** `credential issuance`; `issuer keys`; `trust source`
- **Scene summary:** `Explain that issuers make claims authoritative by signing them under rules, not simply by storing identity data in a database.`
- **Proof surfaces:** `foundations-identity`, `foundations-verification`
- **Handoff:** `move from the issuer’s role into holder control`

#### Scene Card 2 — Holders decide how claims travel
- **CAP role:** `complication`
- **Event type:** `reframe`
- **Reader-state contribution:** `shows why the holder is not a passive recipient but the operational center of presentation`
- **Focal entities:** `holder`, `protagonist_reader`, `ally_tooling`
- **Setting:** `institutional_environment`
- **Stakes:** `privacy`, `operational`
- **Active primitives / abstractions:** `wallet`; `selective disclosure`; `holder binding`
- **Scene summary:** `Explain how holders store credentials, decide when to present them, and prove possession without giving the issuer visibility into each use.`
- **Proof surfaces:** `foundations-identity`, `foundations-credentials`, `deploy-age-verification`
- **Handoff:** `move from holder control into verifier judgment`

#### Scene Card 3 — Verifiers ask narrow questions under their own rules
- **CAP role:** `resolution`
- **Event type:** `comparison`
- **Reader-state contribution:** `completes oriented -> structured by showing where trust and policy enter the decision`
- **Focal entities:** `verifier`, `skeptic`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `privacy`, `security`, `operational`
- **Active primitives / abstractions:** `trust profile`; `presentation policy`; `verification result`
- **Scene summary:** `Show that verifiers do not merely receive identity data; they evaluate a bounded request under their own trust and disclosure rules.`
- **Proof surfaces:** `foundations-verification`, `deploy-enterprise-access`, `deploy-age-verification`
- **Handoff:** `direct to credential-lifecycle`

### Post Card — The Credential Lifecycle

- **Slug:** `credential-lifecycle`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** `Operational Proof`
- **Primary reader:** `architect, operator, implementer`
- **Lead narrator:** `Daniel`
- **Navigation role:** `start-here bridge`
- **Post-level reader shift:** `structured -> confident`
- **Dominant tensions:** `static document myth vs living lifecycle`; `issuance moment vs ongoing validity`; `convenience vs revocation and freshness discipline`
- **Proof surfaces:** `flows-orchestrating-identity-lifecycle`, `credential-templates`, `foundations-verification`, `deployment-profiles`, `marty-protocol/README.md`
- **Default handoff:** `five-primitives-in-one-picture`

#### Scene Card 1 — Application and approval set the issuance conditions
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `shows that a credential begins before issuance, in evidence gathering and approval logic`
- **Focal entities:** `protagonist_reader`, `ally_tooling`, `institutional_environment`
- **Setting:** `institutional_environment`
- **Stakes:** `operational`, `security`, `governance`
- **Active primitives / abstractions:** `application`; `approval`; `credential template`; `flow`
- **Scene summary:** `Explain that a credential’s lifecycle starts with evidence, rules, and approvals that establish whether issuance should happen at all.`
- **Proof surfaces:** `flows-orchestrating-identity-lifecycle`, `credential-templates`
- **Handoff:** `move into issuance and presentation`

#### Scene Card 2 — Issuance and presentation turn approval into portable proof
- **CAP role:** `complication`
- **Event type:** `deployment_pattern`
- **Reader-state contribution:** `connects approval logic to holder-controlled reuse`
- **Focal entities:** `issuer`, `holder`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `operational`, `privacy`
- **Active primitives / abstractions:** `credential template`; `wallet`; `presentation`
- **Scene summary:** `Show how issuance creates the signed artifact and presentation turns it into a reusable proof that can travel across many verification moments.`
- **Proof surfaces:** `foundations-credentials`, `flows-orchestrating-identity-lifecycle`, `foundations-verification`
- **Handoff:** `move from presentation into ongoing validity`

#### Scene Card 3 — Verification, revocation, and renewal keep the system honest
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes structured -> confident by showing that credentials remain governed after issuance`
- **Focal entities:** `verifier`, `ally_peer`, `field_operation_runtime`
- **Setting:** `field_operation_runtime`
- **Stakes:** `security`, `operational`
- **Active primitives / abstractions:** `verification`; `revocation`; `freshness`; `deployment profile`; `renewal`
- **Scene summary:** `Explain how status checks, freshness, offline windows, revocation, and reissue decisions keep a credential trustworthy over time.`
- **Proof surfaces:** `foundations-verification`, `deployment-profiles`, `marty-protocol/README.md`
- **Handoff:** `direct to five-primitives-in-one-picture, then the-marty-identity-model`

### Post Card — The Marty Identity Model

- **Slug:** `the-marty-identity-model`
- **CAP unit alignment:** `model_reveal`
- **Gravity well:** `Model Reveal`
- **Primary reader:** `architect, implementer, sponsor`
- **Lead narrator:** `Daniel`
- **Navigation role:** `start-here bridge`
- **Post-level reader shift:** `structured -> confident`
- **Dominant tensions:** `one-off integrations vs stable objects`; `lifecycle motion vs governable configuration`; `standards sprawl vs reusable model`
- **Proof surfaces:** `marty-protocol/README.md`, `five-primitives-in-one-picture`, `trust-profiles`, `credential-templates`, `presentation-policies`, `deployment-profiles`
- **Default handoff:** `trust-profiles-explained` or `flows-orchestrating-identity-lifecycle`

#### Scene Card 1 — Roles and credentials are not enough by themselves
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `names the gap between understanding the actors and governing a real identity system`
- **Focal entities:** `protagonist_reader`, `skeptic`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `operational`, `interoperability`
- **Active primitives / abstractions:** `roles`; `credentials`; `flows (held in reserve)`
- **Scene summary:** `Explain why actors and credential formats alone do not tell you where trust, disclosure, runtime, and orchestration decisions should live.`
- **Proof surfaces:** `foundations-identity`, `foundations-credentials`, `five-primitives-in-one-picture`
- **Handoff:** `move from the gap into the five primitives`

#### Scene Card 2 — Five primitives stabilize the system
- **CAP role:** `trigger`
- **Event type:** `reframe`
- **Reader-state contribution:** `moves the reader from foundations knowledge into the Marty operating model`
- **Focal entities:** `five_mip_primitives`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `operational`, `security`, `privacy`
- **Active primitives / abstractions:** `Trust Profile`; `Credential Template`; `Presentation Policy`; `Deployment Profile`; `Flow`
- **Scene summary:** `Map the recurring system questions to the five MIP primitives and show what each one stabilizes.`
- **Proof surfaces:** `marty-protocol/README.md`, `trust-profiles`, `credential-templates`, `presentation-policies`, `deployment-profiles`
- **Handoff:** `move from the five primitives into the supporting abstractions`

#### Scene Card 3 — Supporting abstractions keep the model practical
- **CAP role:** `complication`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `prevents the model from sounding too neat by showing where ecosystem and operational complexity lands`
- **Focal entities:** `ally_tooling`, `Compliance Profile`, `Policy Set (Cedar)`
- **Setting:** `workbench_design_review`
- **Stakes:** `governance`, `interoperability`, `operational`
- **Active primitives / abstractions:** `Compliance Profile`; `Wallet Profile`; `Revocation Profile`; `Application Template`; `Policy Set (Cedar)`
- **Scene summary:** `Explain why Marty needs supporting abstractions, but also why those abstractions should not become new core primitives.`
- **Proof surfaces:** `marty-protocol/README.md`, `compliance-profiles-bridging-regulation`, `cedar-policies-for-identity-governance`
- **Handoff:** `move from practicality into navigation`

#### Scene Card 4 — The model becomes a stable language for the rest of Marty
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes structured -> confident by turning the model into a reusable lens for the rest of the publication`
- **Focal entities:** `guide_hub`, `protagonist_reader`, `five_mip_primitives`
- **Setting:** `threshold_decision_point`
- **Stakes:** `clarity`, `continuity`
- **Active primitives / abstractions:** `five_mip_primitives`; `supporting abstractions`
- **Scene summary:** `Land the idea that Marty is a stable operating language: the reader can now enter primitive deep dives, use-case posts, and implementation notes without losing the system picture.`
- **Proof surfaces:** `five-primitives-in-one-picture`, `marty-protocol/README.md`, primitive guide chapters
- **Handoff:** `direct to five-primitives-in-one-picture, then trust-profiles-explained or flows-orchestrating-identity-lifecycle`

---

## Wave 2 — PKI and wallet recovery post cards

These cards recover the next two depth paths after the repaired Start Here sequence: PKI trust depth and wallet architecture depth. Together they let readers move from Marty’s opening model into certificate hierarchies, passport trust, secure storage, and regulated wallet ecosystems without falling back onto stubs.

### Post Card — Public Key Infrastructure Explained

- **Slug:** `public-key-infrastructure-explained`
- **CAP unit alignment:** `model_reveal`
- **Gravity well:** `Model Reveal`
- **Primary reader:** `architect, implementer`
- **Lead narrator:** `Marcus`
- **Navigation role:** `PKI series opener`
- **Post-level reader shift:** `oriented -> structured`
- **Dominant tensions:** `raw key control vs governed trust`; `generic PKI jargon vs identity-specific trust`
- **Proof surfaces:** `cryptographic-trust-anchors-primer`, `marty-protocol/SPECIFICATION.md`, `marty-core/marty-crypto/README.md`
- **Default handoff:** `understanding-trust-anchors`

#### Scene Card 1 — A key pair is not a trust framework
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `separates raw cryptography from institutional trust so the reader stops treating PKI as “just keys”`
- **Focal entities:** `protagonist_reader`, `skeptic`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `interoperability`
- **Active primitives / abstractions:** `public/private key pair`; `issuer identity`
- **Scene summary:** `Explain that a public key proves cryptographic control, but not yet why a verifier should trust the issuer behind it.`
- **Proof surfaces:** `why-identity-depends-on-cryptography`, `cryptographic-trust-anchors-primer`
- **Handoff:** `move from raw keys into the certificate hierarchy that creates authority`

#### Scene Card 2 — Certificates create verifiable issuer authority
- **CAP role:** `trigger`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `turns PKI into a concrete trust ladder rather than a security buzzword`
- **Focal entities:** `issuer`, `trust_anchor`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `governance`
- **Active primitives / abstractions:** `X.509 certificate`; `certificate authority`; `trust anchor`
- **Scene summary:** `Show how certificates bind keys to issuers and how hierarchies let a verifier accept issuers it does not already know personally.`
- **Proof surfaces:** `marty-core/marty-crypto/README.md`, `cryptographic-trust-anchors-primer`
- **Handoff:** `move from generic PKI into identity-specific trust packaging`

#### Scene Card 3 — Identity PKI becomes governable when trust is explicit
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes oriented -> structured by tying PKI back to Marty’s trust model`
- **Focal entities:** `Trust Profile`, `standards_cluster`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `interoperability`, `operational`
- **Active primitives / abstractions:** `Trust Profile`; `trust_sources`; `trust list`; `PKD`
- **Scene summary:** `Connect PKI to Marty by showing that trust anchors, algorithms, and source types become governed Trust Profile data instead of hidden implementation assumptions.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/README.md`
- **Handoff:** `direct to understanding-trust-anchors, then certificate-chains-and-validation`

### Post Card — Understanding Trust Anchors

- **Slug:** `understanding-trust-anchors`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** `Constraint Layer`
- **Primary reader:** `architect, implementer, operator`
- **Lead narrator:** `Marcus`
- **Navigation role:** `PKI trust deep dive`
- **Post-level reader shift:** `structured -> serious`
- **Dominant tensions:** `verification certainty vs hidden trust assumptions`; `fresh trust material vs stale local roots`
- **Proof surfaces:** `cryptographic-trust-anchors-primer`, `marty-protocol/SPECIFICATION.md`, `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`
- **Default handoff:** `certificate-chains-and-validation`

#### Scene Card 1 — Verification has to start from a declared root
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `gives the reader a precise definition of a trust anchor and why every verifier needs one`
- **Focal entities:** `protagonist_reader`, `trust_anchor`, `skeptic`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `clarity`
- **Active primitives / abstractions:** `trust anchor`; `trusted root certificate`; `pinned issuer key`
- **Scene summary:** `Define the trust anchor as the root object from which issuer trust is derived and make clear that verification cannot begin without it.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `cryptographic-trust-anchors-primer`
- **Handoff:** `move from definition into how anchors are distributed and refreshed`

#### Scene Card 2 — Anchors are distributed through PKD, trust lists, and pinned roots
- **CAP role:** `complication`
- **Event type:** `standards_mapping`
- **Reader-state contribution:** `makes trust anchors operational by showing how they actually arrive at the verifier`
- **Focal entities:** `trust_anchor`, `standards_cluster`, `ally_tooling`
- **Setting:** `ecosystem_network`
- **Stakes:** `interoperability`, `operational`
- **Active primitives / abstractions:** `PKD_URL`; `TRUST_LIST`; `ROOT_CA`; `PINNED_ISSUER`
- **Scene summary:** `Explain the practical delivery patterns for trust anchors: ICAO PKD, signed trust lists, pinned roots, and other explicit trust sources.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`
- **Handoff:** `move from anchor delivery into cache, freshness, and failure behavior`

#### Scene Card 3 — Anchor freshness decides runtime behavior
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes structured -> serious by showing that trust-anchor management is an operator concern, not just a crypto concern`
- **Focal entities:** `field_operation_runtime`, `Deployment Profile`, `protagonist_reader`
- **Setting:** `field_operation_runtime`
- **Stakes:** `security`, `operational`
- **Active primitives / abstractions:** `trust anchor cache`; `freshness window`; `Deployment Profile`
- **Scene summary:** `Show how refresh cadence, cache TTLs, and failure handling change what a verifier can safely accept when the network is slow, absent, or stale.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `deployment-profiles-from-design-to-production`
- **Handoff:** `direct to certificate-chains-and-validation or trust-profiles-explained`

### Post Card — Certificate Chains and Validation

- **Slug:** `certificate-chains-and-validation`
- **CAP unit alignment:** `artifact_adoption_proof`
- **Gravity well:** `Artifact and Adoption Proof`
- **Primary reader:** `implementer, security architect`
- **Lead narrator:** `Marcus`
- **Navigation role:** `PKI verification deep dive`
- **Post-level reader shift:** `serious -> confident`
- **Dominant tensions:** `“signature verified” vs full trust evaluation`; `online freshness vs offline survivability`
- **Proof surfaces:** `marty-core/marty-verification/README.md`, `marty-protocol/SPECIFICATION.md`, `marty-core/marty-crypto/README.md`
- **Default handoff:** `how-passport-pki-works`

#### Scene Card 1 — Path building turns certificates into trust decisions
- **CAP role:** `setup`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `shows the reader how issuer certificates are connected to trusted roots instead of treated as isolated blobs`
- **Focal entities:** `issuer`, `trust_anchor`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `interoperability`
- **Active primitives / abstractions:** `certificate chain`; `issuer certificate`; `root CA`
- **Scene summary:** `Explain how the verifier builds a certificate path from the signer certificate toward an accepted root or trust list entry.`
- **Proof surfaces:** `marty-core/marty-verification/README.md`, `marty-core/marty-crypto/README.md`
- **Handoff:** `move from path discovery into the checks that make the path acceptable`

#### Scene Card 2 — Validation is more than signature math
- **CAP role:** `complication`
- **Event type:** `comparison`
- **Reader-state contribution:** `prevents the reader from reducing certificate validation to one successful cryptographic check`
- **Focal entities:** `protagonist_reader`, `skeptic`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`
- **Active primitives / abstractions:** `allowed_algorithms`; `validity period`; `revocation`; `time policy`
- **Scene summary:** `Show that validation includes signature checks, validity windows, algorithm expectations, revocation status, and policy evaluation — not merely “can this signature verify.”`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-core/marty-crypto/README.md`
- **Handoff:** `move from algorithmic checks into deployment failure modes`

#### Scene Card 3 — Runtime pressure creates validation pitfalls
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes serious -> confident by connecting certificate validation to real verifier runtime pressure`
- **Focal entities:** `field_operation_runtime`, `ally_peer`, `protagonist_reader`
- **Setting:** `field_operation_runtime`
- **Stakes:** `security`, `operational`
- **Active primitives / abstractions:** `revocation profile`; `freshness window`; `offline cache`
- **Scene summary:** `Land the practical pitfalls: stale anchors, expired chains, missing revocation data, and offline tolerances that can make two “valid” implementations behave differently.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `deployment-profiles-from-design-to-production`
- **Handoff:** `direct to how-passport-pki-works`

### Post Card — How Passport PKI Works

- **Slug:** `how-passport-pki-works`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** `Operational Proof`
- **Primary reader:** `standards-minded architect, regulated buyer, implementer`
- **Lead narrator:** `Aiko`
- **Navigation role:** `passport PKI bridge`
- **Post-level reader shift:** `structured -> confident`
- **Dominant tensions:** `high-assurance travel trust vs limited runtime connectivity`; `country-root governance vs cross-border interoperability`
- **Proof surfaces:** `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`, `marty-protocol/README.md`, `marty-core/marty-verification/README.md`, `deploy-airline-boarding`
- **Default handoff:** `understanding-csca-certificates`

#### Scene Card 1 — Travel verification needs trust that survives the network
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `grounds passport PKI in the border and gate problem instead of in abstract certificate theory`
- **Focal entities:** `field_operation_runtime`, `protagonist_reader`, `aiko_tanaka`
- **Setting:** `field_operation_runtime`
- **Stakes:** `security`, `operational`, `regulatory`
- **Active primitives / abstractions:** `Trust Profile`; `trust anchor`; `offline verification`
- **Scene summary:** `Frame the passport problem as high-assurance identity verification that often has to work with limited or no live access to the issuer.`
- **Proof surfaces:** `deploy-airline-boarding`, `marty-protocol/README.md`
- **Handoff:** `move from runtime pressure into the passport certificate hierarchy`

#### Scene Card 2 — CSCA, document signers, and PKD keep passport trust portable
- **CAP role:** `trigger`
- **Event type:** `standards_mapping`
- **Reader-state contribution:** `gives the reader the concrete trust structure behind passport verification`
- **Focal entities:** `trust_anchor`, `issuer`, `standards_cluster`
- **Setting:** `ecosystem_network`
- **Stakes:** `interoperability`, `security`
- **Active primitives / abstractions:** `CSCA`; `document signer`; `PKD_URL`; `ICAO Trust Profile`
- **Scene summary:** `Explain how country roots, document signers, and ICAO PKD distribution allow other states or travel operators to verify signed passport data locally.`
- **Proof surfaces:** `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`, `marty-protocol/README.md`
- **Handoff:** `move from hierarchy into inspection-system behavior`

#### Scene Card 3 — Inspection systems turn hierarchy into operational border trust
- **CAP role:** `resolution`
- **Event type:** `deployment_pattern`
- **Reader-state contribution:** `completes structured -> confident by connecting passport PKI to real verification lanes and travel flows`
- **Focal entities:** `field_operation_runtime`, `ally_peer`, `Deployment Profile`
- **Setting:** `field_operation_runtime`
- **Stakes:** `security`, `throughput`, `operational`
- **Active primitives / abstractions:** `Deployment Profile`; `trust cache`; `ICAO_DTC`
- **Scene summary:** `Show how inspection systems and pre-boarding verifiers load trusted passport roots, validate signed credential material locally, and keep their runtime behavior bounded under travel pressure.`
- **Proof surfaces:** `marty-core/marty-verification/README.md`, `deploy-airline-boarding`
- **Handoff:** `direct to understanding-csca-certificates or what-icao-9303-specifies`

### Post Card — Understanding CSCA Certificates

- **Slug:** `understanding-csca-certificates`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** `Constraint Layer`
- **Primary reader:** `implementer, travel architect`
- **Lead narrator:** `Aiko`
- **Navigation role:** `passport trust deep dive`
- **Post-level reader shift:** `serious -> confident`
- **Dominant tensions:** `country-level trust root vs stale copied trust material`; `certificate anatomy vs operational distribution`
- **Proof surfaces:** `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`, `cryptographic-trust-anchors-primer`, `longfellow-zk/reference/verifier-service/server/README.md`
- **Default handoff:** `how-passport-pki-works`

#### Scene Card 1 — CSCA is the country-level root in passport PKI
- **CAP role:** `setup`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `gives the reader a stable definition of the CSCA object and its place in the hierarchy`
- **Focal entities:** `trust_anchor`, `protagonist_reader`, `standards_cluster`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `regulatory`
- **Active primitives / abstractions:** `CSCA`; `country root`; `document signer`
- **Scene summary:** `Explain that the CSCA certificate is the country-level trust anchor from which document-signing trust is derived.`
- **Proof surfaces:** `cryptographic-trust-anchors-primer`, `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`
- **Handoff:** `move from the object itself into how it travels across borders`

#### Scene Card 2 — PKD and master-list distribution make the root usable elsewhere
- **CAP role:** `complication`
- **Event type:** `standards_mapping`
- **Reader-state contribution:** `shows that cross-border trust depends on distribution discipline, not merely on certificate existence`
- **Focal entities:** `ecosystem_network`, `trust_anchor`, `ally_tooling`
- **Setting:** `ecosystem_network`
- **Stakes:** `interoperability`, `operational`
- **Active primitives / abstractions:** `PKD_URL`; `master list`; `trust list`
- **Scene summary:** `Explain how passport roots are circulated through PKD-style distribution so other verifiers can actually trust them.`
- **Proof surfaces:** `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`, `longfellow-zk/reference/verifier-service/server/README.md`
- **Handoff:** `move from distribution into rollover and staleness risk`

#### Scene Card 3 — Rollover and stale trust are the real operator concerns
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes serious -> confident by connecting CSCA theory to verifier upkeep`
- **Focal entities:** `field_operation_runtime`, `ally_peer`, `protagonist_reader`
- **Setting:** `field_operation_runtime`
- **Stakes:** `security`, `operational`
- **Active primitives / abstractions:** `trust anchor cache`; `trust refresh`; `operator policy`
- **Scene summary:** `Land the operational truth: the hardest CSCA problem is usually not certificate parsing but keeping roots, rollover, and trust freshness aligned across verifiers.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `longfellow-zk/reference/verifier-service/server/README.md`
- **Handoff:** `direct back to how-passport-pki-works or forward into verifier-infrastructure`

### Post Card — Mobile Wallet Architectures

- **Slug:** `mobile-wallet-architectures`
- **CAP unit alignment:** `model_reveal`
- **Gravity well:** `Model Reveal`
- **Primary reader:** `architect, implementer, product owner`
- **Lead narrator:** `Aiko`
- **Navigation role:** `wallet series opener`
- **Post-level reader shift:** `structured -> confident`
- **Dominant tensions:** `wallet app icon vs layered system`; `interoperability promise vs platform reality`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-authenticator/pubspec.yaml`, `marty-authenticator/DEEP_LINKING.md`, `product-catalog/products/authenticator/overview.md`
- **Default handoff:** `secure-enclave-credential-storage`

#### Scene Card 1 — A wallet is more than a credential gallery
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `replaces the superficial “cards in an app” model with a system-level definition of a wallet`
- **Focal entities:** `wallet`, `protagonist_reader`, `skeptic`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `operational`
- **Active primitives / abstractions:** `wallet`; `credential storage`; `presentation logic`
- **Scene summary:** `Define the wallet as the component that holds keys, credentials, consent surfaces, and presentation behavior together.`
- **Proof surfaces:** `product-catalog/products/authenticator/overview.md`, `marty-protocol/SPECIFICATION.md`
- **Handoff:** `move from the app metaphor into the technical layers inside it`

#### Scene Card 2 — Platforms split storage, cryptography, and UX across layers
- **CAP role:** `trigger`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `shows where wallet responsibilities actually land across app code, platform security, and protocol libraries`
- **Focal entities:** `wallet`, `ally_tooling`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `operational`
- **Active primitives / abstractions:** `secure storage`; `local auth`; `credential store`; `BLE/NFC`
- **Scene summary:** `Explain how secure storage, credential persistence, biometric gates, QR/BLE/NFC transports, and protocol libraries sit in different layers of a wallet stack.`
- **Proof surfaces:** `marty-authenticator/pubspec.yaml`, `marty-core/marty-secure-storage/src/lib.rs`
- **Handoff:** `move from internal layering into external exchange`

#### Scene Card 3 — Deep links and protocols make the wallet an endpoint
- **CAP role:** `complication`
- **Event type:** `implementation_walkthrough`
- **Reader-state contribution:** `turns the wallet from passive storage into an active participant in issuance and presentation`
- **Focal entities:** `wallet`, `issuer`, `verifier`
- **Setting:** `threshold_decision_point`
- **Stakes:** `interoperability`, `operational`
- **Active primitives / abstractions:** `OID4VCI`; `OID4VP`; `deep link`; `QR`
- **Scene summary:** `Show how credential-offer and presentation-request deep links, QR codes, and OID4VC flows make the wallet a live endpoint in the exchange.`
- **Proof surfaces:** `marty-authenticator/DEEP_LINKING.md`, `impl-oid4vci`, `impl-oid4vp`
- **Handoff:** `move from exchange behavior into honest compatibility claims`

#### Scene Card 4 — Compatibility is a matrix, not a marketing claim
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes structured -> confident by giving the reader a precise interoperability lens`
- **Focal entities:** `Wallet Profile`, `standards_cluster`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `interoperability`, `clarity`
- **Active primitives / abstractions:** `Wallet Profile`; `credential_format`; `issuance_protocol`; `compliance_profile_code`
- **Scene summary:** `Use the Wallet Profile derivation model to show that wallet compatibility depends on format, issuance protocol, and compliance bundle rather than on vague “supports wallets” claims.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `product-catalog/products/authenticator/overview.md`
- **Handoff:** `direct to secure-enclave-credential-storage or credential-portability-across-wallets`

### Post Card — Secure Enclave Credential Storage

- **Slug:** `secure-enclave-credential-storage`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** `Constraint Layer`
- **Primary reader:** `security architect, wallet implementer`
- **Lead narrator:** `Marcus`
- **Navigation role:** `wallet security deep dive`
- **Post-level reader shift:** `serious -> confident`
- **Dominant tensions:** `exportable keys vs holder binding`; `maximum device security vs recovery and sync`
- **Proof surfaces:** `marty-core/marty-secure-storage/src/keychain.rs`, `marty-core/marty-secure-storage/src/database.rs`, `marty-authenticator/pubspec.yaml`
- **Default handoff:** `credential-portability-across-wallets`

#### Scene Card 1 — Holder binding depends on where keys live
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `ties wallet security to key custody rather than to credential file format alone`
- **Focal entities:** `wallet`, `protagonist_reader`, `skeptic`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`
- **Active primitives / abstractions:** `holder binding`; `device key`; `attestation`
- **Scene summary:** `Explain why the strongest wallet designs protect the holder’s signing keys in hardware-backed or platform-protected stores instead of treating keys as ordinary app data.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-authenticator/pubspec.yaml`
- **Handoff:** `move from key custody into the layered local storage stack`

#### Scene Card 2 — Secure storage is layered, not singular
- **CAP role:** `complication`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `shows how key stores, encrypted databases, and app-level storage cooperate rather than compete`
- **Focal entities:** `wallet`, `ally_tooling`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `operational`
- **Active primitives / abstractions:** `platform keychain`; `SQLCipher`; `encrypted local store`; `local_auth`
- **Scene summary:** `Connect platform key storage to encrypted credential databases and local-auth gates so readers see the full wallet-protection stack.`
- **Proof surfaces:** `marty-core/marty-secure-storage/src/keychain.rs`, `marty-core/marty-secure-storage/src/database.rs`, `marty-authenticator/pubspec.yaml`
- **Handoff:** `move from layered protection into recovery and portability trade-offs`

#### Scene Card 3 — Security, recovery, and portability pull against each other
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes serious -> confident by landing the honest trade-offs instead of promising free portability`
- **Focal entities:** `protagonist_reader`, `wallet`, `ally_peer`
- **Setting:** `threshold_decision_point`
- **Stakes:** `security`, `operational`, `continuity`
- **Active primitives / abstractions:** `device-bound key`; `backup`; `wallet migration`
- **Scene summary:** `Land the central trade-off: the tighter the device binding, the more carefully the wallet must handle backup, recovery, and cross-device migration.`
- **Proof surfaces:** `marty-core/marty-secure-storage/src/database.rs`, `credential-portability-across-wallets` source set
- **Handoff:** `direct to credential-portability-across-wallets`

### Post Card — Credential Portability Across Wallets

- **Slug:** `credential-portability-across-wallets`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** `Operational Proof`
- **Primary reader:** `buyer, architect, governance lead`
- **Lead narrator:** `Elena`
- **Navigation role:** `wallet interoperability bridge`
- **Post-level reader shift:** `confident -> evaluative`
- **Dominant tensions:** `portable format vs portable runtime`; `anti-lock-in promise vs ecosystem constraints`
- **Proof surfaces:** `business-case-for-credential-portability`, `marty-protocol/SPECIFICATION.md`, `marty-authenticator/DEEP_LINKING.md`, `product-catalog/products/authenticator/overview.md`
- **Default handoff:** `eudi-wallet-model-explained`

#### Scene Card 1 — Moving a credential is harder than moving a file
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `stops the reader from treating wallet portability as a simple export/import feature`
- **Focal entities:** `protagonist_reader`, `wallet`, `skeptic`
- **Setting:** `threshold_decision_point`
- **Stakes:** `interoperability`, `economic`
- **Active primitives / abstractions:** `credential format`; `wallet behavior`; `holder binding`
- **Scene summary:** `Explain that credential bytes, trust assumptions, device binding, and wallet policy behavior do not all move together automatically.`
- **Proof surfaces:** `business-case-for-credential-portability`, `mobile-wallet-architectures`
- **Handoff:** `move from the portability myth into the compatibility matrix`

#### Scene Card 2 — Wallet Profiles make compatibility explicit
- **CAP role:** `trigger`
- **Event type:** `comparison`
- **Reader-state contribution:** `gives the reader a concrete way to reason about portability without hand-waving`
- **Focal entities:** `Wallet Profile`, `wallet`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `interoperability`, `clarity`
- **Active primitives / abstractions:** `Wallet Profile`; `issuance protocol`; `compliance profile`
- **Scene summary:** `Use the Wallet Profile derivation rule to show how format, issuance protocol, and compliance bundle define which wallets can receive or present a credential cleanly.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-authenticator/DEEP_LINKING.md`
- **Handoff:** `move from technical compatibility into policy and ecosystem boundaries`

#### Scene Card 3 — Policy and economics define the real portability boundary
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes confident -> evaluative by landing both the lock-in story and the compliance caveats`
- **Focal entities:** `protagonist_reader`, `pricing_model`, `standards_cluster`
- **Setting:** `threshold_decision_point`
- **Stakes:** `economic`, `governance`, `interoperability`
- **Active primitives / abstractions:** `Wallet Profile`; `Compliance Profile`; `trust registry`
- **Scene summary:** `Land the practical boundary: even when wallet migration is constrained by attestation, policy, or ecosystem rules, standards-based portability still changes the cost curve and limits vendor lock-in.`
- **Proof surfaces:** `business-case-for-credential-portability`, `product-catalog/docs/index.md`
- **Handoff:** `direct to eudi-wallet-model-explained or back to business-case-for-credential-portability`

### Post Card — The EUDI Wallet Model Explained

- **Slug:** `eudi-wallet-model-explained`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** `Operational Proof`
- **Primary reader:** `regulated architect, product lead, implementer`
- **Lead narrator:** `Aiko`
- **Navigation role:** `regulated wallet bridge`
- **Post-level reader shift:** `structured -> serious`
- **Dominant tensions:** `regulatory mandate vs implementation readiness`; `one wallet promise vs multiple credential and trust layers`
- **Proof surfaces:** `eudi-wallet-readiness`, `marty-protocol/examples/realistic/eu-identity-wallet/trust-profile.json`, `marty-protocol/SPECIFICATION.md`, official European Commission EUDI overview and technical-spec pages`
- **Default handoff:** `compliance-profiles-bridging-regulation`

#### Scene Card 1 — EUDI is a bundle of obligations, formats, and trust rules
- **CAP role:** `setup`
- **Event type:** `standards_mapping`
- **Reader-state contribution:** `replaces the vague “EU wallet” idea with a structured ecosystem definition`
- **Focal entities:** `aiko_tanaka`, `standards_cluster`, `protagonist_reader`
- **Setting:** `public_social_market`
- **Stakes:** `regulatory`, `interoperability`
- **Active primitives / abstractions:** `Compliance Profile`; `Trust Profile`; `Wallet Profile`
- **Scene summary:** `Frame EUDI as a regulated wallet ecosystem that bundles wallet obligations, trust infrastructure, and common technical specifications.`
- **Proof surfaces:** `eudi-wallet-readiness`, `European Commission — European Digital Identity`
- **Handoff:** `move from the bundle into the credential mix it has to carry`

#### Scene Card 2 — One wallet ecosystem, more than one credential model
- **CAP role:** `trigger`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `shows that EUDI is not one monolithic credential format`
- **Focal entities:** `wallet`, `issuer`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `interoperability`, `operational`
- **Active primitives / abstractions:** `EUDI_PID`; `EUDI_MDL`; `SD_JWT_VC`; `MDOC`
- **Scene summary:** `Explain how the EUDI ecosystem spans at least SD-JWT-VC PID and mDoc-based licence-style credentials under one wallet surface.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/examples/realistic/eu-identity-wallet/trust-profile.json`
- **Handoff:** `move from credential diversity into trust and specification discipline`

#### Scene Card 3 — Trust lists and shared specifications hold the ecosystem together
- **CAP role:** `complication`
- **Event type:** `reframe`
- **Reader-state contribution:** `turns EUDI from a compliance slogan into an explicit trust and interoperability stack`
- **Focal entities:** `standards_cluster`, `Trust Profile`, `Wallet Profile`
- **Setting:** `ecosystem_network`
- **Stakes:** `interoperability`, `regulatory`, `security`
- **Active primitives / abstractions:** `EU List of Trusted Lists`; `ARF`; `reference implementation`; `Wallet Profile`
- **Scene summary:** `Show how the EU trust-list model, common architecture, and reference implementation make cross-border wallet behavior more than a branding promise.`
- **Proof surfaces:** `EU Digital Identity Wallet Technical Specifications`, `marty-protocol/SPECIFICATION.md`
- **Handoff:** `move from specification discipline into rollout realism`

#### Scene Card 4 — Rollout is real, but phased
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes structured -> serious by landing urgency without pretending implementation maturity is uniform`
- **Focal entities:** `protagonist_reader`, `standards_cluster`, `ally_peer`
- **Setting:** `threshold_decision_point`
- **Stakes:** `regulatory`, `strategic`
- **Active primitives / abstractions:** `Compliance Profile`; `Trust Profile`; `Wallet Profile`
- **Scene summary:** `Land the current reality: the end-of-2026 availability milestone is meaningful, but pilots, ARF revisions, and reference implementation work still shape how readiness should be judged.`
- **Proof surfaces:** `European Commission — European Digital Identity`, `European Digital Identity (EUDI) Regulation`, `What are the Large Scale Pilot Projects`, `EU Digital Identity Wallet Technical Specifications`
- **Handoff:** `direct to compliance-profiles-bridging-regulation or back to mobile-wallet-architectures`

## Wave 2.5 — Wallet holder and UX recovery post cards

These cards recover the wallet-holder, device-binding, disclosure-mediation, and UX-trust stubs that still sit beside the restored wallet architecture series. They should deepen the holder-side path without re-explaining the same architecture stack already covered by `mobile-wallet-architectures`, `secure-enclave-credential-storage`, `credential-portability-across-wallets`, and `eudi-wallet-model-explained`.

### Post Card — What Is a Digital Identity Wallet?

- **Slug:** `what-is-a-digital-identity-wallet`
- **CAP unit alignment:** `model_reveal`
- **Gravity well:** `Model Reveal`
- **Primary reader:** `product owner, architect, curious buyer`
- **Lead narrator:** `Sofia`
- **Navigation role:** `wallet conceptual opener`
- **Post-level reader shift:** `oriented -> structured`
- **Dominant tensions:** `wallet as card gallery vs holder control surface`; `account app vs reusable proof carrier`; `convenience vs explicit consent`
- **Proof surfaces:** `mobile-wallet-architectures`, `product-catalog/products/authenticator/overview.md`, `marty-authenticator/DEEP_LINKING.md`, `credential-lifecycle`, `issuers-holders-verifiers-explained`
- **Default handoff:** `mobile-wallet-architectures`

#### Scene Card 1 — A wallet is the holder-side control point
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `replaces loose app-icon imagery with a role-based explanation of what the wallet does`
- **Focal entities:** `wallet`, `holder`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `privacy`, `operational`
- **Active primitives / abstractions:** `wallet`; `credential offer`; `presentation request`
- **Scene summary:** `Define the wallet as the holder-side tool for receiving, storing, and presenting credentials under local control rather than as a branded card gallery.`
- **Proof surfaces:** `product-catalog/products/authenticator/overview.md`, `issuers-holders-verifiers-explained`
- **Handoff:** `move from the role definition into the receive/hold/present lifecycle`

#### Scene Card 2 — Receiving, holding, and presenting are different jobs
- **CAP role:** `trigger`
- **Event type:** `comparison`
- **Reader-state contribution:** `gives the reader a stable lifecycle model for wallet responsibilities`
- **Focal entities:** `wallet`, `issuer`, `verifier`
- **Setting:** `workbench_design_review`
- **Stakes:** `operational`, `interoperability`
- **Active primitives / abstractions:** `credential offer`; `credential store`; `presentation request`; `local auth`
- **Scene summary:** `Explain that accepting a credential offer, storing the resulting credential, and answering a verifier request are separate wallet jobs with different trust and UX consequences.`
- **Proof surfaces:** `marty-authenticator/DEEP_LINKING.md`, `credential-lifecycle`
- **Handoff:** `move from wallet jobs into why trust and consent matter`

#### Scene Card 3 — Trust, consent, and local control make the wallet matter
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes oriented -> structured by connecting the wallet concept to holder agency and local verification`
- **Focal entities:** `holder`, `wallet`, `verifier`
- **Setting:** `threshold_decision_point`
- **Stakes:** `privacy`, `security`, `operational`
- **Active primitives / abstractions:** `local verification`; `consent surface`; `Wallet Profile`
- **Scene summary:** `Land the point that a wallet matters because it lets the holder receive and present trusted proof locally without turning every use into another issuer-controlled account lookup.`
- **Proof surfaces:** `mobile-wallet-architectures`, `marty-authenticator/DEEP_LINKING.md`, `marty-protocol/protocol/wallet-profile/SPECIFICATION.md`
- **Handoff:** `direct to mobile-wallet-architectures or device-binding-and-credential-security`

### Post Card — Device Binding and Credential Security

- **Slug:** `device-binding-and-credential-security`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** `Constraint Layer`
- **Primary reader:** `security architect, product owner, wallet implementer`
- **Lead narrator:** `Sofia`
- **Navigation role:** `wallet security bridge`
- **Post-level reader shift:** `structured -> serious`
- **Dominant tensions:** `copyable credential vs device-bound control`; `strong binding vs recovery friction`; `hardware trust vs user migration`
- **Proof surfaces:** `secure-enclave-credential-storage`, `holder-binding-beyond-biometrics`, `marty-authenticator/DEEP_LINKING.md`, `product-catalog/products/authenticator/roadmap.md`, `product-catalog/products/authenticator/overview.md`
- **Default handoff:** `secure-enclave-credential-storage` or `holder-binding-beyond-biometrics`

#### Scene Card 1 — Copied credentials are a holder-binding failure
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `clarifies why valid signatures do not by themselves stop sharing, theft, or replay`
- **Focal entities:** `wallet`, `holder`, `skeptic`
- **Setting:** `threshold_decision_point`
- **Stakes:** `security`
- **Active primitives / abstractions:** `holder binding`; `device key`; `credential control`
- **Scene summary:** `Show that a credential which can be copied and replayed from outside the intended device context still fails the holder-security question even when its issuer signature remains valid.`
- **Proof surfaces:** `holder-binding-beyond-biometrics`, `secure-enclave-credential-storage`
- **Handoff:** `move from the threat into how device binding is actually assembled`

#### Scene Card 2 — Device binding is a stack, not a single hardware checkbox
- **CAP role:** `trigger`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `connects secure storage, local auth, and proof-of-possession into one operational security story`
- **Focal entities:** `wallet`, `ally_tooling`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `operational`
- **Active primitives / abstractions:** `secure storage`; `local auth`; `attestation`; `proof of possession`
- **Scene summary:** `Explain that device binding spans protected keys, local-auth gates, and presentation-time proof behavior instead of reducing to a single “uses secure enclave” claim.`
- **Proof surfaces:** `secure-enclave-credential-storage`, `marty-authenticator/DEEP_LINKING.md`, `product-catalog/products/authenticator/overview.md`
- **Handoff:** `move from the binding stack into migration and backup consequences`

#### Scene Card 3 — Migration and recovery expose the real trade-off
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes structured -> serious by making backup, replacement, and re-binding operationally visible`
- **Focal entities:** `wallet`, `ally_peer`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `security`, `continuity`, `operational`
- **Active primitives / abstractions:** `device-bound key`; `re-binding`; `backup guidance`
- **Scene summary:** `Land the trade-off: stronger device binding improves resistance to theft and sharing, but it also turns device replacement, backup, and migration into governed recovery decisions.`
- **Proof surfaces:** `product-catalog/products/authenticator/roadmap.md`, `secure-enclave-credential-storage`, `holder-binding-beyond-biometrics`
- **Handoff:** `direct to secure-enclave-credential-storage or holder-binding-beyond-biometrics`

### Post Card — Selective Disclosure in Wallets

- **Slug:** `selective-disclosure-in-wallets`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** `Operational Proof`
- **Primary reader:** `product owner, wallet implementer, privacy architect`
- **Lead narrator:** `Sofia`
- **Navigation role:** `wallet privacy bridge`
- **Post-level reader shift:** `structured -> confident`
- **Dominant tensions:** `policy-shaped request vs human comprehension`; `required claims vs optional disclosure`; `cryptographic capability vs usable consent`
- **Proof surfaces:** `selective-disclosure`, `marty-authenticator/lib/widgets/selective_disclosure_sheet.dart`, `presentation-protocols`, `data-minimization-in-identity`, `marty-authenticator/DEEP_LINKING.md`
- **Default handoff:** `wallet-ux-design-for-identity`

#### Scene Card 1 — A verifier request still has to make sense to the holder
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `translates minimum disclosure from a verifier-policy concern into a holder decision problem`
- **Focal entities:** `Presentation Policy`, `wallet`, `holder`
- **Setting:** `threshold_decision_point`
- **Stakes:** `privacy`, `operational`
- **Active primitives / abstractions:** `Presentation Policy`; `requested claims`; `wallet UI`
- **Scene summary:** `Show that a bounded verifier request still needs a human-readable holder-side explanation before the wallet can ask for informed consent.`
- **Proof surfaces:** `presentation-protocols`, `data-minimization-in-identity`
- **Handoff:** `move from the verifier request into the wallet translation layer`

#### Scene Card 2 — Wallets turn policy into claim choices
- **CAP role:** `complication`
- **Event type:** `implementation_walkthrough`
- **Reader-state contribution:** `makes holder-side disclosure mediation concrete instead of leaving it as a cryptography abstraction`
- **Focal entities:** `wallet`, `holder`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `privacy`, `security`, `operational`
- **Active primitives / abstractions:** `required attributes`; `optional disclosures`; `risk labels`
- **Scene summary:** `Explain how wallet UI maps required vs optional claims, keeps mandatory claims locked, and lets the holder adjust only what the policy still leaves open.`
- **Proof surfaces:** `marty-authenticator/lib/widgets/selective_disclosure_sheet.dart`, `selective-disclosure`
- **Handoff:** `move from claim selection into privacy modes and bounded consent`

#### Scene Card 3 — Risk labels and privacy modes keep consent bounded
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes structured -> confident by showing how wallets keep disclosure legible without abandoning the policy boundary`
- **Focal entities:** `wallet`, `holder`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `privacy`, `security`, `clarity`
- **Active primitives / abstractions:** `PrivacyMode`; `privacy impact`; `usage restrictions`
- **Scene summary:** `Land risk labeling, privacy modes, and impact scoring as the wallet’s way of turning disclosure policy into understandable consent rather than silent attribute release.`
- **Proof surfaces:** `marty-authenticator/lib/widgets/selective_disclosure_sheet.dart`, `marty-authenticator/DEEP_LINKING.md`
- **Handoff:** `direct to wallet-ux-design-for-identity or selective-disclosure`

### Post Card — Wallet UX Design for Identity

- **Slug:** `wallet-ux-design-for-identity`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** `Operational Proof`
- **Primary reader:** `product lead, architect, UX-minded implementer`
- **Lead narrator:** `Sofia`
- **Navigation role:** `wallet UX bridge`
- **Post-level reader shift:** `confident -> evaluative`
- **Dominant tensions:** `security rigor vs user clarity`; `bounded consent vs consent fatigue`; `happy-path polish vs recovery truth`
- **Proof surfaces:** `marty-authenticator/lib/widgets/selective_disclosure_sheet.dart`, `product-catalog/products/authenticator/roadmap.md`, `product-catalog/products/authenticator/overview.md`, `marty-authenticator/DEEP_LINKING.md`, `eudi-wallet-model-explained`
- **Default handoff:** `eudi-wallet-model-explained`

#### Scene Card 1 — Trust fails when the wallet cannot explain itself
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `reframes wallet UX as trust-critical infrastructure instead of surface polish`
- **Focal entities:** `wallet`, `protagonist_reader`, `skeptic`
- **Setting:** `threshold_decision_point`
- **Stakes:** `privacy`, `operational`, `security`
- **Active primitives / abstractions:** `requester identity`; `bounded request`; `trust signal`
- **Scene summary:** `Show that identity UX fails when requester intent, credential effect, and device-security state stay implicit or opaque to the holder.`
- **Proof surfaces:** `product-catalog/products/authenticator/overview.md`, `eudi-wallet-model-explained`
- **Handoff:** `move from the trust problem into the design patterns that make requests legible`

#### Scene Card 2 — Good identity UX makes request, requester, and risk legible
- **CAP role:** `complication`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `gives the reader a practical design lens for serious wallet surfaces`
- **Focal entities:** `wallet`, `holder`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `privacy`, `clarity`, `operational`
- **Active primitives / abstractions:** `risk levels`; `required fields`; `privacy mode`; `local auth`
- **Scene summary:** `Explain how requester identity, disclosure scope, risk cues, and local-auth prompts can be shown clearly enough to earn informed trust without overwhelming the holder.`
- **Proof surfaces:** `marty-authenticator/lib/widgets/selective_disclosure_sheet.dart`, `marty-authenticator/DEEP_LINKING.md`
- **Handoff:** `move from the happy path into recovery and offline paths`

#### Scene Card 3 — Recovery, offline flow, and refusal paths decide whether users keep trusting the wallet
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes confident -> evaluative by showing that trust depends on good failure and fallback paths as much as on polished happy-path screens`
- **Focal entities:** `wallet`, `holder`, `field_operation_runtime`
- **Setting:** `field_operation_runtime`
- **Stakes:** `continuity`, `operational`, `security`
- **Active primitives / abstractions:** `offline QR presentation`; `backup guidance`; `refusal path`
- **Scene summary:** `Land the idea that offline presentation, backup and recovery guidance, and safe refusal or cancel flows matter as much as the polished presentation screen if users are going to keep trusting the wallet.`
- **Proof surfaces:** `product-catalog/products/authenticator/roadmap.md`, `product-catalog/products/authenticator/overview.md`, `marty-authenticator/DEEP_LINKING.md`
- **Handoff:** `direct to eudi-wallet-model-explained or deploy-age-verification`

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
- **Proof surfaces:** `presentation-policies-minimum-disclosure`, `data-minimization-in-identity`, `zero-knowledge-predicates-identity`, `sd-jwt-selective-disclosure-deep-dive`
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

### Post Card — How Credential Issuance Works

- **Slug:** `how-credential-issuance-works`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** Operational Proof
- **Primary reader:** `architect, implementer, product owner`
- **Lead narrator:** `Daniel`
- **Navigation role:** `mechanics bridge`
- **Post-level reader shift:** `structured -> confident`
- **Dominant tensions:** `issuance endpoint vs governed lifecycle`; `transport protocol vs credential meaning`; `approval workflow vs delivery mechanics`
- **Proof surfaces:** `issuance-flows`, `impl-oid4vci`, `credential-templates-designing-what-gets-issued`, `flows-orchestrating-identity-lifecycle`, `marty-protocol/README.md`
- **Default handoff:** `presentation-protocols` or `impl-oid4vci`

#### Scene Card 1 — Issuance starts before transport
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `replaces the “issuance is an endpoint call” model with the idea that issuance begins in governed template, trust, and approval decisions`
- **Focal entities:** `Credential Template`, `Flow`, `issuer`, `protagonist_reader`
- **Setting:** `institutional_environment`
- **Stakes:** `operational`, `governance`, `security`
- **Active primitives / abstractions:** `Credential Template`, `Flow`, `Trust Profile`
- **Scene summary:** `Show that a serious issuance run starts with what is being issued, who is allowed to issue it, and which approval path governs it before any wallet exchange begins.`
- **Proof surfaces:** `issuance-flows`, `credential-templates-designing-what-gets-issued`, `flows-orchestrating-identity-lifecycle`
- **Handoff:** `move from lifecycle setup into the transport layer that carries delivery`

#### Scene Card 2 — OID4VCI carries delivery, not meaning
- **CAP role:** `complication`
- **Event type:** `implementation_walkthrough`
- **Reader-state contribution:** `keeps the reader architecture-focused while explaining the two main OID4VCI grant paths`
- **Focal entities:** `Flow`, `Credential Template`, `ally_tooling`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `interoperability`, `operational`
- **Active primitives / abstractions:** `OID4VCI`, `authorization_code`, `pre_authorized_code`, `Flow`
- **Scene summary:** `Compare authorization-code and pre-authorized-code issuance as two ways to move the same governed issuance over the wire without letting the OAuth exchange redefine the credential model.`
- **Proof surfaces:** `issuance-flows`, `impl-oid4vci`, `marty-protocol/README.md`
- **Handoff:** `move from delivery into the records and state that survive the exchange`

#### Scene Card 3 — Issuance becomes durable operational evidence
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes structured -> confident by showing that issuance remains governable after the credential reaches the holder`
- **Focal entities:** `Flow`, `issuer`, `holder`, `ally_peer`
- **Setting:** `field_operation_runtime`
- **Stakes:** `operational`, `security`, `continuity`
- **Active primitives / abstractions:** `Flow`, `IssuanceRecord`, `IssuedCredential`, `Credential Template`
- **Scene summary:** `Land the point that issuance is not complete when the credential is delivered; the system still needs lifecycle state, issuance evidence, and durable credential tracking for renewal, revocation, and support.`
- **Proof surfaces:** `impl-oid4vci`, `flows-orchestrating-identity-lifecycle`, `mip-json-schemas-walkthrough`
- **Handoff:** `direct to presentation-protocols or back to credential-lifecycle`

### Post Card — Presentation Protocols

- **Slug:** `presentation-protocols`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** Operational Proof
- **Primary reader:** `architect, implementer`
- **Lead narrator:** `Daniel`
- **Navigation role:** `mechanics bridge`
- **Post-level reader shift:** `structured -> confident`
- **Dominant tensions:** `raw credential dump vs bounded verifier request`; `transport protocol vs disclosure policy`; `same-device convenience vs cross-device security`
- **Proof surfaces:** `presentation-flows`, `impl-oid4vp`, `presentation-policies-minimum-disclosure`, `foundations-verification`, `selective-disclosure`
- **Default handoff:** `interoperability-between-credential-formats` or `impl-oid4vp`

#### Scene Card 1 — The verifier asks a policy-shaped question
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `anchors presentation in the verifier’s bounded request instead of in a holder dumping raw credential data`
- **Focal entities:** `Presentation Policy`, `verifier`, `holder`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `privacy`, `operational`, `security`
- **Active primitives / abstractions:** `Presentation Policy`, `required claims`, `required predicates`
- **Scene summary:** `Show that presentation starts when the verifier declares the least information needed for the decision, not when the holder starts sharing whatever the wallet happens to contain.`
- **Proof surfaces:** `presentation-policies-minimum-disclosure`, `foundations-verification`, `presentation-flows`
- **Handoff:** `move from the request boundary into the protocol that carries it`

#### Scene Card 2 — OID4VP carries the request and response
- **CAP role:** `complication`
- **Event type:** `implementation_walkthrough`
- **Reader-state contribution:** `makes the request/response mechanics concrete without losing the policy boundary`
- **Focal entities:** `holder`, `verifier`, `ally_tooling`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `interoperability`, `operational`
- **Active primitives / abstractions:** `OID4VP`, `Presentation Definition`, `vp_token`, `presentation_submission`
- **Scene summary:** `Explain how an OID4VP authorization request and presentation definition let the wallet find matching credentials, apply disclosure rules, and return a bounded presentation token.`
- **Proof surfaces:** `presentation-flows`, `impl-oid4vp`, `selective-disclosure`
- **Handoff:** `move from protocol carriage into replay protection and device flow shape`

#### Scene Card 3 — Presentation safety depends on binding and flow shape
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes structured -> confident by showing why secure presentation depends on more than just sending the right claims`
- **Focal entities:** `holder`, `verifier`, `wallet`, `ally_peer`
- **Setting:** `field_operation_runtime`
- **Stakes:** `security`, `privacy`, `operational`
- **Active primitives / abstractions:** `nonce`, `holder binding`, `same-device flow`, `cross-device flow`
- **Scene summary:** `Land the runtime mechanics that keep presentation honest: nonce-bound responses, holder proof-of-possession, and the practical differences between same-device redirects and cross-device QR flows.`
- **Proof surfaces:** `impl-oid4vp`, `presentation-flows`, `marty-authenticator/DEEP_LINKING.md`
- **Handoff:** `direct to interoperability-between-credential-formats or presentation-policies-minimum-disclosure`

### Post Card — Interoperability Between Credential Formats

- **Slug:** `interoperability-between-credential-formats`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** Constraint Layer
- **Primary reader:** `architect, implementer, standards-minded evaluator`
- **Lead narrator:** `Daniel`
- **Navigation role:** `interoperability bridge`
- **Post-level reader shift:** `confident -> evaluative`
- **Dominant tensions:** `same job vs incompatible packaging`; `format support vs real interoperability`; `wishful transcoding vs explicit compatibility bundles`
- **Proof surfaces:** `foundations-credentials`, `impl-mdoc`, `impl-oid4vci`, `impl-oid4vp`, `marty-protocol/SPECIFICATION.md`, `mobile-wallet-architectures`
- **Default handoff:** `mobile-driving-licenses-iso-18013-5` or `impl-mdoc`

#### Scene Card 1 — Format diversity is real, but the job is stable
- **CAP role:** `setup`
- **Event type:** `comparison`
- **Reader-state contribution:** `keeps readers from mistaking format variety for architectural chaos`
- **Focal entities:** `protagonist_reader`, `standards_cluster`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `interoperability`, `clarity`
- **Active primitives / abstractions:** `W3C VC`, `SD-JWT`, `mDoc`
- **Scene summary:** `Compare the major credential families as different envelopes for the same basic job: carry trusted claims, preserve issuer proof, and support verifier decisions.`
- **Proof surfaces:** `foundations-credentials`, `impl-mdoc`, `verifiable-credentials-explained`
- **Handoff:** `move from same-job framing into the actual compatibility boundary`

#### Scene Card 2 — Compatibility is bundle-based, not magical
- **CAP role:** `complication`
- **Event type:** `standards_mapping`
- **Reader-state contribution:** `forces the reader to think in explicit compatibility bundles instead of vague “supports formats” claims`
- **Focal entities:** `Wallet Profile`, `standards_cluster`, `protagonist_reader`
- **Setting:** `ecosystem_network`
- **Stakes:** `interoperability`, `operational`, `regulatory`
- **Active primitives / abstractions:** `credential_format`, `issuance_protocol`, `compliance_profile_code`, `Wallet Profile`
- **Scene summary:** `Explain that interoperability depends on aligning format, issuance or presentation protocol, and compliance expectations together rather than assuming any verifier can parse any credential in any context.`
- **Proof surfaces:** `mobile-wallet-architectures`, `impl-oid4vci`, `impl-oid4vp`, `marty-protocol/SPECIFICATION.md`
- **Handoff:** `move from compatibility limits into the stable model underneath`

#### Scene Card 3 — One model can survive multiple format families
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes confident -> evaluative by showing where Marty actually reduces cross-format complexity`
- **Focal entities:** `five_mip_primitives`, `standards_cluster`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `interoperability`, `operational`, `strategic`
- **Active primitives / abstractions:** `Trust Profile`, `Credential Template`, `Presentation Policy`, `Deployment Profile`, `Flow`
- **Scene summary:** `Land the value of Marty’s object model: trust, issuance, disclosure, and deployment can stay explicit and stable even while the edge format shifts between SD-JWT, VC-JWT, and mDoc ecosystems.`
- **Proof surfaces:** `foundations-credentials`, `one-protocol-many-ecosystems`, `impl-mdoc`, `marty-protocol/README.md`
- **Handoff:** `direct to mobile-driving-licenses-iso-18013-5, impl-mdoc, or one-protocol-many-ecosystems`

### Post Card — Mobile Driving Licenses and ISO 18013-5

- **Slug:** `mobile-driving-licenses-iso-18013-5`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** `Operational Proof`
- **Primary reader:** `standards-minded architect, implementer, product owner`
- **Lead narrator:** `Aiko`
- **Navigation role:** `standards bridge`
- **Post-level reader shift:** `confident -> evaluative`
- **Dominant tensions:** `phone-wallet convenience vs government trust discipline`; `issuer-signed data vs device-bound proof`; `standards compliance vs runtime and wallet fragmentation`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/wallet-profile/SPECIFICATION.md`, `marty-protocol/cedar/policies/credential_verification.cedar`, `marty-ui/docs/PKI-Trust-Model.md`, `interoperability-between-credential-formats`, `mobile-wallet-architectures`
- **Default handoff:** `how-governments-build-identity-pki`

#### Scene Card 1 — A phone-held licence still has to feel like government trust
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `reframes the reader’s mental model from “wallet card on a phone” to “government credential under holder-side runtime pressure”`
- **Focal entities:** `aiko_tanaka`, `wallet`, `issuer`, `protagonist_reader`
- **Setting:** `field_operation_runtime`
- **Stakes:** `security`, `interoperability`, `operational`
- **Active primitives / abstractions:** `mDoc`; `holder binding`; `Trust Profile`
- **Scene summary:** `Show that a mobile driving licence has to preserve issuer authority, selective disclosure, and verifier trust even though the credential now lives on a personal device.`
- **Proof surfaces:** `interoperability-between-credential-formats`, `mobile-wallet-architectures`, `marty-protocol/docs/glossary.md`
- **Handoff:** `move from the problem statement into the ISO 18013-5 exchange and data model`

#### Scene Card 2 — mDoc combines issuer-signed data with device-bound proof
- **CAP role:** `trigger`
- **Event type:** `standards_mapping`
- **Reader-state contribution:** `turns ISO 18013-5 from a standards acronym into a concrete structure and exchange model`
- **Focal entities:** `wallet`, `verifier`, `issuer`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `privacy`, `interoperability`
- **Active primitives / abstractions:** `mDoc`; `DeviceEngagement`; `DeviceRequest`; `DeviceResponse`; `holder binding`
- **Scene summary:** `Explain how ISO 18013-5 uses mDoc structure, namespace-and-element requests, and a device-bound response to let the holder disclose only what the verifier needs while preserving issuer trust.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/docs/glossary.md`, `marty-protocol/cedar/policies/credential_verification.cedar`
- **Handoff:** `move from the standard’s structure into the trust and deployment conditions that decide whether it works outside the spec`

#### Scene Card 3 — Trust lists and runtime policy decide whether mDL works in production
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes confident -> evaluative by showing that trust distribution, wallet compatibility, and freshness policy are where real mDL deployments succeed or fail`
- **Focal entities:** `Trust Profile`, `Deployment Profile`, `wallet`, `field_operation_runtime`
- **Setting:** `field_operation_runtime`
- **Stakes:** `operational`, `security`, `interoperability`
- **Active primitives / abstractions:** `AAMVA_MDL`; `EUDI_MDL`; `TRUST_LIST`; `Wallet Profile`; `holder binding`
- **Scene summary:** `Land the practical reality that AAMVA and EUDI deployments depend on trust-list distribution, compatible wallets, holder-binding rules, and bounded online/offline policies rather than on the format name alone.`
- **Proof surfaces:** `marty-protocol/protocol/wallet-profile/SPECIFICATION.md`, `marty-protocol/docs/implementation-guide.md`, `marty-ui/docs/PKI-Trust-Model.md`
- **Handoff:** `direct to how-governments-build-identity-pki or back to mobile-wallet-architectures`

### Post Card — How Governments Build Identity PKI

- **Slug:** `how-governments-build-identity-pki`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** `Operational Proof`
- **Primary reader:** `standards-minded architect, regulated buyer, operator`
- **Lead narrator:** `Aiko`
- **Navigation role:** `trust infrastructure bridge`
- **Post-level reader shift:** `structured -> confident`
- **Dominant tensions:** `sovereign roots vs cross-border portability`; `certificate hierarchy vs distribution discipline`; `fresh trust material vs offline verifier resilience`
- **Proof surfaces:** `marty-ui/docs/PKI-Trust-Model.md`, `marty-protocol/docs/implementation-guide.md`, `marty-protocol/docs/glossary.md`, `marty-protocol/SPECIFICATION.md`, `what-icao-9303-specifies`, `how-passport-pki-works`
- **Default handoff:** `how-passport-pki-works`

#### Scene Card 1 — Government trust has to travel farther than one agency boundary
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `frames government PKI as a portability problem across sovereign issuers and verifier environments rather than as a generic certificate topic`
- **Focal entities:** `aiko_tanaka`, `protagonist_reader`, `trust_anchor`, `field_operation_runtime`
- **Setting:** `ecosystem_network`
- **Stakes:** `security`, `regulatory`, `operational`
- **Active primitives / abstractions:** `Trust Profile`; `trust list`; `trusted issuer`
- **Scene summary:** `Show why governments need identity trust that can move across borders, agencies, and offline checkpoints without turning every verification into a live call to the issuer.`
- **Proof surfaces:** `what-icao-9303-specifies`, `how-passport-pki-works`, `marty-protocol/docs/glossary.md`
- **Handoff:** `move from the problem into the hierarchy and distribution model that solves it`

#### Scene Card 2 — Root authorities, signers, and trust lists make sovereign PKI portable
- **CAP role:** `trigger`
- **Event type:** `standards_mapping`
- **Reader-state contribution:** `gives the reader a concrete government PKI ladder that spans passport, mDL, and trust-list ecosystems`
- **Focal entities:** `trust_anchor`, `issuer`, `ecosystem_network`, `ally_tooling`
- **Setting:** `ecosystem_network`
- **Stakes:** `interoperability`, `security`
- **Active primitives / abstractions:** `CSCA`; `IACA`; `document signer`; `PKD_URL`; `TRUST_LIST`
- **Scene summary:** `Explain how governments separate top-level authorities from shorter-lived signers, then distribute the resulting roots and signer material through PKD, AAMVA DTS, or EU trusted lists so other verifiers can validate locally.`
- **Proof surfaces:** `marty-ui/docs/PKI-Trust-Model.md`, `marty-protocol/docs/implementation-guide.md`, `marty-protocol/docs/glossary.md`
- **Handoff:** `move from the trust ladder into the rollover, revocation, and offline burdens that make government PKI operationally demanding`

#### Scene Card 3 — Rollover and freshness are the real operating burden
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes structured -> confident by showing that government PKI succeeds or fails on refresh discipline, not just certificate theory`
- **Focal entities:** `field_operation_runtime`, `Deployment Profile`, `ally_peer`, `protagonist_reader`
- **Setting:** `field_operation_runtime`
- **Stakes:** `security`, `operational`, `continuity`
- **Active primitives / abstractions:** `trust anchor cache`; `revocation policy`; `offline grace`; `time policy`
- **Scene summary:** `Land the operator reality: roots rotate, revocation rules bite, and offline verifiers only stay credible when trust packages are refreshed and bounded deliberately.`
- **Proof surfaces:** `marty-ui/docs/PKI-Trust-Model.md`, `marty-protocol/SPECIFICATION.md`, `marty-protocol/docs/implementation-guide.md`
- **Handoff:** `direct to how-passport-pki-works or mobile-driving-licenses-iso-18013-5`

## Wave 3 — Governance recovery post cards

These cards recover the governance cluster that sits between privacy/compliance framing and the trust-infrastructure wave. They should make institutional rule-setting, authorization models, policy engines, and shared ecosystem governance legible without re-explaining the same Cedar syntax or trust-registry mechanics already covered elsewhere.

### Post Card — Identity Governance Models

- **Slug:** `identity-governance-models`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** `Constraint Layer`
- **Primary reader:** `buyer, architect, governance lead`
- **Lead narrator:** `Elena`
- **Navigation role:** `governance opener`
- **Post-level reader shift:** `structured -> serious`
- **Dominant tensions:** `centralized control vs federated coordination`; `governance clarity vs application sprawl`; `institutional authority vs local runtime autonomy`
- **Proof surfaces:** `compliance-profiles-in-practice`, `compliance-profiles-bridging-regulation`, `guides/03-world-building/protocol-ecosystem-map.md`, `product-catalog/pricing-and-packaging.md`, `product-catalog/offering-matrix.md`
- **Default handoff:** `rbac-vs-abac` or `policy-engines-for-identity-systems`

#### Scene Card 1 — Every credential ecosystem inherits a governance model
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `makes governance feel unavoidable once more than one issuer or verifier matters`
- **Focal entities:** `governance_authority`, `issuer`, `verifier`, `protagonist_reader`
- **Setting:** `institutional_environment`
- **Stakes:** `governance`, `operational`, `interoperability`
- **Active primitives / abstractions:** `governance model`; `issuer legitimacy`; `change control`
- **Scene summary:** `Show that the moment a credential ecosystem spans multiple actors, somebody has to decide which issuers count, which rule changes apply, and how that authority is exercised.`
- **Proof surfaces:** `compliance-profiles-in-practice`, `guides/03-world-building/protocol-ecosystem-map.md`
- **Handoff:** `move from inevitability into the main governance model shapes`

#### Scene Card 2 — Centralized, federated, and ecosystem-led models optimize different control shapes
- **CAP role:** `trigger`
- **Event type:** `comparison`
- **Reader-state contribution:** `gives the reader a stable comparison of enterprise-owned, shared-network, and accreditation-driven governance`
- **Focal entities:** `governance_authority`, `ecosystem_network`, `ally_peer`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `governance`, `operational`, `economic`
- **Active primitives / abstractions:** `centralized governance`; `federation`; `accreditation framework`; `trust list`
- **Scene summary:** `Compare the major governance shapes and show that each one optimizes a different balance of speed, control, portability, and coordination cost.`
- **Proof surfaces:** `guides/03-world-building/protocol-ecosystem-map.md`, `product-catalog/pricing-and-packaging.md`, `compliance-profiles-bridging-regulation`
- **Handoff:** `move from governance models into how Marty makes them explicit`

#### Scene Card 3 — Governed objects beat hidden admin habits
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes structured -> serious by turning governance from committee language into explicit system objects`
- **Focal entities:** `Compliance Profile`, `Trust Profile`, `Policy Set`, `Deployment Profile`
- **Setting:** `workbench_design_review`
- **Stakes:** `governance`, `operational`, `security`
- **Active primitives / abstractions:** `Compliance Profile`; `Trust Profile`; `Policy Set`; `Deployment Profile`
- **Scene summary:** `Land the Marty move: governance should live in named, reviewable objects rather than in informal admin habits or app-by-app exceptions.`
- **Proof surfaces:** `marty-protocol/docs/design-principles.md`, `compliance-profiles-in-practice`, `product-catalog/offering-matrix.md`
- **Handoff:** `direct to rbac-vs-abac or policy-engines-for-identity-systems`

### Post Card — RBAC vs ABAC

- **Slug:** `rbac-vs-abac`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** `Constraint Layer`
- **Primary reader:** `security architect, implementer, platform admin`
- **Lead narrator:** `Elena`
- **Navigation role:** `authorization comparison bridge`
- **Post-level reader shift:** `serious -> confident`
- **Dominant tensions:** `simple roles vs expressive attributes`; `auditability vs policy sprawl`; `static group mapping vs contextual decisions`
- **Proof surfaces:** `cedar-policies-for-identity-governance`, `marty-microservices-framework/mmf/framework/authorization/adapters/abac_engine.py`, `marty-ui/packages/marty_common/cedar_actions.py`, `marty-protocol/docs/cedar-policies.md`, `deploy-enterprise-access`
- **Default handoff:** `policy-engines-for-identity-systems` or `cedar-policies-for-identity-governance`

#### Scene Card 1 — Roles get you moving fast, and then start leaking exceptions
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `shows why role-only authorization feels neat until the first real exception set arrives`
- **Focal entities:** `Role`, `principal`, `skeptic`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `operational`
- **Active primitives / abstractions:** `role`; `action`; `permission boundary`
- **Scene summary:** `Explain that RBAC is the fastest way to make common permissions legible, but it becomes brittle once departments, environments, and special-case entitlements start piling up.`
- **Proof surfaces:** `marty-ui/packages/marty_common/cedar_actions.py`, `deploy-enterprise-access`
- **Handoff:** `move from coarse role logic into the contextual questions roles cannot answer cleanly`

#### Scene Card 2 — Attributes recover nuance but widen the decision surface
- **CAP role:** `trigger`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `turns ABAC from jargon into a concrete model of principal, resource, action, and environment conditions`
- **Focal entities:** `principal`, `resource`, `environment`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `operational`, `governance`
- **Active primitives / abstractions:** `attribute condition`; `resource pattern`; `environment`; `policy priority`
- **Scene summary:** `Show how department, resource state, time, and other attributes recover the nuance RBAC cannot express without exploding the role catalog.`
- **Proof surfaces:** `marty-microservices-framework/mmf/framework/authorization/adapters/abac_engine.py`, `marty-microservices-framework/mmf/framework/authorization/ports/abac.py`
- **Handoff:** `move from ABAC nuance into the combined Marty policy model`

#### Scene Card 3 — Cedar can host both without splitting the architecture
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes serious -> confident by showing that roles and attributes can live inside one governed policy surface`
- **Focal entities:** `Policy Set`, `Role`, `principal`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `security`, `governance`, `operational`
- **Active primitives / abstractions:** `Policy Set`; `permit`; `forbid`; `action mapping`
- **Scene summary:** `Land the Marty pattern: Cedar keeps actions legible for role-based control while still letting attribute conditions narrow or extend the decision honestly.`
- **Proof surfaces:** `marty-protocol/docs/cedar-policies.md`, `cedar-policies-for-identity-governance`, `deploy-enterprise-access`
- **Handoff:** `direct to policy-engines-for-identity-systems or cedar-policies-for-identity-governance`

### Post Card — Policy Engines for Identity Systems

- **Slug:** `policy-engines-for-identity-systems`
- **CAP unit alignment:** `artifact_adoption_proof`
- **Gravity well:** `Artifact and Adoption Proof`
- **Primary reader:** `implementer, architect, evaluator`
- **Lead narrator:** `Elena`
- **Navigation role:** `policy architecture bridge`
- **Post-level reader shift:** `serious -> design_ready`
- **Dominant tensions:** `hardcoded rules vs governed policy`; `expressive power vs operator clarity`; `runtime decisions vs deploy-time validation`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/docs/design-principles.md`, `marty-protocol/docs/cedar-integration-guide.md`, `marty-ui/packages/marty_common/cedar_engine.py`, `marty-ui/services/organization/application/policy_set_use_cases.py`
- **Default handoff:** `cedar-policies-for-identity-governance`

#### Scene Card 1 — Hardcoded identity rules decay into application sprawl
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `shows why access, verification, and approval logic become fragile when they stay inside handlers and middleware`
- **Focal entities:** `protagonist_reader`, `service_handler`, `skeptic`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `operational`, `governance`
- **Active primitives / abstractions:** `hardcoded rule`; `approval path`; `verification rule`
- **Scene summary:** `Frame the problem: identity systems accumulate too many decision points to keep policy hidden inside service code without drift and audit pain.`
- **Proof surfaces:** `compliance-profiles-in-practice`, `marty-protocol/docs/design-principles.md`
- **Handoff:** `move from the code-sprawl problem into the policy-engine shape that replaces it`

#### Scene Card 2 — A policy engine evaluates principal, action, resource, and context at runtime
- **CAP role:** `trigger`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `gives the reader a stable evaluation model that works across API access, credential verification, and approvals`
- **Focal entities:** `principal`, `action`, `resource`, `context`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `operational`, `interoperability`
- **Active primitives / abstractions:** `Policy Set`; `principal`; `action`; `resource`; `context`
- **Scene summary:** `Explain how a policy engine turns identity decisions into one repeatable evaluation shape instead of one-off service logic per endpoint or flow stage.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/docs/cedar-integration-guide.md`, `marty-ui/packages/marty_common/cedar_engine.py`
- **Handoff:** `move from runtime shape into why Cedar is the chosen engine`

#### Scene Card 3 — Cedar fits MIP because policy can be validated, activated, and audited as data
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes serious -> design_ready by tying formal verification, lifecycle management, and operator clarity into one policy surface`
- **Focal entities:** `Policy Set`, `audit_log`, `ally_tooling`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `security`, `governance`, `continuity`
- **Active primitives / abstractions:** `deny-by-default`; `static analysis`; `DRAFT`; `ACTIVE`; `ARCHIVED`
- **Scene summary:** `Land the reason Cedar fits Marty: policies are deny-by-default, schema-validated, lifecycle-managed, and auditable instead of being opaque rule blobs.`
- **Proof surfaces:** `marty-protocol/docs/design-principles.md`, `marty-protocol/SPECIFICATION.md`, `marty-ui/services/organization/application/policy_set_use_cases.py`
- **Handoff:** `direct to cedar-policies-for-identity-governance or deploy-enterprise-access`

### Post Card — Governing Credential Ecosystems

- **Slug:** `governing-credential-ecosystems`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** `Constraint Layer`
- **Primary reader:** `buyer, ecosystem architect, governance lead`
- **Lead narrator:** `Elena`
- **Navigation role:** `ecosystem governance bridge`
- **Post-level reader shift:** `serious -> confident`
- **Dominant tensions:** `shared ecosystem rules vs bilateral partner sprawl`; `membership governance vs local verifier policy`; `framework legitimacy vs registry mechanics`
- **Proof surfaces:** `guides/03-world-building/protocol-ecosystem-map.md`, `building-trust-registries-at-scale`, `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`, `marty-protocol/SPECIFICATION.md`, `product-catalog/pricing-and-packaging.md`
- **Default handoff:** `trust-registries-explained`

#### Scene Card 1 — Portable credentials need shared ecosystem rules first
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `shows why transport compatibility is not enough when issuer legitimacy still has to travel across organizations`
- **Focal entities:** `ecosystem_network`, `governance_authority`, `verifier`, `protagonist_reader`
- **Setting:** `ecosystem_network`
- **Stakes:** `governance`, `interoperability`, `operational`
- **Active primitives / abstractions:** `governance framework`; `issuer eligibility`; `compliance bundle`
- **Scene summary:** `Show that portable credentials become operational only when the ecosystem first agrees who belongs, what counts as acceptable participation, and how those answers change.`
- **Proof surfaces:** `guides/03-world-building/protocol-ecosystem-map.md`, `building-trust-registries-at-scale`
- **Handoff:** `move from the ecosystem problem into the framework decisions that solve it`

#### Scene Card 2 — Frameworks decide membership, obligations, and change cadence
- **CAP role:** `trigger`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `turns ecosystem governance from vague standards talk into explicit membership, obligation, and change-control rules`
- **Focal entities:** `governance_authority`, `issuer`, `ally_peer`, `protagonist_reader`
- **Setting:** `institutional_environment`
- **Stakes:** `governance`, `security`, `operational`
- **Active primitives / abstractions:** `Compliance Profile`; `accreditation`; `trust framework`; `revocation state`
- **Scene summary:** `Explain that ecosystem governance decides who may issue, how suspension or revocation works, and how rule changes are carried across the network.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `guides/03-world-building/protocol-ecosystem-map.md`, `product-catalog/pricing-and-packaging.md`
- **Handoff:** `move from framework decisions into the infrastructure that distributes them`

#### Scene Card 3 — Registries distribute the outcome, but governance stays upstream
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes serious -> confident by separating rule-setting frameworks from the trust infrastructure that publishes their output`
- **Focal entities:** `trust_registry`, `Trust Profile`, `governance_authority`, `protagonist_reader`
- **Setting:** `ecosystem_network`
- **Stakes:** `governance`, `interoperability`, `resilience`
- **Active primitives / abstractions:** `trust registry`; `Trust Profile`; `Compliance Profile`; `snapshot`
- **Scene summary:** `Land the architectural boundary: governance frameworks decide the rules, registries distribute current trust state, and local trust profiles consume that state at verification time.`
- **Proof surfaces:** `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`, `building-trust-registries-at-scale`, `marty-protocol/SPECIFICATION.md`
- **Handoff:** `direct to trust-registries-explained or federation-in-identity-systems`

## Wave 4.5 — Primitive deep-dive recovery post cards

These cards deepen the four core primitives after the introductory explainers are already live. They are for readers who now need entity-level understanding of how Marty objects behave in configuration, validation, and runtime operations.

### Post Card — Trust Profile Evaluation and Failure Handling

- **Slug:** `trust-profile-evaluation-and-failure-handling`
- **Canonical role note:** this card is the specialized runtime follow-on to `trust-profiles-explained`; keep trust evaluation order, freshness posture, and fail-closed behavior in scope instead of repeating the concept introduction.
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** `Constraint Layer`
- **Primary reader:** `implementer, security architect, platform admin`
- **Lead narrator:** `Daniel`
- **Navigation role:** `runtime trust follow-on`
- **Post-level reader shift:** `confident -> design_ready`
- **Dominant tensions:** `explicit trust contract vs hidden verifier defaults`; `portable trust vs stale local assumptions`; `single registry vs hybrid trust models`
- **Proof surfaces:** `trust-profiles-explained`, `trust-profiles`, `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/trust-profile/SPECIFICATION.md`, `understanding-trust-anchors`, `building-trust-registries-at-scale`
- **Default handoff:** `building-trust-registries-at-scale`

#### Scene Card 1 — A Trust Profile is the security boundary
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `reframes the Trust Profile from “trust config” into the explicit security contract that gates both issuance and verification`
- **Focal entities:** `Trust Profile`, `protagonist_reader`, `skeptic`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `governance`, `interoperability`
- **Active primitives / abstractions:** `Trust Profile`; `trust_sources`; `compliance_status`
- **Scene summary:** `Show that a Trust Profile is the object that says who counts as trusted, which formats and algorithms are acceptable, and whether the rest of the system is even allowed to operate yet.`
- **Proof surfaces:** `trust-profiles-explained`, `trust-profiles`, `marty-protocol/README.md`
- **Handoff:** `move from the boundary itself into the trust-source and time-policy mechanics that make it real`

#### Scene Card 2 — Trust sources and time policy turn roots into runtime behavior
- **CAP role:** `trigger`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `turns trust anchors from abstract roots into concrete runtime inputs with refresh, freshness, and revocation consequences`
- **Focal entities:** `Trust Profile`, `trust_anchor`, `field_operation_runtime`, `ally_tooling`
- **Setting:** `ecosystem_network`
- **Stakes:** `security`, `operational`, `interoperability`
- **Active primitives / abstractions:** `ROOT_CA`; `TRUST_LIST`; `PKD_URL`; `PINNED_ISSUER`; `time_policy`; `revocation_profile_id`
- **Scene summary:** `Explain how trust-source types, allowed algorithms, supported formats, freshness windows, and revocation references combine to determine how a verifier actually evaluates trust in the field.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/trust-profile/SPECIFICATION.md`, `understanding-trust-anchors`
- **Handoff:** `move from trust mechanics into the algorithm and failure rules that keep them auditable`

#### Scene Card 3 — Evaluation and failure handling make trust auditable
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes confident -> design_ready by showing that trust success and trust failure are governed, reviewable outcomes rather than opaque library behavior`
- **Focal entities:** `Trust Profile`, `ally_peer`, `protagonist_reader`, `audit_log`
- **Setting:** `field_operation_runtime`
- **Stakes:** `security`, `operational`, `continuity`
- **Active primitives / abstractions:** `trust evaluation algorithm`; `verification_policy_set_id`; `compatible_compliance_codes`; `ISSUER_UNTRUSTED`
- **Scene summary:** `Walk through the normative evaluation sequence, fail-closed rules, and shared-registry patterns that make Trust Profiles inspectable across multiple standards ecosystems without verifier code drift.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/trust-profile/SPECIFICATION.md`, `building-trust-registries-at-scale`
- **Handoff:** `direct to building-trust-registries-at-scale or later to how-everything-works-together`

### Post Card — Credential Templates Explained

- **Slug:** `credential-templates-explained-deep`
- **CAP unit alignment:** `model_reveal`
- **Gravity well:** `Model Reveal`
- **Primary reader:** `implementer, program architect, compliance lead`
- **Lead narrator:** `Daniel`
- **Navigation role:** `primitive deep dive`
- **Post-level reader shift:** `confident -> design_ready`
- **Dominant tensions:** `schema file vs issuance contract`; `privacy posture vs default over-disclosure`; `reusable template vs one-off payload`
- **Proof surfaces:** `credential-templates-designing-what-gets-issued`, `credential-templates`, `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/credential-template/SPECIFICATION.md`, `how-credential-issuance-works`, `mip-json-schemas-walkthrough`
- **Default handoff:** `how-credential-issuance-works`

#### Scene Card 1 — A template is the master issuance contract
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `reframes the template from a claim-schema artifact into the governed contract that decides what may actually be issued`
- **Focal entities:** `Credential Template`, `Flow`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `operational`, `governance`, `interoperability`
- **Active primitives / abstractions:** `Credential Template`; `compliance_profile_id`; `application_template_id`; `trust_profile_id`
- **Scene summary:** `Show that a Credential Template decides the credential type, the governing compliance surface, optional workflow linkage, and the issuer context before any transport step exists.`
- **Proof surfaces:** `credential-templates-designing-what-gets-issued`, `credential-templates`, `how-credential-issuance-works`
- **Handoff:** `move from the issuance contract into the claim, privacy, and crypto mechanics inside it`

#### Scene Card 2 — Claims, privacy posture, and issuer artifacts govern issuance before transport
- **CAP role:** `trigger`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `makes the reader see the template as the place where claim shape, disclosure intent, validity, and signing material are designed together`
- **Focal entities:** `Credential Template`, `issuer`, `ally_tooling`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `privacy`, `security`, `operational`
- **Active primitives / abstractions:** `ClaimDefinition`; `validity_rules`; `privacy_posture`; `issuer_key_id`; `issuer_certificate_chain_pem`; `issuer_did`
- **Scene summary:** `Explain how unique claim names, derived claims, validity rules, privacy posture, and the issuer’s signing artifacts all have to line up before a template is safe to activate.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/credential-template/SPECIFICATION.md`, `mip-json-schemas-walkthrough`
- **Handoff:** `move from template anatomy into lifecycle and derivation discipline`

#### Scene Card 3 — Lifecycle and derivation keep templates reusable
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes confident -> design_ready by showing that template state and derivation rules keep issuance reusable instead of turning it into drift-prone payload generation`
- **Focal entities:** `Credential Template`, `Wallet Profile`, `Flow`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `operational`, `interoperability`, `continuity`
- **Active primitives / abstractions:** `DRAFT`; `ACTIVE`; `DEPRECATED`; `wallet compatibility derivation`; `auto_generate_artifacts`
- **Scene summary:** `Land the lifecycle rules that stop draft templates from reaching active flows, explain why deprecated templates still matter, and show how wallet compatibility is derived from the template’s compliance and issuance choices rather than guessed later.`
- **Proof surfaces:** `marty-protocol/protocol/credential-template/SPECIFICATION.md`, `marty-protocol/SPECIFICATION.md`, `how-credential-issuance-works`
- **Handoff:** `direct to how-credential-issuance-works or later to how-everything-works-together`

### Post Card — Presentation Policies Explained

- **Slug:** `presentation-policies-explained-deep`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** `Constraint Layer`
- **Primary reader:** `implementer, privacy architect, policy author`
- **Lead narrator:** `Daniel`
- **Navigation role:** `primitive deep dive`
- **Post-level reader shift:** `confident -> design_ready`
- **Dominant tensions:** `bounded verifier request vs claim hoarding`; `ZK ambition vs practical fallback`; `policy updates vs application rewrites`
- **Proof surfaces:** `presentation-policies-minimum-disclosure`, `presentation-policies`, `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/presentation-policy/SPECIFICATION.md`, `presentation-protocols`, `zero-knowledge-predicates-identity`, `selective-disclosure`
- **Default handoff:** `presentation-protocols`

#### Scene Card 1 — A presentation policy is a verifier contract
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `reframes the policy from “requested fields” into the machine-readable contract that defines the least information a verifier is allowed to require`
- **Focal entities:** `Presentation Policy`, `verifier`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `privacy`, `operational`, `security`
- **Active primitives / abstractions:** `required_claims`; `accepted_credential_types`; `trust_profile_id`
- **Scene summary:** `Show that a Presentation Policy begins with the verifier’s bounded question and its trust constraints, not with whatever the wallet happens to hold.`
- **Proof surfaces:** `presentation-policies-minimum-disclosure`, `presentation-policies`, `presentation-protocols`
- **Handoff:** `move from the request boundary into the predicate, fallback, and binding mechanics that shape the proof`

#### Scene Card 2 — Predicates, fallback, and holder binding shape the proof request
- **CAP role:** `trigger`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `turns the policy from a static list into a live proof contract that can choose raw claims, predicates, or hard failure depending on verifier requirements`
- **Focal entities:** `Presentation Policy`, `holder`, `verifier`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `privacy`, `security`, `interoperability`
- **Active primitives / abstractions:** `PredicateSpec`; `fallback_policy`; `holder_binding`; `freshness`; `supported_circuits`
- **Scene summary:** `Explain how predicates, raw fallback, proof-of-possession, nonce requirements, and freshness rules decide which proof shape the verifier can accept in practice.`
- **Proof surfaces:** `marty-protocol/protocol/presentation-policy/SPECIFICATION.md`, `zero-knowledge-predicates-identity`, `selective-disclosure`
- **Handoff:** `move from policy mechanics into how policy change stays out of verifier code`

#### Scene Card 3 — Dynamic policy is how verification changes without code drift
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes confident -> design_ready by showing that verifier behavior can evolve through governed policy updates instead of code branches and custom endpoint logic`
- **Focal entities:** `Presentation Policy`, `ally_peer`, `protagonist_reader`, `field_operation_runtime`
- **Setting:** `field_operation_runtime`
- **Stakes:** `operational`, `privacy`, `continuity`
- **Active primitives / abstractions:** `POST /evaluate`; `Flow`; `policy diff`; `stateless evaluation`
- **Scene summary:** `Land the operational advantage of Presentation Policies: they can be versioned, evaluated statelessly, or orchestrated through flows while keeping changing verifier requirements visible as governed data.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/presentation-policy/SPECIFICATION.md`, `presentation-protocols`
- **Handoff:** `direct to presentation-protocols or later to how-everything-works-together`

### Post Card — Deployment Profiles Explained

- **Slug:** `deployment-profiles-explained-deep`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** `Operational Proof`
- **Primary reader:** `operator, platform architect, implementer`
- **Lead narrator:** `Daniel`
- **Navigation role:** `primitive deep dive`
- **Post-level reader shift:** `confident -> design_ready`
- **Dominant tensions:** `stable trust logic vs varied runtime environments`; `offline resilience vs freshness discipline`; `abstract policy vs real lanes and devices`
- **Proof surfaces:** `deployment-profiles-from-design-to-production`, `deployment-profiles`, `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/deployment-profile/SPECIFICATION.md`, `deployment-profiles-in-practice`, `offline-verification-guide`
- **Default handoff:** `deployment-profiles-in-practice`

#### Scene Card 1 — A deployment profile is the runtime contract
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `reframes deployment configuration from “environment settings” into the operational contract that lets trust and policy run safely at real endpoints`
- **Focal entities:** `Deployment Profile`, `Trust Profile`, `Presentation Policy`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `operational`, `security`, `continuity`
- **Active primitives / abstractions:** `Deployment Profile`; `trust_profile_id`; `presentation_policy_ids`; `credential_template_ids`
- **Scene summary:** `Show that a Deployment Profile is the wrapper that binds abstract trust and disclosure logic to real endpoints, including which policies are active and whether issuance is possible there.`
- **Proof surfaces:** `deployment-profiles-from-design-to-production`, `deployment-profiles`, `marty-protocol/README.md`
- **Handoff:** `move from the contract itself into the hierarchy and network choices that shape runtime behavior`

#### Scene Card 2 — Network mode, lanes, and device assignment define runtime shape
- **CAP role:** `trigger`
- **Event type:** `deployment_pattern`
- **Reader-state contribution:** `turns deployment from a vague hosting choice into a legible hierarchy of online/offline posture, lanes, and device ownership`
- **Focal entities:** `Deployment Profile`, `field_operation_runtime`, `ally_tooling`, `protagonist_reader`
- **Setting:** `field_operation_runtime`
- **Stakes:** `operational`, `security`, `throughput`
- **Active primitives / abstractions:** `ONLINE`; `OFFLINE`; `HYBRID`; `Lane`; `device_ids`; `default_policy_id`
- **Scene summary:** `Explain how network mode, lane-specific overrides, and unique device assignments decide what a deployment can do at gates, kiosks, mobile surfaces, or APIs without rewriting trust logic.`
- **Proof surfaces:** `marty-protocol/protocol/deployment-profile/SPECIFICATION.md`, `deployment-profiles-in-practice`, `offline-verification-guide`
- **Handoff:** `move from endpoint structure into the update and cache behavior that keeps operations credible`

#### Scene Card 3 — Update channels and cache rules turn architecture into operations
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes confident -> design_ready by showing that update cadence, cache TTLs, and operator mode are what make deployment discipline real`
- **Focal entities:** `Deployment Profile`, `field_operation_runtime`, `ally_peer`, `protagonist_reader`
- **Setting:** `field_operation_runtime`
- **Stakes:** `operational`, `security`, `continuity`
- **Active primitives / abstractions:** `update_channel`; `offline_cache_ttl_seconds`; `operator_mode`; `key_access_mode`
- **Scene summary:** `Land the operational truth that Deployment Profiles are where cache windows, rollout channels, accessibility, operator interfaces, and hardware-key access become explicit rather than hidden in one-off endpoint code.`
- **Proof surfaces:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/deployment-profile/SPECIFICATION.md`, `deployment-profiles-in-practice`
- **Handoff:** `direct to deployment-profiles-in-practice or later to how-everything-works-together`

## Wave 5 — Trust infrastructure recovery post cards

These cards recover the trust-infrastructure cluster that sits between governance, federation, and verifier runtime operations. They are for readers who already understand trust anchors and trust profiles but still need the ecosystem and runtime surfaces that make multi-issuer verification actually work.

### Post Card — Trust Registries Explained

- **Slug:** `trust-registries-explained`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** `Constraint Layer`
- **Primary reader:** `architect, operator, governance lead`
- **Lead narrator:** `Victor`
- **Navigation role:** `trust-infrastructure opener`
- **Post-level reader shift:** `structured -> serious`
- **Dominant tensions:** `shared ecosystem trust vs private verifier allowlists`; `registry distribution vs central callback dependency`; `governance authority vs local verifier settings`
- **Proof surfaces:** `building-trust-registries-at-scale`, `guides/03-world-building/protocol-ecosystem-map.md`, `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`, `deploy-membership-credentials`
- **Default handoff:** `discovering-trusted-issuers`

#### Scene Card 1 — Ecosystem trust needs a shared directory
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `shows why multi-issuer ecosystems fail when each verifier keeps its own hidden trust assumptions`
- **Focal entities:** `governance_authority`, `verifier`, `protagonist_reader`
- **Setting:** `ecosystem_network`
- **Stakes:** `governance`, `interoperability`, `operational`
- **Active primitives / abstractions:** `trust registry`; `authorized issuer`; `trust list`
- **Scene summary:** `Show that issuer legitimacy has to travel farther than one verifier if a shared credential ecosystem is going to remain coherent.`
- **Proof surfaces:** `four-actors-of-identity-systems`, `deploy-membership-credentials`, `guides/03-world-building/protocol-ecosystem-map.md`
- **Handoff:** `move from the governance problem into the registry artifacts that solve it`

#### Scene Card 2 — Registries publish authority as current trust state
- **CAP role:** `trigger`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `turns the registry from a vague directory idea into a concrete package of issuer, anchor, jurisdiction, and status state`
- **Focal entities:** `trust_registry`, `issuer`, `trust_anchor`, `ally_tooling`
- **Setting:** `ecosystem_network`
- **Stakes:** `security`, `interoperability`, `operational`
- **Active primitives / abstractions:** `trust registry`; `issuer metadata`; `trust anchor`; `sequence state`
- **Scene summary:** `Explain that registries carry roots, issuer metadata, validity windows, status changes, and sync state rather than merely a list of names.`
- **Proof surfaces:** `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`, `marty-ui/services/trust_profile/main.py`, `building-trust-registries-at-scale`
- **Handoff:** `move from shared registry state into local verifier consumption`

#### Scene Card 3 — Local verifiers consume registries without centralizing decisions
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes structured -> serious by showing how shared registries and local Trust Profiles cooperate without collapsing into one central runtime`
- **Focal entities:** `Trust Profile`, `field_operation_runtime`, `protagonist_reader`
- **Setting:** `field_operation_runtime`
- **Stakes:** `operational`, `privacy`, `resilience`
- **Active primitives / abstractions:** `Trust Profile`; `OrganizationTrustProfile`; `trust registry`
- **Scene summary:** `Land the distinction between the ecosystem-wide registry and the verifier-local trust contract that consumes it.`
- **Proof surfaces:** `deploy-membership-credentials`, `trust-profiles-explained`, `marty-ui/services/trust_profile/main.py`
- **Handoff:** `direct to discovering-trusted-issuers or building-trust-registries-at-scale`

### Post Card — Federation in Identity Systems

- **Slug:** `federation-in-identity-systems`
- **CAP unit alignment:** `operational_proof`
- **Gravity well:** `Operational Proof`
- **Primary reader:** `ecosystem architect, product lead, operator`
- **Lead narrator:** `Victor`
- **Navigation role:** `ecosystem bridge`
- **Post-level reader shift:** `structured -> confident`
- **Dominant tensions:** `shared trust vs bilateral partner sprawl`; `federated verification vs centralized callback dependency`; `common governance vs local verifier autonomy`
- **Proof surfaces:** `deploy-membership-credentials`, `four-actors-of-identity-systems`, `guides/03-world-building/protocol-ecosystem-map.md`, `how-governments-build-identity-pki`
- **Default handoff:** `trust-registries-explained`

#### Scene Card 1 — Cross-org verification breaks when trust stays bilateral
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `shows why credentials become operationally fragile when every new partner still requires a custom trust path`
- **Focal entities:** `ecosystem_network`, `protagonist_reader`, `skeptic`
- **Setting:** `ecosystem_network`
- **Stakes:** `operational`, `interoperability`, `economic`
- **Active primitives / abstractions:** `issuer`; `verifier`; `bilateral integration`
- **Scene summary:** `Frame federation as the problem that appears when credentials have to cross organizational boundaries without sharing one platform runtime.`
- **Proof surfaces:** `deploy-membership-credentials`, `one-protocol-many-ecosystems`
- **Handoff:** `move from bilateral trust failure into the shared infrastructure that replaces it`

#### Scene Card 2 — Shared governance and registries make federation legible
- **CAP role:** `trigger`
- **Event type:** `reframe`
- **Reader-state contribution:** `turns federation from a vague interoperability promise into a governed trust architecture`
- **Focal entities:** `governance_authority`, `issuer`, `verifier`, `trust_registry`
- **Setting:** `ecosystem_network`
- **Stakes:** `governance`, `interoperability`, `security`
- **Active primitives / abstractions:** `trust registry`; `Trust Profile`; `Presentation Policy`
- **Scene summary:** `Explain how shared trust infrastructure lets separate issuers and verifiers recognize each other under one framework without collapsing into one system.`
- **Proof surfaces:** `four-actors-of-identity-systems`, `trust-registries-explained`, `how-governments-build-identity-pki`
- **Handoff:** `move from common trust state into local verifier autonomy`

#### Scene Card 3 — Local verification preserves autonomy inside a shared network
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes structured -> confident by showing why federation improves resilience and privacy instead of just partner reach`
- **Focal entities:** `field_operation_runtime`, `ally_peer`, `protagonist_reader`
- **Setting:** `field_operation_runtime`
- **Stakes:** `privacy`, `resilience`, `operational`
- **Active primitives / abstractions:** `local verification`; `OrganizationTrustProfile`; `Deployment Profile`
- **Scene summary:** `Land the payoff of federation: shared issuer legitimacy with local policy and local runtime decisions still intact.`
- **Proof surfaces:** `deploy-membership-credentials`, `offline-verification-guide`, `guides/03-world-building/protocol-ecosystem-map.md`
- **Handoff:** `direct to trust-registries-explained or discovering-trusted-issuers`

### Post Card — Verifier Infrastructure

- **Slug:** `verifier-infrastructure`
- **CAP unit alignment:** `artifact_adoption_proof`
- **Gravity well:** `Artifact and Adoption Proof`
- **Primary reader:** `implementer, operator, platform architect`
- **Lead narrator:** `Victor`
- **Navigation role:** `runtime deep dive`
- **Post-level reader shift:** `serious -> confident`
- **Dominant tensions:** `signature check vs full verifier stack`; `live freshness vs cached survivability`; `runtime certainty vs hidden failure modes`
- **Proof surfaces:** `offline-verification-guide`, `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`, `marty-ui/services/trust_profile/main.py`, `marty-core/marty-verification/README.md`, `deployment-profiles-explained-deep`
- **Default handoff:** `offline-verification-guide`

#### Scene Card 1 — A verifier is a system, not a function
- **CAP role:** `setup`
- **Event type:** `deep_dive`
- **Reader-state contribution:** `replaces the simplistic “signature checker” model with a component-level view of verifier runtime responsibilities`
- **Focal entities:** `verifier`, `ally_tooling`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `operational`
- **Active primitives / abstractions:** `Trust Profile`; `validation rules`; `revocation policy`; `Presentation Policy`
- **Scene summary:** `Inventory the trust, policy, status, and audit surfaces a real verifier needs before it can evaluate one credential responsibly.`
- **Proof surfaces:** `marty-ui/services/trust_profile/main.py`, `marty-core/marty-verification/README.md`
- **Handoff:** `move from control-plane objects into the synchronized state that feeds the runtime`

#### Scene Card 2 — Snapshots, caches, and sync keep verifier fleets current
- **CAP role:** `complication`
- **Event type:** `implementation_walkthrough`
- **Reader-state contribution:** `shows how trust state actually reaches the edge instead of remaining a control-plane abstraction`
- **Focal entities:** `field_operation_runtime`, `trust_registry`, `ally_peer`
- **Setting:** `field_operation_runtime`
- **Stakes:** `operational`, `continuity`, `security`
- **Active primitives / abstractions:** `trust snapshots`; `CRL cache`; `master list`; `sync token`
- **Scene summary:** `Explain how registry sync, trust snapshots, status caches, and purpose-scoped trust anchors let verifier fleets stay current enough to operate locally.`
- **Proof surfaces:** `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`, `offline-verification-guide`, `marty-core/marty-verification/src/trust_anchor/registry.rs`
- **Handoff:** `move from synchronized state into health and failure handling`

#### Scene Card 3 — Health signals and failure ladders make verification trustworthy
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes serious -> confident by making degraded mode, freshness, and audit part of the verifier contract`
- **Focal entities:** `audit_log`, `field_operation_runtime`, `protagonist_reader`
- **Setting:** `field_operation_runtime`
- **Stakes:** `security`, `operational`, `continuity`
- **Active primitives / abstractions:** `Deployment Profile`; `audit event`; `degraded mode`; `health status`
- **Scene summary:** `Land the idea that metrics, freshness state, and explicit failure ladders are part of verification itself rather than support tooling bolted on later.`
- **Proof surfaces:** `offline-verification-guide`, `deployment-profiles-explained-deep`, `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`
- **Handoff:** `direct to offline-verification-guide or deployment-profiles-in-practice`

### Post Card — Discovering Trusted Issuers

- **Slug:** `discovering-trusted-issuers`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** `Constraint Layer`
- **Primary reader:** `architect, implementer, verifier owner`
- **Lead narrator:** `Victor`
- **Navigation role:** `trust-discovery explainer`
- **Post-level reader shift:** `serious -> confident`
- **Dominant tensions:** `cryptographic validity vs institutional legitimacy`; `issuer discovery vs credential validation`; `current trust state vs stale local assumptions`
- **Proof surfaces:** `trust-registries-explained`, `building-trust-registries-at-scale`, `marty-ui/services/trust_profile/main.py`, `marty-core/marty-verification/src/trust_anchor/registry.rs`, `understanding-trust-anchors`
- **Default handoff:** `verifier-infrastructure`

#### Scene Card 1 — Issuer legitimacy must be known before signature math starts
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `clarifies that issuer discovery is a prerequisite for meaningful validation rather than a side effect of it`
- **Focal entities:** `verifier`, `skeptic`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `security`, `interoperability`
- **Active primitives / abstractions:** `Trust Profile`; `accepted issuer set`
- **Scene summary:** `Show why a clean signature from an out-of-scope issuer is still the wrong answer for a verifier.`
- **Proof surfaces:** `four-actors-of-identity-systems`, `understanding-trust-anchors`, `trust-registries-explained`
- **Handoff:** `move from the discovery boundary into the mechanisms that define it`

#### Scene Card 2 — Registries, roots, and identifiers are discovery paths
- **CAP role:** `trigger`
- **Event type:** `standards_mapping`
- **Reader-state contribution:** `turns issuer discovery into a legible set of mechanisms instead of one vague lookup step`
- **Focal entities:** `issuer`, `Trust Profile`, `ally_tooling`
- **Setting:** `ecosystem_network`
- **Stakes:** `security`, `interoperability`, `operational`
- **Active primitives / abstractions:** `TRUST_LIST`; `ROOT_CA`; `PKD_URL`; `PINNED_ISSUER`; `issuer_did`
- **Scene summary:** `Compare signed registries, certificate hierarchies, pinned issuers, and DID-based discovery as different routes to the same accepted issuer boundary.`
- **Proof surfaces:** `marty-ui/services/trust_profile/main.py`, `marty-core/marty-verification/src/trust_anchor/registry.rs`, `understanding-trust-anchors`
- **Handoff:** `move from discovery mechanisms into scoping and freshness`

#### Scene Card 3 — Discovery becomes useful only when it is scoped and current
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes serious -> confident by showing that issuer discovery must remain current, scoped, and explainable in the runtime`
- **Focal entities:** `field_operation_runtime`, `audit_log`, `protagonist_reader`
- **Setting:** `field_operation_runtime`
- **Stakes:** `operational`, `security`, `continuity`
- **Active primitives / abstractions:** `IssuerEntity`; `jurisdiction filter`; `sequence state`; `trust snapshot`
- **Scene summary:** `Land the runtime truth that discovery only helps when issuer state can be filtered, synchronized, cached, and audited over time.`
- **Proof surfaces:** `marty-ui/services/trust_profile/main.py`, `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`, `verifier-infrastructure`
- **Handoff:** `direct to verifier-infrastructure or understanding-trust-anchors`

### Duplicate Review Card — Privacy Data Minimization

- **Slug:** `privacy-data-minimization`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** Constraint Layer
- **Primary reader:** privacy and governance readers
- **Lead narrator:** Nora
- **Navigation role:** legacy duplicate / guide-side source review
- **Post-level reader shift:** `structured -> serious`
- **Dominant tensions:** privacy vs overcollection
- **Proof surfaces:** privacy materials, presentation policy sources
- **Default handoff:** `data-minimization-in-identity`
- **Review status:** keep this card only as the legacy duplicate / guide-side source surface until the colliding live blog slug is retired, redirected, or renamed; route new blog-side navigation to `data-minimization-in-identity`.

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

### Post Card — Why Identity Systems Must Protect Privacy

- **Slug:** `why-identity-systems-must-protect-privacy`
- **CAP unit alignment:** `category_reframe`
- **Gravity well:** Category Reframe
- **Primary reader:** privacy lead, compliance lead, skeptical architect
- **Lead narrator:** Nora
- **Navigation role:** privacy entry point / bridge
- **Post-level reader shift:** `structured -> serious`
- **Dominant tensions:** verification vs overcollection; privacy as feature vs privacy as architecture
- **Proof surfaces:** `minimum-disclosure-is-a-policy-problem`, `data-minimization-in-identity`, `presentation-policies-minimum-disclosure`, `selective-disclosure`
- **Default handoff:** `data-minimization-in-identity` or `privacy-vs-compliance`

#### Scene Card 1 — Overcollection is the default identity failure
- **CAP role:** setup
- **Event type:** diagnosis
- **Reader-state contribution:** destabilizes the assumption that verification systems naturally collect only what they need
- **Focal entities:** `protagonist_reader`, `antagonist_system`, `nora_patel`
- **Setting:** `institutional_environment`
- **Stakes:** `privacy`, `regulatory`, `operational`
- **Active primitives / abstractions:** `Presentation Policy` (held in reserve)
- **Scene summary:** Show how ordinary identity verification flows over-collect because the decision boundary is usually implicit, undocumented, and left to verifier habit.
- **Proof surfaces:** `minimum-disclosure-is-a-policy-problem`, privacy materials, regulatory framing
- **Handoff:** move from the failure mode into the architectural boundary that fixes it

#### Scene Card 2 — Privacy becomes architecture when disclosure is explicit
- **CAP role:** complication
- **Event type:** reframe
- **Reader-state contribution:** turns privacy from a moral preference into an explicit systems-design concern
- **Focal entities:** `Presentation Policy`, `holder`, `verifier`
- **Setting:** `workbench_design_review`
- **Stakes:** `privacy`, `security`
- **Active primitives / abstractions:** `Presentation Policy`, `local verification`, `selective disclosure`
- **Scene summary:** Explain that privacy-by-design in identity means making disclosure explicit through policy, holder-controlled presentation, and local verification rather than relying on verifier restraint after the data already arrived.
- **Proof surfaces:** `presentation-policies-minimum-disclosure`, `selective-disclosure`, `data-minimization-in-identity`
- **Handoff:** move from the control surface into the operational objection

#### Scene Card 3 — Serious systems protect privacy without losing discipline
- **CAP role:** resolution
- **Event type:** synthesis
- **Reader-state contribution:** completes `structured -> serious` by showing privacy, auditability, and runtime governance can coexist
- **Focal entities:** `ally_peer`, `skeptic`, `Presentation Policy`
- **Setting:** `field_operation_runtime`
- **Stakes:** `privacy`, `operational`, `regulatory`
- **Active primitives / abstractions:** `Presentation Policy`, `revocation`, `audit event`, `freshness rules`
- **Scene summary:** Land the argument that bounded disclosure is compatible with audit, revocation, and freshness checks because those controls govern whether a credential counts, not whether the verifier should hoard unnecessary fields.
- **Proof surfaces:** privacy evidence, deployment examples, compliance-facing materials
- **Handoff:** direct to `data-minimization-in-identity` or `privacy-vs-compliance`

### Post Card — Data Minimization in Identity

- **Slug:** `data-minimization-in-identity`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** Constraint Layer
- **Primary reader:** implementer, privacy and governance reader
- **Lead narrator:** Nora
- **Navigation role:** proof note / supporting deep dive
- **Post-level reader shift:** `serious -> concrete`
- **Dominant tensions:** decision boundary vs payload sprawl
- **Proof surfaces:** `privacy-data-minimization`, `presentation-policies-minimum-disclosure`, `deploy-age-verification`
- **Default handoff:** `why-identity-systems-must-protect-privacy` or `deploy-age-verification`

#### Scene Card 1 — One verifier request, reduced correctly
- **CAP role:** resolution
- **Event type:** comparison
- **Reader-state contribution:** makes the privacy benefit concrete in one bounded request example
- **Focal entities:** `Presentation Policy`, `nora_patel`, `skeptic`
- **Setting:** `institutional_environment`
- **Stakes:** `privacy`, `regulatory`, `operational`
- **Active primitives / abstractions:** `Presentation Policy`, `predicate claim`
- **Scene summary:** Compare a verifier that asks for full birthdate and adjacent identity fields with one that asks only for `age_over_21`, making the minimization boundary explicit and inspectable.
- **Proof surfaces:** `privacy-data-minimization`, `deploy-age-verification`, presentation-policy materials
- **Handoff:** direct to `why-identity-systems-must-protect-privacy` or `privacy-vs-compliance`

### Post Card — Privacy vs Compliance

- **Slug:** `privacy-vs-compliance`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** Constraint Layer
- **Primary reader:** compliance lead, privacy lead, regulated architect
- **Lead narrator:** Nora (support from Elena)
- **Navigation role:** regulated bridge
- **Post-level reader shift:** `serious -> evaluative`
- **Dominant tensions:** minimization vs auditability; bounded disclosure vs regulatory proof
- **Proof surfaces:** `minimum-disclosure-is-a-policy-problem`, `compliance-profiles-in-practice`, `compliance-profiles-bridging-regulation`, `eudi-wallet-readiness`
- **Default handoff:** `compliance-profiles-in-practice` or `why-marty-is-ready-for-evaluation`

#### Scene Card 1 — The trade-off is usually a design failure
- **CAP role:** setup
- **Event type:** diagnosis
- **Reader-state contribution:** names the false privacy/compliance opposition as a systems-design mistake rather than a regulatory inevitability
- **Focal entities:** `skeptic`, `protagonist_reader`, `nora_patel`
- **Setting:** `institutional_environment`
- **Stakes:** `privacy`, `regulatory`
- **Active primitives / abstractions:** `Presentation Policy` (held in reserve)
- **Scene summary:** Show how legacy verification flows create the illusion that compliance requires broad data collection because the system was never designed with a bounded disclosure model.
- **Proof surfaces:** privacy evidence, compliance framing, regulatory pressure materials
- **Handoff:** move from the false trade-off into the artifact layer that fixes it

#### Scene Card 2 — Policy can satisfy the rule without widening the request
- **CAP role:** complication
- **Event type:** standards_mapping
- **Reader-state contribution:** turns the reader from skeptical to evaluative by making compliance a governed artifact instead of a justification for overcollection
- **Focal entities:** `Compliance Profile`, `Presentation Policy`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `privacy`, `regulatory`, `operational`
- **Active primitives / abstractions:** `Compliance Profile`, `Presentation Policy`, `Cedar policy set`
- **Scene summary:** Explain how regulated requirements become explicit policy and compliance artifacts that ask only for the facts a rule truly needs, instead of pulling whole identity payloads into application code.
- **Proof surfaces:** `compliance-profiles-in-practice`, `compliance-profiles-bridging-regulation`, EUDI and policy examples
- **Handoff:** move from bounded requests into inspectability and audit

#### Scene Card 3 — Auditability is compatible with minimization
- **CAP role:** resolution
- **Event type:** synthesis
- **Reader-state contribution:** completes `serious -> evaluative` by showing that minimization still supports accountable regulated verification
- **Focal entities:** `ally_peer`, `skeptic`, `audit_log`
- **Setting:** `field_operation_runtime`
- **Stakes:** `privacy`, `regulatory`, `operational`
- **Active primitives / abstractions:** `audit event`, `revocation profile`, `trust profile`, `Presentation Policy`
- **Scene summary:** Show that regulated verification can preserve audit trails, revocation checks, and provenance evidence without retaining broader identity payloads than the rule requires.
- **Proof surfaces:** compliance and privacy materials, runtime verification examples
- **Handoff:** direct to `compliance-profiles-in-practice` or `why-marty-is-ready-for-evaluation`

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

## Wave 6 — Final gap-closure post cards

These cards close the last three remaining stubs: one privacy-mechanism explainer that sits deeper than the current privacy branch, one protocol-motivation bridge that explains why MIP had to exist as a minimum shared model, and one capstone synthesis that finally shows the whole system in motion.

### Legacy Merge Card — Selective Disclosure Explained

- **Slug:** `selective-disclosure-explained`
- **CAP unit alignment:** `constraint_layer`
- **Gravity well:** `Constraint Layer`
- **Primary reader:** `privacy architect, implementer, skeptical buyer`
- **Lead narrator:** `Nora`
- **Navigation role:** `legacy merge / redirect review`
- **Post-level reader shift:** `serious -> design_ready`
- **Dominant tensions:** `canonical mechanism entry vs duplicate front door`; `general mechanism comparison vs narrower follow-ons`; `better comparison detail vs redundant navigation`
- **Proof surfaces:** `selective-disclosure`, `sd-jwt-selective-disclosure-deep-dive`, `zero-knowledge-predicates-identity`, `presentation-policies-minimum-disclosure`, `data-minimization-in-identity`
- **Default handoff:** `selective-disclosure`
- **Review status:** keep this card only as a legacy merge / redirect review surface while `selective-disclosure` remains the canonical mechanism explainer; preserve only any sharper comparison table or runtime-fit phrasing that materially improves the canonical article.

#### Scene Card 1 — Preserve only the sharper comparison detail
- **CAP role:** `complication`
- **Event type:** `comparison`
- **Reader-state contribution:** `keeps the privacy path from splitting into two front-door mechanism explainers`
- **Focal entities:** `Presentation Policy`, `nora_patel`, `marcus_vale`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `privacy`, `operational`, `clarity`
- **Active primitives / abstractions:** `Presentation Policy`; `issued predicate claim`; `SD_JWT`; `zero-knowledge proof`
- **Scene summary:** Review the legacy article only for mechanism-comparison detail worth folding into `selective-disclosure`, then route general readers to the canonical explainer and narrower questions to the SD-JWT or wallet follow-ons.
- **Proof surfaces:** `selective-disclosure`, `sd-jwt-selective-disclosure-deep-dive`, `zero-knowledge-predicates-identity`
- **Handoff:** `direct to selective-disclosure, then sd-jwt-selective-disclosure-deep-dive or selective-disclosure-in-wallets`

### Post Card — Why the Marty Protocol Exists

- **Slug:** `why-the-marty-protocol-exists`
- **Canonical role note:** this card answers the middle question between the category case in `why-identity-needs-a-protocol` and the full synthesis in `the-marty-identity-model`
- **CAP unit alignment:** `category_reframe`
- **Gravity well:** `Category Reframe`
- **Primary reader:** `architect, evaluator, skeptical product lead`
- **Lead narrator:** `Daniel`
- **Navigation role:** `protocol motivation bridge`
- **Post-level reader shift:** `oriented -> structured`
- **Dominant tensions:** `platform critique vs protocol definition`; `minimum shared model vs vendor sprawl`; `elegant theory vs implementable artifact surface`
- **Proof surfaces:** `why-identity-needs-a-protocol`, `marty-protocol/README.md`, `introducing-mip`, `the-marty-identity-model`, `why-marty-is-ready-for-evaluation`
- **Default handoff:** `the-marty-identity-model`

#### Scene Card 1 — Once identity becomes infrastructure, the missing piece is a shared model
- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `turns the platform-vs-protocol critique into a sharper question about which objects have to be shared if identity is going to interoperate`
- **Focal entities:** `daniel_ortega`, `protagonist_reader`, `skeptic`, `antagonist_system`
- **Setting:** `public_social_market`
- **Stakes:** `economic`, `interoperability`, `operational`
- **Active primitives / abstractions:** `platform logic`; `re-verification`; `shared model`
- **Scene summary:** `Show that moving beyond platform lock-in is not enough by itself; teams still need a minimum shared grammar for trust, issuance, disclosure, deployment, and flow.`
- **Proof surfaces:** `why-identity-needs-a-protocol`, `why-marty-is-ready-for-evaluation`
- **Handoff:** `move from the category problem into the minimum automatable answer`

#### Scene Card 2 — The five primitives are the minimum automatable grammar
- **CAP role:** `trigger`
- **Event type:** `model_reveal`
- **Reader-state contribution:** `turns protocol language from abstraction into five recurring questions every identity system already answers`
- **Focal entities:** `five_mip_primitives`, `daniel_ortega`, `ally_tooling`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `interoperability`, `governance`, `operational`
- **Active primitives / abstractions:** `Trust Profile`; `Credential Template`; `Presentation Policy`; `Deployment Profile`; `Flow`
- **Scene summary:** `Explain why MIP defines the minimum shared primitives and supporting abstractions instead of presenting one more monolithic vendor stack or one more transport-specific architecture.`
- **Proof surfaces:** `marty-protocol/README.md`, `introducing-mip`, `the-marty-identity-model`
- **Handoff:** `move from the model itself into the artifacts that make it implementable`

#### Scene Card 3 — Artifacts turn the protocol from theory into adoption surface
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes oriented -> structured by showing that schemas, Cedar policy surfaces, examples, and conformance are why the protocol deserves evaluation rather than admiration`
- **Focal entities:** `ally_tooling`, `daniel_ortega`, `ally_peer`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `operational`, `governance`, `continuity`
- **Active primitives / abstractions:** `JSON Schema`; `Policy Set (Cedar)`; `conformance suite`; `reference implementations`
- **Scene summary:** `Land the difference between a protocol claim and a protocol surface: Marty exists so multiple implementations can share a stable object model, inspect the same artifacts, and change systems without re-deriving the category from scratch.`
- **Proof surfaces:** `marty-protocol/README.md`, `why-marty-is-ready-for-evaluation`, `mip-json-schemas-walkthrough`
- **Handoff:** `direct to the-marty-identity-model or why-marty-is-ready-for-evaluation`

### Post Card — How Everything Works Together

- **Slug:** `how-everything-works-together`
- **CAP unit alignment:** `model_reveal`
- **Gravity well:** `Model Reveal`
- **Primary reader:** `architect, implementer, evaluator`
- **Lead narrator:** `Daniel`
- **Navigation role:** `capstone synthesis`
- **Post-level reader shift:** `structured -> design_ready`
- **Dominant tensions:** `static map vs living system`; `one scenario vs many ecosystems`; `stable object model vs runtime sprawl`
- **Proof surfaces:** `the-marty-identity-model`, `five-primitives-in-one-picture`, `flows-orchestrating-identity-lifecycle`, `marty-protocol/README.md`, `same-trust-model-different-runtime`, `one-protocol-many-ecosystems`
- **Default handoff:** `mip-json-schemas-walkthrough`

#### Scene Card 1 — One credential journey activates every primitive
- **CAP role:** `setup`
- **Event type:** `implementation_walkthrough`
- **Reader-state contribution:** `turns the five-primitives map into an end-to-end system the reader can mentally simulate`
- **Focal entities:** `five_mip_primitives`, `Flow`, `protagonist_reader`, `ally_tooling`
- **Setting:** `workbench_design_review`
- **Stakes:** `operational`, `interoperability`, `governance`
- **Active primitives / abstractions:** `Trust Profile`; `Credential Template`; `Flow`; `Presentation Policy`; `Deployment Profile`
- **Scene summary:** `Walk one issuance-to-verification path that starts with trust and credential design, moves through flow orchestration, narrows disclosure through policy, and lands in a real runtime envelope.`
- **Proof surfaces:** `the-marty-identity-model`, `flows-orchestrating-identity-lifecycle`, `marty-protocol/README.md`
- **Handoff:** `move from the journey sketch into how the primitives constrain one another`

#### Scene Card 2 — The primitives answer different questions and hand cleanly to one another
- **CAP role:** `trigger`
- **Event type:** `reframe`
- **Reader-state contribution:** `shows why the model stays stable because each primitive owns one class of decision instead of duplicating the others`
- **Focal entities:** `daniel_ortega`, `five_mip_primitives`, `skeptic`, `protagonist_reader`
- **Setting:** `workbench_design_review`
- **Stakes:** `operational`, `continuity`, `interoperability`
- **Active primitives / abstractions:** `code vs configuration`; `policy surface`; `runtime packaging`; `lifecycle orchestration`
- **Scene summary:** `Explain that trust, issuance, disclosure, deployment, and flow are not five labels for the same logic — they are adjacent decision surfaces that keep one another from leaking back into application code.`
- **Proof surfaces:** `five-primitives-in-one-picture`, `the-marty-identity-model`, `why-the-marty-protocol-exists`
- **Handoff:** `move from internal composition into why the same model survives new runtimes and ecosystems`

#### Scene Card 3 — The same composition survives runtime and ecosystem change
- **CAP role:** `resolution`
- **Event type:** `synthesis`
- **Reader-state contribution:** `completes structured -> design_ready by showing that once the composition is explicit, standards, sectors, and deployment modes become profile data and transport bindings rather than architecture resets`
- **Focal entities:** `ally_peer`, `field_operation_runtime`, `ecosystem_network`, `protagonist_reader`
- **Setting:** `threshold_decision_point`
- **Stakes:** `interoperability`, `operational`, `economic`
- **Active primitives / abstractions:** `Compliance Profile`; `Wallet Profile`; `OID4VCI`; `OID4VP`; `deployment package`
- **Scene summary:** `Land the Marty claim that the same five-primitives composition can survive travel, enterprise, retail, hosted, self-hosted, and edge environments because the model stays stable while the profiles, flows, and transports vary.`
- **Proof surfaces:** `same-trust-model-different-runtime`, `one-protocol-many-ecosystems`, `marty-protocol/README.md`
- **Handoff:** `direct to mip-json-schemas-walkthrough or trust-profiles-explained`

## Practical drafting rule

If a writer cannot fill a scene card with concrete entities, settings, proof surfaces, and a clean handoff, the scene is not ready to be drafted yet.

## Related

- `cap-narrative-profile.md` — defines the entity registry, story architecture, and audit rules these cards inherit
- `publication-backlog-table.md` — defines which posts and scene shapes the cards operationalize
- `publication-post-packets.md` — adds source, diagram, CTA, adjacent-link, and proof-gathering requirements on top of these cards
- `publication-evidence-packets.md` — central collection point for all evidence necessitated by the post packets
- `../05-drafting/priority-draft-briefs.md` — the draft-brief layer directly upstream of these cards
- `../07-polish-and-publish/publication-checklist.md` — the layer that should be used after drafting is complete

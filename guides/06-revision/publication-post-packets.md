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

## Current packet-level overlap guardrails

Use these rules before approving any contested packet as draft-ready:

- **Privacy/data-minimization branch:** when `privacy-data-minimization` appears in a source list, treat it as the guide-side source surface. Use `data-minimization-in-identity` for blog-side CTAs, adjacent links, and supporting proof-note references.
- **Guide-owned operational slugs stay canonical.** For `deployment-*`, `offline-verification-guide`, `impl-oid4vci`, `impl-oid4vp`, and similar how-to surfaces, keep the guide packet as the canonical destination. A blog packet only survives if it has a distinct bridge / evaluation / overview job under a different slug.
- **Selective-disclosure roles must not split into two front-door explainers.** `minimum-disclosure-is-a-policy-problem` remains the policy-first privacy entry; `selective-disclosure` stays the canonical mechanism explainer; `selective-disclosure-explained` is now only a legacy merge / retire surface; `selective-disclosure-in-wallets` owns the holder-UX angle; `sd-jwt-selective-disclosure-deep-dive` owns the standards-specific implementation angle.
- **Trust-profile duplication should not survive by inertia.** `trust-profiles-explained` remains the canonical concept entry. The surviving follow-on packet is `trust-profile-evaluation-and-failure-handling`; keep it focused on runtime trust evaluation, freshness, and fail-closed behavior or merge it away.
- **Protocol-overview CTAs must preserve the role split.** `why-identity-needs-a-protocol` = category case; `why-the-marty-protocol-exists` = minimum shared model; `introducing-mip` = launch and artifact reveal; `the-marty-identity-model` = stable grammar and synthesis.

If a packet cannot defend a distinct job under those rules, merge or retire it before prose starts.

## Current packet-level factual guardrails

- **EUDI timing claims:** any packet that mentions EUDI deadlines must name the actor, obligation, and timing window. Prefer `Member States are expected to make at least one wallet available by the end of 2026` over blanket `by 2026` shorthand.
- **MIP repo-state claims:** verify version numbers, schema counts, conformance assets, and compliance-profile inventories against the current `marty-protocol` repo snapshot before marking a packet draft-ready. Use `currently includes` for mutable inventories unless the packet cites a frozen release artifact.
- **Post-quantum framing:** use current algorithm names (`ML-KEM`, `ML-DSA`, `SLH-DSA`) and frame the proof around preparedness, long credential lifetimes, harvest-now / decrypt-later risk, and algorithm agility. Avoid exact quantum-arrival timelines unless a cited source is attached.
- **Publication timestamps:** keep `date` and `updatedDate` as editorial provenance. Scheduling belongs in roadmap / status metadata, not in live article timestamps.

---

## Tier 0 — Front-door recovery packets

### Packet — What Is Digital Identity?
- **Packet type:** flagship start-here entry
- **Lead persona:** Daniel
- **Primary reader:** sponsor, architect, implementer
- **Scene card stack:** `Identity is more than an account record` -> `Issuer, holder, and verifier make identity portable` -> `Verification without calling home changes the category`
- **Required sources:** `foundations-identity`, `centralized-vs-verifiable`
- **Helpful sources:** `foundations-verification`, `why-identity-needs-a-protocol`
- **Required diagrams / tables:** account-record vs reusable-evidence comparison; issuer-holder-verifier triangle sketch
- **Likely CTA:** continue to `verifiable-credentials-explained`
- **Adjacent links:**
  - **previous:** none (Start Here opener)
  - **next:** `verifiable-credentials-explained`
  - **lateral:** `why-identity-needs-a-protocol`, `centralized-vs-verifiable`
- **Proof still needed:** one especially accessible example that makes “portable machine-readable evidence” feel more concrete than “account data”
- **Draft-ready check:** the article defines digital identity clearly, introduces the trust triangle without jargon overload, and lands the local-verification contrast cleanly

### Packet — Verifiable Credentials Explained
- **Packet type:** flagship start-here explainer
- **Lead persona:** Daniel
- **Primary reader:** sponsor, architect, implementer
- **Scene card stack:** `A credential is a signed claim set` -> `Different formats, same job` -> `Holder control makes the credential reusable`
- **Required sources:** `foundations-credentials`, `foundations-verification`
- **Helpful sources:** `centralized-vs-verifiable`, `sd-jwt-selective-disclosure-deep-dive`, `presentation-policies-minimum-disclosure`
- **Required diagrams / tables:** credential component inventory; format comparison table (W3C VC / SD-JWT / mDoc)
- **Likely CTA:** continue to `issuers-holders-verifiers-explained`
- **Adjacent links:**
  - **previous:** `what-is-digital-identity`
  - **next:** `issuers-holders-verifiers-explained` or `credential-lifecycle`
  - **lateral:** `centralized-vs-verifiable`, `selective-disclosure`
- **Proof still needed:** one clean explanation of format diversity that clarifies packaging choices without collapsing into standards jargon
- **Draft-ready check:** the structure of a credential is concrete, format differences are bounded, and holder control is tied to actual reuse rather than abstract privacy rhetoric

### Packet — The Four Actors of Identity Systems
- **Packet type:** foundations-series completion bridge
- **Lead persona:** Daniel
- **Primary reader:** architect, buyer, policy lead
- **Scene card stack:** `Three roles still leave one question unanswered` -> `Governance authorities decide which issuers count` -> `Four actors keep the ecosystem honest`
- **Required sources:** `foundations-identity`, `foundations-verification`, `building-trust-registries-at-scale`
- **Helpful sources:** `trust-profiles-explained`, `guides/03-world-building/use-cases-and-deployment-contexts.md`
- **Required diagrams / tables:** three operational roles vs governance authority table; one cross-sector actor map showing university/accreditor, issuer/holder/verifier, or equivalent trust-registry example
- **Likely CTA:** continue to `issuers-holders-verifiers-explained`
- **Adjacent links:**
  - **previous:** `verifiable-credentials-explained`
  - **next:** `issuers-holders-verifiers-explained`
  - **lateral:** `building-trust-registries-at-scale`, `trust-profiles-explained`
- **Proof still needed:** one scenario where a structurally valid credential would still be unacceptable because no governance authority recognizes the issuer
- **Draft-ready check:** governance authority is clearly distinguished from verifier, the post does not re-explain the three-role model at full length, and the handoff into `issuers-holders-verifiers-explained` keeps the operational triangle intact

### Packet — Issuers, Holders, Verifiers Explained
- **Packet type:** flagship start-here explainer
- **Lead persona:** Daniel
- **Primary reader:** architect, implementer, buyer
- **Scene card stack:** `Issuers create authoritative claims` -> `Holders decide how claims travel` -> `Verifiers ask narrow questions under their own rules`
- **Required sources:** `foundations-identity`, `foundations-verification`
- **Helpful sources:** `guides/03-world-building/use-cases-and-deployment-contexts.md`, `deploy-enterprise-access`, `deploy-age-verification`
- **Required diagrams / tables:** role responsibility table; one cross-sector scenario where the same three roles remain visible
- **Likely CTA:** continue to `credential-lifecycle`
- **Adjacent links:**
  - **previous:** `verifiable-credentials-explained`
  - **next:** `credential-lifecycle`
  - **lateral:** `what-is-digital-identity`, `foundations-identity`
- **Proof still needed:** one scenario that shows the same three operational roles across government, enterprise, or education without drifting into a separate governance-actor debate
- **Draft-ready check:** each role has a distinct job, the separation matters operationally, and the verifier’s job is clearly shown as trust + policy rather than mere data receipt

### Packet — The Credential Lifecycle
- **Packet type:** flagship start-here bridge
- **Lead persona:** Daniel
- **Primary reader:** architect, operator, implementer
- **Scene card stack:** `Application and approval set the issuance conditions` -> `Issuance and presentation turn approval into portable proof` -> `Verification, revocation, and renewal keep the system honest`
- **Required sources:** `flows-orchestrating-identity-lifecycle`, `credential-templates`, `foundations-verification`, `deployment-profiles`, `marty-protocol/README.md`
- **Helpful sources:** deployment use-case posts, revocation materials
- **Required diagrams / tables:** lifecycle stage table or swimlane; issuance-to-revocation scenario sketch
- **Likely CTA:** continue to `five-primitives-in-one-picture`
- **Adjacent links:**
  - **previous:** `issuers-holders-verifiers-explained`
  - **next:** `five-primitives-in-one-picture` or `the-marty-identity-model`
  - **lateral:** `flows-orchestrating-identity-lifecycle`, `deployment-profiles-from-design-to-production`
- **Proof still needed:** one scenario that includes approval, issue, presentation, status change, and renewal or revocation so the lifecycle feels truly operational
- **Draft-ready check:** the lifecycle is not reduced to issuance alone, post-issuance governance is visible, and the handoff into the five-primitives map feels natural

### Packet — The Marty Identity Model
- **Packet type:** flagship start-here synthesis
- **Lead persona:** Daniel
- **Primary reader:** architect, implementer, sponsor
- **Scene card stack:** `Roles and credentials are not enough by themselves` -> `Five primitives stabilize the system` -> `Supporting abstractions keep the model practical` -> `The model becomes a stable language for the rest of Marty`
- **Required sources:** `marty-protocol/README.md`, `five-primitives-in-one-picture`, `trust-profiles`, `credential-templates`, `presentation-policies`, `deployment-profiles`
- **Helpful sources:** `compliance-profiles-bridging-regulation`, `cedar-policies-for-identity-governance`
- **Required diagrams / tables:** architecture diagram or five-primitives table; supporting-abstractions cluster view
- **Likely CTA:** continue to `trust-profiles-explained` or `flows-orchestrating-identity-lifecycle`
- **Adjacent links:**
  - **previous:** `five-primitives-in-one-picture`
  - **next:** `trust-profiles-explained` or `flows-orchestrating-identity-lifecycle`
  - **lateral:** `why-identity-needs-a-protocol`, `five-primitives-in-one-picture`
- **Proof still needed:** one crisp distinction between this synthesis post and `five-primitives-in-one-picture` so the two pieces complement rather than duplicate each other
- **Draft-ready check:** the five primitives are tied back to reader-facing problems, the supporting abstractions are bounded, and the post lands as architecture grammar rather than another acronym tour

---

## Tier 0.5 — PKI and wallet recovery packets

### Packet — Public Key Infrastructure Explained
- **Packet type:** flagship recovery series opener
- **Lead persona:** Marcus
- **Primary reader:** architect, implementer
- **Scene card stack:** `A key pair is not a trust framework` -> `Certificates create verifiable issuer authority` -> `Identity PKI becomes governable when trust is explicit`
- **Required sources:** `cryptographic-trust-anchors-primer`, `marty-protocol/SPECIFICATION.md`, `marty-core/marty-crypto/README.md`
- **Helpful sources:** `marty-protocol/README.md`, `why-identity-depends-on-cryptography`
- **Required diagrams / tables:** key pair -> certificate -> CA -> verifier trust ladder; PKI model vs DID model comparison table
- **Likely CTA:** continue to `understanding-trust-anchors`
- **Adjacent links:**
  - **previous:** none (PKI series opener)
  - **next:** `understanding-trust-anchors`
  - **lateral:** `cryptographic-trust-anchors-primer`, `trust-profiles-explained`
- **Proof still needed:** one especially clean explanation of why key control is not yet institutional trust
- **Draft-ready check:** PKI is framed in identity terms, not browser-TLS detour terms, and the handoff to trust anchors is explicit

### Packet — Understanding Trust Anchors
- **Packet type:** supporting recovery trust deep dive
- **Lead persona:** Marcus
- **Primary reader:** architect, implementer, operator
- **Scene card stack:** `Verification has to start from a declared root` -> `Anchors are distributed through PKD, trust lists, and pinned roots` -> `Anchor freshness decides runtime behavior`
- **Required sources:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`, `cryptographic-trust-anchors-primer`
- **Helpful sources:** `deployment-profiles-from-design-to-production`, `marty-credentials/CONFIGURATION.md`
- **Required diagrams / tables:** trust-source distribution matrix; refresh/caching timeline diagram
- **Likely CTA:** continue to `certificate-chains-and-validation`
- **Adjacent links:**
  - **previous:** `public-key-infrastructure-explained`
  - **next:** `certificate-chains-and-validation`
  - **lateral:** `cryptographic-trust-anchors-primer`, `trust-profiles-explained`
- **Proof still needed:** one concrete anchor-refresh example that makes freshness and cache windows obvious
- **Draft-ready check:** the post explains both what an anchor is and how anchor management affects runtime behavior

### Packet — Certificate Chains and Validation
- **Packet type:** supporting recovery verification deep dive
- **Lead persona:** Marcus
- **Primary reader:** implementer, security architect
- **Scene card stack:** `Path building turns certificates into trust decisions` -> `Validation is more than signature math` -> `Runtime pressure creates validation pitfalls`
- **Required sources:** `marty-core/marty-verification/README.md`, `marty-protocol/SPECIFICATION.md`, `marty-core/marty-crypto/README.md`
- **Helpful sources:** `cryptographic-trust-anchors-primer`, deployment profile materials
- **Required diagrams / tables:** certificate chain and validation checklist; trust-evaluation algorithm step table
- **Likely CTA:** continue to `how-passport-pki-works`
- **Adjacent links:**
  - **previous:** `understanding-trust-anchors`
  - **next:** `how-passport-pki-works`
  - **lateral:** `cryptographic-trust-anchors-primer`, `trust-profiles-explained`
- **Proof still needed:** one step-by-step validation walk-through that includes revocation and freshness instead of stopping at signature verification
- **Draft-ready check:** the validation path is concrete, the common pitfalls are visible, and the handoff into travel PKI feels earned

### Packet — How Passport PKI Works
- **Packet type:** supporting recovery standards bridge
- **Lead persona:** Aiko
- **Primary reader:** standards-minded architect, regulated buyer, implementer
- **Scene card stack:** `Travel verification needs trust that survives the network` -> `CSCA, document signers, and PKD keep passport trust portable` -> `Inspection systems turn hierarchy into operational border trust`
- **Required sources:** `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`, `marty-protocol/README.md`, `marty-core/marty-verification/README.md`
- **Helpful sources:** `deploy-airline-boarding`, `longfellow-zk/reference/verifier-service/server/README.md`
- **Required diagrams / tables:** CSCA -> document signer -> inspection system trust diagram; passport-verification runtime sketch
- **Likely CTA:** continue to `understanding-csca-certificates`
- **Adjacent links:**
  - **previous:** `certificate-chains-and-validation`
  - **next:** `understanding-csca-certificates`
  - **lateral:** `deploy-airline-boarding`, `what-icao-9303-specifies`
- **Proof still needed:** one clear end-to-end travel verification scenario that keeps the PKD and lane-runtime details visible
- **Draft-ready check:** the passport hierarchy is accurate, the border/gate runtime pressure is visible, and the CSCA handoff is natural

### Packet — Understanding CSCA Certificates
- **Packet type:** supporting recovery passport trust deep dive
- **Lead persona:** Aiko
- **Primary reader:** implementer, travel architect
- **Scene card stack:** `CSCA is the country-level root in passport PKI` -> `PKD and master-list distribution make the root usable elsewhere` -> `Rollover and stale trust are the real operator concerns`
- **Required sources:** `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`, `cryptographic-trust-anchors-primer`, `longfellow-zk/reference/verifier-service/server/README.md`
- **Helpful sources:** `marty-credentials/CONFIGURATION.md`, verifier infrastructure materials
- **Required diagrams / tables:** CSCA anatomy note; PKD/master-list distribution sketch
- **Likely CTA:** continue to `what-icao-9303-specifies` or back to `how-passport-pki-works`
- **Adjacent links:**
  - **previous:** `how-passport-pki-works`
  - **next:** `what-icao-9303-specifies`
  - **lateral:** `verifier-infrastructure`, `cryptographic-trust-anchors-primer`
- **Proof still needed:** one especially concrete example of real issuer or root certificates so the post does not sound purely theoretical
- **Draft-ready check:** the reader can explain what a CSCA is, how it is distributed, and why stale trust is dangerous

### Packet — Mobile Wallet Architectures
- **Packet type:** flagship recovery wallet opener
- **Lead persona:** Aiko
- **Primary reader:** architect, implementer, product owner
- **Scene card stack:** `A wallet is more than a credential gallery` -> `Platforms split storage, cryptography, and UX across layers` -> `Deep links and protocols make the wallet an endpoint` -> `Compatibility is a matrix, not a marketing claim`
- **Required sources:** `marty-protocol/SPECIFICATION.md`, `marty-authenticator/pubspec.yaml`, `marty-authenticator/DEEP_LINKING.md`
- **Helpful sources:** `product-catalog/products/authenticator/overview.md`, `impl-oid4vci`, `impl-oid4vp`
- **Required diagrams / tables:** layered wallet stack diagram; wallet compatibility derivation table
- **Likely CTA:** continue to `secure-enclave-credential-storage`
- **Adjacent links:**
  - **previous:** none (wallet series opener)
  - **next:** `secure-enclave-credential-storage`
  - **lateral:** `impl-oid4vci`, `what-is-a-digital-identity-wallet`
- **Proof still needed:** one clean architecture decomposition that separates app UX, secure storage, and protocol edges without sounding overengineered
- **Draft-ready check:** the wallet is defined as a layered system, not as a brand label, and the compatibility matrix is legible

### Packet — Secure Enclave Credential Storage
- **Packet type:** supporting recovery wallet-security deep dive
- **Lead persona:** Marcus
- **Primary reader:** security architect, wallet implementer
- **Scene card stack:** `Holder binding depends on where keys live` -> `Secure storage is layered, not singular` -> `Security, recovery, and portability pull against each other`
- **Required sources:** `marty-core/marty-secure-storage/src/keychain.rs`, `marty-core/marty-secure-storage/src/database.rs`, `marty-authenticator/pubspec.yaml`
- **Helpful sources:** `product-catalog/products/authenticator/overview.md`, holder-binding materials
- **Required diagrams / tables:** secure-storage stack diagram; exportable-key vs device-bound-key comparison table
- **Likely CTA:** continue to `credential-portability-across-wallets`
- **Adjacent links:**
  - **previous:** `mobile-wallet-architectures`
  - **next:** `credential-portability-across-wallets`
  - **lateral:** `device-binding-and-credential-security`, `holder-binding-beyond-biometrics`
- **Proof still needed:** one grounded explanation of how the local key store and encrypted database interact so the post stays implementation-facing
- **Draft-ready check:** the reader can explain how keys, credentials, and local auth layers fit together — and where the trade-offs begin

### Packet — Credential Portability Across Wallets
- **Packet type:** flagship recovery interoperability bridge
- **Lead persona:** Elena
- **Primary reader:** buyer, architect, governance lead
- **Scene card stack:** `Moving a credential is harder than moving a file` -> `Wallet Profiles make compatibility explicit` -> `Policy and economics define the real portability boundary`
- **Required sources:** `business-case-for-credential-portability`, `marty-protocol/SPECIFICATION.md`, `marty-authenticator/DEEP_LINKING.md`
- **Helpful sources:** `product-catalog/products/authenticator/overview.md`, `impl-oid4vci`
- **Required diagrams / tables:** wallet portability boundary matrix; format/protocol/compliance compatibility table
- **Likely CTA:** continue to `eudi-wallet-model-explained`
- **Adjacent links:**
  - **previous:** `secure-enclave-credential-storage`
  - **next:** `eudi-wallet-model-explained`
  - **lateral:** `business-case-for-credential-portability`, `mobile-wallet-architectures`
- **Proof still needed:** one especially clear distinction between standards portability and policy/runtime portability
- **Draft-ready check:** the post is anti-lock-in without overpromising universal wallet migration

### Packet — The EUDI Wallet Model Explained
- **Packet type:** flagship recovery regulated-ecosystem bridge
- **Lead persona:** Aiko
- **Primary reader:** regulated architect, product lead, implementer
- **Scene card stack:** `EUDI is a bundle of obligations, formats, and trust rules` -> `One wallet ecosystem, more than one credential model` -> `Trust lists and shared specifications hold the ecosystem together` -> `Rollout is real, but phased`
- **Required sources:** `eudi-wallet-readiness`, `marty-protocol/examples/realistic/eu-identity-wallet/trust-profile.json`, `marty-protocol/SPECIFICATION.md`
- **Helpful sources:** official European Commission EUDI overview, regulation, technical-specification, and large-scale-pilot pages; `one-protocol-many-ecosystems`
- **Required diagrams / tables:** PID + mDL ecosystem diagram; EUDI trust and rollout timeline table
- **Likely CTA:** continue to `compliance-profiles-bridging-regulation`
- **Adjacent links:**
  - **previous:** `credential-portability-across-wallets`
  - **next:** `compliance-profiles-bridging-regulation`
  - **lateral:** `eudi-wallet-readiness`, `mobile-wallet-architectures`
- **Proof still needed:** one dated, cautious formulation of the end-of-2026 milestone that acknowledges ongoing specification and pilot work
- **Draft-ready check:** the post explains EUDI as a trust and interoperability model, not merely as a looming regulatory slogan

---

## Tier 0.75 — Wallet holder and UX recovery packets

These packets recover the wallet-holder, device-binding, disclosure, and UX stubs that still sit beside the restored wallet architecture wave. They should deepen holder understanding without repeating the architecture/security/portability/EUDI sequence already recovered in Tier 0.5.

### Packet — What Is a Digital Identity Wallet?
- **Packet type:** supporting wallet foundations bridge
- **Lead persona:** Sofia
- **Primary reader:** product owner, architect, curious buyer
- **Scene card stack:** `A wallet is the holder-side control point` -> `Receiving, holding, and presenting are different jobs` -> `Trust, consent, and local control make the wallet matter`
- **Required sources:** `mobile-wallet-architectures`, `product-catalog/products/authenticator/overview.md`, `marty-authenticator/DEEP_LINKING.md`
- **Helpful sources:** `credential-lifecycle`, `issuers-holders-verifiers-explained`, `marty-protocol/protocol/wallet-profile/SPECIFICATION.md`
- **Required diagrams / tables:** wallet vs account app vs payment wallet comparison; receive/hold/present responsibility table
- **Likely CTA:** continue to `mobile-wallet-architectures`
- **Adjacent links:**
  - **previous:** `credential-lifecycle`
  - **next:** `mobile-wallet-architectures` or `device-binding-and-credential-security`
  - **lateral:** `mobile-wallet-architectures`, `selective-disclosure-in-wallets`
- **Proof still needed:** one especially clean distinction between a wallet as a holder control surface and a wallet as a mere credential gallery
- **Draft-ready check:** the conceptual wallet explainer stays distinct from the technical architecture article and uses the issuer/holder/verifier lifecycle to explain why wallets exist at all

### Packet — Device Binding and Credential Security
- **Packet type:** supporting wallet security bridge
- **Lead persona:** Sofia
- **Primary reader:** security architect, product owner, wallet implementer
- **Scene card stack:** `Copied credentials are a holder-binding failure` -> `Device binding is a stack, not a single hardware checkbox` -> `Migration and recovery expose the real trade-off`
- **Required sources:** `secure-enclave-credential-storage`, `holder-binding-beyond-biometrics`, `product-catalog/products/authenticator/roadmap.md`
- **Helpful sources:** `marty-authenticator/DEEP_LINKING.md`, `marty-protocol/SPECIFICATION.md`, `product-catalog/products/authenticator/overview.md`
- **Required diagrams / tables:** device-binding layer comparison; device replacement and re-binding decision table
- **Likely CTA:** continue to `secure-enclave-credential-storage` or `holder-binding-beyond-biometrics`
- **Adjacent links:**
  - **previous:** `what-is-a-digital-identity-wallet`
  - **next:** `selective-disclosure-in-wallets`
  - **lateral:** `secure-enclave-credential-storage`, `holder-binding-beyond-biometrics`
- **Proof still needed:** one concrete lost-or-replaced-device example that shows why stronger binding makes backup, migration, and reissue a governed process
- **Draft-ready check:** the post stays distinct from secure-storage internals and from the policy-level holder-binding comparison while still making the device-security trade-off operationally real

### Packet — Selective Disclosure in Wallets
- **Packet type:** supporting wallet privacy bridge
- **Lead persona:** Sofia
- **Primary reader:** product owner, wallet implementer, privacy architect
- **Scene card stack:** `A verifier request still has to make sense to the holder` -> `Wallets turn policy into claim choices` -> `Risk labels and privacy modes keep consent bounded`
- **Required sources:** `selective-disclosure`, `marty-authenticator/lib/widgets/selective_disclosure_sheet.dart`, `presentation-protocols`
- **Helpful sources:** `data-minimization-in-identity`, `marty-authenticator/DEEP_LINKING.md`, `product-catalog/products/authenticator/overview.md`
- **Required diagrams / tables:** request-to-disclosure UI flow; required vs optional attribute table; privacy-mode comparison note
- **Likely CTA:** continue to `wallet-ux-design-for-identity`
- **Adjacent links:**
  - **previous:** `device-binding-and-credential-security`
  - **next:** `wallet-ux-design-for-identity`
  - **lateral:** `selective-disclosure`, `presentation-protocols`
- **Proof still needed:** one especially concrete wallet-side example showing that required claims cannot be deselected while optional claims carry visible risk or usage cues
- **Draft-ready check:** the post remains focused on holder-side mediation and disclosure UX instead of drifting back into a generic mechanisms article

### Packet — Wallet UX Design for Identity
- **Packet type:** supporting wallet product bridge
- **Lead persona:** Sofia
- **Primary reader:** product lead, architect, UX-minded implementer
- **Scene card stack:** `Trust fails when the wallet cannot explain itself` -> `Good identity UX makes request, requester, and risk legible` -> `Recovery, offline flow, and refusal paths decide whether users keep trusting the wallet`
- **Required sources:** `marty-authenticator/lib/widgets/selective_disclosure_sheet.dart`, `product-catalog/products/authenticator/roadmap.md`, `product-catalog/products/authenticator/overview.md`
- **Helpful sources:** `marty-authenticator/DEEP_LINKING.md`, `selective-disclosure-in-wallets`, `eudi-wallet-model-explained`
- **Required diagrams / tables:** wallet trust checklist; happy-path vs recovery-path UX note
- **Likely CTA:** continue to `eudi-wallet-model-explained` or `deploy-age-verification`
- **Adjacent links:**
  - **previous:** `selective-disclosure-in-wallets`
  - **next:** `eudi-wallet-model-explained`
  - **lateral:** `mobile-wallet-architectures`, `deploy-age-verification`
- **Proof still needed:** one compact design framework that balances clarity, safety, and low-friction presentation without turning into generic consumer-app advice
- **Draft-ready check:** the post keeps trust, disclosure, and recovery centered rather than drifting into style-guide platitudes

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
- **Helpful sources:** `data-minimization-in-identity`, retail and enterprise privacy examples
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

### Packet — How Credential Issuance Works
- **Packet type:** supporting mechanics bridge
- **Lead persona:** Daniel
- **Primary reader:** architect, implementer, product owner
- **Scene card stack:** `Issuance starts before transport` -> `OID4VCI carries delivery, not meaning` -> `Issuance becomes durable operational evidence`
- **Required sources:** `issuance-flows`, `impl-oid4vci`, `credential-templates-designing-what-gets-issued`, `flows-orchestrating-identity-lifecycle`
- **Helpful sources:** `marty-protocol/README.md`, `mip-json-schemas-walkthrough`
- **Required diagrams / tables:** issuance stage ownership table; authorization-code vs pre-authorized-code comparison table
- **Likely CTA:** continue to `presentation-protocols`
- **Adjacent links:**
  - **previous:** `credential-lifecycle`
  - **next:** `presentation-protocols`
  - **lateral:** `impl-oid4vci`, `credential-templates-designing-what-gets-issued`
- **Proof still needed:** one especially bounded example showing the same template and flow logic surviving both OID4VCI grant types
- **Draft-ready check:** the post starts before the transport step, compares the two main grant shapes clearly, and leaves the reader with a durable model of issuance evidence beyond the wallet response

### Packet — Presentation Protocols
- **Packet type:** supporting mechanics bridge
- **Lead persona:** Daniel
- **Primary reader:** architect, implementer
- **Scene card stack:** `The verifier asks a policy-shaped question` -> `OID4VP carries the request and response` -> `Presentation safety depends on binding and flow shape`
- **Required sources:** `presentation-flows`, `impl-oid4vp`, `presentation-policies-minimum-disclosure`, `foundations-verification`
- **Helpful sources:** `selective-disclosure`, `deploy-age-verification`, `marty-authenticator/DEEP_LINKING.md`
- **Required diagrams / tables:** verifier-request to wallet-response sequence diagram; same-device vs cross-device presentation table
- **Likely CTA:** continue to `interoperability-between-credential-formats`
- **Adjacent links:**
  - **previous:** `how-credential-issuance-works`
  - **next:** `interoperability-between-credential-formats`
  - **lateral:** `impl-oid4vp`, `presentation-policies-minimum-disclosure`
- **Proof still needed:** one concrete request boundary that stays visible all the way from Presentation Policy through OID4VP request and wallet response
- **Draft-ready check:** the post keeps policy separate from transport, explains OID4VP and Presentation Exchange concretely, and makes nonce binding and device-flow differences operationally legible

### Packet — Interoperability Between Credential Formats
- **Packet type:** supporting interoperability bridge
- **Lead persona:** Daniel
- **Primary reader:** architect, implementer, standards-minded evaluator
- **Scene card stack:** `Format diversity is real, but the job is stable` -> `Compatibility is bundle-based, not magical` -> `One model can survive multiple format families`
- **Required sources:** `foundations-credentials`, `impl-mdoc`, `impl-oid4vci`, `impl-oid4vp`, `marty-protocol/SPECIFICATION.md`
- **Helpful sources:** `mobile-wallet-architectures`, `one-protocol-many-ecosystems`, `eudi-wallet-readiness`
- **Required diagrams / tables:** same-job/different-envelope comparison table; format × protocol × compliance compatibility matrix
- **Likely CTA:** continue to `mobile-driving-licenses-iso-18013-5` or `impl-mdoc`
- **Adjacent links:**
  - **previous:** `presentation-protocols`
  - **next:** `mobile-driving-licenses-iso-18013-5`
  - **lateral:** `verifiable-credentials-explained`, `impl-mdoc`
- **Proof still needed:** one precise statement of what can stay stable across formats and what still needs explicit compatibility work at the edge
- **Draft-ready check:** the post does not promise universal conversion, the compatibility bundle is concrete, and Marty’s object model remains the center of the explanation

### Packet — Mobile Driving Licenses and ISO 18013-5
- **Packet type:** supporting standards bridge
- **Lead persona:** Aiko
- **Primary reader:** standards-minded architect, implementer, product owner
- **Scene card stack:** `A phone-held licence still has to feel like government trust` -> `mDoc combines issuer-signed data with device-bound proof` -> `Trust lists and runtime policy decide whether mDL works in production`
- **Required sources:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/wallet-profile/SPECIFICATION.md`, `marty-protocol/cedar/policies/credential_verification.cedar`, `marty-protocol/docs/glossary.md`
- **Helpful sources:** `marty-ui/docs/PKI-Trust-Model.md`, `interoperability-between-credential-formats`, `mobile-wallet-architectures`, `presentation-protocols`
- **Required diagrams / tables:** issuer-signed vs device-bound mDoc responsibility table; DeviceEngagement -> DeviceRequest -> DeviceResponse sequence sketch; AAMVA / EUDI wallet-compatibility comparison table
- **Likely CTA:** continue to `how-governments-build-identity-pki`
- **Adjacent links:**
  - **previous:** `interoperability-between-credential-formats`
  - **next:** `how-governments-build-identity-pki`
  - **lateral:** `mobile-wallet-architectures`, `presentation-protocols`
- **Proof still needed:** one especially clear explanation of how issuer-signed data and device-bound proof divide responsibility without turning the post into raw wire-format commentary
- **Draft-ready check:** the post keeps the standard, the trust model, and the runtime realities visible at the same time instead of collapsing into either wallet hype or low-level format trivia

### Packet — How Governments Build Identity PKI
- **Packet type:** supporting trust-infrastructure bridge
- **Lead persona:** Aiko
- **Primary reader:** standards-minded architect, regulated buyer, operator
- **Scene card stack:** `Government trust has to travel farther than one agency boundary` -> `Root authorities, signers, and trust lists make sovereign PKI portable` -> `Rollover and freshness are the real operating burden`
- **Required sources:** `marty-ui/docs/PKI-Trust-Model.md`, `marty-protocol/docs/implementation-guide.md`, `marty-protocol/docs/glossary.md`, `marty-protocol/SPECIFICATION.md`
- **Helpful sources:** `what-icao-9303-specifies`, `how-passport-pki-works`, `mobile-driving-licenses-iso-18013-5`, `understanding-trust-anchors`
- **Required diagrams / tables:** government PKI ladder (root authority -> signer -> credential); PKD / AAMVA DTS / EU trusted-list comparison table; trust-refresh and rollover timeline sketch
- **Likely CTA:** continue to `how-passport-pki-works`
- **Adjacent links:**
  - **previous:** `what-icao-9303-specifies`
  - **next:** `how-passport-pki-works`
  - **lateral:** `mobile-driving-licenses-iso-18013-5`, `understanding-trust-anchors`
- **Proof still needed:** one disciplined example showing the same trust shape across passport, mDL, and EU trust-list environments without pretending the governance models are identical
- **Draft-ready check:** the post clearly separates hierarchy, distribution, and operator upkeep, and it leaves the reader with a portable model instead of just another acronym stack

These packets deepen the four core primitives after the introductory explainers are already live. They are meant for readers who now need entity-level understanding rather than another category-level overview.

### Packet — Trust Profile Evaluation and Failure Handling
- **Packet type:** supporting primitive deep dive
- **Canonical role note:** specialized runtime follow-on to `trust-profiles-explained`; keep evaluation order, freshness windows, and fail-closed behavior in scope.
- **Lead persona:** Daniel
- **Primary reader:** implementer, security architect, platform admin
- **Scene card stack:** `A Trust Profile is the security boundary` -> `Trust sources and time policy turn roots into runtime behavior` -> `Evaluation and failure handling make trust auditable`
- **Required sources:** `trust-profiles-explained`, `trust-profiles`, `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/trust-profile/SPECIFICATION.md`
- **Helpful sources:** `understanding-trust-anchors`, `building-trust-registries-at-scale`, `marty-protocol/README.md`
- **Required diagrams / tables:** trust-source type matrix (`ROOT_CA` / `TRUST_LIST` / `PKD_URL` / `PINNED_ISSUER`); trust-evaluation step table; shared-registry compatibility note for `compatible_compliance_codes`
- **Likely CTA:** continue to `building-trust-registries-at-scale`
- **Adjacent links:**
  - **previous:** `trust-profiles-explained`
  - **next:** `building-trust-registries-at-scale`
  - **lateral:** `understanding-trust-anchors`, `how-governments-build-identity-pki`
- **Proof still needed:** one especially legible example that shows hybrid trust or shared-registry trust without turning the post into an ecosystem taxonomy dump
- **Draft-ready check:** the post makes the Trust Profile feel like a governed security contract, not a loose settings object, and the failure-handling rules are visible enough that operators can imagine how the runtime behaves under stale or missing trust

### Packet — Credential Templates Explained
- **Packet type:** supporting primitive deep dive
- **Lead persona:** Daniel
- **Primary reader:** implementer, program architect, compliance lead
- **Scene card stack:** `A template is the master issuance contract` -> `Claims, privacy posture, and issuer artifacts govern issuance before transport` -> `Lifecycle and derivation keep templates reusable`
- **Required sources:** `credential-templates-designing-what-gets-issued`, `credential-templates`, `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/credential-template/SPECIFICATION.md`
- **Helpful sources:** `how-credential-issuance-works`, `mip-json-schemas-walkthrough`, `marty-protocol/README.md`
- **Required diagrams / tables:** template anatomy table (claims / compliance / crypto / validity / workflow); active artifact options table (`issuer_key_id` vs `issuer_certificate_chain_pem` vs `issuer_did`); template lifecycle note (`DRAFT` / `ACTIVE` / `DEPRECATED`)
- **Likely CTA:** continue to `how-credential-issuance-works`
- **Adjacent links:**
  - **previous:** `credential-templates-designing-what-gets-issued`
  - **next:** `how-credential-issuance-works`
  - **lateral:** `mip-json-schemas-walkthrough`, `credential-lifecycle`
- **Proof still needed:** one especially clean example showing that privacy posture and derived claims are designed inside the template before any wallet or transport flow begins
- **Draft-ready check:** the post keeps schema, privacy, crypto, and lifecycle in one mental object and makes wallet compatibility feel like a downstream derivation rather than a separate guessing game

### Packet — Presentation Policies Explained
- **Packet type:** supporting primitive deep dive
- **Lead persona:** Daniel
- **Primary reader:** implementer, privacy architect, policy author
- **Scene card stack:** `A presentation policy is a verifier contract` -> `Predicates, fallback, and holder binding shape the proof request` -> `Dynamic policy is how verification changes without code drift`
- **Required sources:** `presentation-policies-minimum-disclosure`, `presentation-policies`, `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/presentation-policy/SPECIFICATION.md`
- **Helpful sources:** `presentation-protocols`, `zero-knowledge-predicates-identity`, `selective-disclosure`
- **Required diagrams / tables:** required-claim / predicate / raw-fallback decision table; holder-binding and freshness matrix; stateless `/evaluate` vs full `Flow` comparison note
- **Likely CTA:** continue to `presentation-protocols`
- **Adjacent links:**
  - **previous:** `presentation-policies-minimum-disclosure`
  - **next:** `presentation-protocols`
  - **lateral:** `selective-disclosure`, `zero-knowledge-predicates-identity`
- **Proof still needed:** one concrete policy example that shows predicates, fallback, holder binding, and freshness all in the same verifier request rather than as separate abstract features
- **Draft-ready check:** the post keeps the verifier’s bounded question visible from start to finish and makes policy churn feel like governed configuration rather than application rewrite territory

### Packet — Deployment Profiles Explained
- **Packet type:** supporting primitive deep dive
- **Lead persona:** Daniel
- **Primary reader:** operator, platform architect, implementer
- **Scene card stack:** `A deployment profile is the runtime contract` -> `Network mode, lanes, and device assignment define runtime shape` -> `Update channels and cache rules turn architecture into operations`
- **Required sources:** `deployment-profiles-from-design-to-production`, `deployment-profiles`, `marty-protocol/SPECIFICATION.md`, `marty-protocol/protocol/deployment-profile/SPECIFICATION.md`
- **Helpful sources:** `deployment-profiles-in-practice`, `offline-verification-guide`, `marty-protocol/README.md`
- **Required diagrams / tables:** deployment hierarchy sketch (`Organization -> Site -> Deployment Profile -> Lane -> Device`); `ONLINE` / `OFFLINE` / `HYBRID` comparison table; update-channel and offline-cache behavior note
- **Likely CTA:** continue to `deployment-profiles-in-practice`
- **Adjacent links:**
  - **previous:** `deployment-profiles-from-design-to-production`
  - **next:** `deployment-profiles-in-practice`
  - **lateral:** `offline-verification-guide`, `same-trust-model-different-runtime`
- **Proof still needed:** one especially clear endpoint example that keeps policy, lane structure, cache TTLs, and device ownership visible in the same operational picture
- **Draft-ready check:** the post makes Deployment Profiles feel like the real runtime envelope, not a hosting afterthought, and shows how operations can vary without changing the underlying trust model

## Wave 3 — Governance recovery packets

These packets recover the governance cluster that sits between privacy/compliance framing and the trust-infrastructure wave. They should make institutional rule-setting, authorization models, policy engines, and shared ecosystem governance legible without duplicating the existing Cedar how-to or trust-registry mechanics.

### Packet — Identity Governance Models
- **Packet type:** supporting governance opener
- **Lead persona:** Elena
- **Primary reader:** buyer, architect, governance lead
- **Scene card stack:** `Every credential ecosystem inherits a governance model` -> `Centralized, federated, and ecosystem-led models optimize different control shapes` -> `Governed objects beat hidden admin habits`
- **Required sources:** `compliance-profiles-in-practice`, `guides/03-world-building/protocol-ecosystem-map.md`, `product-catalog/pricing-and-packaging.md`
- **Helpful sources:** `compliance-profiles-bridging-regulation`, `product-catalog/offering-matrix.md`, `marty-protocol/docs/design-principles.md`
- **Required diagrams / tables:** centralized vs federated vs ecosystem governance comparison; governance decisions to Marty objects table
- **Likely CTA:** continue to `rbac-vs-abac`
- **Adjacent links:**
  - **previous:** `privacy-vs-compliance`
  - **next:** `rbac-vs-abac`
  - **lateral:** `compliance-profiles-in-practice`, `compliance-profiles-bridging-regulation`
- **Proof still needed:** one especially clean comparison showing the same issuer/verifier mechanics living under different governance authorities
- **Draft-ready check:** governance stays at the organizational and institutional layer instead of drifting into Cedar syntax or registry mechanics

### Packet — RBAC vs ABAC
- **Packet type:** supporting authorization comparison
- **Lead persona:** Elena
- **Primary reader:** security architect, implementer, platform admin
- **Scene card stack:** `Roles get you moving fast, and then start leaking exceptions` -> `Attributes recover nuance but widen the decision surface` -> `Cedar can host both without splitting the architecture`
- **Required sources:** `cedar-policies-for-identity-governance`, `marty-microservices-framework/mmf/framework/authorization/adapters/abac_engine.py`, `marty-ui/packages/marty_common/cedar_actions.py`
- **Helpful sources:** `marty-protocol/docs/cedar-policies.md`, `deploy-enterprise-access`, `marty-ui/packages/marty_common/cedar_middleware.py`
- **Required diagrams / tables:** RBAC vs ABAC decision matrix; action mapping vs attribute-condition comparison
- **Likely CTA:** continue to `policy-engines-for-identity-systems` or `cedar-policies-for-identity-governance`
- **Adjacent links:**
  - **previous:** `identity-governance-models`
  - **next:** `policy-engines-for-identity-systems`
  - **lateral:** `cedar-policies-for-identity-governance`, `deploy-enterprise-access`
- **Proof still needed:** one disciplined example where a role alone fails and attribute context fixes the policy boundary without building a custom rule engine
- **Draft-ready check:** the post stays conceptual and architectural, not a Cedar syntax walkthrough or a generic IAM glossary

### Packet — Policy Engines for Identity Systems
- **Packet type:** supporting policy-architecture bridge
- **Lead persona:** Elena
- **Primary reader:** implementer, architect, evaluator
- **Scene card stack:** `Hardcoded identity rules decay into application sprawl` -> `A policy engine evaluates principal, action, resource, and context at runtime` -> `Cedar fits MIP because policy can be validated, activated, and audited as data`
- **Required sources:** `marty-protocol/SPECIFICATION.md`, `marty-protocol/docs/design-principles.md`, `marty-protocol/docs/cedar-integration-guide.md`
- **Helpful sources:** `marty-ui/packages/marty_common/cedar_engine.py`, `marty-ui/services/organization/application/policy_set_use_cases.py`, `marty-ui/packages/marty_common/cedar_middleware.py`
- **Required diagrams / tables:** policy-engine request model; PolicySet lifecycle table; Cedar vs opaque-rules comparison note
- **Likely CTA:** continue to `cedar-policies-for-identity-governance`
- **Adjacent links:**
  - **previous:** `rbac-vs-abac`
  - **next:** `cedar-policies-for-identity-governance`
  - **lateral:** `deploy-enterprise-access`, `compliance-profiles-in-practice`
- **Proof still needed:** one especially clean path from policy authoring to runtime evaluation to activation without bogging down in SDK minutiae
- **Draft-ready check:** the post explains why policy engines exist and why Cedar was chosen instead of turning into a generalized OPA/Rego shootout

### Packet — Governing Credential Ecosystems
- **Packet type:** supporting ecosystem governance bridge
- **Lead persona:** Elena
- **Primary reader:** buyer, ecosystem architect, governance lead
- **Scene card stack:** `Portable credentials need shared ecosystem rules first` -> `Frameworks decide membership, obligations, and change cadence` -> `Registries distribute the outcome, but governance stays upstream`
- **Required sources:** `guides/03-world-building/protocol-ecosystem-map.md`, `building-trust-registries-at-scale`, `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`
- **Helpful sources:** `marty-protocol/SPECIFICATION.md`, `product-catalog/pricing-and-packaging.md`, `identity-governance-models`
- **Required diagrams / tables:** ecosystem governance ladder; framework vs registry vs local policy boundary table
- **Likely CTA:** continue to `trust-registries-explained` or `federation-in-identity-systems`
- **Adjacent links:**
  - **previous:** `policy-engines-for-identity-systems`
  - **next:** `trust-registries-explained`
  - **lateral:** `identity-governance-models`, `building-trust-registries-at-scale`
- **Proof still needed:** one multi-issuer ecosystem example that keeps governance, registry distribution, and local verifier choice distinct
- **Draft-ready check:** the post stays at the framework and governance layer, then hands registry mechanics and federation runtime details down to the next wave

## Wave 5 — Trust infrastructure recovery packets

These packets recover the trust-infrastructure cluster that sits between governance, federation, and verifier runtime operations. They are for readers who already understand trust anchors and trust profiles but still need the ecosystem and runtime surfaces that make multi-issuer verification operational.

### Packet — Trust Registries Explained
- **Packet type:** supporting trust-infrastructure opener
- **Lead persona:** Victor
- **Primary reader:** architect, operator, governance lead
- **Scene card stack:** `Ecosystem trust needs a shared directory` -> `Registries publish authority as current trust state` -> `Local verifiers consume registries without centralizing decisions`
- **Required sources:** `building-trust-registries-at-scale`, `guides/03-world-building/protocol-ecosystem-map.md`, `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`
- **Helpful sources:** `deploy-membership-credentials`, `marty-ui/services/trust_profile/main.py`, `governing-credential-ecosystems`
- **Required diagrams / tables:** trust registry vs local Trust Profile comparison; ecosystem trust-distribution ladder; registry-entry anatomy note
- **Likely CTA:** continue to `discovering-trusted-issuers`
- **Adjacent links:**
  - **previous:** `four-actors-of-identity-systems`
  - **next:** `discovering-trusted-issuers`
  - **lateral:** `building-trust-registries-at-scale`, `federation-in-identity-systems`
- **Proof still needed:** one concrete example that shows a registry carrying both issuer state and trust-anchor state rather than merely organization names
- **Draft-ready check:** the post clearly separates ecosystem-wide registry state from verifier-local trust configuration and never drifts into “just use an allowlist” simplification

### Packet — Federation in Identity Systems
- **Packet type:** supporting ecosystem bridge
- **Lead persona:** Victor
- **Primary reader:** ecosystem architect, product lead, operator
- **Scene card stack:** `Cross-org verification breaks when trust stays bilateral` -> `Shared governance and registries make federation legible` -> `Local verification preserves autonomy inside a shared network`
- **Required sources:** `deploy-membership-credentials`, `four-actors-of-identity-systems`, `guides/03-world-building/protocol-ecosystem-map.md`
- **Helpful sources:** `how-governments-build-identity-pki`, `one-protocol-many-ecosystems`, `trust-registries-explained`
- **Required diagrams / tables:** centralized partner platform vs federated trust network comparison; airline-alliance or comparable federation sequence sketch
- **Likely CTA:** continue to `trust-registries-explained`
- **Adjacent links:**
  - **previous:** `one-protocol-many-ecosystems`
  - **next:** `trust-registries-explained`
  - **lateral:** `deploy-membership-credentials`, `four-actors-of-identity-systems`
- **Proof still needed:** one especially clean example that shows federation preserving local verification rather than recentralizing trust at decision time
- **Draft-ready check:** federation is explained as shared trust plus local autonomy, not as SSO jargon or generic partner connectivity

### Packet — Verifier Infrastructure
- **Packet type:** supporting runtime deep dive
- **Lead persona:** Victor
- **Primary reader:** implementer, operator, platform architect
- **Scene card stack:** `A verifier is a system, not a function` -> `Snapshots, caches, and sync keep verifier fleets current` -> `Health signals and failure ladders make verification trustworthy`
- **Required sources:** `offline-verification-guide`, `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`, `marty-ui/services/trust_profile/main.py`, `marty-core/marty-verification/README.md`
- **Helpful sources:** `deployment-profiles-explained-deep`, `certificate-chains-and-validation`, `marty-core/marty-verification/src/trust_anchor/registry.rs`
- **Required diagrams / tables:** verifier component stack; control-plane vs edge-runtime sketch; freshness and degraded-mode ladder
- **Likely CTA:** continue to `offline-verification-guide`
- **Adjacent links:**
  - **previous:** `discovering-trusted-issuers`
  - **next:** `offline-verification-guide`
  - **lateral:** `deployment-profiles-in-practice`, `certificate-chains-and-validation`
- **Proof still needed:** one architecture example that keeps trust sync, status caches, policy evaluation, and audit in the same runtime picture instead of scattering them across separate tools
- **Draft-ready check:** the verifier is described as an infrastructure stack rather than a signature function, and the control-plane/edge distinction is visible enough for operators to imagine deployment

### Packet — Discovering Trusted Issuers
- **Packet type:** supporting trust-discovery explainer
- **Lead persona:** Victor
- **Primary reader:** architect, implementer, verifier owner
- **Scene card stack:** `Issuer legitimacy must be known before signature math starts` -> `Registries, roots, and identifiers are discovery paths` -> `Discovery becomes useful only when it is scoped and current`
- **Required sources:** `trust-registries-explained`, `building-trust-registries-at-scale`, `marty-ui/services/trust_profile/main.py`, `marty-core/marty-verification/src/trust_anchor/registry.rs`
- **Helpful sources:** `understanding-trust-anchors`, `guides/03-world-building/protocol-ecosystem-map.md`, `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`
- **Required diagrams / tables:** discovery vs validation boundary table; trust-source discovery matrix; issuer-state scoping note
- **Likely CTA:** continue to `verifier-infrastructure`
- **Adjacent links:**
  - **previous:** `trust-registries-explained`
  - **next:** `verifier-infrastructure`
  - **lateral:** `understanding-trust-anchors`, `building-trust-registries-at-scale`
- **Proof still needed:** one explicit trust-discovery path showing how a verifier moves from a trust source to an accepted issuer set before cryptographic evaluation starts
- **Draft-ready check:** the post keeps discovery and validation clearly separated while still showing how registries, roots, and explicit identifiers feed the same verifier boundary

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

### Packet — Why Identity Systems Must Protect Privacy
- **Packet type:** supporting privacy bridge
- **Lead persona:** Nora
- **Primary reader:** privacy lead, compliance lead, skeptical architect
- **Scene card stack:** `Overcollection is the default identity failure` -> `Privacy becomes architecture when disclosure is explicit` -> `Serious systems protect privacy without losing discipline`
- **Required sources:** `minimum-disclosure-is-a-policy-problem`, `presentation-policies-minimum-disclosure`, `selective-disclosure`
- **Helpful sources:** `data-minimization-in-identity`, privacy evidence, retail and enterprise privacy examples
- **Required diagrams / tables:** privacy failure vs bounded-disclosure comparison; policy boundary diagram
- **Likely CTA:** continue to `data-minimization-in-identity` or `privacy-vs-compliance`
- **Adjacent links:** previous `minimum-disclosure-is-a-policy-problem`; next `data-minimization-in-identity`; lateral `privacy-vs-compliance`
- **Proof still needed:** one especially clear explanation of why identity verification over-collects by default even when nobody intends to create a privacy leak
- **Draft-ready check:** the post frames privacy as architecture rather than ethics-only commentary, and the handoff into more concrete privacy notes is obvious

### Packet — Data Minimization in Identity
- **Packet type:** supporting proof note
- **Lead persona:** Nora
- **Primary reader:** implementer, privacy and governance reader
- **Scene card stack:** `One verifier request, reduced correctly`
- **Required sources:** `data-minimization-in-identity`, `presentation-policies-minimum-disclosure`
- **Helpful sources:** `deploy-age-verification`, regulatory references
- **Required diagrams / tables:** one before/after request boundary example
- **Likely CTA:** continue to `why-identity-systems-must-protect-privacy` or `deploy-age-verification`
- **Adjacent links:** previous `why-identity-systems-must-protect-privacy`; next `privacy-vs-compliance`; lateral `deploy-age-verification`
- **Proof still needed:** one verifier request example that shows both the privacy win and the reduction in logging/audit scope
- **Draft-ready check:** the post proves the value with one concrete request boundary rather than abstract privacy language

### Packet — Privacy vs Compliance
- **Packet type:** supporting regulated bridge
- **Lead persona:** Nora (support from Elena)
- **Primary reader:** compliance lead, privacy lead, regulated architect
- **Scene card stack:** `The trade-off is usually a design failure` -> `Policy can satisfy the rule without widening the request` -> `Auditability is compatible with minimization`
- **Required sources:** `minimum-disclosure-is-a-policy-problem`, `compliance-profiles-in-practice`, `compliance-profiles-bridging-regulation`
- **Helpful sources:** `eudi-wallet-readiness`, privacy materials, Cedar policy examples
- **Required diagrams / tables:** privacy/compliance false-tradeoff table; bounded-disclosure plus auditability flow
- **Likely CTA:** continue to `compliance-profiles-in-practice` or `why-marty-is-ready-for-evaluation`
- **Adjacent links:** previous `why-identity-systems-must-protect-privacy`; next `compliance-profiles-in-practice`; lateral `data-minimization-in-identity`
- **Proof still needed:** one compliance-sensitive example where the verifier records enough for audit and revocation without retaining the full credential payload
- **Draft-ready check:** the post resolves the false opposition concretely and does not drift into abstract privacy-law commentary

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
- **Adjacent links:** previous `selective-disclosure`; next `minimum-disclosure-is-a-policy-problem`; lateral `data-minimization-in-identity`
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

## Wave 6 — Final gap-closure packets

These packets close the last three remaining stubs: one privacy-mechanism explainer, one protocol-motivation bridge, and one capstone synthesis that should only draft now that the surrounding privacy, trust, governance, and primitive-deep-dive layers are already live.

### Packet Review — Selective Disclosure Explained *(Legacy merge surface)*
- **Packet type:** legacy merge / redirect review
- **Lead persona:** Nora
- **Primary reader:** privacy architect, implementer, skeptical buyer
- **Scene card stack:** `Confirm the surviving canonical mechanism entry` -> `Preserve only the sharper comparison detail` -> `Route narrower readers to the SD-JWT or wallet follow-ons`
- **Required sources:** `selective-disclosure`, `sd-jwt-selective-disclosure-deep-dive`, `zero-knowledge-predicates-identity`
- **Helpful sources:** `presentation-policies-minimum-disclosure`, `data-minimization-in-identity`, `selective-disclosure-in-wallets`
- **Required diagrams / tables:** reuse only the comparison table or decision matrix that materially improves `selective-disclosure`; do not design a second front-door privacy visual by default
- **Likely CTA:** continue to `selective-disclosure`
- **Adjacent links:**
  - **previous:** `minimum-disclosure-is-a-policy-problem`
  - **next:** `selective-disclosure`
  - **lateral:** `sd-jwt-selective-disclosure-deep-dive`, `selective-disclosure-in-wallets`
- **Proof still needed:** confirm whether `selective-disclosure-explained` contains any mechanism table, runtime-fit comparison, or phrasing that `selective-disclosure` genuinely lacks
- **Draft-ready check:** keep this packet only if it proves a distinct reader job; otherwise fold its unique detail into `selective-disclosure` and retire or redirect the legacy surface

### Packet — Why the Marty Protocol Exists
- **Packet type:** supporting protocol motivation bridge
- **Lead persona:** Daniel
- **Primary reader:** architect, evaluator, skeptical product lead
- **Scene card stack:** `Once identity becomes infrastructure, the missing piece is a shared model` -> `The five primitives are the minimum automatable grammar` -> `Artifacts turn the protocol from theory into adoption surface`
- **Required sources:** `why-identity-needs-a-protocol`, `marty-protocol/README.md`, `introducing-mip`
- **Helpful sources:** `the-marty-identity-model`, `why-marty-is-ready-for-evaluation`, `mip-json-schemas-walkthrough`
- **Required diagrams / tables:** platform-vs-protocol vs minimum-model comparison table; five-primitives plus supporting-abstractions ladder
- **Likely CTA:** continue to `the-marty-identity-model`
- **Adjacent links:**
  - **previous:** `why-identity-needs-a-protocol`
  - **next:** `the-marty-identity-model`
  - **lateral:** `introducing-mip`, `why-marty-is-ready-for-evaluation`
- **Proof still needed:** one clean comparison that separates “identity needs a protocol” from “why this protocol defines five primitives”
- **Draft-ready check:** the post explains why MIP exists without collapsing into launch copy or repeating the full model article

### Packet — How Everything Works Together
- **Packet type:** supporting capstone synthesis
- **Lead persona:** Daniel
- **Primary reader:** architect, implementer, evaluator
- **Scene card stack:** `One credential journey activates every primitive` -> `The primitives answer different questions and hand cleanly to one another` -> `The same composition survives runtime and ecosystem change`
- **Required sources:** `the-marty-identity-model`, `five-primitives-in-one-picture`, `flows-orchestrating-identity-lifecycle`, `marty-protocol/README.md`
- **Helpful sources:** `same-trust-model-different-runtime`, `one-protocol-many-ecosystems`, `why-the-marty-protocol-exists`
- **Required diagrams / tables:** end-to-end primitive composition diagram; one-scenario walkthrough table mapping each primitive to one question or decision
- **Likely CTA:** continue to `mip-json-schemas-walkthrough`
- **Adjacent links:**
  - **previous:** `the-marty-identity-model`
  - **next:** `mip-json-schemas-walkthrough`
  - **lateral:** `five-primitives-in-one-picture`, `flows-orchestrating-identity-lifecycle`
- **Proof still needed:** one especially clean end-to-end scenario that touches all five primitives without drifting into a giant travel-only or enterprise-only case study
- **Draft-ready check:** the post feels like a capstone, not a repeat of the map or model posts, and the composition stays visible in one concrete journey

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
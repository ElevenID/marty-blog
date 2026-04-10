# Publication Evidence Packets

Phase: 06 - Revision  
Purpose: Act as the definitive collection point for the concrete proof, diagrams, and quantitative examples required by the post packets before prose is drafted.  
Time to Complete: Variable (Research and Design Dependent)

<!-- guide:publication_evidence_packets -->

## Why This Matters

While the *post packets* (`publication-post-packets.md`) identify the structural gaps and requirements for each post, the *evidence packets* are where that required substance is actually collected, vetted, and finalized.

A draft should not begin until its corresponding evidence packet is complete. Using these packets ensures that posts are built on concrete examples rather than hypothetical filler.

---

## Shared factual guardrails for future drafts

Use these dated notes whenever a future draft, revision, or regeneration wave touches regulatory timing, repo inventory, cryptography timelines, or publication timestamps. Re-verify before publication if the underlying source changes.

### Context: EUDI rollout wording
- **Requirement:** Keep regulatory claims specific about actor, obligation, and timing nuance.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Required wording:* avoid blanket “EUDI arrives by 2026” phrasing. Safer baseline: Member States are expected to make at least one wallet available by the end of 2026, while implementing acts, ARF refinements, reference implementation work, and pilot feedback continue to shape operational details through 2025 and the rollout period.
  - *Review rule:* name the obligation and actor first, then the timing window. Do not collapse a phased rollout into a single-year claim.
- **Source/Validation:**
  - Live-corrected wording in `src/data/blogPosts.js` (`eudi-wallet-readiness`) and `src/data/guideContent.js` (`deploy-future-identity`), plus the European Commission sources already cited in the EUDI packet below.

### Context: MIP repo-state inventory claims
- **Requirement:** Keep version and artifact claims pinned to the actual `marty-protocol` repository state, not remembered launch copy.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Repo-state baseline validated April 10, 2026:* `marty-protocol/README.md` and `marty-protocol/SPECIFICATION.md` both identify version `0.1.0` with draft status.
  - *Artifact inventory:* the repo currently includes 36 JSON Schemas under `schemas/`, conformance assets under `conformance/`, and generated reference types / typed bindings under `reference/python`, `reference/rust`, and `reference/typescript` via `scripts/codegen.py` and `scripts/generate.sh`.
  - *Compliance-profile wording:* the current repo snapshot contains 11 compliance-profile JSON files across 7 families (`aamva`, `dif`, `enterprise`, `eudi`, `generic`, `icao`, `openbadge`). When exact counts matter, prefer `currently includes` language rather than `ships with` unless you are explicitly citing a frozen release artifact.
- **Source/Validation:**
  - `marty-protocol/README.md`, `marty-protocol/SPECIFICATION.md`, `marty-protocol/scripts/codegen.py`, `marty-protocol/scripts/generate.sh`, and direct file counts from `schemas/`, `conformance/`, and `compliance-profiles/` on April 10, 2026.

### Context: Post-quantum readiness wording
- **Requirement:** Use current standards language without speculative-timeline overreach.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Current wording baseline:* use `ML-KEM`, `ML-DSA`, and `SLH-DSA`; do not fall back to stale `SPHINCS+` naming when describing the finalized standard family.
  - *Risk framing:* prefer harvest-now / decrypt-later pressure, long credential lifetimes, preparedness, and algorithm agility over exact “quantum arrives in X years” claims unless a cited source is attached.
  - *Architecture implication:* in Marty, the post-quantum transition should be framed as trust/profile, credential-template, and algorithm-policy evolution rather than a full application rewrite.
- **Source/Validation:**
  - Live-corrected wording in `src/data/blogPosts.js` (`post-quantum-readiness-in-identity`) and `src/data/guideContent.js` (`deploy-future-identity`), plus the protocol trust/algorithm configuration surfaces referenced throughout the existing PQC material.

### Context: Publication date and updated-date provenance
- **Requirement:** Keep schedule planning separate from live editorial timestamps.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Rule:* `date` and `updatedDate` are publication-history fields, not roadmap placeholders.
  - *Operational consequence:* future scheduling belongs in planning surfaces such as roadmap and draft status metadata, not in live post timestamps.
- **Source/Validation:**
  - Wave 3 date normalization in `src/data/blogPosts.js`, the metadata contract in `publication-checklist.md`, and the tracker notes in `EDITORIAL_IMPROVEMENTS.md`.

## Tier 0 — Front-door recovery evidence

### Context: What Is Digital Identity?
- **Requirement:** One plain-language example that contrasts account lookup with reusable signed evidence.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Example:* An employer issues an employee badge credential once. A building door reader and an internal HR portal can both verify `employment_status = active` locally without calling HR on every use. The identity proof becomes portable evidence instead of a repeated database lookup.
- **Source/Validation:**
  - Derived from `foundations-identity`, `centralized-vs-verifiable`, and the enterprise deployment materials.

### Context: Verifiable Credentials Explained
- **Requirement:** One concise component inventory and one bounded comparison across the main credential formats.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Component inventory:* issuer, subject, claims, proof, validity dates, and optional status information.
  - *Format frame:* W3C VC / VC-JWT for broad web compatibility, SD-JWT for selective disclosure with familiar JSON tooling, and mDoc for device-bound mobile document scenarios.
- **Source/Validation:**
  - Pulled from `foundations-credentials`, `foundations-verification`, and the SD-JWT deep-dive materials.

### Context: The Four Actors of Identity Systems
- **Requirement:** One scenario proving why issuer, holder, and verifier still need a governance authority, plus one cross-sector translation of that fourth actor.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Scenario:* A university issues a degree credential, the graduate stores it, and an employer verifies it locally. The three operational roles are visible, but the employer still depends on an accreditation body or equivalent governance framework to know that the university is an accepted issuer. Without that authority layer, a credential from a self-asserted “degree mill” could still look structurally valid.
  - *Cross-sector translation:* ICAO PKD governs which passport roots count, AAMVA-style trust lists govern which mDL issuers count, and enterprise trust teams decide which internal systems are allowed to issue badges or access credentials.
- **Source/Validation:**
  - Derived from `foundations-identity`, `foundations-verification`, `building-trust-registries-at-scale`, and `trust-profiles-explained`.

### Context: Issuers, Holders, Verifiers Explained
- **Requirement:** One scenario that shows the same three operational roles across a portable trust journey.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Scenario:* A university issues a degree credential. The graduate stores it in their wallet. An employer later verifies the degree locally during hiring without calling the university at decision time. The issuer signs once, the holder controls presentation, and the verifier applies its own trust and policy rules.
- **Source/Validation:**
  - Grounded in `foundations-identity`, `foundations-verification`, and common verifiable-credential role patterns used across the repo.

### Context: The Credential Lifecycle
- **Requirement:** One lifecycle scenario that includes approval, issue, presentation, status change, and renewal or revocation.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Scenario:* HR collects onboarding evidence and manager approval, then issues an employee badge credential. The employee presents it at doors and network boundaries. A department change triggers reissue with updated claims. Termination triggers revocation so the same credential no longer satisfies active-access policy.
- **Source/Validation:**
  - Built from `flows-orchestrating-identity-lifecycle`, `credential-templates`, and enterprise deployment materials.

### Context: The Marty Identity Model
- **Requirement:** One recurring-question-to-primitive mapping plus one bounded explanation of supporting abstractions.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Primitive mapping:* who is trusted -> Trust Profile; what is issued -> Credential Template; what must be shown -> Presentation Policy; where verification runs -> Deployment Profile; how the journey advances -> Flow.
  - *Supporting abstractions:* Compliance Profile, Revocation Profile, Wallet Profile, Application Template, and Policy Set (Cedar) keep the model operable without redefining the five core primitives.
- **Source/Validation:**
  - Directly aligned to `marty-protocol/README.md` and the core object guide chapters.

---

## Tier 0.5 — PKI and wallet recovery evidence

### Context: Public Key Infrastructure Explained
- **Requirement:** One plain-language PKI ladder that shows the difference between a key pair, a certificate, and a trusted root.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Ladder:* a public/private key pair proves control of a signing key; a certificate binds that key to an issuer identity; a root certificate or signed trust list tells the verifier which issuer chains count as trustworthy.
  - *Marty landing point:* these trust decisions become `trust_sources`, `allowed_algorithms`, and `supported_formats` on a Trust Profile rather than being buried in verifier code.
- **Source/Validation:**
  - Grounded in `cryptographic-trust-anchors-primer`, `marty-protocol/SPECIFICATION.md` (§5, §5.7), and `marty-core/marty-crypto/README.md`.

### Context: Understanding Trust Anchors
- **Requirement:** One concrete trust-anchor distribution example that includes refresh and cache behavior.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Distribution rule:* PKI trust anchors are distributed via HTTPS trust lists or ICAO PKD; always-online implementations refresh at least every 24 hours, and offline-capable implementations may cache anchors for up to 72 hours when freshness is validated on cache creation.
  - *Example:* the pre-boarding clearance Trust Profile loads ICAO CSCA material from `https://pkddownloadsg.icao.int/download` and combines it with an airline-specific trust list.
- **Source/Validation:**
  - Taken from `marty-protocol/SPECIFICATION.md` (§5.7.2) and `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`.

### Context: Certificate Chains and Validation
- **Requirement:** One step-by-step validation algorithm that shows chain building is more than signature verification.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Validation path:* identify credential format -> locate trust sources -> validate issuer identity -> verify credential signature -> check validity period -> check revocation status -> evaluate policy claims -> evaluate Cedar verification policies -> record audit event.
  - *Implementation boundary:* `marty-crypto` intentionally exposes certificate parsing and chain-building primitives but leaves trust-anchor policy and revocation decisions to `marty-verification` and higher layers.
- **Source/Validation:**
  - Derived from `marty-protocol/SPECIFICATION.md` (§5.7.3), `marty-core/marty-crypto/README.md`, and `marty-core/marty-verification/README.md`.

### Context: How Passport PKI Works
- **Requirement:** One end-to-end travel-trust scenario that links CSCA roots, document signers, and a verifier runtime.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Scenario:* an airline or border verifier loads ICAO CSCA trust anchors from the PKD, validates the document-signer chain attached to a passport-backed credential, and applies that trust locally during a gate or inspection decision without asking the issuing country in real time.
  - *Marty framing:* the travel verifier expresses this as an `ICAO` Trust Profile with `PKD_URL` and `TRUST_LIST` sources, plus a deployment/runtime profile tuned for gate operations.
- **Source/Validation:**
  - Grounded in `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`, `marty-protocol/README.md`, `marty-core/marty-verification/README.md`, and `deploy-airline-boarding`.

### Context: Understanding CSCA Certificates
- **Requirement:** One concrete CSCA distribution example plus one real issuer-root inventory to make the trust layer feel tangible.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Distribution example:* the pre-boarding clearance example explicitly labels the ICAO Public Key Directory as the source of CSCA certificates.
  - *Real inventory proof:* the Longfellow verifier-service example loads issuer roots such as California DMV IACA Root, Colorado Root Certificate, Georgia Root Certificate Authority, and Google Identity Credential Root IACA.
- **Source/Validation:**
  - Taken from `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json` and `longfellow-zk/reference/verifier-service/server/README.md`.

### Context: Mobile Wallet Architectures
- **Requirement:** One layered wallet-stack example plus one compatibility derivation example.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Layered stack:* the Marty Authenticator depends on `flutter_secure_storage`, `local_auth`, `app_links`, `flutter_ble_peripheral`, `cbor`, and Rust bridge libraries — showing that wallets combine secure storage, biometric gates, protocol handling, transport layers, and credential parsing.
  - *Compatibility rule:* Wallet Profile compatibility is derived from `(credential_format, issuance_protocol, compliance_profile_code)`; for example `MDOC` + `OID4VCI_PRE_AUTH` + `EUDI_MDL` maps to EUDI / eIDAS-compliant wallets.
- **Source/Validation:**
  - Grounded in `marty-authenticator/pubspec.yaml`, `marty-authenticator/DEEP_LINKING.md`, and `marty-protocol/SPECIFICATION.md` (§13.2, §13.5).

### Context: Secure Enclave Credential Storage
- **Requirement:** One concrete storage-stack example that shows how keys and credential payloads are protected locally.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Storage stack:* Marty Secure Storage creates a 256-bit database-encryption key, stores it in the platform keychain via `keyring`, then uses that key to open a SQLCipher-backed SQLite database for local credential data.
  - *Operational detail:* the local store also enables WAL mode and persists schema-managed verification history, showing that wallet storage is both encrypted and application-structured.
- **Source/Validation:**
  - Taken from `marty-core/marty-secure-storage/src/keychain.rs`, `marty-core/marty-secure-storage/src/database.rs`, and `marty-core/marty-secure-storage/src/lib.rs`.

### Context: Credential Portability Across Wallets
- **Requirement:** One precise statement of what portability depends on and what still constrains it.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Compatibility boundary:* portability is not just “can I export the file?” — it depends on the credential format, issuance protocol, and compliance bundle recognized by the receiving wallet.
  - *Operational proof:* OID4VCI / OID4VP deep-link surfaces make cross-wallet delivery possible, but stored overrides remain necessary for custom or non-standard wallet apps.
- **Source/Validation:**
  - Grounded in `marty-protocol/SPECIFICATION.md` (§13 Wallet Profile), `marty-authenticator/DEEP_LINKING.md`, and `product-catalog/products/authenticator/overview.md`.

### Context: The EUDI Wallet Model Explained
- **Requirement:** One concrete EUDI credential/trust bundle plus one cautious, dated rollout statement.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Bundle proof:* the example EUDI Trust Profile supports both `EUDI_PID` (`SD_JWT_VC`) and `EUDI_MDL` (`MDOC`) from the same EU List of Trusted Lists trust source, proving that one wallet ecosystem spans more than one credential model.
  - *Rollout wording:* as of the European Commission pages current in March 2026, Member States are expected to make at least one wallet available by the end of 2026, while the ARF, reference implementation, and pilot feedback continue refining the operational ecosystem. Treat the milestone as real but the ecosystem as still maturing.
- **Source/Validation:**
  - Validated against `marty-protocol/examples/realistic/eu-identity-wallet/trust-profile.json`, `marty-protocol/SPECIFICATION.md`, `European Commission — European Digital Identity` (updated 12 March 2026), `European Digital Identity (EUDI) Regulation`, `EU Digital Identity Wallet Technical Specifications`, and `What are the Large Scale Pilot Projects`.

---

## Tier 0.75 — Wallet holder and UX recovery evidence

### Context: What Is a Digital Identity Wallet?
- **Requirement:** One holder-side role model plus one concrete receive/hold/present example proving the wallet is more than a credential gallery.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Holder-side role model:* the ElevenID Authenticator overview defines the wallet as the free end-user surface that stores and presents digital credentials rather than as the monetized trust center, which reinforces the idea that the wallet is the holder’s tool in the ecosystem.
  - *Controlled-movement example:* the authenticator handles `openid-credential-offer://` credential offers, `openid4vp://` presentation requests, and `openid-credential://` direct credential imports, proving the wallet receives, holds, and presents rather than merely displaying cards.
- **Source/Validation:**
  - Grounded in `mobile-wallet-architectures`, `product-catalog/products/authenticator/overview.md`, `marty-authenticator/DEEP_LINKING.md`, and the existing issuer/holder/verifier and lifecycle explainers.

### Context: Device Binding and Credential Security
- **Requirement:** One concrete device-binding stack plus one lifecycle consequence showing why replacement, backup, or re-binding become governance decisions.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Binding stack:* the authenticator combines secure local storage, local authentication, and presentation approval; the OID4VP deep-link flow explicitly calls `lockAuth(...)` before sending a presentation response, proving that device-local user verification is part of the runtime path rather than a cosmetic add-on.
  - *Lifecycle consequence:* the product roadmap calls out “security hardening + store/backup guidance,” reinforcing the same truth surfaced in the secure-storage and holder-binding materials: stronger device binding makes migration, backup, and recovery a deliberate design problem rather than a free export feature.
- **Source/Validation:**
  - Grounded in `secure-enclave-credential-storage`, `holder-binding-beyond-biometrics`, `marty-authenticator/DEEP_LINKING.md`, `product-catalog/products/authenticator/roadmap.md`, and `product-catalog/products/authenticator/overview.md`.

### Context: Selective Disclosure in Wallets
- **Requirement:** One concrete wallet disclosure UI plus one explicit rule set proving that required vs optional disclosure is visible to the holder.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Disclosure UI model:* `SelectiveDisclosureSheet` builds a per-attribute disclosure view with required-field lockout, attribute categories, usage restrictions, and visible risk levels (`low`, `medium`, `high`, `critical`).
  - *Bounded-choice model:* the same sheet exposes privacy modes (`Minimal`, `Balanced`, `Permissive`, `Full Disclosure`) and privacy-impact metrics, showing how a wallet can translate policy and risk into a holder-facing selection surface instead of silently dumping claims.
- **Source/Validation:**
  - Grounded in `marty-authenticator/lib/widgets/selective_disclosure_sheet.dart`, `selective-disclosure`, `presentation-protocols`, and `data-minimization-in-identity`.

### Context: Wallet UX Design for Identity
- **Requirement:** One compact design framework plus one operational UX scenario proving that offline flow, recovery, and trust signaling matter as much as happy-path presentation screens.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Design framework:* the current authenticator materials support a four-part wallet-UX checklist — clearly name the requester, show the bounded disclosure request, surface privacy/risk cues before sharing, and require an explicit local-auth step before release.
  - *Operational UX proof:* the roadmap explicitly prioritizes “UX polish + offline QR presentation” and “security hardening + store/backup guidance,” while the product overview highlights QR, NFC, offline support, and cross-platform behavior. Together these prove that real wallet UX includes offline transitions, backup/recovery guidance, and trust-explaining flows — not just a nice credential card screen.
- **Source/Validation:**
  - Grounded in `marty-authenticator/lib/widgets/selective_disclosure_sheet.dart`, `product-catalog/products/authenticator/roadmap.md`, `product-catalog/products/authenticator/overview.md`, and `marty-authenticator/DEEP_LINKING.md`.

---

## Tier 1 — Core Post Evidence

### Context: Why Identity Needs a Protocol
- **Requirement:** One concrete quantitative or semi-quantitative example of duplicated verification cost that feels believable and non-hyped.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Model:* A regional healthcare system pays $0.30 per KYC/doc-scan via a centralized IDV vendor for patient onboarding. When the patient is referred to an affiliate specialist network using the same vendor, that network pays $0.30 *again* for the exact same check. Total cost: $0.60 per user journey. Under the protocol model, the initial verified state is issued as a credential; the specialist's subsequent check costs $0.00 (cryptographic verification only).
- **Source/Validation:**
  - Based on standard tiered IDV pricing sheets; validated against internal `business-case-for-credential-portability` docs.

### Context: The Five Primitives in One Picture
- **Requirement:** One clean visual design decision for the canonical map and one consistent minimap treatment reusable across later posts.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Visual Structure:* A left-to-right DAG motif. Trust Profiles (grounded in trust anchors) -> Credential Templates -> Flows -> Presentation Policies -> Deployment Profiles.
  - *Minimap Treatment:* A small 5-node pentagon graphic in the top right of future posts, with the active primitive highlighted in secondary brand color (e.g., bright green) while the rest remain slate gray.
- **Source/Validation:**
  - Design system guidelines for foundational architecture diagrams.

### Context: Minimum Disclosure Is a Policy Problem
- **Requirement:** One strong concrete verifier scenario where overcollection is obviously unnecessary and policy makes the correction legible.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Scenario:* Liquor store self-checkout. Legacy scanning of a Driver's License reads DOB, full address, license number, and organ donor status into the vendor's log.
  - *Policy Fix:* A Cedar presentation policy `permit(principal, action == "PurchaseAlcohol") when { principal.age_over_21 == true };`. The wallet drops all other claims via SD-JWT, transmitting only the boolean predicate.
- **Source/Validation:**
  - Matches `presentation-policies-minimum-disclosure` scenarios and Cedar policy reference shapes.

### Context: Same Trust Model, Different Runtime
- **Requirement:** One clean comparison showing what actually changes across runtimes and what must remain invariant.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Invariant Logic:* Cryptographic signature verification, Cedar policy evaluation (`permit`/`forbid`), Status List (revocation) checks.
  - *Variable Constraints:* Key storage (Cloud KMS vs local HSM vs OpenBao), Revocation sync (Real-time webhook vs 12-hour cached CRL at edge), Network dependency (10Gbps mesh vs intermittent airline gate).
- **Source/Validation:**
  - Cross-referenced with `deployment-profiles-from-design-to-production` and architecture logic (specifically OpenBao capabilities).

### Context: One Protocol, Many Ecosystems
- **Requirement:** A disciplined set of 3–4 ecosystem examples that are diverse but still comparable through the same object model.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Travel/Aviation:* `Known Traveler` Template + Pre-cached Edge Verification Profile.
  - *Healthcare:* `Medical Board License` Template + Decentralized Trust Registry Anchor.
  - *Enterprise Access:* `Corporate Badge` Template + Real-time Step-up Auth Profile.
  - *Education:* `Open Badges Degree` Template + Public Ledger Anchor.
- **Source/Validation:**
  - Mapped against `eudi-wallet-readiness` criteria and internal ecosystem architecture guides.

### Context: The Infrastructure Economics Migration
- **Requirement:** At least one believable modeled cost story with concrete variables, plus one operational consequence beyond raw cost.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Variables:* Migrating a 10M-user monthly active access gate. Previous SaaS vendor charged $0.05/check ($500k/mo). Self-hosted Marty deployment amortizes cloud infrastructure (EKS, RDS, KMS) to ~$40k/mo.
  - *Operational Consequence:* Beyond $460k/mo savings, gateway latency drops from 300ms (SaaS round-trip) to 15ms (local VPC validation), completely eliminating physical turnstile queues at shift-change hours.
- **Source/Validation:**
  - Matches Phase 03 infrastructure migration case studies for high-throughput gates.

### Context: Why Marty Is Ready for Evaluation
- **Requirement:** A clear evaluation path that feels operationally real and does not assume the reader already knows where to start.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  1. Boot the control plane: `docker-compose -f docker-compose.dev.yml up marty-core`.
  2. Inspect the policy artifacts: `marty-protocol/cedar/mip.cedarschema` and `marty-protocol/cedar/policies/credential_verification.cedar`.
  3. Validate locally with the conformance suite: `cd ../marty-protocol && scripts/run-conformance.sh`.
- **Source/Validation:**
  - Directly pulls from the `marty-core` and `marty-protocol` repository structure, including the published Cedar schema/policy artifacts and conformance tooling.

---

## Tier 2 — Supporting Post Evidence

### Context: How Credential Issuance Works
- **Requirement:** One bounded comparison proving that both main OID4VCI grant types sit atop the same governed issuance model.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Lifecycle rule:* issuance starts with a `Credential Template`, trust context, and `Flow` configuration before any wallet request is processed.
  - *Grant comparison:* authorization-code issuance is used when the holder authenticates with the issuer during the exchange; pre-authorized-code issuance is used when authentication already happened out of band.
  - *Operational proof:* after delivery, the system still needs issuance and credential records so the result can be audited, renewed, revoked, or supported without treating the transport transcript as the architecture.
- **Source/Validation:**
  - Grounded in `issuance-flows`, `impl-oid4vci`, `flows-orchestrating-identity-lifecycle`, and `marty-protocol/README.md`.

### Context: Presentation Protocols
- **Requirement:** One request/response example linking Presentation Policy to OID4VP with nonce binding and device-flow context.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Request boundary:* the verifier sends an OID4VP authorization request containing a presentation definition that expresses the required credential type and claims or predicates.
  - *Response binding:* the wallet returns a `vp_token` plus `presentation_submission` and binds the result to a verifier-provided nonce so captured presentations cannot be replayed later.
  - *Flow distinction:* same-device presentations use redirects or deep links, while cross-device presentations commonly begin from a QR-encoded request URI; the policy boundary remains the same in either case.
- **Source/Validation:**
  - Taken from `presentation-flows`, `impl-oid4vp`, `presentation-policies-minimum-disclosure`, and `marty-authenticator/DEEP_LINKING.md`.

### Context: Interoperability Between Credential Formats
- **Requirement:** One explicit compatibility rule that explains why cross-format interoperability is bundle-based rather than magical transcoding.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Format frame:* W3C VC / VC-JWT emphasizes broad web compatibility, SD-JWT adds selective disclosure with familiar JSON/JWT tooling, and mDoc emphasizes CBOR encoding, device binding, and proximity presentation.
  - *Compatibility rule:* wallet compatibility is derived from `(credential_format, issuance_protocol, compliance_profile_code)`; for example `MDOC` + `OID4VCI_PRE_AUTH` + `EUDI_MDL` maps to a specific EUDI wallet-compatibility class rather than to universal format support.
  - *Architectural boundary:* trust, disclosure, and deployment decisions can stay stable across format families even when the wire format and presentation mechanics differ at the edge.
- **Source/Validation:**
  - Grounded in `foundations-credentials`, `impl-mdoc`, `impl-oid4vci`, `impl-oid4vp`, `mobile-wallet-architectures`, and the MIP specification wallet-profile model.

### Context: Mobile Driving Licenses and ISO 18013-5
- **Requirement:** One concrete mDL exchange example that keeps issuer trust, device binding, and trust-list distribution visible in the same story.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Compatibility rule:* `MDOC` + `OID4VCI_PRE_AUTH` + `AAMVA_MDL` maps to Apple Wallet (mDL), Google Wallet (mDL), and ISO mDL wallets; `MDOC` + `OID4VCI_PRE_AUTH` + `EUDI_MDL` maps to EUDI / eIDAS wallets.
  - *Exchange sequence:* ISO 18013-5 proximity presentation runs as `DeviceEngagement` -> `SessionEstablishment` -> `DeviceRequest` (namespace + requested data elements) -> `DeviceResponse` (signed mDoc with selective disclosure) -> local verification.
  - *Verification rule:* AAMVA mDL verification is explicitly constrained to `MDOC` format and `holder_binding_present == true`, proving that device-bound proof is not optional window dressing.
  - *Trust distribution:* AAMVA-style deployments use trust-list distribution for IACA roots rather than ad hoc issuer pinning.
- **Source/Validation:**
  - Grounded in `marty-protocol/protocol/wallet-profile/SPECIFICATION.md`, `marty-protocol/SPECIFICATION.md` (§4.6, §5), `marty-protocol/cedar/policies/credential_verification.cedar`, `marty-protocol/docs/implementation-guide.md`, and `marty-protocol/docs/glossary.md`.

### Context: How Governments Build Identity PKI
- **Requirement:** One portable-trust example showing how sovereign roots become verifier trust without a phone-home architecture.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Hierarchy:* Government identity PKI separates top-level authorities such as `CSCA` or `IACA` from shorter-lived document or credential signers, so sovereign trust and day-to-day signing are not the same key.
  - *Distribution models:* ICAO PKD distributes CSCA and document-signer material for travel credentials; AAMVA Digital Trust Service aggregates US state IACA roots; EU Trusted Lists / LOTL distribute eIDAS and EUDI trust anchors.
  - *Operational burden:* Verifiers can cache trust material locally, but stale roots, key rollover, and bounded offline windows mean trust-refresh discipline is an operator responsibility rather than something the certificate chain solves automatically.
  - *Policy consequence:* High-assurance government profiles typically require hard-fail revocation or explicitly bounded grace behavior; offline convenience is always conditional.
- **Source/Validation:**
  - Grounded in `marty-ui/docs/PKI-Trust-Model.md`, `marty-protocol/docs/implementation-guide.md`, `marty-protocol/docs/glossary.md`, `marty-protocol/SPECIFICATION.md`, and the existing travel standards drafts in `marty-blog/guides/05-drafting/post-drafts/batch-08/` and `batch-10/`.

### Context: Trust Profiles Explained
- **Requirement:** One concrete Trust Profile example plus one failure-handling rule set that proves trust is a governed runtime contract rather than a loose bundle of roots.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Core contract:* a Trust Profile explicitly carries `trust_sources`, `allowed_algorithms`, `supported_formats`, `compliance_status`, optional `revocation_profile_id`, and optional `time_policy`, making trust decisions visible before any flow runs.
  - *Hybrid and shared trust:* a Trust Profile may combine `ROOT_CA` and `PINNED_ISSUER` sources in hybrid mode, and one EUDI Trust Profile can serve both `EUDI_PID` and `EUDI_MDL` when the same LoTL registry anchors both compliance codes.
  - *Failure handling:* if no trust source can validate the issuer, the verifier must reject with `ISSUER_UNTRUSTED`; if trust-list refresh fails beyond cache freshness, the verifier must fail closed unless bounded offline grace is configured; implicit trust fallback is prohibited.
- **Source/Validation:**
  - Grounded in `marty-protocol/README.md`, `marty-protocol/SPECIFICATION.md` (§5.2–§5.7.5), and `marty-protocol/protocol/trust-profile/SPECIFICATION.md`.

### Context: Credential Templates Explained
- **Requirement:** One concrete template anatomy example plus one lifecycle or derivation rule that shows templates are reusable issuance contracts rather than schema snippets.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Template anatomy:* a Credential Template binds `credential_type`, `compliance_profile_id`, claims, validity rules, optional workflow linkage, and exactly one active issuer-artifact path (`issuer_key_id`, `issuer_certificate_chain_pem`, or `issuer_did`) unless artifacts are auto-generated in dev.
  - *Claim discipline:* claim names must be unique within the template, and `derived_from` must reference another claim in the same template — for example, `age_over_21` derived from `birth_date` in the mDL example.
  - *Lifecycle and derivation:* `DRAFT` templates cannot be used in active flows, `DEPRECATED` templates must not issue new credentials, and wallet compatibility is derived from the template’s compliance profile `(credential_format, issuance_protocol, compliance_code)` rather than from a separate manual wallet flag.
- **Source/Validation:**
  - Grounded in `marty-protocol/SPECIFICATION.md` (§6), `marty-protocol/protocol/credential-template/SPECIFICATION.md`, `credential-templates`, and `how-credential-issuance-works`.

### Context: Presentation Policies Explained
- **Requirement:** One policy example that shows predicates, fallback, holder binding, and freshness in the same object, plus one operational distinction between stateless evaluation and flow-orchestrated verification.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Policy shape:* the Age 21+ example uses a required claim with an `EQUALITY` predicate over `age_over_21`, sets `fallback_policy: ACCEPT_RAW`, requires holder binding via `NONCE`, and enables freshness through `require_not_revoked`.
  - *Evaluation order:* when a predicate is present, the verifier checks whether the required circuits are supported; if not, it consults `fallback_policy` (`REQUIRE_PREDICATE`, `ACCEPT_RAW`, or `DENY`) before deciding whether the request can still be satisfied.
  - *Operational boundary:* `/v1/presentation-policies/{id}/evaluate` and `/v1/presentation-policies/evaluate` are stateless policy-evaluation endpoints, while `/v1/flows/verify` uses the policy inside a full asynchronous flow with wallet interaction and lifecycle state.
- **Source/Validation:**
  - Grounded in `marty-protocol/SPECIFICATION.md` (§7), `marty-protocol/protocol/presentation-policy/SPECIFICATION.md`, `presentation-policies`, `presentation-protocols`, and `zero-knowledge-predicates-identity`.

### Context: Deployment Profiles Explained
- **Requirement:** One concrete endpoint hierarchy and one runtime comparison showing how deployment behavior changes without changing the underlying trust logic.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Hierarchy:* `Organization -> Site -> Deployment Profile -> Lane -> Device` is the operational chain that turns one abstract policy stack into a set of real scanners, kiosks, mobile surfaces, or API clients.
  - *Runtime comparison:* `ONLINE` deployments prefer real-time trust and revocation checks; `OFFLINE` deployments rely on cached trust and explicit grace behavior; `HYBRID` deployments combine cached trust with best-effort live refresh.
  - *Operational constraints:* `presentation_policy_ids` must never be empty, lane `device_ids` must be unique across the profile, `default_policy_id` must already be enabled on the profile, and issuance-capable endpoints may only reference `ACTIVE` Credential Templates.
  - *Concrete example:* the airport gate deployment couples one trust profile with multiple presentation policies, uses `HYBRID` mode, enables operator UI, and declares lane-level device assignments plus offline cache TTL behavior.
- **Source/Validation:**
  - Grounded in `marty-protocol/SPECIFICATION.md` (§8), `marty-protocol/protocol/deployment-profile/SPECIFICATION.md`, `deployment-profiles`, `deployment-profiles-from-design-to-production`, and `offline-verification-guide`.

## Wave 3 — Governance recovery evidence

### Context: Identity Governance Models
- **Requirement:** One cross-sector governance comparison plus one clean mapping from governance choices to governed Marty objects.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Cross-sector comparison:* enterprise programs can centralize governance inside one trust and policy team, while ecosystems such as ICAO, EUDI, education accreditation, and alliance-style networks distribute authority across shared frameworks and trust lists.
  - *Object mapping:* `Compliance Profile` captures external framework defaults, `Trust Profile` captures trusted issuers and validation posture, `Policy Set` captures permit/forbid rules, and `Deployment Profile` carries the runtime consequences of those governance decisions.
  - *Operating-surface proof:* pricing and offering materials scale by trust profiles, policy versioning, audit retention, and deployment scope, which proves governance is an operating surface rather than a back-office footnote.
- **Source/Validation:**
  - Grounded in `compliance-profiles-in-practice`, `guides/03-world-building/protocol-ecosystem-map.md`, `product-catalog/pricing-and-packaging.md`, `product-catalog/offering-matrix.md`, and `marty-protocol/docs/design-principles.md`.

### Context: RBAC vs ABAC
- **Requirement:** One clear RBAC example plus one ABAC example, then one bridge showing how Marty supports both under Cedar.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *RBAC example:* `cedar_actions.py` maps stable gateway surfaces into actions such as `users:read`, `users:invite`, `roles:write`, and `keys:write`, which is the role-friendly side of the model.
  - *ABAC example:* the MMF `abac_engine.py` evaluates policies across `principal`, `resource`, `action`, and `environment` with operators such as equals, greater-than, contains, and regex, proving how contextual rules exceed simple role mapping.
  - *Bridge proof:* the Cedar policy documentation explicitly frames API access as `RBAC + ABAC`, while `deploy-enterprise-access` shows an attribute-driven rule such as `principal.department == "HR"` operating inside a governed policy surface.
- **Source/Validation:**
  - Grounded in `cedar-policies-for-identity-governance`, `marty-ui/packages/marty_common/cedar_actions.py`, `marty-microservices-framework/mmf/framework/authorization/adapters/abac_engine.py`, `marty-protocol/docs/cedar-policies.md`, and `deploy-enterprise-access`.

### Context: Policy Engines for Identity Systems
- **Requirement:** One policy-engine architecture example plus one explicit reason Cedar is better than hardcoded or opaque rule objects for Marty.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Architecture proof:* MIP §16 defines `PolicySet` domains for access control, credential verification, and approval rules, while the Cedar integration guide and engine implementations evaluate `principal`, `action`, `resource`, and `context` in-process.
  - *Design-principles proof:* `Authorization Is Formally Verifiable` names deny-by-default semantics, static analysis, auditability, and separation from code as first-class reasons for the policy-engine choice.
  - *Lifecycle proof:* `policy_set_use_cases.py` exposes create, update, activate, archive, and validate operations, proving policies are governed artifacts with lifecycle rather than anonymous middleware branches.
- **Source/Validation:**
  - Grounded in `marty-protocol/SPECIFICATION.md`, `marty-protocol/docs/design-principles.md`, `marty-protocol/docs/cedar-integration-guide.md`, `marty-ui/packages/marty_common/cedar_engine.py`, and `marty-ui/services/organization/application/policy_set_use_cases.py`.

### Context: Governing Credential Ecosystems
- **Requirement:** One multi-issuer ecosystem scenario plus one crisp boundary between governance frameworks and registry mechanics.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Ecosystem proof:* the ecosystem map and trust-services architecture show that sovereign programs, alliance networks, education accreditation systems, and enterprise federations all need explicit rules for who may issue, what status changes mean, and how trust state travels.
  - *Boundary rule:* governance frameworks decide membership, obligations, revocation consequences, and change control; trust registries and snapshots distribute the resulting trust state; local `Trust Profile` objects consume that state during verification.
  - *Compliance mapping:* MIP §10.5 treats `Compliance Profile` codes such as `ICAO_DTC`, `EUDI_PID`, and `OB3_JWT` as stable bundles, proving ecosystem governance can land as named technical defaults instead of bilateral guesswork.
- **Source/Validation:**
  - Grounded in `guides/03-world-building/protocol-ecosystem-map.md`, `building-trust-registries-at-scale`, `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`, `marty-protocol/SPECIFICATION.md`, and `product-catalog/pricing-and-packaging.md`.

## Wave 5 — Trust infrastructure recovery evidence

### Context: Trust Registries Explained
- **Requirement:** One concrete registry-distribution example plus one crisp distinction between an ecosystem registry and a verifier-local trust profile.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Architectural boundary:* a trust registry is ecosystem-level distribution and governance infrastructure; a local `Trust Profile` is the verifier-local contract that consumes that registry state and turns it into validation behavior.
  - *Cross-ecosystem examples:* ICAO PKD distributes CSCA and signer material, AAMVA-style trust distribution aggregates issuing-authority roots, EU trusted-list infrastructure distributes accepted trust anchors, and the airline-alliance scenario lets Lufthansa accept a United-issued credential because both parties rely on shared registry state instead of a live callback.
  - *Operational structure:* Marty's registry-entry model carries anchor type, operation, country code, certificate or key material, source, sequence, and current-state fields, proving the registry is publishing trust state rather than just names.
- **Source/Validation:**
  - Grounded in `building-trust-registries-at-scale`, `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`, `marty-ui/services/trust_profile/main.py`, `deploy-membership-credentials`, and `guides/03-world-building/protocol-ecosystem-map.md`.

### Context: Federation in Identity Systems
- **Requirement:** One cross-organization scenario proving federation works through shared trust infrastructure rather than a central callback, plus one clean distinction between federation and a centralized platform.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Alliance proof:* United issues a `Gold Status` credential and Lufthansa verifies it locally at lounge entry because both organizations trust the shared alliance registry and policy boundary; no live call to United is required at decision time.
  - *Cross-sector translation:* the same trust shape appears in education and government ecosystems, where issuers and verifiers remain separate organizations but share governance, trust distribution, and acceptance rules.
  - *Boundary rule:* centralized platforms keep trust in the middle of the runtime path, while federation distributes trust state so each verifier can still make its own local decision.
- **Source/Validation:**
  - Grounded in `deploy-membership-credentials`, `four-actors-of-identity-systems`, `guides/03-world-building/protocol-ecosystem-map.md`, and `how-governments-build-identity-pki`.

### Context: Verifier Infrastructure
- **Requirement:** One concrete component inventory plus one trust-sync or freshness example showing how a verifier stays current enough to operate locally.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Component inventory:* Marty's trust-services architecture breaks verifier state into trust anchors, document-signer certificates, CRL cache, revoked certificates, master lists, and trust snapshots rather than one undifferentiated trust blob.
  - *Sync surface:* trust-registry endpoints expose sync tokens, sequences, current-entry counts, and anchor-class counts so operators can tell whether verifier fleets are aligned with current trust state.
  - *Runtime boundary:* the trust-profile service defines trust sources, validation rules, revocation posture, time policy, and issuer relationships up front, proving the verifier depends on a control plane before it can evaluate a single credential.
  - *Freshness consequence:* `offline-verification-guide` provides the operator-facing ladder for what happens when cached status or registry freshness expires, making degraded mode a verifier feature rather than an improvised incident response.
- **Source/Validation:**
  - Grounded in `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`, `marty-ui/services/trust_profile/main.py`, `marty-core/marty-verification/README.md`, and `offline-verification-guide`.

### Context: Discovering Trusted Issuers
- **Requirement:** One explicit issuer-discovery path showing how a verifier moves from a declared trust source to an accepted issuer set before validation begins.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Discovery path:* a `Trust Profile` declares one or more trust-source types such as `TRUST_LIST`, `ROOT_CA`, `PKD_URL`, `PINNED_ISSUER`, or `issuer_did`; the verifier then resolves issuer candidates through registry or root material before attempting live credential validation.
  - *State model:* `IssuerEntity` records carry compliance status, validity windows, trust-anchor linkage, and revocation state, while `TrustProfileIssuer` links carry relationship status, trust level, and local policy consequences.
  - *Modeling rule:* Marty's trust-source model requires exactly one of `url`, `certificate_pem`, or `issuer_did`, which proves issuer discovery is intended to begin from one explicit source path rather than an ambiguous mix of runtime guesses.
  - *Operational consequence:* discovery has to be scoped by jurisdiction, relationship status, and freshness so the verifier can explain not only whether an issuer exists, but whether that issuer is currently in scope.
- **Source/Validation:**
  - Grounded in `trust-registries-explained`, `building-trust-registries-at-scale`, `marty-ui/services/trust_profile/main.py`, `marty-core/marty-verification/src/trust_anchor/registry.rs`, and `understanding-trust-anchors`.

### Context: Privacy Data Minimization
- **Requirement:** One especially clear verifier request example.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Example:* Instead of returning a JSON block with `"birthdate": "1990-01-01"`, the verifier request schema uses presentation exchange to explicitly query only the JSON path `$.verified_claims.claims.age_over_21`.

### Context: Selective Disclosure
- **Requirement:** One crisp explanation of why mechanism choice should follow policy need rather than novelty.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Framework:* Use SD-JWT when relying parties need standard JSON processing and familiar JWT libraries (90% of enterprise web apps). Fall back to ZKP only when strict regulatory rules mandate mathematical unlinkability across multiple presentations without re-issuing the credential.

### Context: Deploying Marty for Airline Boarding
- **Requirement:** One compliance change example that shows why configuration materially reduces change friction.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Scenario:* TSA updates requirements so boarding passes must explicitly verify "Cleared for PreCheck" rather than inferring it from loyalty status. Operators push a new Cedar `PresentationPolicy` to the Edge Gates requiring this claim. Zero C++ or Java code at the physical gate needs recompiling.

### Context: Deploying Marty for Age Verification
- **Requirement:** One especially clean retail scenario with minimal ambiguity.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Scenario:* Buying a restricted item at a grocery self-checkout kiosk. A QR code prompts an OID4VP flow. The verifier's policy strictly requests the `age_over_21` predicate—meaning the kiosk never even touches the customer's name, address, or true birthdate.

### Context: Deploying Marty for Enterprise Access
- **Requirement:** One enterprise architecture example that avoids becoming generic IAM commentary.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Scenario:* Protecting a sensitive internal HR portal. When an employee routes from the standard intranet to the HR network, the API gateway triggers an inline verification using a Marty corporate credential, governed by a Cedar policy `permit(principal, action == "AccessHR") when { principal.department == "HR" };`. It resolves locally in <20ms without relying on an external Okta API roundtrip.

### Context: Deploying Marty for Membership Credentials
- **Requirement:** One non-government ecosystem example that clearly benefits from portable trust logic.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Scenario:* Airline alliances (e.g., Star Alliance). United Airlines issues a "Gold Status" credential. When the passenger enters a Lufthansa lounge in Munich, Lufthansa's local verifier trusts the Star Alliance root registry and validates the credential instantly, requiring zero backhaul API calls to United's servers.

### Context: Deployment Profiles in Practice
- **Requirement:** A crisp decision framework, not just a feature list.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Decision Tree:* 
    1. Need offline capability or latency <50ms? -> `Edge Profile` (local caching, syncs in background).
    2. Strict data residency or BYOK key management required? -> `Self-Hosted Profile` (Kubernetes, OpenBao).
    3. Want fast integration with zero infra overhead? -> `SaaS Profile` (Marty managed plane).

### Context: Compliance Profiles in Practice
- **Requirement:** One compliance change example that shows why configuration materially reduces change friction.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Scenario:* A new state-level PII regulation prohibits logging transaction IDs for routine age checks. Update the Cedar compliance policy: `forbid(principal, action == "LogTransaction", resource)` for the specific verifier scope. The routing layer immediately drops the field, avoiding a risky backend database and application redeployment.

### Context: Offline Verification Guide
- **Requirement:** One concrete operator policy example when trust freshness expires.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Policy Scenario:* A transit station loses network for 48 hours. The Status List (CRL) freshness expires. Operator fallback policy is trigged: "Accept base credentials for single-ride access to keep crowds moving, but reject monthly passes to limit high-value offline fraud."

### Context: Implementing OID4VCI & OID4VP with Marty
- **Requirement:** One bounded walk-through that keeps the transport layer subordinate to the object model.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Snippet Concept:* An Express.js/Rust route showing OIDC purely as the HTTP wrapper. The transport layer receives the `vp_token`, but immediately hands it off: 
    `marty_core::verifier::evaluate_presentation(vp_token, cedar_policy)`. If it returns `Ok(Verified)`, the OIDC layer issues the session cookie. OIDC transports the bytes; Marty provides the trust judgment.

---

## Wave 6 — Final gap-closure evidence

### Context: Selective Disclosure Explained
- **Requirement:** One comparison of disclosure mechanisms plus one decision rule for when to prefer SD-JWT vs ZK.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Mechanism ladder:* Full claim disclosure reveals exact attributes; issued predicate claims reveal only a bounded fact such as `age_over_21 = true`; SD-JWT discloses only selected salted claim bundles while hidden claims remain hashed; ZK proofs reveal only that a condition holds, not the source value.
  - *Policy-first rule:* The Presentation Policy defines what the verifier is allowed to learn before any mechanism is chosen, which means selective disclosure begins with the bounded question rather than with a preferred cryptographic format.
  - *Operational choice:* SD-JWT is the strongest fit when relying parties need standard JSON/JWT tooling and readable claims; ZK becomes justified when policy forbids revealing the underlying value or needs stronger resistance to linkability across repeated presentations.
  - *Deployment consequence:* Mechanism choice changes verifier libraries, wallet capability, logging scope, and latency budget, so disclosure strategy is also a runtime decision.
- **Source/Validation:**
  - Grounded in `selective-disclosure`, `sd-jwt-selective-disclosure-deep-dive`, `zero-knowledge-predicates-identity`, `presentation-policies-minimum-disclosure`, and `data-minimization-in-identity`.

### Context: Why the Marty Protocol Exists
- **Requirement:** One clean contrast between the category problem and the protocol answer, plus one proof that MIP is the minimum automatable model rather than another vendor stack.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Category contrast:* `why-identity-needs-a-protocol` frames identity as infrastructure instead of a metered vendor workflow, establishing the platform-vs-protocol problem before MIP is introduced.
  - *Minimum model:* `marty-protocol/README.md` defines the core model as `Trust Profiles + Credential Templates + Presentation Policies + Deployment Profiles, orchestrated by Flows`, which is the specific minimum grammar the protocol contributes.
  - *Not a monolith:* the README also separates supporting abstractions such as `Compliance Profile`, `Revocation Profile`, `Wallet Profile`, and `Policy Set (Cedar)`, proving MIP is a stable object model rather than one vendor runtime pretending to be the whole system.
  - *Adoption proof:* `introducing-mip`, `mip-json-schemas-walkthrough`, and `why-marty-is-ready-for-evaluation` show schemas, policy surfaces, conformance, and reference implementations as shared artifacts that multiple implementations can inspect.
- **Source/Validation:**
  - Grounded in `why-identity-needs-a-protocol`, `marty-protocol/README.md`, `introducing-mip`, `the-marty-identity-model`, `mip-json-schemas-walkthrough`, and `why-marty-is-ready-for-evaluation`.

### Context: How Everything Works Together
- **Requirement:** One end-to-end scenario touching all five primitives, plus one proof that the same composition survives runtime or ecosystem change.
- **Evidence Status:** [x] COMPLETED
- **Evidence Collected:**
  - *Primitive chain:* Trust Profiles answer who counts; Credential Templates answer what gets issued; Flows sequence apply / approve / issue / present / verify; Presentation Policies bound what the verifier may learn; Deployment Profiles package the same judgment for cloud, self-hosted, or edge execution.
  - *End-to-end scenario:* the publication’s pre-boarding and bounded-verification material already shows one reusable pattern: a governed credential is issued under a trust profile and template, moved through a flow, presented against a bounded policy, and verified in a runtime with explicit cache and freshness rules.
  - *Composition rule:* `five-primitives-in-one-picture` and `the-marty-identity-model` both insist that each primitive owns a different class of decision, which is why trust, issuance, disclosure, runtime, and orchestration do not need to leak back into application code.
  - *Survival under variation:* `same-trust-model-different-runtime` and `one-protocol-many-ecosystems` prove that hosted vs edge and travel vs enterprise differences change profile data and runtime packaging rather than the underlying five-primitives composition.
- **Source/Validation:**
  - Grounded in `the-marty-identity-model`, `five-primitives-in-one-picture`, `flows-orchestrating-identity-lifecycle`, `marty-protocol/README.md`, `same-trust-model-different-runtime`, and `one-protocol-many-ecosystems`.

## Practical Rule

An evidence packet moves from `NOT STARTED` to `COMPLETED` only when the specific data point, visual asset, diagram, or code snippet is documented in the *Evidence Collected* and *Source/Validation* fields. Once completed, the corresponding post packet is officially ready for Phase 05 Drafting.

## Related

- `publication-post-packets.md` — The structural briefs that dictate what proof is needed here.
- `publication-scene-cards.md` — The narrative backbone defining where this evidence will live.
- `../05-drafting/priority-draft-briefs.md` — The entry points for actual prose generation once evidence is gathered.

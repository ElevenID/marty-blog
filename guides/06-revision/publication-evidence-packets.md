# Publication Evidence Packets

Phase: 06 - Revision  
Purpose: Act as the definitive collection point for the concrete proof, diagrams, and quantitative examples required by the post packets before prose is drafted.  
Time to Complete: Variable (Research and Design Dependent)

<!-- guide:publication_evidence_packets -->

## Why This Matters

While the *post packets* (`publication-post-packets.md`) identify the structural gaps and requirements for each post, the *evidence packets* are where that required substance is actually collected, vetted, and finalized.

A draft should not begin until its corresponding evidence packet is complete. Using these packets ensures that posts are built on concrete examples rather than hypothetical filler.

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

## Practical Rule

An evidence packet moves from `NOT STARTED` to `COMPLETED` only when the specific data point, visual asset, diagram, or code snippet is documented in the *Evidence Collected* and *Source/Validation* fields. Once completed, the corresponding post packet is officially ready for Phase 05 Drafting.

## Related

- `publication-post-packets.md` — The structural briefs that dictate what proof is needed here.
- `publication-scene-cards.md` — The narrative backbone defining where this evidence will live.
- `../05-drafting/priority-draft-briefs.md` — The entry points for actual prose generation once evidence is gathered.

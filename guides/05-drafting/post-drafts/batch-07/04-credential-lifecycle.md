# The Credential Lifecycle

*Credentials are not static files that become trustworthy once and then stay trustworthy forever. They move through approval, issuance, presentation, verification, status change, and renewal under rules that have to hold up in production.*

Many explanations of credentials stop at issuance, as if the interesting part were over once the issuer signed the document.

In practice, issuance is just the midpoint where the system becomes visible.

Before a credential is issued, evidence has to be collected and a decision has to be made about whether the subject qualifies. After a credential is issued, it has to be presented, verified, kept current enough, revoked when necessary, and sometimes reissued when the underlying facts change. The lifecycle is what turns a credential from a neat artifact into an operating system for trust.

That is why Marty treats flows, templates, policies, and deployment behavior as governed objects. A credential does not live only in the moment of signing. It lives through the whole path from application to real-world reliance.

## Application and approval set the issuance conditions

A trustworthy credential starts before the credential exists.

Someone or something has to apply. Evidence has to be gathered. Rules have to be evaluated. A person, policy engine, or workflow has to decide whether issuance should happen and under which terms. In a simple case, that may be a university checking that a student completed graduation requirements. In an enterprise case, it may be HR confirming employment status and manager approval. In a regulated case, it may include document checks, registry validation, or licence verification.

This matters because issuance is not supposed to mint truth out of thin air. It is supposed to convert an approved claim into a durable proof object.

If the application and approval stages are weak, the credential inherits that weakness. A perfectly signed credential with bad source evidence is still a bad credential. That is why serious systems separate the approval logic from the moment of signing. They need a clear record of what was checked, who approved it, and which template or policy governed the outcome.

Seen this way, the opening stages of the lifecycle are not paperwork around the real work. They are the conditions that make the later proof worth trusting.

## Issuance and presentation turn approval into portable proof

Once approval exists, issuance transforms that approved state into a credential the holder can actually use.

This is where the template matters. The issuer decides which claims belong in the credential, how long they remain valid, whether some claims can be selectively disclosed, and which cryptographic or compliance rules apply. The result is not just an approval record sitting in an internal database. It is a portable artifact the holder can store and present later.

Presentation is the next moment where the lifecycle becomes operational. The holder does not present the credential for its own sake. The holder presents it because a verifier needs an answer for a decision: may this person access the door, complete the transaction, enter the lounge, or satisfy the policy boundary?

That is what makes a credential reusable. One issuance can support many valid presentations across different moments and surfaces. The same employee credential may be used at a building door, then at a network gateway, then at an internal HR portal. The same degree credential may be shown to multiple employers. The same travel credential may be used in different checkpoints under different presentation rules.

Issuance creates the portable proof. Presentation turns that proof into a real decision path.

## Verification, revocation, and renewal keep the system honest

After issuance, the system still has work to do.

Verification has to confirm that the signature is valid, the issuer is trusted, the credential is still within policy, and any required status or revocation checks pass. That work may happen online with fresh status data, or offline with cached trust material and bounded freshness windows. Either way, a credential is not accepted because it exists. It is accepted because it still satisfies the verifier’s current rules.

That is why revocation is part of the lifecycle rather than an awkward appendix. Some facts change. Employment ends. A licence is suspended. A credential is replaced. A device is lost. If the system cannot express that a once-valid credential should stop counting, the lifecycle is incomplete.

Renewal and reissue matter for the same reason. Some credentials expire on schedule. Others need to be reissued because the claims changed even though the subject is still legitimate. A department transfer may require a new employee credential. A renewed licence may need a fresh credential with a new validity window. A long-lived wallet may continue to hold several generations of proof for the same subject over time.

This is where operational pressure enters. Offline environments need cache windows and failure rules. High-assurance verifiers may require fresher status than low-risk ones. Some systems can tolerate a bounded grace period; others should fail closed. The lifecycle is where those runtime choices stop being abstract and start affecting real acceptance decisions.

A credential, then, is not a static thing. It is a governed object moving through a sequence: application, approval, issue, present, verify, update, revoke, renew.

If you want the clearest picture of how Marty organizes that movement, continue to `five-primitives-in-one-picture`, then to `the-marty-identity-model`. Those posts turn the lifecycle into a system map instead of a one-off workflow.

## Related reading

- `verifiable-credentials-explained` — the proof object that moves through this lifecycle
- `issuers-holders-verifiers-explained` — the three operational roles that participate in the lifecycle
- `flows-orchestrating-identity-lifecycle` — the Marty primitive that governs end-to-end identity journeys
- `the-marty-identity-model` — the system grammar that keeps lifecycle, trust, policy, and deployment legible together

## Draft metadata

- **Slug:** `credential-lifecycle`
- **Date:** `2025-09-06`
- **Updated date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Identity Concepts`
- **Topic cluster:** `Foundations`
- **Layer:** `Foundations`
- **Difficulty:** `Beginner`
- **Section:** `start-learning`
- **Related:** `verifiable-credentials-explained`, `issuers-holders-verifiers-explained`, `five-primitives-in-one-picture`
- **Concept tags:** `foundation`, `credential-lifecycle`, `flow`
- **Standards tags:** `(none)`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** architect, operator, implementer
- **Likely CTA:** `five-primitives-in-one-picture`
- **Status:** `live`
- **Batch:** `batch-07`

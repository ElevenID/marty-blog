# Presentation Policies Explained

*Presentation Policies define what verifiers require. This post provides a complete technical walkthrough of how required claims, predicates, fallback behavior, freshness, and holder binding combine into one machine-readable verifier contract.*

Many teams treat verification policy as a late-stage implementation detail.

A product owner decides what should count. An engineer threads those checks into code. A wallet integration tries to satisfy the request. If privacy questions appear later, they get handled with a separate conversation about selective disclosure or zero-knowledge proofs.

That workflow is familiar, and it is structurally upside down.

A verifier should start with one explicit question: what is the least information required to make this decision under our trust and risk constraints? A Presentation Policy is the object that answers that question in Marty. It is not just a list of requested fields. It is the machine-readable contract that defines which claims matter, whether predicates are acceptable, when holder binding is required, how freshness is interpreted, and what should happen when the preferred proof shape is unavailable.

That is why this primitive is more powerful than it first appears.

The short explainer taught the minimum-disclosure story. This deeper pass shows the technical contract underneath it. A Presentation Policy is where the verifier’s business rule, privacy boundary, and runtime proof expectations finally become one object instead of three half-connected conversations.

## A presentation policy is a verifier contract

The easiest way to miss the primitive is to think from the wallet outward.

A wallet has credentials. A verifier wants proof. The holder presents something.

That is the visible interaction, but it is not the design boundary.

The real design boundary begins on the verifier side. What decision is the verifier allowed to make? What information is truly necessary? Which credential types are acceptable? Which trust profile constrains accepted issuers? Those questions live inside the Presentation Policy before the wallet even starts matching anything.

That is why the entity begins with `required_claims` and treats them as mandatory. A policy with no required claims is not a permissive verifier. It is an undefined verifier. The object must say what needs to be learned, even if the answer eventually comes through a predicate rather than a raw field.

The same is true of `accepted_credential_types` and optional `trust_profile_id`.

A verifier is not merely saying “show me something about age” or “show me any employee credential.” It is declaring which credential families count for the decision and which trust context is valid for those claims. This is what turns a presentation request into a contract rather than a vague wish.

That distinction becomes especially important when multiple credential types could satisfy the same user-facing business purpose. The user may think they are only proving age or access. The system still needs a governed object that says which evidence types it will accept and under what trust assumptions. The Presentation Policy is where that decision becomes inspectable.

So the first deep point to hold onto is this: a Presentation Policy is the verifier’s explicit question. It defines the least information needed for a decision under a declared trust boundary.

## Predicates, fallback, and holder binding shape the proof request

Once the question is explicit, the next layer is how the verifier is willing to learn the answer.

This is where the policy becomes more than a field checklist.

A required claim can be satisfied as a raw value, as a constrained value, or through a predicate. The specification supports predicate types such as range proofs, equality checks, membership tests, non-membership, and inequality. That matters because the verifier does not always need the underlying claim itself. Sometimes it needs to know only that a condition is true.

But predicates are not magic. They depend on supported circuits, supported formats, and clear fallback behavior.

That is why `predicate_spec`, `supported_circuits`, and `fallback_policy` matter so much. If the verifier prefers a zero-knowledge proof and the runtime supports the right circuit, the wallet can provide that shape. If the circuit is unavailable, the policy still has to say what happens next. `REQUIRE_PREDICATE` means the request cannot be satisfied without that proof form. `ACCEPT_RAW` means the verifier is willing to fall back to the underlying claim. `DENY` means the presentation must fail rather than widen disclosure.

That is not a secondary detail. It is the privacy boundary in executable form.

The policy is also where proof-of-possession becomes explicit. Through `holder_binding`, the verifier can require nonce binding, device-key proof, or session binding. That means the Presentation Policy is not only deciding what information is needed. It is also deciding whether the holder must prove control of the credential in a way that resists replay or detached presentation.

Freshness pushes the same idea further.

A policy can set age limits on the credential, require not-revoked status, and define revocation grace behavior for constrained environments. This is the point where privacy and operational seriousness meet. The verifier is still asking a bounded question, but it is also saying how current the answer must be before it counts.

That is why a Presentation Policy should be thought of as a proof-shaping contract. It decides whether the verifier wants raw claims, predicates, holder-bound proof, fresh evidence, or some governed combination of them.

The deeper architectural win is that all of those choices stay visible in data.

## Dynamic policy is how verification changes without code drift

The last layer is what happens when verifier requirements evolve.

In most systems, this is where architecture quietly gives up. A rule changes, so code changes. A new claim is required, so a controller branch appears. A privacy team pushes for less disclosure, so a special case gets threaded into one endpoint but not another. Over time, verification logic stops being a policy surface and becomes a trail of historical compromises inside application code.

Marty’s model tries to prevent exactly that.

A Presentation Policy is expected to change. In fact, it is the most dynamic of the core primitives because business rules and verifier needs change more often than root trust or credential structure. That is not a reason to hide it. It is a reason to model it explicitly.

The specification even separates evaluation modes accordingly. A verifier can use the stateless `/evaluate` endpoints to check a presentation against a saved or inline policy without creating a full flow instance. Or it can use the flow-driven verification path when the interaction includes wallet choreography, QR exchange, and lifecycle state. The important point is that the policy stays the policy in both cases. The transport and orchestration layer do not get to redefine the verifier’s question.

This is where the primitive becomes operationally elegant.

If a retailer changes from requesting date of birth to requesting only `age_over_21`, that should be a policy revision. If an airport gate begins requiring a stronger holder-binding posture, that should be a policy revision. If an enterprise verifier starts accepting a second credential type for the same access decision, that should be a policy revision. The verification engine should evaluate the new contract, not ask engineers to rediscover the business rule in code.

That does not make policy design trivial. It makes it governable.

And that is the right place to land the deep explanation. A Presentation Policy is the verifier contract because it defines what the verifier needs to learn, which proof forms are acceptable, how disclosure should behave when ideal proofs are unavailable, how holder binding is enforced, and how changing verifier rules stay visible as governed configuration rather than dissolving into endpoint logic.

Once readers see that, `presentation-protocols` becomes easier to understand. OID4VP is the carriage layer for a request that the Presentation Policy already defined. The protocol matters. The policy still decides what the verifier is actually asking.

If you want the transport layer next, continue to `presentation-protocols`. If you want the privacy and mechanism angle, go next to `selective-disclosure` or `zero-knowledge-predicates-identity`. If you want the broader live synthesis that puts this primitive back beside the others, return to `the-marty-identity-model` or `five-primitives-in-one-picture`.

## Related reading

- `presentation-policies-minimum-disclosure` — the shorter conceptual explainer for the same primitive
- `presentation-protocols` — how the policy-defined request is carried over OID4VP and related flows
- `selective-disclosure` — the mechanism-oriented privacy layer underneath the policy choices
- `zero-knowledge-predicates-identity` — the cryptographic proof layer for predicate-heavy policies
- `the-marty-identity-model` — the current live synthesis that reconnects this primitive to the rest of the protocol model

## Draft metadata

- **Slug:** `presentation-policies-explained-deep`
- **Date:** `2026-03-22`
- **Updated date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Presentation Policies`
- **Topic cluster:** `Core Protocol`
- **Primitive:** `Presentation Policies`
- **Layer:** `Present`
- **Difficulty:** `Advanced`
- **Section:** `core-protocol`
- **Related:** `presentation-policies-minimum-disclosure`, `presentation-protocols`, `selective-disclosure`
- **Concept tags:** `presentation-policy`, `core-object`, `implementation`
- **Standards tags:** `OID4VP`, `SD-JWT`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** implementer, privacy architect, policy author
- **Likely CTA:** `presentation-protocols`
- **Status:** `live`
- **Batch:** `batch-14`

# Trust Profile Evaluation and Failure Handling

*Trust Profiles are MIP's first primitive. This post walks through how trust sources, freshness rules, evaluation order, and fail-closed behavior turn a Trust Profile into a governed runtime decision boundary.*

Trust is one of those words that becomes less useful the more casually teams use it.

A verifier trusts an issuer. A wallet trusts a request. A deployment trusts a registry. A standards profile trusts a root authority. After a while, the conversation starts to sound complete even though nobody has named the actual object that carries those decisions.

That is where Trust Profiles matter.

The shorter concept explainer answers the front-door question: who do you trust, and how do you verify what they signed? This follow-on is about what happens after that answer reaches a live verifier. A Trust Profile is not just a list of roots. It is the explicit security contract that decides which trust sources are valid, which credential formats and algorithms are acceptable, when freshness matters, where revocation policy comes from, and what the runtime must do when the trust material is stale or missing.

That is why this primitive sits at the bottom of so much of the MIP model. If trust is still implicit, then every other object above it becomes harder to reason about. Issuance can create credentials nobody should accept. Presentation can prove the wrong thing to the wrong verifier. Deployment can keep running on stale assurance while operators think everything is fine. A Trust Profile turns all of that from hidden behavior into governed configuration.

## A Trust Profile is the security boundary

The easiest mistake is to imagine a Trust Profile as a security settings page.

It is more serious than that.

A Trust Profile is the point where an organization says, in machine-readable form, which issuer ecosystems count at all. It names the trust sources, the accepted algorithms, the supported formats, and the compliance state of the trust package. In the root specification, that is expressed through fields such as `profile_type`, `trust_sources`, `allowed_algorithms`, `supported_formats`, `compliance_status`, optional `revocation_profile_id`, and optional `time_policy`.

That combination matters because trust in MIP is not supposed to be a side effect of whichever verification library happens to be in the runtime. The trust contract belongs to a persistent object that can be reviewed, versioned, and reused.

This is also why the object has a real lifecycle. A Trust Profile in `SETUP_REQUIRED` state is not merely unfinished documentation. The specification is explicit that a profile in that state must not be used by an active flow. That rule sounds administrative until you think about the alternative. Without it, teams would treat half-configured trust as a temporary inconvenience and let production flows inherit whatever defaults or stale anchors were available.

The `profile_type` field is another example of why the object is deeper than a certificate bucket. `ICAO`, `AAMVA`, `EUDI`, and `CUSTOM` are not cosmetic labels. They signal the trust family the profile belongs to and therefore the validation assumptions and registry patterns likely to apply. The object is already telling the runtime, the policy layer, and the operator what kind of ecosystem it is entering.

That is the first big shift to land: a Trust Profile is the security boundary that decides whether the rest of the protocol is even allowed to proceed.

## Trust sources and time policy turn roots into runtime behavior

Once the boundary is explicit, the next layer becomes easier to see.

Trust is not only about which root you accept. It is also about how that trust reaches the verifier and how long it remains current enough to use.

MIP makes that visible through `trust_sources`. A Trust Profile can point at a signed trust list, a root CA certificate, an ICAO PKD download URL, or a pinned issuer identifier such as a DID. Those are not interchangeable shapes. They imply different operational stories. A `ROOT_CA` entry says the verifier begins from a specific root certificate. A `TRUST_LIST` says trust arrives as a governed registry artifact. A `PKD_URL` says the runtime depends on a passport-style distribution system. A `PINNED_ISSUER` says trust is anchored directly to the issuer identity rather than a broader CA hierarchy.

The useful thing is not that MIP supports several options. The useful thing is that the choice is explicit.

A verifier no longer has to hide these differences in custom code or operator folklore. The Trust Profile says what source type is in use, where trust material comes from, and which formats the verifier is prepared to evaluate once that source is accepted.

That visibility is even more important when ecosystems share a trust registry.

The specification calls this out directly through `compatible_compliance_codes`. A single EUDI Trust Profile can serve both `EUDI_PID` and `EUDI_MDL` when both rely on the same EU List of Trusted Lists. The same logic applies in travel contexts where multiple credential variants still anchor to the same ICAO trust infrastructure. That is a subtle but important point. Trust Profiles are not only about narrowing trust. They are also about reusing one governed trust package across multiple compliance surfaces when the registry reality justifies it.

Time policy adds the next layer.

A trust anchor is only useful if the runtime knows how to interpret time around it. `clock_skew_seconds` handles ordinary timing tolerance. `require_freshness` and `freshness_window_seconds` decide whether older credentials should still count. `max_credential_age_seconds` lets the verifier reject evidence that is structurally valid but operationally too old for the decision being made.

This is where the primitive stops looking like static configuration and starts looking like runtime behavior.

A Trust Profile with the same roots but a different freshness posture is not the same trust system. It may accept the same issuers while making materially different decisions under field pressure. The same is true of revocation. Once a `revocation_profile_id` is attached, the Trust Profile is no longer saying only who counts. It is also saying how current that trust judgment has to remain before the runtime should stop accepting the credential.

That is why trust source selection and time policy belong together. They turn trust anchors into operational behavior rather than abstract roots on a diagram.

## Evaluation and failure handling make trust auditable

The deepest layer of the primitive appears when a verifier actually evaluates a credential.

The root specification does not describe trust as one black-box yes-or-no operation. It gives a sequence.

The verifier identifies the credential format. It loads the active trust sources from the Trust Profile linked to the relevant policy. It validates issuer identity against those sources. It verifies the credential signature with an allowed algorithm. It checks validity period, revocation status, policy claims, and any attached Cedar verification policies. Then it records an audit event.

That sequence matters because it turns trust into something inspectable.

If a credential fails, the system can say where it failed. If the issuer is unknown, the error is `ISSUER_UNTRUSTED`. If trust-list refresh is stale beyond the allowed cache boundary, the verifier must fail closed unless a bounded offline grace mode is explicitly configured. If a credential format is unsupported, that is a format decision, not an accidental runtime surprise. If a Cedar verification rule forbids the presentation, that is a governed policy result rather than an improvised denial branch in application code.

This is the architectural payoff of the primitive.

Trust is no longer “whatever the verifier ended up accepting.” It becomes a reviewable path from declared trust sources to a logged decision. Security teams can govern it. Operators can reason about it. Standards teams can map ecosystems to it. Auditors can inspect it. Engineers can change it without rewriting the whole verifier.

It also explains why fail-closed behavior matters so much. The specification is blunt: implementations must not degrade into implicit trust when trust sources fail. That is one of the clearest signs that Trust Profiles are real security objects rather than convenience metadata. When the trust package is stale or missing, the correct behavior is governed failure, not hopeful acceptance.

So the cleanest summary is this: a Trust Profile does not merely tell the verifier which roots it likes. It defines the whole trust judgment boundary — trust-source type, accepted formats, algorithm rules, revocation posture, freshness expectations, evaluation order, and failure discipline.

Once that is visible, the rest of the architecture gets simpler.

Credential Templates can define what is issued without also smuggling in trust assumptions. Presentation Policies can define what must be shown without pretending they are also registry objects. Deployment Profiles can vary by runtime without inventing new trust logic for every endpoint. That is what a first primitive is supposed to do. It stabilizes the layer every later decision depends on.

If you want the next layer sideways, continue to `building-trust-registries-at-scale` for the ecosystem infrastructure around trusted issuers. If you want the root-material angle underneath it, go next to `understanding-trust-anchors`. If you want the broader model synthesis above it, return to `the-marty-identity-model` or `five-primitives-in-one-picture`.

## Related reading

- `trust-profiles-explained` — the shorter conceptual explainer for the same primitive
- `understanding-trust-anchors` — where root material and distribution patterns are unpacked directly
- `building-trust-registries-at-scale` — how accepted issuer ecosystems are governed beyond one verifier
- `the-marty-identity-model` — the current live synthesis that reconnects this primitive to the broader Marty grammar

## Draft metadata

- **Slug:** `trust-profile-evaluation-and-failure-handling`
- **Date:** `2026-03-11`
- **Updated date:** `2026-04-10`
- **Category:** `Technical`
- **Topic:** `Trust Profiles`
- **Topic cluster:** `Core Protocol`
- **Primitive:** `Trust Profiles`
- **Layer:** `Trust`
- **Difficulty:** `Advanced`
- **Section:** `core-protocol`
- **Related:** `trust-profiles-explained`, `building-trust-registries-at-scale`, `understanding-trust-anchors`
- **Concept tags:** `trust-profile`, `core-object`, `implementation`
- **Standards tags:** `X.509`, `ICAO 9303`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** implementer, security architect, platform admin
- **Likely CTA:** `building-trust-registries-at-scale`
- **Status:** `live`
- **Batch:** `batch-14`
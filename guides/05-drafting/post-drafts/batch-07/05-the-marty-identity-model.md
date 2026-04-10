# The Marty Identity Model

*Marty turns digital identity from a pile of standards, integrations, and policy exceptions into a governable system with stable objects: who is trusted, what gets issued, what must be shown, where verification runs, and how the journey moves.*

By the time a reader reaches this point, they have already seen the ingredients of a modern identity system.

They know digital identity is machine-readable evidence. They know verifiable credentials carry that evidence. They know issuers, holders, and verifiers play different roles. They know a credential lives through application, approval, issuance, presentation, verification, revocation, and renewal.

What is still missing is the operating grammar that keeps all of that from collapsing back into custom architecture.

That grammar is the Marty Identity Model.

If `five-primitives-in-one-picture` is the clearest map of the system, this post is the architectural contract underneath the map. It explains why the model exists at all and why the pieces are stable enough to survive different standards, runtimes, and deployment contexts.

## Roles and credentials are not enough by themselves

A common mistake in identity architecture is to stop too early.

Teams identify the actors. They choose credential formats. They sketch an issuance flow. Then they discover that the important decisions still have no durable home. Who exactly is trusted? Where do issuer rules live? What determines which claims a verifier may ask for? How does the same decision behave differently in a cloud API, an enterprise segment, or a disconnected gate? Which parts are policy changes, and which parts are application rewrites?

Roles and lifecycle stages help describe what is happening. They do not, by themselves, provide stable places for these decisions to live.

That is why so many identity systems feel more complicated in production than they looked on slides. Trust rules leak into code. Disclosure requirements hide in endpoints and UI forms. Runtime assumptions get buried in deployment-specific exceptions. Standards acronyms start pretending to be the architecture because the real architecture was never made explicit.

Marty exists to prevent that drift. The model says identity becomes governable when the important decisions become explicit objects rather than scattered implementation habits.

## Five primitives stabilize the system

The simplest statement of the Marty model is also the most important one: digital identity management can be represented by Trust Profiles, Credential Templates, Presentation Policies, Deployment Profiles, orchestrated by Flows.

Each primitive answers a question every serious identity system has to answer.

Trust Profiles answer who is trusted and how verification should occur. They hold trust anchors, issuer acceptance rules, algorithm expectations, and revocation assumptions.

Credential Templates answer what gets issued. They define the claims, schema, validity rules, compliance expectations, and disclosure posture of a credential type.

Presentation Policies answer what the verifier needs to know. They turn disclosure boundaries into explicit requirements: claims, predicates, holder binding, and freshness expectations.

Deployment Profiles answer where the decision runs and under which runtime constraints. They package trust and policy for cloud services, private environments, kiosks, lanes, and offline-capable deployments.

Flows answer how identity moves. They sequence apply, approve, issue, present, and verify so the system behaves like a lifecycle rather than a shelf full of disconnected objects.

The power of the model is not that each primitive is individually surprising. The power is that each one gives a stable home to a kind of decision that otherwise leaks into code, vendor behavior, or institutional improvisation.

This is the difference between an integration catalog and an architecture. An integration catalog remembers previous special cases. A model gives you stable places where future cases can land.

## Supporting abstractions keep the model practical

A real identity system still has more moving parts than five boxes.

That is why Marty includes supporting abstractions alongside the five primitives. Compliance Profiles translate ecosystem-specific requirements from ICAO, AAMVA, EUDI, enterprise, or other frameworks into the model. Wallet Profiles describe delivery and compatibility on the holder side. Revocation Profiles capture status strategies without forcing one mechanism everywhere. Application Templates support the user-facing workflows that feed issuance. Policy Sets in Cedar make governance and authorization explicit instead of letting them drift into hidden service logic.

These abstractions matter, but they are not extra core primitives.

That distinction matters because it preserves the model’s stability. The five primitives are the recurring objects every deployment keeps rediscovering. The supporting abstractions help the model operate in real ecosystems, but they do not change the underlying grammar.

In other words, Marty does not deny complexity. It gives that complexity named places to live without letting it take over the whole architecture.

## The model becomes a stable language for the rest of Marty

Once the model is visible, the rest of the publication stops sounding like disconnected essays.

Trust becomes a Trust Profile conversation. Issuance becomes a Credential Template and Flow conversation. Privacy becomes a Presentation Policy conversation. Runtime pressure becomes a Deployment Profile conversation. Standards alignment becomes a Compliance Profile conversation. Governance becomes a Cedar policy conversation. The same language keeps working even as the reader moves from travel to retail to enterprise to wallets to implementation notes.

That is the real payoff of the Marty Identity Model. It gives architects a stable design language, buyers a clearer category, operators a cleaner runtime story, and implementers a set of objects that can survive future standards and deployment change.

So use this post as the architectural grammar and `five-primitives-in-one-picture` as the map. One explains why the pieces exist. The other shows how to keep them in your head.

From here, the best next move is simple. Read `five-primitives-in-one-picture` if you want the cleanest visual map, then go straight to the primitive that is already costing you the most time: `trust-profiles-explained`, `presentation-policies-minimum-disclosure`, `deployment-profiles-from-design-to-production`, or `flows-orchestrating-identity-lifecycle`.

## Related reading

- `five-primitives-in-one-picture` — the clearest visual map of the Marty object model
- `trust-profiles-explained` — where the trust layer becomes explicit instead of buried in verifier code
- `flows-orchestrating-identity-lifecycle` — how the primitives move together through real journeys
- `why-identity-needs-a-protocol` — the category reframe for why the model matters at all

## Draft metadata

- **Slug:** `the-marty-identity-model`
- **Date:** `2026-03-05`
- **Updated date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Protocol Architecture`
- **Topic cluster:** `Protocol Overview`
- **Layer:** `Foundations`
- **Difficulty:** `Beginner`
- **Section:** `core-protocol`
- **Related:** `five-primitives-in-one-picture`, `flows-orchestrating-identity-lifecycle`, `why-identity-needs-a-protocol`
- **Concept tags:** `protocol-overview`, `five-primitives`, `foundation`
- **Standards tags:** `(none)`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** architect, implementer, sponsor
- **Likely CTA:** `trust-profiles-explained` or `flows-orchestrating-identity-lifecycle`
- **Status:** `live`
- **Batch:** `batch-07`

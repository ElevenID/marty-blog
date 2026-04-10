# Presentation Protocols

*A presentation protocol is how a verifier asks for bounded proof and how a holder’s wallet returns it. This post explains OID4VP, presentation definitions, and the mechanics that keep presentation safe.*

Once a credential exists, the next question is not “can the holder send a file?”

The real question is sharper: how does a verifier ask for the proof it actually needs, and how does the holder answer that request without leaking everything else the wallet happens to contain?

That is what presentation protocols are for.

They matter because presentation is the moment where privacy, trust, and runtime safety all collide. If the verifier cannot express a bounded request clearly, the holder is pressured to over-disclose. If the wallet cannot understand the request, interoperability collapses into custom integration. If the response is not bound to the holder and the moment of the request, replay becomes easier than it should be.

The cleanest way to understand presentation is this: it starts with the verifier’s policy-shaped question, OID4VP carries the request and response, and secure presentation depends on binding and flow shape at runtime.

## A presentation starts with the verifier’s question

Presentation should begin with what the verifier is entitled to know.

That sounds obvious, but many systems still behave as if a presentation starts with the holder revealing a broad credential payload and the verifier sorting out relevance afterward. That is the wrong shape.

In a serious identity system, the verifier should state the least information required for the decision. If the decision is “is this employee active?” then the verifier does not need the entire HR profile. If the decision is “is this person over twenty-one?” then the verifier does not need a full date of birth plus surrounding identity fields. The request boundary should be visible before the credential moves.

That is why Marty puts so much weight on `Presentation Policy`.

A presentation policy defines what the verifier may accept, what claims or predicates are required, which trust context is valid, and whether holder binding is required. In other words, it tells the verifier what counts as enough. Without that boundary, the transport standard has nothing useful to carry except a vague hope that the verifier will exercise restraint later.

This is also the point where presentation becomes different from issuance. Issuance asks what credential should exist and under which rules. Presentation asks what proof is necessary for this specific decision. The holder may possess a very rich credential. The verifier still should not learn all of it unless the decision genuinely requires it.

So the first rule of presentation protocols is not “use OID4VP.” It is “know the verifier’s question first.” OID4VP becomes useful because it can carry that bounded question in a standard way.

## OID4VP carries the request and response

OID4VP gives verifiers and wallets a common request/response pattern for presentations over the internet.

At the request side, the verifier creates an authorization request that includes a presentation definition. That definition describes what kind of credential can satisfy the check and which claims or constraints matter. At the response side, the wallet finds matching credentials, applies the required disclosure behavior, and returns a `vp_token` plus a presentation-submission object describing how the response satisfied the request.

That is the transport value.

The verifier no longer has to invent a proprietary request language for every wallet. The wallet no longer has to guess what the verifier expects from a blob of custom JSON. Both sides get a more legible interaction model: request, match, disclose, respond.

But it is still important to keep the layers straight.

OID4VP is not the same thing as the disclosure policy. The presentation definition expresses the verifier’s request in a wallet-readable format, but the surrounding architecture still decides what the verifier should be allowed to ask for and which trust or runtime rules apply. Marty’s `Presentation Policy`, `Trust Profile`, and deployment assumptions still matter because the transport alone does not tell you whether the request is reasonable, trustworthy, or safe in a given environment.

That distinction becomes especially important when people talk as if OID4VP itself solves privacy. It does not. It provides a standard way to ask for and return a presentation. Privacy still depends on whether the verifier asked for a bounded answer, whether the holder can selectively disclose only what is needed, and whether the policy layer prevented the verifier from widening the request by habit.

Still, the protocol matters a great deal. Without it, every presentation becomes another custom wallet integration. With it, the ecosystem gets a common way to express requests, match credentials, and return proof.

## Binding and flow shape keep presentation honest

A presentation is only useful if the verifier can trust that it belongs to this exchange and this holder.

That is why binding matters.

In OID4VP-style flows, the verifier provides a nonce. The wallet binds its response to that nonce. The holder also proves possession of the key material that controls the credential or presentation. Those mechanics stop a captured presentation from being replayed later in a different context. A verifier should not accept yesterday’s proof for today’s decision just because the payload looks familiar.

This is also where same-device and cross-device flows become more than a UX detail.

In a same-device flow, the wallet and verifier interaction can happen through redirects or deep links on one device. That is convenient, but it still needs the same disclosure and replay protections. In a cross-device flow, a desktop verifier often shows a QR-encoded request that the holder scans with a mobile wallet. That changes the handoff and the user journey, but not the underlying need for nonce binding, holder proof, and a bounded policy request.

The shape of the runtime matters too. A presentation at a browser login, a gate kiosk, and a mobile wallet handoff may all use different transport surfaces, timeout expectations, and device constraints. The protocol has to survive those environments without turning the verification event into a free-for-all. That is why presentation is never only about formatting the response correctly. It is about returning the right proof, from the right holder, for the right moment.

That is the design discipline readers should keep in view. A good presentation protocol does not exist to move the largest possible payload. It exists to move the narrowest sufficient proof safely.

If you want the next question after this one, it is usually interoperability. Once you understand how the verifier asks and the holder answers, the next pressure point is obvious: how do different credential formats coexist under one trust and policy model? Continue to `interoperability-between-credential-formats` for that boundary, or jump to `impl-oid4vp` if you want the transport-specific implementation view.

## Related reading

- `presentation-policies-minimum-disclosure` — why the verifier request should be bounded before any credential moves
- `selective-disclosure` — the mechanism layer that lets wallets reveal only what the verifier actually needs
- `impl-oid4vp` — the implementation-specific view of where OID4VP plugs into Marty's trust and policy model
- `how-credential-issuance-works` — the issuance-side counterpart to the presentation exchange

## Draft metadata

- **Slug:** `presentation-protocols`
- **Date:** `2025-11-15`
- **Updated date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Credential Presentation`
- **Topic cluster:** `Credential Presentation`
- **Layer:** `Present`
- **Difficulty:** `Intermediate`
- **Section:** `implementation`
- **Related:** `impl-oid4vp`, `presentation-policies-minimum-disclosure`, `interoperability-between-credential-formats`
- **Concept tags:** `credential-presentation`, `implementation`, `interoperability`
- **Standards tags:** `OID4VP`, `Presentation Exchange`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** architect, implementer
- **Likely CTA:** `interoperability-between-credential-formats`
- **Status:** `live`
- **Batch:** `batch-12`

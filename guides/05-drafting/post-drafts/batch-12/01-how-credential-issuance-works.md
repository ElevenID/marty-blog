# How Credential Issuance Works

*Credential issuance is the process of creating, approving, signing, and delivering a verifiable credential to a holder. This post explains the real mechanics of issuance without mistaking OID4VCI transport for the whole architecture.*

Credential issuance is often described like a network transaction.

A wallet scans a QR code. A credential offer appears. OAuth redirects happen. A signed document comes back.

All of that is real, and all of it is editorially incomplete.

If readers only learn issuance as a `/credential` endpoint story, they miss the part that actually determines whether the system is governable. Before any wallet receives a credential, someone had to decide what is being issued, who is allowed to issue it, what evidence or approval is required, how long the credential should remain valid, and which formats or compliance rules apply. That is the architecture. The transport is how that architecture reaches the holder.

That is why the cleanest way to understand issuance is this: issuance starts before the wallet, uses OID4VCI to deliver the result, and only becomes operationally serious when the system preserves durable evidence after delivery.

## Issuance starts before transport

A credential is not born when a wallet redeems an offer.

It starts earlier, when the issuer defines the governed object that will eventually be delivered.

In Marty, that means a `Credential Template` decides what the credential is supposed to contain: the claims, the credential type, the validity rules, the disclosure posture, and the format family the issuer can produce. If a team cannot explain those choices clearly, it does not yet have an issuance design. It has only a transport plan waiting for a payload.

The same is true of approval and trust context. Some credentials can be self-service once the holder authenticates. Others require evidence gathering, human review, or institutional approval before they should exist at all. A professional license, a government identity, or a high-value employee credential is not just a document-generation event. It is a governed act. The system needs rules for who can approve it, which authority stands behind it, and which surrounding trust context makes the result legitimate.

That is where `Flow` matters.

A flow turns issuance from a generic API call into a lifecycle. It links the template, the trust assumptions, the approval path, and the deployment context into one governed run. By the time a holder receives a credential offer, the important architectural questions are already being answered somewhere upstream. The offer is not the origin of the issuance. It is the point where a preconfigured issuance run becomes visible to the holder.

This is a useful correction because teams regularly reverse the sequence. They start from the transport standard, design the wallet interaction, and only later discover they still have nowhere explicit to encode credential meaning, approval rules, or lifecycle consequences. That is how issuance logic leaks into controller code, support playbooks, and vendor defaults.

A serious issuance model works the other way around. First decide what is being issued and under which rules. Then decide how the holder receives it.

## OID4VCI carries delivery, not meaning

Once the governed issuance exists, OID4VCI becomes valuable for exactly the reason standards are supposed to be valuable: it gives the issuer and wallet a common delivery language.

OID4VCI defines the mechanics for credential offers, authorization state, token exchange, and credential delivery. That matters because issuers and wallets need a predictable way to agree on how a credential is claimed. Without that standard transport surface, every issuance flow becomes another custom integration.

But OID4VCI still does not define the meaning of the credential.

That distinction becomes obvious when you compare the two grant shapes readers hear about most often.

In the authorization-code flow, the holder authenticates with the issuer during the exchange. That makes sense when the issuer wants the wallet session to pass through a conventional OAuth-style authorization boundary. In the pre-authorized-code flow, the holder has usually already been authenticated out of band, so the wallet redeems a pre-issued code rather than starting with a fresh browser-style sign-in journey. That makes sense for assisted onboarding, in-person issuance, or tightly bounded operational flows.

Those are real differences. They affect user experience, sequencing, and integration design.

They do not redefine what the credential means.

In both cases, the same deeper questions remain. What credential type is being issued? Which claims does it contain? Which validity rules apply? Which trust assumptions govern the issuer? Which compliance expectations shape the output? Which format can the wallet accept? OID4VCI helps the issuer and wallet exchange the result. It does not replace the template, the flow, or the trust model underneath.

That is also why format negotiation should be understood in the right layer. A wallet may prefer `SD_JWT_VC`, `MDOC`, or another supported format. The transport can carry that preference. But the transport still is not the place where the credential becomes a governed artifact. It is the place where an already-governed artifact is delivered in a compatible form.

The practical implementation lesson is simple: do not let OAuth shape language absorb the issuance architecture. The transport is important, but it should stay subordinate to the object model that explains what is actually happening.

## Issuance becomes durable operational evidence

The last correction is the one most teams discover only after the happy-path demo works.

Issuance is not finished when the holder receives the credential.

If the system wants to support revocation, renewal, support investigations, audit, replay defense, or lifecycle reporting, it needs more than a one-time transport transcript. It needs durable issuance evidence.

That means the system should be able to answer questions like these after the exchange is over:

- Which flow produced this credential?
- Which template defined it?
- Which holder claimed it?
- Which offer was redeemed, and when did it expire?
- Which format was delivered?
- What status or revocation handle was attached to the issued artifact?
- Is the credential still active, reissued, suspended, or revoked?

Those questions matter because issuance creates an operational object, not just a response body. The signed credential may be what the holder carries, but the issuer still needs lifecycle memory around it. Otherwise every later task becomes harder. Revocation turns into guesswork. Renewal becomes a new issuance with no lineage. Support teams have to inspect raw payloads instead of looking at governed records. Auditors see transport traces instead of business-state evidence.

This is the deeper reason issuance belongs in the lifecycle model rather than in the transport layer. A credential is not only delivered. It is tracked, governed, and acted on over time.

That is also where the handoff to presentation becomes clearer. Issuance answers how the credential comes into existence under trust and approval. Presentation answers how the holder later proves something with it under disclosure and verifier policy. The two moments are connected, but they are not the same job. Confusing them is one of the fastest ways to make identity architecture harder than it needs to be.

So if you want the shortest reliable summary, keep this one: issuance starts with a governed template and flow, OID4VCI carries the delivery, and durable issuance records are what make the result operationally serious after the transport step is over.

If you want the next layer down, continue to `presentation-protocols` to see how the verifier asks for proof after issuance is complete. If you want the transport-specific implementation angle, continue to `impl-oid4vci`.

## Related reading

- `credential-lifecycle` — the broader lifecycle context that starts before issuance and continues long after delivery
- `credential-templates-designing-what-gets-issued` — where the credential’s meaning, claims, and validity rules are defined
- `impl-oid4vci` — the bounded implementation note showing where OID4VCI stops and Marty objects begin
- `presentation-protocols` — how the holder later uses the issued credential in verifier-facing exchanges

## Draft metadata

- **Slug:** `how-credential-issuance-works`
- **Date:** `2025-11-03`
- **Updated date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Credential Issuance`
- **Topic cluster:** `Credential Issuance`
- **Layer:** `Issue`
- **Difficulty:** `Intermediate`
- **Section:** `implementation`
- **Related:** `credential-lifecycle`, `impl-oid4vci`, `credential-templates-designing-what-gets-issued`
- **Concept tags:** `credential-issuance`, `implementation`, `flow`
- **Standards tags:** `OID4VCI`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** architect, implementer, product owner
- **Likely CTA:** `presentation-protocols`
- **Status:** `live`
- **Batch:** `batch-12`

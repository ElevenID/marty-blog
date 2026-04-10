# Interoperability Between Credential Formats

*VC-JWT, SD-JWT, mDoc, JSON-LD — these formats do not magically collapse into one universal credential. This post explains where interoperability is real, where it is bundle-based, and how Marty keeps one model across many format families.*

Credential-format discussions have a talent for becoming either tribal or fatalistic.

One camp argues that one format will win and everything else is temporary confusion. The other camp treats format diversity as proof that the market is permanently fragmented and that every ecosystem must become its own architecture forever.

Both instincts miss the more useful question.

The real interoperability problem is not “which acronym survives?” It is “how do trust, issuance, disclosure, and runtime stay coherent when the edge format changes?”

That is why the best way to understand credential-format interoperability is this: the major formats still perform the same job, compatibility depends on explicit bundles rather than magic conversion, and Marty’s object model keeps the deeper architecture stable while those envelopes vary.

## Different formats, same core job

The first thing to keep steady is the job the credential is trying to do.

A verifiable credential, however it is packaged, exists to carry claims, preserve issuer proof, and let a verifier make a decision. That job does not disappear when the encoding changes.

W3C-style verifiable credentials, including VC-JWT and related web-friendly shapes, fit naturally into JSON-heavy application environments. They make sense in systems that already think in APIs, tokens, and structured web payloads.

SD-JWT keeps much of that familiar JSON and JWT ergonomics while adding a more practical selective-disclosure model. Instead of forcing a verifier to see the whole claim set every time, the holder can reveal only the claims that matter for the decision. That makes SD-JWT attractive for systems that want privacy improvement without leaving ordinary web tooling behind.

mDoc is different again. It is CBOR-based, device-oriented, and designed for scenarios such as mobile driving licences and proximity presentation. It carries different assumptions about device binding, transport, and runtime behavior.

Those differences matter.

But they do not mean the underlying purpose of the credential has changed. In each case, the system still needs trusted issuer evidence, claim structure, holder control, and verifier judgment. If readers lose sight of that continuity, every new format starts pretending to be a whole new worldview.

That is the first defense against interoperability confusion: do not mistake different envelopes for different missions.

## Compatibility is bundle-based, not magical

The harder part comes next.

Even though different formats perform the same job, they do not automatically interoperate just because a verifier can recognize their names.

Real interoperability depends on a bundle.

Format is one part of the bundle. But so are the issuance protocol, the presentation protocol, the compliance or ecosystem rules, wallet behavior, and the trust model surrounding the credential. A verifier or wallet that handles one combination cleanly may not handle another. That is not a failure of standards. It is the practical truth that ecosystems carry assumptions in layers, not in one field label.

This is why a compatibility rule is more honest than a marketing claim.

A wallet that can receive `SD_JWT_VC` under one OID4VCI profile is not automatically a wallet that can ingest every mDoc-based government credential. A verifier that can parse a VC-JWT in a browser login is not automatically ready for device-bound proximity presentation in a regulated mobile-document environment. A system that says “we support mDoc” may still fail in a specific ecosystem if the required protocol or compliance bundle does not line up.

The Marty materials make that explicit through compatibility logic rather than through slogan language. Format, issuance protocol, and compliance profile are treated as a bundle. A concrete example helps: `SD_JWT_VC` plus `OID4VCI_PRE_AUTH` plus `EUDI_PID` describes one wallet-compatibility class. `MDOC` plus `OID4VCI_PRE_AUTH` plus `EUDI_MDL` describes another. Both may live inside the same broader EUDI wallet ecosystem, but they are not interchangeable just because they belong to one public narrative about “the wallet.”

That is the correction implementers need. Interoperability is real, but it is not magic transcoding.

A system still has to respect which bundle it is actually operating inside.

## One model can survive multiple format families

The encouraging part is that format diversity does not have to force a different architecture for every ecosystem.

This is where Marty’s object model earns its keep.

A `Trust Profile` can still express who is trusted and how verification should happen even if one ecosystem uses web-style credentials and another uses mDoc trust material. A `Credential Template` can still define what is being issued even if one output is `SD_JWT_VC` and another is `MDOC`. A `Presentation Policy` can still define what the verifier needs to learn even if the holder satisfies that request through different proof mechanics. A `Deployment Profile` can still describe runtime expectations whether the verifier is a browser flow, a mobile app, or a proximity device. A `Flow` can still orchestrate the lifecycle across those variations.

That is the architectural advantage.

The format can vary at the edge without forcing trust, disclosure, and deployment decisions to leak back into custom application code every time a new ecosystem arrives. Instead of rebuilding the system around each acronym, the system preserves a stable set of named decisions and lets formats attach where they belong.

This does not eliminate all interoperability work. Teams still need to know which format bundles they accept, which wallets they target, which standards ecosystem they are entering, and where specific protocol or compliance rules differ. But it turns the work into explicit configuration and explicit compatibility reasoning rather than into architecture panic.

That is a healthier outcome than either of the extremes readers usually hear. Format diversity is not proof that identity is hopelessly fragmented. It is also not a reason to promise universal interchangeability where real ecosystem differences still matter. The better answer is more disciplined: one model, many format families, explicit bundle compatibility.

If you want the standards-specific next layer, continue to `impl-mdoc` to see how the mDoc model works in detail. If you want to stay at the ecosystem level, `mobile-wallet-architectures` and `one-protocol-many-ecosystems` show how these bundle differences still fit inside one broader identity architecture.

## Related reading

- `verifiable-credentials-explained` — the clean conceptual starting point for why formats differ without changing the basic credential idea
- `presentation-protocols` — how these different credential families get requested and presented in verifier-facing exchanges
- `impl-mdoc` — the standards-specific walkthrough for mDoc and ISO 18013-5 style credentials
- `mobile-wallet-architectures` — where format diversity meets the wallet-compatibility surface in the real world

## Draft metadata

- **Slug:** `interoperability-between-credential-formats`
- **Date:** `2025-11-21`
- **Updated date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Interoperability`
- **Topic cluster:** `Interoperability`
- **Layer:** `Present`
- **Difficulty:** `Advanced`
- **Section:** `implementation`
- **Related:** `verifiable-credentials-explained`, `presentation-protocols`, `mobile-driving-licenses-iso-18013-5`
- **Concept tags:** `interoperability`, `credential-format`, `implementation`
- **Standards tags:** `W3C VC`, `SD-JWT`, `ISO 18013-5`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** architect, implementer, standards-minded evaluator
- **Likely CTA:** `impl-mdoc`
- **Status:** `live`
- **Batch:** `batch-12`

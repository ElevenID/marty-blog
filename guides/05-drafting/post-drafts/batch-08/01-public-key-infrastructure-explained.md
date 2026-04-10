# Public Key Infrastructure Explained

*PKI is the backbone of digital trust. This post demystifies certificate authorities, key pairs, and the trust hierarchies that secure credentials.*

PKI gets invoked so often in identity conversations that it can start sounding like a background spell. Teams say they need PKI, support PKI, or trust PKI without pausing to explain what job it is actually doing.

The cleanest answer is this: PKI turns raw signing keys into governed trust. It gives a verifier a structured way to decide whether the key that signed a credential should count as authoritative.

That distinction matters because identity systems do not merely need signatures. They need signatures that can be tied back to issuers, accepted under clear rules, and reused across organizations that were never in the same room when the credential was issued.

## A key pair is not a trust framework

At the bottom of PKI is a simple cryptographic fact. A private key can sign data. The corresponding public key can verify that signature. That proves two useful things: someone held the right private key, and the signed payload was not altered afterward.

What it does not prove is who that someone was or why another organization should trust them.

Imagine an unknown service signs a JSON credential claiming it came from a state motor vehicle agency. If the signature verifies against the public key bundled with the payload, the verifier has learned only that the signer controlled that key. It has not yet learned whether the key belongs to the DMV, whether the DMV was authorized to issue that credential type, or whether the key was supposed to be accepted in this ecosystem at all.

That is the first mental reset PKI requires. Public-key cryptography proves key control. PKI adds the institutional wrapper that makes key control useful across organizational boundaries.

Identity systems need that wrapper constantly. A verifier is rarely asking “was this signed by some key?” It is asking “was this signed by a key that traces back to an issuer or authority I am supposed to trust?”

## Certificates create verifiable issuer authority

PKI answers that question by introducing certificates and certificate hierarchies.

A certificate binds a public key to an identity under a signing authority. In the X.509 model, a certificate says, in effect, “this key belongs to this issuer, and this higher authority is willing to sign that statement.” If the verifier already trusts that higher authority, it now has a path for trusting the issuer key too.

That is where certificate chains come from. A verifier may receive an issuer certificate that was signed by an intermediate or document signer certificate, which in turn chains up to a root certificate or other accepted trust anchor. The chain is the proof that the signer key is not an isolated fact. It sits inside a governed hierarchy.

This is why PKI shows up so naturally in identity. A passport chip can be signed by a document signer whose certificate chains back to a country root. A mobile document issuer can present a certificate chain that leads to a trusted authority. An enterprise credential program can accept only issuers whose signing chains trace back to the organization’s approved roots or trust lists.

Marty’s protocol model keeps this explicit. The Trust Profile is where an implementation declares who is trusted, which trust sources are acceptable, which algorithms are allowed, and which credential formats can be validated under that trust model. Instead of baking roots and one-off certificate assumptions into application code, Marty treats them as governed configuration.

That is the difference between “we use PKI somewhere under the hood” and “our trust model is inspectable.”

## Identity PKI is about distribution and governance as much as cryptography

Once readers understand keys and certificates, the next trap is to imagine the job is finished. It is not.

Real identity PKI depends on how trust material is distributed and maintained. A root certificate that never reaches the verifier is useless. A trust list that is not refreshed becomes stale. A verifier that quietly falls back to implicit trust during an outage has stopped being a serious verifier no matter how strong its signature code looks.

That is why identity PKI lives in distribution channels such as signed trust lists, national or ecosystem registries, pinned roots, and domain-specific directories like the ICAO Public Key Directory. The trusted root is only the starting point. The operational discipline around that root is what keeps the trust framework alive.

Marty’s TrustSource model makes those distinctions explicit. A trust source can be a `ROOT_CA`, a `TRUST_LIST`, a `PINNED_ISSUER`, or a `PKD_URL`. That matters editorially because it lets the reader see that “PKI” is not one undifferentiated thing. Some ecosystems distribute roots directly. Some rely on signed lists. Some blend PKI with DID or other identifier systems. What matters is that the verifier’s trust starting point is declared rather than implied.

This is also why PKI should never be taught only as a browser-TLS story. In identity, the interesting question is not merely whether an encrypted channel exists. The interesting question is whether a credential, a document, or a presentation can be traced back to an accepted issuer under the right governance and freshness rules.

That is the shift from generic PKI to identity PKI.

## Why PKI still matters in a multi-model identity world

Some readers assume PKI is old, centralized, or destined to be replaced by newer trust models. Marty takes a more practical view.

Government identity systems, passports, and mDL ecosystems will depend on PKI for a long time. Enterprise environments still rely heavily on certificate-based trust. At the same time, some ecosystems want DID-based or hybrid trust models. The serious architectural move is not to pretend one model has already won. It is to make the trust model explicit enough that multiple approaches can be expressed honestly.

That is why Marty’s trust layer matters. It does not force readers to choose between certificate hierarchies and every other trust pattern before they even understand the problem. It gives them a structured place to say which roots, lists, issuers, algorithms, and formats count for a given ecosystem.

PKI, then, is best understood as the reusable trust grammar that lets identity systems scale beyond bilateral integrations. It turns “this key signed that payload” into “this issuer can be trusted to make this claim in this ecosystem.”

If that broader trust grammar is clear, the next question is where that grammar begins for a verifier in practice. Read `understanding-trust-anchors` next, then continue to `certificate-chains-and-validation` to see how the verifier turns trust roots into actual acceptance decisions.

## Related reading

- `understanding-trust-anchors` — where verifier trust begins in practice
- `cryptographic-trust-anchors-primer` — the sharper trust-anchor and DID contrast
- `certificate-chains-and-validation` — how a verifier actually evaluates a chain
- `trust-profiles-explained` — where Marty makes trust explicit and governable

## Draft metadata

- **Slug:** `public-key-infrastructure-explained`
- **Date:** `2025-09-18`
- **Updated date:** `2026-04-09`
- **Category:** `Cryptography`
- **Topic:** `Cryptographic Foundations`
- **Topic cluster:** `PKI for Identity`
- **Layer:** `Trust`
- **Difficulty:** `Intermediate`
- **Section:** `cryptography`
- **Related:** `understanding-trust-anchors`, `certificate-chains-and-validation`, `trust-profiles-explained`
- **Concept tags:** `cryptography`, `pki`, `trust-anchor`
- **Standards tags:** `X.509`
- **Lead narrator:** Marcus Vale
- **Primary reader:** architect, implementer
- **Likely CTA:** `understanding-trust-anchors`
- **Status:** `live`
- **Batch:** `batch-08`
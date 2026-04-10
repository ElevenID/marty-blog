# Discovering Trusted Issuers

*Before a verifier can evaluate a credential, it has to know which issuers count. This post explains how trusted-issuer discovery works across trust lists, registries, pinned roots, and DID-based ecosystems.*

Before a verifier asks whether a signature is valid, it asks a quieter question: whose signature would count here at all?

That is the issuer-discovery problem.

A credential can be perfectly well formed and correctly signed and still come from an issuer the verifier should reject. Discovery is the step that prevents cryptographic validity from being mistaken for institutional legitimacy. It is how the system learns which issuers, authorities, or roots belong inside the accepted trust boundary before live validation begins.

Victor would start one step before the crypto library. If a verifier in Munich receives a United-issued alliance credential, or an employer receives a university credential, or a relying party receives an mDL from a government program, the runtime first needs to know whether the issuer belongs in the ecosystem. Only then does signature verification become meaningful.

## Discovery happens before validation

It is tempting to think discovery and validation are the same process.

They are related. They are not identical.

Validation answers questions like: does the signature verify, is the credential still inside its validity window, does revocation state still allow acceptance, and does the policy actually accept the presented claims? Discovery answers an earlier question: which issuers should even be considered candidates for acceptance in this ecosystem?

That difference matters because a fake or out-of-scope issuer can still produce a syntactically clean credential. The verifier therefore needs a prior boundary that says which issuer families, trust anchors, or identifier namespaces belong inside the decision space.

This is why Marty's trust model begins from explicit trust sources. A `Trust Profile` can point at a trust list, a root CA, a PKD endpoint, or a pinned issuer identifier. The runtime is not expected to guess which world it is in. Discovery begins from declared source types.

Once readers see that, the workflow becomes cleaner. You do not ask the crypto layer to solve issuer legitimacy. You ask the trust layer to discover the accepted issuer set, then you ask the crypto and policy layers to evaluate the credential against that set.

## Issuers are discovered through registries, roots, and explicit identifiers

Different ecosystems discover trusted issuers in different ways, but the architectural pattern is stable.

Some ecosystems publish signed trust lists or registry entries. Some distribute root certificates and let the verifier discover acceptable issuers by chain building under those anchors. Some use pinned issuer identifiers for a deliberately narrow trust boundary. Some use DID-based or similar identifier resolution where the issuer identity itself is the primary discovery surface.

Marty's trust-profile service makes those choices concrete. A trust source must specify exactly one of `url`, `certificate_pem`, or `issuer_did`. That is a useful modeling rule because it forces the verifier to be explicit about where issuer discovery begins.

The issuer layer is structured too. `IssuerEntity` records carry issuer identifiers, organization scope, compliance status, validity windows, optional trust-anchor linkage, and revocation state. `TrustProfileIssuer` links then express whether the relationship is trusted, denied, or under review, plus any local trust-level or cascade policy. That means discovery is not a vague lookup. It is a governed process that can answer whether an issuer is active, in scope, suspended, or locally narrowed by one organization.

Examples help keep the pattern honest.

ICAO-style ecosystems discover accepted issuers through PKD-distributed roots and signer material. EUDI-style ecosystems discover accepted issuers through trusted-list infrastructure and the frameworks attached to that list. An enterprise or alliance network may discover accepted issuers through a signed registry or a narrower pinned-issuer model. DID-based ecosystems can use issuer DID resolution as the discovery surface, but the verifier still needs a rule explaining which DID authorities or registries count.

The common job is the same. Discovery turns a shared trust source into a concrete accepted issuer set.

## Good discovery is scoped, cacheable, and auditable

A serious discovery system does more than answer "yes" or "no" once.

It has to stay scoped. A verifier may trust one issuer set for one jurisdiction, one framework, or one deployment and a different set somewhere else. That is why issuer records and registry entries carry fields like country code, validity windows, compliance status, and linked trust anchors. Discovery is rarely universal. It is usually contextual.

It also has to be cacheable.

Verifiers do not want every decision to begin with a live directory call. They want synchronized issuer state, sequence-aware refresh, and bounded local copies that can survive short outages. That is especially important in offline or hybrid environments, where the accepted issuer set has to be known before the network becomes unreliable.

And it has to be auditable.

If a verifier accepts or rejects a credential because of issuer discovery, the operator should be able to explain why. Was the issuer missing from the trust list? Was the issuer suspended? Did the local organization override the broader framework? Was the trust snapshot stale? Discovery should leave a legible reason, not an intuition.

That is why issuer discovery belongs in the architecture conversation. It is not a pre-processing convenience before the real work starts. It is one of the main things that makes the later cryptographic and policy work mean anything.

The cleanest summary is this: discovering trusted issuers is the step that turns trust sources into an accepted issuer boundary. Registries, roots, pinned identifiers, and DID-based resolution are different mechanisms for the same job. Once the boundary is explicit, the verifier can evaluate the credential. Without that boundary, validation risks becoming precise math attached to the wrong institution.

If you want the broader infrastructure that publishes that trust boundary, continue to `trust-registries-explained`. If you want the runtime stack that consumes it in production, go next to `verifier-infrastructure`. If you want the root-of-trust angle underneath both, return to `understanding-trust-anchors`.

## Related reading

- `trust-registries-explained` — where ecosystem trust state is published and synchronized
- `verifier-infrastructure` — how discovery outputs feed the live verifier runtime
- `understanding-trust-anchors` — the root-material starting point for certificate-based discovery models
- `building-trust-registries-at-scale` — the deeper implementation view of issuer and registry operations

## Draft metadata

- **Slug:** `discovering-trusted-issuers`
- **Date:** `2026-02-21`
- **Updated date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Trust Discovery`
- **Topic cluster:** `Trust Infrastructure`
- **Layer:** `Trust`
- **Difficulty:** `Intermediate`
- **Section:** `business`
- **Related:** `trust-registries-explained`, `building-trust-registries-at-scale`, `understanding-trust-anchors`
- **Concept tags:** `trust-discovery`, `trust-registry`, `verification`
- **Standards tags:** `DID`, `eIDAS 2.0`
- **Lead narrator:** Victor Leclerc
- **Primary reader:** architect, implementer, verifier owner
- **Likely CTA:** `verifier-infrastructure`
- **Status:** `live`
- **Batch:** `batch-15`

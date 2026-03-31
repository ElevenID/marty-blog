# Implementing OID4VP with Marty

*OID4VP carries the presentation request and response. Marty is the part that decides what the verifier actually needs, which issuers are trusted, and how the same exchange behaves in a browser, API, or constrained deployment without turning each runtime into a different system.*

## Where trust, disclosure, and deployment attach to OID4VP

If you start an OID4VP integration at the QR code, the request URI, or the `vp_token`, you can get a demo working very quickly and still end up with the wrong architecture. OID4VP is excellent at moving a presentation request to a wallet and a presentation response back to a verifier. It is not, by itself, the place where a verifier decides what must be disclosed, which issuers count as acceptable, or how the runtime should behave when the verifier moves from a web flow to an edge device or a managed service. Marty makes those decisions explicit before the transport moves any bytes.

The cleanest way to see that boundary is the age-verification request in `Marty/config/pd/age_verification.json`. The descriptor asks for `over_18` and marks `birthdate` as optional. That is already the design decision that matters most. The verifier's business question is a threshold check, not a general identity inspection. In OID4VP terms, that request will be carried as a presentation definition inside an authorization request. In Marty terms, the narrowness of the request should come from a `Presentation Policy` that was designed to ask the minimum useful question and nothing more.

That distinction matters because OID4VP will faithfully transport whatever request you build, including a sloppy one. Marty's `Presentation Policy` schema is where an implementer makes the verifier boundary legible: `required_claims` says what must be satisfied, `accepted_credential_types` narrows the credential surface, `trust_profile_id` points to the trust context, `holder_binding` defines whether the presentation must be bound to the holder, and `freshness` defines how recent and revocation-aware the credential must be. The OID4VP `presentation_definition` is therefore the transport expression of the policy boundary. It carries the decision. It does not author it.

The companion `selective_disclosure_demo.json` shows the same design pressure in a less binary shape. A request can technically name `given_name`, `family_name`, `email`, `phone`, and address components, while marking several fields optional. That is useful for testing disclosure behavior, but it is also a warning for implementers: transport formats make it easy to ask for more than the verifier truly needs. Marty's value is not that it hides those fields. It is that it forces the verifier team to decide, in a `Presentation Policy`, which claims are required for the decision and which claims should stay outside the request entirely.

| OID4VP transport element | Marty attachment point | Operational consequence |
| --- | --- | --- |
| Authorization request URI, QR code, or redirect | `Flow` + `VerificationSession` | Opens a bounded request/response cycle with expiry, status, and audit context instead of an ad hoc callback |
| `presentation_definition` / `input_descriptors` | `Presentation Policy` | Encodes the minimum required claims or predicates before the wallet decides what to reveal |
| `nonce` | `Presentation Policy.holder_binding` + `VerificationSession.verifier_nonce` | Binds the presentation to this exchange and prevents replay |
| `vp_token` + `presentation_submission` | `Trust Profile` + `Presentation Policy` evaluation | Determines whether disclosures, issuer trust, freshness, and revocation actually satisfy the verifier |
| Same-device vs cross-device delivery; browser, API, or kiosk runtime | `Deployment Profile` | Changes network mode, cache behavior, lanes, key custody, and operator UX without redefining trust or disclosure |

The runtime scaffold around that table is equally important. In the MIP spec and schema set, OID4VP presentation is not a free-floating callback. A `Flow` with `flow_type: oid4vp_presentation` anchors the exchange as a defined verification lifecycle, and the schema ties that flow type to a fixed protocol-aligned step sequence without asking each implementation to invent its own. A `VerificationSession` then carries the live state for one exchange: which `flow_id` started it, which `presentation_policy_id` governs it, which `deployment_profile_id` it runs under, which `verifier_nonce` binds it, whether it is still pending or already verifying, and what the result was when the cycle finished. The session result fields are telling: `claims_satisfied`, `claims_missing`, `trust_validated`, and `revocation_checked`. That is Marty making the transport auditable.

Trust is where that leak becomes dangerous. When the wallet returns a `vp_token` and `presentation_submission`, OID4VP tells you how the response arrived. Marty decides whether the response counts. The `Trust Profile` schema holds `trust_sources`, `allowed_algorithms`, `supported_formats`, time policy, issuer allow or deny lists, and revocation behavior. The normative trust evaluation algorithm in `marty-protocol/SPECIFICATION.md` is explicit: identify the credential format, locate trust sources, validate issuer identity, verify the signature, check the validity period, check revocation status, evaluate the policy claims, optionally evaluate Cedar verification policies, and record an audit event. None of that judgment lives in the QR code.

The implementation evidence in `Marty/packages/marty-common/marty_backend_common/vc/sd_jwt_verifier.py` makes the same point from the code side. The verifier does not simply accept a presentation because a wallet answered. It parses the signer certificate chain from `x5c`, validates that chain, verifies the JWT signature, checks `iss` and `exp`, matches disclosed claims against the `_sd` hashes in the token, and can additionally validate wallet attestation. That is the real attachment point between OID4VP transport and verifier truth. The transport carries the `vp_token`; Marty supplies the trust and disclosure discipline that decides whether the token is usable.

Deployment is the third attachment point, and it is the one teams most often bury in environment-specific code. The `Deployment Profile` schema packages `trust_profile_id`, `presentation_policy_ids`, `enabled_flow_ids`, `network_mode`, lane information, and offline cache settings for the environment where verification actually runs. The product-catalog material for the verification API makes the operational split concrete: the same verifier surface can be offered as Self-Hosted or Hosted, and the capability set still includes OIDC4VP, SD-JWT, and QR/NFC presentation. A browser-facing verifier, a managed verification API, and a hybrid kiosk do not need different presentation logic; they need different `Deployment Profile` choices for caching, key access, observability, and operator behavior. Even the roadmap work — OCSP and CRL cache hardening, automated key rollover, HSM integration — is deployment hardening around the same verification act, not evidence that OID4VP itself is the architecture.

The bounded walkthrough, then, is simple on purpose. Use OID4VP to carry the age-verification request and the holder's response. Let `Presentation Policy` decide whether the verifier needs only the threshold claim or something broader. Let `Trust Profile` decide which issuers, algorithms, and revocation expectations make the response acceptable. Let `Deployment Profile` decide whether this check runs online, offline, hosted, self-hosted, or on a lane device. Let `Flow` and `VerificationSession` hold the live exchange together so it can be audited, retried, expired, or evaluated consistently. OID4VP carries the bytes. Marty tells you what the bytes are allowed to mean.

If you want the next implementation step, continue to `mip-json-schemas-walkthrough`. That is the clean handoff after this note because the objects doing the real work here — `Presentation Policy`, `Trust Profile`, `Deployment Profile`, `Flow`, and `VerificationSession` — already exist as JSON Schemas you can validate, generate types from, and wire into a verifier without treating the transport as the whole design.

## Related reading

- `presentation-flows`
- `presentation-policies-minimum-disclosure`
- `deployment-profiles-in-practice`
- `mip-json-schemas-walkthrough`

## Draft metadata

- **Slug:** `impl-oid4vp`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** implementer
- **Reader shift:** `evaluative -> design_ready`
- **Gravity well:** Artifact and Adoption Proof
- **Likely CTA:** `mip-json-schemas-walkthrough`
- **Batch:** `batch-06`

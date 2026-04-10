# Implementing OID4VCI with Marty

*OID4VCI is the transport that gets a credential offer, token exchange, and credential response across the wire. Marty is the object model that decides what is being issued, how that issuance is orchestrated, and which evidence remains once the transport step is over.*

## Where transport ends and Marty objects begin

The easiest implementation mistake is to let the transport decide the architecture.

OID4VCI is important because it gives issuers and wallets a standards-based way to exchange credential offers, authorization state, tokens, and credential responses. Marty uses it for exactly that reason. But the Marty architecture does not begin at the `/credential` endpoint, and it does not become intelligible if you start from OAuth alone. The protocol README puts the point plainly: the center of the model is **Trust Profiles, Credential Templates, Presentation Policies, Deployment Profiles, orchestrated by Flows**. OID4VCI fits into that picture as an issuance binding, not as the picture itself.

A bounded walkthrough makes the boundary easier to see. Start with the transport surface. In `Marty/packages/marty-common/marty_backend_common/vc/oidc4vci.py`, the Python models are deliberately narrow: `CredentialOffer`, `CredentialOfferGrantPreAuthorizedCode`, and `Oidc4VciSession` describe the offer payload, the pre-authorized grant, and the session bookkeeping around `offer_id`, `pre_authorized_code`, `access_token`, `nonce`, and expiry. That is exactly what a transport layer should do. It serializes an offer, tracks a short-lived exchange, and helps a wallet claim a credential. Useful, necessary, and still not the architecture.

The architecture becomes visible one layer underneath. In `marty-protocol/SPECIFICATION.md`, the issuance overview says the order is: define the `Credential Template`, optionally define the application workflow, create a `Flow` that links trust, template, and deployment, then trigger issuance and deliver the credential via OID4VCI or another channel. The `Flow` schema in `marty-protocol/schemas/flow.json` makes that concrete. Its `flow_type` can be `oid4vci_pre_authorized` or `oid4vci_authorization_code`; its standard step sequence is fixed by that choice; and it carries the references that matter to the rest of the system: `trust_profile_id`, `credential_template_id`, `deployment_profile_ids`, approval strategy, trigger, and lifecycle status. That is the first Marty boundary worth preserving. OID4VCI decides how the wallet and issuer talk. `Flow` decides what operation is actually happening.

`CredentialTemplate` is the second boundary. The spec calls it the **master issuance configuration**, and the schema in `marty-protocol/schemas/credential-template.json` shows why. A template carries the `credential_type`, `compliance_profile_id`, claim definitions, validity rules, issuer material, payload format, and privacy posture. The guide content makes the same point: this is the blueprint for what gets issued. OID4VCI can negotiate format, and the guide material is right to mention both authorization-code and pre-authorized-code grant types, but neither grant type tells you what the credential means, which claims are required, how long it lives, whether it is renewable, or whether it is delivered as `SD_JWT_VC`, `MDOC`, `VC_JWT`, or `JSON_LD`. That is template work.

| OID4VCI transport step | Marty object or artifact that owns the meaning | Why that object still matters |
| --- | --- | --- |
| Credential offer is created and delivered to the wallet | `Flow` in `schemas/flow.json` | It determines whether the run is `oid4vci_pre_authorized` or `oid4vci_authorization_code`, fixes the step sequence, and links the offer to the surrounding trust and deployment context |
| Wallet authenticates or redeems a pre-authorized code | `Flow` plus approval/application configuration | The grant changes how access is obtained, not what the issuance means; the orchestration remains a governed Marty lifecycle |
| Wallet requests a credential configuration | `CredentialTemplate` in `schemas/credential-template.json` | It defines the credential type, claims, validity, issuer keys, payload format, and compliance mapping that the transport is carrying |
| Offer is claimed and the issuer records progress | `IssuanceRecord` in `schemas/issuance.json` | It preserves lifecycle evidence such as `flow_id`, `credential_template_id`, `holder_id`, `offer_uri`, expiry, and issuance status instead of leaving the event trapped in OAuth traces |
| Credential is issued and stored or tracked | `IssuedCredential` in `schemas/issued-credential.json` | It keeps durable post-issuance metadata such as status, status-list entries, hashes, subject linkage, and revocation history without treating the transport response as the long-term system of record |
| Wallet compatibility is resolved for delivery | `WalletProfile` in `schemas/wallet-profile.json` | It describes the narrower compatibility surface—format × issuance protocol × compliance combination, wallet apps, and deep links—without redefining the issuance model |

The distinction becomes even sharper if you compare the two OID4VCI grant paths. The guide material for `issuance-flows` and `impl-oid4vci` says the authorization-code flow is appropriate when the user authenticates with the issuer during the exchange, while the pre-authorized-code flow is appropriate when authentication already happened out of band. The `Flow` schema carries that distinction more structurally through `flow_type`, which can be `oid4vci_authorization_code` or `oid4vci_pre_authorized`, and by treating the fixed protocol step sequence as a property of that flow type rather than a custom application invention. That difference matters for integration design, but it does not change the Marty objects underneath. In both cases you still need the same `CredentialTemplate`, the same trust assumptions, the same deployment context, and the same evidence surfaces after issuance completes.

That evidence layer is where many implementations quietly recover their architectural discipline. The valid conformance fixture at `marty-protocol/conformance/valid/issuance.json` is not a transport transcript. It is an `IssuanceRecord` with a `flow_id`, `flow_execution_id`, `credential_template_id`, `holder_id`, `credential_format`, `offer_uri`, `offer_expires_at`, `status`, and `claimed_at`. In other words, once the wallet has claimed the offer, Marty wants a protocol record that explains what happened in lifecycle terms. The companion fixture at `marty-protocol/conformance/valid/issued-credential.json` goes further. `IssuedCredential` records `credential_type`, `credential_format`, `flow_execution_id`, `credential_template_id`, `subject_id`, `subject_claims_hash`, `status_list_entries`, `credential_hash`, `status`, and validity timestamps. That is the adoption-proof layer. It is what lets issuance become auditable, revocable, renewable, and supportable without storing the raw credential as the architecture’s only memory.

`WalletProfile` and compliance metadata matter too, but as supporting structure rather than the center of gravity. The schema for `marty-protocol/schemas/wallet-profile.json` defines wallet compatibility as a derived combination of `credential_format`, `issuance_protocol`, and `compliance_profile_code`, plus compatible wallet apps, specifications, supported platforms, and deep-link behavior. That is useful implementer information because real issuance succeeds or fails at the wallet edge. But it is downstream of the main Marty decisions. First decide what you issue and how it is orchestrated. Then decide which wallet ecosystems can receive it cleanly.

The product catalog materials reinforce the same boundary from the commercial side. The issuance API overview describes standards-compliant credential issuance infrastructure with OpenID4VCI, credential offers, pre-auth codes, document signing, policy, revocation, audit trails, and wallet demo flows. The roadmap then separates OID4VCI offer flows, revocation and status work, and wallet interoperability into different milestones. It means the transport, the lifecycle evidence, and the delivery surface are being treated as related layers of an issuance system rather than collapsed into one protocol acronym.

So the practical implementation rule is simple. Use OID4VCI to move the issuance across the wire, but do not let it absorb the Marty model. Define the `CredentialTemplate` first, because that is where the credential becomes a governed artifact instead of a payload. Bind it into a `Flow`, because that is where the issuance becomes an auditable lifecycle instead of a series of endpoint calls. Persist the resulting `IssuanceRecord` and `IssuedCredential`, because that is where transport turns into operational evidence. Then use `WalletProfile` and compliance metadata to finish the wallet-facing edge. If you want the cleanest schema-level handoff from here, go straight to `mip-json-schemas-walkthrough`.

## Related reading

- `issuance-flows` — the guide-level map of issuance states and where OID4VCI fits in the broader lifecycle
- `flows-orchestrating-identity-lifecycle` — why `Flow` is the motion layer that keeps the rest of the model coherent
- `mip-json-schemas-walkthrough` — the fastest next step if you want to inspect the object contracts directly
- `conformance-testing-for-implementers` — how valid and invalid fixtures prove your implementation respects the model
- `marty-protocol/README.md` — the canonical five-primitives architecture summary in repository form

## Draft metadata

- **Slug:** `impl-oid4vci`
- **Date:** `2025-08-08`
- **Updated date:** `2026-11-05`
- **Category:** `Technical`
- **Topic:** `OID4VCI`
- **Topic cluster:** `Implementation`
- **Primitive:** `Credential Templates`
- **Layer:** `Issue`
- **Difficulty:** `Advanced`
- **Section:** `implementation`
- **Related:** `impl-oid4vp`, `credential-templates-designing-what-gets-issued`, `mip-json-schemas-walkthrough`
- **Concept tags:** `implementation`, `credential-issuance`, `transport`
- **Standards tags:** `OID4VCI`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** implementer
- **Likely CTA:** `mip-json-schemas-walkthrough`
- **Status:** `live`
- **Batch:** `batch-06`

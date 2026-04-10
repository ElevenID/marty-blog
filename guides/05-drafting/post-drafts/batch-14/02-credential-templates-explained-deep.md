# Credential Templates Explained

*Credential Templates define what gets issued. This post provides a complete technical walkthrough of how schema, compliance, cryptographic artifacts, validity, privacy posture, and lifecycle state combine into one reusable issuance contract.*

Most teams say “template” when they really mean “schema.”

That is an understandable shortcut, and it is not enough.

A schema tells you what fields a credential might contain. A Credential Template tells you what kind of credential is allowed to exist, under which compliance rules, with which signing materials, for how long, and with what disclosure posture before a wallet ever sees it. That is a much more consequential object.

This is why the template primitive matters so much in Marty. Without it, issuance collapses back into controller code, ad hoc payload generation, and operational guesswork. One endpoint signs one thing one way. Another endpoint signs something slightly different. Privacy assumptions drift. Renewal behavior changes by environment. Wallet compatibility becomes a debugging exercise instead of a design decision.

A Credential Template prevents that sprawl by acting as the master issuance contract.

If the short explainer introduced the idea, this is the deeper layer. A real template is where schema, compliance, crypto, validity, privacy, and workflow references are forced into one explicit object. Once that contract is stable, transport standards can deliver the result cleanly. Before that, transport is just moving an undefined payload faster.

## A template is the master issuance contract

The fastest way to under-design issuance is to start with claim names.

Claim names matter, but they do not yet tell you what is being issued.

A Credential Template begins higher up the stack. It declares a `credential_type`, points at a `compliance_profile_id`, may reference an `application_template_id`, can link a `trust_profile_id` and `revocation_profile_id`, and defines the claim set plus validity rules for the credential. That is already enough to see the real job of the primitive. It is not only describing data structure. It is deciding how issuance fits inside a governed system.

Take the compliance reference first.

A credential is not only a set of claims. It also belongs to a format and standards environment. The compliance profile is where the template learns whether it is producing something aligned with an mDoc ecosystem, an SD-JWT-VC ecosystem, or another governed format family. That matters because the credential’s meaning is not complete until the format and standards surface are known.

The optional workflow reference matters for the same reason.

Some credentials are issued directly, through a tightly bounded API or operational step. Others should only exist after an application form, collected evidence, and an approval path. Linking an `application_template_id` does not make the Credential Template user-facing. It makes the template honest about the process that must happen before issuance is legitimate.

The short way to say this is that a Credential Template does not merely define a credential shape. It defines an issuance contract.

Once readers see that, several later decisions stop looking like implementation trivia. Validity rules are not just timestamps. Trust references are not optional decorations. Workflow linkage is not an afterthought. They are all part of the answer to one architectural question: what exactly is this system allowed to issue?

## Claims, privacy posture, and issuer artifacts govern issuance before transport

Once the contract is clear, the next layer is the anatomy inside it.

The `claims` array is the most obvious part, but even here the template is doing more than many systems admit.

Each claim has a name, type, required flag, optional namespace, optional display hints, and optional `derived_from` linkage. Those details matter because they stop the credential from becoming a bag of undocumented attributes. Claim names must be unique within the template. Derived claims must point back to other claims in the same object. That means the template can say, explicitly, that a claim like `age_over_21` is derived from `birth_date` rather than being a mysteriously duplicated field invented downstream.

That is already better than a lot of issuance systems.

But the deeper value shows up when claim structure meets privacy posture.

A Credential Template is also where disclosure intent is declared before issuance ever happens. Some claims may be selectively disclosable. Some may be always disclosed. Some may be set up for predicate-friendly use later. The template is making a design-time decision about privacy instead of leaving disclosure to verifier whim after the credential is already in circulation.

That is why the primitive belongs so naturally beside the privacy story. Privacy in Marty does not begin at presentation alone. It also begins when the issuer decides what kind of reusable object it is creating.

Validity rules reinforce the same point.

A credential is not finished when the claims exist. It also needs `ttl_seconds`, optional renewability, optional reissue windows, and any delay before the credential becomes valid. Those settings are not just housekeeping. They decide whether the credential is long-lived infrastructure, short-lived operational evidence, or something in between.

Then there are the issuer artifacts.

The entity specification is explicit that an active template needs exactly one active path to issuer signing material unless the system is generating artifacts automatically for development. That means an `issuer_key_id`, or an `issuer_certificate_chain_pem`, or an `issuer_did`. Not all three at once in production, and not none of them either. This rule is one of the clearest examples of why the primitive is more than a schema. The template is carrying the information that allows the issuer to sign the credential as an institution, not merely serialize it as data.

This is also where implementation discipline matters. The `auto_generate_artifacts` option is helpful in development, but it is not supposed to become an excuse for vague production signing assumptions. The whole point of the primitive is to keep issuance explicit enough that an operator, auditor, or security reviewer can see what is being issued and under which signing authority.

So the deeper template lesson is simple: claims, privacy posture, validity, and issuer artifacts all meet here before any OID4VCI delivery flow ever begins.

## Lifecycle and derivation keep templates reusable

The final layer is what keeps the primitive from degenerating over time.

A strong template is not just well defined once. It also has to remain governable as systems evolve.

That is where lifecycle state matters. A template can be `DRAFT`, `ACTIVE`, or `DEPRECATED`. Those labels are not content-management niceties. They are enforcement boundaries. A draft template must not be used in an active issuance flow. A deprecated template must not silently keep issuing new credentials just because the endpoint still knows its ID. The object is versioned and stateful because issuance systems need controlled change, not endless mutation under one name.

This matters especially when compliance, policy, or wallet expectations move.

A new credential version may need stronger disclosure defaults, a different issuer algorithm, a revised claim map, or a different compliance profile. If the template is a real primitive, that evolution becomes explicit. If the template is only a payload recipe hidden inside code, the same evolution turns into a deployment risk.

The derivation story shows the same discipline from another angle.

The template is a primary input into wallet compatibility. Marty derives wallet compatibility from the compliance profile’s credential format, issuance protocol, and compliance code rather than expecting authors to maintain a second manual “supported wallets” flag by hand. That is an important design choice. It means wallet behavior is not guessed after the template exists. It is derived from the real issuance contract the template already declared.

This is the broader reason templates are reusable.

They separate stable issuance meaning from one-off transport logic. They let teams change templates by creating new governed versions instead of mutating production payloads in place. They make privacy, lifecycle, and wallet consequences visible early. And they let flows, issuers, and operators all reference the same contract instead of rediscovering it one endpoint at a time.

That is the right place to land the primitive. A Credential Template is the master issuance object because it decides what the credential is, what standards environment it belongs to, how it is signed, how long it remains valid, how it should disclose information later, and whether the system should still be allowed to issue it at all.

Once that is explicit, OID4VCI can carry delivery cleanly. Without it, the transport is only moving ambiguity faster.

If you want the next layer in motion, continue to `how-credential-issuance-works`. If you want the schema-facing implementation angle, go next to `mip-json-schemas-walkthrough`. If you want the broader live synthesis that reconnects this primitive to the rest of the model, return to `the-marty-identity-model`.

## Related reading

- `credential-templates-designing-what-gets-issued` — the shorter conceptual explainer for the same primitive
- `how-credential-issuance-works` — where the template becomes part of a governed issuance flow
- `mip-json-schemas-walkthrough` — the schema-facing implementation path for Marty entities
- `the-marty-identity-model` — the current live synthesis that reconnects this primitive to the rest of the protocol model

## Draft metadata

- **Slug:** `credential-templates-explained-deep`
- **Date:** `2026-03-17`
- **Updated date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Credential Templates`
- **Topic cluster:** `Core Protocol`
- **Primitive:** `Credential Templates`
- **Layer:** `Issue`
- **Difficulty:** `Advanced`
- **Section:** `core-protocol`
- **Related:** `credential-templates-designing-what-gets-issued`, `how-credential-issuance-works`, `mip-json-schemas-walkthrough`
- **Concept tags:** `credential-template`, `core-object`, `implementation`
- **Standards tags:** `W3C VC`, `Open Badges v3`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** implementer, program architect, compliance lead
- **Likely CTA:** `how-credential-issuance-works`
- **Status:** `live`
- **Batch:** `batch-14`

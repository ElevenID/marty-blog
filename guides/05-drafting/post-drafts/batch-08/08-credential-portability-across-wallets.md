# Credential Portability Across Wallets

*Can a credential issued to one wallet be moved to another? The technical and policy boundaries of credential portability.*

Credential portability is one of those phrases that sounds obviously good until you ask what, exactly, is supposed to move.

Does portability mean the same signed credential file can be imported into another wallet app? Does it mean the holder can switch wallet vendors without asking the issuer to reissue anything? Does it mean the verifier will accept the same credential across multiple wallet families? Or does it simply mean the ecosystem is designed so the holder is not trapped forever in one product surface?

Those are not the same promise.

That is why wallet portability deserves its own post. It sits right at the collision point between interoperability marketing, holder convenience, device security, and ecosystem governance.

## Portability is not one problem

The first correction is to break portability into layers.

At the semantic layer, a credential is portable if another wallet can understand what it is. At the protocol layer, a credential is portable if another wallet can receive or present it under the same protocol expectations. At the holder-binding layer, portability becomes harder: can the proof or key material that gives the credential practical control move with it, or is that binding deliberately tied to one device or one wallet runtime?

Those layers are often blurred together in product language. A team may say “our credentials are portable” when what they really mean is “another wallet could, in principle, understand the format.” That does not automatically mean the credential can be moved, re-bound, and presented elsewhere without friction.

Marty’s Wallet Profile model is useful here because it quietly resists that shortcut. Compatibility is not described as a wallet brand property. It is derived from a combination of credential format, issuance protocol, and compliance profile code. That structure tells the truth portability discussions need: interoperability depends on the bundle, not the logo.

If two wallets sit in the same compatibility class, that is a good start. It still does not resolve whether device-bound keys, local policy, or ecosystem rules permit a clean transfer.

## Security is why portability is hard

The next correction is less comfortable but more important: secure wallet design naturally pushes back on unrestricted portability.

If credentials are strongly bound to device-resident keys, hardware-backed stores, or wallet-specific proof material, then moving them wholesale into another wallet may weaken exactly the security properties the ecosystem wanted in the first place. The stronger the holder binding, the more likely the transfer process will involve re-binding, re-issuance, or some other controlled recovery step.

That is not a product failure. It is the cost of taking holder binding seriously.

The previous post on secure storage made this visible from the wallet side. A wallet that keeps encryption keys in platform-secure stores and uses local authentication to gate release is building trust around the assumption that secret material should not be freely exportable. Once that assumption is true, “export everything to another wallet” stops being a trivial feature request and becomes a governance question.

This is why portability conversations often split into three real-world models:

- **presentation portability**: the same credential can be used across many verifier surfaces, even if it never leaves the original wallet
- **ecosystem portability**: the holder can choose among multiple compliant wallets for new issuance and presentation flows because the ecosystem uses shared formats and protocols
- **state portability**: the exact credential state can be migrated between wallets without re-issuance or re-binding

Most ecosystems can plausibly deliver the first. Many can aspire to the second. The third is where security, issuer policy, and wallet architecture start negotiating in public.

## Policy decides how much portability an ecosystem really wants

Portability is also never just a technical question.

An issuer may be perfectly capable of issuing a credential in a format several wallets can understand, while still requiring that the credential be reissued when the holder changes devices. A regulated ecosystem may prefer that because it wants a fresh holder-binding ceremony. Another ecosystem may allow export of some lower-risk credentials while prohibiting export of high-value ones. A wallet vendor may support import of certain credential types but not of locally generated proof keys. All of those choices are policy choices wearing technical clothing.

This is why portability belongs next to governance and compliance, not just next to wallet UX.

The MIP compatibility matrix hints at the shape of the answer. `MDOC` under `OID4VCI_PRE_AUTH` with `ICAO_DTC` or `EUDI_MDL` describes which wallet class can receive the credential. `SD_JWT_VC` under `OID4VCI_PRE_AUTH` with `EUDI_PID` describes another compatible family. That helps implementers determine which wallets should interoperate at issuance time. But even perfect compatibility there does not automatically say whether a credential can later be exported from one wallet and imported into another while preserving the same trust posture.

In other words, compatibility is necessary for portability, but it is not sufficient.

The better buyer question is not “is this portable?” It is:

- portable at which layer?
- under which compliance or ecosystem rules?
- with or without re-binding?
- with or without re-issuance?
- and for which credential classes?

That is a much more useful conversation than the usual slideware claim that “users can always switch wallets.” Serious systems rarely mean that in the strong sense.

## The strategic goal is ecosystem portability, not reckless export

The strongest portability goal is usually not unrestricted credential export. It is freedom from ecosystem lock-in.

That means issuers should not have to target one wallet vendor forever. Holders should not be trapped in one product family when the standards bundle could support several. Verifiers should not need wallet-specific integrations to accept valid proofs. And when a holder changes devices or wallet apps, the recovery path should be governed, understandable, and proportionate to the value of the credential.

That is a healthier goal because it balances Elena’s governance instincts with Sofia’s runtime realism. It protects the holder from needless lock-in without pretending every secure credential should behave like an easily copied file.

Seen that way, credential portability becomes less about frictionless export and more about accountable mobility. The ecosystem should make it possible to change wallets, change devices, and continue participating — but it should do so in a way that preserves issuer trust, holder binding, and verifier confidence.

That is the line serious wallet architecture keeps trying to walk.

If you want to see the most visible regulated attempt at that balance, continue to `eudi-wallet-model-explained`. Europe’s wallet program is one of the clearest places where portability, compliance, and wallet interoperability are being forced into the same design conversation.

## Related reading

- `mobile-wallet-architectures` — the broader wallet stack portability has to fit within
- `secure-enclave-credential-storage` — why strong holder binding naturally constrains migration
- `business-case-for-credential-portability` — the commercial case for reducing ecosystem lock-in
- `eudi-wallet-model-explained` — a real regulated ecosystem where portability expectations are being formalized

## Draft metadata

- **Slug:** `credential-portability-across-wallets`
- **Date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Wallet Interoperability`
- **Topic cluster:** `Wallets`
- **Layer:** `Deploy`
- **Difficulty:** `Intermediate`
- **Section:** `business`
- **Related:** `mobile-wallet-architectures`, `eudi-wallet-model-explained`, `business-case-for-credential-portability`
- **Concept tags:** `wallets`, `deployment`
- **Standards tags:** `OID4VCI`, `OID4VP`
- **Lead narrator:** Elena Kovacs
- **Primary reader:** architect, product owner, regulated buyer
- **Likely CTA:** `eudi-wallet-model-explained`
- **Status:** `live`
- **Batch:** `batch-08`
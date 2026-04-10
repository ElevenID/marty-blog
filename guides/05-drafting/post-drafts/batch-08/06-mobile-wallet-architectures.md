# Mobile Wallet Architectures for Verifiable Credentials

*How mobile credential wallets work — from platform secure elements to cloud backup, and what matters for interoperability.*

When readers hear “wallet,” they often imagine the visual layer first: cards in a stack, a credential detail screen, or a consent prompt before sharing something.

That interface matters, but it is not the architecture.

A mobile identity wallet is a layered system that has to keep four jobs aligned at once. It has to protect keys. It has to store or reference credentials. It has to participate in issuance and presentation protocols. And it has to give the holder a sane way to consent to what moves across the verifier boundary.

If any one of those layers is weak, the wallet may still demo well and still fail as serious identity infrastructure.

## A wallet is more than a credential gallery

The first useful correction is to stop treating the wallet as a container for digital cards.

A real wallet is the holder-side control point in the system. It decides which credentials are available, which keys can prove possession, how issuer offers are accepted, how verifier requests are interpreted, and how much data the holder actually shares.

That means the wallet is not just storage. It is storage plus key custody plus protocol handling plus consent.

The product materials for ElevenID Authenticator make this concrete in a lightweight way. The wallet stores and presents mDoc, mDL, and verifiable credentials; supports OID4VP, QR, and NFC presentation flows; works across mobile and desktop; and is explicitly treated as a free ecosystem-adoption surface rather than as the monetized center of the business model. That commercial framing actually reinforces the architecture framing: the wallet is the holder-side capability that makes the broader trust ecosystem usable.

## Wallets are layered systems

The easiest way to understand wallet architecture is to look at the stack rather than the screen.

At the application layer, the wallet needs UI flows for credential review, consent, and presentation. At the protocol layer, it needs to understand credential offers, presentation requests, and whatever message formats the ecosystem expects. At the transport layer, it may need QR, deep linking, Bluetooth Low Energy, NFC, or web redirects. At the storage and key layer, it needs somewhere to keep credentials, metadata, and signing keys safely enough that the holder’s proof can actually be trusted.

The Marty Authenticator dependencies are useful here because they expose that layering without forcing a reader into source code. The app uses `app_links` for deep-link entry, `flutter_secure_storage` for local secure storage, `local_auth` for biometric or device-auth gates, `cbor` and JOSE-related libraries for credential parsing, `flutter_rust_bridge` for native cryptographic and protocol bindings, and `flutter_ble_peripheral` for ISO 18013-5 proximity presentation. That is the architecture story in miniature.

Even one wallet app is already a composition of platform security services, local storage, credential-format logic, and transport surfaces.

This is why “wallet architecture” should not be collapsed into one question like “does it support mDoc?” Format support matters, but it sits inside a larger system. A wallet may parse a format and still differ in key custody, deep-link behavior, cross-device flows, platform support, or holder-binding strength.

## Issuance and presentation make the wallet an endpoint

Wallets are also active participants in the exchange, not passive vaults.

On the issuance side, they need to receive credential offers and decide whether to accept them. On the presentation side, they need to interpret verifier requests and return the right credential material or proofs. That is why deep-link handling and protocol support are central to wallet architecture.

The Marty Authenticator deep-link documentation makes this especially clear. The app recognizes `openid-credential-offer://` for issuance offers, `openid4vp://` for presentation requests, and `openid-credential://` for direct credential imports. Those schemes are not decoration. They are the wallet’s entry points into the surrounding identity ecosystem.

From there, wallet architecture becomes a question of controlled movement:

- can the wallet accept a credential offer and bind it to the right holder context?
- can it surface a presentation request clearly enough that the holder knows what is being asked?
- can it authenticate the holder before release or proof generation?
- can it construct a presentation in the right format and return it through the right channel?

Those are architectural responsibilities, not just UI niceties.

## Compatibility is a matrix, not a logo wall

This is the part many wallet conversations still get wrong.

Teams often ask whether a wallet “supports” a given ecosystem as if that were a single yes-or-no badge. Marty’s Wallet Profile model gives a more honest answer. Compatibility is derived from three things together: the credential format, the issuance protocol, and the compliance profile code.

That matters because a wallet that can receive one kind of credential offer may not handle another. A wallet that can present an mDoc may not necessarily be the right receiver for a specific SD-JWT-VC issuance flow under a regulated profile. And a wallet that supports a generic protocol may still need special handling, override behavior, or ecosystem-specific configuration before it becomes a clean interoperability target.

The derived compatibility matrix in the MIP specification makes this legible. `MDOC` plus `OID4VCI_PRE_AUTH` plus `EUDI_MDL` maps to EUDI / eIDAS-compliant wallets. `SD_JWT_VC` plus `OID4VCI_PRE_AUTH` plus `EUDI_PID` maps to the same EUDI wallet family in a different credential mode. `MDOC` plus `OID4VCI_PRE_AUTH` plus `ICAO_DTC` maps to ICAO DTC-compatible wallets. The system is saying something precise: compatibility depends on the bundle, not just on the app brand.

That precision matters because it keeps interoperability honest. The right wallet question is not “which app has the nicest cards?” It is “which wallet class can safely receive, store, and present this credential type under this protocol and compliance context?”

That is why mobile wallet architecture deserves its own place in the Marty reading path. It is where holder-side control, platform reality, and standards interoperability all meet.

If you want the next layer down, continue to `secure-enclave-credential-storage` to see how key custody and local encrypted storage shape holder binding. If you want the ecosystem-level consequence, go next to `credential-portability-across-wallets`.

## Related reading

- `secure-enclave-credential-storage` — where wallet key custody and local encryption become concrete
- `credential-portability-across-wallets` — the real boundaries of wallet interoperability
- `impl-oid4vci` — how issuance transport reaches the wallet edge
- `eudi-wallet-model-explained` — the most visible regulated wallet ecosystem now arriving in Europe

## Draft metadata

- **Slug:** `mobile-wallet-architectures`
- **Date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Wallet Architecture`
- **Topic cluster:** `Wallets`
- **Layer:** `Deploy`
- **Difficulty:** `Intermediate`
- **Section:** `implementation`
- **Related:** `secure-enclave-credential-storage`, `credential-portability-across-wallets`, `eudi-wallet-model-explained`
- **Concept tags:** `wallets`, `implementation`
- **Standards tags:** `ISO 18013-5`, `OID4VP`
- **Lead narrator:** Aiko Tanaka
- **Primary reader:** architect, implementer, product owner
- **Likely CTA:** `secure-enclave-credential-storage`
- **Status:** `live`
- **Batch:** `batch-08`
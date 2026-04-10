# Secure Enclave Storage for Credentials

*Understanding how hardware-backed key storage protects credential holder binding — secure enclaves, StrongBox, and attestation.*

If a wallet credential can be copied like an ordinary file and replayed from anywhere, the wallet has a trust problem.

That is why secure credential storage is not just about encrypting a local database. The deeper issue is where the holder’s keys live and how strongly the device can prove that a presentation came from the legitimate holder context rather than from a copied artifact.

This is the architectural reason secure enclaves, platform key stores, StrongBox-style hardware modules, and device attestation keep appearing in wallet discussions. They are trying to solve the same core problem: protect the holder-side secret strongly enough that the credential remains bound to the right device or user context.

## Holder binding starts with key custody

The cleanest way to understand wallet security is to distinguish credential payloads from credential control.

A credential payload is the structured data or proof object the wallet stores. Credential control comes from the keys that let the holder prove possession, unwrap protected material, or satisfy a bound presentation flow.

If those keys are easy to export, duplicate, or recover outside the intended device context, the wallet’s holder-binding story becomes weak even if the credential format itself is strong.

That is why the strongest wallet designs try to keep critical keys in hardware-backed or platform-protected stores. On Apple devices, the conversation often becomes “Secure Enclave plus Keychain.” On Android, it often becomes “Keystore or StrongBox-backed keys.” On other platforms, the exact mechanism changes, but the architectural goal is the same: make the key harder to extract than the credential metadata that surrounds it.

Marty’s materials reflect this design pressure even when they stay implementation-facing rather than marketing-facing. The protocol specification treats holder binding as a serious part of trust evaluation. The authenticator stack depends on secure local storage and local authentication. The secure-storage crate keeps encryption keys in the platform keychain rather than next to the database they protect.

That is the pattern to hold onto: credential security begins with key custody.

## Secure storage is layered, not singular

Readers sometimes assume “secure storage” means one component. In practice, wallet protection is layered.

The Marty secure-storage crate is useful because it shows the layers directly. It generates a 256-bit database-encryption key, stores that key through the platform keychain using `keyring`, and then uses the resulting key to open a SQLCipher-backed SQLite database. In other words, the database is encrypted, but the database key is not stored next to the database. The sensitive secret lives in a stronger platform-managed store.

That is exactly the kind of separation a serious wallet wants:

- a protected key store for the secrets that should not sit in ordinary app storage
- an encrypted local database for credential payloads, metadata, and history
- local-auth or biometric gates before sensitive release or presentation actions
- protocol logic above that stack to decide what is actually being disclosed

The authenticator dependencies reinforce that story. `flutter_secure_storage` points to secure local secret handling. `local_auth` points to user-presence or biometric gates. The Rust bridge and protocol libraries handle credential and presentation logic on top of the protected local foundation.

This is why “does the app encrypt its local data?” is too small a wallet-security question. A wallet can encrypt a database and still mishandle the keys that matter most. The serious question is how the wallet separates and protects the different layers of secret material.

## Recovery and portability push back on maximum binding

The hardest wallet-security conversations begin when readers ask the question users will eventually ask anyway: what happens when the device is replaced, lost, or migrated?

This is where secure storage and portability start pulling against each other.

The stronger the binding between holder keys and one device, the harder it becomes to move that credential state cleanly to another device without re-issuance, re-binding, or some carefully designed recovery flow. That is not a design mistake. It is the natural cost of making copied credentials less useful to attackers.

This is also why wallet marketing often overpromises. It is easy to promise both maximum hardware binding and frictionless migration everywhere. Serious systems rarely get both for free.

What they do instead is choose where to place the boundary. Some credentials may be reissued during migration. Some wallets may sync less-sensitive metadata while re-establishing stronger keys locally. Some ecosystems may prefer device-bound proofs that make portability narrower on purpose. Others may tolerate weaker binding to make recovery easier.

The right lesson is not that secure enclaves or hardware-backed keys make portability impossible. It is that they make the portability question explicit. The ecosystem has to decide how much of the holder’s trust posture should move automatically and how much should be re-established deliberately.

That is why secure storage belongs in the middle of the wallet reading path. It forces the reader to stop treating wallet security, user convenience, and interoperability as if they were automatically aligned.

If you want the next question those trade-offs create, continue to `credential-portability-across-wallets`. That is where holder binding, format compatibility, and ecosystem policy finally collide.

## Related reading

- `mobile-wallet-architectures` — the broader wallet stack this post narrows into key custody
- `credential-portability-across-wallets` — where secure storage starts constraining migration and interoperability
- `holder-binding-beyond-biometrics` — the stronger holder-binding discussion beyond simple user auth
- `device-binding-and-credential-security` — the adjacent device-binding view of the same security problem

## Draft metadata

- **Slug:** `secure-enclave-credential-storage`
- **Date:** `2026-04-09`
- **Category:** `Cryptography`
- **Topic:** `Device Security`
- **Topic cluster:** `Wallets`
- **Layer:** `Deploy`
- **Difficulty:** `Advanced`
- **Section:** `implementation`
- **Related:** `mobile-wallet-architectures`, `credential-portability-across-wallets`, `eudi-wallet-model-explained`
- **Concept tags:** `wallets`, `cryptography`
- **Standards tags:** `FIDO2`, `WebAuthn`
- **Lead narrator:** Marcus Vale
- **Primary reader:** security architect, wallet implementer
- **Likely CTA:** `credential-portability-across-wallets`
- **Status:** `live`
- **Batch:** `batch-08`
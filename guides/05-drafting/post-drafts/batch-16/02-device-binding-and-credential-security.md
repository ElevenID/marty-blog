# Device Binding and Credential Security

*Device binding is the security choice that ties a credential to the holder’s device context instead of treating it like a copyable file.*

A credential can be perfectly authentic and still be used in the wrong hands.

That is the uncomfortable truth underneath many wallet-security conversations.

If a credential can be copied freely from one device to another, replayed outside its original context, or presented without any meaningful link to the holder’s device, then issuer signatures alone do not solve the holder-security problem. They prove the credential was issued legitimately. They do not automatically prove the presenter is using it from the right device context.

This is where device binding enters the picture.

Device binding is the idea that some part of the wallet’s control over a credential depends on secrets, proofs, or runtime checks that are anchored to the holder’s device rather than exported like an ordinary file. It is not the whole wallet-security story, but it is the part that stops “valid credential” from quietly turning into “easily shared credential.”

## Copied credentials are a holder-binding failure

The first thing to get clear is what problem device binding is actually solving.

It is not mainly about whether the credential payload is well formatted. It is not even mainly about whether the issuer signature verifies correctly. The real issue is whether the credential can be used outside the holder context the ecosystem intended.

That is why copied credentials are such a useful test case.

Imagine a credential that is validly issued, stored on one phone, and then copied to another device or exfiltrated into another runtime. If the second environment can present it just as easily as the first one, the system has preserved authenticity while weakening holder control. A serious wallet cannot ignore that gap.

This is also why device binding should not be confused with generic app login.

Unlocking a phone or authenticating into an app is helpful, but device binding asks a stricter question: what part of the credential’s usable trust posture depends on this device, its protected keys, and the holder’s local approval path? If the answer is “not much,” then the credential may still be too transferable for the ecosystem’s security goals.

The Marty materials keep this problem visible from several angles. The holder-binding discussion makes clear that authenticity and binding are independent properties. The wallet-security material makes clear that key custody matters. And the presentation-flow examples in the authenticator documentation show local approval before release rather than treating sharing as an invisible background event.

That combination is the right starting point.

Device binding exists because valid credentials still need holder control.

## Device binding is a stack, not a single hardware checkbox

Teams sometimes talk about device binding as if it were one feature switch.

It is more honest to think of it as a stack.

At one layer, there is protected key material. If the wallet relies on keys that are easy to export, duplicate, or back up casually, then the wallet’s holder-binding claim is weaker from the start. This is the layer most people associate with secure enclaves, platform keystores, and hardware-backed key storage.

At another layer, there is local holder approval.

A device-bound key is more meaningful if sensitive actions still require a deliberate holder step such as biometric or device-auth approval. The authenticator’s presentation example makes this explicit: after a verifier request is parsed and the holder approves the share, the app still calls a local authentication step before returning the presentation response. That pattern matters because it turns device binding into runtime behavior instead of mere storage posture.

There can also be a third layer: ecosystem-specific proof or attestation expectations.

Some environments will ask only that the credential remain controlled by a device-resident key. Others will care about stronger device trust signals, such as proof-of-possession behavior, attestation context, or device-bound presentation flows. The exact mechanics vary by ecosystem, but the design pressure is consistent: the credential should become harder to lift out of its intended device context than an ordinary file would be.

That is why “uses secure hardware” is not enough as a complete explanation.

The hardware story matters. So do the local authentication story, the presentation-time control story, and the ecosystem rule story. Device binding is the combined security property that emerges when those layers align.

## Migration and recovery expose the real trade-off

The hardest part of device binding is not describing why it helps.

It is explaining what it costs.

The stronger the link between credential control and one device context, the harder it becomes to move that credential state casually to another device. Replace the phone, lose the hardware-backed key, or migrate to a new runtime, and the system has to decide what should happen next.

Should the credential be reissued?

Should the wallet re-establish a new device-bound key and treat that as a fresh binding ceremony?

Should some data be restorable while the most sensitive control material is not?

Those are not annoying edge cases. They are the moment where the security choice becomes operational.

The authenticator roadmap hints at exactly this pressure when it calls out security hardening together with store and backup guidance. That is a product-level acknowledgement of the same architectural truth surfaced by the wallet-security materials: once you bind serious credential control to the device, recovery can no longer be treated like a generic cloud-sync convenience feature.

This is also the point where device binding has to stay distinct from the adjacent articles in the wallet path.

`secure-enclave-credential-storage` explains how protected key custody and encrypted local storage work. `holder-binding-beyond-biometrics` compares different binding models at the policy layer. This post sits between them. It explains why device binding matters as a runtime security consequence and why migration, replacement, and backup become governed decisions rather than afterthoughts.

That is the right place to land the bridge.

Device binding improves resistance to theft and credential sharing because it makes holder control depend on the device context instead of only on the credential file. But the same move raises the cost of easy migration and forces the ecosystem to think seriously about re-binding, recovery, and replacement.

If you want the storage and key-custody layer beneath that result, continue to `secure-enclave-credential-storage`. If you want the broader policy comparison for how holder binding can be enforced, go next to `holder-binding-beyond-biometrics`.

## Related reading

- `secure-enclave-credential-storage` — where protected key custody and encrypted storage become concrete
- `holder-binding-beyond-biometrics` — the broader binding-model comparison at policy level
- `what-is-a-digital-identity-wallet` — the holder-control model this security question depends on
- `selective-disclosure-in-wallets` — the next holder-facing question after device trust is established

## Draft metadata

- **Slug:** `device-binding-and-credential-security`
- **Date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Device Security`
- **Topic cluster:** `Wallets`
- **Layer:** `Deploy`
- **Difficulty:** `Advanced`
- **Section:** `implementation`
- **Related:** `what-is-a-digital-identity-wallet`, `secure-enclave-credential-storage`, `holder-binding-beyond-biometrics`
- **Concept tags:** `wallets`, `device-security`, `holder-binding`
- **Standards tags:** `FIDO2`, `WebAuthn`
- **Lead narrator:** Sofia Rahman
- **Primary reader:** security architect, product owner, wallet implementer
- **Likely CTA:** `secure-enclave-credential-storage`
- **Status:** `live`
- **Batch:** `batch-16`

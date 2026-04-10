# Batch 08 Drafts

*PKI recovery -> wallet architecture recovery -> regulated ecosystem bridge.*

## Included drafts

1. `01-public-key-infrastructure-explained.md`
   - Role: PKI series opener
   - Reader shift: `oriented -> structured`
   - CTA: `understanding-trust-anchors`
2. `02-understanding-trust-anchors.md`
   - Role: trust-anchor explainer
   - Reader shift: `structured -> serious`
   - CTA: `certificate-chains-and-validation`
3. `03-certificate-chains-and-validation.md`
   - Role: certificate-validation deep dive
   - Reader shift: `serious -> confident`
   - CTA: `how-passport-pki-works`
4. `04-how-passport-pki-works.md`
   - Role: passport PKI bridge
   - Reader shift: `structured -> confident`
   - CTA: `understanding-csca-certificates`
5. `05-understanding-csca-certificates.md`
   - Role: passport-root deep dive
   - Reader shift: `serious -> confident`
   - CTA: `how-passport-pki-works` or `what-icao-9303-specifies`
6. `06-mobile-wallet-architectures.md`
   - Role: wallet series opener
   - Reader shift: `structured -> confident`
   - CTA: `secure-enclave-credential-storage`
7. `07-secure-enclave-credential-storage.md`
   - Role: wallet security deep dive
   - Reader shift: `serious -> confident`
   - CTA: `credential-portability-across-wallets`
8. `08-credential-portability-across-wallets.md`
   - Role: wallet interoperability bridge
   - Reader shift: `confident -> evaluative`
   - CTA: `eudi-wallet-model-explained`
9. `09-eudi-wallet-model-explained.md`
   - Role: regulated wallet bridge
   - Reader shift: `structured -> serious`
   - CTA: `compliance-profiles-bridging-regulation`

## Why this batch belongs together

This batch repairs the next two depth paths after the recovered Start Here ramp.

The first half restores the PKI-for-Identity sequence so readers can move from general trust language into trust anchors, certificate chains, passport PKI, and CSCA roots without hitting placeholders.

The second half restores the wallet sequence so readers can move from the protocol and standards material into wallet architecture, secure storage, portability boundaries, and the EUDI wallet ecosystem.

Together, these drafts create a cleaner middle path between Marty’s opening model and its later implementation or evaluation material:

- first, explain PKI in identity terms instead of generic security jargon
- then show where trust starts, how certificate validation works, and how travel credentials operationalize that model
- then explain the wallet as a layered system of storage, keys, transport, and compatibility
- finally, show how portability and EUDI turn wallet architecture into a live interoperability and regulatory question

## Important sequencing note

This batch is not meant to replace the current opening spine.
It is meant to deepen two branches that the spine now feeds more cleanly.

### Best PKI branch

1. `why-identity-depends-on-cryptography`
2. `public-key-infrastructure-explained`
3. `understanding-trust-anchors`
4. `cryptographic-trust-anchors-primer`
5. `certificate-chains-and-validation`
6. `how-passport-pki-works`
7. `understanding-csca-certificates`

### Best wallet branch

1. `mobile-wallet-architectures`
2. `secure-enclave-credential-storage`
3. `credential-portability-across-wallets`
4. `eudi-wallet-model-explained`
5. `compliance-profiles-bridging-regulation`

Readers who arrive from `one-protocol-many-ecosystems` can enter the wallet branch first. Readers who arrive from `trust-profiles-explained` or `cryptographic-trust-anchors-primer` can enter the PKI branch first.

## Inputs used

These drafts were written against the aligned planning stack in:

- `../../priority-draft-briefs.md`
- `../../../06-revision/publication-scene-cards.md`
- `../../../06-revision/publication-post-packets.md`
- `../../../06-revision/publication-evidence-packets.md`
- `../../../06-revision/cap-narrative-profile.md`

They also rely on upstream source material from:

- `marty-protocol/SPECIFICATION.md`
- `marty-protocol/README.md`
- `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json`
- `marty-protocol/examples/realistic/eu-identity-wallet/trust-profile.json`
- `marty-core/marty-crypto/README.md`
- `marty-core/marty-verification/README.md`
- `marty-core/marty-secure-storage/src/*`
- `marty-authenticator/pubspec.yaml`
- `marty-authenticator/DEEP_LINKING.md`
- `product-catalog/products/authenticator/overview.md`
- `product-catalog/products/issuance-api/overview.md`
- official European Commission EUDI overview, regulation, technical-specification, and pilot pages

## Follow-on status

After these drafts are converted and merged, the main follow-on work is:

- validate that the PKI series reads as one coherent trust-depth path instead of as overlapping certificate trivia
- validate that the wallet series distinguishes architecture, secure storage, portability, and EUDI rather than repeating one wallet explainer four times
- confirm the EUDI timing language stays cautious and source-grounded across the blog and guide surfaces
- decide separately whether additional wallet posts like `what-is-a-digital-identity-wallet` or `device-binding-and-credential-security` should be rewritten, merged, or retired in a later cleanup wave
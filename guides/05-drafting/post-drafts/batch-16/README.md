# Batch 16 Drafts

*Wallet holder mental model -> device binding -> disclosure mediation -> UX trust.*

## Included drafts

1. `01-what-is-a-digital-identity-wallet.md`
   - Role: wallet conceptual opener
   - Reader shift: `oriented -> structured`
   - CTA: `mobile-wallet-architectures`
2. `02-device-binding-and-credential-security.md`
   - Role: wallet security bridge
   - Reader shift: `structured -> serious`
   - CTA: `secure-enclave-credential-storage` or `holder-binding-beyond-biometrics`
3. `03-selective-disclosure-in-wallets.md`
   - Role: wallet privacy bridge
   - Reader shift: `structured -> confident`
   - CTA: `wallet-ux-design-for-identity`
4. `04-wallet-ux-design-for-identity.md`
   - Role: wallet UX bridge
   - Reader shift: `confident -> evaluative`
   - CTA: `eudi-wallet-model-explained`

## Why this batch belongs together

Batch 08 repaired the wallet architecture path: architecture, secure storage, portability, and EUDI.

What it did not repair was the holder-facing path that explains what a wallet is, why device binding changes the threat model, how selective disclosure becomes a real holder decision, and why wallet UX has to make trust and privacy legible instead of decorative.

These four drafts close that gap.

Together they create a cleaner wallet reading path:

- first, define the wallet as the holder-side control point rather than as a card gallery
- then explain why device binding matters once the wallet becomes a real trust surface
- then show how selective disclosure becomes a wallet-mediated consent flow
- finally, explain why identity-wallet UX has to make requester intent, privacy boundaries, and recovery paths understandable

This batch is meant to complement the existing wallet architecture wave, not replace it.

## Best wallet follow-on path

1. `what-is-a-digital-identity-wallet`
2. `mobile-wallet-architectures`
3. `device-binding-and-credential-security`
4. `secure-enclave-credential-storage`
5. `selective-disclosure-in-wallets`
6. `wallet-ux-design-for-identity`
7. `credential-portability-across-wallets`
8. `eudi-wallet-model-explained`

## Inputs used

These drafts were written against the aligned planning stack in:

- `../../priority-draft-briefs.md`
- `../../../06-revision/publication-scene-cards.md`
- `../../../06-revision/publication-post-packets.md`
- `../../../06-revision/publication-evidence-packets.md`
- `../../../06-revision/cap-narrative-profile.md`

They also rely on upstream source material from:

- `marty-blog/src/data/blogPosts.js`
- `marty-blog/src/data/articleMeta.js`
- `marty-authenticator/DEEP_LINKING.md`
- `marty-authenticator/lib/widgets/selective_disclosure_sheet.dart`
- `marty-protocol/protocol/wallet-profile/SPECIFICATION.md`
- `product-catalog/products/authenticator/overview.md`
- `product-catalog/products/authenticator/roadmap.md`
- the existing live wallet/privacy posts recovered in `batch-08`

## Follow-on status

After these drafts are converted and merged, the main follow-on work is:

- validate that the conceptual wallet opener complements rather than duplicates `mobile-wallet-architectures`
- validate that the device-binding post stays distinct from both secure-storage internals and holder-binding policy comparisons
- confirm that the wallet selective-disclosure post stays holder-side and UX-centered instead of becoming another generic cryptography explainer
- confirm that the wallet UX post lands as trust-design guidance rather than generic mobile-product advice

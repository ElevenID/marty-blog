# MIP Contract Blog Audit - 2026-07-13

## Scope

- Audited all 82 entries in `src/data/blogPosts.js` against the current MIP schemas, enums, entity specifications, Cedar schema, conformance fixtures, and examples.
- Began with the 15 articles already published as LinkedIn native articles.
- Checked external standards claims against primary sources, including the EUDI Regulation and Toolbox, OpenID4VCI 1.0, OpenID4VP 1.0, RFC 9901, current SD-JWT VC work, NIST post-quantum standards, W3C Bitstring Status List v1.0, and the IETF OAuth Status List draft.
- Synchronized browse-card metadata and recalculated read times for materially changed articles at approximately 225 words per minute.

## Editorial Rules Applied

- Assign fields and behavior to the MIP object that actually owns them.
- Describe a Compliance Profile as a technical profile, not proof of legal compliance or a catch-all regulatory rule bundle.
- Keep application forms and evidence in Application Template, not Credential Template.
- Separate trust-cache lifetime, status cache or grace, and decision freshness across Deployment Profile, Revocation Profile, and Presentation Policy.
- Treat standard FlowTypes as fixed sequences. Non-standard orchestration requires a versioned custom FlowExtension and cannot claim the standard sequence.
- Use only Cedar entities, actions, and context fields defined by the active schema unless an article clearly identifies a governed extension.
- Do not turn product pricing, latency, packaging, roadmap, or wallet capabilities into MIP protocol claims.
- Treat implementation examples as evidence that must be verified, not guarantees supplied by the protocol.

## Published LinkedIn Articles

Corrected in source and updated on LinkedIn as ElevenID LLC:

- `trust-profiles-explained`
- `cryptographic-trust-anchors-primer`
- `credential-templates-designing-what-gets-issued`
- `eudi-wallet-readiness`
- `deployment-profiles-from-design-to-production`
- `zero-knowledge-predicates-identity`
- `flows-orchestrating-identity-lifecycle`
- `compliance-profiles-bridging-regulation`
- `sd-jwt-selective-disclosure-deep-dive`
- `offline-verification-design-patterns`

Reviewed with no article correction required:

- `why-identity-needs-a-protocol`
- `business-case-for-credential-portability`
- `presentation-policies-minimum-disclosure`
- `cedar-policies-for-identity-governance`
- `introducing-mip`

## Source-Only Articles Corrected

- `post-quantum-readiness-in-identity`
- `holder-binding-beyond-biometrics`
- `mip-and-open-badges-education-credentials`
- `conformance-testing-for-implementers`
- `revocation-strategies-compared`
- `five-primitives-in-one-picture`
- `minimum-disclosure-is-a-policy-problem`
- `same-trust-model-different-runtime`
- `one-protocol-many-ecosystems`
- `why-marty-is-ready-for-evaluation`
- `infrastructure-economics-migration`
- `mip-json-schemas-walkthrough`
- `deployment-profiles-in-practice`
- `offline-verification-guide`
- `compliance-profiles-in-practice`
- `deploy-airline-boarding`
- `deploy-enterprise-access`
- `selective-disclosure`
- `deploy-age-verification`
- `deploy-membership-credentials`
- `impl-oid4vci`
- `impl-oid4vp`
- `understanding-trust-anchors`
- `certificate-chains-and-validation`
- `how-passport-pki-works`
- `what-icao-9303-specifies`
- `mobile-driving-licenses-iso-18013-5`
- `what-is-a-digital-identity-wallet`
- `device-binding-and-credential-security`
- `selective-disclosure-in-wallets`
- `wallet-ux-design-for-identity`
- `why-identity-systems-must-protect-privacy`
- `privacy-vs-compliance`
- `identity-governance-models`
- `governing-credential-ecosystems`
- `the-marty-identity-model`
- `trust-profile-evaluation-and-failure-handling`
- `credential-templates-explained-deep`
- `deployment-profiles-explained-deep`
- `mobile-wallet-architectures`
- `secure-enclave-credential-storage`
- `eudi-wallet-model-explained`

## Source-Only Articles Reviewed Without Changes

- `building-trust-registries-at-scale`
- `what-is-digital-identity`
- `four-actors-of-identity-systems`
- `issuers-holders-verifiers-explained`
- `credential-lifecycle`
- `why-identity-depends-on-cryptography`
- `public-key-infrastructure-explained`
- `understanding-csca-certificates`
- `how-governments-build-identity-pki`
- `how-credential-issuance-works`
- `verifiable-credentials-explained`
- `presentation-protocols`
- `interoperability-between-credential-formats`
- `data-minimization-in-identity`
- `selective-disclosure-explained`
- `rbac-vs-abac`
- `policy-engines-for-identity-systems`
- `trust-registries-explained`
- `federation-in-identity-systems`
- `verifier-infrastructure`
- `discovering-trusted-issuers`
- `why-the-marty-protocol-exists`
- `presentation-policies-explained-deep`
- `how-everything-works-together`
- `credential-portability-across-wallets`

## Verification

- Blog test suite: 39 tests passed across 10 files.
- Production build: completed successfully.
- Browse-card parity: 82 posts and 82 summaries, with zero mismatches.
- MIP conformance examples: 42 tests passed.
- Generated MIP bindings: current for 43 schemas and 23 enums.
- LinkedIn rollout packets: 72 refreshed and validated with zero structural issues; statuses remain 15 published and 57 internal-ready.
- Public-interaction review: all 72 rollout article bodies were allowed for editorial handling, with no forbidden phrases and no required rewrites. Review-triggering subject matter remains gated for human approval before future publication.

## Protocol Follow-Up

Resolved on 2026-07-13: `marty-protocol/enums/revocation-methods.json` and the Revocation Profile specification now identify `TOKEN_STATUS_LIST` with the active `draft-ietf-oauth-status-list` reference. A regression test prevents the unrelated RFC 9738 citation from returning.

# Final-Review Audit: What Digital Identity Can Learn from Hollywood

**Initial audit:** 2026-07-28

**Second-pass review:** 2026-08-25

**Editorial source:** [`what-digital-identity-can-learn-from-hollywood-draft.md`](what-digital-identity-can-learn-from-hollywood-draft.md)

**Site-format source:** [`../../src/data/blogPostDrafts.js`](../../src/data/blogPostDrafts.js)

**Verdict:** Ready for human final review. No known factual or protocol-boundary blocker remains.

## August second-pass result

The second pass rechecked all time-sensitive references on 2026-08-25 and reread the article for argument quality, overstatement, conversion drift, and publication fit.

* DCSS 1.5.0 remains the current DCI specification.
* SMPTE ST 430-1:2023 remains the current listed KDM revision.
* EUDI ARF 2.9.0 replaced 2.8.0 and is now cited throughout.
* The April 2026 Christie IMB-S4 documentation remains current on Christie's product page.
* OpenID4VCI 1.0, OpenID4VP 1.0, and RFC 9334 still support the article's binding and attestation claims.
* “Digital identity systems often blur” was softened to “can blur” to avoid a universal claim.
* The KDM evidence sentence was narrowed: a KDM establishes issued authorization parameters; it does not prove equipment actually possessed or used the keys.
* Markdown and site-format copies remain aligned on every substantive claim.

No additional section, protocol proposal, or cinema-domain model is recommended. The article is stronger at its current length and scope.

## Scope

This audit covered:

* Current DCI, SMPTE, cinema-equipment, EUDI Wallet, OpenID, and RATS references
* Claims about KDMs, Media Blocks, forensic marking, logging, wallet components, device binding, and attestation
* Alignment with the accepted Marty machine-identity schemas and ADR
* Parity between the editorial Markdown and site-format conversion
* Title, summary, reading time, block compatibility, source links, and publication prerequisites

## Corrections made during the audit

1. Updated the EUDI Wallet reference from ARF 1.5 to ARF 2.8.0 during the initial audit, then to the current ARF 2.9.0 during the August second pass.
2. Updated the Christie IMB-S4 guide from the September 2024 revision to the March 2026 revision.
3. Replaced the unsupported implication that an “exhibitor” performs the certificate step with the neutral “operator.”
4. Changed “log certificate used to sign log files” to the guide's exact “Log Signer certificate” terminology.
5. Changed language describing Marty's machine-identity additions as merely proposed. The accepted ADR and current schemas now support `MachineIdentity`, `MachineAuthenticationPolicy`, and `AuthorizationDecisionReceipt`.
6. Restored the six numbered design-rule headings and several substantive sentences that had been compressed during site-format conversion.
7. Reduced the site summary from 222 to 146 characters for a stronger search and social description.
8. Removed the unused RFC 9711 citation from the article's source list. RFC 9711 remains relevant to the wider protocol research but is not needed to support a claim in this post.

## Claim audit

| Area | Finding | Status |
| --- | --- | --- |
| Current cinema specification | DCI identifies DCSS 1.5.0, approved 2026-01-29, as current and says its HTML edition is definitive. | Supported |
| Current KDM standard | SMPTE's current document listing identifies ST 430-1:2023 as “D-Cinema Operations — Key Delivery Message.” | Supported |
| KDM description | The article stays at architecture level: content keys, intended equipment, and key-use timing. It does not enumerate unverified ST 430-1 fields. | Supported with appropriate restraint |
| Equipment certificate workflow | The March 2026 Christie guide identifies the SM certificate as the certificate distributors use to generate KDM keys and separately lists a Log Signer certificate. | Supported |
| Media Block analogy | The article correctly treats the Media Block security boundary, not the projector alone, as the closer trusted-runtime analogue. | Supported |
| Forensic marking | The article describes offline association with playback time/location and explicitly rejects claims of real-time camera detection or personal identification. | Supported and properly qualified |
| Logging | The article says logs contribute context rather than prove the whole event. It correctly notes that DCSS 1.5.0 removed the 24-hour SMS collection mandate. | Supported |
| Wallet architecture | EUDI ARF 2.9.0 continues to distinguish Wallet Instance, WSCA, and WSCD and supports local, external, native, remote, and hybrid secure-component arrangements. | Supported |
| Wallet privacy | The warning that stable device identifiers can create linkability is consistent with the current EUDI privacy discussion. | Supported |
| OID4VCI | The final 1.0 specification supports cryptographic holder binding, proof of possession, and key attestation. | Supported |
| OID4VP | The final 1.0 specification requires presentation binding to the verifier/client and transaction nonce. | Supported |
| Attestation separation | RFC 9334 separates Attester evidence, Verifier appraisal/results, and the Relying Party's application-specific decision. | Supported |
| Marty machine identity | Current schemas and accepted ADR support machine identity, authentication policy, key/attestation binding, and signed authorization receipts. | Supported; targeted protocol tests pass |
| Marty domain boundary | The article keeps DCP, CPL, KDM, playback, watermarking, logs, and recording investigations outside Marty. | Correct |

## Editorial assessment

### Thesis and structure

The article's thesis is clear and defensible:

> Possession, identity, authorization, protected execution, and evidence are different security concerns.

The cinema example carries that thesis without requiring the reader to know digital-cinema standards. The wallet comparison is qualified early enough to avoid becoming a literal “wallet equals projector” claim.

The camera-capture scenario is the right recording example because it lets the article explain forensic evidence without drifting into output-path compromise, insider extraction, or media-processing protocol design.

### Separation of concerns

The Marty sidebar is appropriately narrow. It describes an identity-plane integration and explicitly states that the authorization receipt is not a KDM. No cinema-specific schema, execution obligation, watermark result, or recording entity appears in the publishable draft.

The distinction between managed machine identity and consumer-wallet privacy is one of the strongest parts of the article and should remain in final editing.

### Tone and terminology

The draft consistently uses DCI terms: Media Block, Integrated Media Block, Secure Processing Block, Security Manager, DCP, CPL, and KDM. It does not use the incorrect “secure media block” or “SMB.”

“Hollywood” functions as the accessible title and framing device, while the body attributes technical requirements to DCI, SMPTE, and equipment documentation.

### Source and copyright posture

The article paraphrases sources and includes no substantial verbatim standard text. Nine primary-source links are present in the site-format resource block. There is no quotation-length or standards-reproduction concern.

## Site-format assessment

* Slug: `what-digital-identity-can-learn-from-hollywood`
* Title length: 46 characters
* Summary length: 146 characters
* Provisional author: `daniel-ortega`
* Category: `Technical`
* Topic: `Machine Identity`
* Estimated reading time: 10 minutes
* Site content: 79 supported blocks, including 14 headings and 9 primary-source links
* Approximate site word count: 2,239 words
* Unsupported content block types: none
* Production exposure: none; the draft module is not exported by `src/data/index.js`

Daniel Ortega is a reasonable provisional author because the article's center of gravity is protocol boundary design. Aiko Tanaka would be the alternative if final review wants the piece framed primarily as a standards comparison.

## Final-review decisions still required

These are publication decisions, not research blockers:

1. Confirm the author (`daniel-ortega` is currently assigned).
2. Confirm the title and the subtitle concept “Possession Is Not Authorization.”
3. Choose the publication date.
4. Decide whether the primary-source resource block remains visible in the published article. Recommendation: keep it.
5. Decide whether to obtain an optional named cinema-practitioner review. The published-material review is sufficient for drafting, but practitioner review would add operational confidence.
6. Approve moving the post from `blogPostDrafts.js` into the live post and summary arrays.

## Publication integration checklist

After editorial approval:

1. Add `date` and any `updatedDate` to the post.
2. Move the post into `RAW_BLOG_POSTS` in `src/data/blogPosts.js`.
3. Add matching browse-card metadata to `src/data/blogPostSummaries.js`.
4. Add the slug's topic, difficulty, layer, and related posts to `src/data/articleMeta.js`.
5. Add concept and standards tags to the maps in `src/data/guideContent.js`.
6. Add or generate the social image and manifest entry.
7. Verify production route rendering, table of contents, structured data, canonical URL, and related-post behavior.
8. Run tests and the production build.

The live post files already contain unrelated local edits. Publication integration should preserve those changes and apply only a scoped addition.

## Validation record

* Site-draft syntax and import validation: passed
* Supported block and resource validation: passed
* All nine external source URLs: HTTP 200 on 2026-08-25
* Markdown fence and whitespace checks: passed
* Marty targeted machine-identity tests: 15 passed in an isolated project environment
* Blog test suite: 57 passed during the second pass
* Blog production build: passed during the second pass
* ESLint: passed with 0 errors and 9 existing component-level warnings unrelated to this draft

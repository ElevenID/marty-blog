# Hollywood and Digital Identity: Research Claim Matrix

**Status:** Editorial research
**Checked:** 2026-07-28
**Purpose:** Separate sourced cinema and identity facts from analogy, inference, and Marty design choices before drafting the article.

## Editorial rules

* Use DCI's exact terms: Media Block (MB), Integrated Media Block (IMB), Outboard Media Block (OMB), Security Manager (SM), and Secure Processing Block (SPB).
* Do not use “secure media block” or the abbreviation “SMB.”
* Treat the projector primarily as an output device. The closer wallet-security analogue is the Media Block's protected processing boundary.
* Label cross-domain mappings as analogies, not equivalences.
* Do not imply that a protocol credential creates trusted hardware properties.
* Do not imply that forensic marking prevents recording, detects a camera in real time, or identifies a person.
* Do not claim that every showing produces centrally collected cryptographic proof. DCSS 1.5.0 removed the earlier mandate for the Screen Management System to collect post-show Media Block playout logs within 24 hours.
* Do not quote detailed KDM fields as current requirements until they have been checked against SMPTE ST 430-1:2023.

## Claim matrix

| ID | Proposed article claim | Classification | Support and version | Safe wording / qualification | Status |
| --- | --- | --- | --- | --- | --- |
| DCI-01 | Encrypted cinema content can be delivered or stored separately from the authorization needed to use its content keys. | Cinema architecture | DCI DCSS; SMPTE ST 430-1 defines KDM operations. | Distribution and storage need not be trusted with plaintext or usable content keys. Avoid calling the content “public.” | Supported |
| DCI-02 | A Media Block converts packaged content into streams for presentation and performs protected media processing. | Cinema architecture | DCSS §§7.5.4 and 9.4; DCSS 1.5.0 is the current definitive specification. | The Media Block, not the projector alone, is the useful trusted-runtime comparison. | Supported |
| DCI-03 | An IMB places protected processing in the projector-side playback chain; an OMB handles defined essence externally. | Cinema architecture | DCSS §§8.4.2, 9.4.2.1, and 9.4.2.3; terminology retained by DCSS 1.5.0. | Explain that topology varies, so “wallet equals projector” is too simple. | Supported |
| DCI-04 | The protected boundary uses device identity, protected private keys, secure processing, time, and policy to control access to content keys. | Cinema architecture synthesis | DCSS security architecture plus ST 430-1 KDM architecture. | Describe this as a system-level synthesis, not a quotation from one clause. | Supported synthesis |
| DCI-05 | A KDM carries content keys for authorized cinema equipment and specifies a key-use interval. | KDM architecture | DCSS 1.5.0 §§9.3.1 and 9.6.1.2; Christie IMB-S4 documentation confirms that the SM certificate is sent when requesting KDM keys; SMPTE lists ST 430-1:2023 as current. | Safe at the architectural level. The article intentionally avoids current ST 430-1 field names not independently visible in public standard material. | Supported at article depth |
| DCI-06 | Forensic marking is inserted after decryption and before clear content leaves the Media Block security boundary. | Cinema security | DCSS 1.5.0 §9.4.6.1 and applicable Media Block requirements. | Say “within the protected processing/output path.” | Supported |
| DCI-07 | Forensic marking supports later attribution of a recovered recording to a time and location. | Cinema security | DCSS 1.4.2 §9.5.3 and DCI Compliance Test Plan marking tests. | It supports an offline investigation. It does not identify the recorder by itself. | Supported |
| DCI-08 | Security and playback logs can contribute evidence about presentation activity. | Cinema operations | DCSS secure logging requirements and DCI CTP tests. | Say logs “can contribute evidence.” Do not say they prove every showing occurred correctly. | Supported with qualification |
| DCI-09 | Current DCI rules require the SMS to collect every post-show Media Block report within 24 hours. | Former requirement | DCI's DCSS 1.5.0 changelog explicitly deletes this mandate. | Do not make this claim in the article. It is useful only as an example of why version checks matter. | Rejected |
| DCI-10 | Current cinema conformance is established by a specification and compliance-testing ecosystem, not by identity credentials alone. | Governance / assurance | DCSS 1.5.0 and CTP 1.5.0 announcements. | Certification, implementation assurance, and operational controls remain outside Marty. | Supported |
| ID-01 | A digital wallet is more than a file store: it coordinates presentation while protected components can hold keys and perform cryptographic operations. | Wallet architecture | EUDI Wallet ARF 2.8.0 describes Wallet Instance, WSCA, and WSCD components. | Not every wallet or device provides equivalent hardware isolation. | Supported |
| ID-02 | Credential issuance can bind a credential to a holder-controlled cryptographic key. | Identity protocol | OpenID4VCI 1.0 proof and cryptographic binding mechanisms. | Distinguish holder binding from stable physical-device identification. | Supported |
| ID-03 | A presentation can be bound to an intended verifier and fresh transaction challenge. | Identity protocol | OpenID4VP 1.0 audience/client binding and nonce processing. | Use this to explain replay resistance and transaction binding, not hardware trust. | Supported |
| ID-04 | Attestation evidence and the relying party's authorization decision are separate artifacts and policy steps. | Attestation architecture | RFC 9334: Attester produces Evidence, Verifier produces Attestation Results, Relying Party applies its policy. | This separation directly supports Marty's boundary. | Supported |
| ID-05 | Attestation freshness can be established using synchronized time, nonces, or epoch mechanisms. | Attestation architecture | RFC 9334 §10; EAT is RFC 9711. | Marty may require freshness and record an attestation-result digest without defining platform evidence. | Supported |
| ID-06 | Stable device identity can improve binding but can also increase tracking and correlation risk. | Privacy / architecture | EUDI Wallet ARF privacy architecture and wallet-attestation design. | Strong machine identity is appropriate for managed cinema equipment; it should not become a universal holder-wallet requirement. | Supported synthesis |
| MAP-01 | “Wallet equals projector.” | Analogy | No standard states this. | Reject the equation. Map playback software to the wallet app, SM/MB to the trusted wallet application, SPB to secure hardware, and projector/output path to the presentation interface. | Rejected as literal claim |
| MAP-02 | Cinema and wallets both benefit from separating possession, authorization, protected key use, output, and evidence. | Cross-domain inference | Derived from DCI, wallet, and attestation architectures. | Present explicitly as the article's analogy and inference. | Defensible inference |
| MIP-01 | Marty should model movie packages, CPLs, KDMs, showings, watermark payloads, or recording investigations. | Marty design proposal | Conflicts with the accepted Marty machine-identity boundary. | External cinema systems own these entities and pass only opaque action, resource, transaction, and result references to Marty. | Rejected |
| MIP-02 | Marty can identify a managed cinema runtime and bind its credentials, proof of key control, and optional attestation to one machine identity. | Marty capability | `MachineIdentity` and `MachineAuthenticationPolicy`. | This is identity/device binding; it is not playback enforcement. | Implemented proposal |
| MIP-03 | Marty can issue a signed receipt for an identity-bound authorization decision that a cinema service consumes. | Marty capability | `AuthorizationDecisionReceipt`. | The receipt is not a KDM and contains no content key or execution instruction. | Implemented proposal |
| MIP-04 | Marty can determine that a recording occurred or attribute it to a showing. | Marty capability | Outside the accepted boundary. | Marty may authenticate a machine involved in an external investigation, but the cinema system interprets marks and logs. | Rejected |

## Source ledger

Primary sources used for the matrix:

* [DCI announcements: DCSS 1.5.0 and CTP 1.5.0](https://www.dcimovies.com/announcements/) — both approved 2026-01-29; the announcement says the DCSS HTML edition is definitive.
* [DCI specification page](https://www.dcimovies.com/dci-specification/) — identifies DCSS 1.5.0 as the current definitive HTML specification.
* [DCI Digital Cinema System Specification 1.4.2, HTML](https://dcss.dcimovies.com/0c0cff34d231b516cb89ae3fad352d5cf37a9515/dcss.html) — publicly accessible architectural text used where the 1.5.0 deep link was not available during research.
* [DCI Compliance Test Plan](https://ctp.dcimovies.com/0b5699a0b76a57547576565b89fd052467c8ac20/ctp.html) — equipment conformance and test behavior.
* [SMPTE recently updated documents](https://www.smpte.org/standards/recently-updated-documents) — identifies ST 430-1:2023 as the current KDM revision.
* [SMPTE ST 430-1:2006 public PDF](https://pub.smpte.org/doc/st430-1/20061003-pub/st0430-1-2006.pdf) — architectural background only, not authority for current field-level claims.
* [OpenID for Verifiable Credential Issuance 1.0](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html).
* [OpenID for Verifiable Presentations 1.0](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html).
* [EUDI Wallet Architecture and Reference Framework 2.8.0](https://eudi.dev/2.8.0/architecture-and-reference-framework-main/).
* [RFC 9334: RATS Architecture](https://www.rfc-editor.org/rfc/rfc9334.html).
* [RFC 9711: Entity Attestation Token](https://www.rfc-editor.org/rfc/rfc9711.html).
* [Christie IMB-S4 User Guide, revision 1 (March 2026)](https://www.christiedigital.com/globalassets/resources/public/020-103873-04-Christie-LIT-MAN-USR-IMB-S4.pdf) — operational confirmation that the Security Manager certificate is used to request KDM keys and that a separate Log Signer certificate is available.
* [Dolby cinema playback support](https://professional.dolby.com/support/cinema-playback/) — operational confirmation that exhibitors exchange equipment certificates and test encrypted content with KDMs.

## Drafting decisions and residual review

1. **KDM depth:** Resolved. Keep the article at the architecture level supported by DCSS 1.5.0 and current equipment documentation. Do not enumerate ST 430-1:2023 fields.
2. **DCSS version:** Resolved. Core MB, SPB, SM, forensic-marking, and logging claims were checked against current DCI material and the 1.5.0 changelog.
3. **Cinema practice check:** Completed as a published-material review using current Christie documentation and Dolby support material. A named practitioner review remains desirable before final publication but does not block the draft.
4. **Wallet practice check:** Completed as a published-architecture review using EUDI ARF 2.8.0 and OpenID4VCI 1.0. The draft explicitly accounts for local secure elements, remote HSMs, heterogeneous devices, and correlation risk.
5. **Recording scenario:** Camera capture. Explain offline recovery of time/location marking combined with logs, without implying camera detection or personal identification.
6. **Marty depth:** Vendor-neutral main narrative with a clearly labeled Marty technical sidebar.
7. **Superseded proposals:** Exclude `ExecutionObligation`, `ControlResult`, `RuntimeRegistration`, and cinema-domain schemas from the publishable draft. Preserve them only in the working-idea archive.

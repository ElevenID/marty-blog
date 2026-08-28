import { normalizeBlogData } from '../utils/blogText.js';

/**
 * Editorial drafts in the same block format as blogPosts.js.
 *
 * This module is intentionally not exported from src/data/index.js and is not
 * consumed by production routes. Moving a post into the live BLOG_POSTS array
 * is a separate publication decision.
 */
const RAW_BLOG_POST_DRAFTS = [
  {
    status: 'draft',
    slug: 'what-digital-identity-can-learn-from-hollywood',
    title: 'What Digital Identity Can Learn from Hollywood',
    summary: 'Digital cinema separates possession, machine identity, key authorization, protected execution, and forensic evidence. Identity systems should too.',
    authorId: 'daniel-ortega',
    category: 'Technical',
    readTime: '10 min read',
    topic: 'Machine Identity',
    content: [
      { type: 'paragraph', text: 'A cinema can receive a digital movie days before its first authorized showing. The encrypted package can sit on local storage, move through systems operated by exhibitors and vendors, and remain unusable without the right keys.' },
      { type: 'paragraph', text: 'That is a useful security property. The distributor does not have to pretend the theater network is secret. The theater does not need a separately encrypted copy of the entire movie for every auditorium. Possession of the encrypted asset and authority to use it are different things.' },
      { type: 'paragraph', text: 'Digital identity systems can blur that distinction.' },
      { type: 'paragraph', text: 'A wallet contains a credential, so an application treats the wallet as authorized to disclose it anywhere. A device has a certificate, so a service assumes the device is healthy. A policy engine returns "permit," so the surrounding system assumes the sensitive operation happened correctly. Each leap skips a boundary that cinema security has spent years making explicit.' },
      { type: 'paragraph', text: 'The lesson from Hollywood is not that identity should copy digital rights management. It is that strong systems separate five questions: What object is present? Which identity and key are requesting its use? What operation is authorized, for whom, and for how long? Where will sensitive key use and processing occur? What evidence will exist afterward?' },
      { type: 'paragraph', text: 'That separation is valuable far beyond movies.' },

      { type: 'heading', text: 'How a movie can arrive before permission' },
      { type: 'paragraph', text: 'A Digital Cinema Package, or DCP, contains the image, audio, subtitles, and composition information needed for presentation. Protected essence can remain encrypted during distribution and storage.' },
      { type: 'paragraph', text: 'Authorization arrives separately. At an architectural level, a Key Delivery Message, or KDM, carries the content keys needed by authorized cinema equipment and constrains when those keys may be used. SMPTE ST 430-1:2023 is the current KDM standard, while the DCI Digital Cinema System Specification defines the broader exhibition security architecture.' },
      { type: 'paragraph', text: 'The operational workflow is visible in current equipment documentation. For example, the Christie IMB-S4 guide explains that an operator can download the Security Manager certificate to send when requesting KDM keys. It separately identifies a Log Signer certificate. Dolby cinema support material likewise treats equipment certificates, encrypted test content, and KDMs as routine operational artifacts.' },
      { type: 'paragraph', text: 'This is device binding in a concrete form. The authorization is not merely "this theater may show this movie." It is usable by the intended security equipment under the permitted conditions.' },
      {
        type: 'code',
        lang: 'text',
        label: 'Possession and authorization are separate',
        code: `encrypted movie present
    does not imply
content key available
    does not imply
playback authorized now`,
      },
      { type: 'paragraph', text: 'The distinctions let the industry distribute a large encrypted asset through infrastructure that does not need access to its plaintext while reserving key use for a more tightly governed boundary.' },

      { type: 'heading', text: 'The projector is not the wallet' },
      { type: 'paragraph', text: 'It is tempting to say that a digital wallet is like a cinema projector. That analogy is memorable and wrong in an important way.' },
      { type: 'paragraph', text: 'The projector is principally the image-output device. The trusted security work is centered on the Media Block and the protected components within the cinema playback chain.' },
      { type: 'paragraph', text: 'DCI defines a Media Block as a kind of Secure Processing Block that contains a Security Manager and performs media decryption. An Integrated Media Block participates in the projector-side playback chain. Other arrangements can place defined processing elsewhere. The Security Manager controls content-key delivery and the security relationships among the relevant protected components.' },
      {
        type: 'code',
        lang: 'text',
        label: 'The layered analogy',
        code: `Digital cinema                         Digital identity wallet
Cinema server and playback software     Wallet application or Wallet Instance
Media Block and Security Manager         Trusted wallet cryptographic application
Secure Processing Block                 Secure element, TEE, or HSM
Equipment certificate and private key   Wallet- or device-bound key
KDM                                     Narrowly scoped authorization
Projector and protected output path      Presentation and disclosure channel
Security and playback logs              Transaction evidence`,
      },
      { type: 'paragraph', text: 'Even this mapping is only an analogy.' },
      { type: 'paragraph', text: 'The EUDI Wallet Architecture and Reference Framework 2.9.0 makes the wallet side more precise. It distinguishes the Wallet Instance, a Wallet Secure Cryptographic Application, and a Wallet Secure Cryptographic Device. That cryptographic device might be local secure hardware, a smart card, an embedded secure element, or a remote HSM. There is no single physical "wallet projector."' },
      { type: 'paragraph', text: 'The goals differ too. Cinema security primarily protects a rights holder\'s content from unauthorized use. A personal wallet must protect the holder\'s agency and privacy while giving a relying party enough evidence to make a decision. Selective disclosure, meaningful user approval, unlinkability, and data minimization are therefore central to wallet design in a way that does not map to movie playback.' },
      { type: 'paragraph', text: 'The useful comparison is not about identical machinery. It is about boundaries.' },

      { type: 'heading', text: 'A key proves control, not trustworthiness' },
      { type: 'paragraph', text: 'Device binding is often discussed as though it were one feature. It is better understood as a chain of claims.' },
      { type: 'paragraph', text: 'First, a system can bind a credential or registration record to a public key. A fresh signed challenge can then show that the requester controls the corresponding private key. Audience and nonce binding can show that the proof was created for this transaction rather than replayed from another one.' },
      { type: 'paragraph', text: 'OpenID for Verifiable Credential Issuance 1.0 supports proof of possession and key attestation during issuance. OpenID for Verifiable Presentations 1.0 binds presentation exchanges to the intended verifier and a transaction nonce.' },
      {
        type: 'code',
        lang: 'text',
        label: 'What key binding can establish',
        code: `Is this the expected key?
Does the requester control it now?
Was this proof created for me and this transaction?`,
      },
      {
        type: 'code',
        lang: 'text',
        label: 'What key binding does not establish',
        code: `Is the operating system uncompromised?
Is the key in certified hardware?
Will the application enforce policy after authentication?
Can plaintext escape through an unprotected path?`,
      },
      { type: 'paragraph', text: 'Those are runtime-assurance questions. They require implementation controls and, where appropriate, attestation.' },
      { type: 'paragraph', text: 'The IETF RATS architecture keeps that separation clean. An Attester produces evidence. A Verifier appraises it against endorsements, reference values, and an evidence policy. The Verifier produces an attestation result. A Relying Party then applies its own policy to decide whether to authorize the requested operation.' },
      { type: 'paragraph', text: 'That sequence is more disciplined than treating "attested" as a magic adjective. Attestation contributes evidence about a runtime. It does not replace authorization, and it does not make the attester\'s own claims automatically trustworthy.' },

      { type: 'heading', text: 'Strong machine binding is not a universal wallet requirement' },
      { type: 'paragraph', text: 'The cinema case also exposes a privacy boundary.' },
      { type: 'paragraph', text: 'A managed Media Block is organizational equipment. It has an installation, an operator, a certificate lifecycle, maintenance events, and a reason to be recognized consistently. Stable machine identity is useful because the equipment is meant to be managed and authorized as equipment.' },
      { type: 'paragraph', text: 'A consumer wallet is different. A stable identifier disclosed across issuers and relying parties can become a tracking handle. The same binding that makes managed equipment accountable can make a person linkable.' },
      { type: 'paragraph', text: 'Good identity architecture should therefore ask what is being bound, who can observe the identifier, whether it is stable across audiences, whether acceptable key protection can be shown without exposing a globally correlatable identity, and which lifecycle event revokes or replaces the binding.' },
      { type: 'paragraph', text: 'For managed machines, persistent identity can be appropriate. For holder wallets, pairwise, selective, or short-lived mechanisms may provide the needed assurance with less correlation risk.' },

      { type: 'heading', text: 'What happens when someone records the screen?' },
      { type: 'paragraph', text: 'Cinema forensic design is instructive because it does not pretend prevention is perfect.' },
      { type: 'paragraph', text: 'DCI requires forensic-marking capability in applicable Media Blocks. Marking is applied in the protected processing path after decryption and before clear output escapes that boundary. The mark can carry information useful for associating a recovered copy with a playback time and location.' },
      { type: 'paragraph', text: 'Consider a camera capture in an auditorium. The forensic system does not necessarily detect the camera while the movie is playing. It does not identify the person holding it. Instead, an investigator who later obtains the recording may recover the embedded mark. Security and playback logs can then contribute context about what played, where, and when.' },
      {
        type: 'code',
        lang: 'text',
        label: 'A possible recording investigation',
        code: `recovered recording
    -> recover forensic mark
        -> derive time/location association
            -> correlate with cinema-domain logs
                -> support an investigation`,
      },
      { type: 'paragraph', text: 'That is evidence, not omniscience.' },
      { type: 'paragraph', text: 'It also illustrates why authorization evidence and execution evidence should not be conflated. A KDM can establish that content keys were issued for specified equipment and a permitted interval. A log can claim that a playback event occurred. A recovered forensic mark can associate captured output with a showing context. None of those artifacts alone proves the entire story.' },
      { type: 'paragraph', text: 'Current-version details matter. DCSS 1.5.0 removed the former mandate for the Screen Management System to collect post-show Media Block playout reports within 24 hours. It would therefore be inaccurate to describe the modern architecture as producing one centrally collected proof package for every showing.' },
      { type: 'paragraph', text: 'The broader principle survives: design consequential operations so that later investigation has independent, appropriately scoped evidence.' },

      { type: 'heading', text: 'What identity systems should borrow' },
      { type: 'heading', text: '1. Separate possession from authority' },
      { type: 'paragraph', text: 'Holding an encrypted asset does not confer a content key. Holding a credential should not confer authority to disclose it to any requester for any purpose. The transaction still needs an authenticated audience, requested scope, applicable policy, and, where a person is involved, meaningful holder control.' },
      { type: 'heading', text: '2. Bind authorization to the intended key and transaction' },
      { type: 'paragraph', text: 'A named device without proof of key control is only a database assertion. A signed proof without freshness is replayable. A fresh proof without audience binding may be redirected.' },
      { type: 'paragraph', text: 'Strong binding connects the identity record, credential, controlled key, challenge, audience, and authorization decision.' },
      { type: 'heading', text: '3. Put sensitive operations inside the assured boundary' },
      { type: 'paragraph', text: 'Cryptography is strongest when policy is enforced where the protected key is actually used. If an application can export the key or plaintext before applying the rule, a beautifully signed authorization message will not save the architecture.' },
      { type: 'paragraph', text: 'Protocols can describe and verify evidence about a boundary. They cannot create tamper resistance by declaration.' },
      { type: 'heading', text: '4. Keep attestation and authorization separate' },
      { type: 'paragraph', text: 'Attestation asks whether evidence supports claims about runtime state. Authorization asks whether this principal may perform this operation on this resource in this context.' },
      { type: 'paragraph', text: 'Combining them into one opaque "trusted device" flag makes both decisions harder to inspect and govern.' },
      { type: 'heading', text: '5. Keep domain enforcement in the domain' },
      { type: 'paragraph', text: 'An identity protocol should not need to understand movie compositions to authenticate a Media Block. A cinema system should not outsource KDM semantics to a generic identity receipt.' },
      { type: 'paragraph', text: 'The clean interface is a narrowly scoped identity decision consumed by a domain system that remains responsible for its own resource and operation.' },
      { type: 'heading', text: '6. Design evidence for its actual purpose' },
      { type: 'paragraph', text: 'Authentication evidence, authorization receipts, runtime attestation, operational logs, and forensic marks have different producers, audiences, lifetimes, and privacy risks. Calling all of them "audit data" hides the distinctions that make them useful.' },

      { type: 'heading', text: 'Technical sidebar: where Marty stops' },
      { type: 'paragraph', text: 'The cinema thought experiment changed the Marty Identity Protocol, but not by turning Marty into a cinema protocol.' },
      { type: 'paragraph', text: 'It exposed a missing identity abstraction: a managed, non-human runtime that can present credentials, prove control of a registered key, and optionally bind fresh attestation to the same identity.' },
      { type: 'paragraph', text: 'Marty now addresses that gap with three domain-neutral parts. MachineIdentity represents a managed runtime and its identity-key lifecycle. MachineAuthenticationPolicy defines credential trust, proof-of-control, freshness, audience, replay, and optional attestation requirements. AuthorizationDecisionReceipt records a signed identity authorization decision with opaque external action and resource identifiers, policy digest, key binding, challenge, audience, and optional attestation-result digest.' },
      {
        type: 'code',
        lang: 'text',
        label: 'A non-normative cinema integration',
        code: `1. Register the Media Block security runtime as a machine identity.
2. Require credentials and fresh proof of its registered key.
3. Appraise fresh runtime attestation when policy requires it.
4. Evaluate whether the machine may request an external KDM operation.
5. Issue a signed, audience-bound authorization decision receipt.
6. Let the cinema authorization service verify the receipt.
7. Let that service independently decide whether to issue the KDM.`,
      },
      { type: 'paragraph', text: 'The receipt is not a KDM. It contains no content key, CPL, show schedule, playback instruction, watermark payload, or recording determination.' },
      {
        type: 'code',
        lang: 'text',
        label: 'Separation of concerns',
        code: `Marty owns                              Cinema system owns
Machine identity and key lifecycle       DCP, CPL, and KDM semantics
Credential trust and proof of control    Content keys and validity rules
Attestation-result appraisal             Playback and output protection
Identity authorization policy            Forensic marking and cinema logs
Signed authorization receipt             Attribution and investigation`,
      },
      { type: 'paragraph', text: 'This design supports device binding without making cinema concepts part of the identity model. It also avoids forcing stable managed-machine identity onto ordinary holder wallets.' },

      { type: 'heading', text: 'The deeper lesson' },
      { type: 'paragraph', text: 'Hollywood did not solve digital cinema security by hiding every copy of the movie. It made the valuable copy safe to distribute in encrypted form, separated content from authorization, bound key use to protected equipment and time, and retained evidence suited to later investigation.' },
      { type: 'paragraph', text: 'Identity infrastructure can use the same architectural discipline without adopting the same business purpose.' },
      { type: 'paragraph', text: 'A wallet is not merely a folder of credentials. A machine certificate is not proof of runtime integrity. An attestation result is not an authorization decision. An authorization receipt is not evidence that the protected operation completed correctly.' },
      { type: 'paragraph', text: 'Strong systems make those boundaries visible.' },
      { type: 'paragraph', text: 'Distribute portable artifacts broadly, authorize consequential use narrowly, enforce sensitive operations where the key is protected, and produce only the evidence the relying system actually needs.' },
      { type: 'paragraph', text: 'That is what digital identity should learn from Hollywood.' },

      {
        type: 'resources',
        title: 'Primary sources',
        intro: 'Current primary specifications and implementation material used for this draft.',
        items: [
          {
            label: 'DCI Digital Cinema System Specification 1.5.0',
            href: 'https://www.dcimovies.com/dci-specification/',
            note: 'Current DCI specification landing page; DCI identifies the HTML edition as definitive.',
          },
          {
            label: 'DCI DCSS 1.5.0 and CTP 1.5.0 announcements',
            href: 'https://www.dcimovies.com/announcements/',
            note: 'Version dates and the 1.5.0 logging-related changelog.',
          },
          {
            label: 'SMPTE recently updated documents',
            href: 'https://www.smpte.org/standards/recently-updated-documents',
            note: 'Identifies ST 430-1:2023 as the current KDM revision.',
          },
          {
            label: 'Christie IMB-S4 User Guide',
            href: 'https://www.christiedigital.com/globalassets/resources/public/020-103873-04-Christie-LIT-MAN-USR-IMB-S4.pdf',
            note: 'Operational equipment certificate, KDM-request, and log-signing details.',
          },
          {
            label: 'Dolby cinema playback support',
            href: 'https://professional.dolby.com/support/cinema-playback/',
            note: 'Operational support material for equipment certificates, encrypted test content, and KDMs.',
          },
          {
            label: 'EUDI Wallet Architecture and Reference Framework 2.9.0',
            href: 'https://eudi.dev/2.9.0/architecture-and-reference-framework-main/',
            note: 'Wallet Instance, WSCA, WSCD, binding, lifecycle, and privacy architecture.',
          },
          {
            label: 'OpenID for Verifiable Credential Issuance 1.0',
            href: 'https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html',
            note: 'Proof of possession and key-attestation mechanisms.',
          },
          {
            label: 'OpenID for Verifiable Presentations 1.0',
            href: 'https://openid.net/specs/openid-4-verifiable-presentations-1_0.html',
            note: 'Verifier and transaction binding.',
          },
          {
            label: 'RFC 9334: RATS Architecture',
            href: 'https://www.rfc-editor.org/rfc/rfc9334.html',
            note: 'Separation of attestation evidence, appraisal, results, and relying-party decisions.',
          },
        ],
      },
    ],
  },
];

export const BLOG_POST_DRAFTS = RAW_BLOG_POST_DRAFTS.map((post) => normalizeBlogData(post));

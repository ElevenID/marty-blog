# What Digital Identity Can Learn from Hollywood

## Possession Is Not Authorization

**Status:** Complete editorial draft; second-pass reviewed 2026-08-25; converted to the non-production site-format module [`src/data/blogPostDrafts.js`](../../src/data/blogPostDrafts.js)

**Audience:** Identity architects, security engineers, infrastructure teams, and technical decision-makers

**Estimated reading time:** 10 minutes

A cinema can receive a digital movie days before its first authorized showing. The encrypted package can sit on local storage, move through systems operated by exhibitors and vendors, and remain unusable without the right keys.

That is a useful security property. The distributor does not have to pretend the theater's network is secret. The theater does not need a separately encrypted copy of the entire movie for every auditorium. Possession of the encrypted asset and authority to use it are different things.

Digital identity systems can blur that distinction.

A wallet contains a credential, so an application treats the wallet as authorized to disclose it anywhere. A device has a certificate, so a service assumes the device is healthy. A policy engine returns “permit,” so the surrounding system assumes the sensitive operation happened correctly. Each leap skips a boundary that cinema security has spent years making explicit.

The lesson from Hollywood is not that identity should copy digital rights management. It is that strong systems separate five questions:

1. What object is present?
2. Which identity and key are requesting its use?
3. What operation is authorized, for whom, and for how long?
4. Where will sensitive key use and processing occur?
5. What evidence will exist afterward?

That separation is valuable far beyond movies.

## How a movie can arrive before permission

A Digital Cinema Package, or DCP, contains the image, audio, subtitles, and composition information needed for presentation. Protected essence can remain encrypted during distribution and storage.

Authorization arrives separately. At an architectural level, a Key Delivery Message, or KDM, carries the content keys needed by authorized cinema equipment and constrains when those keys may be used. The current KDM standard is [SMPTE ST 430-1:2023](https://www.smpte.org/standards/recently-updated-documents), while the [DCI Digital Cinema System Specification](https://www.dcimovies.com/dci-specification/) defines the broader exhibition security architecture.

The operational workflow is visible in current equipment documentation. For example, Christie's IMB-S4 guide explains that an operator can download the Security Manager certificate to send when requesting KDM keys. It separately identifies a Log Signer certificate. Dolby's cinema support material likewise treats equipment certificates, encrypted test content, and KDMs as routine operational artifacts.

This is device binding in a concrete form. The authorization is not merely “this theater may show this movie.” It is usable by the intended security equipment under the permitted conditions.

The result is a system in which:

```text
encrypted movie present
    does not imply
content key available
    does not imply
playback authorized now
```

The distinctions matter. They let the industry distribute a large encrypted asset through infrastructure that does not need access to its plaintext while reserving key use for a more tightly governed boundary.

## The projector is not the wallet

It is tempting to say that a digital wallet is like a cinema projector. That analogy is memorable and wrong in an important way.

The projector is principally the image-output device. The trusted security work is centered on the Media Block and the protected components within the cinema playback chain.

DCI defines a Media Block as a kind of Secure Processing Block that contains a Security Manager and performs media decryption. An Integrated Media Block participates in the projector-side playback chain. Other arrangements can place defined processing elsewhere. The Security Manager controls content-key delivery and the security relationships among the relevant protected components.

The better analogy is layered:

| Digital cinema | Digital identity wallet |
| --- | --- |
| Cinema server and playback software | Wallet application or Wallet Instance |
| Media Block and Security Manager | Trusted wallet application or secure cryptographic application |
| Secure Processing Block | Secure element, trusted execution environment, or HSM |
| Equipment certificate and protected private key | Wallet- or device-bound key |
| KDM | Narrowly scoped authorization—similar in shape, but not purpose, to a bound credential or signed authorization |
| Projector and protected output path | Presentation interface and disclosure channel |
| Security and playback logs | Transaction evidence |

Even this mapping is only an analogy.

The [EUDI Wallet Architecture and Reference Framework 2.9.0](https://eudi.dev/2.9.0/architecture-and-reference-framework-main/) makes the wallet side more precise. It distinguishes the Wallet Instance, a Wallet Secure Cryptographic Application, and a Wallet Secure Cryptographic Device. That cryptographic device might be local secure hardware, a smart card, an embedded secure element, or even a remote HSM. There is no single physical “wallet projector.”

The goals differ too. Cinema security primarily protects a rights holder's content from unauthorized use. A personal wallet must protect the holder's agency and privacy while giving a relying party enough evidence to make a decision. Selective disclosure, meaningful user approval, unlinkability, and data minimization are therefore central to wallet design in a way that does not map to movie playback.

The useful comparison is not about identical machinery. It is about boundaries.

## A key proves control, not trustworthiness

Device binding is often discussed as though it were one feature. It is better understood as a chain of claims.

First, a system can bind a credential or registration record to a public key. A fresh signed challenge can then show that the requester controls the corresponding private key. Audience and nonce binding can show that the proof was created for this transaction rather than replayed from another one.

[OpenID for Verifiable Credential Issuance 1.0](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html) supports proof of possession and key attestation during issuance. [OpenID for Verifiable Presentations 1.0](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html) binds presentation exchanges to the intended verifier and a transaction nonce.

Those mechanisms answer important questions:

```text
Is this the expected key?
Does the requester control it now?
Was this proof created for me and for this transaction?
```

They do not answer:

```text
Is the operating system uncompromised?
Is the key in certified hardware?
Will the application enforce the policy after authentication?
Can plaintext escape through an unprotected path?
```

Those are runtime-assurance questions. They require implementation controls and, where appropriate, attestation.

The [IETF RATS architecture](https://www.rfc-editor.org/rfc/rfc9334.html) keeps that separation clean. An Attester produces evidence. A Verifier appraises it against endorsements, reference values, and an evidence policy. The Verifier produces an attestation result. A Relying Party then applies its own policy to decide whether to authorize the requested operation.

That sequence is more disciplined than treating “attested” as a magic adjective. Attestation contributes evidence about a runtime. It does not replace authorization, and it does not make the attester's own claims automatically trustworthy.

## Strong machine binding is not a universal wallet requirement

The cinema case also exposes a privacy boundary.

A managed Media Block is organizational equipment. It has an installation, an operator, a certificate lifecycle, maintenance events, and a reason to be recognized consistently. Stable machine identity is useful because the equipment is meant to be managed and authorized as equipment.

A consumer wallet is different. A stable identifier disclosed across issuers and relying parties can become a tracking handle. The same binding that makes managed equipment accountable can make a person linkable.

Good identity architecture therefore should not ask whether device binding is universally good or bad. It should ask:

* What is being bound: a credential key, a session key, a wallet instance, or a managed machine?
* Who can observe the identifier?
* Is the binding stable across transactions or audiences?
* Can the proof demonstrate acceptable key protection without exposing a globally correlatable device identity?
* What lifecycle event revokes or replaces the binding?

For managed machines, persistent identity can be appropriate. For holder wallets, pairwise, selective, or short-lived mechanisms may provide the needed assurance with less correlation risk.

## What happens when someone records the screen?

Cinema's forensic model is instructive because it does not pretend prevention is perfect.

DCI requires forensic-marking capability in applicable Media Blocks. Marking is applied in the protected processing path after decryption and before clear output escapes that boundary. The mark can carry information useful for associating a recovered copy with a playback time and location.

Consider a camera capture in an auditorium. The forensic system does not necessarily detect the camera while the movie is playing. It does not identify the person holding it. Instead, an investigator who later obtains the recording may recover the embedded mark. Security and playback logs can then contribute context about what played, where, and when.

```text
recovered recording
    -> recover forensic mark
        -> derive time/location association
            -> correlate with cinema-domain logs
                -> support an investigation
```

That is evidence, not omniscience.

It also illustrates why authorization evidence and execution evidence should not be conflated. A KDM can establish that content keys were issued for specified equipment and a permitted interval. A log can claim that a playback event occurred. A recovered forensic mark can associate captured output with a showing context. None of those artifacts alone proves the entire story.

Current-version details matter here. [DCSS 1.5.0](https://www.dcimovies.com/announcements/) removed the former mandate for the Screen Management System to collect post-show Media Block playout reports within 24 hours. It would therefore be inaccurate to describe the modern architecture as producing one centrally collected proof package for every showing.

The broader principle survives:

> Design consequential operations so that later investigation has independent, appropriately scoped evidence.

## What identity systems should borrow

Cinema suggests six design rules for identity infrastructure.

### 1. Separate possession from authority

Holding an encrypted asset does not confer a content key. Holding a credential should not confer authority to disclose it to any requester for any purpose.

The transaction still needs an authenticated audience, a requested scope, applicable policy, and—where a person is involved—meaningful holder control.

### 2. Bind authorization to the intended key and transaction

A named device without proof of key control is only a database assertion. A signed proof without freshness is replayable. A fresh proof without audience binding may be redirected.

Strong binding connects the identity record, credential, controlled key, challenge, audience, and authorization decision.

### 3. Put sensitive operations inside the assured boundary

Cryptography is strongest when policy is enforced where the protected key is actually used. If an application can export the key or plaintext before applying the rule, a beautifully signed authorization message will not save the architecture.

Protocols can describe and verify evidence about a boundary. They cannot create tamper resistance by declaration.

### 4. Keep attestation and authorization separate

Attestation asks whether available evidence supports claims about the runtime's state. Authorization asks whether this principal may perform this operation on this resource in this context.

Combining them into one opaque “trusted device” flag makes both decisions harder to inspect and govern.

### 5. Keep domain enforcement in the domain

An identity protocol should not need to understand movie compositions to authenticate a Media Block. A cinema system should not outsource KDM semantics to a generic identity receipt.

The clean interface is a narrowly scoped identity decision consumed by a domain system that remains responsible for its own resource and operation.

### 6. Design evidence for its actual purpose

Authentication evidence, authorization receipts, runtime attestation, operational logs, and forensic marks have different producers, audiences, lifetimes, and privacy risks.

Calling all of them “audit data” hides the distinctions that make them useful.

## Technical sidebar: where Marty stops

The cinema thought experiment changed the Marty Identity Protocol, but not by turning Marty into a cinema protocol.

It exposed a missing identity abstraction: a managed, non-human runtime that can present credentials, prove control of a registered key, and optionally bind fresh attestation to the same identity.

Marty now addresses that gap with three domain-neutral parts:

* `MachineIdentity` represents a managed runtime and its identity-key lifecycle.
* `MachineAuthenticationPolicy` defines credential trust, proof-of-control, freshness, audience, replay, and optional attestation requirements.
* `AuthorizationDecisionReceipt` records a signed identity authorization decision, including an opaque external action and resource, policy digest, key binding, challenge, audience, and optional attestation-result digest.

A cinema integration can use them like this:

```text
1. Register the Media Block security runtime as a machine identity.
2. Require its credentials and a fresh proof of its registered key.
3. Appraise fresh runtime attestation when policy requires it.
4. Evaluate whether that machine may request an external KDM operation.
5. Issue a signed, audience-bound authorization decision receipt.
6. Let the cinema authorization service verify the receipt.
7. Let that service independently decide whether to issue the KDM.
```

The receipt is not a KDM. It contains no content key, CPL, show schedule, playback instruction, watermark payload, or recording determination.

That boundary is intentional:

| Marty owns | The cinema system owns |
| --- | --- |
| Machine identity and key lifecycle | DCP, CPL, and KDM semantics |
| Credential trust and proof of key control | Content keys and validity rules |
| Attestation-result appraisal | Playback and output protection |
| Identity authorization policy | Forensic marking and cinema logs |
| Signed authorization decision receipt | Recording attribution and investigation |

This design supports device binding without making cinema concepts part of the identity model. It also avoids forcing stable managed-machine identity onto ordinary holder wallets.

## The deeper lesson

Hollywood did not solve digital cinema security by hiding every copy of the movie. It made the valuable copy safe to distribute in encrypted form, separated content from authorization, bound key use to protected equipment and time, and retained evidence suited to later investigation.

Identity infrastructure can use the same architectural discipline without adopting the same business purpose.

A wallet is not merely a folder of credentials. A machine certificate is not proof of runtime integrity. An attestation result is not an authorization decision. An authorization receipt is not evidence that the protected operation completed correctly.

Strong systems make those boundaries visible.

The result is a better principle for both people and machines:

> Distribute portable artifacts broadly, authorize consequential use narrowly, enforce sensitive operations where the key is protected, and produce only the evidence the relying system actually needs.

That is what digital identity should learn from Hollywood.

## Editorial source notes

* [Digital Cinema Initiatives: current DCSS 1.5.0 specification page](https://www.dcimovies.com/dci-specification/)
* [Digital Cinema Initiatives: DCSS 1.5.0 and CTP 1.5.0 announcements](https://www.dcimovies.com/announcements/)
* [SMPTE current standards listing, including ST 430-1:2023](https://www.smpte.org/standards/recently-updated-documents)
* [Christie IMB-S4 User Guide, March 2026](https://www.christiedigital.com/globalassets/resources/public/020-103873-04-Christie-LIT-MAN-USR-IMB-S4.pdf)
* [Dolby cinema playback support](https://professional.dolby.com/support/cinema-playback/)
* [EUDI Wallet Architecture and Reference Framework 2.9.0](https://eudi.dev/2.9.0/architecture-and-reference-framework-main/)
* [OpenID for Verifiable Credential Issuance 1.0](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html)
* [OpenID for Verifiable Presentations 1.0](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)
* [RFC 9334: Remote ATtestation procedureS Architecture](https://www.rfc-editor.org/rfc/rfc9334.html)

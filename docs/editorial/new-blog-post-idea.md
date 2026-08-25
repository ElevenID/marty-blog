# What Digital Identity Can Learn from Hollywood

## Rebuilding Trust with Cryptographic Authorization Instead of Secrecy

**Document status:** Working outline
**Project:** Marty / ElevenID LLC
**Primary topic:** Lessons identity infrastructure can take from Digital Cinema Initiatives
**Audience:** Identity architects, security engineers, infrastructure teams, and technical decision-makers

## Editorial status after protocol update

The first complete publishable draft is now in [What Digital Identity Can Learn from Hollywood](what-digital-identity-can-learn-from-hollywood-draft.md), with a production-safe site-format copy in [`src/data/blogPostDrafts.js`](../../src/data/blogPostDrafts.js). The site-format module is intentionally excluded from production routes until publication is approved. The main article is vendor-neutral, uses camera capture as its recording scenario, and places Marty in a technical sidebar. The superseded protocol exploration later in this file is intentionally excluded from that draft.

The protocol direction is now settled: Marty remains identity- and secure-document-centric. Secure cinema is a stress test and integration example, not a new Marty application domain.

The current Marty proposal supplies three domain-neutral pieces:

* `MachineIdentity` for managed non-human runtimes and their identity keys
* `MachineAuthenticationPolicy` for credential trust, proof of key control, freshness, and optional attestation appraisal
* `AuthorizationDecisionReceipt` for a signed, audience-bound record of an identity authorization decision

The cinema system continues to own encrypted media, CPLs, KDMs, show schedules, playback enforcement, forensic marking, operational logs, and recording investigations. See [the research claim matrix](hollywood-identity-claim-matrix.md) and [the non-normative cinema integration walkthrough](secure-cinema-marty-integration-walkthrough.md) before turning this outline into prose.

---

## Working Thesis

Hollywood faced a problem that identity systems increasingly face:

> How can a valuable digital asset be distributed widely while retaining cryptographic control over who may use it, when they may use it, where it may be used, and what evidence must be produced afterward?

Digital Cinema Initiatives did not solve this problem by making movie files impossible to copy.

It solved the problem by separating:

```text
Asset possession
```

from:

```text
Authorization to decrypt and use the asset
```

The encrypted movie may travel through satellite broadcasts, managed networks, physical drives, theater storage systems, and other environments that cannot all be treated as trusted.

The authorization remains separately controlled.

This article argues that identity infrastructure should adopt the same architectural discipline:

> Distribute protected objects broadly. Bind authorization narrowly. Release keys only inside trusted runtimes. Produce verifiable evidence of use.

Marty may be able to express parts of this model using machine identity, trust profiles, policy-bound credentials, and integration with external key management systems. However, the current Marty specification does not define all of these concepts explicitly, and this article treats them as **proposed abstractions or extensions**, not guaranteed features of the protocol.

---

# 1. Hollywood’s Distribution Problem

## 1.1 The economic problem

A major theatrical release must be delivered to thousands of cinemas before or during a tightly controlled release window.

The studio needs each theater to receive a complete, high-quality copy of the film.

The asset may be:

* Hundreds of gigabytes
* Worth hundreds of millions of dollars
* Required in multiple languages and formats
* Delivered before the public release date
* Stored locally before it is authorized for playback
* Copied internally between theater systems
* Accessible to technicians and vendors
* Transported across networks the studio does not directly control

The same asset must be delivered efficiently to many recipients without creating a separately encrypted full-size copy for every auditorium.

Critically, Hollywood did not rely on network secrecy alone. Instead, it relied on **certified secure hardware execution environments**.

The trusted playback boundary can include:

* A Media Block (MB), including an Integrated Media Block (IMB) or Outboard Media Block (OMB)
* One or more Secure Processing Blocks (SPBs) governed by a Security Manager (SM)
* Hardware-protected private keys
* Tamper-resistant design
* Trusted clock sources
* Controlled output paths
* Compliance with DCI certification requirements

These systems are tested and certified against strict specifications. The trust model assumes:

```text
Only certified hardware runtimes are allowed to use content keys.
```

This is not optional. Without certified execution environments, the entire model collapses.

This introduces an important consideration for Marty:

> Marty can represent identities and credentials, but it does not itself define or enforce certified execution environments. Any such guarantees must come from external systems and be represented, not implemented, by the protocol.

## 1.2 The bootlegger problem

Before modern digital cinema controls, valuable copies could leak through several paths:

* Duplication during manufacturing or distribution
* Theft of physical media
* Insider access
* Unauthorized projection
* Recording from a theater screen
* Compromise of post-production or distribution systems
* Copying content from projection equipment
* Misuse outside the contracted exhibition window

Digital distribution added another concern:

```text
Perfect copies can be made without degrading the original.
```

In abstract terms:

```text
Possession of encrypted content does not imply authorization to use it.
```

The encrypted asset itself doesn’t grant authorization. Once a plaintext digital master or exhibition copy escapes, it can be duplicated indefinitely.

## 1.3 The wrong security goal

A naïve security requirement would be:

> Prevent anyone from obtaining a copy of the movie.

That is not realistic.

The film must be replicated, transported, cached, stored, verified, and moved between systems.

Hollywood instead adopted a more achievable security goal:

> Allow copies of the encrypted asset to exist, while preventing unauthorized systems from obtaining or using the decryption keys.

This is the central architectural lesson.

---

# 2. The Guarantees Hollywood Needed

The DCI model can be understood as a set of cryptographic guarantees.

These guarantees are more useful than thinking only in terms of projectors, cinema servers, and movie files.

---

## Guarantee 1: Possession must not imply authority

In abstract terms:

```text
Encrypted resources are not capabilities.
Authorization must be granted separately.
```

---

## Guarantee 2: Authorization must be bound to a specific runtime

In abstract terms:

```text
Authorization must be bound to a specific, identifiable runtime.
```

How that runtime identity is represented (certificate, DID, attestation token, etc.) is an implementation detail not defined by DCI itself.

---

## Guarantee 3: Authorization must be time-bound

In abstract terms:

```text
Authorization includes validity constraints enforced at key-use time.
```

This depends on a trusted notion of time within the runtime environment.

---

## Guarantee 4: Authorization must not be transferable

In abstract terms:

```text
Authorization is bound to:
- A specific runtime
- A specific resource
- A specific issuer
```

---

## Guarantee 5: Compromised delivery must not compromise the asset

In abstract terms:

```text
Encrypted assets may be publicly observable.
Security depends on protecting keys and controlling their use.
```

---

## Guarantee 6: Modifications must be detectable

In abstract terms:

```text
Integrity and authenticity of resources must be verifiable.
```

---

## Guarantee 7: Use must produce evidence

In abstract terms:

```text
Systems should produce verifiable records of authorization and use.
```

DCI defines logging requirements, but the exact format and cryptographic structure of evidence varies by implementation.

---

## Guarantee 8: Leaked recordings should be attributable

In abstract terms:

```text
Output may include forensic marking to support attribution.
```

This is a DCI requirement, but it is implemented at the hardware and media-processing level, not as a general-purpose identity protocol feature.

This raises an important distinction:

> Marty does not currently define watermarking or output-marking mechanisms. These would need to be modeled as external capabilities if represented at all.

---

# 3. The DCI Architecture

## 3.4 Media Block and its secure processing boundary

The Media Block—especially its Security Manager and Secure Processing Blocks—is the trusted processing boundary. The projector is principally the image-output device; an IMB may place the Media Block inside it.

It is responsible for:

* Holding the device private key
* Validating the authorization
* Verifying issuer trust
* Checking resource relationships
* Enforcing the validity window
* Unwrapping content keys
* Decrypting protected essence
* Protecting the plaintext output path
* Producing security logs
* Supporting forensic watermarking

Most importantly:

> It is a **certified hardware execution environment**, not just a software process.

This is where DCI goes beyond most identity systems.

---

# 4. The Digital Wallet and the Cinema Playback Boundary

A useful comparison is between a digital identity wallet and the hardware used to play a digital movie.

The analogy should not be stated simply as:

```text
Wallet = projector
```

A projector is mainly the final output device. The closer comparison is:

| Digital cinema | Digital identity |
| --- | --- |
| Cinema server and playback software | Wallet application |
| Media Block and Security Manager | Wallet Secure Cryptographic Application (WSCA) or equivalent trusted wallet component |
| Secure Processing Block | Wallet Secure Cryptographic Device (WSCD), secure element, trusted execution environment, or HSM |
| Device certificate and protected private key | Device-bound wallet key and wallet/runtime identity |
| Key Delivery Message (KDM) | Signed, audience-bound authorization or credential |
| Composition Playlist (CPL) and encrypted content | Credential, presentation request, and governed resource |
| Projector and protected output path | Wallet user interface and presentation channel |
| Playback security log | Signed presentation, transaction record, or execution evidence |

The secure playback boundary does not infer authorization merely because encrypted content is present. The cinema security system validates whether key delivery applies to the intended equipment, composition, and validity interval, then makes content keys available only inside the protected processing boundary.

A wallet can follow a similar pattern. Possessing a credential should not automatically authorize every use of it. The wallet can hold a device-bound key, verify who is requesting a presentation, evaluate the requested claims and applicable policy, obtain meaningful holder consent, and produce a narrowly scoped cryptographic presentation.

The comparison becomes particularly useful at the hardware boundary:

```text
Wallet application
    coordinates the interaction

Secure element or trusted execution environment
    protects keys and performs sensitive cryptographic operations

Presentation channel
    delivers only the authorized output
```

That resembles:

```text
Cinema playback software
    coordinates playback

Media Block security boundary
    protects keys and decrypts content under authorization

Projector and protected media path
    render only the authorized output
```

The systems are not equivalent, however. DCI can require a comparatively uniform, certified, tamper-resistant exhibition environment. Digital wallets run across heterogeneous consumer devices, and not every wallet has equivalent hardware isolation, trusted time, attestation, or protected output. A phone screen is also not a protected output path in the DCI sense.

There is an important difference in purpose as well. Cinema hardware protects a rights holder's asset from the operator and audience. A digital wallet should protect the holder's agency and privacy while allowing a verifier to establish that an acceptable claim was presented. Consent, selective disclosure, unlinkability, and data minimization therefore matter in the wallet case in ways that do not map directly to movie playback.

The lesson for identity infrastructure is not that every wallet should become a DCI projector. It is that protocols should distinguish among:

* The object being possessed
* The key and runtime authorized to use it
* The policy governing a particular operation
* The output released by that operation
* The evidence that the operation occurred correctly

This comparison gives the article a concrete bridge from Hollywood's machinery to identity architecture:

> A digital wallet is not merely a folder containing credentials, just as a digital cinema system is not merely a hard drive containing movies. Both are policy-enforcement endpoints whose strongest guarantees depend on where keys live, how authorization is bound, and what can leave the trusted boundary.

---

# 5. DCI Expressed in Marty Language

The key observation is:

> DCI can be interpreted as a machine-identity and authorization system, but its guarantees depend heavily on hardware certification and operational controls that are outside the scope of most identity protocols.

Any mapping to Marty terminology should be understood as **conceptual**, not normative.

---

# 10. Security Boundary

A protocol cannot make an ordinary untrusted application behave like a certified Media Block security boundary merely by giving it a credential.

This is where careful distinction is required:

```text
Marty can represent identities, credentials, and policies.
It does not itself guarantee runtime security properties.
```

If a system requires:

* Hardware-backed key protection
* Trusted execution
* Output protection
* Watermarking
* Certification status

then those must be provided by external systems and only referenced or described within Marty-based interactions.

---

# 14. Important Qualification

The strongest DCI guarantees depend on:

* Certified hardware
* Tamper resistance
* Secure key storage
* Protected media processing
* Trusted time
* Controlled output paths
* Compliance testing
* Operational security
* Forensic watermarking

Marty can potentially model relationships between identities, issuers, and policies involved in such a system.

But:

> Marty does not, by itself, implement or enforce hardware assurance, watermarking, or runtime security guarantees.

Any claim that it does should be treated as a proposed extension or integration, not a current capability.

---

# 21. Current Direction

The article should not become a generic “Hollywood uses encryption” explainer.

Its distinctive contribution should be:

1. Pose Hollywood’s requirements as cryptographic guarantees
2. Show that DCI is a machine-identity and authorization architecture
3. Translate DCI components into conceptual identity abstractions
4. Clearly distinguish between what Marty defines today and what would require extensions
5. Separate protocol guarantees from hardware-assurance guarantees
6. Propose a credible path for integrating identity protocols with secure runtime environments

The core architectural sentence remains:

> Distribute encrypted resources broadly, issue authorization narrowly, enforce policy where the key is used, and retain evidence appropriate to the operation and threat model.

# Current Marty protocol direction

The cinema thought experiment led to a deliberately narrow protocol change. Marty identifies and authenticates the machine, can require fresh key-bound attestation, makes a domain-neutral authorization decision, and signs a receipt for an external relying system.

Marty does **not** issue or model a KDM, schedule a showing, decrypt content, control playback, watermark output, decide whether a recording occurred, or model a forensic investigation. Those are cinema-domain responsibilities.

Device binding is strengthened rather than replaced: the machine proves control of its registered identity key; any required attestation must bind to that same identity; the authorization receipt records the key thumbprint, challenge, audience, replay check, policy digest, and attestation-result digest. Ordinary holder-wallet privacy remains separate, and consumer wallets are not forced to expose a stable machine identifier.

The resulting separation is:

```text
Marty
    machine identity
    credential trust and key-control proof
    attestation-result appraisal
    identity authorization policy
    signed authorization decision receipt

Cinema system
    DCP/CPL/KDM semantics
    content keys and validity rules
    show scheduling and playback
    forensic marking and security logging
    recording attribution and investigation
```

---

# Archived protocol exploration (superseded; retained as design notes)

The material below predates the accepted identity-centric design. It is retained to preserve the reasoning trail, but its proposed `ExecutionObligation`, `ControlResult`, and `RuntimeRegistration` additions are **not** the current Marty direction. The adopted model uses `MachineIdentity`, `MachineAuthenticationPolicy`, and `AuthorizationDecisionReceipt`, while all cinema execution controls and evidence remain external.

## Recommendation

**Do not add `FlowAssuranceProfile` as a new first-class Marty entity—not yet.** The previous proposal over-modeled the problem.

The concern is valid because that profile attempted to own all of these at once:

* Policy conditions
* Runtime capabilities
* Attestation requirements
* Mandatory execution effects
* Evidence formats
* Failure handling
* Compliance requirements
* Per-execution results

Those concerns already belong to different Marty abstractions and have different lifecycles. Putting them into another reusable profile would create precedence rules such as:

```text
Which requirement wins?

ComplianceProfile
vs.
FlowAssuranceProfile
vs.
DeploymentProfile
vs.
PolicySet
vs.
the signed authorization
```

That is more complexity than the watermarking use case presently justifies.

The cleaner conclusion is:

> **Assurance is a result derived from configuration, authorization, enforcement, and evidence. It is not necessarily a separate configuration entity.**

---

# A smaller model

Marty likely needs one small embedded concept:

```text
ExecutionObligation
```

or, using less policy-specific language:

```text
RequiredControl
```

It would be a reusable JSON structure, not an independently created, versioned, CRUD-managed profile.

For example:

```yaml
required_controls:
  - control_id: "urn:mip:control:forensic-watermark:v1"
    phase: "DURING"
    executor: "TRUSTED_RUNTIME"

    parameters:
      media: ["image", "audio"]

    required_evidence:
      type: "SIGNED_RUNTIME_EVENT"

    on_failure: "DENY"
```

That control can be carried by the authorization governing an individual operation. The other parts of Marty retain their existing responsibilities.

---

# Where each concern should belong

| Concern                                                                          | Best owner                                                  |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Which issuer, manufacturer, attestation verifier, or evidence signer is trusted? | `TrustProfile`                                              |
| Which controls a standard requires by default                                    | `ComplianceProfile`                                         |
| Which controls a deployed endpoint is capable of performing                      | `DeploymentProfile` or runtime registration                 |
| Whether the operation is authorized                                              | `PolicySet`                                                 |
| What mandatory effects accompany authorization                                   | Signed authorization or policy-decision `required_controls` |
| In what order protocol activity occurs                                           | `Flow`                                                      |
| What happened during this execution                                              | `FlowExecution`                                             |
| Device measurements and runtime evidence                                         | External attestation evidence, such as RATS/EAT             |
| Whether the supplied evidence is acceptable                                      | Existing policy evaluation                                  |
| Overall assurance conclusion                                                     | Derived execution result                                    |

This is consistent with established policy systems. XACML returns obligations together with an authorization decision and requires the enforcement point to understand and discharge mandatory obligations before allowing access. ODRL similarly places duties on permissions instead of creating a separate “assurance profile” for them. ([OASIS Open Documents][1])

RATS also supports the decomposition: an Attester produces Evidence, a Verifier appraises it, and the Verifier produces an Attestation Result for a Relying Party. It does not collapse runtime configuration, policy, evidence, and the relying-party decision into one monolithic object. ([RFC Editor][2])

---

# DCI watermarking under the smaller model

The DCI case separates naturally into three existing concerns.

## 1. Deployment capability

The theater runtime declares—or preferably proves—that it supports forensic marking:

```yaml
deployment_profile:
  runtime_capabilities:
    - capability_id: "urn:mip:control:forensic-watermark:v1"

      attestation:
        evidence_format: "EAT"
        verifier_trust_profile_id: "runtime-attestation-trust"
```

This belongs to the deployment/runtime side because it describes **what the endpoint can do**.

Marty’s current `DeploymentProfile` already represents the operational configuration of a physical or logical endpoint and includes network mode, key-access mode, updates, and audit behavior. Runtime capabilities are a natural extension of that responsibility.

## 2. Per-playback obligation

The signed key authorization carries the requirement for this particular resource use:

```yaml
key_authorization:
  resource_id: "movie-123"
  runtime_id: "media-block-456"

  valid_from: "2026-07-24T00:00:00Z"
  valid_until: "2026-08-07T23:59:59Z"

  required_controls:
    - control_id: "urn:mip:control:forensic-watermark:v1"
      phase: "DURING"
      parameters:
        image: true
        audio: true
      required_evidence:
        type: "SIGNED_RUNTIME_EVENT"
      on_failure: "DENY"
```

This belongs in the authorization because it is:

* Resource-specific
* Runtime-specific
* Time-specific
* Potentially subject to a signed exception
* Cryptographically protected against alteration

There is no need to resolve a separate `AssurancePlan` if the signed authorization already contains the effective controls. `FlowExecution` only needs to snapshot the authorization or its digest.

## 3. Execution result

The runtime reports what happened:

```yaml
flow_execution:
  authorization_digest: "sha256:..."

  control_results:
    - control_id: "urn:mip:control:forensic-watermark:v1"
      status: "SATISFIED"
      executor: "media-block-456"
      completed_at: "2026-07-25T19:02:11Z"
      evidence_ref: "urn:uuid:evidence-789"
```

This belongs in `FlowExecution` because it is execution state, not reusable configuration.

The existing FlowExecution already records current steps, step results, context, completion time, and error state. It should be extended with a typed result structure rather than surrounded by another top-level planning entity.

---

# What should remain unchanged

I would **not** merge the primary existing abstractions. They are mostly separated along useful axes.

## TrustProfile should remain separate

Trust changes independently from workflow and deployment:

* Root certificates rotate.
* Issuers are revoked.
* Attestation verifiers change.
* Trust lists are refreshed.

Marty explicitly designed Trust Profiles to enumerate trust sources so that changes are auditable.

## PolicySet should remain separate

Business authorization changes independently from protocol sequencing:

* Which organization may act
* Which resource may be accessed
* Under which conditions
* Whether a waiver is accepted

The current PolicySet is explicitly an allow/deny authorization abstraction using Cedar. It should decide whether an operation is authorized; the enforcement runtime should perform the resulting controls.

## Flow should remain orchestration-only

A Flow should continue answering:

```text
What operation is occurring?
What steps occur?
What happens after success or failure?
```

It should not become the canonical location for device capabilities, trust roots, forensic-marking implementations, or evidence-appraisal rules.

Marty’s Flow currently serves as a reusable orchestration template with protocol-defined sequences and optional integration hooks. That boundary is coherent.

## DeploymentProfile should remain the operational context

It should answer:

```text
Where is this running?
Which endpoint is involved?
What capabilities and operating modes are required?
```

This is where required runtime capabilities and attestation configuration should be added.

---

# Two existing abstractions worth tightening

Although the main entities should not be merged, two naming and boundary changes would reduce future overlap.

## 1. Consider renaming `ComplianceProfile`

The current `ComplianceProfile` mainly describes:

* Credential format
* Issuance protocol
* Issuer artifact requirements
* Trust-profile compatibility
* Required API surface
* Standards references

That is closer to:

```text
ProtocolProfile
```

or:

```text
ConformanceProfile
```

than a broad statement of operational compliance.

`ConformanceProfile` would be the better name because it means:

> An implementation claiming this profile must support these protocol rules and interfaces.

That leaves “assurance” available as an outcome without creating semantic conflict.

## 2. Rename `TrustProfile.compliance_status`

The current TrustProfile uses:

```text
COMPLIANT
NEEDS_ATTENTION
SETUP_REQUIRED
```

That field is operational validation state, not the definition of cryptographic trust itself.

A clearer name would be:

```text
validation_status
```

or:

```text
configuration_status
```

This avoids three different uses of “compliance”:

* A Compliance Profile
* A Trust Profile’s compliance status
* Runtime evidence that requirements were followed

---

# The device/runtime boundary may need the real refactor

The current `DeviceRegistration` is centered on a user’s mobile or web device, notification delivery, FCM/SSE identifiers, and optional challenge-response keys. It is not a good natural representation of a Media Block security runtime, HSM-backed workload, industrial machine, or attested AI runtime.

If secure machine runtimes become an important Marty domain, the more justified new entity would be:

```text
RuntimeRegistration
```

It would have a genuinely independent lifecycle:

* Provision
* Identify
* Certify
* Attest
* Assign to deployment
* Rotate keys
* Suspend
* Revoke
* Replace

That is a much cleaner first-class entity than `FlowAssuranceProfile`.

A possible future boundary would be:

```text
RuntimeRegistration
Actual runtime identity, keys, capabilities, and attestation

DeploymentProfile
Desired configuration and required capabilities for a location

NotificationTarget
Message-routing information only
```

For the DCI article and initial prototype, this can remain an external runtime registry. Marty core does not need to add it immediately.

---

# Revised minimal protocol change

I recommend limiting the experimental change to two embedded schema types.

## `ExecutionObligation`

```yaml
execution_obligation:
  control_id: "urn:mip:control:forensic-watermark:v1"
  phase: "DURING"
  executor: "TRUSTED_RUNTIME"
  parameters: {}
  required_evidence:
    type: "SIGNED_RUNTIME_EVENT"
  on_failure: "DENY"
```

## `ControlResult`

```yaml
control_result:
  control_id: "urn:mip:control:forensic-watermark:v1"
  status: "SATISFIED"
  evidence_refs:
    - "urn:uuid:evidence-id"
  evaluated_at: "2026-07-25T19:02:12Z"
```

These are **value objects**, not independent platform resources.

They do not need:

* CRUD APIs
* Their own database table
* A separate status lifecycle
* A separate profile-selection interface
* Complex merge rules

A JSON Schema definition under `$defs` would initially be sufficient.

---

# Effective decision model

The runtime decision becomes:

```text
1. Is the operation authorized?
2. Is the authorization signature valid?
3. Is the resource and runtime binding valid?
4. Can the runtime perform every mandatory control?
5. Is required capability evidence acceptable?
6. Can the runtime commit to producing the required execution evidence?

If all are true:
    proceed

Otherwise:
    deny
```

After execution:

```text
7. Did each required control produce valid evidence?

If yes:
    execution completed with controls satisfied

If no:
    execution failed, indeterminate, or requires investigation
```

This preserves the distinction between:

```text
Authorization decision
```

and:

```text
Control satisfaction
```

without creating a new assurance subsystem.

---

# When a first-class profile would become justified

Promote the embedded controls to a reusable `ControlProfile` only after several of these conditions are true:

1. The same groups of controls are reused across many unrelated flows.
2. Control sets have independent owners and approval workflows.
3. They require independent versioning and deprecation.
4. Organizations need to discover and negotiate named control profiles.
5. Conformance testing applies to the entire set rather than individual controls.
6. Inline control lists create material duplication.
7. Three or more distinct domains—not just DCI—demonstrate the same composition requirements.

Until then:

> **Inline the obligation, reference the runtime capability, record the result, and keep assurance as a derived conclusion.**

## Revised architectural sentence

The previous four-layer formulation should be replaced with:

> Trust says whose assertions are accepted. Policy says what is permitted. Flow says what happens next. An execution obligation says what the enforcement point must do before proceeding. Evidence says what it claims to have done.

For the blog post, Marty should be described as capable of **carrying runtime-bound obligations and evaluating evidence through extensions**, not as needing or already possessing a broad new “Flow Assurance” layer.

[1]: https://docs.oasis-open.org/xacml/3.0/xacml-3.0-core-spec-cos01-en.html?utm_source=chatgpt.com "eXtensible Access Control Markup Language (XACML) Version 3.0"
[2]: https://www.rfc-editor.org/rfc/rfc9334.html?utm_source=chatgpt.com "RFC 9334: Remote ATtestation procedureS (RATS) Architecture"

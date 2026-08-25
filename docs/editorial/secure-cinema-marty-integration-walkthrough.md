# Secure Cinema with Marty: Non-Normative Integration Walkthrough

**Status:** Editorial example, not a cinema specification
**Purpose:** Demonstrate the Marty identity boundary without importing cinema-domain entities into the protocol.

## Scope

Marty authenticates and authorizes a managed machine. An external cinema authorization service owns all cinema semantics and enforcement.

```text
Marty identity plane
    MachineIdentity
    MachineAuthenticationPolicy
    credential and trust validation
    fresh proof of machine-key control
    optional attestation-result appraisal
    MACHINE_AUTHORIZATION policy
    signed AuthorizationDecisionReceipt

Cinema domain plane
    DCP and CPL
    KDM request and issuance
    content keys and validity intervals
    show schedule
    playback and output protection
    forensic marking and operational logs
    recording investigation
```

The receipt crosses the boundary. Content keys, KDM payloads, watermark data, and playback instructions do not.

## Example actors

* **Managed runtime:** an organization-registered Media Block security runtime.
* **Marty service:** authenticates the runtime and issues an authorization decision receipt.
* **Attestation verifier:** appraises platform-specific evidence and returns a result.
* **Cinema authorization service:** understands CPLs, equipment eligibility, booking windows, and KDM semantics.
* **Playback system:** enforces the KDM and cinema security rules.

The Media Block terminology is illustrative. Marty sees only a `MachineIdentity` whose type is `SECURE_PROCESSING_RUNTIME`.

## Preparation

### 1. Register the machine identity

The operator registers:

* A stable organization-scoped `machine_id`
* One or more active identity keys and SHA-256 thumbprints
* Relevant machine credentials
* Deployment and site associations
* Attestation key identifiers, evidence formats, and endorsement references when applicable

The machine identity record does not contain a CPL, KDM, show schedule, content key, or watermark configuration.

### 2. Configure machine authentication

A `MachineAuthenticationPolicy` specifies:

* Accepted machine credential types and trust profile
* Allowed machine types
* Permitted binding methods
* Required proof profiles
* Challenge, audience, age, and replay requirements
* Whether attestation is required
* Accepted attestation-result formats and verifier trust
* The `MACHINE_AUTHORIZATION` policy set to evaluate

Requiring both proof of the machine key and attestation bound to that identity key avoids two weak constructions:

* a valid credential presented by a party that does not control the registered key;
* valid platform evidence replayed for a different machine identity.

## Per-request flow

```text
Media Block runtime        Marty / verifier           Cinema authorization service
        |                         |                                 |
        |  1. KDM authorization request                             |
        |------------------------>|                                 |
        |                         |                                 |
        |  2. fresh challenge + audience                            |
        |<------------------------|                                 |
        |                         |                                 |
        |  3. credentials + signed challenge + attestation          |
        |------------------------>|                                 |
        |                         |                                 |
        |                         | 4. validate trust and key control
        |                         | 5. appraise attestation result
        |                         | 6. evaluate identity policy
        |                         | 7. sign decision receipt
        |                         |                                 |
        |                         | 8. receipt                       |
        |                         |-------------------------------->|
        |                         |                                 |
        |                         |    9. verify receipt and apply
        |                         |       cinema-domain policy
        |                         |   10. issue or reject KDM
```

### Step 1: Request identity authorization

The external system asks whether this machine identity may perform an opaque operation on an opaque resource:

```text
principal_id = urn:example:machine:media-block-456
action       = urn:example:cinema:action:request-kdm
resource_id  = urn:example:cinema:cpl:movie-123
audience     = https://kdm.example.test
```

The identifiers are meaningful to the cinema service. Marty stores and signs them but does not interpret CPL or KDM semantics.

### Steps 2–3: Prove freshness and binding

Marty supplies a fresh challenge and the intended audience. The runtime returns:

* Required machine credentials
* A signature over the challenge using the registered identity key
* Audience and transaction binding
* Platform evidence, when required

An attestation verifier appraises the platform evidence using its own endorsements, reference values, and appraisal policy. Marty consumes the resulting attestation result; it does not define TPM, EAT, TEE, or cinema certification evidence.

### Steps 4–6: Make the identity decision

Marty verifies:

1. The `MachineIdentity` is active.
2. The presented credentials satisfy the configured trust purpose.
3. The runtime controls the registered key.
4. The proof is fresh, audience-bound, and not replayed.
5. Required attestation is fresh, acceptable, and bound to the same identity key.
6. The `MACHINE_AUTHORIZATION` policy permits the machine principal, opaque action, resource identifier, and context.

This answers an identity question:

> Is this authenticated, policy-eligible machine allowed to request this external operation?

It does not answer the cinema question:

> Should a KDM with particular keys, compositions, equipment recipients, and validity intervals be issued?

### Step 7: Issue a signed decision receipt

For a permit decision, the receipt records:

* Machine principal and opaque operation/resource identifiers
* `PERMIT` or `DENY`
* Policy-set identifier and version digest
* Binding method and machine-key thumbprint
* Challenge, audience, and replay-check result
* Attestation-result digest when attestation was used
* Issue and optional expiry times
* External correlation references
* Marty issuer signature

The receipt must not embed domain payloads, content keys, or execution instructions.

### Steps 8–10: Apply cinema-domain policy

The cinema authorization service verifies:

* The Marty receipt signature and trusted issuer
* Audience and expiry
* Expected action and resource identifier
* Transaction correlation
* The permitted machine identity and key binding
* Any local replay or one-time-use rule

It then independently checks cinema rules such as booking, territory, composition, equipment certificates, content-key availability, and authorized time window. Only that service creates or releases a KDM.

A valid Marty receipt is therefore necessary only when the cinema integration policy says it is. It is never sufficient by itself to authorize playback.

## Showing, logs, and possible recording

Playback happens entirely outside Marty:

1. The playback system validates and enforces the KDM.
2. The protected cinema runtime decrypts and processes content.
3. Cinema-defined forensic marking and security logging operate according to the applicable specification and implementation.
4. A suspected recording is analyzed by cinema-domain forensic systems.
5. Recovered mark data and operational logs may associate the recording with a time, location, or equipment context.

Marty does not receive a “recording occurred” event and does not decide attribution. If an investigation later needs to authenticate a managed machine or authorize access to a secure document, that is a separate Marty identity transaction.

DCSS 1.5.0 removed the former mandate for the Screen Management System to collect post-show Media Block playout reports within 24 hours. The integration must therefore avoid assuming that one centrally collected log record exists for every showing.

## Device-binding effect

This design supports device binding for managed machines:

```text
machine record
    -> registered identity-key thumbprint
        -> fresh proof of key control
            -> attestation bound to the same identity
                -> authorization receipt bound to key, audience, and challenge
```

It does not require the physical device identifier itself to appear in a KDM. The cinema service decides how the Marty principal and key thumbprint correspond to its recipient-equipment model.

The design also avoids making managed-machine binding the default for ordinary holder wallets. A cinema runtime is organizational equipment with an explicit lifecycle; a consumer wallet has materially different privacy and correlation risks.

## Failure behavior

Marty returns or records `DENY` when identity requirements fail. The external service must fail closed when:

* The receipt signature, audience, or expiry is invalid
* The requested action or resource does not match
* The receipt cannot be correlated to the request
* The machine or key has been suspended, revoked, rotated, or retired
* Required attestation is stale or unacceptable
* Cinema-domain eligibility cannot be established

Revocation and key rotation require explicit operational design. A cached permit receipt must not silently outlive its `expires_at`, and the cinema service may impose a shorter lifetime or one-time-use rule.

## What this example proves

The integration demonstrates a reusable identity pattern:

> Authenticate a managed machine, prove control of its key, optionally appraise its current runtime state, make a narrowly scoped identity decision, and let the domain system enforce its own operation.

Cinema is a demanding test of that pattern. It is not a reason for Marty to become a media-rights, playback, watermarking, or investigation protocol.

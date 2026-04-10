# Verifier Infrastructure

*A serious verifier is not just a signature checker. It is a runtime stack of trust synchronization, status caching, policy evaluation, audit, and failure handling. This post explains what that stack actually looks like.*

A verifier is easy to oversimplify in a diagram.

One box. One API. One green checkmark.

The real system is heavier than that.

A production verifier has to ingest trust material, keep issuer state current, cache revocation and status information, evaluate policy, record evidence, expose health signals, and decide what to do when freshness fails before the queue does. The cryptographic check is still essential. It is not the whole infrastructure.

That is why verifier design matters so much in Marty. If the runtime only knows how to verify a signature, it still does not know whether the signer counts, whether the registry is stale, whether the status data is current enough, or whether the local operator should fail closed or narrow acceptance. A verifier becomes credible only when those questions are part of the system, not left to operator folklore.

## A verifier needs a trust and policy control plane

Before a verifier can make a single live decision, it needs a control plane that tells it what kind of trust world it is operating in.

Marty's trust-profile service makes that boundary explicit. A `Trust Profile` carries trust sources, validation rules, allowed algorithms, revocation behavior, time policy, supported formats, and optional issuer allow or deny rules. That is already more than a certificate bucket. It is the contract that tells the verifier which ecosystems count and how strictly they should be evaluated.

The control plane usually has to manage more than one kind of object.

It needs trust-source definitions such as `TRUST_LIST`, `ROOT_CA`, `PKD_URL`, or `PINNED_ISSUER`. It needs issuer records with compliance status, validity windows, and trust-anchor linkage. It needs trust-profile-to-issuer relationships with trust level and relationship state. It often needs framework overlays so one organization can narrow a broader system profile without rewriting the shared trust base.

That is why verifier infrastructure should be thought of as a stack, not a library call.

A serious verifier needs a way to ingest governance state, a way to shape local trust rules, and a way to bind those rules to the runtime that actually evaluates credentials. Without that control plane, every verifier instance ends up rediscovering the same issuer and policy world by hand.

## Scale depends on caches, snapshots, and sequence discipline

Once the control plane exists, the next problem is how trust and status state actually reaches the verifier fleet.

This is where verifier infrastructure stops sounding abstract.

Marty's trust-services architecture treats trust as synchronized data. It separates tables and caches for trust anchors, document-signer certificates, CRL state, revoked certificates, master lists, and trust snapshots. That is a good reminder that a verifier does not run on one magical trust blob. It runs on several related forms of current state.

The registry surface reflects the same design. Sync endpoints expose sequence numbers and sync tokens so a verifier can request a full snapshot on first load and deltas later. Status endpoints expose counts for current entries and anchor classes so operators can tell whether a verifier fleet is still aligned with the expected trust base. That sounds operational because it is.

Edge and field runtimes make the same point even more strongly.

A gate device or mobile verifier rarely wants a live database dependency in the decision path. It wants signed or otherwise approved trust snapshots it can cache, validate, and use locally until the next refresh window. That is why trust snapshots, cache lifetimes, and delta sync are verifier features rather than background conveniences.

Even the low-level verification layer reflects this need for structure. Marty's trust-registry abstraction supports filtering anchors by purpose and jurisdiction and finding issuers within the accepted trust set. In other words, the runtime is not only doing signature math. It is navigating a governed trust inventory.

That is the core scaling lesson. Verifier infrastructure depends on synchronized state, not just cryptographic primitives.

## Metrics and failure handling are part of the verifier

The final infrastructure layer is what happens when the environment stops being ideal.

Trust refresh fails. Revocation data ages out. A registry sync lags behind. One site falls offline while another stays current. If the verifier only knows how to say "valid" or "invalid," the operator is blind at exactly the moment the system becomes risky.

That is why health signals and failure policy belong inside the verifier itself.

A verifier should be able to report which registry sequence it is on, how many active trust entries it holds, whether its trust snapshot is current, whether revocation data is inside freshness bounds, and which mode it is operating in. Normal, aging, degraded, and fail-closed are runtime states, not mere incident notes.

The same principle applies to audit.

A verification result should not end at "signature passed." The runtime needs enough structure to say whether the issuer was recognized, whether the credential was current, whether policy accepted the claims, and whether the decision happened under normal or degraded trust conditions. That is what turns verification into an inspectable operational function instead of a black box.

This is also where verifier infrastructure meets `Deployment Profiles`. The trust and policy control plane may be global, but the runtime envelope is still local. An online API gateway, an airline lane, and a handheld field device may all use the same trust model while exposing very different cache windows, operator interfaces, and failure ladders.

That is the cleanest way to summarize the object.

Verifier infrastructure is the runtime stack that turns shared trust and local policy into live decisions: synchronized registries, trust-anchor caches, status artifacts, policy evaluation, audit, health signals, and explicit degraded behavior. If those layers are missing, the system may still verify signatures. It is not yet running verification as infrastructure.

If you want the operator-facing consequences of that design, continue to `offline-verification-guide`. If you want the earlier trust-discovery layer that feeds accepted issuers into the runtime, go next to `discovering-trusted-issuers`. If you want the deployment envelope that packages this stack for real environments, continue to `deployment-profiles-in-practice`.

## Related reading

- `offline-verification-guide` — the operator playbook for cache windows, freshness decay, and degraded acceptance
- `discovering-trusted-issuers` — how the verifier learns which issuers belong inside its trust boundary before live evaluation begins
- `deployment-profiles-in-practice` — how the same verifier stack is packaged differently across runtime environments
- `certificate-chains-and-validation` — the narrower cryptographic path-building layer inside the broader verifier stack

## Draft metadata

- **Slug:** `verifier-infrastructure`
- **Date:** `2026-02-16`
- **Updated date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Verification`
- **Topic cluster:** `Trust Infrastructure`
- **Layer:** `Execute`
- **Difficulty:** `Advanced`
- **Section:** `implementation`
- **Related:** `offline-verification-guide`, `trust-registries-explained`, `discovering-trusted-issuers`
- **Concept tags:** `verification`, `implementation`, `deployment`
- **Standards tags:** `OID4VP`, `StatusList2021`
- **Lead narrator:** Victor Leclerc
- **Primary reader:** implementer, operator, platform architect
- **Likely CTA:** `offline-verification-guide`
- **Status:** `live`
- **Batch:** `batch-15`

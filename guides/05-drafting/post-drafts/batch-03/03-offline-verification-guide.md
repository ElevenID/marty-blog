# Offline Verification Guide

*Offline verification is not a magic trick. It is the discipline of deciding what trust material must already be on the device, how long it remains credible, and what the operator should do when freshness expires before the queue does.*

A verifier in a browser tab can ask for one more live status check and pretend the problem is solved. A verifier at a transit gate, airport lane, or field kiosk cannot. It has whatever trust anchors, policy bundles, and status data were loaded before the link failed, plus whatever failure policy was defined in advance.

That is the tension Marty makes explicit: **online freshness versus offline resilience**. If you optimize only for freshness, disconnected environments fail closed the moment the link drops. If you optimize only for resilience, you create long windows where revocation is stale and high-value fraud gets more room than it should. A serious offline verifier does not hide that trade-off. It names it, packages it in the `Deployment Profile`, and gives the operator a bounded playbook.

## Cache and trust-anchor setup

An offline-capable verifier should never begin with “we’ll just use the last known good data.” That usually means nobody decided what *good* means.

In Marty, the preparation work happens before disconnection. The verifier needs a preloaded trust bundle: trust anchors, local policy material, and the status artifacts it is allowed to use while the network is unavailable. That is not a vague cache. It is a runtime package shaped by the `Trust Profile` and delivered through the `Deployment Profile`.

At minimum, four classes of material should be on the device:

- **Trust anchors and issuer material** — root certificates, issuer keys, trust list snapshots, or registry data.
- **Policy bundles** — the `Presentation Policy` and local decision rules for normal and degraded acceptance.
- **Status artifacts** — CRLs, status lists, or equivalent revocation snapshots, plus timestamps and freshness bounds.
- **Operational metadata** — cache TTLs, sync cadence, clock tolerance, and operator-visible runtime state.

Offline verification is not only a cryptographic question. It is a packaging question. If the verifier cannot tell the difference between “trusted and current,” “trusted but aging,” and “operating beyond freshness,” the operator is being asked to improvise assurance in the middle of a live environment.

The lifecycle should look something like this:

| Lifecycle stage | What the verifier receives or does | Why it matters | Operator watchpoint |
| --- | --- | --- | --- |
| **Connected preload** | Pull trust anchors, issuer lists, policy bundles, and current status artifacts | Establishes the offline trust baseline before disconnect | Confirm sync completed and package versions match the approved deployment |
| **Cache warm validation** | Validate signatures, timestamps, and policy bundle integrity locally | Prevents “cached garbage” from masquerading as resilience | Do not enter service if validation fails before disconnect |
| **Offline operating window** | Continue verifying with cached trust and revocation material under bounded TTLs | Preserves service continuity when links are unstable or absent | Monitor age of status data, clock drift, and device health |
| **Freshness threshold reached** | Shift to degraded or restricted acceptance policy instead of pretending nothing changed | Makes the risk transition explicit | Surface a clear operator state: normal, degraded, or fail-closed |
| **Reconnect and reconcile** | Refresh trust/status data, replay logs, and clear degraded mode if policy allows | Returns the verifier to full assurance | Review any decisions made during degraded operation |

If this feels operationally fussy, good. If the runtime package does not spell out what it trusts, for how long, and what happens when that trust ages out, the system is not resilient. It is merely lucky.

## Revocation and freshness trade-offs

Revocation is where offline verification stops sounding simple.

A verifier can validate a signature locally for as long as the key material remains trusted. What it cannot do offline is learn new revocation events after its last successful sync. Freshness therefore becomes a policy decision, not a background assumption. Marty keeps that explicit: the `Trust Profile` defines acceptable status mechanisms and assurance expectations; the `Deployment Profile` defines whether those expectations are executed in real time, from a bounded cache, or through degraded handling.

The trade-offs are not symmetrical. A boarding gate, a transit turnstile, and an enterprise HR portal do not carry the same fraud exposure or the same tolerance for stalled operations.

| Freshness posture | Offline behavior | Security upside | Operational upside | Real cost |
| --- | --- | --- | --- | --- |
| **Live-only / fail closed** | Reject when status cannot be checked in real time | Maximum revocation freshness | Clean assurance story | Service halts immediately when connectivity disappears |
| **Bounded cached freshness** | Accept while cached CRL/status list remains within approved TTL | Stronger assurance than indefinite cache reuse | Keeps lanes moving through short outages | Requires careful TTL design and visible aging state |
| **Grace-period degraded mode** | Accept only lower-risk decisions after freshness expires | Limits exposure by narrowing what can still be approved | Preserves essential service during longer outages | Forces explicit product and fraud trade-offs |
| **Open-ended offline acceptance** | Continue accepting despite stale status data | Minimal operational interruption | Maximum continuity | Highest fraud and audit risk; usually the wrong answer for serious systems |

Most operator-grade designs live in the middle rows. Cached status data buys continuity through short outages, but once the freshness boundary passes, the system should not pretend it knows what it no longer knows.

That is the uncomfortable truth teams often bury: **offline resilience is bought by accepting bounded uncertainty**. The job is to shrink, classify, and govern that uncertainty—not to deny it exists.

The better operator question is not “Can we verify offline?” It is “Which decisions remain acceptable as status data gets older?” Whether the window is 12 hours or 72, it has to be justified by fraud exposure and service consequences. Otherwise it is not a policy. It is a superstition with a timestamp.

## Failure-mode policy and operator decisions

Take a familiar scenario: a transit station loses network for **48 hours**. The verifier lanes keep running on cached trust anchors and the last synchronized status list or CRL snapshot. Then that status freshness expires.

At that point, the question is not whether the credential signature is still cryptographically valid. It probably is. The question is whether the system should continue accepting a decision whose revocation picture is now stale. Marty’s answer is not to invent certainty. It is to make the fallback policy explicit.

In this scenario, the operator policy is:

- **Accept base credentials for single-ride access** to keep crowds moving and avoid turning a network outage into a station-wide operational failure.
- **Reject monthly passes once status-list / CRL freshness has expired** because they represent a higher-value target for offline fraud and can be reused repeatedly during the outage window.

A single ride is a low-value entitlement with immediate crowd-management implications. A monthly pass concentrates more value into one offline acceptance decision and can be reused repeatedly during the outage window. The right response is to narrow the acceptance surface as freshness degrades.

That is where operator confidence comes from: a policy ladder the runtime can enforce and the operator can explain.

A good failure-mode ladder usually looks like this:

1. **Normal mode:** cached trust and status artifacts are current enough; full policy enforcement applies.
2. **Aging mode:** status data is approaching expiry; raise operator visibility and prepare for restricted acceptance.
3. **Degraded mode:** freshness expired; allow only bounded, lower-value decisions defined in policy.
4. **Fail-closed for high-risk decisions:** reject decisions whose fraud exposure depends on current revocation state.
5. **Recovery mode:** reconnect, refresh, reconcile logs, and return to full acceptance only after the verifier is back inside freshness policy.

The “offline problem” stops being an emergency override hidden in application code. It becomes a governed runtime behavior owned by the `Deployment Profile`, supported by the `Trust Profile`, and visible to the operator in plain language.

That visibility matters. If the device only flashes “verification unavailable,” the operator gets a useless binary and a growing queue. If it says “status freshness expired: single-ride only, monthly passes denied until sync restored,” the system is doing its real job: turning a hard trust trade-off into an executable operational decision.

Offline verification is not effortless. It asks you to pre-position trust, define stale-data boundaries, accept that some assurance will decay before service can stop, and decide which entitlements deserve stricter treatment when that happens. The reward is a verifier that stays legible under pressure.

**Next step:** If your environment looks like a high-throughput gate, lane, or checkpoint, continue to `deploy-airline-boarding`. If you need to compare hosted, self-hosted, and edge runtime envelopes before choosing one, read the deployment-profile comparison content in `deployment-profiles-in-practice`.

## Related reading

- `same-trust-model-different-runtime` — why runtime differences should not force a new trust model
- `deployment-profiles-from-design-to-production` — the Marty primitive that packages trust and policy for real environments
- `offline-verification-design-patterns` — the broader design patterns behind cached trust and offline assurance windows
- `revocation-strategies-compared` — the deeper mechanics behind CRLs, status lists, OCSP, and offline trade-offs
- `deploy-airline-boarding` — a concrete operational case where latency, throughput, and freshness collide

## Draft metadata

- **Slug:** `offline-verification-guide`
- **Date:** `2025-06-23`
- **Updated date:** `2026-09-20`
- **Category:** `Technical`
- **Topic:** `Offline Verification`
- **Topic cluster:** `Deployment Patterns`
- **Layer:** `Deploy`
- **Difficulty:** `Intermediate`
- **Section:** `implementation`
- **Related:** `deployment-profiles-in-practice`, `deploy-airline-boarding`, `deploy-enterprise-access`
- **Concept tags:** `deployment`, `offline`, `verification`
- **Standards tags:** `ICAO 9303`, `StatusList2021`
- **Lead narrator:** Sofia Rahman
- **Primary reader:** operator, implementer
- **Likely CTA:** `deploy-airline-boarding` or `deployment-profiles-in-practice`
- **Status:** `live`
- **Batch:** `batch-03`

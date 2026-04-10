# Deploying Marty for Airline Boarding

*At a boarding gate, identity architecture is judged in seconds: can the lane keep moving, can the verifier stay trustworthy when the network wobbles, and can operations tighten policy without rebuilding the device fleet?*

Airline boarding is where identity architecture meets a rolling suitcase and a closing door. A gate lane does not care that a verifier looked elegant in a cloud demo. It cares whether a full flight can board when Wi-Fi is congested, the jet bridge handoff is unstable, and a supervisor still needs a defensible answer to a simple question: **should this passenger board right now?**

That is why boarding is a strong Marty use case. The tension is explicit. **Online freshness versus offline resilience** is not theoretical here. Neither is **throughput versus assurance**. A gate that depends on a live round trip for every decision risks turning a minor outage into a public operations problem. A gate that ignores freshness entirely creates a different problem: stale trust dressed up as confidence.

Marty is useful here because it does not hide those tensions inside bespoke gate software. The `Trust Profile` defines what the lane trusts. The `Presentation Policy` defines what the traveler must prove. The `Deployment Profile` defines how that logic arrives at the gate, how long it may operate on cached material, and what happens when freshness expires before boarding does.

## Field-environment pressure

Sofia would start with the device, not the diagram. Picture a gate agent working a handheld verifier while another lane uses a pedestal scanner. The flight is already boarding. Some passengers have a mobile boarding credential in a wallet. Some have a passport-backed travel credential for an international segment. Some are connecting from earlier legs. It is an ordinary operating day.

The workflow is ordinary, which is why it matters. Upstream systems have already done the slow work: check-in, identity confirmation, entitlement to board, seat and segment validation, and any route-specific document checks. By the time the traveler reaches the lane, the verifier should be deciding a narrow question: is this the right passenger, for this flight segment, in this boarding window, under this lane policy?

That narrowness is what keeps the gate sane. As Aiko would remind us, travel systems inherit real standards and institutional pressure. ICAO trust chains, mDoc expectations, airport operating procedures, carrier handling rules, and regulator scrutiny all collapse into a small physical space at the gate. The boarding lane is not the place to discover that trust assumptions were vague.

| Operational constraint | Why the gate cares | Marty control surface |
| --- | --- | --- |
| **Unstable edge connectivity** | Jet bridge and terminal networks drop unpredictably; a lane cannot stop on every link flap | `Deployment Profile` packages local trust material, policy bundles, and sync behavior |
| **Mixed travel credentials** | A lane may see passport-backed proof, mDoc identity, and boarding entitlement in the same bank | `Trust Profile` and `Presentation Policy` keep trust and disclosure rules explicit instead of hardcoded per format |
| **Tight boarding tempo** | Agents need decisions in operator tempo, not vendor API tempo | Local verification at the edge avoids a backhaul dependency for each scan |
| **Policy updates under live operations** | Security or operations teams may need a new requirement mid-season without rebuilding every gate device | `Presentation Policy` changes propagate as configuration, not gate-app rewrites |
| **Outage handling** | A lane needs a bounded answer for short outages, not a shrug and a red banner | `Deployment Profile` defines offline windows, degraded mode, and fail-closed boundaries |

This is the key reframing: airline boarding is not a wallet novelty problem. It is a runtime discipline problem. A boarding lane is a throughput system, but it is still making a trust decision. If you optimize only for speed, you ship a fast lane with poor assurance. If you optimize only for assurance through constant live lookups, you create a secure queueing disaster.

## Trust and offline configuration

The Marty answer is not “put everything offline forever.” It is to decide exactly what the gate may trust locally, for how long, and under which failure policy. Before a departure bank, the gate deployment syncs the material it needs: trust anchors, issuer keys or trust-list snapshots, lane policy bundles, revocation or status artifacts, and device metadata. The lane begins the bank with a known trust package rather than improvising from whatever the last successful call happened to leave behind.

A realistic gate profile is deliberately conservative. A boarding deployment might allow **full local verification for up to 8 hours after the last successful sync**—roughly one operating shift plus irregular-operations margin. If connectivity is still unavailable after that point, the lane moves into **degraded mode** and continues only with already-issued standard boarding entitlements for the current operating window. After **12 hours without refresh**, the lane fails closed for international departures and any policy requiring current status confirmation. The gate continues through a short outage, but the system never pretends stale trust is fresh trust.

**Boarding-lane trust/cache flow**

| Lane step | What happens at the gate | Cached or configured material used | Decision boundary |
| --- | --- | --- | --- |
| **1. Pre-shift sync** | Device pulls the approved lane package before boarding begins | Trust anchors, issuer snapshot, active `Presentation Policy`, status snapshot, offline window settings | Lane does not open if package integrity or version checks fail |
| **2. Traveler presents** | Passenger presents boarding credential plus supporting identity proof if route policy requires it | Flight entitlement, holder-binding rules, accepted credential formats | Request stays narrow: prove boarding eligibility, not entire identity history |
| **3. Local trust validation** | Verifier checks signature chain, issuer trust, timestamps, and status freshness | `Trust Profile` material, clock tolerance, cached status artifacts | Accept only while the status snapshot remains inside the approved window |
| **4. Policy evaluation** | Lane applies the current boarding rule for that lane and route | `Presentation Policy`, route/lane config, any claim requirements such as `Cleared for PreCheck` | If the required claim is absent or freshness is out of bounds, route to exception handling |
| **5. Log and reconcile** | Lane records the event locally and reconciles when connected again | Audit queue, sync rules, supervisor-visible device state | No silent drift: degraded decisions remain reviewable after reconnect |

This packaging model also makes policy change safer. Suppose operations decides that a specific expedited connector lane must now require a **`Cleared for PreCheck`** claim rather than inferring expedited treatment from loyalty status or a carrier flag. In Marty, the change belongs in policy and configuration. The updated lane policy is distributed with the next approved deployment sync. The verifier now asks for the `Cleared for PreCheck` claim because the lane configuration says it must—not because someone rebuilt the gate application. That is the operational point: the airport or airline can tighten the rule surface without turning a policy revision into a software rollout.

Aiko’s contribution here is straightforward: travel buyers want standards-aware control. If a lane is accepting ICAO-backed travel proof, mDoc-derived identity proof, or another approved credential type, the trust basis must remain inspectable. Marty keeps that visible.

## Throughput and operational win

The payoff is predictability. When trust material and policy are already on the device, the gate stops depending on a live vendor round trip for every traveler. Agents are no longer hostage to transient network latency when the lane is under load. Supervisors get a legible state model—normal, degraded, or fail closed—instead of a generic outage banner.

It also changes the buying logic. Boarding lanes are not just verification events. They are devices, policy distribution, trust packaging, support operations, and visible failure modes. Marty’s deployment-first model fits that reality better than a remote-API mindset.

Throughput and assurance do not have to be enemies if their boundary is explicit. The lane can verify locally and still respect a bounded freshness window. It can continue through short outages and tighten acceptance when status ages out. It can absorb a new claim requirement such as `Cleared for PreCheck` without turning the gate estate into a patching emergency. The same trust model survives a harsher runtime because the variable parts were isolated properly: trust in the `Trust Profile`, the boarding rule in the `Presentation Policy`, and device behavior in the `Deployment Profile`.

If you are evaluating Marty for a travel environment, start where the pressure is sharpest. Define the lane, define the offline window, define the exception policy, and test whether your gate can keep moving without lying about freshness. If that is the problem in front of you, continue to `offline-verification-guide`. If your team is comparing packaged runtime options for airports, kiosks, or other edge verifiers, move next into deployment package evaluation.

## Related reading

- `offline-verification-guide` — the operator-focused guide to trust-anchor setup, freshness bounds, and failure-mode policy
- `same-trust-model-different-runtime` — why hosted, self-hosted, and edge environments should not force different trust logic
- `deployment-profiles-in-practice` — how to choose among runtime models based on latency, sovereignty, and outage tolerance
- `infrastructure-economics-migration` — why identity systems work better when bought like infrastructure instead of metered lookups
- `deployment-profiles-from-design-to-production` — the Marty primitive that turns trust and policy into runtime configuration

## Draft metadata

- **Slug:** `deploy-airline-boarding`
- **Date:** `2025-07-05`
- **Updated date:** `2026-10-01`
- **Category:** `Technical`
- **Topic:** `Airline Boarding`
- **Topic cluster:** `Deployment Patterns`
- **Layer:** `Deploy`
- **Difficulty:** `Intermediate`
- **Section:** `business`
- **Related:** `deploy-enterprise-access`, `deployment-profiles-in-practice`, `offline-verification-guide`
- **Concept tags:** `deployment`, `travel`, `offline`
- **Standards tags:** `ICAO 9303`
- **Lead narrator:** Sofia Rahman (support from Aiko Tanaka)
- **Primary reader:** operator, travel architect, regulated buyer
- **Likely CTA:** `offline-verification-guide` or deployment package evaluation
- **Status:** `live`
- **Batch:** `batch-04`

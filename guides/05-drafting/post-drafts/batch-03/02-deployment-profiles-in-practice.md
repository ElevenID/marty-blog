# Deployment Profiles in Practice

*Choose the runtime that matches your environment without rewriting the trust logic underneath it. Hosted, self-hosted, and edge deployments should differ operationally, not conceptually.*

By the time an operator or platform architect is evaluating deployment, the architecture is being tested by reality: a lane, kiosk, private segment, or regional cloud boundary where latency, connectivity, and key custody become hard constraints. That is why Deployment Profiles matter in Marty. They are the runtime boundary where the same trust judgment is prepared for different environments.

The mistake teams make is letting environment choice rewrite the trust model. If the hosted rollout trusts one thing, the self-hosted rollout another, and the edge rollout quietly relaxes rules because the link is unreliable, you do not have three deployment options. You have three systems. Marty is stricter than that. The model stays stable. The runtime varies.

## What changes across environments

The first useful question is not, “Which package is cheapest?” It is, “Which operational constraint is most real in our environment?” That is where hosted convenience versus sovereignty becomes a design boundary rather than a preference debate.

What changes is concrete: where keys live, how dependent verification is on the network, how status information arrives, what latency budget the operator has, who patches the runtime, and whether the verifier runs as a service, a controlled cluster, or a device in a lane.

| Decision surface | SaaS Profile *(hosted deployment)* | Self-Hosted Profile *(self-hosted deployment)* | Edge Profile *(edge / kiosk deployment)* |
| --- | --- | --- | --- |
| **Best fit** | Fast integration, zero infrastructure overhead | Strict data residency, sovereignty, BYOK/HSM control | Offline capability, intermittent links, or latency under 50ms |
| **Network assumption** | Reliable online connectivity | Controlled private or regional network | Intermittent, delayed, or fully disconnected operation |
| **Key custody** | Managed infrastructure and cloud KMS | Customer-controlled KMS, HSM, or OpenBao boundary | Local TPM/HSM or tightly scoped local key material |
| **Status freshness** | Live or near-real-time updates | Live or scheduled internal sync | Cached status/trust windows with background sync when available |
| **Operational burden** | Lowest for the customer | Higher, but with maximum control | Highest device/runtime specificity, justified by field needs |
| **Primary trade-off** | Convenience over sovereignty | Sovereignty over convenience | Resilience and speed over always-live freshness |

That table is the point in one glance. A SaaS Profile maps to the hosted deployment package when a team wants managed infrastructure and zero operational drag. A Self-Hosted Profile maps to the self-hosted deployment package when residency, custody, or BYOK requirements are non-negotiable. An Edge Profile maps to the edge or kiosk deployment package for environments that punish round trips: gates, checkpoints, kiosks, and field lanes.

This is also where the online versus offline resilience tension becomes honest. Online systems prefer live status and immediate updates. Edge systems prefer bounded local decisions that keep working while sync happens in the background. Both are valid. They need different runtime envelopes, not different trust architectures.

## What stays stable in trust logic

This is the part that separates architecture from packaging. Deployment Profiles change **how** the runtime executes the judgment. They should not change **what** the judgment means.

In Marty, the stable layer is the trust logic itself: cryptographic signature verification still proves who signed the credential; Presentation Policies still define what the verifier may ask for; Cedar-governed decision logic still evaluates permit and forbid conditions; revocation or status checking still matters as part of the assurance story. Those things belong to the model.

What can vary is the runtime machinery around that logic. A hosted verifier may call live status services and keep keys behind managed cloud infrastructure. A self-hosted verifier may enforce customer custody through a local HSM or OpenBao-backed secret boundary. An edge verifier may carry pre-synced trust anchors, cached status material, and a bounded freshness window because the operator cannot afford a hard dependency on the network for every presentation.

A different cache window, key boundary, or sync schedule is runtime variation. A different definition of who is trusted, a different disclosure requirement, or a different policy outcome for the same credential in the same governance context is a model change.

That distinction is the whole reason Deployment Profiles exist as a primitive. Trust Profiles answer who and what can be trusted. Presentation Policies answer what must be disclosed and under what conditions. Deployment Profiles answer the runtime question: under which network, device, sync, and operator conditions does that same decision execute?

For operators, this is a way to avoid runtime drift. If an offline rollout starts quietly bypassing revocation policy because “the lane has to keep moving,” the problem is not offline verification. The problem is that the trust logic leaked into operational improvisation. A proper Edge Profile makes the trade-off explicit in advance: what is cached, how long it is fresh, when assurance downgrades, and what failure behavior the device should follow when it cannot refresh.

For architects, the payoff is just as important. If a credential is accepted in a hosted runtime and rejected in a self-hosted runtime for reasons unrelated to declared trust or policy, the architecture has already fractured. Marty’s claim is that it should not. You should be able to move the same trust model between runtimes and know exactly which parts changed: latency posture, sync posture, custody posture, and operator burden—not the underlying trust decision.

## How to choose

Most teams do not need a giant scoring matrix. They need a short decision path that starts from reality instead of feature marketing.

**Choose-by-environment framework**

1. Need offline capability or latency <50ms? -> **Edge Profile**
2. Need strict data residency or BYOK key management? -> **Self-Hosted Profile**
3. Want fast integration with zero infra overhead? -> **SaaS Profile**

Use that in order. Edge constraints come first because they are the hardest to fake later. Sovereignty constraints come next because custody and residency tend to be non-negotiable. If neither of those constraints is binding, SaaS is usually the fastest path to production because it removes infrastructure work that does not change the trust model.

Once the profile choice is clear, the packaging conversation becomes much cleaner. Marty’s pricing and offering model follows the same logic as the architecture: you buy deployments, verifier or kiosk runtimes where they matter, and control plane access for trust, policy, package management, and audit. You do **not** buy verification by the event.

That gives platform teams a more honest planning lens. A dev, staging, and production estate is already multiple deployments. Edge rollouts may need lane, facility, or kiosk licensing because physical runtime instances matter operationally. Self-hosted rollouts may pair with higher-governance tiers because audit retention, BYOK enforcement, and policy branching become central.

So choose the environment the way an operator would: ask where verification has to run, how fast the answer has to arrive, what happens when the network disappears, and who must control the keys. Then choose the deployment package that matches that environment. If the answer changes later, the runtime can change with it without forcing a brand-new trust model.

That is the real confidence shift. Hosted, self-hosted, and edge are not three different philosophies of trust. They are three different runtime conditions for the same governed system. If you are evaluating Marty now, the next useful step is to compare the deployment package that fits your environment and then run the infrastructure economics conversation from there. The important question is no longer “What is our cost per check?” It is “Which governed runtime do we want to own, and what does that let us stop paying for?”

## Related reading

- `Same Trust Model, Different Runtime` — the bridge piece that introduces runtime pressure without surrendering model stability
- `Deployment Profiles: From Design to Production` — the core Marty primitive overview for network mode, lanes, and runtime packaging
- `Offline Verification: Design Patterns for Disconnected Environments` — the deeper operator view of cache windows, freshness, and failure behavior
- `Why Marty Is Ready for Evaluation` — the next step if you want to inspect artifacts, packaging, and deployment choices directly
- `The Business Case for Credential Portability` — the broader economic argument for treating verification as infrastructure instead of metered lookup

## Draft metadata

- **Slug:** `deployment-profiles-in-practice`
- **Lead narrator:** Sofia Rahman
- **Primary reader:** operator, platform architect
- **Likely CTA:** compare deployment packages and continue into infrastructure economics / evaluation
- **Batch:** `batch-03`

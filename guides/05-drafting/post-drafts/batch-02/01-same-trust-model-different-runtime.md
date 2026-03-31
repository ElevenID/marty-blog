# Same Trust Model, Different Runtime

*The trust judgment should not have to change every time the runtime does. Marty keeps the verification model stable and uses Deployment Profiles to absorb the operational differences between cloud, self-hosted, and edge environments.*

The architecture conversation changes the moment verification leaves the diagram and lands somewhere with a queue, a device, and an unreliable link.

In a clean data-center mesh, it is easy to assume that every verifier can reach a revocation service in real time, every key can sit behind a cloud KMS, and every decision can round-trip to a central policy stack without anyone noticing. At an airport gate, a factory checkpoint, or a self-service kiosk, those assumptions stop feeling architectural and start feeling fragile. The line is moving. The scanner is waiting. The network is having a personality.

The more important question is whether runtime pressure should force you into a different trust model. Marty’s answer is no. The same trust logic can survive across hosted, self-hosted, and edge environments if the system is honest about what must remain invariant and what is allowed to vary. That honesty lives at one specific boundary: the Deployment Profile.

## Runtime pressure changes the architecture conversation

Teams usually discover runtime reality late.

A prototype works beautifully in a browser against a hosted verifier. Real-time freshness checks are immediate. Revocation status is current. Logs stream to a central console. Everyone nods. Then the same trust judgment has to run in a boarding lane, inside an enterprise network segment with strict residency rules, or on a kiosk that syncs when it can and then has to keep working after the link drops.

This is where old identity architectures start to fork. One runtime gets the “full” product. Another gets a degraded offline version. A third gets custom code to satisfy sovereignty requirements. Soon the organization is not managing one trust system across environments. It is managing several cousins with similar names and very different behavior.

The result is predictable: operators lose predictability, architects lose a stable model, and procurement gets quoted three different answers for one verification capability.

The real tension is not cloud versus edge. It is **online freshness versus offline resilience**.

A cloud verifier naturally wants live status, immediate revocation updates, and centralized custody. A field device may need to keep moving with cached trust anchors, bounded freshness windows, and clearly defined failure behavior. Both are legitimate. Neither should require inventing a second trust model.

The same goes for **deployment variation versus model stability**. If moving from a hosted runtime to an edge lane forces you to rewrite signature verification rules, rebuild policy logic, or re-express who is trusted, then the architecture was not actually stable. It was only comfortable in one environment.

This is why Deployment Profiles matter in Marty. They start from operator reality and acknowledge that a verifier in a regional cloud cluster, an enterprise network segment, and an intermittently connected gate do not live under the same constraints. But acknowledging different constraints is not the same thing as tolerating different trust models.

## Deployment Profiles isolate what should vary

Deployment Profiles are the explicit abstraction boundary between stable trust logic and runtime-specific constraint.

Above that boundary, the trust judgment stays recognizable: cryptographic signature verification, Cedar policy evaluation, and status or revocation checks are still part of the decision. Below it, the operational details can change: where keys live, how revocation data arrives, how much network dependency is acceptable, and how long cached status can remain usable before assurance must degrade or the deployment must fail closed.

| Runtime dimension | Hosted / cloud runtime | Self-hosted runtime | Edge / kiosk runtime | What it means |
| --- | --- | --- | --- | --- |
| **Cryptographic signature verification** | Same verification logic in managed services | Same verification logic in org-controlled infrastructure | Same verification logic on local verifier runtime | **Invariant**: the credential still has to prove who signed it |
| **Cedar policy evaluation** | Centralized policy engine, managed updates | Organization-controlled policy service | Local or pre-synced policy bundle | **Invariant**: policy remains the decision surface |
| **Status / revocation checks** | Real-time service calls, webhook-driven freshness | Near-real-time or scheduled sync inside the organization | Cached status lists with bounded windows, background sync when connected | **Invariant logic, variable freshness source** |
| **Key storage** | Cloud KMS | Local HSM or OpenBao-backed secrets | Local HSM, TPM-bound material, or tightly scoped local secret store | **Variable constraint** shaped by custody and sovereignty |
| **Revocation sync model** | Continuous live updates | Controlled sync schedule | Cached windows such as 12-hour or 72-hour edge snapshots | **Variable constraint** shaped by connectivity |
| **Network dependency** | Assumes durable data-center connectivity | Assumes controlled private network or site connectivity | Designed for intermittent lanes, kiosks, or disconnected checkpoints | **Variable constraint** shaped by environment |

That table is the core argument in one view: the runtime envelope changes first, not the trust model. A hosted verifier may use live status calls. An enterprise deployment may keep keys behind a local HSM or OpenBao-managed boundary. A gate device may rely on pre-synced trust material and a cached revocation window because the line still has to move when the link does not. Those are meaningful differences, but they are exactly what Deployment Profiles are for. Trust Profiles answer **who and how to trust**. Presentation Policies answer **what must be shown**. Deployment Profiles answer **under what runtime conditions that trust judgment executes**. That is why they are the abstraction boundary: they isolate what should vary and protect what should not.

## Operational and economic payoff

When that boundary is clean, the payoff is immediate. Operators get fewer surprises: a kiosk profile can declare cache windows, freshness expiry, and fallback behavior; a hosted runtime can stay aggressive about live status; a self-hosted deployment can satisfy residency or custody requirements without becoming a fork. Architects get a legible system: the same trust logic moves between runtimes without new signature, Cedar, or status branches. If policy changes, you change policy. If the environment changes, you change the Deployment Profile.

For commercial evaluators, the separation clarifies what the business is actually buying.

If verification logic is stable across runtimes, the economic unit should track the infrastructure you operate and govern, not the number of successful presentations. That is why Marty’s packaging story mirrors the architecture story: deployments are the primary unit, verifier or kiosk runtimes matter where physical or logical instances matter, and control plane access covers trust, policy, audit, and package management. The bill follows environments, devices, and governance scope—not every verification event.

That matters because per-check pricing punishes reuse. When a credential can be presented repeatedly under the same trust model, verification should feel like an internal infrastructure capability, not a tollbooth. It also makes edge rollouts easier to reason about: kiosks, lanes, and facilities are priced and governed as runtimes, not treated as bespoke exceptions.

Runtime choice is still real. Hosted environments are often fastest when infrastructure capacity is thin. Self-hosted deployments fit sovereignty, residency, or key-custody requirements. Edge and kiosk deployments fit latency, resilience, and intermittent connectivity. The point is not to flatten those choices. It is to keep them from fragmenting the trust model.

That is the confidence Marty is aiming for: you can change where verification runs without losing your grip on how verification works.

If you want the next step in the strongest publication path, continue to `one-protocol-many-ecosystems`. That post widens the same argument from runtime variation into sector variation and shows that the model survives not only across environments, but across travel, healthcare, enterprise, and education as well.

If you are evaluating Marty in your own environment, start with your runtime reality, not a generic feature checklist. Ask where verification has to run, how much network dependency the operator can tolerate, where keys must live, and how fresh revocation data needs to be. Then evaluate which deployment model fits that environment best—hosted, self-hosted, or edge—knowing that the same trust judgment can travel with you.

## Related reading

- `one-protocol-many-ecosystems` — the next proof that the stable model survives beyond runtime differences and across whole sectors.
- `deployment-profiles-from-design-to-production` — the core introduction to Deployment Profiles as a Marty primitive
- `offline-verification-design-patterns` — concrete offline patterns for cached trust, revocation windows, and disconnected operation
- `offline-verification-guide` — the operator-facing view of freshness, failure modes, and offline policy decisions
- `deployment-profiles-in-practice` — the follow-on deep dive for choosing among deployment options
- `deploy-airline-boarding` — a concrete field-runtime example where latency, queues, and resilience become architectural

## Draft metadata

- **Slug:** `same-trust-model-different-runtime`
- **Lead narrator:** Sofia Rahman
- **Primary reader:** operator, architect, commercial evaluator
- **Likely CTA:** `one-protocol-many-ecosystems` or evaluate which deployment model fits your environment
- **Batch:** `batch-02`

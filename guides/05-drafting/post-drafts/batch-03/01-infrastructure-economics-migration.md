# The Infrastructure Economics Migration

*When identity is bought as a metered lookup service, growth makes the bill worse. When it is run as protocol infrastructure, growth turns into a deployment and governance question instead of a recurring extraction model.*

Most executive buyers are taught to ask the wrong opening question: “What is our cost per check?” That framing works for a thin API called occasionally from the edge of the business. It breaks down once verification becomes part of the operating fabric — gates, lanes, portals, kiosks, partner handoffs, workforce access, and regulated customer journeys that now depend on reusable credentials. At that point the more useful question is different: **are we renting verification forever, or are we building a governed verification capability we can actually own?**

That is the commercial shift Marty is trying to make legible. Daniel’s frame is architectural: mature infrastructure gets more useful as usage rises because the organization is amortizing a governed system. Sofia’s test is blunter: what happens when the line is moving and the network decides to get philosophical. Between those views, the real tension comes into focus: **infrastructure economics vs metered verification extraction**, and just beneath it, **ownership vs recurring dependency**.

## Per-check pricing punishes growth

A legacy SaaS IDV vendor charges for each verification event because the architecture requires the verifier to call home. The issuer or platform remains in the middle of the transaction, the runtime depends on that path staying available, and every successful presentation becomes another billable moment. That is comfortable for pilots. It is punishing for production systems whose job is to verify repeatedly and at scale.

The problem is not only the unit price. It is the shape of the curve. In a metered model, adoption increases dependency and spend at the same time. More verifiers, more partner surfaces, more user journeys, and more successful credential reuse should make identity cheaper per decision. Instead, the platform model turns each of those wins into another extraction point.

For a 10M-user monthly active access gate, the arithmetic is brutally simple. A legacy SaaS vendor charging $0.05 per check lands at $500,000 per month before anyone has improved latency, resilience, or operational control. The system is not just paying for identity assurance. It is paying rent on every successful decision.

| Monthly verification volume | Legacy SaaS at $0.05/check | Self-hosted Marty deployment | What the curve means |
| --- | ---: | ---: | --- |
| 100,000 checks | $5,000/month | ~$40,000/month | Metered pricing can look cheaper for low-volume pilots |
| 1,000,000 checks | $50,000/month | ~$40,000/month | The cost curve crosses once verification becomes operational |
| 10,000,000 checks | $500,000/month | ~$40,000/month | Growth becomes a financial penalty under per-check extraction |

That table matters precisely because it is not hype. If you run occasional checks in one narrow workflow, a metered service may feel acceptable for a while. But once credentials are presented repeatedly across an operational estate, the economics invert. The old model is no longer charging for rare external help. It is charging for normal system behavior.

Cost is only one symptom. The same architecture gives the vendor visibility into every verification, forces a network dependency into each decision, and charges again whenever the same proof has to be reused across another surface. That is the deeper re-verification tax. Success makes the old model more expensive because it was never designed to let verification become an internal capability.

## Owning deployments changes the curve

Marty starts from a different commercial assumption: identity should be bought like infrastructure. That does **not** mean every buyer must build everything from scratch. It means the billing model follows the runtime and governance surfaces that actually exist. You pay for deployments, verifier or kiosk runtimes where they matter, and control-plane access for trust, policy, audit, and package management. You do not pay each time a credential is presented successfully.

This is the practical meaning of “verification becomes an internal protocol event.” The trust judgment still happens. Policy still has to be evaluated. Revocation and freshness still matter. But the organization is no longer paying a third party to rediscover the same fact every time a verifier asks for it.

That is why **ownership vs recurring dependency** is the right tension to keep visible. A hosted deployment is still a dependency, but it is a governed infrastructure dependency rather than a tollbooth on every credential presentation. A self-hosted deployment goes further and shifts runtime placement, custody, and operational control into the buyer’s hands. Either way, the economic unit is the environment you run and govern — not the volume of successful verifications.

From a budget-owner perspective, this changes planning quality. Costs start to track environments, verifier estates, lane counts, audit needs, and governance scope. From an architect’s perspective, it changes the design conversation. Deployment Profiles, verifier runtimes, and control-plane tiers become the variables that matter. The old “cost per check” obsession becomes a category mistake.

## Case study proof

Consider one concrete modeled scenario: a high-throughput access environment with shift-change turnstiles, multiple lanes, and roughly 10 million credential checks per month.

Under the legacy model, each verification calls a SaaS service. The runtime sees about 300 ms end-to-end latency because every decision waits on a round trip. At $0.05 per check, the bill lands at roughly $500,000 per month. The problem is not only the invoice. The line now inherits the network architecture.

Sofia’s runtime realism matters here because queues are an infrastructure symptom, not a cosmetic one. At shift change, a few hundred milliseconds of remote latency, repeated across a tight arrival window, turns into visible physical drag.

Now change the model. The organization migrates the verifier estate to a self-hosted Marty deployment. The environment still has governed trust material, policy sync, audit, and runtime packaging, but verification resolves locally inside the buyer’s controlled environment. The modeled monthly infrastructure cost is around $40,000. Local validation latency falls from roughly 300 ms to roughly 15 ms. The operational consequence is immediate: **the shift-change turnstile queues disappear** because the line is no longer waiting on a third-party network round trip for every valid presentation.

| Dimension | Legacy SaaS verification | Self-hosted Marty deployment |
| --- | --- | --- |
| Verification path | Verifier -> vendor API -> remote decision | Verifier -> local protocol validation |
| Monthly volume | 10,000,000 checks | 10,000,000 checks |
| Commercial model | $0.05 per check | Infrastructure and runtime ownership |
| Monthly cost | ~$500,000 | ~$40,000 |
| Typical latency | ~300 ms | ~15 ms |
| Operational behavior at shift change | Turnstile queues build because every decision waits on the network | Queues disappear because decisions resolve locally |
| Failure mode | Vendor path outage can stop throughput | Local runtime keeps operating within governed deployment rules |

That is the kind of case study buyers should care about because it ties money to mechanism. Verification moved from a metered external service into a governed internal capability, and the decision path moved closer to the runtime that needs the answer.

The same pattern shows up in a multi-vendor enterprise estate, even when the physical consequences are less dramatic. Building access, VPN step-up, internal SaaS, and HR portal access often trigger repeated, separately billed identity checks across different vendor surfaces. Under a Marty deployment, those checks become policy-driven protocol events inside a shared trust and governance model. The organization stops paying multiple vendors to ask variations of the same question.

## The buying implication

The conclusion is not that every organization should immediately rip out every existing verification vendor. It is simpler and sharper: once identity becomes a repeated operational capability, it should be evaluated as infrastructure.

That changes what a serious buyer compares. First, compare **deployment models**: self-hosted, hosted, or edge. That is where latency posture, sovereignty, key custody, and runtime placement live. Then compare **control-plane tiers**: how many deployments you need, how many trust profiles you govern, what audit retention matters, and whether the environment demands branching policy control, offline runtime licensing, or enterprise-grade support.

Those are infrastructure questions. They are also better budget questions. They let an executive buyer see where costs cap, where governance responsibility sits, and where recurring dependency remains by choice rather than by transaction. They let an architectural sponsor ask whether verification should keep calling home forever. They let a budget owner stop rewarding a model that gets more expensive when the system succeeds.

That is the migration Marty is arguing for. Not from one vendor logo to another, but from a commercial model built on metered verification extraction to one built on owned deployments, governed runtimes, and explicit control planes. Identity should be bought the way you buy other serious infrastructure: by the environments you operate, the policies you govern, and the trust surface you need to keep under control.

If that is the lens you want to use, the next useful step is straightforward: **compare the deployment package that fits your runtime, then compare the control-plane tier that fits your governance scope.** That is where the economics and the architecture finally line up.

## Related reading

- `business-case-for-credential-portability` — the broader argument for turning repeated verification into reusable infrastructure.
- `centralized-vs-verifiable` — the architectural contrast between calling home on every check and verifying locally from a credential proof.
- `same-trust-model-different-runtime` — why moving from cloud to self-hosted or edge should not force a new trust model.
- `deployment-profiles-in-practice` — how to choose among hosted, self-hosted, and edge runtimes without losing governance clarity.
- `why-marty-is-ready-for-evaluation` — the next step if you want to inspect artifacts, packaging, and deployment choices directly.

## Draft metadata

- **Slug:** `infrastructure-economics-migration`
- **Date:** `2025-06-11`
- **Updated date:** `2026-09-08`
- **Category:** `Business`
- **Topic:** `Infrastructure Economics`
- **Topic cluster:** `Industry`
- **Layer:** `Foundations`
- **Difficulty:** `Intermediate`
- **Section:** `business`
- **Related:** `business-case-for-credential-portability`, `why-identity-needs-a-protocol`, `compliance-profiles-bridging-regulation`
- **Concept tags:** `business`, `deployment`, `economics`
- **Standards tags:** `(none)`
- **Lead narrator:** Daniel Ortega *(support from Sofia Rahman)*
- **Primary reader:** Executive buyer, architectural sponsor, budget owner
- **Likely CTA:** Compare deployment and control-plane tiers
- **Status:** `live`
- **Batch:** `batch-03`

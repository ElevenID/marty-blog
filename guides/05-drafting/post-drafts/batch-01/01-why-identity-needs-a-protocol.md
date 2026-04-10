# Why Identity Needs a Protocol

*Identity is still being sold as a platform problem. That framing makes lock-in, repeated verification, and rising costs look normal. A protocol changes the category by turning identity into reusable infrastructure instead of a metered dependency.*

If you are sponsoring an identity initiative, the most important decision is not which vendor has the best demo. It is which category you are buying.

Most of the market still treats digital identity as a platform: buy the service, embed the SDK, call the API, and let the vendor decide how trust, verification, and policy work behind the curtain. That model can be convenient at the beginning. It is also why identity remains fragmented, expensive, and difficult to reuse across organizations. Trust logic, disclosure rules, runtime assumptions, and verification economics are bundled into one vendor surface.

Identity does not behave like a normal line-of-business application category. It behaves more like shared infrastructure. It spans issuers, holders, verifiers, policies, trust anchors, deployment environments, and lifecycle events. When those pieces are hidden inside one platform, portability becomes exceptional. Re-verification becomes routine. Metered verification becomes the business model.

## Identity is being sold as the wrong kind of problem

The market presents identity as an API, a faster onboarding flow, or a more accurate fraud decision. Those are features, not the category.

The deeper problem is that identity is a coordination system. A credential has value only if multiple parties can rely on it under understandable trust rules. A verification event matters only if the result can move beyond the original vendor boundary. A policy matters only if it can be inspected, changed, and applied consistently across environments.

Platform-first identity makes those properties secondary. Each provider tends to bring its own trust model, policy surface, credential assumptions, reporting model, and switching costs. Standards are multiplying, wallets are arriving, regulations are hardening, and new credential formats keep appearing. Yet many organizations are still buying identity as if the end state were a permanently rented verification workflow.

That framing normalizes fragmentation. It makes it seem acceptable that one verifier cannot easily rely on evidence produced elsewhere. It makes lock-in sound like implementation detail. It makes repeated checks look prudent instead of wasteful.

A protocol starts from the opposite premise: the value is not in trapping the verification event inside one platform. The value is in making trust, disclosure, deployment, and lifecycle behavior legible and portable across systems.

Here is the simplest way to see the contrast:

| If identity is bought as a platform | If identity is built on a protocol |
| --- | --- |
| Trust logic lives inside vendor-specific code and contracts | Trust logic is expressed through shared, inspectable objects |
| Each new verifier or partner often means a new integration path | New participants can rely on the same model without re-architecting from scratch |
| Portability is difficult and usually commercialized as migration pain | Portability is a design goal, not an exception |
| Revenue grows as verification calls increase | Value comes from running and governing infrastructure well |
| Switching vendors risks rework, re-issuance, or both | Implementations can change without discarding the model |
| Success increases dependency on the incumbent surface | Success increases reuse across the ecosystem |

This is the tension sponsors and architects need to see clearly: **platform vs protocol** is not a branding preference. It determines whether identity behaves like a reusable layer or a recurring tollbooth.

## The real cost is not verification. It is re-verification

Once identity is sold as a platform, a predictable cost pattern follows. Verification becomes a metered event, and re-verification becomes structural. A user is verified in one place, then asked to go through materially the same process in another. A partner may even use the same vendor, but the proof still does not travel. Without a reusable artifact a second party can trust independently, the system buys the same answer again.

Consider a simple healthcare referral journey. A regional healthcare system pays $0.30 for a KYC or document-scan check when a patient is onboarded. The patient is then referred into an affiliate specialist network that uses the same centralized identity verification vendor. The specialist network pays another $0.30 for the exact same check. The total identity verification cost for that user journey is now $0.60.

Nothing materially new was learned about the patient in the second step. The system simply had no portable, policy-governed way to reuse the verified state. So it paid twice.

Under a protocol model, the first verified outcome can be issued as a credential. The specialist network can then verify that credential cryptographically under its own acceptance policy. The marginal vendor charge for that second check is $0.00 because the specialist is no longer repurchasing the same document scan as a metered platform event. It is verifying a reusable artifact.

That does not mean identity becomes free. Infrastructure still has to run. Policies still have to be governed. Trust still has to be updated. But the economics shift in an important way: you stop paying third parties to rediscover the same fact every time the workflow crosses an organizational boundary.

This is where the second core tension becomes visible: **portability vs lock-in**. In a platform model, portability is weak because the vendor boundary is the trust boundary. In a protocol model, portability strengthens because the trust boundary is explicit and the artifact can move.

The same logic applies beyond healthcare. Enterprise access systems repeat checks across badges, apps, and gateways. Travel environments repeat assurance work across checkpoints and partners. Regulated networks repeat document validation because one organization's result is not packaged for another organization's verifier.

The tax shows up in several forms at once:

- duplicated vendor spend
- repeated user friction
- extra integrations
- slower partner onboarding
- higher switching cost when the incumbent relationship changes

The most damaging part is that success makes the old model worse. More verifiers, more channels, more partners, and more accepted credentials should make the system more efficient. In a per-check platform model, they often make it more expensive.

That is why **infrastructure economics vs metered verification** is not just a pricing conversation. It is an architecture conversation. The question is whether verification is an internal capability of the system you govern, or a transaction you keep renting forever.

## A protocol changes the shape of the system

The alternative is not to deny that trust is hard. The alternative is to model trust correctly.

A protocol approach does not eliminate vendors. It changes what they are allowed to own.

In a platform model, the vendor owns the boundary between issuance, verification, policy, and runtime behavior. In a protocol model, those become explicit objects that multiple implementations can understand. Vendors can still provide excellent tooling, hosted deployments, operator experiences, and management surfaces. What they should not own is the portability of the identity system itself.

The Marty Identity Protocol starts from a simple observation: every serious credential system has to answer the same recurring questions.

Who is trusted?

What gets issued?

What must be shown?

Where does verification run?

How do those decisions combine into a real-world journey?

When those questions are answered through reusable protocol objects instead of buried vendor code, the whole category becomes easier to reason about. Architects get stable boundaries. Sponsors get a cost model that looks like infrastructure instead of a tax on growth. Operators get a path that can survive both cloud APIs and edge environments. Compliance teams get governed policy surfaces instead of scattered application logic.

In Marty, those recurring questions are represented as five primitives: Trust Profiles, Credential Templates, Presentation Policies, Deployment Profiles, and Flows. This post does not need to unpack each one in detail. The important point here is simpler: identity becomes manageable when the parts that matter most are explicit, portable, and governable.

It also clarifies what a sponsor should be buying. Not a promise that one vendor will mediate every identity check forever. A protocol-aligned system that lets the organization govern trust, reuse verified state, and choose deployment models without restarting the architecture each time the environment changes.

And it clarifies what an architect should be designing. Not another one-off integration into an opaque verification surface. A system where trust rules, disclosure requirements, deployment choices, and lifecycle orchestration can be expressed once and reused across many journeys.

The practical result is a cleaner operating model:

- one issuance can support many valid presentations
- one trust model can serve multiple verifiers
- one deployment strategy can vary by runtime without changing the underlying architecture
- one policy surface can evolve without forcing application rewrites

That is why identity needs a protocol: not because protocols are fashionable, but because identity only becomes portable, economically sane, and operationally credible when the system is designed to let verified state move under clear rules.

If that category shift makes sense, the next step is not another vendor comparison. It is understanding the shared model itself. Read `five-primitives-in-one-picture` next. That post is the map.

## Related reading

- `five-primitives-in-one-picture` — the clearest map of the reusable objects that make the protocol model work
- `centralized-vs-verifiable` — a sharper contrast between closed verification platforms and portable credential architectures
- `business-case-for-credential-portability` — the commercial case for reducing lock-in and duplicated verification spend
- `trust-profiles-explained` — how trust becomes an explicit configuration surface instead of hidden code

## Draft metadata

- **Slug:** `why-identity-needs-a-protocol`
- **Date:** `2025-01-06`
- **Updated date:** `2026-04-05`
- **Category:** `Business`
- **Topic:** `Protocol Vision`
- **Topic cluster:** `Protocol Vision`
- **Layer:** `Foundations`
- **Difficulty:** `Beginner`
- **Section:** `featured`
- **Related:** `five-primitives-in-one-picture`, `the-marty-identity-model`, `what-is-digital-identity`
- **Concept tags:** `foundation`, `business`
- **Standards tags:** `(none)`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** Sponsor + architect
- **Likely CTA:** `five-primitives-in-one-picture`
- **Status:** `live`
- **Batch:** `batch-01`

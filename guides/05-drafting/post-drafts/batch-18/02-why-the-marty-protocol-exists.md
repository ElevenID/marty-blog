# Why the Marty Protocol Exists

*Every identity system solves the same problems differently. MIP defines the minimum shared primitives to make credential systems interoperable. This post explains why.*

`why-identity-needs-a-protocol` answers the category question.

This post answers the next one.

Once you agree that identity should behave like reusable infrastructure instead of a permanently rented platform workflow, another problem appears immediately: what exactly is the shared model that different implementations are supposed to build against?

That is the gap the Marty Identity Protocol exists to close.

A category reframe by itself is not enough. It can explain why the old buying model is expensive, why re-verification is wasteful, and why identity logic should not stay trapped inside vendor-specific code. All of that matters. But sooner or later a serious architect still has to ask a harder question: if multiple teams, products, or vendors are going to build interoperable systems, which objects do they actually need to agree on?

Daniel’s answer is deliberately narrow.

MIP exists because identity systems keep rediscovering the same five classes of decision — who is trusted, what gets issued, what must be shown, where verification runs, and how the journey moves from stage to stage — and they keep hiding those decisions in incompatible places. One product buries them in code. Another buries them in configuration. A standards profile answers one part, a vendor SDK answers another, and an operations team improvises the rest when the runtime gets hostile.

A protocol is what turns those recurring decisions into a shared grammar instead of another pile of custom work.

## Once identity becomes infrastructure, the missing piece is a shared model

The platform-vs-protocol argument changes the category. It does not yet define the protocol.

That distinction is why this post exists at all.

When identity is sold as a platform, the provider quietly owns the most important architectural boundaries. Trust logic lives in the provider’s verifier. Disclosure rules are implemented by the provider’s APIs or SDK defaults. Runtime assumptions are carried by the provider’s deployment model. Lifecycle behavior depends on whatever the provider means by onboarding, verification, or reuse. The buyer mostly experiences the result as a metered service.

Once you reject that framing, you do not automatically get interoperability for free. You just get the right question.

Now the ecosystem has to decide what the durable, shareable parts of the identity system actually are.

That is harder than it sounds because standards and products tend to arrive from different directions. One standard emphasizes transport. Another emphasizes credential format. Another emphasizes trust distribution. A product may unify all of that inside one experience, but the unification still belongs to that product unless the underlying model is made explicit. Without a shared model, teams keep translating between format vocabulary, runtime vocabulary, governance vocabulary, and application vocabulary every time the system grows a new edge.

This is why identity keeps feeling more fragmented in implementation than it looks on standards slides.

The market does not only have many acronyms. It has too many hidden boundaries.

A verifier needs to know which issuers count. An issuer needs to know what kind of credential is being created. A wallet and verifier need a bounded request for what must be shown. An operator needs to know how the same trust and policy logic will behave in a cloud API, a private environment, or a lane device. A workflow designer needs the journey itself to remain inspectable and repeatable.

Those are not five unrelated convenience features.

They are five recurring classes of decision that serious identity systems keep re-solving.

So the real protocol problem is not “how do we serialize one credential exchange?” It is “what is the minimum shared grammar that keeps these recurring decisions from dissolving back into application-specific drift?”

That is the question MIP answers.

## The five primitives are the minimum automatable grammar

MIP’s answer is intentionally small.

Digital identity management can be represented by Trust Profiles, Credential Templates, Presentation Policies, Deployment Profiles, orchestrated by Flows.

That sentence does two jobs at once.

First, it says the protocol is about stable objects, not one favored transport or one hosted runtime. Second, it says the object model is minimal on purpose. MIP is not trying to redefine every ecosystem as one giant universal identity stack. It is trying to name the smallest set of recurring objects that still makes the system interoperable, governable, and automatable.

The easiest way to see why these five belong together is to ask what recurring question each one answers:

| Recurring question | MIP primitive | Why it deserves its own object |
| --- | --- | --- |
| Who is trusted, and how is that trust validated? | Trust Profile | Trust changes on its own cadence and should not be hidden in verifier code |
| What exactly gets issued? | Credential Template | Credential structure, validity, compliance posture, and disclosure intent should be designed once and reused |
| What must the verifier learn? | Presentation Policy | Disclosure boundaries should be governed as policy, not rediscovered in each verifier implementation |
| Where does the decision run? | Deployment Profile | Runtime constraints, device grouping, cache windows, and network mode are real architectural variables |
| How does the whole journey move? | Flow | Apply, approve, issue, present, and verify need a stable orchestration layer rather than bespoke glue |

That table is the protocol motivation in compact form.

The primitives are not arbitrary boxes. They are the places where repeated identity decisions stop leaking into code.

This is also why MIP includes supporting abstractions without promoting all of them into new core primitives. Compliance Profiles, Revocation Profiles, Wallet Profiles, Device Registration, Notification Targets, and Policy Sets all matter. They make the model usable in real ecosystems. But they remain supporting abstractions because the deeper grammar still lives in the five recurring decision surfaces.

That is a crucial line to hold.

If the model is too small, it cannot carry the real system. If the model is too large, it stops being a durable shared grammar and becomes another monolithic framework pretending to be the whole world.

MIP exists in the middle. It is small enough to stay stable and large enough to keep identity from collapsing back into transport-specific and vendor-specific improvisation.

This is where the post differs from `the-marty-identity-model`.

That article explains the full architectural grammar once the reader already accepts the need for a stable object model. This article is earlier and narrower. It explains why that minimum grammar had to exist in the first place.

Not because five is a magical number.

Because these are the recurring decisions every serious identity system already has to answer, whether it answers them explicitly or hides them in the machinery.

## Artifacts turn the protocol from theory into adoption surface

A protocol deserves attention only when it becomes inspectable.

Otherwise it is still a framing device.

This is the second reason MIP exists in the form it does. It is not enough to say that identity systems need shared primitives. Those primitives have to become artifacts that multiple implementations can actually use.

That is why the protocol surface matters so much.

The `marty-protocol/README.md` does not only name the five primitives. It also names the supporting abstractions, repository structure, standards alignment, and design principles. The formal `SPECIFICATION.md` goes further and defines validation rules, API expectations, governance, security, privacy, and conformance. The schema collection makes the objects machine-readable. The Cedar policy surfaces make authorization and evaluation logic explicit. The examples and conformance fixtures make the protocol testable. The reference implementations in Rust, Python, and TypeScript make the model portable across stacks.

Those are not decorative extras.

They are the reason the protocol can exist outside one team’s imagination.

A helpful comparison is this:

| If the idea stayed at category framing | What would still be missing |
| --- | --- |
| “Identity should be infrastructure” | No shared object contracts |
| “There are five important recurring questions” | No schemas, validation rules, or lifecycle guarantees |
| “Policies should be explicit” | No policy grammar, no governed evaluation surface |
| “Different vendors should interoperate” | No conformance or shared artifacts to prove it |

That is why `introducing-mip` and `why-marty-is-ready-for-evaluation` are adjacent but not identical to this post.

`introducing-mip` is the launch statement. It says the protocol exists and names what shipped with it.

`why-marty-is-ready-for-evaluation` is the adoption handoff. It asks whether the protocol surface is inspectable enough for serious design review.

This post sits between them. It answers why a protocol shaped like MIP needed to exist at all.

The answer is not “because identity needed one more standard.”

The answer is that identity needed a minimum shared model that could survive multiple standards, multiple runtimes, and multiple implementations without forcing everyone back into custom integration logic.

That is what the protocol is for.

It gives different teams a stable place to put trust, issuance, disclosure, deployment, and orchestration decisions. It gives implementers shared contracts instead of folklore. It gives buyers a way to evaluate architecture instead of only buying workflow. It gives future standards and ecosystem profiles a model they can attach to without becoming the whole system themselves.

That is the cleanest way to say why the Marty Protocol exists.

It exists because once identity is treated as infrastructure, the ecosystem still needs a minimum shared grammar for the parts that keep recurring. MIP names that grammar, operationalizes it, and makes it inspectable enough that interoperability does not depend on one vendor continuing to mediate every decision forever.

If you want the next step in the architectural path, continue to `the-marty-identity-model`. That post explains how the objects fit together once the need for the model is clear. If your question is whether the protocol surface is already concrete enough for a real design review, go next to `why-marty-is-ready-for-evaluation`.

## Related reading

- `why-identity-needs-a-protocol` — the category reframe that makes the protocol question unavoidable
- `the-marty-identity-model` — the stable object grammar once the protocol need is established
- `introducing-mip` — the launch-layer view of what shipped with the protocol
- `why-marty-is-ready-for-evaluation` — the artifact and deployment surface for serious reviewers

## Draft metadata

- **Slug:** `why-the-marty-protocol-exists`
- **Date:** `2026-02-27`
- **Updated date:** `2026-04-10`
- **Category:** `Announcement`
- **Topic:** `Protocol Overview`
- **Topic cluster:** `Protocol Vision`
- **Layer:** `Foundations`
- **Difficulty:** `Beginner`
- **Section:** `featured`
- **Related:** `why-identity-needs-a-protocol`, `the-marty-identity-model`, `why-marty-is-ready-for-evaluation`
- **Concept tags:** `protocol-overview`, `foundation`, `announcement`
- **Standards tags:** `OID4VCI`, `OID4VP`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** architect, evaluator, skeptical product lead
- **Likely CTA:** `the-marty-identity-model`
- **Status:** `live`
- **Batch:** `batch-18`

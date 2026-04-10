# Identity Governance Models

*Identity governance is the question of who decides which issuers, rules, and operating boundaries count once credentials have to work beyond one team or one application.*

Governance sounds abstract right up until the first real disagreement arrives.

One team wants to trust a new issuer. Another wants stricter disclosure rules. A regulator changes the logging boundary. A partner ecosystem adds a new trust source. Security wants formal approval for the change. Product wants it live before the next release window closes. Suddenly the identity system is not only about cryptography, formats, or user flows. It is about authority.

Who gets to decide what counts?

That is the real subject of identity governance.

The mistake many programs make is treating governance as an after-the-fact committee function rather than as part of the architecture itself. If the important decisions still live in scattered gateway configs, handwritten allowlists, or service-by-service exceptions, then the organization may have meetings about governance without actually having a governable system.

A stronger model starts earlier. It asks which governance shape the system is using, what trade-offs that shape creates, and where those decisions live operationally.

## Every credential ecosystem inherits a governance model

The first useful point is almost annoyingly simple.

No credential ecosystem is governance-free.

The moment an issuer produces a credential that another system may later accept, somebody has to decide whether that issuer belongs in the trusted set, which compliance rules apply, how updates are approved, and what happens when those answers change. A verifier cannot answer those questions honestly by cryptography alone. Signature validation proves who signed. It does not prove the signer should count in the first place.

That is why the governance problem appears so quickly once identity leaves a single application boundary.

Inside one tightly controlled enterprise, governance may be easy to ignore for a while because the same organization controls the issuer, the policy authors, and the verifier estate. The moment the system grows into a partner network, a regulated program, or a cross-department deployment, the hidden decisions become visible. Which issuer categories are allowed? Who can change a policy set? Which deployment inherits the update? Which audit record proves the change happened intentionally rather than by configuration drift?

Those are governance questions even when nobody uses the word.

The Marty material has a nice way of making this visible. The protocol world is already organized around objects with different owners and different rates of change. Trust, policy, compliance, runtime, and flow are not one undifferentiated blob. That separation is not only elegant architecture. It is a governance aid. If trust changes rarely, policy changes more often, and deployment conditions change per environment, then the system should expose those as different surfaces rather than forcing every change through the same engineering bottleneck.

So before comparing governance models, it helps to name the thing all of them are trying to answer.

They are all deciding who is allowed to shape the accepted trust boundary and how those decisions become durable system behavior.

## Centralized, federated, and ecosystem-led models optimize different control shapes

Once governance is visible, the next step is to stop talking about it as though every program means the same thing.

Different identity environments optimize for different control shapes.

A centralized governance model is common inside a single enterprise or agency. One internal authority owns the approved issuers, the policy boundaries, the trust settings, and the rollout path. The appeal is obvious. Decisions can move quickly. Accountability is usually clear. Change control can stay close to the teams that also operate the runtime. The trade-off is that portability beyond that organization may remain weak because the governance answer is local by design.

A federated governance model spreads authority across participating organizations that agree on a shared framework but retain local autonomy. Think of airline alliances, sector-wide education networks, or multi-organization enterprise programs. The shared layer defines what it means to belong, which trust materials are authoritative, and how common updates travel. Each participant still applies its own local policy inside that shared envelope. The advantage is portability without one permanent central runtime. The cost is coordination. Shared governance takes work, and disagreements do not disappear just because the network uses common acronyms.

An ecosystem-led or accreditation-led model is common in regulated programs. Here the deciding authority may be a government trust-list program, an accreditation body, an industry framework, or a standards-driven governance layer. The individual issuer does not invent the rules. The verifier does not invent them either. Both participate under a higher-order framework that decides acceptable trust sources, compliance obligations, and sometimes even disclosure or lifecycle expectations. The advantage is institutional legitimacy and broad interoperability. The cost is slower change, heavier external dependency, and the need to translate abstract frameworks into actual runtime objects.

None of these models is inherently “the mature one.”

They solve different problems.

Centralized governance is strong when one organization needs speed and accountability. Federated governance is strong when portability matters but local autonomy must survive. Ecosystem-led governance is strong when issuer legitimacy depends on an external framework that no one local team gets to rewrite.

What matters is whether the architecture matches the model honestly.

A system with centralized runtime ownership but vague partner onboarding rules usually becomes a political negotiation disguised as an integration task. A system that claims federation but still requires a live callback to one central authority for every decision has not really distributed trust. A system that claims regulatory alignment but still leaves critical rule changes buried in application code is not using its governance model structurally.

That is the failure Marty keeps trying to avoid.

## Governed objects beat hidden admin habits

The practical value of a governance model appears only when it becomes an operating surface.

This is where governance stops being meeting language and starts becoming architecture.

A compliance-driven rule bundle should have a place to live. In Marty, that is part of what a `Compliance Profile` is for. It translates external framework pressure into named configuration the system can review, activate, and version. A trust decision about which issuers, algorithms, or trust sources count should have its own object too. That is where a `Trust Profile` matters. Access, approval, or verification rules that would otherwise disappear into code should live in a `Policy Set`, where permit and forbid logic can be inspected rather than guessed. Deployment-specific consequences—offline behavior, lane behavior, cache windows, operating posture—belong in a `Deployment Profile`, not in hidden environment switches.

That separation does something important for governance.

It tells the organization which kind of decision is actually changing.

If a new regulation narrows what a verifier may log, that should look like a policy or compliance update, not like a scavenger hunt across handlers and middleware. If a new issuer becomes acceptable under an ecosystem framework, that should look like a trust and governance update, not like a set of private allowlist edits. If a field deployment needs different offline behavior, that should look like a deployment change, not like a second system pretending to be the same product.

The product and packaging materials reinforce the same point from a different angle. Governance scope is treated as something operationally real: trust-profile counts, policy versioning, audit retention, deployment scope, and support boundaries all scale with the governance surface being operated. That is a useful signal because it means governance is being treated as infrastructure, not as a decorative appendix to the runtime.

The real win is not that governance becomes simpler. It is that governance becomes legible.

A serious identity system should let you answer a few blunt questions quickly:

Who decides whether this issuer counts?
Where does that rule live?
How is the change reviewed?
Which deployments inherit it?
How would we explain the previous version to an auditor or a skeptical architect?

If those questions still require reverse-engineering service internals, the governance model is not yet doing its job.

Identity governance models matter because they define how authority is structured. Marty’s contribution is narrower and more practical: make that authority land in explicit objects so organizational choice becomes system behavior without dissolving into application sprawl.

If you want the next technical layer underneath that governance decision, continue to `rbac-vs-abac`. If you want the runtime surface that turns those choices into repeatable evaluation, go next to `policy-engines-for-identity-systems`.

## Related reading

- `rbac-vs-abac` — how governance becomes authorization logic
- `policy-engines-for-identity-systems` — why those rules need a governed runtime surface
- `compliance-profiles-in-practice` — how governance changes become safer when they land in configuration instead of code
- `governing-credential-ecosystems` — the multi-issuer version of the same governance question

## Draft metadata

- **Slug:** `identity-governance-models`
- **Date:** `2026-04-09`
- **Category:** `Business`
- **Topic:** `Governance`
- **Topic cluster:** `Governance`
- **Layer:** `Govern`
- **Difficulty:** `Beginner`
- **Section:** `business`
- **Related:** `compliance-profiles-bridging-regulation`, `governing-credential-ecosystems`, `policy-engines-for-identity-systems`
- **Concept tags:** `governance`, `ecosystem`, `policy`
- **Standards tags:** `(none)`
- **Lead narrator:** Elena Kovacs
- **Primary reader:** buyer, architect, governance lead
- **Likely CTA:** `rbac-vs-abac`
- **Status:** `live`
- **Batch:** `batch-17`

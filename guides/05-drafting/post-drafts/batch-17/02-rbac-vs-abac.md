# RBAC vs ABAC

*Role-based access control makes authorization legible fast. Attribute-based access control makes it nuanced. Serious identity systems usually need both, but they should know why before the policy surface gets messy.*

Authorization models become confusing when teams meet them only as implementation details.

A gateway says “admin only.” A workflow says “HR can approve this.” A verifier says “permit only if the credential is current, the issuer is trusted, and the request happens from the right environment.” Suddenly the organization is not arguing about one rule. It is arguing about what kind of rule it is even trying to write.

That is the useful starting point for RBAC and ABAC.

They are not rival slogans. They are different ways of deciding what information an access rule is allowed to care about.

RBAC asks: which role does this actor have?

ABAC asks: which attributes of the actor, resource, action, and environment matter for this decision?

Once you frame them that way, the trade-off becomes much clearer.

## Roles get you moving fast, and then start leaking exceptions

RBAC is popular for a good reason.

It makes the system understandable.

If the organization has roles such as viewer, operator, approver, and admin, then a large class of permissions can be described cleanly. Who may read users? Who may invite users? Who may modify roles? Who may administer keys? Those questions map naturally to role boundaries.

The Marty authorization surfaces show exactly why this is useful. Gateway routes can be mapped to stable action names such as `users:read`, `users:invite`, `roles:write`, `keys:write`, or `trust:write`. That already gives the system a strong starting discipline. You stop arguing about every endpoint as if it were unique and start talking about a readable action set.

This is the part RBAC does very well.

It compresses recurring decisions into a form humans can inspect.

The trouble begins when the organization discovers that “admin,” “member,” or “approver” is not actually precise enough for the live environment.

Maybe an HR manager can approve one class of application but not another. Maybe a contractor may read a record only during a limited engagement. Maybe a verifier may use one trust profile but not a second, stricter one. Maybe an API action is allowed only when multi-factor authentication has already occurred. The role still matters, but it no longer answers the whole question.

This is where RBAC starts leaking exceptions.

Teams often respond in one of two bad ways.

The first is role explosion. They create more and more narrowly named roles until the catalog becomes a graveyard of historical edge cases. The second is informal escape hatches: “admins except when…,” “members plus this hidden flag…,” or “the gateway enforces it over here.” Both approaches weaken the thing RBAC was supposed to protect in the first place, which is clarity.

So the honest critique of RBAC is not that it is primitive.

It is that roles alone cannot carry every identity decision once context starts mattering.

## Attributes recover nuance but widen the decision surface

ABAC exists because real decisions often depend on more than group membership.

The rule may care about the actor’s department, the resource’s classification, the action being attempted, the current time, whether MFA is present, which network segment the request came from, or whether a credential has a particular compliance code. None of those questions is naturally answered by a single role label.

This is why ABAC feels so attractive to security and platform teams.

It matches reality better.

A good ABAC engine makes that explicit. It evaluates conditions against a context made of principal attributes, resource attributes, the action, and environmental facts. It can compare values, check membership, inspect state, and apply ordered rules. A policy can say “permit if the actor belongs to HR and the requested resource is in the HR scope” or “deny if the request lacks MFA even if the principal otherwise looks eligible.”

That is a more faithful picture of how identity systems really behave.

It is also a wider decision surface.

Every new attribute that becomes policy-relevant has to be defined, sourced, validated, tested, and explained. A role like `admin` can be checked quickly. A condition involving department, resource pattern, time-of-day, and environment posture requires stronger discipline. The rule may be better, but it is also easier to misunderstand if the policy model is weak.

This is why ABAC should not be described as the mature replacement for RBAC.

It is the model you reach for when the decision genuinely depends on context.

Enterprise access makes the difference concrete. A role may tell you that someone is a general employee or even a manager. It may not be enough to decide whether that person should enter a sensitive HR network segment, approve a particular application class, or use a high-risk administrative path at this exact moment. Department, current posture, and resource type may matter just as much as title.

ABAC is what lets the rule admit that out loud.

The price is that the organization now needs a policy surface capable of handling nuance without dissolving into guesswork.

## Cedar can host both without splitting the architecture

The best practical answer is usually not “choose RBAC or ABAC forever.”

It is “know which part of the rule is role-shaped and which part is attribute-shaped.”

That is where Marty’s Cedar-backed approach is useful.

Roles still matter. Stable action names still matter. Route-to-action mappings still matter. Those give the organization the legibility RBAC is good at preserving.

Attributes matter too. A policy may need to inspect department, trust level, compliance code, revocation state, credential age, or MFA posture. Those are ABAC questions, and pretending they can all be flattened into more roles usually makes the system worse rather than clearer.

Cedar is a good fit precisely because it can hold both ideas in one policy surface.

You can keep a readable action model while adding explicit conditions where the decision truly depends on context. A permit rule can express the normal case. A forbid rule can express a hard boundary that should never be bypassed. The result is not “RBAC with decorations” or “ABAC everywhere.” It is a governed model where each decision can name the facts it actually needs.

That matters operationally.

If the system wants to say that HR staff may access the HR portal, that is already more precise than “admins only,” and still much easier to audit than a pile of special-case code branches. If the system later wants to require MFA for certain writes or restrict a verification path by compliance code, the same policy layer can express that without inventing a second authorization architecture.

This is the real point of the comparison.

RBAC and ABAC are not only different theories of access control. They are two different ways of keeping governance honest. RBAC keeps the role picture legible. ABAC keeps the contextual truth visible. Cedar lets the system combine the two without pretending the runtime should rediscover authorization logic separately in every service.

Use RBAC where the role really is the decision.

Use ABAC where context changes the truth of the decision.

Use one governed policy surface so the two do not drift into separate systems.

If you want the next layer underneath that combined model, continue to `policy-engines-for-identity-systems`. If you are ready to see the concrete Cedar rule surface that makes these choices operational, go next to `cedar-policies-for-identity-governance`.

## Related reading

- `policy-engines-for-identity-systems` — why rules like these need a runtime evaluation surface
- `cedar-policies-for-identity-governance` — the concrete Cedar layer beneath the comparison
- `deploy-enterprise-access` — an operational example where role and attribute boundaries both matter
- `identity-governance-models` — the governance framing behind the authorization choice

## Draft metadata

- **Slug:** `rbac-vs-abac`
- **Date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Access Control`
- **Topic cluster:** `Governance`
- **Layer:** `Govern`
- **Difficulty:** `Intermediate`
- **Section:** `implementation`
- **Related:** `policy-engines-for-identity-systems`, `cedar-policies-for-identity-governance`, `deploy-enterprise-access`
- **Concept tags:** `governance`, `access-control`, `policy-engine`
- **Standards tags:** `Cedar`
- **Lead narrator:** Elena Kovacs
- **Primary reader:** security architect, implementer, platform admin
- **Likely CTA:** `policy-engines-for-identity-systems`
- **Status:** `live`
- **Batch:** `batch-17`

# Deploying Marty for Enterprise Access

*Enterprise access gets brittle when badges, network gateways, and internal applications all ask the same identity question through different systems. Marty turns that sprawl into one governed corporate credential, many bounded checks, and a policy surface security teams can actually inspect.*

Enterprise access is usually described as one problem. In production, it becomes three: badge systems, network gateways, and internal applications all need to decide whether the same employee should be allowed through, but each surface tends to use a different stack and a different copy of the rule.

That is the problem Marty makes visible. The two tensions are explicit: **governance clarity vs application sprawl**, and **one credential vs many repeated checks**. Marty’s answer is operational rather than abstract: issue one governed corporate credential, reuse it across enterprise surfaces, bound disclosure with `Presentation Policy`, package runtime with `Deployment Profile`, and keep the access rule in `Policy Set (Cedar)` instead of scattering it through gateway config and app code.

## Fragmented enterprise surfaces

Enterprise access fragmentation starts with local optimizations. Facilities deploy badge platforms for low-latency door control. Network teams keep identity at the gateway for segment boundaries and step-up checks. Application teams inherit SAML, OIDC, and app-specific role logic because that is what their frameworks already understand. Each choice is reasonable on its own. Together, the same employee state gets translated three times.

That creates awkward drift. HR updates a record, the badge platform syncs on one schedule, the network layer syncs on another, and the HR portal may still rely on earlier group mappings or token claims. Deprovisioning, reassignment, and temporary exceptions become coordination problems instead of governed protocol decisions.

Here is the enterprise surface map Marty is trying to simplify:

| Surface | Typical legacy decision path | What gets duplicated | Where governance usually disappears |
| --- | --- | --- | --- |
| **Badge** | Physical card reader -> PACS / badge database lookup | Employment status, building zone eligibility, revocation state | Door rules and badge exceptions live in a separate access system |
| **Network** | VPN or API gateway -> LDAP / IdP / step-up middleware | Department, active employment state, device or session posture | Segment access rules drift into gateway config and identity-provider groups |
| **App** | Internal portal -> SAML/OIDC claims -> application authorization code | Role, department, workflow entitlements | Sensitive business rules get buried in app middleware and service code |

The same employee is still the subject of the decision. What changes is the surface making the request. In the legacy shape, each surface rebuilds the judgment from a different source of truth, often with another vendor call in the middle. The cost is not just latency. It is governance ambiguity.

## One credential, many checks

The important reframe is that one credential does **not** mean one giant all-seeing access token sprayed across the enterprise. It means one governed corporate credential can support multiple access decisions because each verifier asks only for the part it needs.

A concrete Marty shape starts with an HR-driven issuance flow. During onboarding or role change, HR issues an enterprise credential through a `Flow` using a `Credential Template` mapped to `ENTERPRISE_VC`. That gives the enterprise a standard SD-JWT-VC shape for claims such as `employment_status`, `department`, `role`, `cost_center`, and a short-lived access claim, with only some claims always disclosed.

The enterprise keeps one `Trust Profile` for the corporate issuer and packages badge readers, the HR network gateway, and the HR portal in a `Deployment Profile`. Each surface then applies a different `Presentation Policy`. The badge reader does not need full HR context. The gateway does not need the same disclosure set as the application. The app does not need to re-issue identity from scratch.

The HR portal example makes this concrete. Imagine an employee already working inside the standard intranet. They click from the normal intranet into a sensitive internal HR portal hosted on a separate HR network segment. At that boundary, the API gateway triggers inline verification of the Marty corporate credential. It validates the credential locally against the enterprise trust profile, checks status and freshness according to policy, and evaluates the access rule before allowing the request into the HR segment.

Crucially, that decision resolves locally in **under 20 ms**. There is no external Okta API roundtrip in the middle of the path. The gateway is not re-asking a remote identity provider to rediscover the employee’s department every time the person crosses the boundary. It is verifying a governed credential and applying local policy.

Here is what “one credential, many checks” looks like across the estate:

| Surface | What the verifier asks for | Access decision produced |
| --- | --- | --- |
| **Badge** | `employment_status == active` plus a building or zone mapping | Unlock the door or deny entry at the physical boundary |
| **Network** | Active credential plus the claims needed for HR-segment routing | Allow or deny movement from intranet to the HR network |
| **App** | The minimum claims needed for the sensitive portal action | Allow portal session creation and downstream application authorization |

Notice what changed. The employee did **not** receive three separate credentials. The enterprise did **not** write three unrelated access stacks. The organization reused one governed credential and let each access surface make a narrower decision with its own policy. This is not one bloated session token; it is one reusable credential queried differently by each verifier.

## Governance and operational payoff

This is where Elena’s governance lens matters. The key enterprise question is not just whether the gateway can verify a credential. It is whether the organization can state, inspect, and safely change the rule surface that governs access.

For the HR network boundary, the Cedar rule can be as direct as the evidence packet promised:

```cedar
permit(principal, action == "AccessHR") when {
  principal.department == "HR"
};
```

That example is intentionally simple because simplicity is part of the point. The organization can look at the rule and understand it. The API gateway can enforce it locally. Audit teams can tie the decision to a governed `Policy Set (Cedar)` instead of reverse-engineering several app branches and gateway exceptions.

You can think of the enterprise access decision as two layers working together:

| Layer | Marty object | What it controls | Why it matters |
| --- | --- | --- | --- |
| **Disclosure boundary** | `Presentation Policy` | Which claims the surface may request from the corporate credential | Prevents over-disclosure and keeps badge, network, and app checks appropriately narrow |
| **Authorization rule** | `Policy Set (Cedar)` | Whether the verified subject is allowed to perform the specific access action | Makes access logic auditable, versioned, and safer to change |

That separation reduces change friction. If HR contractors should get portal access only during payroll week, you update policy and, if needed, the presentation requirement. You do not patch badge firmware, rewire gateway middleware, and redeploy the application just to move one entitlement boundary.

The operational payoff is just as important. A local verification path under 20 ms feels different from a runtime that has to call outward for every sensitive check. The enterprise network stays fast. The gateway remains useful during upstream IdP turbulence. The application team stops carrying the full burden of identity translation in service code. Security leads also get a cleaner answer to the review question that always matters: **where exactly does this access rule live?**

In Marty, the answer is explicit: trust lives in the trust profile, disclosure lives in the presentation policy, runtime placement lives in the deployment profile, and the access decision lives in Cedar. That is what governed infrastructure looks like.

If your next question is how to manage those rule surfaces across multiple regulatory and enterprise contexts without exploding back into custom code, continue to `compliance-profiles-in-practice`. That is the next layer where governance clarity becomes durable.

## Related reading

- `same-trust-model-different-runtime` — why runtime placement should change latency and resilience assumptions, not the trust model itself
- `deployment-profiles-in-practice` — how to choose hosted, self-hosted, or edge runtimes without rewriting access logic
- `cedar-policies-for-identity-governance` — the deeper governance surface behind Marty’s explicit rule model
- `compliance-profiles-in-practice` — the next step for teams that need governance changes to travel as configuration rather than application rewrites
- `why-marty-is-ready-for-evaluation` — where to inspect the spec, schemas, Cedar artifacts, and deployment surfaces directly

## Draft metadata

- **Slug:** `deploy-enterprise-access`
- **Date:** `2025-07-10`
- **Updated date:** `2026-10-07`
- **Category:** `Technical`
- **Topic:** `Enterprise Access`
- **Topic cluster:** `Deployment Patterns`
- **Layer:** `Deploy`
- **Difficulty:** `Intermediate`
- **Section:** `business`
- **Related:** `deploy-airline-boarding`, `deploy-age-verification`, `deployment-profiles-in-practice`
- **Concept tags:** `deployment`, `enterprise`, `policy-engine`
- **Standards tags:** `SD-JWT`, `Cedar`
- **Lead narrator:** Sofia Rahman *(support from Elena Kovacs where governance clarity matters)*
- **Primary reader:** enterprise architect, security lead
- **Likely CTA:** `compliance-profiles-in-practice`
- **Status:** `live`
- **Batch:** `batch-04`

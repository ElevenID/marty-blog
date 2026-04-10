# Compliance Profiles in Practice

*Compliance only looks like paperwork from a distance. In production, it is the question of whether changing a rule means updating governed configuration or reopening application code in every regulated surface you own.*

A regulated identity system does not fail only when the cryptography is weak. It also fails when nobody can say which rule changed, where it lives, and how it reaches production. That is the center of compliance work: audit boundaries, logging restrictions, disclosure limits, trust-list updates, and regulatory carve-outs.

Elena Kovacs’s point is blunt: if governance logic is scattered through services and verifier apps, you do not have a compliance model. You have a change-management liability. Aiko Tanaka adds the standards lens: every ecosystem arrives with different trust assumptions and deadlines. The job is not to erase those differences, but to stop them from becoming a separate architecture every time the acronym changes.

## 1. Regulatory fragmentation

For a compliance lead or regulated architect, fragmentation rarely begins as an abstract standards debate. It begins as a pile of obligations that refuse to line up neatly. Retail age checks need minimal disclosure. European relying parties must accept EUDI wallet behavior and trust-list rules. Travel environments must preserve ICAO trust chains and offline tolerance. Enterprise portals need local governance and low-latency enforcement. The failure begins when each one becomes its own code path.

That is why the landscape feels more fragmented in production than it does in white papers. Teams often answer each framework with its own stack: one verifier path for AAMVA, another for EUDI, another for enterprise access, another for travel. Logging rules settle into handlers, trust anchors into service logic, and audit behavior into whatever the last team shipped. That is application sprawl.

The result is Elena’s central tension: **governance clarity vs application sprawl**. Legal and compliance teams need one answer to a simple question—what changed, and where? ICAO, AAMVA, EUDI, Open Badges, and enterprise trust frameworks are not chaos. They reflect different institutional settings. The chaos starts when each standards cluster becomes a reason to fork the architecture.

That is the point of Marty’s compliance abstraction. The architecture must preserve real differences in trust, disclosure, and governance, but it must preserve them in explicit objects. Otherwise every external rule becomes a private implementation detail, and private implementation details are where regulated systems become ungovernable.

## 2. The compliance-profile translation layer

A compliance profile is not a checkbox on a vendor slide. It is a translation layer that turns an external framework or rule bundle into explicit Marty objects: which formats are in scope, which trust assumptions apply, which presentation requirements are valid, which policy set must be evaluated, and which deployment surfaces inherit the result.

If you want a regulated buyer to imagine using this abstraction, picture a governed control plane entry for a verifier program: a named compliance profile, linked trust profile, linked presentation policy, linked Cedar policy set, versioned rollout, deployment scope, approver, and activation timestamp. In other words: an object a team can review, diff, approve, and deploy.

In practice, the translation usually decomposes like this:

- **Compliance Profile** names the governing bundle and declares the format and protocol defaults.
- **Trust Profile** says who is trusted and how validation happens.
- **Presentation Policy** says what must be shown and how much disclosure is acceptable.
- **Policy Set (Cedar)** expresses hard permit/forbid rules that should not be left to endpoint habit.
- **Deployment Profile** determines where that governed bundle runs and how it reaches real devices, APIs, or verifier lanes.

That decomposition is what keeps compliance from dissolving into vague “support” claims. A team can point to the exact surface where a change belongs.

### Regulation-to-profile translation table

| External rule or framework | Translation in Marty | Runtime effect |
| --- | --- | --- |
| **New state-level PII rule:** routine age checks may not log transaction IDs | Rev the age-check **Compliance Profile**; attach a Cedar rule forbidding `LogTransaction` for that verifier scope; keep the **Presentation Policy** at the `age_over_21` predicate | The age decision still completes, but the transaction ID is no longer retained |
| **EUDI PID acceptance** for a regulated web relying party | Activate an `EUDI_PID` **Compliance Profile** and bind it to an EU-list-backed **Trust Profile** and the required **Presentation Policy** | EUDI support arrives as governed profile activation, not bespoke app logic |
| **AAMVA mDL retail age check** | Use an `AAMVA_MDL` **Compliance Profile** with a retail **Presentation Policy** that prefers a boolean age predicate | Kiosks and web verifiers request only the proof they need |
| **Enterprise HR portal access** with internal credential governance | Use an `ENTERPRISE_VC` or custom enterprise **Compliance Profile**; bind it to an internal issuer registry via **Trust Profile**; enforce access through Cedar-backed policy | One enterprise credential can support multiple access decisions without embedding governance logic in each app |

The completed evidence scenario makes the value concrete. Suppose a new state-level PII regulation prohibits logging transaction IDs for routine age checks. In a conventional stack, legal opens tickets, engineers hunt logging handlers, QA checks retention jobs, and a backend release gets queued. That is exactly the sort of narrow rule change that becomes expensive because the rule surface was never made explicit.

In Marty, the safer path is a policy and profile update. The team versions the relevant age-check profile. Security reviews a Cedar rule such as `forbid(principal, action == "LogTransaction", resource)` for the relevant verifier scope. The presentation policy stays intentionally narrow—ask only for `age_over_21 == true`, not for a broader license payload. Operations activates the updated bundle for the affected verifier scope.

The important outcome is operational: behavior changes **without a backend application redeploy**. The evaluator code stays the same. The governed rule changes.

## 3. Configuration beats code

“Configuration beats code” does **not** mean code disappears. It means the stable evaluator is written once, and regulated change lands in governed configuration whenever possible. That is the second tension this post needs to keep explicit: **configuration vs custom code**. Custom code feels fast when the first exception arrives. It feels much less clever when the fifth regulator and third audit team need the change explained.

### Change management: custom code vs governed configuration

| Change request | Custom-code path | Governed configuration path | Governance consequence |
| --- | --- | --- | --- |
| Ban transaction ID logging for routine age checks | Modify backend logging handlers, test retention side effects, redeploy services | Update the compliance profile and Cedar policy set for the verifier scope | Faster rollout, cleaner audit trail, less risk of missed code paths |
| Accept a new trust-list version or regulatory trust source | Touch verifier logic or trust-loading code in each application surface | Update the linked Trust Profile and activate the new bundle | Security can review one trust change instead of many app changes |
| Tighten holder-binding for a high-risk verifier journey | Add special-case logic in the verifier app | Adjust Presentation Policy and policy-set requirements for that scope | Rule intent stays explicit and reviewable |
| Change offline grace behavior for a deployment | Fork runtime logic per kiosk or lane | Update the Deployment Profile for the affected environment | Operations owns runtime variance without rewriting trust logic |

This is where governance clarity and application sprawl finally separate. In the custom-code model, every application gradually becomes its own compliance interpreter. In the governed-configuration model, applications execute a stable protocol runtime while profiles and policies carry the variation. That is a better operational model for regulated buyers because it answers the questions procurement and risk teams eventually ask anyway: which object expresses the rule, who approved the change, which deployments inherited it, and can we inspect the prior version?

Regulated programs do not merely need the right answer. They need an inspectable path to the right answer. A versioned compliance profile plus Cedar policy set is inspectable. A pile of service tickets and logging patches is not.

That is why the translation layer matters even if you are not thinking about EUDI, AAMVA, or ICAO every day. The same discipline that handles standards diversity also handles the less glamorous rule changes that dominate real compliance work: logging bans, retention adjustments, disclosure narrowing, issuer eligibility changes, and verifier-scope exceptions. If the architecture treats those as profile and policy changes, the system stays governable. Otherwise sprawl wins.

If you want to see how the same profile-driven approach stretches across travel, retail, enterprise, and education without turning into an integration catalog, continue to `one-protocol-many-ecosystems`. If you are already in evaluation mode, inspect the Marty protocol README, the specification, and the Cedar policy artifacts before accepting anyone’s claim that their compliance model is “just configuration.” In a regulated system, you should be able to see the control surface.

## Related reading

- `compliance-profiles-bridging-regulation` — the flagship framing for how standards bundles map into Marty primitives.
- `one-protocol-many-ecosystems` — the adjacent proof that the same object model can span multiple sectors without a new architecture each time.
- `presentation-policies-minimum-disclosure` — why disclosure boundaries belong in policy, not in verifier habit.
- `cedar-policies-for-identity-governance` — the concrete policy language behind Marty’s governed rule surfaces.
- `deployment-profiles-from-design-to-production` — how runtime differences stay explicit without changing the trust model.

## Draft metadata

- **Slug:** `compliance-profiles-in-practice`
- **Date:** `2025-06-29`
- **Updated date:** `2026-09-25`
- **Category:** `Business`
- **Topic:** `Compliance Profiles`
- **Topic cluster:** `Governance`
- **Layer:** `Govern`
- **Difficulty:** `Advanced`
- **Section:** `business`
- **Related:** `compliance-profiles-bridging-regulation`, `cedar-policies-for-identity-governance`, `building-trust-registries-at-scale`
- **Concept tags:** `compliance`, `governance`, `policy`
- **Standards tags:** `ICAO 9303`, `eIDAS 2.0`, `Open Badges v3`
- **Lead narrator:** Elena Kovacs (support from Aiko Tanaka)
- **Primary reader:** Compliance lead, regulated architect
- **Likely CTA:** Continue to `one-protocol-many-ecosystems` or move into evaluation materials (`marty-protocol/README.md`, `SPECIFICATION.md`, Cedar artifacts)
- **Status:** `live`
- **Batch:** `batch-04`

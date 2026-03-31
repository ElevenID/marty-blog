# One Protocol, Many Ecosystems

*The identity market does not lack standards. It lacks a stable way to operationalize them together. Marty treats ecosystem variation as profile data, not as a reason to rebuild the architecture every time the acronym changes.*

A standards-minded architect eventually reaches the same question: travel has ICAO and offline gates, Europe has EUDI, enterprise access has its own policy and latency constraints, education has Open Badges, and healthcare brings licensure and cross-network trust. On paper, each looks like a different world.

That is why breadth claims usually sound suspicious. Many products “support” multiple ecosystems by collecting one-off integrations. Marty is making a stricter claim: these ecosystems are not the same, but their differences should not force a different identity architecture every time. That is where **standard fidelity vs implementation sanity** and **portability vs lock-in** stop being slogans and become design questions.

Marty does not replace standards. It organizes them through one stable object model.

## Why ecosystems fragment

Ecosystems fragment because each standards cluster arrives with bundled assumptions about trust, disclosure, runtime, and governance cadence. ICAO bundles PKD-backed trust and offline gate pressure. EUDI bundles trust lists, wallet behavior, and regulatory deadlines. Enterprise access bundles internal issuer governance and local step-up decisions. Open Badges bundles a portable credential format but not a full trust framework. Healthcare often bundles professional licensure, institutional trust boundaries, and referral portability without one dominant global profile.

That does not make the standards weak. It means they are scoped. Each one solves a local institutional problem well. Fragmentation appears when teams turn each scope into a separate implementation stack. Trust anchors get hardcoded, credential logic becomes format-specific code, policies disappear into endpoints, and offline behavior becomes exception handling. What should have been profile data becomes application branching.

That is why the market feels more fragmented in production than in theory. The issue is not too many standards. It is the lack of a protocol-level grammar that can absorb them without recreating the architecture every time.

## Marty absorbs variation without changing the model

Marty keeps the model stable and lets variation enter through explicit profiles and governed objects. The core primitives remain `Trust Profile`, `Credential Template`, `Presentation Policy`, `Deployment Profile`, and `Flow`. Supporting abstractions such as `Compliance Profile`, trust registries, and Cedar policy sets translate ecosystem-specific rules into that model.

That is the difference between a protocol and an integration catalog. A protocol creates stable places for trust, disclosure, runtime, and orchestration to live; an integration catalog simply remembers previous special cases.

Here is where the ecosystem-specific variation actually lands:

| Marty layer | What varies by ecosystem | How Marty absorbs it without changing the core model |
| --- | --- | --- |
| **Compliance Profile** | Standard bundle such as `ICAO_DTC`, `EUDI_PID`, `ENTERPRISE_VC`, `OB3_JWT`, or a custom healthcare profile | Encodes format, issuance protocol, and compliance defaults as a named bundle rather than as a new architecture |
| **Trust Profile** | ICAO PKD, EU trust lists, enterprise issuer registries, medical licensing registries, accreditation authorities | Keeps trust anchors, validation rules, and revocation expectations explicit and governable |
| **Credential Template** | `PreBoardingClearance`, `MedicalBoardLicense`, `CorporateBadge`, `OpenBadgesDegree` | Defines what gets issued, with which claims, validity rules, and disclosure posture |
| **Presentation Policy** | Boarding freshness and holder binding, licensure status checks, HR step-up rules, employer verification requirements | Keeps the decision boundary and minimum disclosure logic in policy instead of application code |
| **Deployment Profile** | Hybrid airport gate, hospital portal, local API gateway, employer verifier, kiosk or web runtime | Packages the operational envelope without forcing a new trust model |
| **Flow** | Check-in to gate, licensure issuance to verification, onboarding to access decision, badge issuance to employer review | Orchestrates the lifecycle using the same protocol grammar across different sectors |

This is how Marty resolves **standard fidelity vs implementation sanity**. Travel can keep ICAO trust anchors and freshness rules. EUDI can keep its trust-list and wallet expectations. Enterprise access can keep low-latency local enforcement. Open Badges can keep its format while gaining explicit trust governance. The ecosystem-specific assumptions stay visible; the object model does not change.

That matters commercially as well as technically. When a new regulated profile arrives, teams should update trust material, policy, and deployment data—not reopen the architecture or deepen vendor lock-in. EUDI is useful here precisely because it shows the pattern: new standards pressure should add a compliance bundle, not a sixth primitive.

## Breadth is the proof

Breadth is not proved by having a long standards list in a slide deck. It is proved when the same architectural grammar still reads clearly after you move from airport gates to healthcare credentialing, from enterprise access to education credentials.

| Ecosystem | Dominant external assumptions | Example Marty shape | What the example proves |
| --- | --- | --- | --- |
| **Travel / aviation** | ICAO Doc 9303 / DTC, PKD-backed trust, gate throughput, hybrid or offline verification | `PreBoardingClearance` template + ICAO Trust Profile + gate Deployment Profile + boarding Flow | Marty can handle high-assurance travel rules and edge runtime pressure without a separate model |
| **Healthcare** | Professional licensure, institutional trust networks, referral portability, cross-organization verification | `MedicalBoardLicense` template + decentralized trust-registry anchor + healthcare verification policy | Marty can model regulated professional trust and portability across institutions, even where no single global profile dominates |
| **Enterprise access** | Internal issuer governance, step-up policy, low-latency local enforcement across badge, app, and gateway surfaces | `CorporateBadge` or `ENTERPRISE_VC` + access policy + local Deployment Profile | One credential can support many verification moments without fragmenting policy and trust logic |
| **Education / Open Badges** | Open Badges 3.0 format, accreditation trust gap, employer-side verification requirements | `OpenBadgesDegree` template + Open Badges compliance profile + accreditation-oriented Trust Profile | Format portability is not enough; Marty adds the trust governance that makes education credentials reliable outside the issuer’s silo |

Travel shows the model under field pressure. Marty’s `PreBoardingClearance` example pairs an ICAO-oriented trust profile, a short-lived credential template, a boarding policy, and a hybrid gate deployment. That keeps trust-anchor freshness, holder binding, and offline tolerance explicit instead of burying them in device code. It also scales to partner travel scenarios, where another carrier can validate a credential locally against shared trust material rather than calling the issuer’s API.

Healthcare proves the model still holds when the ecosystem is less neatly standardized. A `MedicalBoardLicense` template anchored in a professional registry can be verified across hospital or telehealth boundaries under explicit policy, while the same portability logic reduces repeated verification across affiliated care networks. The absence of one global healthcare profile is not a reason to abandon the model; it is a reason to prefer one that can absorb local trust variation without rewriting the stack.

Enterprise access proves the reuse argument. A `CorporateBadge` or generic `ENTERPRISE_VC` can support building entry, gateways, and sensitive web applications while Presentation Policies handle the decision differences. The current enterprise example is intentionally concrete: a local HR-portal check, a step-up rule on department, and a fast local decision instead of another external API round-trip. One credential, many checks, one policy surface.

Education proves that format alone is not enough. Open Badges 3.0 gives the ecosystem a portable credential shape, but not the full trust framework employers and institutions need. Marty adds that missing layer by mapping badges to credential templates, accreditation bodies to trust profiles, and verification requirements to presentation policies. The result is an education credential that can travel farther than the original issuer’s silo.

Seen together, the four cases keep different protocols, trust anchors, and runtime conditions, but the same architectural questions: who is trusted, what is issued, what must be shown, where verification runs, and how the journey is orchestrated. That is why one protocol can span many ecosystems without pretending they are identical.

If you want the cleanest bounded proof before moving into evaluation, continue to `deploy-membership-credentials`. It shows the same portability logic working in a non-government ecosystem where shared trust matters more than credential format alone. Then do something concrete in your own environment: map your trust source, credential type, disclosure boundary, runtime constraints, and flow to a Marty deployment path. If the map stays coherent, move into `why-marty-is-ready-for-evaluation` instead of treating your ecosystem as another one-off integration.

## Related reading

- `eudi-wallet-readiness` — why regulatory pressure in Europe makes profile-based compliance urgent.
- `compliance-profiles-bridging-regulation` — the clearest explanation of how standards bundles map into Marty primitives.
- `deploy-membership-credentials` — one bounded non-government proof that portable trust matters beyond state-issued identity.
- `mip-and-open-badges-education-credentials` — how Marty adds trust governance to education and workforce credentials.
- `deployment-profiles-from-design-to-production` — why runtime variation belongs in deployment profiles, not in a new trust model.
- `flows-orchestrating-identity-lifecycle` — how the same object model becomes a working journey.
- `why-marty-is-ready-for-evaluation` — the handoff from conceptual confidence to practical inspection.

## Draft metadata

- **Slug:** `one-protocol-many-ecosystems`
- **Lead narrator:** Aiko Tanaka
- **Primary reader:** Standards-minded architect, regulated buyer, skeptical sponsor
- **Likely CTA:** `deploy-membership-credentials` or `why-marty-is-ready-for-evaluation`
- **Batch:** `batch-02`

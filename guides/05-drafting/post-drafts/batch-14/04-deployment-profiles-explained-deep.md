# Deployment Profiles Explained

*Deployment Profiles package trust, templates, and policies for runtime execution. This post provides a complete technical walkthrough of how network mode, lanes, devices, cache windows, and update behavior turn abstract identity rules into real endpoints.*

A protocol only becomes real when it reaches a real endpoint.

That sounds obvious, but it is where a lot of otherwise thoughtful identity designs become fragile.

A team may define the right trust anchors, the right credential template, and the right presentation policy. Then the real world arrives: a gate loses connectivity, a kiosk runs stale cache, one scanner in a lane needs a different default policy, a mobile verifier must work offline for a bounded window, or an operator needs a visible interface on one device but not another. At that point, many systems fall back to ad hoc environment-specific code.

Deployment Profiles exist so that operational reality can stay explicit too.

The short explainer introduced the idea that the same trust logic can survive across cloud, hosted, and offline environments. This deeper pass explains the object that makes that claim believable. A Deployment Profile is not just a hosting note. It is the runtime contract that binds trust, presentation policies, optional issuance capability, device groupings, and operational posture into one endpoint-facing object.

That is why this primitive matters so much to operators. It is where architecture stops being a diagram and starts becoming a set of real scanners, kiosks, APIs, mobile surfaces, and update rules.

## A deployment profile is the runtime contract

It is tempting to think the deployment layer appears only after the “real” protocol work is done.

In Marty, it is one of the core primitives because trust and policy still need an operational envelope before they can run safely anywhere.

A Deployment Profile begins by binding a `trust_profile_id` to one or more `presentation_policy_ids`. That alone makes the object more consequential than an environment variable set. It is saying: these are the trust assumptions and verifier questions that govern this endpoint.

The object can also enable `credential_template_ids` for issuance-capable environments. That is an important detail because some endpoints only verify, while others can issue as well. The Deployment Profile is honest about whether the endpoint is verification-only or whether it also participates in issuance.

Then there is `default_policy_id`.

That field reveals something subtle about the primitive. A deployment can expose more than one policy while still needing one default operational path. A gate may have a standard boarding policy and a second step-up policy. A portal may have one ordinary check and one stronger path for privileged access. The Deployment Profile is where that menu becomes operational instead of remaining conceptual.

This is the first deep lesson to keep clear: a Deployment Profile is the contract that tells a real endpoint which trust and verification behaviors it is allowed to run.

Without it, teams end up re-encoding policy selection, issuance capability, and environment assumptions separately in each endpoint surface. That is exactly the kind of drift the primitive is designed to stop.

## Network mode, lanes, and device assignment define runtime shape

Once the contract exists, the next question is how the endpoint is actually shaped.

This is where the primitive becomes more visibly operational.

The specification distinguishes `ONLINE`, `OFFLINE`, and `HYBRID` network modes. Those are not just labels for infrastructure teams. They signal how the endpoint expects to behave around trust refresh, revocation, and connectivity.

An online deployment assumes live access is part of the normal runtime. An offline deployment assumes the opposite and therefore must rely on pre-cached material with bounded grace behavior. A hybrid deployment expects to use live information when available but continue operating with cached trust when the network is degraded.

That distinction matters because the same Trust Profile can behave very differently depending on the deployment posture wrapped around it. The trust logic may be the same. The operational envelope is not.

Lanes make the same point from a physical and logical angle.

A Deployment Profile does not stop at “this airport” or “this kiosk fleet.” It can define lanes, each with its own name, devices, and optional default-policy override. A lane might be Gate 12 North, a specific border booth cluster, or a logical mobile-verification fleet in one region. This is where the model stops talking about identity in the abstract and starts naming the actual zones where verification occurs.

The device assignments matter for the same reason. A real deployment needs to know which devices belong to which operational zone, and the specification requires device identifiers to remain unique across lanes in the same profile. That sounds like a small constraint until you remember how quickly operational ambiguity turns into support ambiguity. If one device can appear in two lanes at once, the runtime no longer has a clean picture of where a verifier action actually happened.

Environment configuration adds the human and local-operational layer.

Language, signage text, operator mode, accessibility mode, and offline cache TTL sit here because endpoint behavior is not only about cryptography. A verifier kiosk is still a real interface in a real environment. The primitive includes those details so operators do not need to bolt them on separately and then pretend they are unrelated to deployment governance.

This is the second deep lesson of the object: network mode, lane structure, device ownership, and interface posture are part of the runtime shape, not incidental implementation debris.

## Update channels and cache rules turn architecture into operations

The final layer is what keeps deployment behavior credible over time.

A runtime is only as trustworthy as its upkeep.

That is why cache windows and update behavior are so central to the primitive. In constrained or disconnected environments, trust material and policy cannot refresh continuously. But that does not mean the endpoint gets an infinite offline fantasy. The Deployment Profile makes cache duration explicit through fields like `offline_cache_ttl_seconds`, while the broader deployment posture tells the operator what kind of runtime behavior is actually expected.

This is where the primitive meets the offline-verification story directly.

An endpoint running offline is not simply “the same thing but without internet.” It is operating under bounded assumptions. Cached trust, cached revocation posture, cached policies, and operator fallback behavior all need to stay inside declared windows. The Deployment Profile is what tells the runtime which window it is allowed to live inside.

Update channels reinforce the same operational discipline.

A deployment can follow a `stable`, `beta`, or `pinned` update channel. That may sound like release engineering, but it is also protocol safety. One operator may need controlled rollout across a large fleet. Another may need version pinning for a regulated environment. The primitive lets those decisions stay explicit instead of hiding them in side documentation and one-off scripts.

`key_access_mode` matters for the same reason. A deployment may depend on a key vault, HSM, or device keystore depending on what the environment can support. This is another reminder that deployment is not only about where the endpoint runs. It is about which operational assumptions the runtime is allowed to make while it runs there.

Even the constraint rules tell the same story. A deployment must have at least one presentation policy. Its default policy, if present, must already be enabled. An issuance-capable deployment may only point at active credential templates. These rules stop the endpoint from drifting into a state where the operator thinks it is configured but the runtime is actually ambiguous.

That is the right place to land the deep explanation. A Deployment Profile is the runtime contract because it binds trust and policy to real endpoint posture: network mode, lanes, devices, cache windows, update behavior, issuance capability, and human-operational configuration. It is the object that lets one trust model survive many environments without pretending those environments are operationally identical.

Once readers see that, the broader deployment story becomes clearer. `deployment-profiles-in-practice` can then focus on choosing among environments because the primitive itself already explained how runtime packaging works. And `same-trust-model-different-runtime` can make a stronger claim because the operational boundary is no longer hand-waved.

If you want the next operational layer, continue to `deployment-profiles-in-practice`. If you want the offline runtime consequences, go next to `offline-verification-guide`. If you want the broader live synthesis that reconnects deployment to the other primitives, return to `the-marty-identity-model` or `five-primitives-in-one-picture`.

## Related reading

- `deployment-profiles-from-design-to-production` — the shorter conceptual explainer for the same primitive
- `deployment-profiles-in-practice` — how operators choose among deployment shapes once the primitive is understood
- `offline-verification-guide` — the runtime consequences of offline and hybrid operation
- `same-trust-model-different-runtime` — the broader Marty claim that one trust model can survive many environments
- `the-marty-identity-model` — the current live synthesis that reconnects this primitive to the rest of the protocol model

## Draft metadata

- **Slug:** `deployment-profiles-explained-deep`
- **Date:** `2026-03-28`
- **Updated date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Deployment Profiles`
- **Topic cluster:** `Core Protocol`
- **Primitive:** `Deployment Profiles`
- **Layer:** `Deploy`
- **Difficulty:** `Advanced`
- **Section:** `core-protocol`
- **Related:** `deployment-profiles-from-design-to-production`, `deployment-profiles-in-practice`, `offline-verification-guide`
- **Concept tags:** `deployment-profile`, `core-object`, `deployment`
- **Standards tags:** `OID4VP`, `ICAO 9303`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** operator, platform architect, implementer
- **Likely CTA:** `deployment-profiles-in-practice`
- **Status:** `live`
- **Batch:** `batch-14`

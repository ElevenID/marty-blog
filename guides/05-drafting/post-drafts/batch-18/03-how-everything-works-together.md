# How Everything Works Together

*Trust Profiles, Credential Templates, Presentation Policies, Deployment Profiles, and Flows — this post shows how all five MIP primitives compose into end-to-end identity systems.*

By the time readers reach this point, they usually have the opposite problem from the one they had at the beginning.

At the beginning, identity felt like acronym fog.

Now the model is visible. Trust Profiles, Credential Templates, Presentation Policies, Deployment Profiles, and Flows all make sense individually. The standards story is cleaner. The privacy story is clearer. The runtime story is less hand-wavy. And yet one last risk appears: the reader understands the boxes and still cannot see the system move.

That is the gap this post is meant to close.

`five-primitives-in-one-picture` gives the map. `the-marty-identity-model` gives the grammar. The primitive deep dives explain each major object on its own terms. What is still missing is the capstone view: what happens when one real credential journey activates all five at once?

Daniel’s answer is not to invent a sixth abstraction. It is to show that the model already contains the motion.

A serious identity system does not bounce randomly between objects. It moves through a predictable composition. Trust defines who counts. A template defines what can exist. A flow turns that definition into lifecycle motion. A presentation policy narrows what a verifier may learn. A deployment profile packages the same judgment for the runtime that must actually execute it.

Once that composition is visible, the whole publication changes shape. The primitives stop looking like a shelf full of labeled parts and start looking like one system that can survive new ecosystems, new standards, and new runtime conditions without reinventing itself every time.

## One credential journey activates every primitive

Start with one concrete scenario.

A traveler applies for a pre-boarding clearance credential before arriving at the airport. The issuing organization needs to verify the traveler’s source evidence, decide whether the traveler satisfies the clearance rules, issue a short-lived credential, and let that credential be presented later at a gate where connectivity may be imperfect and the queue will not wait politely for the architecture to think things over.

That sounds like one journey because it is.

What matters is that the journey activates every primitive in order.

The first question is trust.

Which issuers, trust anchors, registries, or root material count for the source evidence being verified? That is Trust Profile work. The issuing side and later the verifying side both need an explicit contract for what they trust, how they validate it, how revocation or freshness works, and what happens when trust material is stale or missing.

The second question is what kind of credential is being created.

Is this a long-lived identity artifact or a short-lived operational credential? Which claims belong in it? How long is it valid? Which compliance or format expectations govern it? Which claims are always disclosed, selectively disclosed, or shaped for predicate use? That is Credential Template work.

The third question is how the whole thing moves.

The traveler applies. The evidence is reviewed. The credential is issued. Later it is presented. Still later it is verified. The movement from one governed state to the next is not accidental glue. That is Flow work. Flow is the primitive that sequences the journey so the system behaves like a lifecycle instead of a stack of disconnected components.

The fourth question is what the gate verifier is allowed to learn.

The gate does not need every fact the issuer ever knew about the traveler. It needs the bounded facts required for the boarding decision under the right freshness and holder-binding conditions. That is Presentation Policy work. The policy defines whether the verifier wants a claim, a predicate, stronger holder binding, or a stricter revocation posture. It turns a vague business rule into an explicit request boundary.

The fifth question is where this judgment will run and under what runtime constraints.

A cloud verifier, a private terminal cluster, and a gate device do not live under the same network and latency assumptions. One may prefer live status checks. Another may need hybrid or offline-friendly behavior with clear cache windows and failure ladders. That is Deployment Profile work.

Seen end to end, the journey looks like this:

| Journey moment | Primitive doing the work | Question it answers |
| --- | --- | --- |
| Source evidence is evaluated and trusted issuer material is loaded | Trust Profile | Who counts, and under what cryptographic and freshness rules? |
| The clearance artifact is defined | Credential Template | What exactly gets issued, with which claims, validity, and disclosure posture? |
| The traveler moves from application to issuance to later use | Flow | How does the governed lifecycle advance from one stage to the next? |
| The gate asks only for the proof it needs | Presentation Policy | What may the verifier learn, and how strong must that proof be? |
| The decision runs at a real gate under real constraints | Deployment Profile | Where does the same trust and policy judgment execute in practice? |

This is the first thing the capstone is supposed to make obvious.

A real credential journey does not “use a protocol” in the abstract. It composes five different classes of decision.

That same pattern shows up outside travel too. An HR credential issued for enterprise access still needs trust rules, a credential definition, lifecycle motion, bounded disclosure, and a runtime envelope. A retail age-verification flow still needs trust, issuance design, policy, and runtime packaging even if the journey is shorter and the verifier’s question is simpler. The specific stakes change. The composition does not.

## The primitives answer different questions and hand cleanly to one another

The reason the model stays stable is that the primitives do not duplicate one another.

That sounds obvious until you look at how older systems actually fail.

When Trust Profiles are missing, trust logic leaks into verifier code, certificate bundles, allowlists, and incident-driven exceptions. When Credential Templates are weak, issuance meaning leaks into controller logic and one-off payload assembly. When Presentation Policies are vague, disclosure boundaries get rebuilt inside each verifier integration. When Deployment Profiles are missing, runtime differences become separate systems pretending to be one product. When Flows are absent, lifecycle orchestration dissolves into custom queue logic, callback glue, and scattered application state.

Marty’s real contribution is not that it names five things.

It keeps five different kinds of logic from collapsing into one another.

A compact comparison makes that easier to see:

| Primitive | Core question | What leaks into code if it is missing |
| --- | --- | --- |
| Trust Profile | Who is trusted, and how is trust validated? | Hardcoded issuers, trust anchors, revocation assumptions, format-specific trust branches |
| Credential Template | What gets issued? | Ad hoc payload assembly, duplicated claim rules, format-specific issuance logic |
| Flow | How does the journey move? | Bespoke orchestration, callback sprawl, stage logic scattered across services |
| Presentation Policy | What must be shown? | Verifier-specific disclosure logic hidden in endpoints, forms, and app handlers |
| Deployment Profile | Where does the same judgment run? | Environment forks, stale-data improvisation, runtime behavior encoded as feature flags |

This is the second major capstone point.

The primitives are not interchangeable labels for “identity stuff.” They are adjacent decision surfaces with different owners, different rates of change, and different operational consequences.

Trust usually changes more slowly than verifier disclosure requirements. Credential structure changes differently from runtime packaging. Flow changes with use case. Deployment changes with environment. Once those differences are explicit, the architecture becomes easier to govern because the system can tell what kind of change is actually happening.

A new issuer entering scope is a trust change.

A new claim or validity rule is a template change.

A stronger boarding rule or narrower disclosure boundary is a policy change.

An edge rollout with different cache windows is a deployment change.

A new application-to-approval-to-issuance path is a flow change.

That separation is what prevents the model from drifting back into code.

It also clarifies why transports such as OID4VCI and OID4VP matter without becoming the whole architecture. They carry issuance and presentation across the wire. They do not decide the trust boundary, credential meaning, disclosure rule, or runtime posture by themselves. Those decisions already belong to the primitives.

This is where the publication’s earlier pieces line up cleanly.

`five-primitives-in-one-picture` says the system becomes legible when the recurring questions become stable objects.

`the-marty-identity-model` says those objects are the operating grammar that stops standards and integrations from pretending to be the architecture.

The deep dives say each primitive is a governed artifact rather than a loose settings page.

This post adds the last missing sentence: the system works because those artifacts hand cleanly to one another instead of competing to own the same logic.

## The same composition survives runtime and ecosystem change

A capstone would not be much use if it worked only for one idealized scenario.

The reason Marty treats this composition so seriously is that the same pattern survives both runtime variation and ecosystem variation.

Runtime variation comes first because it usually hurts sooner.

A hosted verifier may want live status and centralized policy evaluation. A self-hosted enterprise deployment may want customer-controlled key custody and private-network control. A gate or kiosk may need cached trust, bounded freshness, and explicit degraded-mode behavior. Those are real differences. They change how the system is packaged and operated.

They do not require a new trust model, a new credential grammar, or a new idea of what disclosure policy is.

That is why `same-trust-model-different-runtime` matters so much to the overall Marty argument. It proves that the runtime envelope can change without rewriting the underlying judgment. Hosted, self-hosted, and edge environments all still compose the same primitives. The Deployment Profile is what absorbs the operational variation.

Ecosystem variation makes the same point at a broader scale.

Travel brings ICAO trust and gate pressure. Enterprise access brings local authorization and latency-sensitive policy checks. Retail age verification brings strict disclosure minimization. Education and workforce credentials bring portability plus accreditation pressure. EUDI brings formal regulatory alignment and wallet requirements.

Those ecosystems are not identical.

What they share is the architecture problem.

They all need a way to express trust, define credentials, orchestrate journeys, bound disclosure, and package runtime behavior. `one-protocol-many-ecosystems` proves that the standards and governance bundles can change while the five-primitives composition stays recognizable. Compliance Profiles, Wallet Profiles, transport bindings, and ecosystem-specific trust sources are how variation enters. The underlying grammar does not need to reset.

That is the real meaning of “how everything works together.”

It does not mean every deployment, every standard, and every verifier ends up looking the same. It means the same composition keeps working when the environment, sector, or transport changes.

That is why the protocol remains useful after the diagram, after the launch post, and after the deep dives.

It gives the reader one stable way to think about systems that would otherwise look unrelated.

A final comparison helps land the point:

| What changes | What stays stable |
| --- | --- |
| ICAO vs EUDI vs enterprise vs retail compliance pressure | The five-primitives composition |
| OID4VCI vs OID4VP transport and wallet interaction | Trust, template, policy, deployment, and flow as the governing objects |
| Hosted vs self-hosted vs edge runtime constraints | The underlying trust and disclosure logic |
| Sector-specific credential shapes | The fact that Credential Templates define what gets issued and Flows move it through lifecycle stages |

This is the capstone payoff Daniel wants the reader to keep.

The five primitives are not only a map for teaching. They are the reason the architecture can survive change.

Once the composition is explicit, new standards become attachment points, not architecture replacements. New runtimes become deployment choices, not philosophical forks. New sectors become profile and flow variations, not excuses to rebuild the system from zero.

That is how everything works together.

Not as one magical service. Not as one transport standard. Not as one vendor platform.

As a governed composition of trust, credential meaning, lifecycle motion, disclosure boundary, and runtime packaging that can keep its shape even while the ecosystem around it changes.

If you want the next implementation-facing layer, continue to `mip-json-schemas-walkthrough`. That is where the shared object model becomes machine-readable contract. If one part of the composition is still the part costing you time, go next to the primitive deep dive that matches it and read the capstone again afterward. It should feel even cleaner the second time.

## Related reading

- `five-primitives-in-one-picture` — the map that turns acronym sprawl back into one system
- `the-marty-identity-model` — the stable grammar underneath the capstone
- `flows-orchestrating-identity-lifecycle` — the lifecycle motion that turns the objects into a working journey
- `mip-json-schemas-walkthrough` — the schema-level handoff once the composition is clear

## Draft metadata

- **Slug:** `how-everything-works-together`
- **Date:** `2026-04-03`
- **Updated date:** `2026-04-10`
- **Category:** `Technical`
- **Topic:** `Protocol Synthesis`
- **Topic cluster:** `Protocol Overview`
- **Layer:** `Foundations`
- **Difficulty:** `Advanced`
- **Section:** `core-protocol`
- **Related:** `the-marty-identity-model`, `five-primitives-in-one-picture`, `flows-orchestrating-identity-lifecycle`
- **Concept tags:** `protocol-overview`, `five-primitives`, `flow`
- **Standards tags:** `OID4VCI`, `OID4VP`, `W3C VC`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** architect, implementer, evaluator
- **Likely CTA:** `mip-json-schemas-walkthrough`
- **Status:** `live`
- **Batch:** `batch-18`

# The Five Primitives in One Picture

*If digital identity still looks like an acronym graveyard, this is the picture that turns it back into a system.*

## Why readers need a map

There is a predictable moment in every serious identity program. The sponsor hears EUDI, mDL, wallets, OID4VCI, OID4VP, revocation, selective disclosure, edge deployment, PKI, and trust registries in the same meeting and concludes the market is fragmented beyond repair. The architect opens a whiteboard and discovers that every vendor demo smuggles different assumptions about who is trusted, what gets issued, what must be shown, and where verification actually runs. The implementer gets the worst version of all: logic that should have been governed as policy or configuration arrives as branching application code.

That confusion usually means teams are looking at the ecosystem through transports, standards acronyms, and product surfaces instead of stable system objects.

This is the core Marty move. It does not begin by promising one more SDK, one more wallet abstraction, or one more better-integrated platform. It begins by saying that digital identity becomes legible when the parts that matter most are made explicit and governed: trust, credential shape, disclosure boundaries, runtime packaging, and the flow that ties them together.

The Marty Identity Protocol states the model plainly: digital identity management can be represented by Trust Profiles, Credential Templates, Presentation Policies, Deployment Profiles, orchestrated by Flows. That sentence matters because it gives us something the broader market often refuses to give us: a minimum shared model.

Without that model, standards feel disconnected. ICAO seems like one world, ISO 18013-5 another, OID4VCI another, SD-JWT another, EUDI another. Without that model, code wins by default. Trust anchors get pinned in services. Disclosure rules get hidden in controllers. Offline behavior gets buried in device-specific exceptions. Every change becomes an engineering event.

With a map, the picture changes. The standards do not disappear, and the complexity does not evaporate. But the system stops behaving like a pile of unrelated requirements and starts behaving like governed infrastructure. That is the difference between disconnected standards and stable objects. It is also the difference between code and configuration.

This post is that map: the picture you can keep in your head while the rest of the Marty material zooms in and out.

## Five recurring questions, five primitives

Every credential system, from a grocery self-checkout to an airline gate to an enterprise HR portal, has to answer the same recurring questions. The label on the credential may change. The transport may change. The regulator may change. The questions do not.

| Reader or system question | Marty primitive | What it stabilizes | What should stop living in code |
| --- | --- | --- | --- |
| Who is trusted, and how do we validate that trust? | **Trust Profile** | trust sources, cryptographic validation, revocation expectations | hardcoded issuer lists, ad hoc certificate logic, one-off trust checks |
| What exactly gets issued? | **Credential Template** | schema, claims, validity, issuer constraints, disclosure capabilities | custom payload assembly, duplicated claim rules, format-specific branching |
| How does the credential move from application to issuance to use? | **Flow** | lifecycle orchestration, stage sequencing, approvals, handoffs | bespoke journey code spread across apps, queues, and service callbacks |
| What must be shown, and what can remain private? | **Presentation Policy** | required claims, predicates, freshness, holder binding, minimum disclosure | verifier-specific logic hidden in endpoints and UI forms |
| Where does verification run, under which runtime constraints? | **Deployment Profile** | online/offline mode, lane/device packaging, sync windows, UX/runtime behavior | environment-specific feature flags, deployment forks, runtime special cases |

That table is the reason the ecosystem becomes manageable. A sponsor does not want separate architectural universes for passport PKI, DIDs, and EUDI trust lists; they want one place to express who is trusted and how that trust changes safely. An implementer does not want three mental models for an employee badge, a mobile driver’s license, and an education credential; they want one object that defines what is issued and under which constraints. And when privacy or offline operation starts making the system expensive, Marty does not hide the problem in code. It gives the problem objects: Presentation Policies and Deployment Profiles.

The visual picture that follows from this is not arbitrary. The canonical map should read left to right as a DAG: **Trust Profiles (grounded in trust anchors) -> Credential Templates -> Flows -> Presentation Policies -> Deployment Profiles**. The point is not that every runtime call literally walks those boxes in that order. The point is that the reader can see the logic of the system in one glance:

- foundation on the left: what trust rests on
- structure next: what gets issued
- motion in the middle: how the system advances identity from stage to stage
- boundary after that: what can be asked and what can remain undisclosed
- runtime on the right: where the system actually lives when the network, device, and environment begin arguing back

Notice what disappears when you look at the system this way. OID4VCI, OID4VP, SD-JWT, and EUDI stop pretending to be the architecture. They remain important, sometimes decisive, but they attach to stable objects instead of replacing them.

The payoff is simple: keep the standards faithful without letting them dictate your entire mental model.

## Flows make the objects move

If the first four primitives tell you what exists, Flow tells you how the system breathes.

This is where many architecture explanations go flat. They define trust. They define templates. They define policies. Then they leave the reader staring at a shelf full of well-labeled boxes. Useful, perhaps, but not alive. Marty cannot stop there, because the user never experiences a shelf. The user experiences a journey.

A traveler submits data for pre-boarding clearance. An employee requests access to an HR portal. A customer scans a QR code at a self-checkout kiosk. In each case, the visible product is not “a trust profile” or “a credential template.” The visible product is a sequence: apply, approve, issue, present, verify.

The Flow primitive takes the other objects and makes them interact at the right moments. During approval, the system knows which Credential Template governs the resulting credential. During issuance, it knows which trust and compliance assumptions are relevant to the issuer. During presentation, it knows which Presentation Policy narrows disclosure to the decision at hand. During verification, it knows which Deployment Profile determines whether the check runs in a cloud API, a local VPC, or an intermittently connected lane device.

This is why the canonical picture places **Issuance Flows** in the middle. Motion is what turns structure into a working system. The credential is not useful because it exists. It is useful because a flow got it from one governed state to another.

In a travel scenario, a clearance credential may be issued after document checks and policy approval, then later presented at a boarding gate running with pre-cached trust material and strict freshness windows. In a retail age-verification scenario, a holder scans a request, the wallet satisfies a policy that asks only for `age_over_21 == true`, and the kiosk verifies locally without ever handling name, address, or birth date. Different stakes, different runtime realities, same flow logic.

Flows let the system repeat a pattern without repeating custom architecture.

They also keep us honest about the code vs configuration tension. When flows are missing as first-class objects, orchestration leaks everywhere: frontend wizards, backend queues, webhook glue, environment flags, exception handlers, and unreviewable business logic. Teams say they are implementing “the same process” across products, but what they actually have is a family of cousins who no longer speak to one another. Flow is the primitive that prevents that drift.

So no, Flow is not a glossary appendix. It is the place where the other primitives stop being nouns and start becoming a system someone can operate, audit, and improve.

## The navigation contract

A good architecture picture should do more than survive one blog post. It should become the reader’s navigation contract.

That is the role of this map in the Marty publication. Future posts should be able to start anywhere — privacy, trust, deployment, standards, implementation — without throwing the reader back into acronym fog. The way to do that is simple: keep returning to the same canonical picture, then highlight the active part.

> **Diagram note:** The canonical picture for this series should be a left-to-right DAG with five labeled nodes: `Trust Profiles` -> `Credential Templates` -> `Flows` -> `Presentation Policies` -> `Deployment Profiles`. The Trust Profile node can visually expose its anchor layer beneath it, but the reader-facing map should preserve the primitive names. Future deep-dive posts should reuse a small minimap version in the top-right corner, keep inactive nodes slate gray, highlight the active node in a bright secondary green, and mark it with `You are here`.

That minimap treatment turns a collection of standalone essays into a coherent system without forcing the reader through a numbered course. A sponsor can land on a deployment post and still see where deployment fits. An implementer can jump straight into flows or schemas and still see which neighboring objects matter. An architect can compare two deep dives and know whether the disagreement is about trust, disclosure, runtime, or orchestration.

It also reinforces the deeper Marty promise. The ecosystem is broad, but the model is stable. Standards can multiply, deployment environments can diverge, regulatory pressure can intensify, and the reader should still be able to ask: which primitive is doing the work here, and which tension is being clarified?

So treat this picture as a working instrument. Use it when the discussion starts sounding like disconnected standards. Use it when implementation debates drift into feature talk. Use it when a sponsor asks why every change seems to require code. The answer, more often than not, is that the system has not yet been reduced to stable objects.

If you want the most useful next step, do not read everything at once. Choose the primitive or tension already costing you time in your environment. If your pain is trust sprawl, start there. If overcollection is the problem, go to Presentation Policies. If your runtime is messy, follow Deployment Profiles. If your team keeps rebuilding the same orchestration in different services, follow Flows. If the whole stack still feels fragmented, keep this map open until the fragments start behaving like one system.

If you are following the clearest opening path through the publication, continue next to `minimum-disclosure-is-a-policy-problem`. It is the first post that tests the map against a hard constraint instead of another abstract explanation.

## Related reading

- `Why Digital Identity Needs a Protocol, Not Another Platform` — the category reframe that leads naturally into this map.
- `minimum-disclosure-is-a-policy-problem` — the strongest next stop if you want to test the map against a real privacy and policy constraint.
- `Trust Profiles: The Foundation of Every Identity Decision` — the trust side of the picture, where issuers and validation rules become explicit.
- `Credential Templates: Designing What Gets Issued` — how credential structure, claims, validity, and disclosure capabilities become governed objects.
- `Presentation Policies and the Art of Minimum Disclosure` — where privacy stops being a slogan and becomes a verifier boundary.
- `Deployment Profiles: From Design to Production` — how the same trust model survives cloud, self-hosted, and edge environments.
- `Flows: Orchestrating the Identity Lifecycle` — the motion layer that turns the rest of the map into a user-facing system.

## Draft metadata

- **Slug:** `five-primitives-in-one-picture`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** Architect, implementer, sponsor
- **Likely CTA:** `minimum-disclosure-is-a-policy-problem` for the opening path, or the primitive most relevant to the reader's environment
- **Batch:** `batch-01`

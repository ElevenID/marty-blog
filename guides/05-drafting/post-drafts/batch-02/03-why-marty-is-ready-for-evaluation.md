# Why Marty Is Ready for Evaluation

*Serious teams do not evaluate identity ideas because they are elegant. They evaluate them because there is enough inspectable surface—specification, schemas, conformance, policy, and deployment choices—to decide whether the architecture deserves a real design review.*

## Why skeptical teams hesitate

Skeptical teams are right to hesitate.

Digital identity has no shortage of ambitious diagrams, standards acronyms, and grand claims about interoperability. What it has historically lacked is a reliable way to tell the difference between a compelling framing and a system that is actually ready for technical evaluation. Buyers have learned to be suspicious of conceptual elegance. Architects have learned that a clean model on paper can still collapse the moment they ask for schemas, test fixtures, policy boundaries, or deployment assumptions.

That is the credibility bar Marty has to clear.

If Marty were only a good explanation of how identity *should* work, it would deserve interest, not evaluation. A team might bookmark it, circulate it internally, and then move on to something with more artifact proof. That is the real tension at this stage: **artifact proof vs elegant theory**. Another way to say it is **evaluation readiness vs vague interest**. Plenty of projects earn the second. Very few earn the first.

For an evaluation-ready architect, the questions are blunt:

- Is there a normative spec, or only editorial language?
- Are there machine-readable artifacts, or only architecture diagrams?
- Is there a way to validate an implementation locally?
- Are governance and policy surfaces explicit, or still buried in application code?
- If this became real, what would we actually operate and buy?

For a buyer, the questions sound different but point to the same concern:

- Is this a serious infrastructure category, or a clever packaging of familiar slides?
- Are deployment choices clear enough to estimate operational ownership?
- Is governance visible enough to survive legal, compliance, and procurement review?

Marty is ready for evaluation because those questions now have inspectable answers. Not perfect answers, but real ones. The point is not to prove Marty correct for every organization. It is to let a serious team review actual artifacts instead of guessing from a pitch.

## What already exists

The first reason Marty is evaluable is simple: there is an actual protocol surface to inspect.

The open-source Marty Identity Protocol repository does not stop at the five-primitives thesis. It includes a normative `SPECIFICATION.md`, a repository-level architecture summary in `README.md`, JSON Schemas for protocol entities, enumerations, Cedar policy artifacts, examples, conformance fixtures, compliance-profile mappings, and reference implementations in Rust, Python, and TypeScript. The launch materials also make the status explicit: this is MIP `0.1.0`, draft status, Apache 2.0 licensed, openly governed, and structured for contribution under DCO rather than hidden vendor process.

The core model is stable and legible: **Trust Profiles, Credential Templates, Presentation Policies, Deployment Profiles, orchestrated by Flows**. The supporting abstractions are also visible rather than implied: Compliance Profiles, Revocation Profiles, Wallet Profiles, Device Registration, Notification Targets, and Cedar-backed Policy Sets. The spec goes further than naming them. It defines validation rules, API surface expectations, organization and identity governance, security considerations, privacy considerations, conformance, and transport bindings.

Here is the artifact inventory an evaluator can inspect today:

| Artifact surface | What exists now | Why it matters in evaluation |
| --- | --- | --- |
| **Spec** | `marty-protocol/SPECIFICATION.md` defines the protocol model, entity rules, API surface, governance, security, privacy, and conformance expectations | Lets architects review Marty as a formal system rather than reverse-engineering meaning from marketing language |
| **Schemas** | JSON Schemas for protocol entities, plus enums and cross-references; launch materials describe 35 schemas and reference implementations generated around them | Gives implementers machine-readable contracts for validation, type generation, and compatibility checking |
| **Conformance** | `conformance/valid` and `conformance/invalid` fixtures with expected outcomes; the published conformance path is part of the implementation story | Proves Marty expects implementations to pass or fail specific cases instead of claiming compatibility by assertion |
| **Deployment choices** | Self-hosted, hosted, and edge / kiosk deployment packages; verifier, kiosk, and facility licensing; Starter, Professional, and Enterprise control-plane tiers | Gives buyers and operators a concrete operating model rather than a vague “we can deploy anywhere” promise |
| **Governance / policy surface** | Cedar schema and reference policies, policy-set model, governance docs, DCO-based contribution path, and explicit organization / SCIM governance sections in the spec | Shows that rule changes, approval logic, and trust decisions are meant to live in governed artifacts rather than hidden code paths |

This is where Elena’s voice becomes useful, because governance clarity is one of the fastest ways to tell whether a new protocol is serious. The relevant question is not just whether Marty can verify a credential. It is whether a team can answer: **who is allowed to do what, under which rule surface, and how does that change safely?** Marty’s Cedar policy model, policy-set structure, and organization-governance sections do not solve every governance problem by magic, but they do make the governance surface explicit enough to inspect.

That is a meaningful threshold. Elegant theory can describe privacy, trust, and orchestration. Evaluation-grade artifacts have to show where those things live.

## Proof of seriousness

The second reason Marty is ready for evaluation is that it behaves like something that expects scrutiny, not agreement.

That is where the schema and conformance layers matter. The schema collection gives implementers structural guarantees. The conformance suite gives them a way to prove that their implementation accepts what should pass and rejects what should fail. The published conformance materials describe valid fixtures, invalid fixtures, and expected sidecars. That is not decorative. It is the difference between “we think our implementation is aligned” and “we have a repeatable way to test alignment.”

The same seriousness shows up in the packaging story. Marty’s pricing and offering materials do not pretend identity is a magical SaaS abstraction detached from runtime reality. They treat identity as infrastructure: deployments, verifier runtimes, kiosk devices, facility licenses, policy sync, trust-anchor updates, audit retention, and control-plane access. You may not prefer that model, but it matches the architecture.

That alignment matters for evaluation. A buyer can compare self-hosted, hosted, and edge / kiosk deployment packages without being forced into a fake simplicity. An operator can see the runtime distinction between cloud verification and offline-first environments. An architect can review whether the trust model is intended to survive across those runtimes through explicit Deployment Profiles instead of environment-specific forks.

The README and spec reinforce the same point from the technical side. They expose support for multiple trust models, compliance profiles spanning ICAO, AAMVA, EUDI, Open Badges, and enterprise use cases, along with policy-driven verification and organization-scoped governance. Reference implementations in Rust, Python, and TypeScript further strengthen the claim that Marty is implementation-facing, not merely educational.

None of this proves Marty is finished. Draft status still means draft status. It does prove something narrower and more important for this moment: Marty now contains enough bounded surfaces that a skeptical team can inspect, validate, and reject specific parts if they do not hold up. That is what seriousness looks like.

A useful rule of thumb is this: if a protocol cannot be booted, inspected, and locally exercised, it is still asking for admiration rather than evaluation. Marty is past that stage.

## Evaluation handoff

A good evaluation handoff should not assume the reader already knows where to start. It should move from curiosity to a design review path that feels operationally real.

The cleanest first-pass path is short:

1. **Boot the control plane.** Start the local Marty control plane with `docker-compose -f docker-compose.dev.yml up marty-core`. The point is not to stage a full production deployment on day one. The point is to confirm that the protocol is attached to runnable infrastructure rather than existing only as prose.
2. **Inspect a policy artifact.** Open the protocol policy surface directly in `marty-protocol/cedar/mip.cedarschema` and `marty-protocol/cedar/policies/credential_verification.cedar`. This is the Elena test: can you see the rule boundary, or are the important decisions still hiding in application code? If policy is a governed artifact, you should be able to inspect it without spelunking through service internals.
3. **Validate locally with the conformance suite.** Run `cd ../marty-protocol && scripts/run-conformance.sh`. This is the practical bridge between theory and implementation. The architecture stops being abstract when a local test suite proves that the protocol accepts valid fixtures, rejects invalid ones, and treats schemas and examples as first-class artifacts instead of documentation garnish.
4. **Compare deployment and control-plane choices.** Once the local path is credible, review the packaging surfaces: self-hosted, hosted, or edge / kiosk deployment; then Starter, Professional, or Enterprise control-plane scope. This is the buyer-side equivalent of the technical path. You are asking what you would actually operate, govern, and license.

If those steps feel almost boring, good. Evaluation should involve concrete files, repeatable commands, and explicit deployment questions, not belief.

By the end of that first pass, an architect or buyer should be able to answer a few design-ready questions:

- Does the spec describe the same system the runtime and schemas imply?
- Are policy and governance explicit enough for internal review?
- Is conformance part of the implementation story, not an afterthought?
- Which deployment model matches our runtime constraints and ownership posture?
- Is Marty specific enough to enter a real architecture review?

If the answer is yes, the next move is not more vague interest. It is a structured evaluation brief. If the answer is no, that is still a useful result—because the failure will be tied to a concrete artifact rather than a vague feeling.

That is the key transition Marty can now support: **confident -> design_ready**. Not because it has removed every open question, but because it gives serious teams a clear place to apply those questions.

Start where serious teams should start: inspect the spec, inspect the schemas, and compare the deployment choices. Then use `impl-oid4vci` and `impl-oid4vp` to inspect the next layer down: where the transport standards attach to the Marty model without replacing it.

## Related reading

- `introducing-mip` — the open-source launch post and the clearest summary of what shipped with MIP `0.1.0`
- `mip-json-schemas-walkthrough` — how the schema layer supports validation, code generation, and API contracts
- `conformance-testing-for-implementers` — why passing and failing the right fixtures matters more than saying “compatible” loudly
- `impl-oid4vci` — the bounded issuance walkthrough showing where OID4VCI stops and Marty objects begin
- `impl-oid4vp` — the bounded presentation walkthrough showing where trust, disclosure, and deployment attach to OID4VP
- `marty-protocol/README.md` — the canonical architecture summary, repository layout, and five-primitives overview
- `marty-protocol/SPECIFICATION.md` — the normative protocol document for deeper technical review
- `deployment-profiles-from-design-to-production` — the operational bridge from protocol object to runtime environment

## Draft metadata

- **Slug:** `why-marty-is-ready-for-evaluation`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** Evaluation-ready architect or buyer
- **Likely CTA:** Inspect the spec, schemas, deployment choices, and implementation notes
- **Batch:** `batch-02`

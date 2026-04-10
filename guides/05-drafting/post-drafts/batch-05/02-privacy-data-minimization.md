# Privacy Data Minimization

*Data minimization becomes real when a verifier is forced to ask one narrow question instead of quietly collecting an identity record it never needed.*

## One verifier request, reduced correctly

Privacy and governance readers are usually handed the problem after the fact. The system already collected the identity payload. Now the conversation is about retention periods, access controls, processor contracts, and breach reporting. Those controls matter, but they arrive late. Overcollection usually starts earlier, at the request boundary, when a verifier asks for a full credential because the transport makes that easy and nobody insisted on a narrower decision surface.

That is why a single reduced request is such good proof. It turns privacy versus overcollection into something concrete enough to inspect. Suppose a verifier is evaluating an age-gated transaction. The decision is narrow: may this person proceed? The verifier does not need a durable identifier, a postal address, or the exact `birthdate` if the policy question is simply whether the person is above the threshold. Yet legacy integrations still behave as though the safest move is to return a broad JSON object and let the verifier decide later what was relevant. That is not safety. It is convenience for the relying party, paid for with someone else’s data.

In the completed example, the contrast is exact. Instead of returning a JSON block with `birthdate`, the verifier asks only for `$.verified_claims.claims.age_over_21`. In presentation-exchange terms, that means the request is narrowed to the claim path that matters for the decision and nothing else. The verifier is no longer invited to inspect a person’s underlying date of birth and then promise restraint afterward. It is constrained to ask one question and receive one bounded answer.

| Request boundary | Verifier request or response shape | What the verifier learns | Why it matters |
| --- | --- | --- | --- |
| Before: overcollection by habit | A JSON block that includes `birthdate` and adjacent identity fields | Exact date of birth, plus whatever additional attributes the payload exposes | The verifier now owns unnecessary PII, and that data can spread into logs, support tools, analytics, and audit scope |
| After: reduced correctly | Only `$.verified_claims.claims.age_over_21` | Whether the person satisfies the threshold | The verifier stays inside the decision boundary and never receives the underlying birth date |

The improvement is not cosmetic. Exact birth date is not just “one extra field.” In many environments it becomes a correlation surface. It is a value that can be copied into transaction logs, matched across repeated presentations, combined with other fields, or quietly retained because the engineering path of least resistance keeps full payloads around for debugging. When the verifier asks only for `$.verified_claims.claims.age_over_21`, that whole class of downstream drift gets harder to create. The system can still make the decision, but it cannot silently widen its knowledge without a visible request change.

That is the governance point. Data minimization is not satisfied by saying, “We collected the birth date, but we promise not to misuse it.” Governance readers need a stronger guarantee than institutional good intentions. They need a request surface that can be reviewed, approved, and versioned. In Marty, that is the job of the `Presentation Policy`. The policy says what the verifier is allowed to know before the presentation happens. If a team later wants the actual `birthdate`, that is not a harmless implementation tweak. It is a disclosure expansion that should trigger privacy review, change control, and a fresh justification for why the verifier now needs more than it needed before.

The operational payoff is just as serious. A verifier that never receives exact birth date has less sensitive material to cache, less sensitive material to ship to observability pipelines, and less sensitive material to expose to support staff during incident response. The audit record can stay narrow too. Instead of saving raw identity payloads “just in case,” the system can log the policy identifier, the fact that `age_over_21` was requested, the decision outcome, the verifier instance, and the timestamp. That is a cleaner record for compliance, a smaller record for breach response, and a more defensible record when someone asks whether the collection really matched the purpose.

This is also why privacy mechanisms should never outrun the boundary they are supposed to protect. Selective disclosure, predicate claims, and stronger proof systems are useful only after the verifier request has been reduced to the actual decision. If the verifier still asks for the full JSON block, better cryptography only helps the system overcollect more elegantly. The serious design move happens earlier: force the verifier to declare the least information it needs, then use the lightest mechanism that can satisfy that request honestly.

Seen this way, privacy versus overcollection is not a philosophical debate. It is a design choice visible in one line of request scope. Returning `birthdate` tells the verifier more than the decision requires and shifts the burden onto downstream restraint. Requesting `$.verified_claims.claims.age_over_21` keeps the verifier aligned with the purpose of the transaction. That is what data minimization looks like when it stops being a slogan and becomes architecture.

If you want the broader argument for why this request boundary has to be governed as policy rather than left to verifier habit, continue to `minimum-disclosure-is-a-policy-problem`.

## Related reading

- `minimum-disclosure-is-a-policy-problem`
- `selective-disclosure`
- `deploy-age-verification`
- `presentation-policies-minimum-disclosure`

## Draft metadata

- **Slug:** `privacy-data-minimization`
- **Date:** `2025-07-22`
- **Updated date:** `2026-10-19`
- **Category:** `Cryptography`
- **Topic:** `Data Minimization`
- **Topic cluster:** `Privacy & Disclosure`
- **Layer:** `Present`
- **Difficulty:** `Intermediate`
- **Section:** `cryptography`
- **Related:** `selective-disclosure`, `minimum-disclosure-is-a-policy-problem`, `zero-knowledge-predicates-identity`
- **Concept tags:** `privacy`, `data-minimization`, `selective-disclosure`
- **Standards tags:** `SD-JWT`
- **Lead narrator:** Nora Patel
- **Primary reader:** privacy and governance readers
- **Likely CTA:** `minimum-disclosure-is-a-policy-problem`
- **Status:** `retired`
- **Batch:** `batch-05`

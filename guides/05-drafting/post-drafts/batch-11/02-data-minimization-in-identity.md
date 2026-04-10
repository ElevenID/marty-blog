# Data Minimization in Identity

*Verifiers should only learn what they need. This post explains data minimization — the principle that drives selective disclosure, predicates, and privacy-preserving credentials.*

Data minimization often gets discussed like a compliance slogan.

In identity systems, it is more concrete than that. It is the difference between a verifier asking one question and a verifier quietly inheriting an identity record because no one bothered to define the request boundary precisely.

That is why one well-bounded verifier request is such a useful proof point.

## One verifier request, reduced correctly

Suppose a verifier is evaluating an age-gated transaction. The decision is narrow: may this person proceed?

In a legacy integration, the system often requests or receives a broad identity payload anyway. Date of birth arrives. Name arrives. Address arrives. Document number arrives. Sometimes the scanner or wallet adapter exposes even more. The verifier may not intend to use all of it, but the system now knows all of it. Privacy has already widened.

A minimized request looks different from the first line.

Instead of requesting a broad payload and hoping the verifier exercises restraint later, the verifier requests only the bounded answer it actually needs. In the Marty privacy examples, that means asking only for `$.verified_claims.claims.age_over_21` rather than the underlying birth date and adjacent identity fields.

The contrast is simple enough to show in one view:

Request boundary: Before: overcollection by habit. Verifier request or response shape: A JSON block that includes birthdate and adjacent identity fields. What the verifier learns: Exact date of birth, plus whatever additional attributes the payload exposes. Why it matters: The verifier now owns unnecessary PII, and that data can spread into logs, support tools, analytics, and audit scope | Request boundary: After: reduced correctly. Verifier request or response shape: Only `$.verified_claims.claims.age_over_21`. What the verifier learns: Whether the person satisfies the threshold. Why it matters: The verifier stays inside the decision boundary and never receives the underlying birth date.

That is not a cosmetic improvement. Exact birth date is a durable correlation surface. Once it reaches the verifier, it can be copied, retained, matched across events, and pulled into systems that were never part of the original decision. A bounded predicate does not eliminate all risk, but it prevents that whole class of unnecessary exposure from starting in the first place.

This is also the governance benefit. A verifier request that asks only for `age_over_21` can be reviewed and approved as a real disclosure boundary. If the verifier later asks for the full birth date, that is no longer an invisible implementation change. It is an explicit expansion of what the verifier is allowed to know, and it should be treated as such.

The operational payoff is just as real. Less unnecessary data means less sensitive material in logs, less sensitive material in observability pipelines, less sensitive material visible during support work, and less sensitive material dragged into breach-response scope. The audit record can stay narrow too: policy identifier, decision outcome, verifier instance, and timestamp — not a full identity payload “just in case.”

That is what data minimization looks like when it stops being advisory language and becomes architecture. The verifier asks only for the answer it needs. The holder reveals only what the policy permits. The system records the bounded decision instead of absorbing a larger identity record by convenience.

If you want the broader argument for why identity systems need this discipline in the first place, continue to `why-identity-systems-must-protect-privacy`. If you want the regulated version of the same argument, continue to `privacy-vs-compliance`.

## Related reading

- `why-identity-systems-must-protect-privacy` — why privacy belongs in the architecture, not in after-the-fact restraint
- `privacy-vs-compliance` — why bounded disclosure still supports regulated verification
- `minimum-disclosure-is-a-policy-problem` — the fuller policy argument behind request-boundary discipline
- `deploy-age-verification` — the clean retail example where the right answer is just `age_over_21`

## Draft metadata

- **Slug:** `data-minimization-in-identity`
- **Date:** `2025-12-25`
- **Updated date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Data Minimization`
- **Topic cluster:** `Privacy & Disclosure`
- **Layer:** `Present`
- **Difficulty:** `Intermediate`
- **Section:** `cryptography`
- **Related:** `minimum-disclosure-is-a-policy-problem`, `why-identity-systems-must-protect-privacy`, `privacy-vs-compliance`
- **Concept tags:** `privacy`, `data-minimization`, `policy`
- **Standards tags:** `GDPR`, `SD-JWT`
- **Lead narrator:** Nora Patel
- **Primary reader:** implementer, privacy and governance reader
- **Likely CTA:** `privacy-vs-compliance`
- **Status:** `live`
- **Batch:** `batch-11`

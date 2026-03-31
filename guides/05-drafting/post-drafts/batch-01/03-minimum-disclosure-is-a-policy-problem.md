# Minimum Disclosure Is a Policy Problem

*Privacy fails first at the request boundary, which is why disclosure has to be governed as policy rather than left to verifier habit.*

Most privacy failures in identity systems do not begin with exotic surveillance. They begin with a routine request that asks for more than the decision requires. A verifier wants one answer, but the system is built to ingest an entire credential, store it, and sort out relevance later. That pattern is common enough to feel normal. It should not.

Marty takes a stricter view. Minimum disclosure is not a courtesy feature and not a UI preference. It is a policy decision about what a verifier is allowed to know. Once that boundary is explicit, selective disclosure mechanisms become useful tools. Until that boundary is explicit, they are mostly decoration.

## Overcollection is the default failure

Consider a liquor-store self-checkout kiosk. The actual decision is narrow: may this customer purchase alcohol? In a legacy flow, the scanner reads the driver's license and passes the full payload through the verification stack. The kiosk or its vendor log now contains the customer's date of birth, full address, license number, and even organ donor status. None of that is required to decide whether the customer is over twenty-one.

That is not an edge case. It is the default shape of older identity verification systems. They are optimized for document capture, not for decision minimization. The verifier gets the whole record because the application was never forced to state what it truly needed. Privacy loses before any cryptography enters the picture.

This is the first tension Marty makes explicit: privacy versus overcollection. In most organizations, nobody stands up in a design review and argues that the kiosk should retain organ donor status. The overcollection happens because the boundary was never modeled. A scanner SDK exposes a full set of fields. A middleware layer forwards them. Logging is enabled by default. A support workflow stores raw request bodies for troubleshooting. By the time anyone asks whether the verifier needed all of that data, the answer is irrelevant because the data has already spread through the system.

That is why “we promise to use the data responsibly” is an inadequate privacy posture. If a verifier receives full birth date, address, license number, and document metadata for a yes-or-no age check, then privacy has already failed. Internal restraint is not the same thing as structural minimization.

Compliance readers tend to recognize this immediately because data minimization rules are already familiar. Skeptical technical buyers usually see a second problem at the same moment: overcollection is also operationally expensive. The more fields a verifier touches, the more fields it can log, leak, replicate, or drag into audit scope. Privacy risk and system complexity rise together.

## Policy is the disclosure boundary

The fix is not to ask engineers to remember to be careful. The fix is to move the disclosure decision into explicit policy.

In Marty, that policy surface is the Presentation Policy. Instead of saying “scan the license and let the application decide,” the verifier states the actual requirement. For the liquor-store case, that requirement is simply `age_over_21 == true`. In Cedar terms, the rule can be expressed as `permit(principal, action == "PurchaseAlcohol") when { principal.age_over_21 == true };`.

That one move matters more than the mechanism that comes after it. Once the verifier's need is formalized as policy, privacy is no longer dependent on buried code, vendor defaults, or a point-of-sale team's memory. The disclosure boundary becomes reviewable, auditable, and versioned. Privacy teams can inspect it. Compliance teams can sign off on it. Architecture teams can reason about it. If the verifier later asks for more, that change is visible as a policy change rather than hidden inside application logic.

It also makes the options legible. Not every verifier request needs the same disclosure mode.

| Disclosure mode | What the verifier receives | What it learns | When it is justified |
| --- | --- | --- | --- |
| Full claim | Raw attributes such as birth date, address, or license number | The underlying identity data itself | Only when the business or regulatory decision genuinely requires those exact values |
| Predicate | A bounded result such as `age_over_21 = true` | One decision-relevant fact | Best when the verifier needs a yes/no or threshold answer and nothing else |
| Proof | A cryptographic proof that a condition holds without revealing the source value | The condition is satisfied, with stronger privacy properties | Best when the policy requires stronger unlinkability or non-disclosure than standard claim reveal can provide |

This is where the second tension becomes useful: policy versus buried code. The important design question is not “Which selective-disclosure technology is most impressive?” It is “What does policy require this verifier to know, and what must remain undisclosed?”

That is why mechanism choice should follow policy need rather than novelty. For many enterprise and retail verifiers, SD-JWT-style selective disclosure is the practical answer because it works with ordinary JSON processing, familiar JWT tooling, and existing integration habits. If the verifier only needs a small set of selectively disclosed fields, that may be enough. If the policy requires the verifier to learn only a boolean result and to avoid revealing the source attribute itself across repeated presentations, then a stronger proof model becomes appropriate.

What matters is the direction of travel. Start with the decision boundary. Then choose the least complex mechanism that satisfies it. Reversing that order usually produces one of two mistakes: either the system overcollects because nobody specified a narrow policy, or it adopts fashionable cryptography for a problem that did not require it.

Privacy and compliance are not in conflict here. Explicit policy usually improves both. A verifier that asks only for `age_over_21 == true` has a cleaner justification record than one that ingests full license contents and then claims it never meant to keep them.

## Operational privacy still has runtime consequences

Minimum disclosure does not end the design work. It makes the remaining work honest.

A verifier that asks only for an age predicate still needs runtime rules. How fresh must the credential be? Must revocation or status be checked online? What gets logged for audit? What happens when the kiosk is offline? These are not exceptions to privacy-by-design. They are how privacy-by-design behaves in production.

Freshness is the simplest example. The verifier may not need a birth date, but it still needs confidence that the presented credential is currently valid. For a liquor-store self-checkout, the operator might decide that an age credential or mobile driver's license must have a recent status check, or that a cached status list within a bounded window is acceptable during intermittent connectivity. That choice belongs in the runtime envelope defined by policy and deployment, not in ad hoc verifier code.

Revocation creates a similar trade-off. Minimal disclosure does not make revocation irrelevant. If a credential has been revoked, the system still needs a way to know. But the way it checks matters. A per-presentation online lookup can create its own privacy leakage by revealing when and where a credential is being used. A cached or batched status mechanism may preserve more privacy, but only within a defined freshness window. Again, the point is not to pretend the trade-off disappears. The point is to make it explicit.

Auditability is where many privacy programs quietly give the win back. A system may request only `age_over_21 == true` at presentation time and then log the entire presentation object for debugging. That is not minimum disclosure. It is a brief pause before overcollection resumes. A serious design logs the policy identifier, the decision outcome, the verifier identity, and the timestamp required for audit. It does not store a full credential payload merely because storage is cheap and support teams are nervous.

Mechanism choice also has runtime consequences. Standard selective disclosure tends to fit existing stacks more easily, which matters in web and retail environments where latency, library support, and operational simplicity are real constraints. Stronger proof systems can deliver better privacy properties, but they also impose computational and integration costs. That is not an argument against them. It is an argument for deploying them where policy truly needs them.

This is the practical discipline Marty is trying to impose. Do not start from a scanner. Do not start from a format. Do not start from a favorite proof system. Start from the decision. Write the policy that states the least information the verifier must know. Then make the runtime consequences explicit: freshness, revocation, logging, offline behavior, and audit scope.

If you do that, privacy stops being a hopeful adjective attached to the system after the fact. It becomes a governed boundary with operational consequences the organization can actually defend.

If you are staying on the strongest publication spine, continue next to `same-trust-model-different-runtime`. That post widens the argument from one privacy boundary to the bigger claim that the same trust and policy model can survive across very different runtime environments.

If your next question is how to choose among those mechanisms without getting lost in cryptography fashion, continue to `selective-disclosure`. If you want the cleanest retail proof note before returning to the spine, go to `deploy-age-verification`.

## Related reading

- `same-trust-model-different-runtime`
- `presentation-policies-minimum-disclosure`
- `zero-knowledge-predicates-identity`
- `sd-jwt-selective-disclosure-deep-dive`
- `selective-disclosure`
- `deploy-age-verification`

## Draft metadata

- **Slug:** `minimum-disclosure-is-a-policy-problem`
- **Lead narrator:** Nora Patel
- **Primary reader:** privacy, compliance, skeptical technical buyer
- **Likely CTA:** `same-trust-model-different-runtime` for the main spine, or `selective-disclosure` for the privacy branch
- **Batch:** `batch-01`

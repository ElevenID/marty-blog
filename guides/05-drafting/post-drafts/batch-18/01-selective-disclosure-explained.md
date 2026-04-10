# Selective Disclosure Explained

*Selective disclosure lets holders reveal specific claims without exposing the full credential. This post explains the cryptographic mechanisms that make it work.*

Selective disclosure is one of those phrases that sounds clearer than it is.

Teams hear it and imagine one privacy feature: reveal less data, move on. In practice, selective disclosure is not one trick. It is a family of ways to keep a verifier inside the boundary of one decision.

That difference matters because different mechanisms protect different things.

Some mechanisms hide undisclosed claims while still revealing the specific attributes the verifier asked for. Some let an issuer precompute a bounded fact such as `age_over_21 = true`. Some let the holder prove a condition without disclosing the source attribute at all. Some resist repeated linkability more strongly than others. Treat them as interchangeable and the architecture gets sloppy very quickly.

Nora’s starting point is stricter than the market’s usual version. The verifier’s convenience is not the right unit of design. If the verifier has not already said what it is allowed to know, then selective disclosure becomes a nicer way to overcollect.

## The verifier boundary determines the disclosure problem

The easiest way to misunderstand selective disclosure is to start from the credential instead of the decision.

A wallet may hold a mobile driver’s license, a workforce credential, or an age-verification token. That does not yet tell us what the verifier should receive. The actual design question comes earlier: what is the least information required to make this decision safely and honestly?

That is why Marty keeps returning to the Presentation Policy. Before any proof shape matters, the verifier has to declare the bounded question. If the policy asks only whether the customer is over twenty-one, then the privacy problem is different from a policy that truly requires the exact birth date. If the policy asks only whether an employee belongs to the HR department, then the verifier should not quietly inherit the whole corporate credential just because the transport can carry it.

This is the uncomfortable privacy rule many systems still try to dodge: if the verifier asks for the full value, the mechanism cannot rescue the design afterward.

A verifier that requests a full birth date is not practicing selective disclosure simply because the wallet later offers a nicer consent screen. The verifier is still asking for too much. The privacy failure happened at the request boundary.

That is why the same age-check example keeps returning in Marty’s privacy material. The real decision is narrow. May this person buy the restricted item? If the verifier only needs `age_over_21 = true`, then several disclosure mechanisms can satisfy that bounded question. If the verifier insists on learning the exact birth date, the system has already widened the knowledge boundary before any cryptography has had a chance to help.

The first lesson, then, is not about hashes, proofs, or tokens. It is about discipline.

Selective disclosure begins when the verifier’s request becomes explicit enough that the system can tell the difference between what must cross the boundary and what must remain undisclosed.

## Hashes, predicates, and proofs hide different things

Once the boundary is clear, the mechanism question becomes useful.

This is where selective disclosure stops being a slogan and becomes a comparison of disclosure shapes. Similar-looking mechanisms make different promises. Some reduce the number of claims revealed. Some reduce what the verifier can infer from a repeated presentation. Some remove the source value from the verifier’s view entirely. Those are related privacy improvements. They are not identical ones.

A simple comparison helps keep the differences honest:

| Mechanism | What the verifier learns | What stays hidden | Best fit |
| --- | --- | --- | --- |
| Full claim disclosure | The exact attribute value | Nothing beyond whatever the verifier did not request | When the business or legal decision genuinely needs the value itself |
| Issued predicate claim | A bounded fact such as `age_over_21 = true` | The source attribute used to derive that fact | Stable yes/no decisions where the issuer can precompute the result |
| SD-JWT selective disclosure | Only the claims the holder reveals from the salted, hashed set | Undisclosed claims remain hidden from the verifier | JSON and JWT ecosystems that want practical minimal disclosure with standard tooling |
| Zero-knowledge proof | That a condition holds | The source value itself, often with stronger resistance to repeated linkage | Higher-privacy cases where the verifier should not see the underlying value at all |

Start with the simplest case.

Full claim disclosure is not usually called selective disclosure, but it belongs in the comparison because it clarifies the baseline. If a verifier requests `birth_date`, then the verifier learns `birth_date`. Nothing subtle is happening. Sometimes that is justified. Many times it is not.

Issued predicate claims change the shape of the result earlier in the lifecycle. Instead of asking the wallet to prove something about a source attribute at presentation time, the issuer places a bounded claim in the credential itself. A mobile credential might include `age_over_21 = true` rather than requiring the verifier to learn the underlying date of birth. This is powerful precisely because it is boring. The verifier gets the answer it needs. The source attribute never has to cross the boundary.

The trade-off is that issued predicate claims are only as flexible as the bounded facts the issuer decided to create. If the verifier later needs a different threshold or a different kind of proof, the credential may need a different claim or a different issuance strategy.

SD-JWT sits in the middle and is often the most practical selective-disclosure mechanism for ordinary relying parties. The issuer creates salted disclosures for claims, hashes those disclosures into the token, and lets the holder reveal only the specific disclosures needed for one presentation. The verifier receives the chosen claims and can verify that they match the hashes in the signed token. Claims that were not revealed remain hidden.

That is a strong and useful privacy improvement, but it is important to be precise about what it does not do.

SD-JWT usually hides undisclosed claims. It does not magically prevent the verifier from learning the claims that were disclosed. If the holder reveals `family_name`, the verifier learns `family_name`. If the holder reveals the same value repeatedly in closely related contexts, some linkability risk may still remain because the verifier is still seeing real values. That does not make SD-JWT weak. It makes it honest.

Zero-knowledge proofs solve a different problem. They are for the cases where the verifier should learn only that a condition holds, not the source value that makes it true. A verifier can learn that the holder is over the required age without learning the actual date of birth. In stronger designs, the proof can also reduce how much repeated use reveals across presentations because the verifier is not receiving the same raw attribute value again and again.

This is where mechanism confusion usually begins.

People say “selective disclosure” when they really mean one of at least three different privacy properties:

1. hide claims the verifier did not request
2. reveal only a bounded result instead of a full source value
3. reduce linkability across repeated presentations

Those properties can overlap. They are still not the same promise.

That is why the mechanism layer needs careful language. SD-JWT is not a failed ZK system. An issued predicate claim is not a weaker version of SD-JWT. A zero-knowledge proof is not automatically the mature answer for every verifier. They are different answers to different disclosure boundaries.

## Mechanism choice follows policy need and runtime cost

Once the differences are visible, the design rule becomes much simpler.

Choose the lightest mechanism that satisfies the verifier’s bounded question honestly.

That sentence is doing a lot of work.

“Lightest” matters because selective disclosure is not a contest to deploy the fanciest proof system. Verifiers live in real runtimes with ordinary libraries, latency budgets, operator expectations, audit requirements, and wallet compatibility constraints. A mechanism that is perfect on a cryptography slide can still be the wrong production choice if the privacy requirement did not actually demand it.

“Honestly” matters because convenience has a way of masquerading as architecture. A team may say it needs the exact birth date when it really needs only a threshold answer. A verifier may log an entire presentation envelope “for debugging” and quietly undo the privacy win at the support layer. A system may ask for broad claim reveal simply because the existing libraries make it easy. None of those are serious reasons to widen disclosure.

A more useful decision frame looks like this:

| Verifier need | Likely best fit | Why |
| --- | --- | --- |
| Exact value is required | Direct claim disclosure or a revealed SD-JWT claim | The decision genuinely depends on the real attribute |
| Small set of readable JSON claims is enough | SD-JWT | Practical minimization with familiar JWT and JSON tooling |
| Stable yes/no fact is enough | Issued predicate claim | The verifier needs the answer, not the source attribute |
| Source value must remain hidden and stronger privacy is required | Zero-knowledge proof | The verifier should learn only that the condition holds |

This is where SD-JWT earns its importance. For enterprise web applications, API gateways, and ordinary JSON-heavy relying parties, SD-JWT is often the pragmatic answer because it preserves standard tooling while still keeping undisclosed claims out of the verifier’s hands. That is a very good outcome for a large class of systems.

Zero-knowledge proofs belong where the privacy bar is stricter.

Use them when the policy says the verifier should not see the source value, or when repeated linkability matters enough that ordinary claim reveal is not acceptable. That is a narrower and more demanding requirement than “we would like to ask for fewer fields.” It deserves the stronger mechanism when it is real.

Issued predicate claims belong in the same conversation because they often solve the operational problem more simply than teams expect. If the verifier only needs one bounded answer repeatedly, an issued predicate may be the cleanest design. The issuer computes the fact once, the wallet presents it cleanly, and the verifier never learns the source attribute.

Runtime still matters here.

A browser-based verifier, a retail kiosk, and a mobile wallet fleet do not all carry the same library support or latency tolerance. Stronger privacy mechanisms can introduce heavier proof generation, more verifier-side complexity, or narrower wallet compatibility. Those are not arguments against them. They are reminders that selective disclosure is part of a full system, not a detached cryptographic morality play.

The logging boundary matters too.

A verifier can request only a bounded answer and still lose the privacy win by logging the raw presentation object in full. A serious system records the policy identifier, the decision outcome, the verifier instance, and the minimum audit metadata needed for review. It does not keep a souvenir copy of the holder’s disclosure simply because storage is cheap and future debugging sounds reassuring.

That is the deeper point to land.

Selective disclosure is not one feature you toggle on. It is the discipline of matching the verifier’s bounded question to the least invasive mechanism that can answer it, then making sure the runtime, wallet, and audit behavior actually respect that choice.

If you want the most practical current format-specific version of that story, continue to `sd-jwt-selective-disclosure-deep-dive`. If you want to see how the same disclosure boundary has to be translated into holder-facing consent and request UX, continue to `selective-disclosure-in-wallets`.

## Related reading

- `minimum-disclosure-is-a-policy-problem` — why privacy fails first at the verifier request boundary
- `selective-disclosure` — the policy-first architecture framing underneath the mechanism choices
- `sd-jwt-selective-disclosure-deep-dive` — the concrete JWT-based path for practical selective disclosure
- `zero-knowledge-predicates-identity` — when the verifier should learn only that a condition holds

## Draft metadata

- **Slug:** `selective-disclosure-explained`
- **Date:** `2025-12-31`
- **Updated date:** `2026-04-10`
- **Category:** `Cryptography`
- **Topic:** `Selective Disclosure`
- **Topic cluster:** `Privacy & Disclosure`
- **Layer:** `Present`
- **Difficulty:** `Advanced`
- **Section:** `cryptography`
- **Related:** `selective-disclosure`, `sd-jwt-selective-disclosure-deep-dive`, `data-minimization-in-identity`
- **Concept tags:** `cryptography`, `selective-disclosure`, `privacy`
- **Standards tags:** `SD-JWT`, `BBS+`
- **Lead narrator:** Nora Patel
- **Primary reader:** privacy architect, implementer, skeptical buyer
- **Likely CTA:** `sd-jwt-selective-disclosure-deep-dive`
- **Status:** `live`
- **Batch:** `batch-18`

# Deploying Marty for Age Verification

*At a grocery self-checkout kiosk, privacy is not an abstract principle. It is the difference between asking one yes-or-no question and quietly collecting a customer’s identity record because the lane was built for scanner convenience instead of disclosure discipline.*

Privacy conversations often sprawl into wallets, standards, and selective-disclosure philosophy. Age verification is useful precisely because the decision is so narrow. A customer is buying a restricted item at a grocery self-checkout kiosk. The lane does not need to know who they are in the general sense. It needs one bounded answer: **is this customer over twenty-one?**

That makes age verification a clean Marty proof note. The tension is explicit from the first step: **privacy versus overcollection**. In a legacy lane, the kiosk scans a physical ID, ingests a large block of attributes, and leaves downstream systems to behave responsibly after the fact. In a Marty lane, the verifier states the actual requirement up front. The request is bounded before the data moves.

## One yes/no decision, correctly bounded

Nora would frame the problem in the most uncomfortable possible way: if the kiosk learns a customer’s full name, home address, and exact birth date during a routine alcohol sale, then the system has already overcollected. It does not matter whether the retailer promises not to use that information later. The privacy failure happened when the lane requested more than the decision required.

Now picture the better flow. The customer scans groceries, includes a restricted item, and the kiosk pauses the transaction. Instead of demanding a license scan, the screen displays a QR code. The customer opens their wallet, scans the code, and an OID4VP presentation flow begins. The transport stays realistic for a retail architect, but the important part is the verifier request inside the flow.

The verifier does **not** ask for the entire credential. It asks only for the predicate `age_over_21`. The wallet evaluates the request against the credential it holds and returns the minimal proof needed to satisfy that policy. The kiosk gets the answer it needs for the purchase decision and never touches the customer’s name, address, license number, or true birth date.

That boundary is the whole point. The kiosk is not “being careful” with sensitive data it already collected. It never receives the sensitive data in the first place.

| Verification approach | What the kiosk requests | What the kiosk learns | Privacy consequence |
| --- | --- | --- | --- |
| Legacy ID scan | Full license or credential payload | Name, address, birth date, document number, plus whatever else the scanner exposes | Overcollection becomes the default operating mode |
| Marty bounded request | Predicate `age_over_21` through the verifier policy | Only whether the customer satisfies the age threshold | The lane stays aligned with the actual retail decision |

This is why Marty matters to privacy-conscious buyers. The question is not whether the verifier team means well. The question is whether the architecture forces the verifier to stay inside the decision boundary. Marty does that by putting the disclosure requirement in the `Presentation Policy` instead of burying it inside scanner firmware, point-of-sale middleware, or a vendor SDK.

For a retail architect, that change also improves operational clarity. The verifier request is legible to policy reviewers, privacy teams, and auditors. If the retailer later changes scope and wants a different rule, that change is visible as a policy change rather than hidden implementation drift.

Sofia’s contribution is the runtime realism. A self-checkout lane is not a laboratory demo. It is a device under transaction pressure, intermittent connectivity, and support teams who would love to log everything “just in case.” That is why the bounded request matters so much. When the kiosk only receives the predicate result, the support burden cannot quietly expand into full identity payload retention.

That does not mean the operational questions disappear. The lane still needs to know which issuers it trusts, which credential formats it accepts, how long policy or trust material may remain cached, and what gets recorded for audit when a sale is approved or denied. But those are runtime questions wrapped around a bounded disclosure decision. They are not excuses to widen the disclosure surface. A good retail deployment can log that the verifier policy `age_over_21` was satisfied at a certain kiosk, at a certain time, for a certain transaction class, without storing the underlying birth date or identity attributes.

This is the confidence shift the scene is supposed to create. A serious privacy reader already knows overcollection is bad. What they need is proof that a real retail lane can do something more disciplined without becoming hand-wavy or impractical. Age verification supplies that proof because the business decision is binary. Once the verifier is required to honor that boundary, the old habit of scanning and hoarding identity data looks less like a convenience and more like a design failure.

The grocery kiosk example also shows why Marty’s policy layer matters more than any single disclosure mechanism. OID4VP can transport the request. Selective disclosure or predicate-capable credentials can satisfy it. But the architecture only stays privacy-preserving when the verifier request is explicitly constrained to what the decision requires. Otherwise the system merely acquires more sophisticated ways to overcollect.

That is the deeper buying implication. Marty is not promising that retail systems will become magically privacy-preserving because they adopted a new wallet flow. It is proving that privacy can be made operational when the verifier asks one bounded question, uses a policy that encodes that boundary, and keeps the runtime aligned with it. For age verification, the right design is almost embarrassingly simple: request `age_over_21`, get the answer, finish the sale, and leave the rest of the customer’s identity where it belongs.

If you want the broader argument for why this boundary must be governed as policy rather than left to verifier habit, continue to `minimum-disclosure-is-a-policy-problem`.

## Related reading

- `minimum-disclosure-is-a-policy-problem`
- `selective-disclosure`
- `presentation-policies-minimum-disclosure`
- `data-minimization-in-identity`

## Draft metadata

- **Slug:** `deploy-age-verification`
- **Date:** `2025-07-28`
- **Updated date:** `2026-10-24`
- **Category:** `Technical`
- **Topic:** `Age Verification`
- **Topic cluster:** `Deployment Patterns`
- **Layer:** `Deploy`
- **Difficulty:** `Intermediate`
- **Section:** `business`
- **Related:** `deploy-membership-credentials`, `deploy-enterprise-access`, `selective-disclosure`
- **Concept tags:** `deployment`, `privacy`, `retail`
- **Standards tags:** `(none)`
- **Lead narrator:** Nora Patel (support from Sofia Rahman)
- **Primary reader:** privacy-conscious buyer, retail architect
- **Likely CTA:** `minimum-disclosure-is-a-policy-problem`
- **Status:** `live`
- **Batch:** `batch-05`

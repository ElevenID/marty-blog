# Selective Disclosure

*Selective disclosure is not a magic privacy label. It is the discipline of revealing only what a decision requires, then choosing the lightest mechanism that can enforce that boundary.*

Once minimum disclosure is accepted as a policy problem, the next question is technical: **what mechanism should carry that policy into the presentation?** Nora’s answer starts with the boundary, not the tool. Marcus adds the useful warning: similar-looking mechanisms make different promises. That is why selective disclosure sits on two Marty tensions at once: **privacy versus disclosure burden** and **mechanism versus policy intent**. Choose the mechanism first and teams usually either over-disclose or over-engineer.

## The disclosure problem

Consider a grocery self-checkout kiosk handling an age-restricted purchase. The decision is narrow: is the shopper over twenty-one? A conventional identity flow still tends to pull much more than that. A mobile driver’s license or wallet credential may expose name, address, exact date of birth, document number, expiration, and issuer metadata. The verifier may claim it only “uses” one field, but once the full payload crosses the boundary, the verifier has already learned more than the decision requires.

That is the disclosure problem in plain terms. The privacy failure is not only that too much data becomes visible. It is that the holder and the operator both inherit the burden of everything the verifier never needed. Extra claims create extra logs, extra audit scope, and extra correlation risk across repeated presentations. A full credential shown once may be unnecessary. A full credential shown everywhere becomes a trail.

So selective disclosure should be defined strictly. It does **not** mean the holder gets a nicer consent screen after the verifier has already asked for too much. It means non-required claims never cross the verifier boundary at all. That only works when a `Presentation Policy` states the request precisely. If policy says the verifier needs `age_over_21 = true`, the mechanism should deliver that answer and stop. If policy truly needs a name or credential ID, disclose that claim explicitly and no more. The first architectural move is not fancy cryptography. It is moving the boundary from verifier habit into governed policy.

## Mechanism choices

Once the policy boundary is clear, mechanism choice becomes a practical architecture decision instead of a cryptography fashion contest. Marcus’s contribution is simple but important: hiding undisclosed claims, proving only a predicate, and resisting linkage across repeated presentations are related properties, not identical ones.

| Mechanism | What is presented | Operational fit | Privacy profile | Use when |
| --- | --- | --- | --- | --- |
| Full claim disclosure | Exact attribute values | Universal | Lowest privacy | Policy genuinely requires the exact value |
| SD-JWT selective disclosure | JWT plus only needed disclosures | Excellent for JSON/JWT stacks | Hides undisclosed claims, but not the strongest unlinkability | Relying parties need standard JSON processing and familiar JWT libraries |
| Issued predicate claim | A bounded claim such as `age_over_21 = true` | Strong fit for ordinary claims handling | Verifier learns only the predicate result | One stable yes/no decision is enough |
| ZK predicate or proof | Proof that a condition holds without the source value | More specialized verifier support | Stronger non-disclosure and better unlinkability | Policy requires stricter non-disclosure or stronger unlinkability |

For most enterprise web and API verifiers, SD-JWT is the pragmatic default. It keeps standard JSON processing and familiar JWT libraries while hiding claims that were not requested. That is why the completed evidence framework matters so much here: **use SD-JWT when relying parties need standard JSON processing and familiar JWT libraries**. It is not the strongest privacy model, but it is often the right operational one.

ZK approaches are for a different bar. **Use ZK approaches when policy requires stronger unlinkability or stricter non-disclosure properties**—when the verifier should learn only that a condition holds, not the source value itself, and when repeated use should resist correlation more strongly. That does not make ZK “better” by default. It makes it appropriate when the policy outcome is stricter. Start with the decision boundary, then pick the lightest mechanism that satisfies it honestly.

## Policy and deployment implications

Mechanism choice has runtime consequences. It affects what gets logged, what verifier software must support, how much latency the flow can tolerate, and what a deployment can carry at the edge. In Marty, those consequences belong with `Presentation Policy` and `Deployment Profile`, not with undocumented library defaults.

| Policy objective | What the verifier should learn | Likely best fit | Why |
| --- | --- | --- | --- |
| Exact value is required for the business or legal decision | A specific attribute value | Direct claim disclosure or selected SD-JWT claim | The goal is minimization of scope, not concealment of the value |
| Standard relying party needs a small subset of JSON claims | Only the chosen claims | SD-JWT | It preserves ordinary JWT and JSON processing |
| Retail or kiosk flow needs a yes/no threshold answer | A bounded result such as `age_over_21 = true` | Issued predicate claim or ZK proof | The source value is unnecessary |
| Policy forbids revealing the source value and wants stronger resistance to linkage | Proof that a condition holds | ZK approach | The policy bar is higher than simple claim minimization |
| High-throughput environment needs privacy improvement with standard tooling | A minimal claim set | SD-JWT unless stricter properties are mandatory | Operational fit matters too |

That matrix is why this should not become a detached cryptography lecture. The hard questions are institutional. What can the verifier log? What must audit reconstruct later? What can a kiosk, browser app, or API gateway actually support? A verifier can request only a predicate and still lose the privacy win by logging the whole presentation envelope for debugging. A serious deployment logs the decision, the policy identifier, the proof or disclosure type, and the minimum metadata required for review—not a souvenir copy of the credential.

Deployment context also matters. A browser app, API gateway, and retail kiosk do not share the same library support or latency budget. SD-JWT often wins because it fits the software already on the ground. ZK may still be right, but if it is, the choice should be visible in the deployment plan: wallet capability, verifier libraries, performance budget, and operator expectations all change. In Marty terms, policy sets the disclosure boundary and deployment makes sure the runtime can actually honor it.

That is the discipline in one sentence: choose the mechanism that matches the policy need, not the mechanism that makes the fanciest slide. If you want to see that logic applied to one clean retail yes/no decision, continue to `deploy-age-verification`.

## Related reading

- `minimum-disclosure-is-a-policy-problem` — why disclosure boundaries belong in policy before they belong in cryptography
- `presentation-policies-minimum-disclosure` — the Marty control surface that tells wallets and verifiers what the decision actually requires
- `sd-jwt-selective-disclosure-deep-dive` — the practical mechanics of SD-JWT for JSON and JWT-heavy stacks
- `zero-knowledge-predicates-identity` — when stronger non-disclosure properties and predicate proofs are worth the extra complexity
- `deploy-age-verification` — a concrete yes/no verifier flow where selective disclosure pays off immediately

## Draft metadata

- **Slug:** `selective-disclosure`
- **Date:** `2025-07-16`
- **Updated date:** `2026-10-13`
- **Category:** `Cryptography`
- **Topic:** `Selective Disclosure`
- **Topic cluster:** `Privacy & Disclosure`
- **Layer:** `Present`
- **Difficulty:** `Intermediate`
- **Section:** `cryptography`
- **Related:** `sd-jwt-selective-disclosure-deep-dive`, `minimum-disclosure-is-a-policy-problem`, `data-minimization-in-identity`
- **Concept tags:** `privacy`, `selective-disclosure`, `cryptography`
- **Standards tags:** `SD-JWT`
- **Lead narrator:** Nora Patel (support from Marcus Vale)
- **Primary reader:** architect, privacy reader, implementer
- **Likely CTA:** `deploy-age-verification`
- **Status:** `live`
- **Batch:** `batch-05`

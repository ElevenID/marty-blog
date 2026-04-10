# Selective Disclosure in Wallets

*Selective disclosure becomes real in a wallet when a verifier request is translated into a holder-readable choice about which claims to share.*

Selective disclosure is often explained from the verifier side or from the mechanism side.

Those explanations matter. They tell us why a verifier should ask only for the minimum information it needs, and they compare the cryptographic ways a system can enforce that boundary.

But that is not how most holders encounter the subject.

Holders meet selective disclosure at the wallet edge.

They see a request on a screen. They are asked to approve or refuse. They need to understand what is required, what is optional, and what the privacy cost of sharing will be. If the wallet cannot translate the verifier’s bounded request into something understandable at that moment, the system may still be cryptographically elegant and still fail as a holder experience.

That is why selective disclosure in wallets deserves its own explanation.

## A verifier request still has to make sense to the holder

The first useful correction is simple.

A policy-shaped request is still not the same thing as a human-readable request.

From the verifier’s point of view, the request may already be disciplined. A presentation policy might ask only for the right claim, the right predicate, and the right freshness posture. An OID4VP request may carry that boundary correctly. A privacy team may be delighted with how narrow the disclosure surface has become.

The holder still needs to know what is happening.

That is the wallet’s job.

It has to translate the verifier’s request into a decision the holder can recognize: who is asking, what credential is relevant, which attributes are required, what can still be withheld, and what kind of privacy consequence the disclosure carries. If the wallet skips that translation layer, the holder experiences selective disclosure as one more vague permission prompt instead of as meaningful control.

This is why selective disclosure in wallets should never be treated as a purely cryptographic feature.

It is a consent surface.

A verifier request may already be bounded in machine-readable form, but the wallet still has to make that boundary legible to the person being asked to share.

## Wallets turn policy into claim choices

The holder-side selective disclosure flow in the authenticator makes this translation problem concrete.

Its disclosure sheet starts from a per-attribute model. Each attribute is tracked with whether it is required, whether it is currently disclosed, what disclosure risk it carries, what usage restrictions apply, and which data category it belongs to. That alone is a useful design lesson. The wallet is not acting as though every claim is equivalent. It is organizing disclosure around bounded decisions.

That matters because required and optional disclosure are not the same kind of choice.

If an attribute is required by the verifier’s request, the wallet should say so clearly. It should not pretend the holder has a free choice where the policy says no. On the other hand, if a field is optional or can be withheld under the policy boundary, the wallet should make that visible too. Otherwise the holder experiences the whole flow as all-or-nothing even when the system is capable of more disciplined disclosure.

The authenticator UI patterns reinforce that distinction.

Required fields are marked and locked. Optional fields can be toggled. Each attribute can show a risk level such as low, medium, high, or critical. The sheet can also attach data-category labels and usage restrictions so the holder is not left guessing why one claim feels more sensitive than another.

That is the design move worth noticing.

The wallet is turning a verifier policy into a holder decision model instead of dumping raw fields and hoping the holder infers the difference.

This is also why the wallet article should stay distinct from the broader `selective-disclosure` piece. The broader article asks which mechanism matches the verifier’s privacy need. This one asks how the wallet makes that need comprehensible and actionable once the request reaches the holder.

## Risk labels and privacy modes keep consent bounded

The next layer is what the wallet does once it has made the request understandable.

A serious wallet still has to help the holder act on that understanding without turning the flow into a negotiation interface nobody can use.

The authenticator’s privacy-mode model is a useful example because it makes that trade-off explicit. Instead of exposing only raw attribute toggles, it offers broader disclosure postures such as Minimal, Balanced, Permissive, and Full Disclosure. Each mode changes what gets shared by default while still respecting required attributes.

That is a subtle but important pattern.

The wallet is not giving the holder infinite freedom detached from policy. It is giving bounded choice inside the policy boundary. Minimal mode can share only what is required. Balanced mode can share required attributes plus low-risk optional ones. More permissive modes widen the boundary deliberately rather than accidentally.

The privacy-impact summary does something similar.

When the wallet shows how many attributes are disclosed, how many remain protected, and what the overall privacy posture looks like, it helps the holder understand the consequence of the choice before the presentation happens. That is much more trustworthy than a generic “Share now?” button.

Risk labels, privacy modes, and impact summaries are not replacements for good policy.

They are what let the wallet express good policy to a human being.

And that is the right place to land the article. Selective disclosure in wallets is the holder-side translation layer between a verifier’s bounded request and an informed sharing decision. It makes required fields visible, optional claims adjustable, privacy trade-offs understandable, and consent bounded instead of vague.

If you want the broader mechanism discussion next, continue to `selective-disclosure`. If you want the product-design layer that turns these disclosure patterns into trustworthy wallet UX, go next to `wallet-ux-design-for-identity`.

## Related reading

- `selective-disclosure` — the verifier-side and mechanism-side explanation of bounded disclosure
- `wallet-ux-design-for-identity` — how disclosure patterns fit into broader wallet trust design
- `presentation-protocols` — how the verifier’s request reaches the wallet in the first place
- `data-minimization-in-identity` — the policy boundary this holder flow is trying to preserve

## Draft metadata

- **Slug:** `selective-disclosure-in-wallets`
- **Date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `Selective Disclosure`
- **Topic cluster:** `Wallets`
- **Layer:** `Present`
- **Difficulty:** `Intermediate`
- **Section:** `implementation`
- **Related:** `selective-disclosure`, `what-is-a-digital-identity-wallet`, `wallet-ux-design-for-identity`
- **Concept tags:** `wallets`, `selective-disclosure`, `privacy`
- **Standards tags:** `SD-JWT`, `ISO 18013-5`, `BBS+`
- **Lead narrator:** Sofia Rahman
- **Primary reader:** product owner, wallet implementer, privacy architect
- **Likely CTA:** `wallet-ux-design-for-identity`
- **Status:** `live`
- **Batch:** `batch-16`

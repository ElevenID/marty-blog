# Deploying Marty for Membership Credentials

*Membership credentials are where identity architecture stops getting a free pass from government authority. If a partner verifier still has to phone the issuer every time, you may have a portable credential format, but you do not yet have portable trust.*

Passports and state IDs make verifiable credentials easy to picture, but they can also hide the deeper proof. The harder question is what happens in a non-government network where multiple organizations need to honor the same entitlement without turning every check into an issuer API dependency.

Victor would start with the network shape. In an airline-alliance-style ecosystem, United issues a `Gold Status` credential. Later, a traveler arrives at a Lufthansa lounge in Munich. The staff need one operational answer: **does this passenger hold the alliance entitlement required for access right now?**

If the answer depends on a live call to United, the credential is not really portable. It is a nicer wrapper around centralized lookup. Marty matters here because the Lufthansa verifier can trust shared ecosystem governance, validate locally, and make the decision without a backhaul call to United.

## One alliance credential, trusted locally

The useful tension in this scene is **format versus trust governance**. A well-formed credential is necessary, but it is not enough. A lounge verifier in Munich does not need a payload that merely says `Gold Status`; it needs a governed basis for accepting it. The verifier has to know that United is an authorized issuer, that the credential format and algorithms are accepted, that freshness and revocation rules still hold, and that the request asks only for the decision it actually needs. Marty splits that work into explicit objects instead of burying it in partner-specific integration code.

| Marty layer | Alliance membership trust sketch | Why the verifier can stay local |
| --- | --- | --- |
| `Trust Registry` / trust source | The alliance publishes the root registry or trust list of authorized member issuers | Lufthansa can discover that United belongs in the network without a custom bilateral API call |
| `Trust Profile` | The verifier accepts the alliance trust source, approved algorithms, supported formats, revocation behavior, and time policy | The lounge device knows how to validate the credential chain and freshness under shared rules |
| `Credential Template` | United issues a `Gold Status` credential with the relevant claims, validity rules, and disclosure posture | The entitlement is packaged as a reusable credential, not a one-off API response |
| `Presentation Policy` | The verifier requests proof of the membership entitlement it needs, with holder binding and any freshness requirements | Lounge staff get the decision input they need without asking for a full loyalty dossier |
| Local verifier runtime | Registry material and policy can be synchronized and cached ahead of use | The decision can complete in Munich even when United is not in the request path |

Start with the thing being issued. Marty’s `Credential Template` defines the membership artifact itself: the relevant claims, its validity rules, and its privacy posture. That may sound mundane, but it is the difference between a reusable alliance entitlement and an unstructured partner payload. Open Badges exposes the same issue in education. A badge can be portable in format while still leaving the verifier unsure whether the issuer should be trusted outside its own silo.

That is why Marty keeps trust separate from credential syntax. In Marty’s schema, a `Trust Profile` carries explicit `trust_sources`, `allowed_algorithms`, `supported_formats`, revocation behavior, and time policy. For the Munich lounge, that means the verifier is configured to trust the alliance root registry, accept the approved credential families, and enforce the network’s freshness rules locally. If United remains an authorized issuer, the signature chain validates, and the credential is current, the lounge can accept it without calling home. If the issuer is suspended or the rules tighten, updated trust material changes verifier behavior everywhere. An `OrganizationTrustProfile` lets a participant like Lufthansa apply narrower local overrides without hiding them in partner-specific code.

Now Nora’s support becomes visible. Even in a membership ecosystem, the verifier should still ask the minimum necessary question. The lounge does not need a traveler’s loyalty history or marketing profile. Marty’s `Presentation Policy` lets the verifier request only the claims or predicates required for lounge eligibility, plus holder binding and freshness where appropriate. That keeps the proof commercially honest. Marty is not claiming a membership credential becomes useful because it is wrapped in more cryptography. It becomes useful because the verifier asks for the right thing and can trust the answer under explicit governance.

The operational part matters just as much as the policy part. Marty’s trust-registry sync layer supports full sync, delta sync, and ETag-based caching, which is exactly the plumbing a shared ecosystem needs if local verifiers are going to stay current. In practical terms, the Munich lounge verifier can receive alliance trust updates as a governed background process, cache what it needs, and validate locally at decision time. United does not need to sit in the middle of every lounge entry, and the ecosystem avoids turning partner verification into a mesh of recurring callbacks.

That is why membership credentials are such a useful Marty proof. Government identity often arrives with obvious authority, so readers can confuse “supports the official format” with “solves the trust problem.” A non-government ecosystem strips away that shortcut. What matters is whether trust, issuer authorization, disclosure boundaries, and verifier runtime travel cleanly across organizations.

If Lufthansa can validate a United-issued `Gold Status` credential locally because both parties rely on the same shared registry and governed verifier policy, the beyond-passports claim is proved. Marty is not only for official documents. It is for any ecosystem that wants credentials to travel farther than the issuer’s own silo. If you want the broader version of that argument across travel, enterprise, education, healthcare, and other sectors, continue to `one-protocol-many-ecosystems`.

## Related reading

- `one-protocol-many-ecosystems` — the broader proof that Marty keeps one architectural model across very different credential ecosystems.
- `mip-and-open-badges-education-credentials` — why portable credential formats still need explicit trust governance outside the issuer’s silo.
- `trust-registries` — the guide-level explanation of how ecosystems decide which issuers are actually authorized.
- `trust-profiles` — how verifiers turn trust sources, formats, algorithms, and revocation expectations into governed configuration.
- `presentation-policies` — how the verifier’s request boundary stays explicit and auditable.

## Draft metadata

- **Slug:** `deploy-membership-credentials`
- **Date:** `2025-08-03`
- **Updated date:** `2026-10-30`
- **Category:** `Business`
- **Topic:** `Membership Credentials`
- **Topic cluster:** `Deployment Patterns`
- **Layer:** `Deploy`
- **Difficulty:** `Intermediate`
- **Section:** `business`
- **Related:** `deploy-age-verification`, `deploy-enterprise-access`, `credential-templates-designing-what-gets-issued`
- **Concept tags:** `deployment`, `trust-registry`, `ecosystem`
- **Standards tags:** `(none)`
- **Lead narrator:** Victor Leclerc (support from Nora Patel)
- **Primary reader:** product owner, ecosystem architect
- **Likely CTA:** `one-protocol-many-ecosystems`
- **Status:** `live`
- **Batch:** `batch-06`

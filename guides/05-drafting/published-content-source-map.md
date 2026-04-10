# Published Content Source Map

Phase: 05 - Drafting  
Purpose: Track which existing Marty materials can already be used as source for standalone topical essays, themed collections, or guided paths.  
Time to Complete: 25–40 minutes

<!-- guide:published_content_source_map -->

## Why This Matters

Authors drafting new material should not have to excavate the full blog and guide inventory every time.
This map records existing source material so authors can quickly find the strongest inputs for any topic and pair them effectively.

## Before You Begin

Prerequisites:

- `../00-start-here/course-brief.md`
- `../04-plot-and-structure/module-map.md`

This working draft is based on the current blog, guide chapters, protocol documentation, and product materials.

## How To Use This Map

Use this source map in a topic-led way:

1. start from a reader question
2. choose the strongest primary source for that question
3. add one supporting source that broadens or proves the point
4. decide what the next step should be for the reader

This keeps drafting flexible without becoming random.

## Current canonical ownership rules for overlapping surfaces

Use these defaults before drafting or revising any contested topic. If a later merge/rename pass changes them, update this table first so the source map, briefs, and packets stay aligned.

| Cluster | Current canonical owner | Drafting rule |
| --- | --- | --- |
| Operational guide/blog slug collisions (`deployment-*`, `offline-verification-guide`, `impl-*`, and similar how-to surfaces) | Guide surface | Keep the guide as canonical. A blog companion only survives if it has a distinct bridge / evaluation / overview job under a non-colliding slug. |
| Selective-disclosure family | `selective-disclosure` | Keep `minimum-disclosure-is-a-policy-problem` as the policy-first privacy entry. Within the selective-disclosure family, keep `selective-disclosure` as the canonical mechanism explainer, treat `selective-disclosure-explained` as a merge / retire surface, keep `selective-disclosure-in-wallets` as the holder-UX angle, and keep `sd-jwt-selective-disclosure-deep-dive` as the standards-specific deep dive. |
| Trust-profile pair | `trust-profiles-explained` | Treat it as the canonical concept entry. The surviving follow-on is `trust-profile-evaluation-and-failure-handling`, a runtime-focused deep dive on freshness, evaluation order, and fail-closed behavior; retire any other near-duplicate trust explainer. |
| Protocol-overview cluster | role-split across `why-identity-needs-a-protocol`, `why-the-marty-protocol-exists`, `introducing-mip`, and `the-marty-identity-model` | Preserve the four-way split only if each piece stays inside its assigned job: category case, minimum shared model, launch / artifacts, and stable grammar / synthesis. |

## Current contested-surface decision matrix

Use this as the keep / merge / rename table for the next editorial pass.

| Cluster | Current keep / merge / rename decision | Editorial consequence |
| --- | --- | --- |
| Operational guide/blog collisions (`deployment-profiles-in-practice`, `offline-verification-guide`, `compliance-profiles-in-practice`, `deploy-airline-boarding`, `deploy-age-verification`, `deploy-enterprise-access`, `deploy-membership-credentials`, `impl-oid4vci`, `impl-oid4vp`) | Keep the guide slug canonical. Treat the current blog surfaces as temporary bridge/proof companions that must be renamed or retired before the next large regeneration or routing cleanup. | Do not draft new blog pieces under the colliding slugs. If a blog companion survives, give it a bridge-style slug and keep the guide on the how-to slug. |
| Data minimization cluster (`privacy-data-minimization` guide/article, live blog `privacy-data-minimization`, live blog `data-minimization-in-identity`) | Keep the guide on `privacy-data-minimization`; keep `data-minimization-in-identity` as the canonical blog proof note; treat live blog `privacy-data-minimization` as the retire / redirect / rename candidate rather than a long-term third surface. | Future privacy-path CTAs should point to `data-minimization-in-identity` on the blog side and avoid drafting another long-term blog surface under the guide-owned slug. |
| Selective-disclosure family (`selective-disclosure`, `selective-disclosure-explained`, `selective-disclosure-in-wallets`, `sd-jwt-selective-disclosure-deep-dive`) | Keep `minimum-disclosure-is-a-policy-problem` as the policy-first privacy entry. Keep `selective-disclosure` as the single front-door mechanism explainer, treat `selective-disclosure-explained` as the merge / retire candidate, and keep `selective-disclosure-in-wallets` plus `sd-jwt-selective-disclosure-deep-dive` as the narrower holder-UX and standards-specific follow-ons. | Do not preserve two near-duplicate front-door privacy explainers. Privacy-path CTAs should route through `selective-disclosure`, then branch only when the reader’s question is specifically about wallet UX or SD-JWT mechanics. |
| Trust-profile pair (`trust-profiles-explained`, `trust-profile-evaluation-and-failure-handling`) | Keep `trust-profiles-explained` as the canonical concept explainer and keep `trust-profile-evaluation-and-failure-handling` as the specialized runtime follow-on. | Do not reintroduce a second long-term `explained` entry point. Keep the follow-on focused on evaluation order, freshness, and failure handling rather than the concept introduction. |
| Protocol-overview cluster (`why-identity-needs-a-protocol`, `why-the-marty-protocol-exists`, `introducing-mip`, `the-marty-identity-model`) | Keep the four-way split. `why-identity-needs-a-protocol` = category case, `why-the-marty-protocol-exists` = minimum shared-model bridge, `introducing-mip` = launch / artifact reveal, `the-marty-identity-model` = grammar / synthesis. | `introducing-mip` should not drift back into the front-door explainer role, and release sequencing should insert `why-the-marty-protocol-exists` only when readers need the minimum-model argument before synthesis. |

## Current metadata contract for regeneration

`blogPosts.js` and the metadata sidecars split responsibilities on purpose. Preserve that split during drafting and regeneration instead of hiding everything inside one generated object.

Status note (Apr 10, 2026): the legacy `batch-*` draft inventory has now been backfilled to this contract, and `node scripts/convert-drafts.mjs --metadata-review` currently returns `0` review flags across the draft set. Treat that zero-flag state as the regression baseline for future draft and regeneration work.

| Surface | Canonical fields | Current rule |
| --- | --- | --- |
| `src/data/blogPosts.js` post object | `slug`, `title`, `summary`, `authorId`, `date`, `updatedDate?`, `category`, `topic`, `readTime`, `content` | This is the prose payload. Draft conversion should keep these fields explicit and regenerate them cleanly. |
| `src/data/articleMeta.js` → `ARTICLE_META[slug]` | `primitive?`, `layer`, `topic`, `difficulty`, `related[]` | This is the protocol-learning graph. Treat its `topic` as the **topic cluster**. It may equal the post-card topic, but when the broader cluster label differs, record both explicitly. |
| `src/data/blogSeries.js` → `SECTION_BY_SLUG[slug]` | section placement | Allowed live placements are `featured`, `start-learning`, `core-protocol`, `implementation`, `cryptography`, and `business`. Use `archive` in draft metadata when a post should stay unpinned. |
| `src/data/guideContent.js` → `BLOG_POST_CONCEPT_TAGS[slug]` | concept tags | Keep concept tags separate from standards tags so architecture keywords and standards references do not collapse into one blurry list. |
| `src/data/guideContent.js` → `BLOG_POST_STANDARDS_TAGS[slug]` | standards tags | Record standards tags explicitly, even when the value is `(none)`, so future review can tell the difference between “intentionally empty” and “never reviewed.” |
| `src/data/blogSeries.js` → `BLOG_SERIES`, `START_HERE_SLUGS` | ordered reading-path membership | Only update these when a post truly belongs to an intentional sequence; not every post needs a series assignment. |

Use these classification rules until the UI taxonomy changes:

- **Category stays the current blog taxonomy**: `Business`, `Technical`, `Cryptography`, `Announcement`, `Guide`.
- **Layer is the canonical architecture model**: `Foundations`, `Trust`, `Issue`, `Present`, `Deploy`, `Execute`, `Govern`.
- Do **not** use category as shorthand for layer, or layer as shorthand for category.
- Treat `tags` as two typed lists: `Concept tags` and `Standards tags`.
- Treat publication workflow `Status` as one of `draft`, `review`, `ready`, `live`, or `retired`.
- Keep slug-collision notes such as `provisional`, `rename candidate`, or `retire candidate` in planning docs instead of overloading category or status.

Before the next broad regeneration wave, each draft metadata block should explicitly carry:

- `Topic` for the post-card label in `blogPosts.js`
- `Topic cluster` when `ARTICLE_META.topic` needs a broader label than the post-card topic
- `Primitive` when the post is centered on one MIP primitive
- `Layer`, `Difficulty`, `Section`, `Related`, `Concept tags`, `Standards tags`, and `Status`

Use `node scripts/convert-drafts.mjs --metadata-review` to generate a review ledger before merging regenerated prose into live data files, and treat any new review flag as a blocker until the draft metadata is made explicit.

## Live Guide Sources

| Source cluster | Best use in publication |
| --- | --- |
| **Guide Chapter 1 — Foundations** | First-principles teaching and the trust triangle |
| **Guide Chapter 2 — Core Objects** | Teaching the Marty primitives directly |
| **Guide Chapter 3 — Trust & Governance** | Establishing credibility under privacy, governance, and trust pressure |
| **Guide Chapter 4 — Flows** | Turning the model into lifecycle motion |
| **Guide Chapter 5 — Deployments** | Proving operational reality and use-case variety |
| **Guide Chapter 6 — Implementations** | Handing readers into standards/protocol implementation surfaces |

## Live Flagship Post Sources

| Post | Best editorial role |
| --- | --- |
| `why-identity-needs-a-protocol` | Opening thesis and category reframe |
| `trust-profiles-explained` | Primitive deep dive with strong buyer-builder relevance |
| `business-case-for-credential-portability` | Economic proof and anti-lock-in framing |
| `cryptographic-trust-anchors-primer` | Trust seriousness and technical legitimacy |
| `credential-templates-designing-what-gets-issued` | Issuance design logic and privacy-by-design |
| `presentation-policies-minimum-disclosure` | Minimum disclosure and policy-as-data argument |
| `eudi-wallet-readiness` | Regulatory urgency and compliance angle |
| `deployment-profiles-from-design-to-production` | Runtime/deployment realism |
| `zero-knowledge-predicates-identity` | Privacy depth and modern cryptography payoff |
| `flows-orchestrating-identity-lifecycle` | Full lifecycle synthesis |
| `compliance-profiles-bridging-regulation` | Standards mapping and operational compliance story |
| `sd-jwt-selective-disclosure-deep-dive` | Practical selective disclosure explanation |
| `cedar-policies-for-identity-governance` | Governance, authorization, and formal policy proof |
| `introducing-mip` | Launch payoff and product/protocol reveal |
| `mip-json-schemas-walkthrough` | Implementation artifact proof |
| `post-quantum-readiness-in-identity` | Long-term resilience and algorithm agility |
| `building-trust-registries-at-scale` | Ecosystem-scale trust layer |
| `offline-verification-design-patterns` | High-assurance operational context |
| `holder-binding-beyond-biometrics` | Holder authenticity and security nuance |
| `mip-and-open-badges-education-credentials` | Non-government ecosystem breadth |
| `conformance-testing-for-implementers` | Implementation maturity and rigor |
| `revocation-strategies-compared` | Revocation trade-offs and deployment design |

## Supporting Non-Blog Proof Sources

| Source | Best editorial role |
| --- | --- |
| `marty-protocol/README.md` | Canonical architecture summary, five primitives, use-case list |
| `marty-protocol/SPECIFICATION.md` | Formal proof that the model exists beyond editorial framing |
| `product-catalog/pricing-and-packaging.md` | Commercial logic for teaching and selling Marty as infrastructure |
| `product-catalog/offering-matrix.md` | Short-form packaging proof for deployment and governance tiers |

## Best Source Pairings

| Need | Best pairing |
| --- | --- |
| Explain the category problem | `why-identity-needs-a-protocol` + `centralized-vs-verifiable` |
| Explain a primitive | Guide chapter 2 article + corresponding flagship post |
| Show privacy is structural | `presentation-policies-minimum-disclosure` + `zero-knowledge-predicates-identity` + `data-minimization-in-identity` |
| Prove real deployment viability | Chapter 5 deployment guides + `offline-verification-design-patterns` + pricing docs |
| Hand readers into implementation | `introducing-mip` + `mip-json-schemas-walkthrough` + `conformance-testing-for-implementers` |

## Wave 1 front-door recovery pairings

These pairings support the broken Start Here path and should be treated as the current canonical source stack for the first recovery wave.

| Recovery post | Strongest starting sources | Best supporting sources | Recommended handoff |
| --- | --- | --- | --- |
| `what-is-digital-identity` | `foundations-identity` + `centralized-vs-verifiable` | `foundations-verification`, `why-identity-needs-a-protocol` | `verifiable-credentials-explained` |
| `verifiable-credentials-explained` | `foundations-credentials` + `foundations-verification` | `centralized-vs-verifiable`, `presentation-policies-minimum-disclosure` | `issuers-holders-verifiers-explained` or `credential-lifecycle` |
| `four-actors-of-identity-systems` | `foundations-identity` + `foundations-verification` | `building-trust-registries-at-scale`, `trust-profiles-explained`, `guides/03-world-building/use-cases-and-deployment-contexts.md` | `issuers-holders-verifiers-explained` |
| `issuers-holders-verifiers-explained` | `foundations-identity` + `foundations-verification` | `deploy-enterprise-access`, `deploy-age-verification`, `guides/03-world-building/use-cases-and-deployment-contexts.md` | `credential-lifecycle` |
| `credential-lifecycle` | `flows-orchestrating-identity-lifecycle` + `credential-templates` | `foundations-verification`, `deployment-profiles`, `marty-protocol/README.md` | `five-primitives-in-one-picture` or `the-marty-identity-model` |
| `the-marty-identity-model` | `marty-protocol/README.md` + `five-primitives-in-one-picture` | `trust-profiles`, `credential-templates`, `presentation-policies`, `deployment-profiles` | primitive deep dives or `flows-orchestrating-identity-lifecycle` |

## Wave 2 PKI and wallet recovery pairings

These pairings support the next recovery wave: the PKI-for-Identity series stubs plus the wallet-series stubs. They should be treated as the current canonical source stack for restoring the trust-depth and wallet-depth paths.

| Recovery post | Strongest starting sources | Best supporting sources | Recommended handoff |
| --- | --- | --- | --- |
| `public-key-infrastructure-explained` | `cryptographic-trust-anchors-primer` + `marty-protocol/SPECIFICATION.md` (§5 Trust Profile, §5.7 root-of-trust models) | `marty-core/marty-crypto/README.md`, `marty-protocol/README.md` | `understanding-trust-anchors` |
| `understanding-trust-anchors` | `cryptographic-trust-anchors-primer` + `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json` | `marty-protocol/SPECIFICATION.md` (§5.7.2 Trust Anchor Distribution), `deployment-profiles-from-design-to-production` | `certificate-chains-and-validation` or `trust-profiles-explained` |
| `certificate-chains-and-validation` | `marty-core/marty-verification/README.md` + `marty-protocol/SPECIFICATION.md` (§5.7.3 Trust Evaluation Algorithm) | `marty-core/marty-crypto/README.md`, `cryptographic-trust-anchors-primer` | `how-passport-pki-works` |
| `how-passport-pki-works` | `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json` + `marty-protocol/README.md` (ICAO / CSCA / DS alignment) | `marty-core/marty-verification/README.md`, `deploy-airline-boarding`, `longfellow-zk/reference/verifier-service/server/README.md` | `understanding-csca-certificates` |
| `understanding-csca-certificates` | `marty-protocol/examples/realistic/pre-boarding-clearance/trust-profile.json` + `cryptographic-trust-anchors-primer` | `longfellow-zk/reference/verifier-service/server/README.md`, `marty-credentials/CONFIGURATION.md` | `how-passport-pki-works` or `verifier-infrastructure` |
| `mobile-wallet-architectures` | `marty-protocol/SPECIFICATION.md` (§13 Wallet Profile) + `marty-authenticator/pubspec.yaml` | `marty-authenticator/DEEP_LINKING.md`, `product-catalog/products/authenticator/overview.md`, `impl-oid4vci` | `secure-enclave-credential-storage` or `credential-portability-across-wallets` |
| `secure-enclave-credential-storage` | `marty-core/marty-secure-storage/src/keychain.rs` + `marty-core/marty-secure-storage/src/database.rs` | `marty-authenticator/pubspec.yaml`, `marty-protocol/SPECIFICATION.md` (holder binding), `product-catalog/products/authenticator/overview.md` | `credential-portability-across-wallets` |
| `credential-portability-across-wallets` | `business-case-for-credential-portability` + `marty-protocol/SPECIFICATION.md` (§13 Wallet Profile) | `marty-authenticator/DEEP_LINKING.md`, `impl-oid4vci`, `product-catalog/products/authenticator/overview.md` | `eudi-wallet-model-explained` or `business-case-for-credential-portability` |
| `eudi-wallet-model-explained` | `eudi-wallet-readiness` + `marty-protocol/examples/realistic/eu-identity-wallet/trust-profile.json` | `marty-protocol/SPECIFICATION.md` (§10.4, §13.5), `one-protocol-many-ecosystems`, `commission.europa.eu` EUDI overview + `ec.europa.eu/digital-building-blocks` technical-spec pages | `compliance-profiles-bridging-regulation` or `mobile-wallet-architectures` |

## Wave 2.5 wallet holder and UX recovery pairings

These pairings support the follow-on wallet recovery wave: the holder-mental-model, device-binding, disclosure-mediation, and UX-trust stubs that should now sit beside the restored wallet architecture series instead of remaining placeholders.

| Recovery post | Strongest starting sources | Best supporting sources | Recommended handoff |
| --- | --- | --- | --- |
| `what-is-a-digital-identity-wallet` | `mobile-wallet-architectures` + `product-catalog/products/authenticator/overview.md` | `marty-authenticator/DEEP_LINKING.md`, `credential-lifecycle`, `issuers-holders-verifiers-explained` | `mobile-wallet-architectures` or `device-binding-and-credential-security` |
| `device-binding-and-credential-security` | `secure-enclave-credential-storage` + `holder-binding-beyond-biometrics` | `marty-authenticator/DEEP_LINKING.md`, `product-catalog/products/authenticator/roadmap.md`, `marty-protocol/SPECIFICATION.md` | `secure-enclave-credential-storage` or `holder-binding-beyond-biometrics` |
| `selective-disclosure-in-wallets` | `selective-disclosure` + `marty-authenticator/lib/widgets/selective_disclosure_sheet.dart` | `presentation-protocols`, `data-minimization-in-identity`, `marty-authenticator/DEEP_LINKING.md` | `wallet-ux-design-for-identity` or `selective-disclosure` |
| `wallet-ux-design-for-identity` | `marty-authenticator/lib/widgets/selective_disclosure_sheet.dart` + `product-catalog/products/authenticator/roadmap.md` | `product-catalog/products/authenticator/overview.md`, `marty-authenticator/DEEP_LINKING.md`, `eudi-wallet-model-explained` | `eudi-wallet-model-explained` or `deploy-age-verification` |

## Wave 3 governance recovery pairings

These pairings support the governance recovery wave: the organizational-governance, authorization-model, policy-engine, and ecosystem-governance stubs that should bridge privacy/compliance framing into the recovered trust-infrastructure path.

| Recovery post | Strongest starting sources | Best supporting sources | Recommended handoff |
| --- | --- | --- | --- |
| `identity-governance-models` | `compliance-profiles-in-practice` + `guides/03-world-building/protocol-ecosystem-map.md` | `compliance-profiles-bridging-regulation`, `product-catalog/pricing-and-packaging.md`, `product-catalog/offering-matrix.md` | `rbac-vs-abac` or `policy-engines-for-identity-systems` |
| `rbac-vs-abac` | `cedar-policies-for-identity-governance` + `marty-microservices-framework/mmf/framework/authorization/adapters/abac_engine.py` | `marty-ui/packages/marty_common/cedar_actions.py`, `marty-protocol/docs/cedar-policies.md`, `deploy-enterprise-access` | `policy-engines-for-identity-systems` or `cedar-policies-for-identity-governance` |
| `policy-engines-for-identity-systems` | `marty-protocol/SPECIFICATION.md` (§16 Policy Set) + `marty-protocol/docs/design-principles.md` | `marty-protocol/docs/cedar-integration-guide.md`, `marty-ui/packages/marty_common/cedar_engine.py`, `marty-ui/services/organization/application/policy_set_use_cases.py` | `cedar-policies-for-identity-governance` or `deploy-enterprise-access` |
| `governing-credential-ecosystems` | `building-trust-registries-at-scale` + `guides/03-world-building/protocol-ecosystem-map.md` | `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md`, `marty-protocol/SPECIFICATION.md` (§10.5 Compliance Profile), `product-catalog/pricing-and-packaging.md` | `trust-registries-explained` or `federation-in-identity-systems` |

## Wave 5 trust-infrastructure recovery pairings

These pairings support the trust-infrastructure recovery wave: the ecosystem-registry, federation, issuer-discovery, and verifier-runtime stubs that connect governance theory to real multi-issuer operations.

| Recovery post | Strongest starting sources | Best supporting sources | Recommended handoff |
| --- | --- | --- | --- |
| `trust-registries-explained` | `building-trust-registries-at-scale` + `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md` | `guides/03-world-building/protocol-ecosystem-map.md`, `deploy-membership-credentials`, `marty-ui/services/trust_profile/main.py` | `discovering-trusted-issuers` or `federation-in-identity-systems` |
| `federation-in-identity-systems` | `deploy-membership-credentials` + `guides/03-world-building/protocol-ecosystem-map.md` | `four-actors-of-identity-systems`, `how-governments-build-identity-pki`, `one-protocol-many-ecosystems` | `trust-registries-explained` or `discovering-trusted-issuers` |
| `verifier-infrastructure` | `Marty/docs/TRUST_SERVICES_ARCHITECTURE.md` + `offline-verification-guide` | `marty-ui/services/trust_profile/main.py`, `marty-core/marty-verification/README.md`, `deployment-profiles-explained-deep` | `offline-verification-guide` or `deployment-profiles-in-practice` |
| `discovering-trusted-issuers` | `trust-registries-explained` + `marty-ui/services/trust_profile/main.py` | `building-trust-registries-at-scale`, `marty-core/marty-verification/src/trust_anchor/registry.rs`, `understanding-trust-anchors` | `verifier-infrastructure` or `trust-registries-explained` |

## Wave 6 final gap-closure recovery pairings

These pairings close the last three remaining stubs: one privacy-mechanism explainer and two protocol-level synthesis posts that should sit on top of the now-restored front-door, privacy, governance, trust-infrastructure, and primitive-deep-dive paths.

| Recovery post | Strongest starting sources | Best supporting sources | Recommended handoff |
| --- | --- | --- | --- |
| `selective-disclosure-explained` *(legacy merge surface)* | `selective-disclosure` + `sd-jwt-selective-disclosure-deep-dive` | `zero-knowledge-predicates-identity`, `presentation-policies-minimum-disclosure`, `data-minimization-in-identity` | `selective-disclosure`, then `sd-jwt-selective-disclosure-deep-dive` or `selective-disclosure-in-wallets` |
| `why-the-marty-protocol-exists` | `why-identity-needs-a-protocol` + `marty-protocol/README.md` | `introducing-mip`, `the-marty-identity-model`, `why-marty-is-ready-for-evaluation` | `the-marty-identity-model` or `why-marty-is-ready-for-evaluation` |
| `how-everything-works-together` | `the-marty-identity-model` + `flows-orchestrating-identity-lifecycle` | `five-primitives-in-one-picture`, `marty-protocol/README.md`, `same-trust-model-different-runtime`, `one-protocol-many-ecosystems` | `mip-json-schemas-walkthrough` or `trust-profiles-explained` |

## Source Quality Notes

Strongest current source types:

- live guide chapters for conceptual clarity
- flagship posts for stakes and framing
- protocol docs for artifact proof
- pricing docs for selling the infrastructure model honestly

Weakest current source type:

- named customer adoption stories

## Drafting Recommendation

Draft new topic-facing material by remixing sources in this order:

1. strongest guide article or flagship post for the immediate question
2. companion source that broadens or proves the point
3. protocol README/spec where artifact proof matters
4. pricing / packaging proof where evaluation logic matters

That order keeps the content pedagogical first and commercial second, which matches the current Marty voice.

## Related

- `course-manuscript-outline.md` — the collections these sources feed
- `priority-draft-briefs.md` — which source combinations are highest leverage next
- `../04-plot-and-structure/post-sequence.md` — how these sources can be arranged into different reader paths

## Using This With AI

Paste this file when asking AI to:

- find the strongest source material for a proposed topic
- suggest source pairings for a new draft
- check whether existing source material covers a reader question
- identify source gaps that limit what can be drafted next

Useful prompt starter:

> Here is the current source map for the Marty publication. What is the strongest available material for an article about [topic], and what source gaps would I need to fill?

# Editorial & Content Improvements

Exhaustive audit of all blog content — data files, guide content, and cross-references.
Items are grouped by severity. Findings from programmatic cross-reference analysis and manual content review.

## Recommended Remediation Program

These fixes should **not** be handled only by editing `src/data/blogPosts.js` in place.
For most of the issues below, the correct fix path is:

1. repair the upstream editorial/planning assets in `guides/`
2. update or create the markdown drafts in `guides/05-drafting/post-drafts/`
3. regenerate JS-ready posts from the drafts
4. merge the regenerated output into `src/data/blogPosts.js`
5. repair metadata/navigation surfaces in `src/data/`
6. rebuild and rerun the content audit

## Current Remaining Editorial Work

As of April 10, 2026, the core prose-recovery program is complete: all 83 live blog posts now have real content and no live stubs remain in `BLOG_POSTS`.

The April 10 deep-audit follow-through is now down to one optional churn item: `ARTICLE_META` keeps short internal layer keys while rendering full reader-facing layer names, and roadmap surfaces now use historical publication-map framing rather than forward-looking planned labels.

The highest-value remaining work is now:

1. **Canonical ownership and overlap decisions**
   - resolve the remaining 10 guide/blog slug collisions
   - keep `data-minimization-in-identity` as the canonical blog proof note; the duplicate live blog slug `privacy-data-minimization` has now been retired while the guide-side surface remains in `guideContent`
   - carry the selective-disclosure overlap decision through live navigation / redirect work: `selective-disclosure` stays the canonical mechanism explainer, `selective-disclosure-explained` is now the merge / retire surface, and the wallet / SD-JWT follow-ons stay distinct
   - keep the trust-profile pair on its new split: `trust-profiles-explained` as the concept entry and `trust-profile-evaluation-and-failure-handling` as the runtime follow-on
   - keep the protocol-overview cluster on its current four-way split and reserve featured/front-door placement for `why-identity-needs-a-protocol`, `five-primitives-in-one-picture`, and `introducing-mip`; `why-the-marty-protocol-exists` stays the optional bridge before synthesis
2. **Metadata contract enforcement and regeneration hygiene**
   - the contract now exists in `guides/05-drafting/published-content-source-map.md`, `guides/07-polish-and-publish/publication-checklist.md`, and `scripts/convert-drafts.mjs --metadata-review`, and the legacy draft inventory has now been backfilled against it; as of April 10, 2026, the review pass returns `0` metadata review flags across the current draft set
   - keep `category` as the current blog taxonomy and treat `layer` as the canonical protocol-lifecycle model; do not use one as shorthand for the other
   - keep `section`, `layer`, `difficulty`, `related`, `readTime`, publication `status`, and, when needed, a distinct `topic cluster` explicit in future draft/converter outputs
   - split tag work into `conceptTags` and `standardsTags` so `BLOG_POST_CONCEPT_TAGS` and `BLOG_POST_STANDARDS_TAGS` can be updated separately
   - treat a clean metadata review pass as a regression gate before any future broad regeneration wave updates `ARTICLE_META`, `SECTION_BY_SLUG`, and the tag maps again
3. **Upstream sync of factual hotfixes**
   - flow the EUDI timing, MIP artifact/version wording, PQC phrasing, and date/timestamp fixes back into evidence packets, briefs, and review rules
4. **Optional legacy title cleanup from the April 10, 2026 deep audit**
   - keep the established `why-the-marty-protocol-exists` slug/title unless a redirect-aware rename plan is approved; the live body-copy, series, roadmap framing, and metadata layer-label drift have already been corrected
5. **Secondary editorial cleanup**
   - recalculate read times
   - standardize protocol naming (`Marty Identity Protocol (MIP)` on first reference, `MIP` thereafter) across upstream drafts and any remaining legacy live copy
   - rebalance persona ownership where it is still skewed
6. **Polish and packaging**
   - diagrams, tutorials, product-bridge CTAs, API doc links, SEO improvements, external standards links, reviewed-by attribution, changelog/history, glossary, series intros, prerequisites, and a "What’s New" page

### Recommended execution order for the next editorial pass

To keep the next cleanup wave from turning into churn, handle the remaining work in this order:

1. **Freeze canonical ownership decisions first**
   - update `guides/05-drafting/published-content-source-map.md`, `guides/05-drafting/priority-draft-briefs.md`, and `guides/06-revision/publication-post-packets.md`
   - propagate the settled selective-disclosure decision (`selective-disclosure` = canonical mechanism explainer, `selective-disclosure-explained` = legacy merge / retire surface) and produce keep / merge / rename decisions for the remaining guide/blog collisions; preserve the already-settled trust-profile and protocol-overview splits unless new drift appears
   - do not spend time polishing duplicate posts until this matrix exists
2. **Keep the metadata contract enforced before the next regeneration wave**
   - the contract and the legacy-draft backfill are now complete; preserve that baseline in `published-content-source-map.md`, `publication-checklist.md`, and `scripts/convert-drafts.mjs --metadata-review`
   - require explicit `Topic`, optional `Topic cluster`, `Layer`, `Difficulty`, `Section`, `Related`, `Concept tags`, `Standards tags`, and `Status` in any new or revised draft
   - treat a zero-flag metadata-review pass as a prerequisite for any large batch regeneration so inferred/defaulted gaps do not re-enter `ARTICLE_META`, `SECTION_BY_SLUG`, or the tag maps
3. **Backport verified factual fixes into upstream source materials**
   - flow the EUDI timing, MIP artifact/version wording, PQC phrasing, and timestamp/date rules into evidence packets, briefs, prompts, and review checklists
   - this should happen before the next broad drafting pass so corrected wording becomes the default rather than a post-publication hotfix
4. **Close the remaining deep-audit follow-through items**
   - the concrete spec contradictions from the April 10 audit are now corrected in live content: schema count, generated typed bindings wording, five-primitive framing, credential format count, revocation method inventory, HYBRID network mode, Application Template coverage, body-copy naming drift, participant-role acknowledgment, metadata layer-label rendering, and roadmap archival framing
   - remaining optional churn is only whether the `why-the-marty-protocol-exists` title is worth a redirect-aware rename
5. **Then run secondary editorial cleanup on the surviving inventory**
   - read times, protocol naming consistency, persona balance, and related-link refinement should happen only after the structural keep/merge/rename decisions are settled
6. **Leave polish and packaging until the end**
   - diagrams, tutorials, SEO, reviewed-by attribution, glossary work, and series intros will have a longer shelf life after the canonical surfaces and metadata schema are stable

### Suggested next session deliverables

If only one focused follow-up pass is available, the highest-leverage output is:

- an optional redirect-aware decision on legacy `Marty Protocol` title surfaces now that the `ARTICLE_META` layer-label handling and roadmap archival framing are aligned
- a rename / retire execution plan for the surviving collision and overlap candidates
- a factual-hotfix backport pass that pushes the live EUDI timing, MIP artifact/version wording, PQC phrasing, and date/timestamp corrections back into briefs, evidence packets, and review prompts
- a secondary editorial normalization pass across the surviving inventory for read times, protocol naming, persona balance, and related-link polish while preserving the current zero-flag metadata baseline

### Draft metadata contract to lock before the next regeneration wave

Use this as the minimum metadata shape for post drafts and regeneration review:

As of April 10, 2026, the legacy draft inventory has been backfilled to this contract and `node scripts/convert-drafts.mjs --metadata-review` returns `0` review flags. Treat that state as the baseline to preserve, not as a one-time cleanup artifact.

- `blogPosts.js` payload: `slug`, `title`, `summary`, `authorId`, `date`, optional `updatedDate`, `category`, `topic`, `readTime`, `content`
- `ARTICLE_META[slug]`: optional `primitive`, `layer`, `topic` (topic cluster), `difficulty`, `related[]`
- `SECTION_BY_SLUG[slug]`: one of `featured`, `start-learning`, `core-protocol`, `implementation`, `cryptography`, `business`; use draft value `archive` when no pinned section is intended
- `BLOG_POST_CONCEPT_TAGS[slug]` and `BLOG_POST_STANDARDS_TAGS[slug]`: keep concept and standards tags as separate typed lists
- publication workflow `status`: `draft`, `review`, `ready`, `live`, `retired`

Process rules:

- keep slug-collision notes such as `provisional`, `rename candidate`, or `retire candidate` in planning docs rather than overloading publication status
- record `Topic cluster` in the draft metadata whenever `ARTICLE_META.topic` should be broader than the post-card `Topic`
- run `node scripts/convert-drafts.mjs --metadata-review` before merging regenerated prose so missing sidecar metadata is visible in one report

### Canonicalization blockers to resolve first

| Cluster | Surfaces in play | Provisional decision | Upstream files to touch first |
|---|---|---|---|
| Guide/blog slug collisions | 10 remaining shared guide/blog slugs | keep guides canonical for operational / deployment / implementation material; rename or retire blog duplicates unless they add a distinct bridge/overview job | `published-content-source-map.md`, `priority-draft-briefs.md`, `publication-post-packets.md` |
| Selective disclosure family | `selective-disclosure`, `selective-disclosure-explained`, `selective-disclosure-in-wallets`, `sd-jwt-selective-disclosure-deep-dive` | resolved upstream: keep `minimum-disclosure-is-a-policy-problem` as the policy-first privacy entry, keep `selective-disclosure` as the canonical mechanism explainer, treat `selective-disclosure-explained` as the merge / retire surface, and keep the wallet / SD-JWT follow-ons distinct | `published-content-source-map.md`, `priority-draft-briefs.md`, `publication-scene-cards.md`, `publication-post-packets.md`, `publication-backlog-table.md` |
| Trust profile pair | `trust-profiles-explained`, `trust-profile-evaluation-and-failure-handling` | keep `trust-profiles-explained` as the canonical concept entry and keep the second post only as a narrower runtime/evaluation/failure-handling follow-on | `published-content-source-map.md`, `priority-draft-briefs.md`, `publication-scene-cards.md`, `publication-post-packets.md` |
| Protocol-overview cluster | `why-identity-needs-a-protocol`, `why-the-marty-protocol-exists`, `introducing-mip`, `the-marty-identity-model` | keep the current role split; reserve the featured/front-door surface for `why-identity-needs-a-protocol`, `five-primitives-in-one-picture`, and `introducing-mip`, while `why-the-marty-protocol-exists` remains the optional bridge before synthesis | `published-content-source-map.md`, `priority-draft-briefs.md`, `release-path-01-opening-to-evaluation.md` |

> Resolved audit sections are retained below as historical record. The scene-card checklists later in this file are reusable process templates for future net-new posts, not a count of current incomplete backlog items.

### Upstream source-of-truth files that should be updated first

When content is structurally wrong, duplicated, missing, or poorly staged, start here before touching live post data:

- `guides/05-drafting/published-content-source-map.md` — decide which sources are canonical and which are redundant
- `guides/05-drafting/priority-draft-briefs.md` — define what each missing or overlapping article is actually supposed to do
- `guides/06-revision/publication-scene-cards.md` — fix the scene-level narrative contract that drafts are supposed to follow
- `guides/06-revision/publication-post-packets.md` — define required sources, diagrams, proof, and CTA before drafting
- `guides/06-revision/publication-evidence-packets.md` — refresh facts, standards timing, implementation claims, and examples
- `guides/05-drafting/post-drafts/batch-*/**/*.md` — revise or create the actual source drafts that will be converted
- `guides/05-drafting/post-drafts/release-path-01-opening-to-evaluation.md` — keep the release sequence aligned with what is actually strong enough to publish

### Strategy for creating new scene cards for new blog posts

This should be the default process for any **net-new** blog post idea, not just for repairing the current backlog.

#### 1. Decide whether the post should exist at all

Before writing a new scene card, run the topic through the existing planning surfaces:

- `guides/00-start-here/course-brief.md`
- `guides/04-plot-and-structure/module-map.md`
- `guides/04-plot-and-structure/post-sequence.md`
- `guides/05-drafting/published-content-source-map.md`

- [ ] Confirm the new post answers a real reader question.
- [ ] Confirm it clarifies a primitive, supporting abstraction, standards tension, deployment pressure, or evaluation question.
- [ ] Confirm it does **not** simply duplicate an existing post that should instead be expanded, merged, or renamed.
- [ ] If it duplicates an existing topic, update the existing brief/scene card instead of creating a new one.

#### 2. Create or update the upstream source material first

If a writer cannot point to source material, the topic is not ready for a scene card yet.

- [ ] If the topic is missing proof or examples, add them to `guides/06-revision/publication-evidence-packets.md` first.
- [ ] If the topic needs fresh framing, add or update a brief in `guides/05-drafting/priority-draft-briefs.md` first.
- [ ] If the topic depends on a new standards or deployment context, add the context to `guides/03-world-building/` or related reference docs first.
- [ ] If the topic changes the release sequence, update `guides/05-drafting/post-drafts/release-path-01-opening-to-evaluation.md` after the scene card is stabilized.

#### 3. Create the post card before the scene cards

Do not start with Scene 1 text. Start with the post-level contract.

Each new post should first define:

- slug
- gravity well
- primary reader
- lead persona
- navigation role
- post-level reader shift
- dominant tensions
- proof surfaces
- default handoff

- [ ] Add this post-level information to `guides/06-revision/publication-scene-cards.md` as a new post card.
- [ ] Mirror the drafting requirements in `guides/06-revision/publication-post-packets.md`.

#### 4. Choose the smallest scene shape that can do the job

Use the established scene patterns from `guides/04-plot-and-structure/series-arc.md`:

- **3-scene explainer** — best for conceptual clarification and category/mechanism/implication arcs
- **4-scene bridge / evaluation post** — best for credibility, proof, and handoff into implementation/evaluation
- **1-scene proof note** — best for sharply bounded supporting examples

- [ ] Default to 3 scenes unless the post truly needs a proof/evaluation handoff structure.
- [ ] Use 1 scene only when one concrete example can carry the whole article.
- [ ] Create a new scene shape only if all existing patterns fail; if that happens, document the new pattern in `series-arc.md` so it becomes reusable instead of ad hoc.

#### 5. Write scene cards as planning objects, not proto-prose

Each scene card should include the full field set already used in `publication-scene-cards.md`:

- CAP role
- event type
- reader-state contribution
- focal entities
- setting
- stakes
- active primitives / abstractions
- proof surfaces
- handoff

- [ ] Every scene must do one distinct job; if two scenes have the same job, merge them.
- [ ] Every scene must name at least one proof surface.
- [ ] Every scene must hand off either to the next scene or to the next post.
- [ ] Every scene must reconnect the local topic back to Marty’s model, not just the topical surface.

#### 6. Use this practical drafting formula when inventing scenes

For most new posts, the easiest reliable pattern is:

- **Scene 1:** name the pressure, misconception, or decision problem
- **Scene 2:** reveal the Marty distinction, object, or mechanism that changes the answer
- **Scene 3:** land the operational, commercial, standards, or architectural implication
- **Scene 4 (optional):** prove seriousness and hand the reader into the next implementation/evaluation asset

That formula keeps the post from drifting into generic commentary.

#### 7. Add a readiness gate before drafting prose

Do not move from scene cards into markdown drafts until the following are true:

- [ ] the reader question is sharp
- [ ] the persona assignment is credible
- [ ] the proof surfaces are concrete
- [ ] the handoff is known
- [ ] the adjacent links are known
- [ ] the post packet and evidence packet exist or have been updated

If any of those are missing, the topic is still planning material, not a draft.

#### 8. Anti-patterns to avoid when creating new scene cards

- [ ] Do not create a new scene card just because a new keyword or standards acronym appeared.
- [ ] Do not split one strong post into two weak posts unless the reader question genuinely forks.
- [ ] Do not leave proof surfaces as vague placeholders like “spec docs” or “privacy materials” when a concrete artifact can be named.
- [ ] Do not create a new post card if the work is really a guide update, glossary entry, or metadata cleanup.
- [ ] Do not write scene summaries so abstractly that a future writer still has to rediscover the actual point.

#### 9. Definition of done for a new scene-carded blog idea

A new blog idea is ready for drafting only when all of the following exist together:

- [ ] source-map placement
- [ ] draft brief
- [ ] post card
- [ ] scene cards
- [ ] post packet
- [ ] evidence packet
- [ ] planned release-path placement (if relevant)

Only then should the article move into `guides/05-drafting/post-drafts/` for prose generation and later regeneration into `src/data/blogPosts.js`.

#### 10. Reusable copy/paste templates for new post cards and scene cards

Use these directly in `guides/06-revision/publication-scene-cards.md` when creating net-new blog ideas.

##### New post card template

```md
### Post Card — [Working Title]

- **Slug:** `[kebab-case-slug]`
- **CAP unit alignment:** `[category_reframe | model_reveal | constraint_layer | operational_proof | artifact_adoption_proof | other]`
- **Gravity well:** `[Category Reframe | Model Reveal | Constraint Layer | Operational Proof | Artifact and Adoption Proof]`
- **Primary reader:** `[sponsor | architect | implementer | operator | buyer | privacy/compliance lead | standards lead]`
- **Lead narrator:** `[Daniel | Aiko | Marcus | Nora | Sofia | Elena | Victor]`
- **Navigation role:** `[entry point | hub | bridge | supporting note | proof note | evaluation handoff]`
- **Post-level reader shift:** `[for example: confused -> oriented]`
- **Dominant tensions:** `[list the 2–4 tensions this post resolves]`
- **Proof surfaces:** `[guide articles, flagship posts, spec docs, schemas, pricing docs, deployment docs]`
- **Default handoff:** `[next post / guide / implementation asset]`
```

##### New scene card template

```md
#### Scene Card [N] — [Short scene name]

- **CAP role:** `[setup | trigger | complication | crisis | resolution]`
- **Event type:** `[diagnosis | comparison | reframe | deep_dive | standards_mapping | deployment_pattern | implementation_walkthrough | synthesis]`
- **Reader-state contribution:** `[what changes for the reader in this scene]`
- **Focal entities:** `[protagonist_reader, skeptic, ally_tooling, five_mip_primitives, etc.]`
- **Setting:** `[public_social_market | threshold_decision_point | workbench_design_review | field_operation_runtime | institutional_environment | other]`
- **Stakes:** `[economic | operational | privacy | regulatory | security | interoperability]`
- **Active primitives / abstractions:** `[Trust Profile / Credential Template / Presentation Policy / Deployment Profile / Flow / Compliance Profile / trust registry / Cedar / etc.]`
- **Scene summary:** `[one clear sentence describing what this scene must accomplish]`
- **Proof surfaces:** `[specific source artifacts this scene should rely on]`
- **Handoff:** `[where this scene sends the reader next]`
```

##### Scene stack planner template

Use this before drafting scenes so the stack stays coherent.

```md
### Scene Stack Plan — [Post Slug or Working Title]

- **Chosen shape:** `[3-scene explainer | 4-scene bridge / evaluation post | 1-scene proof note]`
- **Why this shape fits:** `[one or two sentences]`
- **Scene 1 job:** `[pressure / misconception / question / trigger]`
- **Scene 2 job:** `[Marty distinction / mechanism / object reveal]`
- **Scene 3 job:** `[implication / proof / deployment consequence]`
- **Scene 4 job (optional):** `[evaluation or implementation handoff]`
- **What this post must NOT drift into:** `[duplicate topic / standards rabbit hole / generic IAM commentary / hype]`
```

##### Quick scene-card quality check

Before accepting a new scene card set, confirm:

- [ ] the post card names one real reader question
- [ ] each scene has a distinct job
- [ ] each scene names at least one concrete proof surface
- [ ] the active primitive or tension is visible by Scene 2 at the latest
- [ ] the last scene hands the reader somewhere useful
- [ ] the stack does not duplicate an existing post that should instead be revised

##### Filled example — Wave 1 recovery post: `what-is-digital-identity`

Use this as a model for how a real starter post should look in the planning layer.

```md
### Post Card — What Is Digital Identity?

- **Slug:** `what-is-digital-identity`
- **CAP unit alignment:** `category_reframe`
- **Gravity well:** `Category Reframe`
- **Primary reader:** `sponsor, architect, implementer`
- **Lead narrator:** `Daniel`
- **Navigation role:** `start-here entry point`
- **Post-level reader shift:** `confused -> oriented`
- **Dominant tensions:** `identity as account lookup vs identity as reusable claims`; `phone-home verification vs local verification`; `physical documents vs machine-readable trust artifacts`
- **Proof surfaces:** `foundations-identity`, `centralized-vs-verifiable`, `why-identity-needs-a-protocol`
- **Default handoff:** `verifiable-credentials-explained`

### Scene Stack Plan — `what-is-digital-identity`

- **Chosen shape:** `3-scene explainer`
- **Why this shape fits:** `The reader needs a basic conceptual reframe, a simple trust model, and one clear implication before moving deeper into credentials or protocol structure.`
- **Scene 1 job:** `replace the fuzzy “identity account” mental model with the idea of machine-readable claims about an entity`
- **Scene 2 job:** `explain how issuer, holder, and verifier make digital identity portable and verifiable`
- **Scene 3 job:** `show why local verification changes privacy, latency, and lock-in—and hand the reader into verifiable credentials`
- **What this post must NOT drift into:** `generic IAM history`; `wallet futurism`; `deep standards taxonomy before the basics are clear`

#### Scene Card 1 — Identity is more than an account record

- **CAP role:** `setup`
- **Event type:** `diagnosis`
- **Reader-state contribution:** `moves the reader from vague familiarity toward a sharper problem definition`
- **Focal entities:** `protagonist_reader`, `antagonist_system`
- **Setting:** `public_social_market`
- **Stakes:** `operational`, `interoperability`
- **Active primitives / abstractions:** `digital identity as claims`; `credential as reusable evidence (held in reserve)`
- **Scene summary:** `Define digital identity as machine-readable claims about a person, organization, or device rather than as a single account inside one platform.`
- **Proof surfaces:** `foundations-identity`; contrast language from `why-identity-needs-a-protocol`
- **Handoff:** `move from definition into the parties that make those claims usable`

#### Scene Card 2 — The trust triangle makes identity usable

- **CAP role:** `trigger`
- **Event type:** `reframe`
- **Reader-state contribution:** `gives the reader a stable mental model: issuer, holder, verifier`
- **Focal entities:** `protagonist_reader`, `issuer`, `holder`, `verifier`
- **Setting:** `workbench_design_review`
- **Stakes:** `security`, `interoperability`
- **Active primitives / abstractions:** `issuer/holder/verifier model`; `cryptographic proof`; `trusted issuer key material`
- **Scene summary:** `Explain that identity becomes portable when an issuer signs a claim, a holder carries it, and a verifier can check it independently.`
- **Proof surfaces:** `foundations-identity`; related support from `verifiable-credentials-explained`
- **Handoff:** `move from the participant model into what “verifiable” changes in practice`

#### Scene Card 3 — Verification without calling home changes the category

- **CAP role:** `resolution`
- **Event type:** `comparison`
- **Reader-state contribution:** `completes confused -> oriented by showing why this model is architecturally different from centralized IDV`
- **Focal entities:** `protagonist_reader`, `skeptic`, `ally_tooling`
- **Setting:** `threshold_decision_point`
- **Stakes:** `privacy`, `operational`, `economic`
- **Active primitives / abstractions:** `local verification`; `trust anchor`; `verifiable credential as reusable proof`
- **Scene summary:** `Contrast phone-home verification with local cryptographic verification, showing why the verifiable model reduces privacy leakage, latency dependence, and repeated verification cost.`
- **Proof surfaces:** `centralized-vs-verifiable`; `why-identity-needs-a-protocol`; `foundations-identity`
- **Handoff:** `direct to verifiable-credentials-explained, then issuers-holders-verifiers-explained`
```

### Regeneration workflow for fixed posts

After the upstream materials are corrected:

1. revise or create the markdown draft
2. ensure the draft metadata block is complete
3. run `node scripts/convert-drafts.mjs > /tmp/converted-posts.js`
4. review the generated objects before merging
5. replace the corresponding objects in `src/data/blogPosts.js`
6. update `src/data/articleMeta.js`, `src/data/blogSeries.js`, `src/data/blogRoadmap.js`, `src/data/guideContent.js`, and any section/start-here mappings that changed
7. build the package and rerun a content-audit pass

### Converter and regeneration safeguards

`scripts/convert-drafts.mjs` is no longer the blocker it was at the start of the recovery effort. The remaining job is to preserve the current hardened behavior and prevent future regeneration waves from reintroducing defaults or metadata drift.

- [x] Parse explicit draft metadata for `date`, `updatedDate`, `category`, `topic`, `primitive`, `Topic cluster`, `section`, `layer`, `difficulty`, `related`, `Concept tags`, `Standards tags`, and `Status` instead of relying on broad defaults.
- [x] Stop relying on manual `BATCH_DIRS`; batch folders are auto-discovered from `guides/05-drafting/post-drafts/`.
- [x] Emit a sidecar review ledger via `node scripts/convert-drafts.mjs --metadata-review` so `ARTICLE_META`, `SECTION_BY_SLUG`, and the tag maps can be reviewed in the same pass.
- [x] Support `code` blocks in converter output so code-heavy drafts are not blocked on a separate rendering migration.
- [x] Normal converter output now emits only drafts whose publication `Status` is `live`, so retired duplicate surfaces do not regenerate back into `src/data/blogPosts.js`.
- [ ] If future scheduled content returns, add a clearly distinct scheduled-status workflow so future-dated drafts are not mistaken for live posts.
- [ ] Keep `node scripts/convert-drafts.mjs --metadata-review` at zero review flags before any broad regeneration or merge wave.

### Temporary live mitigations while upstream regeneration is underway

Do these immediately in the live package if upstream regeneration will take more than one editing pass:

- [x] Remove stub posts from `START_HERE_SLUGS` until their real drafts are regenerated.
- [x] Remove or de-emphasize stub posts from `BLOG_SERIES` where they create dead-end reading sequences.
- [ ] Keep future-dated roadmap items visible on roadmap/planning surfaces, but do not present them as fully published handbook content.
- [x] Patch urgent factual issues directly in `src/data/` first, then flow the corrections back into `guides/` so regeneration does not reintroduce them.

### Suggested recovery waves

- [x] **Wave 1 — Front door recovery:** `what-is-digital-identity`, `verifiable-credentials-explained`, `issuers-holders-verifiers-explained`, `credential-lifecycle`, `the-marty-identity-model`
- [x] **Wave 2 — PKI and wallet recovery:** the PKI series stubs plus the wallet series stubs
- [x] **Wave 3 — Taxonomy and metadata recovery:** ARTICLE_META, sections, tags, related links, dates, naming, category cleanup — factual accuracy hotfixes and future date normalization completed April 9, 2026
- [x] **Wave 4 — Long-tail stub cleanup:** governance, remaining advanced roadmap material, and the trust-infrastructure cluster — completed April 10, 2026; recovered the April 9 batch (`why-identity-depends-on-cryptography`, `what-icao-9303-specifies`, `why-identity-systems-must-protect-privacy`, `data-minimization-in-identity`, `privacy-vs-compliance`, `how-credential-issuance-works`, `presentation-protocols`, `interoperability-between-credential-formats`, `mobile-driving-licenses-iso-18013-5`, `how-governments-build-identity-pki`, `trust-profile-evaluation-and-failure-handling`, `credential-templates-explained-deep`, `presentation-policies-explained-deep`, `deployment-profiles-explained-deep`, `trust-registries-explained`, `federation-in-identity-systems`, `verifier-infrastructure`, `discovering-trusted-issuers`, `what-is-a-digital-identity-wallet`, `device-binding-and-credential-security`, `selective-disclosure-in-wallets`, `wallet-ux-design-for-identity`, `identity-governance-models`, `rbac-vs-abac`, `policy-engines-for-identity-systems`, `governing-credential-ecosystems`) plus the final gap-closure trio `selective-disclosure-explained`, `why-the-marty-protocol-exists`, and `how-everything-works-together`

---

## CRITICAL — Data Integrity Issues

### Resolved — Stub Articles in Learning Path

Wave 1 recovery repaired the primary onboarding funnel. All 7 `START_HERE_SLUGS` now point to real content.

- [x] `what-is-digital-identity` — recovered in Wave 1 (START_HERE #1)
- [x] `verifiable-credentials-explained` — recovered in Wave 1 (START_HERE #2)
- [x] `issuers-holders-verifiers-explained` — recovered in Wave 1 (START_HERE #3)
- [x] `credential-lifecycle` — recovered in Wave 1 (START_HERE #4)
- [x] `the-marty-identity-model` — recovered in Wave 1 (START_HERE #6)

#### How to address this

- [x] Create new draft briefs for these five missing START_HERE posts in `guides/05-drafting/priority-draft-briefs.md` so each article has a distinct job in the onboarding path.
- [x] Add matching scene cards and post packets in `guides/06-revision/publication-scene-cards.md` and `guides/06-revision/publication-post-packets.md`; none of these foundation topics currently have upstream scene coverage.
- [x] Add evidence packets for the facts/examples each article needs before drafting.
- [x] Draft the posts as markdown in `guides/05-drafting/post-drafts/` instead of writing them directly in `blogPosts.js`.
- [x] Regenerate those posts and publish them as **Wave 1** before restoring them to `START_HERE_SLUGS`.
- [x] No temporary START_HERE replacement is needed anymore; the learning path now points to real content throughout.

### Resolved — Stub Articles in Series

No stub posts are still referenced in `BLOG_SERIES`. Series navigation now lands on real content throughout the published series inventory:

- [x] `four-actors-of-identity-systems` — recovered in the Foundations series completion follow-up
- [x] `public-key-infrastructure-explained` — recovered in Wave 2 (PKI for Identity series)
- [x] `understanding-trust-anchors` — recovered in Wave 2 (PKI for Identity series)
- [x] `certificate-chains-and-validation` — recovered in Wave 2 (PKI for Identity series)
- [x] `how-passport-pki-works` — recovered in Wave 2 (PKI for Identity series)
- [x] `understanding-csca-certificates` — recovered in Wave 2 (PKI for Identity series)
- [x] `mobile-wallet-architectures` — recovered in Wave 2 (Wallets series)
- [x] `secure-enclave-credential-storage` — recovered in Wave 2 (Wallets series)
- [x] `credential-portability-across-wallets` — recovered in Wave 2 (Wallets series)
- [x] `eudi-wallet-model-explained` — recovered in Wave 2 (Wallets series)

#### How to address this

- [x] Treat series pages as promises: the Foundations, PKI, and Wallets series entries have now been recovered upstream instead of being left as live stubs.
- [x] Create a per-series completion plan in `guides/05-drafting/priority-draft-briefs.md` so each series has a minimum publishable spine before it is promoted on the site.
- [x] For the Foundations, PKI, and Wallets series, write scene cards and post packets for the missing posts before creating prose.
- [x] Finish the remaining Foundations stub so `SeriesNav` no longer routes into placeholders.

### Resolved — Total Stub Count

0 of 83 posts (0%) are still stubs with no real content. Wave 1 removed five stub posts from the public inventory, Wave 2 removed nine more, the Foundations series completion follow-up removed one more, Wave 4 recovered twenty-six more on April 9, 2026, and the final gap-closure batch removed the last three on April 10, 2026.

#### How to address this

- [x] Finish the final gap-closure batch so no live stub posts remain in `BLOG_POSTS`.
- [ ] If future roadmap ideas are promoted into publication planning, bucket them upstream as `front-door critical`, `series completion`, or `long-tail roadmap` before drafting.
- [ ] Do not create new backlog drafts blindly; collapse redundant topics at the brief/scene-card layer before they re-enter the live inventory.

---

## HIGH — Cross-Reference Gaps

### Resolved — Missing ARTICLE_META Entries

No posts in `BLOG_POSTS` are currently missing `ARTICLE_META`. Wave 3 backfilled all 31 previously uncovered slugs, so `ProtocolContextHeader` and `ContinueLearning` now render protocol context across the full live inventory.

#### How to address this

- [x] Add a required metadata checklist to the draft pipeline so every regenerated post ships with `layer`, `topic`, `difficulty`, and `related` decisions already made.
- [x] Backfill `ARTICLE_META` for currently live posts as a separate cleanup pass so `ProtocolContextHeader` and `ContinueLearning` stop failing silently.
- [x] Extend the converter or a companion script to output a metadata review block for each regenerated post.
- [ ] Make `ARTICLE_META` updates part of the definition of done for every future publication PR.

### Resolved — Posts Not in Any SECTION_BY_SLUG

No posts are currently missing `SECTION_BY_SLUG` ownership. Wave 3 assigned the remaining 38 slugs, including governance, standards, wallet, and primitive deep-dive posts, so structured page zones can render the full published inventory.

#### How to address this

- [ ] Define section ownership at the brief/packet stage, not after publication.
- [x] Add `section` as explicit draft metadata so `SECTION_BY_SLUG` can be updated systematically during regeneration.
- [x] Added `verifiable-credentials-explained` to `start-learning` and `the-marty-identity-model` to `core-protocol` during Wave 1 recovery.
- [x] Backfilled the remaining live section assignments during Wave 3 so every published post has a structured zone.
- [ ] Add a lightweight audit step to verify every featured or learning-path article also has a section assignment.

### Guide Content Slug Collisions with Blog Posts

10 guide article slugs still overlap a live or still-carried blog slug. Runtime routing is already guide-first for these collisions. Live mitigations shipped April 10, 2026: guide-first operational slugs are hidden from browse-visible blog surfaces, handbook entries badge them as guide articles, and blog search surfaces them as guide results. The remaining cleanup is long-term slug retirement / rename:

- `selective-disclosure`, `deployment-profiles-in-practice`, `offline-verification-guide`, `compliance-profiles-in-practice`, `deploy-airline-boarding`, `deploy-age-verification`, `deploy-enterprise-access`, `deploy-membership-credentials`, `impl-oid4vci`, `impl-oid4vp`

- [x] Retired the duplicate live blog `privacy-data-minimization` and kept `data-minimization-in-identity` as the canonical blog proof note while the guide-side surface remains on `privacy-data-minimization`.
- [x] Make the canonical ownership rule explicit for the remaining collisions. Current recommendation: guide-first ownership for implementation/deployment/how-to surfaces (`deployment-profiles-in-practice`, `offline-verification-guide`, `compliance-profiles-in-practice`, `deploy-*`, `impl-oid4vci`, `impl-oid4vp`), while concept-heavy pairs like `selective-disclosure` should either be narrowed to clearly different jobs or reduced to one canonical surface.

#### How to address this

- [x] Split the collisions into two buckets before making slug changes: `guide-first operational content` vs `conceptual duplicate topic`.
- [x] In the live package, hide guide-first operational collisions from browse-visible blog surfaces, badge them as guide entries in the handbook, and surface them as guide results in search until the slug inventory is cleaned up.
- [ ] For guide-first operational content, keep the guide as the canonical destination and rename the blog counterpart into a bridge/overview slug if the blog still adds value.
- [ ] For conceptual duplicate topics, choose one canonical owner and retire or rename the second piece rather than keeping two identical slugs with similar jobs.
- [x] Reflect that decision upstream in `published-content-source-map.md`, `priority-draft-briefs.md`, and `publication-post-packets.md` so future drafts do not recreate collisions.
- [ ] If both versions stay, adopt a deterministic naming rule (for example, guide-first canonical slugs plus distinct blog slugs) and add redirects/cross-links.
- [x] During regeneration, rename drafts before merging, not after publication.


---

## HIGH — Content Overlap & Confusion

### Selective Disclosure Article Proliferation

4 articles cover selective disclosure. The wallet-specific and SD-JWT-specific angles remain intentionally differentiated. The upstream planning layer now treats the remaining generic overlap as a legacy merge / retire problem rather than a four-way keep set:

| Slug | Title | Status |
|------|-------|--------|
| `selective-disclosure` | Selective Disclosure | Has content |
| `selective-disclosure-explained` | Selective Disclosure Explained | Has content |
| `selective-disclosure-in-wallets` | Selective Disclosure in Wallets | Has content |
| `sd-jwt-selective-disclosure-deep-dive` | SD-JWT Selective Disclosure: A Deep Dive | Has content |

- [x] Keep `minimum-disclosure-is-a-policy-problem` as the policy-first privacy entry, `selective-disclosure` as the canonical mechanism explainer, `selective-disclosure-in-wallets` as the holder/wallet disclosure UX follow-on, and `sd-jwt-selective-disclosure-deep-dive` as the standards-specific implementation follow-on; treat `selective-disclosure-explained` as a merge / retire surface instead of a second front-door explainer.

#### How to address this

- [x] Update `published-content-source-map.md` to identify one canonical “selective disclosure” explainer and mark the others as support notes or derivative angles.
- [x] Rewrite the relevant scene cards and packets so the surviving roles stay distinct: canonical mechanism explainer, holder-side wallet UX, and SD-JWT-specific deep dive.
- [x] Treat `selective-disclosure-explained` as the legacy merge / retire candidate now that the live article still overlaps too heavily with `selective-disclosure`; preserve only any uniquely stronger comparison detail before redirect / retire work.
- [x] Only regenerate or preserve the surfaces that survive this upstream canonicalization pass. `selective-disclosure-in-wallets` now carries the wallet-mediated holder UX angle, and `sd-jwt-selective-disclosure-deep-dive` remains the standards-specific deep dive.

### Trust Profile Duplication

Two trust profile articles with nearly identical slugs:

| Slug | Title | Status |
|------|-------|--------|
| `trust-profiles-explained` | Trust Profiles: The Foundation of Every Identity Decision | Has content |
| `trust-profile-evaluation-and-failure-handling` | Trust Profile Evaluation and Failure Handling | Has content |

- [x] Keep `trust-profiles-explained` as the canonical concept entry. The second article now survives only as `trust-profile-evaluation-and-failure-handling`, a narrower runtime/evaluation/operations deep dive.

#### How to address this

- [x] Rename the old trust-profile follow-on around a clearly narrower job. The surviving follow-on is now `trust-profile-evaluation-and-failure-handling`.
- [x] Update the brief, scene-card, and packet layers before drafting the replacement so the two posts do not converge again.
- [ ] If the second post is not materially distinct, retire it rather than regenerating duplicate inventory.

### Four Actors vs Three Roles Confusion

Resolved in the Foundations series completion follow-up. `four-actors-of-identity-systems` now defines the fourth actor as governance authority / trust infrastructure, while `issuers-holders-verifiers-explained` remains the operational three-role explainer.

- [x] Write the `four-actors` content and clarify who the 4th actor is. Ensure consistency with the `issuers-holders-verifiers` article.

#### How to address this

- [x] Resolve the model upstream in `course-brief.md`-aligned drafting materials before writing either article.
- [x] Decide whether the site teaches a 3-role trust triangle first and introduces a 4th governance actor later, or whether the whole model is four actors from the start.
- [x] Encode that decision in scene cards and draft prompts so regenerated posts do not drift back into contradiction.
- [x] Add a terminology/item check in `publication-checklist.md` review passes for participant-model consistency.

---

## HIGH — Factual Accuracy

### EUDI Wallet Deadline

The oversimplified "by 2026" claim has been corrected in both locations. Updated wording now references the phased rollout (implementing acts through 2025, member state availability from late 2026).

- [x] **Verify and update**: Corrected in `eudi-wallet-readiness` (blogPosts.js) and `deploy-future-identity` (guideContent.js) on April 9, 2026.

#### How to address this

- [x] Update `publication-evidence-packets.md` with dated, source-validated wording for EUDI timing and implementation status.
- [x] Flow that corrected wording into the relevant briefs/scene cards, then update both the blog post and guide article.
- [x] Add a review rule that regulatory deadline claims must include the specific obligation and timing nuance, not just a broad year.
- [x] Hotfix the live claim in `src/data/blogPosts.js` and `src/data/guideContent.js` immediately; do not wait for a full regeneration wave.

### MIP Version Claims

Verified against the actual `marty-protocol` repository on April 10, 2026. v0.1.0 is confirmed. Schema count corrected from 35 to 36. "Reference implementations" language corrected to "generated typed bindings" in Rust, Python, and TypeScript (they are code-generated from schemas, not hand-written implementations). Compliance-profile inventory now needs repo-verified wording: the current snapshot contains 11 JSON profile definitions across 7 families (10 ecosystem-specific profiles plus the generic OID4VC profile), so mutable inventory claims should prefer `currently includes` language over frozen counts unless a specific release artifact is being cited.

- [x] Verify these claims match the actual `marty-protocol` repository state. Corrected schema count, mutable inventory wording, and reference-implementation language in live content where needed.

#### How to address this

- [x] Add a source-of-truth check against `marty-protocol/README.md`, `SPECIFICATION.md`, schema counts, and conformance assets inside `publication-evidence-packets.md`.
- [x] Rewrite any “ships with” language in briefs and drafts to either “currently includes” or “planned to include,” depending on the repo state at publication time.
- [x] Add a final-release verification item that version numbers and artifact inventories must be checked against the actual repo before publishing.

### Post-Quantum Timeline

The speculative "will exist within the next decade" claim in the `deploy-future-identity` guide article has been replaced with hedged language about "harvest now, decrypt later" urgency without speculating on exact timelines. The blog post `post-quantum-readiness-in-identity` already used appropriate hedging ("If a cryptographically relevant quantum computer arrives within that window"). Also updated the algorithm name from SPHINCS+ to SLH-DSA to match the finalized NIST standard name.

- [x] Corrected in `deploy-future-identity` (guideContent.js) on April 9, 2026.

#### How to address this

- [x] Refresh the PQC evidence packet with current NIST status and more precise language about risk horizons.
- [x] Update both the guide/article source materials and any draft prompts that encourage strong future-timeline claims.
- [x] Prefer wording about preparedness and algorithm agility over exact speculative timelines unless a citation is attached.

---

## HIGH — Protocol Accuracy (April 10, 2026 Deep Audit)

Full cross-reference audit against the `marty-protocol` repository (v0.1.0, 2026-03-11). Findings are grouped by severity and include the exact location and correction needed.

Status update (April 10, 2026): the concrete live-content contradictions from this deep audit have now been corrected. Remaining follow-up is limited to `ARTICLE_META` layer terminology, roadmap/date handling, and any optional redirect-aware cleanup for legacy title identities.

### Stale Schema Count — "35 schemas"

Resolved on April 10, 2026. Historical record of the corrected occurrence:

| File | Line | Stale text | Correct text |
|------|------|-----------|--------------|
| `blogPosts.js` | ~630 | `launch materials describe 35 schemas and reference implementations generated around them` | `launch materials describe 36 schemas and generated typed bindings around them` |

- [x] Corrected the stale "35 schemas" reference in the `introducing-mip` evaluation artifact inventory table (blogPosts.js line ~630).

### "Reference Implementations" vs "Generated Typed Bindings"

Resolved on April 10, 2026. The six MIP-specific occurrences now use `generated typed bindings` / equivalent wording. Historical record of the corrected locations:

| File | Line | Context |
|------|------|---------|
| `blogPosts.js` | ~317 | `The reference implementations in Rust (serde), Python (Pydantic v2), and TypeScript (Zod) are all generated from the JSON Schemas.` |
| `blogPosts.js` | ~420 | `All three reference implementations (Rust, Python, TypeScript) pass the full suite.` |
| `blogPosts.js` | ~422 | `your implementation handles differently than the reference implementations` |
| `blogPosts.js` | ~630 | `35 schemas and reference implementations generated around them` |
| `blogPosts.js` | ~638 | `Reference implementations in Rust, Python, and TypeScript further strengthen the claim` |
| `blogPosts.js` | ~2605 | `The reference implementations in Rust, Python, and TypeScript make the model portable` |

Note: lines 3116 and 3132 also say "reference implementation" but those refer to the EUDI ARF reference implementation (external), which is correct usage.

- [x] Replaced "reference implementations" with `generated typed bindings` / equivalent wording in all six MIP-specific occurrences. EUDI ARF references remain unchanged.

### "Four Primitives" Miscategorization

Resolved on April 10, 2026. The affected guide and blog passages now describe Flows as the fifth co-equal MIP primitive that orchestrates the other four.

| File | Line | Stale text |
|------|------|-----------|
| `guideContent.js` | ~642 | `Flows are what users actually interact with; the four primitives are what Flows are built from.` |
| `blogPosts.js` | ~471 | `If the first four primitives tell you what exists, Flow tells you how the system breathes.` |
| `blogPosts.js` | ~222 | `The first four MIP primitives define trust, credentials, policies, and deployment.` |

The protocol defines exactly **five** core primitives: Trust Profiles, Credential Templates, Presentation Policies, Deployment Profiles, and Flows. The blog's rhetorical framing of "four + Flows" is understandable as narrative sequencing but factually misleading — it implies Flows are a different kind of object. The specification treats all five as co-equal primitives.

- [x] Rewrote the guide passage so Flows are named as the fifth MIP primitive that orchestrates the other four.
- [x] Reworked the two blog passages so the rhetorical structure no longer implies Flows sit outside the five core primitives.

### "Three Major Formats" vs Four Credential Formats

Resolved on April 10, 2026. The guide now uses four-format wording and distinguishes VC-JWT, JSON-LD, SD-JWT, and mDoc in MIP terms.

| File | Line | Stale text |
|------|------|-----------|
| `guideContent.js` | ~92 | `{ type: 'heading', text: 'Three Major Formats' }` |

- [x] Renamed the guide section to four-format wording and added JSON-LD as a distinct format alongside VC-JWT, SD-JWT, and mDoc.

### Revocation Strategies: "Four" vs Five Methods

Resolved on April 10, 2026. Live blog and guide content now enumerate the five standardized methods: `OCSP`, `CRL`, `STATUS_LIST_2021`, `BITSTRING_STATUS_LIST`, and `TOKEN_STATUS_LIST`.

| File | Line | Issue |
|------|------|-------|
| `guideContent.js` | ~738 | `MIP supports four revocation strategies` |
| `guideContent.js` | ~746 | `{ type: 'heading', text: 'The Four Strategies' }` |
| `guideContent.js` | ~749 | Lists CRL, OCSP, StatusList2021, cryptographic accumulators |
| `blogPosts.js` | ~427 | Title: `Revocation Strategies Compared: CRL, OCSP, StatusList, and Accumulator` |
| `blogPosts.js` | ~428 | Summary: `MIP's revocation model supports four strategies` |
| `blogPosts.js` | ~437 | Lists CRL, OCSP, StatusList2021, cryptographic accumulators |

- [x] Updated revocation content to match the five methods in the spec and removed the misleading accumulator framing from the live MIP-specific explainers.

### Missing HYBRID Network Mode in Guide Content

Resolved on April 10, 2026. Guide content now explicitly names online, offline, and hybrid deployment modes.

| File | Line | Issue |
|------|------|-------|
| `guideContent.js` | ~373 | `online or offline` |
| `guideContent.js` | ~379 | `online or offline mode` |
| `guideContent.js` | ~384 | Describes only online and offline deployments |
| `guideContent.js` | ~816 | `online or offline mode` |
| `guideContent.js` | ~918 | `offline mode` (example-level, acceptable) |

- [x] Added HYBRID as an explicit third network mode in the guide content where online and offline deployments are listed.

### Supporting Abstractions List Incomplete

Resolved on April 10, 2026. The previously incomplete supporting-abstractions lists now include `Application Templates`.

| File | Line | Missing |
|------|------|---------|
| `blogPosts.js` | ~628 | Lists Compliance Profiles, Revocation Profiles, Wallet Profiles, Device Registration, Notification Targets, Policy Sets — **omits Application Template** |
| `blogPosts.js` | ~2592 | Same list — **omits Application Template** |
| `blogPosts.js` | ~2657 | Correctly includes Application Templates |

- [x] Added `Application Templates` to the incomplete supporting-abstractions lists so they match the protocol spec.

### "Marty Protocol" Naming in Live Data

Mostly resolved on April 10, 2026. In-body references, series copy, and roadmap phase naming now use `MIP` / `Marty Identity Protocol`; the established `why-the-marty-protocol-exists` slug and title remain intentionally unchanged to avoid redirect churn. Historical record of the affected surfaces:

| File | Line | Context |
|------|------|---------|
| `blogPosts.js` | ~809 | `inspect the Marty protocol README` |
| `blogPosts.js` | ~1454 | `The Marty protocol materials make this concrete` |
| `blogPosts.js` | ~1496 | `the Marty protocol specification captures` |
| `blogPosts.js` | ~2549 | Phase comment: `Roadmap Phase 8: Marty Protocol` |
| `blogPosts.js` | ~2552 | Title: `Why the Marty Protocol Exists` |
| `blogPosts.js` | ~2618 | `why the Marty Protocol exists` |
| `blogPosts.js` | ~3183 | Comment: `the Marty protocol ecosystem` |
| `blogRoadmap.js` | ~92 | Phase title: `Marty Protocol` |
| `blogRoadmap.js` | ~95 | Post title: `Why the Marty Protocol Exists` |
| `blogSeries.js` | ~23 | `The core objects that make the Marty Protocol work.` |

Note: The `why-the-marty-protocol-exists` slug and its title are established content identities — renaming the slug would require redirect handling. The in-body references (lines ~809, ~1454, ~1496) and series/roadmap descriptions should be updated to use "Marty Identity Protocol" or "MIP".

- [x] Updated in-body `Marty protocol` references to `MIP` / `Marty Identity Protocol` where context allowed. Left the established slug and article title as-is to avoid redirect churn, while updating the series description and roadmap phase title.

### ARTICLE_META Layer Abbreviations

The protocol lifecycle layers are: Foundations, Trust Layer, Issuance, Presentation, Deployment, Execution, Governance. `articleMeta.js` uses abbreviated forms: `Issue`, `Present`, `Deploy`, `Govern` (plus `Foundations`, `Trust`, `Execute` which are close enough).

- [ ] Decide whether to use full layer names (`Issuance`, `Presentation`, `Deployment`, `Governance`) or keep the short forms. If keeping abbreviations, document the mapping explicitly in a code comment. The abbreviations are functional but inconsistent with the spec's terminology.

### Participant Model Gaps

Resolved on April 10, 2026. `four-actors-of-identity-systems` now acknowledges **Applicant** and **Relying Party** as additional formal protocol roles while preserving the pedagogical four-actor framing.

- "Relying Party" is mentioned incidentally in blog prose (e.g., `blogPosts.js` lines ~798, ~907, ~1322, ~2320) but never formally introduced as a distinct protocol role
- "Applicant" appears in blog flow discussions but is not positioned as a core participant
- "Governance Authority" in the blog is an umbrella that covers what the spec splits into organization governance roles

This is not strictly wrong — the blog deliberately teaches a simpler model first. But the gap should be acknowledged.

- [x] Added a note in `four-actors-of-identity-systems` acknowledging Relying Party and Applicant as additional formal protocol roles while keeping the four-actor teaching frame.

### Roadmap Phase Dates Now Historical

`blogRoadmap.js` phase descriptions reference dates that are now in the past (Phase 1: "Sep–Nov 2025", Phase 2: "Dec 2025–Jan 2026", etc.) but are formatted as if they are future planning. Since the current date is April 2026 and all phases have been recovered, these are historical artifacts.

- [ ] Either remove phase date ranges from `blogRoadmap.js` or redesignate all phases as "Published" / archival. The phase structure is useful for editorial history but misleading as a forward roadmap.

---

## MEDIUM — Date & Timeline Issues

### Future updatedDate Values

No exported `BLOG_POSTS` entries now surface a future `updatedDate`. Wave 3 added a normalization layer in `src/data/blogPosts.js` that strips future placeholder update timestamps from the live package while preserving real past updates.

- [x] Replace future `updatedDate` values with actual last-edit dates, or remove `updatedDate` from posts that haven't been revised.

#### How to address this

- [ ] Treat `updatedDate` as editorial provenance, not roadmap planning.
- [x] Remove future `updatedDate` values from the live data now.
- [ ] Add explicit draft metadata for `publishedDate` and `updatedDate` so regeneration preserves real timestamps.
- [ ] Keep planned scheduling in `blogRoadmap.js`, not in the published post object.

### Future Publication Dates

All 4 future-dated posts were backdated to 2026-04-09 since they had real content after Wave 2 recovery.

- [x] `mobile-wallet-architectures` — backdated from 2026-05-15 to 2026-04-09
- [x] `secure-enclave-credential-storage` — backdated from 2026-05-22 to 2026-04-09
- [x] `credential-portability-across-wallets` — backdated from 2026-06-01 to 2026-04-09
- [x] `eudi-wallet-model-explained` — backdated from 2026-06-10 to 2026-04-09

#### How to address this

- [x] Backdated all 4 posts to publication date since content was complete.
- [ ] If future publication dates are retained for future posts, add a `status: scheduled` concept to the draft and publication pipeline so the UI can treat them differently from published posts.
- [ ] Do not regenerate future-dated posts into the live package until the real drafts are complete.

### Phase Label vs Actual Date Mismatch

Blog post comments reference "Phase 1: Foundations (Sep–Nov 2025)" but Phase 1 post dates start at 2025-01-06. Similarly for other phases.

- [ ] Update phase comments to match actual date ranges, or adjust dates to match the planned schedule.

#### How to address this

- [ ] Decide whether phase labels are editorial-history markers or forward-looking release buckets.
- [ ] If they are historical, derive the label from actual publish dates.
- [ ] If they are planning buckets, keep them only in `blogRoadmap.js` / guides and remove misleading phase comments from live published data.

---

## MEDIUM — Category & Tag Issues

### Missing Tags Field

All 83 posts still lack an inline `tags` field, but Wave 3 backfilled the current tag sidecars significantly: `BLOG_POST_CONCEPT_TAGS` now covers 83/83 posts and `BLOG_POST_STANDARDS_TAGS` covers 66/83 posts. The remaining gaps are mostly conceptual essays without a strong standards-specific tag.

- [ ] Add `tags` arrays to BLOG_POSTS entries, or extend `BLOG_POST_CONCEPT_TAGS` and `BLOG_POST_STANDARDS_TAGS` to cover all posts.

#### How to address this

- [x] Add tags to the draft metadata model and have the converter emit them or a sidecar mapping.
- [ ] Use `published-content-source-map.md` and the packet layer to normalize which primitive, standard, and topic tags belong to each post.
- [x] Backfill missing tags for existing live posts as a metadata-only pass.

### Category Values Don't Match CATEGORY_COLORS

Posts use categories: `Business`, `Technical`, `Cryptography`, `Announcement`. But the `knownCategories` from the protocol layer model are: `Foundations`, `Trust Layer`, `Issuance`, `Presentation`, `Deployment`, `Execution`, `Governance`.

- [ ] Decide on canonical category taxonomy. The current 4 categories are readable but don't align with the 7-layer protocol model used everywhere else.

#### How to address this

- [ ] Decide whether categories are reader-facing editorial buckets and layers are protocol-facing technical metadata; if so, keep both and document the distinction.
- [ ] Otherwise, collapse to one taxonomy and update the checklist, prompts, converter, and UI category constants together.
- [ ] Do not regenerate more posts until that taxonomy decision is made, or category drift will keep multiplying.

---

## MEDIUM — Author Persona Issues

### Unbalanced Author Distribution

| Author | Posts |
|--------|-------|
| daniel-ortega | 32 (39%) |
| aiko-tanaka | 11 (13%) |
| sofia-rahman | 10 (12%) |
| nora-patel | 9 (11%) |
| marcus-vale | 8 (10%) |
| elena-kovacs | 7 (8%) |
| victor-leclerc | 6 (7%) |

- [ ] Daniel Ortega is overrepresented at 39%. Consider redistributing some Phase 5–8 stub articles to other personas whose expertise aligns (e.g., wallet stubs to Sofia Rahman, governance stubs to Elena Kovacs).

#### How to address this

- [ ] Rebalance ownership upstream in `blogRoadmap.js`, `priority-draft-briefs.md`, and `publication-post-packets.md` before regenerating new posts.
- [ ] Add a persona-fit check to drafting/review so new drafts cannot default to Daniel unless the topic genuinely needs him.
- [ ] Use the existing character profiles as constraints when creating scene cards for new posts.

---

## MEDIUM — Read Time Accuracy

12 articles with real content have claimed read times significantly higher than estimated:

| Slug | Claimed | Estimated |
|------|---------|-----------|
| trust-profiles-explained | 7 min | ~1 min |
| cryptographic-trust-anchors-primer | 9 min | ~2 min |
| credential-templates-designing-what-gets-issued | 8 min | ~2 min |
| zero-knowledge-predicates-identity | 10 min | ~2 min |
| flows-orchestrating-identity-lifecycle | 8 min | ~2 min |
| sd-jwt-selective-disclosure-deep-dive | 9 min | ~2 min |
| cedar-policies-for-identity-governance | 10 min | ~2 min |
| mip-json-schemas-walkthrough | 8 min | ~2 min |
| post-quantum-readiness-in-identity | 8 min | ~2 min |
| offline-verification-design-patterns | 8 min | ~2 min |
| holder-binding-beyond-biometrics | 7 min | ~1 min |
| revocation-strategies-compared | 9 min | ~2 min |

- [ ] Either the content needs expanding to match the claimed read time, or the read times need to be recalculated. Note: code blocks inflate the estimate. A separate issue is that many of these articles use structured content arrays (paragraph/code/heading) rather than plain markdown, so actual rendered word count may differ from the raw text estimate.

#### How to address this

- [ ] Allow read time to be either explicitly set in draft metadata or calculated from rendered block text during conversion/build.
- [ ] Recalculate read time for regenerated posts rather than carrying forward the current placeholders.
- [ ] If a flagship article is intentionally short, keep the shorter read time and strengthen the next-step links rather than inflating the estimate.

---

## MEDIUM — Protocol Naming Consistency

Most concrete live-data naming drift has now been corrected, but upstream drafts and a few intentional legacy title identities still mix `MIP`, `Marty Identity Protocol`, and occasional `Marty Protocol` wording.

- [ ] Establish a naming convention: "Marty Identity Protocol (MIP)" on first reference per article, "MIP" thereafter. Keep legacy title/slug identities only where redirects or historical continuity make that the lower-churn choice, and audit the remaining upstream/live surfaces to match.

#### How to address this

- [ ] Propagate the naming rule now recorded in `guides/07-polish-and-publish/publication-checklist.md` into `guides/00-start-here/course-brief.md`; drafting prompts were updated on April 10, 2026 so AI-assisted sessions now start with the canonical `Marty Identity Protocol (MIP)` wording.
- [ ] Update existing drafts first, then regenerate, then patch the remaining live JS content that was authored outside the markdown pipeline.
- [ ] Include a quick terminology grep in the verification pass for every regeneration wave.

---

## LOW — Content Quality Improvements

### How to address the remaining lower-priority issues

These should be handled as a continuing upstream editorial program rather than one-off live-file edits.

- [ ] Add missing diagrams and proof assets to `publication-evidence-packets.md` before assigning the corresponding drafts.
- [ ] Add missing product-bridge paragraphs and CTA guidance at the post-packet level so writers know the intended handoff before drafting.
- [ ] Use `release-path-01-opening-to-evaluation.md` to decide which recovered posts belong in the next publish wave and which should wait.
- [ ] As each recovery wave lands, immediately update metadata (`ARTICLE_META`, tags, sections, related links) so content quality fixes and discoverability fixes ship together.
- [ ] Preserve a strong rule: no new post goes live unless its guide brief, scene card, packet, evidence, draft, metadata, and verification checklist all agree. No more vibe-publishing; the blog has had enough improv theater for one season.

### Flagship Content

- [ ] **Pin flagship articles in the Featured section.** Current pins: `why-identity-needs-a-protocol`, `five-primitives-in-one-picture`, `introducing-mip`. Verify these are still the best entry points.
- [x] **Protocol-overview split review completed.** `why-identity-needs-a-protocol` = category/business case, `why-the-marty-protocol-exists` = minimum shared model motivation, `introducing-mip` = launch/artifact announcement, `the-marty-identity-model` = stable grammar and synthesis. Keep `why-the-marty-protocol-exists` off the featured/front-door surface so it remains an optional bridge rather than a default entry point.

### Product Bridge Paragraphs

- [ ] **Add "Try it in Marty" sections to key articles.** End of conceptual articles should map concepts to Marty product features.
- [ ] **Link implementation articles to API docs.** OID4VCI, OID4VP articles should include working code snippets with actual API endpoints.
- [ ] **Add pricing/packaging context where relevant.** Business articles should mention ElevenID market positioning.

### Diagrams & Visual Content

- [ ] **No images referenced in any blog post.** Zero `image` fields across all 83 posts. Add architecture diagrams, flow diagrams, and trust chain visualizations.
- [ ] **Add sequence diagrams to OID4VCI and OID4VP articles.**
- [ ] **Add trust chain diagrams to PKI articles.**
- [ ] **Create a "Five Primitives" relationship diagram.**

### Developer Tutorials

- [ ] **Write a "Hello World" credential issuance tutorial.**
- [ ] **Write an offline verification quickstart.**
- [ ] **Write a "Build a Trust Registry" tutorial.**
- [ ] **Add runnable code samples** (`curl` commands or SDK snippets).

### SEO & Discoverability

- [ ] **Improve article summaries for SEO.** Target 140–160 characters with primary keyword.
- [ ] **Add FAQ sections** with FAQ schema for rich snippets.
- [ ] **Add `og:image` per article** instead of generic logo512.png.

### Trust Signals & Credibility

- [ ] **Reference external standards with links.** Cite W3C VC Data Model, IETF SD-JWT, ISO 18013-5, and ICAO 9303.
- [ ] **Add "Reviewed by" attribution** for domain-expert reviewed articles.
- [ ] **Add changelog entries for major revisions.**

### Content Organization

- [ ] **Create a glossary page** from `PROTOCOL_TERMS` in ArticleContent.jsx.
- [ ] **Write series introductions** for each of the 8 series.
- [ ] **Add "Prerequisites" to intermediate/advanced articles.**
- [ ] **Create a "What's New" changelog page.**

---

## Appendix — Full Stub Article List (0 posts)

```
(none)
```

---

*This document is maintained alongside the marty-blog codebase. Check items off as they are completed. Last updated: April 10, 2026 (the April 10 deep cross-reference audit against `marty-protocol` v0.1.0 has now been partially closed in live content: schema count, generated-typed-bindings wording, five-primitive framing, credential format count, revocation method inventory, HYBRID network mode, supporting-abstractions gaps, body-copy naming drift, and participant-role acknowledgment are fixed; remaining deep-audit follow-up is limited to `ARTICLE_META` layer naming and roadmap/date archival handling, plus any optional redirect-aware title cleanup).*

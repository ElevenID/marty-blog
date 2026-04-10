# Publication Checklist

Phase: 07 - Polish and Publish  
Purpose: Ensure every piece of content meets editorial, structural, and strategic standards before publication.  
Time to Complete: 15–25 minutes per article

<!-- guide:publication_checklist -->

## Why This Matters

Phase 06 confirms that the editorial system is internally coherent.
Phase 07 confirms that each individual piece is ready for the reader.

A publication checklist prevents the gap between "strong editorial plan" and "actually publishable article" from being bridged by vibes alone.

## Before You Begin

Prerequisites:

- The article draft exists and has been reviewed in Phase 06
- `../00-start-here/course-brief.md` — for strategic alignment checks
- `../02-characters/author-cast.md` — for voice and persona assignment
- `../04-plot-and-structure/module-map.md` — for cluster placement

## Pre-Publication Checklist

### 1. Strategic Alignment

- [ ] The article answers a real reader question (not just a question we want to answer)
- [ ] It connects to at least one Marty primitive, supporting abstraction, or recurring tension
- [ ] It speaks to a recognizable stakeholder role or use case
- [ ] It reinforces the protocol thesis more than it diffuses it
- [ ] It creates a sensible next step into a related topic, guide, or protocol asset

### 2. Reader Transformation

- [ ] A reader who knows nothing about this specific topic can follow the article
- [ ] After reading, the reader understands one important identity concept more clearly
- [ ] The article does not require reading other articles first (standalone test)
- [ ] The article contributes to the cumulative Marty model over repeated reading

### 3. Author Voice and Persona

- [ ] The assigned author persona is the best fit for this topic (check `author-cast.md`)
- [ ] The voice is consistent with the persona's documented cadence, vocabulary, and blind spots
- [ ] The persona disclosure is present and follows the established pattern (curated AI research personas)
- [ ] The author's domain ownership is respected — no persona strays into another's core territory without reason

### 4. Structural Quality

- [ ] Title is clear, benefit-forward, and standards-literate
- [ ] Opening paragraph states the problem and promises a concrete payoff
- [ ] The article has a clear structure: problem → mechanism → implication → next step
- [ ] Subheadings are scannable and informative
- [ ] The article does not exceed a reasonable length for its topic (typically 1,500–3,000 words for a flagship post)

### 5. Evidence Standard

- [ ] Claims are grounded in existing Marty content, the MIP spec, or standards references
- [ ] At least one concrete example, deployment context, or use case is present
- [ ] No overclaiming of compliance, interoperability, or production readiness
- [ ] Protocol entities and standards are named accurately and consistently
- [ ] Regulatory timing claims name the actor, obligation, and timing nuance instead of collapsing a phased requirement into a single-year sound bite
- [ ] Version numbers, schema counts, compliance-profile inventories, and implementation-status claims are rechecked against the live repo or release surface at publication time
- [ ] Post-quantum sections use current algorithm names (`ML-KEM`, `ML-DSA`, `SLH-DSA`) and avoid speculative arrival dates unless a citation is attached

### 6. Terminology Discipline

- [ ] The five primitives use their canonical names: Trust Profile, Credential Template, Presentation Policy, Deployment Profile, Flow
- [ ] Use `Marty Identity Protocol (MIP)` on first reference in each article, then `MIP` thereafter; avoid switching between `MIP`, `Marty Protocol`, and other variants without reason
- [ ] Participant model stays consistent: issuer / holder / verifier are the three operational roles, and governance authority is introduced as a fourth actor only when the article is explicitly about ecosystem governance
- [ ] Standards names are normalized: ICAO 9303, ISO 18013-5, OID4VCI, OID4VP, SD-JWT, EUDI, Cedar
- [ ] No synonym drift (e.g., "trust config" for Trust Profile, "verification rules" for Presentation Policy)
- [ ] Supporting abstractions use their canonical names when referenced

### 7. Linking and Navigation

- [ ] At least one lateral link to an adjacent topic or related article
- [ ] At least one vertical link to a guide chapter, protocol asset, or evaluation material
- [ ] Internal links use correct slugs (verified against `post-sequence.md` content status)
- [ ] The call-to-action is appropriate: continue learning (low friction) or evaluate Marty (high commitment)

### 8. Metadata Contract

- [ ] The draft metadata block explicitly records `Slug`, `Date`, `Updated date` (if needed), `Category`, `Topic`, `Lead narrator`, and `Likely CTA`
- [ ] `Date` and `Updated date` reflect actual publication/revision provenance; future scheduling belongs in roadmap/status metadata, not in live post timestamps
- [ ] `Layer`, `Difficulty`, `Section`, `Related`, `Concept tags`, `Standards tags`, and publication `Status` are all explicit rather than left for the converter to guess
- [ ] `Topic cluster` is recorded whenever `ARTICLE_META.topic` should be broader than the post-card `Topic`
- [ ] `Primitive` is recorded when the article is centered on one of the five core MIP primitives
- [ ] `blogPosts.js` payload fields are ready: `slug`, `title`, `summary`, `authorId`, `date`, `updatedDate?`, `category`, `topic`, `readTime`, `content`
- [ ] `ARTICLE_META[slug]` is ready: `primitive?`, `layer`, `topic`, `difficulty`, `related[]`
- [ ] `SECTION_BY_SLUG[slug]` is set, or the draft explicitly marks the article as `archive`
- [ ] `BLOG_POST_CONCEPT_TAGS[slug]` and `BLOG_POST_STANDARDS_TAGS[slug]` have both been reviewed, and intentionally empty standards tags are written as `(none)` rather than omitted
- [ ] Publication `Status` is one of `draft`, `review`, `ready`, `live`, or `retired`
- [ ] `node scripts/convert-drafts.mjs --metadata-review` runs cleanly for the draft or draft batch with no inferred/defaulted review flags before regenerated prose is merged
- [ ] Any rename / merge / provisional slug note lives in the planning docs, not inside `category`, `layer`, or `status`

### 9. Metadata and SEO Hygiene

- [ ] Categories stay within the current taxonomy: Business, Technical, Cryptography, Announcement, Guide
- [ ] Layers stay within the protocol lifecycle: Foundations, Trust, Issue, Present, Deploy, Execute, Govern
- [ ] Category and layer both make sense and are not being used as substitutes for one another
- [ ] Tags reflect the relevant primitives, standards, and topic cluster, with concept tags separated from standards tags
- [ ] The excerpt states the problem, the mechanism, and the value of continuing in 2–3 sentences
- [ ] The slug is clean, descriptive, and consistent with existing naming patterns
- [ ] Author persona is correctly assigned with proper display name and role

### 10. Tone and Anti-Pattern Check

- [ ] Tone is calm, rigorous, explanatory, and commercially honest
- [ ] No hype, abstract SSI futurism, or vague protocol evangelism
- [ ] No unexplained jargon left unresolved
- [ ] No pseudo-neutrality hiding the Marty thesis
- [ ] No empty thought-leadership disconnected from concrete reader decisions
- [ ] Product reveal is proportional — not every article must hard-sell Marty

### 11. Final Production Check

- [ ] Markdown renders correctly with no broken formatting
- [ ] Images, diagrams, or tables display properly
- [ ] Code blocks (if any) are syntax-highlighted and accurate
- [ ] The article builds and previews correctly in the blog package
- [ ] Publish date and any series/collection metadata are set

## Draft Metadata Block Template

Use this block in `guides/05-drafting/post-drafts/**` so converter output and sidecar updates stay aligned.

```md
## Draft metadata

- **Slug:** `example-slug`
- **Date:** `2026-04-10`
- **Updated date:** `2026-04-10`
- **Category:** `Technical`
- **Topic:** `Credential Issuance`
- **Topic cluster:** `Implementation`
- **Primitive:** `Credential Templates`
- **Layer:** `Issue`
- **Difficulty:** `Intermediate`
- **Section:** `implementation`
- **Related:** `impl-oid4vp`, `mip-json-schemas-walkthrough`, `credential-templates-designing-what-gets-issued`
- **Concept tags:** `implementation`, `credential-issuance`, `transport`
- **Standards tags:** `OID4VCI`
- **Lead narrator:** Daniel Ortega
- **Primary reader:** implementer
- **Likely CTA:** `mip-json-schemas-walkthrough`
- **Status:** `review`
```

Notes:

- Use `archive` for `Section` when the post should stay unpinned.
- Use `(none)` for `Standards tags` when there is intentionally no standards surface to record.
- If `Topic cluster` is omitted, the converter review output will default it from `Topic`; confirm whether that broader `ARTICLE_META` label is actually right.
- Run `node scripts/convert-drafts.mjs --metadata-review` before merging regenerated posts, expect `0` review flags for the affected draft set, and update `ARTICLE_META`, `SECTION_BY_SLUG`, and tag maps in the same pass.

## Post-Publication Verification

- [ ] The article is accessible at the expected URL
- [ ] Internal links from and to the article resolve correctly
- [ ] The article appears in the correct category and tag views
- [ ] The article surfaces properly in the guide section if applicable
- [ ] RSS feed includes the new article with correct metadata

## Gravity-Well Placement

Before publication, confirm which gravity well(s) the article serves:

| Gravity Well | Does this article contribute? |
| --- | --- |
| 1. Category Reframe | [ ] Yes / [ ] No |
| 2. Model Reveal | [ ] Yes / [ ] No |
| 3. Constraint Layer | [ ] Yes / [ ] No |
| 4. Operational Proof | [ ] Yes / [ ] No |
| 5. Artifact and Adoption Proof | [ ] Yes / [ ] No |

Most articles will serve 1–2 gravity wells. An article that serves none is likely off-strategy.

## Using This With AI

Paste this checklist along with a draft when asking AI to:

- perform a pre-publication review
- identify gaps before the article goes live
- verify terminology and linking consistency
- generate missing metadata (excerpt, topic cluster, concept tags, standards tags, slug suggestions)

Useful prompt starter:

> Here is the Marty publication checklist and a draft article. Walk through each section and flag any items that are not yet satisfied.

## Related

- `../06-revision/cap-narrative-profile.md` — the system-level revision artifact
- `../06-revision/publication-post-packets.md` — the original structure the draft should have followed
- `../06-revision/publication-evidence-packets.md` — the source of proof checking during final polish
- `../00-start-here/publishing-strategy.md` — the strategic logic this checklist enforces
- `../02-characters/author-cast.md` — persona assignment and voice rules
- `../04-plot-and-structure/module-map.md` — cluster placement for the article

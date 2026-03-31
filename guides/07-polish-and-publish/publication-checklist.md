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

### 6. Terminology Discipline

- [ ] The five primitives use their canonical names: Trust Profile, Credential Template, Presentation Policy, Deployment Profile, Flow
- [ ] Standards names are normalized: ICAO 9303, ISO 18013-5, OID4VCI, OID4VP, SD-JWT, EUDI, Cedar
- [ ] No synonym drift (e.g., "trust config" for Trust Profile, "verification rules" for Presentation Policy)
- [ ] Supporting abstractions use their canonical names when referenced

### 7. Linking and Navigation

- [ ] At least one lateral link to an adjacent topic or related article
- [ ] At least one vertical link to a guide chapter, protocol asset, or evaluation material
- [ ] Internal links use correct slugs (verified against `post-sequence.md` content status)
- [ ] The call-to-action is appropriate: continue learning (low friction) or evaluate Marty (high commitment)

### 8. Metadata and SEO

- [ ] Categories are assigned from the existing taxonomy: Business, Technical, Cryptography, Announcement, Guide
- [ ] Tags reflect the relevant primitives, standards, and topic cluster
- [ ] The excerpt states the problem, the mechanism, and the value of continuing in 2–3 sentences
- [ ] The slug is clean, descriptive, and consistent with existing naming patterns
- [ ] Author persona is correctly assigned with proper display name and role

### 9. Tone and Anti-Pattern Check

- [ ] Tone is calm, rigorous, explanatory, and commercially honest
- [ ] No hype, abstract SSI futurism, or vague protocol evangelism
- [ ] No unexplained jargon left unresolved
- [ ] No pseudo-neutrality hiding the Marty thesis
- [ ] No empty thought-leadership disconnected from concrete reader decisions
- [ ] Product reveal is proportional — not every article must hard-sell Marty

### 10. Final Production Check

- [ ] Markdown renders correctly with no broken formatting
- [ ] Images, diagrams, or tables display properly
- [ ] Code blocks (if any) are syntax-highlighted and accurate
- [ ] The article builds and previews correctly in the blog package
- [ ] Publish date and any series/collection metadata are set

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
- generate missing metadata (excerpt, tags, slug suggestions)

Useful prompt starter:

> Here is the Marty publication checklist and a draft article. Walk through each section and flag any items that are not yet satisfied.

## Related

- `../06-revision/cap-narrative-profile.md` — the system-level revision artifact
- `../06-revision/publication-post-packets.md` — the original structure the draft should have followed
- `../06-revision/publication-evidence-packets.md` — the source of proof checking during final polish
- `../00-start-here/publishing-strategy.md` — the strategic logic this checklist enforces
- `../02-characters/author-cast.md` — persona assignment and voice rules
- `../04-plot-and-structure/module-map.md` — cluster placement for the article

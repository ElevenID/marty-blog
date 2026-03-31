# Publishing Strategy

Phase: 00 - Start Here  
Purpose: Define how a topic-led Marty publication stays coherent, discoverable, and commercially useful without forcing every article into a rigid syllabus.  
Time to Complete: 25–35 minutes

<!-- guide:publishing_strategy -->

## Why This Matters

The Marty publication needs two truths to coexist:

1. Publicly, it must read like a strong technical blog about digital identity, standards, and deployment.
2. Internally, it must still accumulate toward protocol literacy, evaluation readiness, and product understanding.

This document keeps those layers aligned so we do not accidentally optimize for traffic without transformation, or for structure without editorial agility.

## Before You Begin

Prerequisites:

- `course-brief.md`
- `audience-and-transformation.md`

This working draft is based on the current `@marty/blog` structure, guide chapters, blog categories, published post inventory, roadmap phases, MIP documentation, and pricing/packaging materials.

## Current Working Draft

### Publication Model

**Public Presentation:** A technical blog with a prominent "Learn the Marty Protocol" guide section, specialist authors, searchable/filterable articles, and standalone posts that each feel valuable on their own

**Internal Structure:** A knowledge graph of topic clusters, guide paths, and protocol assets — not a rigid queue of lessons

**Series Visibility:** Optional and contextual. The guide section can surface recommended paths for new readers, but the publication should not require that every reader follow a forced sequence.

**Primary Publishing Surface:** The Marty blog package rendered inside the main product site (`BlogPage`, protocol guide section, author pages, article pages)

**Secondary Surfaces:** The MIP repo README/spec/docs, RSS, product catalog pricing pages, author pages, and eventual implementation/evaluation landing pages

### Editorial Taxonomy

**Top-Level Publication Name:** Marty Protocol Blog

**Guided Collection Name:** Learn the Marty Protocol

**Core Topic Clusters:**
1. Protocol-first identity matters (business case, foundations, standards pressure)
2. The Marty model works (primitives, supporting abstractions, interoperability)
3. Trust, governance, and privacy shape the real system
4. Flows, deployments, and operating environments prove reality
5. Implementations, specs, pricing, and adoption paths turn interest into evaluation

**Unit Types:**
- Foundational explainer
- Primitive deep dive
- Standards or regulation explainer
- Deployment pattern or use-case walkthrough
- Implementation walkthrough
- Business or pricing case
- Announcement or synthesis post

**Naming Convention:** Clear, benefit-forward, standards-literate titles that often use a strong noun phrase plus a clarifying subtitle, contrast, or question

### Author Freedom Policy

**Default Rule:** Any author may pursue a topic because it is timely, clarifying, or strategically useful — not only because it fits the next slot in a planned sequence.

**A draft is on-strategy if it can answer yes to most of these questions:**
- Does it answer a real reader question?
- Does it clarify at least one Marty primitive, abstraction, tension, or deployment choice?
- Does it speak to a recognizable stakeholder or use case?
- Does it create a sensible next step into another topic, guide, or protocol asset?
- Does it reinforce the protocol thesis more than it diffuses it?

**Editorial Freedom Guardrail:** Freedom should increase topical sharpness, not reduce coherence. A strong piece may begin anywhere, but by the end it should leave the reader more oriented inside the Marty world.

### Reader Journey Design

**Entry Points:**
- `why-identity-needs-a-protocol`
- `business-case-for-credential-portability`
- `eudi-wallet-readiness`
- `introducing-mip`
- the guide chapter `Foundations`
- any topical author-led essay that cleanly answers a pressing standards, privacy, or deployment question

**Default Orientation Path:** For readers who want structure, the publication can still offer a guided path:
1. Protocol-first framing and foundations
2. Core primitives
3. Trust, governance, and privacy
4. Flows and deployments
5. Implementation and adoption proof

**Important Clarification:** That is a recommended path, not the only legitimate way to engage.

**Lateral Discovery Model:** Readers should also be able to move sideways by:
- reader role (architect, operator, compliance lead, buyer)
- topic cluster (privacy, standards, deployments, trust)
- author voice
- use case (travel, retail, enterprise, education, EUDI)

**The Visual Navigation Anchor (The Five Primitives Map):**
Instead of a rigid table of contents, the publication uses a spatial mental model for navigation. A core diagram showing the Five Primitives interacting (Trust Profile, Credential Template, Presentation Policy, Deployment Profile, Flow) acts as the anchor. Every deep-dive post should reference this overview picture, effectively giving the reader a "You are here in the system" minimap.

### Editorial Guardrails

**Voice Contract:** Serious but readable, technically grounded, commercially honest, and oriented toward helping readers make real architecture decisions

**What Every Post Must Do:** Teach a durable concept, reduce confusion, link the concept back to the Marty model, and help the reader either move laterally into a related topic or deeper into evaluation assets.

**What No Post Should Do:** Waste reader time, posture with unexplained jargon, overpromise compliance or interoperability, drift into generic thought leadership, or conceal the Marty thesis behind fake neutrality

**Evidence Standard:** Claims should be grounded in existing Marty content, the MIP spec, standards references, concrete deployments, protocol entities, examples, code, diagrams, or pricing logic — not vibes alone

**Revision Standard:** A publishable post should clearly answer one important question, use at least one concrete example or deployment context, connect to the Marty model, and suggest a useful next step.

### SEO, Navigation, and Metadata

**Primary Search Intents:** digital identity protocol, verifiable credentials architecture, trust profiles, presentation policies, deployment profiles, offline verification, EUDI readiness, mDL verification, selective disclosure, trust registries, credential portability

**Internal Linking Strategy:** Every post should link laterally to adjacent topics and vertically to the guide chapter, protocol asset, or deployment/evaluation material that best extends the reader's understanding.

**Category / Tag Strategy:** Use the existing blog categories (`Business`, `Technical`, `Cryptography`, `Announcement`, `Guide`) while letting the guide chapters and concept tags supply the deeper semantic structure underneath.

**Excerpt Strategy:** Summaries should state the problem, the mechanism, and the value of continuing — teaching and intrigue in one short block.

**Landing Page Need:** The existing blog page already surfaces the structured guide first. The next evolution should make topical clusters, reader-role paths, and evaluation paths easier to discover alongside that guide.

### Calls to Action

**Default CTA:** Continue to the most relevant adjacent concept, use case, or guide page — not necessarily the next numbered lesson

**Low-Friction CTA:** Read the related guide article, explore a linked standard, browse the next post by topic or author, or inspect the MIP specification and schemas

**High-Commitment CTA:** Evaluate a Marty deployment model, compare self-hosted vs hosted vs edge, inspect control-plane tiers, and begin a proof-of-concept or implementation review

**Measurement Signals:** Topic-to-topic progression, clicks from blog posts into guide chapters, visits to the MIP spec and schema/conformance materials, movement into deployment/pricing pages, and signs that readers are comparing Marty as infrastructure rather than skimming it as general content

### CAP Narrative Profile Publishing Semantics

**Canonical Unit:** A standalone topic essay, guide article, or flagship post that changes the reader's understanding of one important part of the Marty model

**Progression Pattern:** orientation → reframe → primitive deep dive → governance/privacy constraint → deployment or implementation proof → synthesis

**Reader-State Tracking:** confused → oriented → interested → structured → evaluative → design-ready

**Registry Discipline:** Keep the names of the five primitives, major standards, and deployment models stable across all content. The same concepts should not receive different labels in different posts.

**Critique Layer:** Judge each post by whether it advances protocol literacy and Marty evaluation readiness, not by whether it merely sounds smart.

## Using This With AI

Use this file when asking AI to:

- propose topics or critique whether a topic belongs in the publication
- design author-led article paths
- generate titles that balance search, clarity, and intrigue
- review CTA, linking, or conversion logic
- decide how a standalone post should connect back to Marty

Useful prompt starter:

> Here is the publishing strategy for the Marty Protocol publication. Based on this strategy, critique this proposed topic and explain how it should connect to a reader role, a Marty primitive, and a next-step CTA.

## Related

- `course-brief.md` — defines the core promise and operating logic
- `audience-and-transformation.md` — defines the reader and desired shift
- `../04-plot-and-structure/` — where this strategy becomes topical paths and structural guidance
- `../07-polish-and-publish/` — where final metadata, excerpts, and launch assets should live

This is the bridge between editorial freedom and strategic coherence.

# Course Brief

Phase: 00 - Start Here  
Purpose: Create the master context document for the Marty Protocol editorial system — a topic-led publication with optional learning paths, not a rigid syllabus.  
Time to Complete: 20–30 minutes (revisit as the protocol, blog, and product story evolve)

<!-- guide:course_brief -->

## Why This Matters

This is the equivalent of Grimoire's `book-brief.md`, adapted for the Marty Protocol ecosystem.

It is the single document we should paste into most planning and drafting sessions so the AI understands the publication's:

- protocol thesis
- reader and stakeholder priorities
- topical boundaries
- author freedom rules
- product conversion intent

Without it, author freedom becomes drift.
With it, authors can pick timely or interesting topics and still reinforce the same Marty model.

## Before You Begin

Prerequisites: None. This is the foundation document.

This working draft is derived from the current Marty blog package, guide chapters, roadmap, protocol README/specification, and existing pricing/packaging docs.

## Current Working Draft

### Basic Information

**Working Title:** Marty Protocol Editorial System

**Public Publication Name:** Marty Protocol Blog

**Guided Collection Name:** Learn the Marty Protocol

**Internal Reality:** A topic-led editorial publication with optional guided paths. Authors should be free to write about timely, useful, or interesting identity topics, as long as each piece clarifies some part of the Marty model and helps the right reader make a better architecture or buying decision.

**Primary Domain:** Cryptographically verifiable digital identity infrastructure

**Format:** Technical blog + guide hub + author-led publication + protocol/product field guide

**Estimated Scope:** Current material already supports 6 guide chapters, 22 guide articles, 22 published flagship posts, and a 40-post roadmap that can be treated as a topic pool rather than a fixed queue.

**Publication Cadence:** Biweekly flagship posts plus evergreen guide updates, opportunistic topical essays, and protocol documentation cross-links

**Target Audience:** Technical buyers, architects, product/security/compliance leads, and implementers evaluating how to issue, verify, and govern digital credentials without vendor lock-in

### The Promise

**Transformation Promise (One Sentence):** Any strong Marty article should make one important part of digital identity more legible, and repeated exposure should give readers a reusable protocol model for evaluating real deployments.

**Core Problem:** Digital identity is still discussed as fragmented platforms, per-check APIs, wallet features, and custom integrations rather than reusable protocol infrastructure.

**Reader Stakes:** If the reader does not solve this problem, they remain trapped in vendor lock-in, repeated re-verification costs, slow compliance updates, privacy leakage, and brittle architecture decisions that do not survive new standards or new deployment contexts.

**Why Now:** EUDI wallet timelines, mDL adoption, passport and travel modernization, offline verification needs, privacy regulation, and post-quantum planning are converging. The market is being forced to treat identity as infrastructure whether it wants to or not.

### Reader Experience Model

**Entry Reality:** Readers will not arrive in a neat order. Some enter through standards pressure, some through privacy, some through deployment pain, some through architecture, and some through pure curiosity.

**Single-Article Win:** One article should answer one real question well enough that the reader leaves with a sharper model, a clearer term, or a better decision lens.

**Cumulative Win:** Across multiple articles, the reader should begin to think in Marty primitives and supporting abstractions rather than in vendor categories or disconnected standards acronyms.

**Desired End State:** The reader can reason in MIP's primitives (`Trust Profile`, `Credential Template`, `Presentation Policy`, `Deployment Profile`, `Flow`), understand how standards map into those primitives, and evaluate whether Marty fits their environment.

**Primary Frictions:** Standards sprawl, cryptography jargon, cross-functional stakeholder alignment, compliance anxiety, fear of choosing the wrong abstraction layer, and procurement habits that default to per-check platform thinking.

**Fastest Useful Insight:** A reader should quickly understand the business and architectural difference between platform-based identity verification and protocol-based reusable credentials.

### Editorial Logic at 20ft

**Core Topic Clusters:**
1. Why identity needs a protocol: foundations, economics, and the platform-vs-protocol argument
2. The MIP model: the five core primitives and their supporting abstractions
3. Trust, governance, and privacy: trust anchors, policy engines, registries, disclosure, and compliance
4. Flows and operating environments: issuance, presentation, revocation, offline verification, and runtime packaging
5. Implementations and adoption: standards mappings, schemas, conformance, deployment choices, and product evaluation

**Structural Logic:** There is a preferred orientation path for new readers, but no topic requires a fixed slot in a rigid syllabus. A strong article may begin from a standard, a deployment, a privacy problem, a trust question, or a protocol artifact.

**What Every Piece Must Still Do:**
- answer one real question
- anchor itself to at least one Marty primitive, abstraction, or recurring tension
- identify a stakeholder, deployment context, or use case
- point the reader toward a sensible next concept, adjacent post, or evaluation asset

**Default Guided Path:** Foundations → primitives → trust/privacy/governance → flows/deployments → implementation/adoption. This path helps new readers, but authors do not have to publish in that order.

### Author Freedom Rules

**Freedom Principle:** Authors are allowed to pursue a topic because it is timely, intellectually interesting, commercially important, or clarifying — not only because it fits the next slot in a sequence.

**Alignment Rule:** Topic freedom is encouraged only if the piece still makes the larger Marty system easier to understand.

**A topic is on-strategy if it does at least three of these things:**
- clarifies a Marty primitive or supporting abstraction
- sharpens a real buyer or implementer question
- interprets a standard, regulation, or deployment context
- shows why protocol structure beats platform lock-in
- gives the reader a concrete next step in the Marty world

**What Freedom Does Not Mean:** It does not mean random trend commentary, generic IAM thought leadership, or drifting into identity discourse that never returns to the Marty model.

### CAP Narrative Profile Alignment

Use role-based abstraction so the system stays reusable across future Marty guide work.

**Functional Reader Roles:**
- `protagonist_reader`: Protocol buyer-builder — the person who must evaluate or design credential infrastructure
- `mentor_voice`: The Marty specialist bench plus the protocol documentation itself
- `antagonist_system`: Vendor lock-in, standards fragmentation, per-check verification economics, hidden policy logic, and compliance confusion
- `ally_tooling`: The guide chapters, blog posts, MIP spec, schemas, conformance suite, and reference implementations

**Setting Domains:** Product architecture reviews, regulated deployment environments, airport and kiosk operations, enterprise access systems, privacy-sensitive retail verification, wallet ecosystems, and standards/compliance planning

**Typical Event Types:** diagnosis, comparison, deep dive, walkthrough, deployment pattern, compliance mapping, implementation handoff, synthesis

**Stakes Domains:** economic, operational, privacy, regulatory, security, and ecosystem interoperability

**Registry Note:** The publication must use the names of the five core primitives consistently and avoid drifting between synonymous labels. Standards names (ICAO 9303, ISO 18013-5, OID4VCI, OID4VP, SD-JWT, EUDI, Cedar) should remain normalized across all posts.

### Tone and Style

**Tone:** Calm, rigorous, explanatory, and commercially honest

**Narrative Style:** Specialist-led essays with a coherent protocol thesis underneath

**Prose Style:** Compressed, example-driven, standards-aware, and practical enough for implementation-minded readers

**Reader Experience Goal:** The reader should feel the fog clearing even when they arrive through a narrow topic. Each article should make the space more legible, not more theatrical.

**Anti-Patterns:** hype, abstract SSI futurism, vague protocol evangelism, unexplained jargon, pseudo-neutrality that hides the Marty thesis, and empty thought-leadership that does not help a reader make a concrete decision

### Unique Elements

**What Makes This Publication Special:** It does not merely explain identity standards or sell software. It uses a protocol-centered model to connect standards, trust, governance, privacy, deployment, and economics into one mental model, while still allowing authors to write nimbly about the topic in front of them.

**Editorial Edge:** The publication can draw directly from the MIP specification, the guide curriculum, the roadmap, the JSON Schemas, the conformance suite, the reference implementations, and the product packaging story.

**Boundaries:** This publication is not generic IAM content, not a legal opinion, not a full cryptography textbook, and not a substitute for implementation or governance work. It explains the model, frames the stakes, and points readers toward adoption-ready assets.

**IP / Ethics Guardrails:** Use the blog, guide, and Marty repos as primary source material; cite standards and protocol entities accurately; do not overclaim compliance or product capability; and keep the AI research personas transparently framed as curated editorial voices rather than real humans.

## Using This With AI

Start most planning or drafting sessions with:

> I'm working on the Marty Protocol editorial system — a topic-led publication with optional learning paths. Here's the current course brief:
>
> [paste this file]
>
> Help me with: [specific task]

Use this file to:

- ground ideation sessions in the real Marty strategy
- check whether a topic is on-strategy before drafting
- keep the protocol thesis coherent without forcing a rigid sequence
- prevent drift in audience, tone, and product posture

## Related

- `audience-and-transformation.md` — define who the publication changes and how
- `publishing-strategy.md` — define how this topic-led system manifests on the live blog
- `../01-concept/` — sharpen the thesis, promise, and hook
- `../04-plot-and-structure/` — turn this into topical paths, clusters, and drafting logic

This is the foundation document. Everything else should sharpen, test, or execute what is declared here.

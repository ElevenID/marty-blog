# Audience and Transformation

Phase: 00 - Start Here  
Purpose: Define who the Marty publication serves and what should change after one article, several articles, or deeper engagement.  
Time to Complete: 25–40 minutes

<!-- guide:audience_transformation -->

## Why This Matters

The Marty publication is not trying to teach "digital identity in general" to everyone.
It is trying to create protocol literacy and buying or implementation readiness in a specific slice of the market.

This document forces specificity around:

- who the core reader is
- what they are confused about today
- what one strong article should do for them
- what repeated reading should unlock over time
- what objections keep them from trusting Marty

This is where the blog stops being a content stream and becomes a topic-led editorial system with a real strategic outcome.

## Before You Begin

Prerequisites:

- `course-brief.md` should exist

This working draft is based on the current blog posts, guide chapters, roadmap, protocol documentation, and pricing/packaging materials.

## Current Working Draft

### Primary Reader Persona

**Persona Label:** Protocol buyer-builder

**Role / Environment:** A platform architect, product lead, security/compliance lead, or technical decision-maker operating in a regulated or infrastructure-heavy environment that needs to issue or verify digital credentials

**Current Sophistication Level:** Advanced beginner to practitioner — comfortable with APIs, architecture, and procurement decisions, but not yet fluent in the modern verifiable credentials stack

**Urgent Problem:** They need to support wallets, standards, trust decisions, privacy requirements, and real deployments without getting trapped in a proprietary IDV model or a standards swamp

**Trigger Moments:** EUDI or mDL readiness work, offline verification requirements, cross-jurisdiction credential acceptance, pressure to reduce per-check verification costs, or a new initiative to issue first-party credentials

**Desired Identity Shift:** From identity platform buyer or confused evaluator to protocol-literate infrastructure operator who can frame identity problems in reusable primitives

**Constraints:** Limited time, cross-functional politics, procurement inertia, standards overload, compliance pressure, skepticism about new protocols, and fear of making a visibly wrong architecture choice

### Secondary Audiences

**Adjacent Reader 1:** Hands-on implementers and solution architects who need schemas, examples, flows, and standards mappings

**Adjacent Reader 2:** Commercial or governance stakeholders who need the business case, deployment model, trust posture, and pricing logic explained without hand-wavy marketing

**What They Need Differently:** Implementers need concrete artifacts and operational detail; governance and commercial readers need clear economics, deployment packaging, privacy rationale, and risk framing.

### Entry Reality

Different readers will enter through different topics:

- a standards article
- a privacy problem
- a deployment pain point
- a protocol artifact
- a business or pricing question

There is no single guaranteed first read.
That means every article must stand on its own while still helping the reader orient inside the larger Marty model.

### Current State vs Desired State

**Current State:** The reader knows the space is shifting toward verifiable credentials, but sees a blur of acronyms, vendor claims, wallet hype, privacy promises, and unclear standards boundaries.

**Desired State:** The reader can explain the identity problem in MIP terms, connect standards to reusable primitives, and decide whether to evaluate Marty as infrastructure rather than as another API product.

**Knowledge Gap:** They do not yet have a single model that connects trust, credential shape, disclosure rules, deployment constraints, compliance mappings, and flow orchestration.

**Skill Gap:** They cannot yet map a real use case — pre-boarding, mDL, age verification, enterprise access, education credentials — into a protocol-level design.

**Confidence Gap:** They hesitate to recommend a protocol-centered approach because the surrounding market still sounds dominated by platforms, custom integrations, and point solutions.

**Common False Beliefs:**
- Identity verification is fundamentally a per-check API business, so costs must scale with every verification event.
- Supporting multiple standards means building separate systems for each ecosystem.
- Privacy and compliance are mostly in conflict, so teams must trade one against the other.

**Common Failure Modes:**
- Treating trust decisions as buried application logic instead of governed data
- Buying a platform for one use case and discovering it cannot evolve across jurisdictions or deployment modes
- Assuming wallet support alone solves trust, governance, and operational architecture

### Transformation Design

**Article-Level Promise:** One Marty article should make one important identity question more legible and leave the reader with a clearer decision lens than they had before.

**Portfolio-Level Promise:** Repeated reading should move the reader from standards confusion and vendor comparison mode into a protocol-centered view of identity that makes Marty legible, credible, and actionable.

**Minimum Viable Win:** The reader can clearly articulate why digital identity needs a protocol layer and can name the five MIP primitives.

**Accumulating Milestones:**
1. Understand the platform-vs-protocol argument and the holder-controlled model
2. Map standards and use cases to the five MIP primitives and their supporting abstractions
3. Connect deployment, pricing, governance, privacy, and compliance into one buying or implementation narrative

**Deep Engagement Capability:** The reader can diagnose an identity use case, sketch the appropriate Trust Profile / Credential Template / Presentation Policy / Deployment Profile / Flow combination, and explain why Marty is a plausible architecture choice.

**Observable Evidence of Success:** They can explain the model to a colleague, compare Marty against a per-check platform without hand-waving, and identify which deployment or control-plane tier fits their environment.

### Editorial Implications

Because entry is non-linear, every strong article should include:

- enough local context to make the topic understandable on its own
- at least one clear connection back to the Marty model
- a visible answer to a stakeholder's practical question
- a sensible next step into a related topic, guide article, or protocol asset

### Emotional and Narrative Dynamics

**What the Reader Is Afraid Of:** Buying or building the wrong thing, getting trapped in expensive lock-in, making a compliance or privacy mistake, or sounding naïve in front of more technical peers

**What They Secretly Want:** A crisp, durable model that restores a feeling of control — and a way to look ahead of the market instead of reacting to standards updates one integration at a time

**What Keeps Them Stuck:** Acronym overload, fragmented market messaging, lack of unifying abstractions, and organizational habits that reduce identity to feature procurement instead of infrastructure design

**What Must Feel Different After Repeated Reading:** More clarity, more agency, more confidence, and a stronger ability to defend protocol-first reasoning in technical and commercial discussions

### CAP Narrative Profile Role Registry

Use functional roles instead of overfitting to one persona.

**Character Roles:**
- `protagonist_reader`: The buyer-builder trying to make identity infrastructure legible
- `mentor_voice`: The Marty specialist bench, guide chapters, and protocol documentation
- `antagonist_system`: Lock-in economics, standards fragmentation, hidden trust logic, and compliance ambiguity
- `ally_peer`: Architects, reviewers, implementers, and governance stakeholders who can help operationalize the protocol model
- `skeptic`: The internal or external voice asking whether a new protocol really changes anything in practice

**Setting Types:**
- `institutional`: Government, regulated enterprise, travel, education, and cross-border trust environments
- `public_social`: Market messaging, procurement discussions, and standards ecosystem narratives
- `threshold`: The moment of choosing architecture, vendor, deployment model, or compliance path
- `workbench`: Whiteboards, implementation reviews, schema walkthroughs, proof-of-concept design sessions

**Likely Stakes Domains:** operational, economic, privacy, regulatory, security, and reputational

**Likely Event Types:** diagnosis, reframe, standards mapping, deployment design, objection handling, implementation walkthrough, synthesis

**Registry Notes:** Publicly, we can refer to architects, buyers, operators, compliance teams, and implementers. Under the hood, the more stable role vocabulary is buyer-builder, mentor voice, antagonist system, and ally tooling.

### Proof and Trust

**Why They Should Trust Us:** Marty already has a live protocol spec, JSON Schemas, conformance suite, guide curriculum, concrete use cases, standards mappings, and a pricing model grounded in infrastructure and deployment rather than per-check extraction.

**Evidence Types We Can Provide:** Guide articles, blog posts, diagrams, standards mappings, flow walkthroughs, deployment patterns, schema explanations, pricing logic, and open protocol artifacts

**Likely Objections:**
- "Why do we need another protocol if these standards already exist?"
- "This sounds elegant, but can teams actually deploy it in real environments?"
- "Is this just marketing wrapped around identity buzzwords?"

**How We Will Resolve Objections:** Show that MIP is not replacing standards but organizing them; use concrete deployment examples (airline boarding, age verification, enterprise access, EUDI readiness); and repeatedly connect the editorial story to the actual spec, schemas, guide content, and deployment economics.

## Using This With AI

Paste this file along with `course-brief.md` when asking for:

- audience-specific examples
- topic selection
- objection handling
- positioning or headline tests
- critique of whether a draft truly serves the Marty buyer-builder

Useful prompt starter:

> Here is the reader transformation model for the Marty Protocol publication. Based on it, critique this draft or topic for relevance, clarity, buyer confidence, and protocol adoption leverage.

## Related

- `course-brief.md` — the master strategy document
- `publishing-strategy.md` — how this transformation gets packaged on the live blog
- `../01-concept/` — refine the thesis, positioning, promise, and hook
- `../03-world-building/` — map the ecosystem, constraints, and protocol context around the reader

If the course brief defines what we are building, this file defines who it is for and what better actually looks like.

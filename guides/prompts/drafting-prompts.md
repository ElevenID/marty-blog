# Drafting Prompts

Reusable prompt templates for AI-assisted drafting, critique, and revision of Marty Protocol editorial content.

## How To Use

Each prompt template below is designed to be pasted into an AI session along with the relevant guide documents. Replace `[bracketed placeholders]` with the specific topic, draft, or context.

Always include `course-brief.md` as baseline context. Add additional guide files as indicated per template.

---

## Prompt 1 — Topic Viability Check

**When to use:** Before committing to drafting a new topic.

**Context files to include:** `course-brief.md`, `module-map.md`

```
I'm considering writing a Marty Protocol blog post about [topic].

Based on the course brief and module map, answer:
1. Which editorial cluster does this topic serve?
2. Which gravity well does it strengthen?
3. Which author persona should lead?
4. Which stakeholder role benefits most?
5. Is there an existing post or guide article that already covers this? If so, how would this piece differ?
6. What is the strongest opening question for a reader?

If this topic is off-strategy, explain why and suggest a sharper alternative.
```

---

## Prompt 2 — Draft From Source Material

**When to use:** When drafting a new article from existing Marty source material.

**Context files to include:** `course-brief.md`, `author-character-profiles.md`, source material

```
Draft a Marty Protocol blog post on [topic].

Lead author persona: [persona name]
Target reader: [stakeholder role]
Primary source material: [list the guide articles, flagship posts, or protocol docs to draw from]

Requirements:
- Open with the reader's real question, not with identity history
- Anchor the topic to at least one Marty primitive or supporting abstraction
- Include at least one concrete example or deployment context
- End with a clear next step (adjacent topic, guide article, or evaluation asset)
- Keep tone calm, rigorous, explanatory, and commercially honest
- Target 1,500–2,500 words

Do not overclaim compliance or production readiness. Do not use unexplained jargon.
```

---

## Prompt 3 — Draft Critique

**When to use:** After a draft exists and needs editorial review.

**Context files to include:** `course-brief.md`, `transformation-promise.md`, `publication-checklist.md`, the draft

```
Here is a draft Marty Protocol blog post:

[paste draft]

Review this draft against the transformation promise and publication checklist. For each area, give a pass/fail and a one-sentence explanation:

1. Does it answer a real reader question?
2. Does it connect to at least one Marty primitive?
3. Is the author voice consistent with the assigned persona?
4. Does it use Marty terminology correctly and consistently?
5. Does it include a concrete example or deployment context?
6. Does it end with a useful next step?
7. Does the opening paragraph promise something specific?
8. Is the tone appropriate (no hype, no jargon soup, no pseudo-neutrality)?
9. Is the evidence grounded in existing Marty materials?
10. Would a skeptical architect find this valuable?

Then suggest up to 3 specific improvements.
```

---

## Prompt 4 — Opening Frame Generator

**When to use:** When a topic is clear but the opening is not.

**Context files to include:** `course-brief.md`, `narrative-hook.md`

```
Generate 5 opening frames for a Marty Protocol blog post about [topic].

Vary across these dimensions:
- Version A: High urgency (regulatory deadlines, market pressure)
- Version B: High mystery (what's missing despite existing standards?)
- Version C: High utility (concrete benefit the reader gains)
- Version D: High authority (spec, schemas, conformance as proof)
- Version E: High clarity (turn confusion into structure)

Each opening should be 2–4 sentences. Each should make the reader want to continue without resorting to clickbait. Each should stay recognizably Marty.
```

---

## Prompt 5 — Excerpt and Metadata Generator

**When to use:** After a draft is finalized and needs publication metadata.

**Context files to include:** `publishing-strategy.md`, the final draft

```
Here is a finalized Marty Protocol blog post:

[paste draft]

Generate:
1. A 2–3 sentence excerpt that states the problem, mechanism, and value of reading
2. A clean URL slug consistent with existing Marty naming patterns
3. Suggested category (Business, Technical, Cryptography, Announcement, or Guide)
4. 4–6 tags from the Marty primitive, standard, and topic vocabulary
5. A one-sentence social media summary (under 280 characters)
```

---

## Prompt 6 — Synthesis Post Planner

**When to use:** When preparing a post that connects multiple previously published topics.

**Context files to include:** `course-brief.md`, `series-arc.md`, `module-map.md`

```
I want to write a synthesis post that connects these previously published Marty articles:
[list articles]

Based on the series arc and module map:
1. What is the unifying insight these articles share?
2. Which gravity well does the synthesis serve?
3. What new understanding should the reader gain that individual articles did not provide?
4. Which author persona should lead?
5. What is the strongest opening question?
6. What should the synthesis point toward as a next step?
```

---

## Prompt 7 — Competitive Differentiation Frame

**When to use:** When a topic needs to position Marty against alternatives without sounding like attack marketing.

**Context files to include:** `course-brief.md`, `series-thesis-and-logline.md`

```
Write a differentiation frame for a Marty article about [topic].

The article should make clear why Marty's approach differs from:
- Per-check IDV platforms
- Wallet-only approaches
- Standards-without-operational-model approaches
- Custom integration approaches

Rules:
- Do not name competitors
- Lead with what the reader gains, not what competitors lack
- Use the protocol-vs-platform tension as the structural comparison
- Ground every claim in Marty primitives, standards mappings, or deployment logic
- Keep tone confident but not dismissive
```

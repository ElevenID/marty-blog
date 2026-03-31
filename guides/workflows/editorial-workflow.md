# Editorial Workflow

How a Marty Protocol article moves from idea through publication, with clear handoffs between guide phases.

## Workflow Stages

```
Idea → Viability Check → Brief → Draft → Review → Revision → Publication → Verification
```

### Stage 1 — Idea

**Trigger:** An author identifies a timely, useful, or gap-filling topic.

**Action:** Write a 2–3 sentence topic pitch answering:
- What reader question does this answer?
- Which Marty primitive or tension does it clarify?
- Which stakeholder role benefits most?

**Gate:** The idea must pass the on-strategy test from `course-brief.md` (satisfies at least 3 of 5 alignment criteria).

---

### Stage 2 — Viability Check

**Guide phase:** Phase 04 (Plot and Structure)

**Action:** Check the idea against:
- `module-map.md` — which cluster does it serve?
- `post-sequence.md` — does it fill a path gap or duplicate existing coverage?
- `published-content-source-map.md` — is there strong source material to draft from?

**Output:** A confirmed topic with assigned cluster, lead persona, and primary sources.

**Gate:** If no cluster fits and no source material exists, the topic is either off-strategy or needs upstream world-building work first.

---

### Stage 3 — Brief

**Guide phase:** Phase 05 (Drafting)

**Action:** Write a draft brief following the pattern in `priority-draft-briefs.md`:
- Goal
- Primary sources
- Target reader
- Promise
- Key beats (4–6)
- Best next step

**Output:** A brief that an author (human or AI) can draft from without needing to re-derive the publication strategy.

---

### Stage 4 — Draft

**Guide phase:** Phase 05 (Drafting)

**Action:** Write the article using:
- The brief as scope
- The assigned persona's voice (from `author-character-profiles.md`)
- Source material identified in the brief
- Prompts from `prompts/drafting-prompts.md` if using AI assistance

**Output:** A complete first draft with title, body, and suggested next-step links.

**Quality bar:** The draft should be readable end-to-end and teach at least one durable concept.

---

### Stage 5 — Review

**Guide phase:** Phase 06 (Revision)

**Action:** Review the draft against:
- `cap-narrative-profile.md` — does it align with the system-level editorial model?
- `transformation-promise.md` — does it deliver an article-level win?
- `publication-checklist.md` — does it pass all 10 checklist sections?

**Output:** A review summary with pass/fail per checklist section and specific revision notes.

**Who reviews:** The author (self-review with checklist), a peer, or AI with the critique prompt from `prompts/drafting-prompts.md`.

---

### Stage 6 — Revision

**Guide phase:** Phase 06 (Revision)

**Action:** Address review findings:
- Fix terminology drift
- Strengthen weak evidence or examples
- Improve opening and next-step CTA
- Tighten voice consistency with assigned persona
- Remove anti-patterns (hype, jargon soup, pseudo-neutrality)

**Output:** A revised draft ready for final production.

**Gate:** All 10 publication checklist sections should pass before moving to Stage 7.

---

### Stage 7 — Publication

**Guide phase:** Phase 07 (Polish and Publish)

**Action:**
1. Generate metadata using the excerpt/metadata prompt from `prompts/drafting-prompts.md`
2. Assign category, tags, slug, excerpt, and author persona
3. Confirm gravity-well placement
4. Build and preview the article in the blog package
5. Publish

**Output:** A live article at its expected URL.

---

### Stage 8 — Verification

**Guide phase:** Phase 07 (Polish and Publish)

**Action:** Post-publication verification per the checklist:
- [ ] Article accessible at expected URL
- [ ] Internal links resolve correctly (both directions)
- [ ] Appears in correct category and tag views
- [ ] Surfaces in guide section if applicable
- [ ] RSS feed updated

**Output:** Confirmed live publication with correct metadata and navigation.

---

## Workflow Shortcuts

Not every article needs the full workflow. Use judgment:

| Situation | Start at |
| --- | --- |
| New flagship post on an unwritten topic | Stage 1 |
| Post filling a known gap in `post-sequence.md` | Stage 3 (brief already implied) |
| Minor update or correction to existing post | Stage 6 |
| New guide article extending an existing chapter | Stage 3 |

## Collaboration Notes

- **Solo author workflow:** One person moves through all stages, using the checklist and prompts for quality assurance.
- **AI-assisted workflow:** Use the drafting prompts for stages 3–5. Use the critique prompt at stage 5. Use the metadata prompt at stage 7.
- **Multi-author workflow:** Stage 2 (viability) and Stage 5 (review) are the natural handoff points between authors or between author and editor.

## Related

- `../prompts/drafting-prompts.md` — prompt templates for AI-assisted stages
- `../07-polish-and-publish/publication-checklist.md` — the detailed pre-publication checklist
- `../06-revision/cap-narrative-profile.md` — system-level revision reference
- `../00-start-here/course-brief.md` — strategic alignment reference

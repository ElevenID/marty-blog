# Guides Workspace

This directory is the source-of-truth workspace for the long-form guides and editorial planning material that will later be published through the Marty blog.

Its structure mirrors the Grimoire phase model so each guide can be developed from high-level framing down to polished publication assets.

## Directory layout

- `00-start-here/` — course brief, audience, learning goals, collaboration notes
- `01-concept/` — thesis, transformation promise, positioning, narrative hook
- `02-characters/` — personas, voices, recurring experts, narrative cast if a guide uses story framing
- `03-world-building/` — domain context, ecosystem, constraints, glossary
- `04-plot-and-structure/` — lesson arc, module sequence, beats, section plans
- `05-drafting/` — active drafts and section manuscripts
- `06-revision/` — critique passes, consistency checks, theory-grounded audits, and CAP-style synthesis artifacts
- `07-polish-and-publish/` — publication checklist, metadata templates, and launch verification
- `prompts/` — reusable AI prompt templates for drafting, critique, and metadata generation
- `workflows/` — editorial workflow from idea through publication
- `references/` — shared source notes, vocabularies, and research references

## Suggested workflow

1. Start each new guide in `00-start-here/` with a brief and intended reader outcome.
2. Build structure through `01`–`04` before writing deeper draft content in `05`.
3. Use `06` for critique and consistency review before preparing publishable assets in `07`.
4. Keep prompt assets, workflow notes, and shared references here so the planning system stays separate from the React app code in `src/`.
5. Phase `06` can hold CAP Narrative Profile-aligned revision artifacts such as `06-revision/cap-narrative-profile.md` and planning surfaces such as `06-revision/publication-backlog-table.md`, `06-revision/publication-scene-cards.md`, `06-revision/publication-post-packets.md`, and `06-revision/publication-evidence-packets.md` without changing the blog package surface.

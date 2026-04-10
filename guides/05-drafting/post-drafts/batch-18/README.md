# Batch 18 Drafts

*Final gap-closure wave: privacy mechanism depth -> protocol motivation -> end-to-end capstone synthesis.*

## Included drafts

1. `01-selective-disclosure-explained.md`
   - Role: legacy merge source for the canonical `selective-disclosure` explainer
   - Reader shift: `serious -> design_ready` (preserve only stronger comparison detail)
   - CTA: `selective-disclosure`
2. `02-why-the-marty-protocol-exists.md`
   - Role: protocol motivation bridge
   - Reader shift: `oriented -> structured`
   - CTA: `the-marty-identity-model`
3. `03-how-everything-works-together.md`
   - Role: capstone synthesis
   - Reader shift: `structured -> design_ready`
   - CTA: `mip-json-schemas-walkthrough`

## Why this batch belongs together

The governance, trust-infrastructure, wallet-holder, and primitive deep-dive recovery waves repaired almost everything the publication still needed.

What remained were the last three stubborn gaps:

- one legacy privacy draft whose strongest mechanism-comparison detail might still be worth folding into the canonical `selective-disclosure` explainer
- one protocol-motivation post that explains why MIP had to exist after the category reframe was already clear
- one capstone post that finally shows the full five-primitives system moving end to end

These three drafts belong together because they close the last editorial holes from opposite ends.

`selective-disclosure-explained` now functions as a legacy merge source rather than a permanent fourth destination in the privacy branch. If it contains a sharper mechanism-comparison table or a cleaner “lightest mechanism that works” framing, fold that into `selective-disclosure`, then route narrower follow-on questions to `sd-jwt-selective-disclosure-deep-dive` or `selective-disclosure-in-wallets`.

`why-the-marty-protocol-exists` sits between the broad category argument in `why-identity-needs-a-protocol` and the stable object grammar in `the-marty-identity-model`.

`how-everything-works-together` then uses the now-complete publication to land the capstone synthesis that the map, model, and primitive deep dives were all preparing for.

This batch is the final upstream-first cleanup wave, not a new content branch.

## Best follow-on paths

### Privacy mechanism path

1. `minimum-disclosure-is-a-policy-problem`
2. `selective-disclosure`
3. `sd-jwt-selective-disclosure-deep-dive`
4. `selective-disclosure-in-wallets`

`selective-disclosure-explained` is now treated as a legacy merge / redirect surface rather than a standing step in the privacy reader path.

### Protocol synthesis path

1. `why-identity-needs-a-protocol`
2. `why-the-marty-protocol-exists`
3. `the-marty-identity-model`
4. `five-primitives-in-one-picture`
5. `how-everything-works-together`
6. `mip-json-schemas-walkthrough`

## Inputs used

These drafts were written against the aligned planning stack in:

- `../../priority-draft-briefs.md`
- `../../../06-revision/publication-scene-cards.md`
- `../../../06-revision/publication-post-packets.md`
- `../../../06-revision/publication-evidence-packets.md`
- `../../../06-revision/cap-narrative-profile.md`
- `../../../02-characters/author-character-profiles.md`

They also rely on upstream source material from:

- `marty-blog/src/data/blogPosts.js`
- `marty-blog/src/data/articleMeta.js`
- `marty-blog/guides/05-drafting/post-drafts/release-path-01-opening-to-evaluation.md`
- `marty-protocol/README.md`
- the live privacy, protocol, and synthesis posts already published in `src/data/blogPosts.js`

## Follow-on status

After these drafts are converted and merged, the main follow-on work is:

- confirm whether `selective-disclosure-explained` contains any comparison detail worth merging into `selective-disclosure`; otherwise treat it as a retire / redirect candidate rather than a standing privacy-path destination
- confirm that `why-the-marty-protocol-exists` distinguishes the need for a minimum shared model from both the launch announcement and the broader category-reframe article
- validate that `how-everything-works-together` reads like a capstone in motion rather than a repeat of `five-primitives-in-one-picture` or `the-marty-identity-model`
- rerun stub and related-link validation so the final three placeholders are actually gone

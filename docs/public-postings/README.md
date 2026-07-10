# Public Posting Ledgers

This directory stores public communication ledgers for ElevenID LLC social activity associated with Marty Blog publishing and audience-building work.

## Current Ledger

- `linkedin-comment-ledger.md`: source of truth for external LinkedIn comments and follow-up replies made as ElevenID LLC.

## Ownership

The ledger belongs in the Marty Blog project because it records public content-adjacent communication, approvals, and evidence for audience development around Marty and ElevenID LLC publishing.

The automation that discovers, drafts, posts, replies, and verifies LinkedIn engagement belongs in the sibling Hermes BPM project, whose local workspace folder is `Ai-employees`:

- `../../../Ai-employees/tools/linkedin_engagement/`
- `../../../Ai-employees/scripts/linkedin_engagement.py`
- `../../../Ai-employees/skills/linkedin-engagement/SKILL.md`

## Ledger Rules

- `LI-COM-*` entries are top-level external comments.
- `LI-REP-*` entries are follow-up replies.
- Drafted entries are not eligible for posting.
- Posting requires explicit human approval in the ledger.
- Published entries must record status, evidence, and whether the public actor was ElevenID LLC.
- Do not use Adam's personal profile as the public actor.

## Evidence

LinkedIn run evidence is produced by Hermes BPM under:

```text
../../../Ai-employees/data/linkedin-engagement/runs/<run-id>/
```

Ledger entries should reference the relevant screenshot, text capture, JSON result, or diagnostic artifact from that run.

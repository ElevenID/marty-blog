# Blog UX Overhaul Plan

> Diagnosis: strong content, weak instructional hierarchy. The blog should behave like a **guided protocol learning center**, not a chronological feed.

---

## Phase 1 — Data Layer (no UI changes)

All Phase 1 work happens in `src/data/`. These are the structural additions that every later phase depends on.

### 1.1 Add `series` field to `BLOG_POSTS`

**File:** `src/data/blogPosts.js`

Add a `seriesId` and `seriesOrder` field to each post that belongs to a series.

```js
{
  slug: 'trust-profiles-explained',
  seriesId: 'five-primitives',
  seriesOrder: 1,
  // ... existing fields
}
```

Create a new export `BLOG_SERIES` in a new file `src/data/blogSeries.js`:

```js
export const BLOG_SERIES = [
  {
    id: 'foundations',
    title: 'Foundations',
    description: 'Start here if you are new to digital identity.',
    posts: [
      'what-is-digital-identity',
      'what-is-a-verifiable-credential',
      'issuers-holders-verifiers-explained',
      'what-is-verification',
    ],
  },
  {
    id: 'five-primitives',
    title: 'The Five Primitives',
    description: 'The core objects that make the Marty Protocol work.',
    posts: [
      'trust-profiles-explained',
      'credential-templates-explained',
      'presentation-policies-explained',
      'deployment-profiles-explained',
      'flows-orchestrating-the-identity-lifecycle',
    ],
  },
  {
    id: 'pki-for-identity',
    title: 'PKI for Identity',
    description: 'Certificate chains, trust anchors, and passport PKI.',
    posts: [
      'public-key-infrastructure-explained',
      'understanding-trust-anchors',
      'certificate-chains-and-validation',
      'how-passport-pki-works',
      'understanding-csca-certificates',
    ],
  },
  {
    id: 'privacy-and-disclosure',
    title: 'Privacy & Disclosure',
    description: 'Selective disclosure, data minimization, and zero-knowledge proofs.',
    posts: [
      'minimum-disclosure-is-a-policy-problem',
      'selective-disclosure',
      'privacy-data-minimization',
      'sd-jwt-selective-disclosure-deep-dive',
      'zero-knowledge-predicates-in-identity',
    ],
  },
  // additional series TBD from backlog
];
```

Re-export from `src/data/index.js`.

### 1.2 Add `section` field to `BLOG_POSTS`

Each post gets a `section` string for structured zone placement:

| section value          | Display zone                   |
|------------------------|--------------------------------|
| `featured`             | Featured (manually pinned)     |
| `start-learning`       | Start Here / Foundations       |
| `core-protocol`        | Core Marty Protocol            |
| `implementation`       | Implementation Guides          |
| `cryptography`         | Trust, PKI & Cryptography      |
| `business`             | Industry & Business            |
| (default/empty)        | Archive / Recent Articles      |

### 1.3 Add one-sentence `cardSummary` field

A dedicated summary capped to ~120 chars for card rendering, separate from the longer `summary` used on the full post page. If absent, fall back to `summary`.

### 1.4 Activate tag filtering

`BlogPage.jsx` already sets `?tag=` in the URL but never reads it. Wire up the tag filter:

- Read `tag` from `searchParams`
- Filter `gridPosts` against `BLOG_POST_CONCEPT_TAGS[post.slug]`

### 1.5 Expand `CATEGORIES` to protocol-aligned values

Replace the current flat category list:

```js
// Before
['All', 'Business', 'Technical', 'Cryptography', 'Guide', 'Announcement']

// After
['All', 'Foundations', 'Protocol', 'Wallets', 'Verification', 'Issuance',
 'PKI', 'Cryptography', 'Governance', 'Compliance', 'Deployments', 'Business']
```

Migrate existing posts' `category` values to the new set. Keep backward compat (old values map to new).

---

## Phase 2 — Blog Page Layout Overhaul

All work in `src/components/BlogPage.jsx` (and new extracted components).

### 2.1 New component: `HeroSection`

Replace the current header with a learning-hub hero:

```
Blog / Learn the Marty Protocol
Technical insights, implementation guides, trust architecture, and identity strategy.

[ New to verifiable identity? Start with the fundamentals ]
[ Implementing Marty? Go to technical guides ]
```

Two clear CTA buttons. The first scrolls/links to Start Here; the second links to Implementation Guides section or docs.

### 2.2 New component: `StartHereSection`

Sits directly below the hero, **above** everything else. Visually prominent card or banner:

```
Start Here

1. What Is Digital Identity?
2. What Is a Verifiable Credential?
3. Issuers, Holders, Verifiers
4. What Is Verification?
5. The Five Primitives in One Picture
6. Flows: Orchestrating the Identity Lifecycle
```

Each item is a clickable link to the corresponding blog post. Numbered, with a subtle progress indicator if the guide system already tracks chapter position.

### 2.3 New component: `ProtocolDiagramSection`

Below Start Here. Shows the core Marty protocol diagram with labels:

- Trust Profiles — who is trusted
- Credential Templates — what is issued
- Presentation Policies — what must be shown
- Deployment Profiles — where it runs
- Flows — how it all executes

Two CTA buttons: **Read the guide** → first guide article; **See the API docs** → docs site.

The diagram itself can be an SVG or a styled MUI layout initially. A proper designed SVG can be swapped in later.

### 2.4 Refactor `ProtocolGuideSection`

Keep the chapter chip selector + article card grid, but rebrand as a **visual learning track**. Increase visual weight: larger cards, step-number badges, progress feel. Move it into the Start Here / diagram zone rather than appearing as "just another section."

### 2.5 New component: `ChooseYourPathSection`

Between the diagram and the article feed. Four path cards:

| Path | Leads to |
|------|----------|
| Learn the concepts | Start Here / Guide chapter 1 |
| Implement issuance | Implementation section filtered to issuance |
| Implement verification | Implementation section filtered to verification |
| Explore PKI and standards | Cryptography section |

### 2.6 New component: `SectionedArticleFeed`

Replace the current single flat grid with structured zones:

1. **Featured** — 1–3 flagship posts (manually tagged `section: 'featured'`)
2. **Series blocks** — render each `BLOG_SERIES` as a horizontal scrollable card row with series title, description, and numbered post cards
3. **Implementation Guides** — filtered section
4. **Trust, PKI & Cryptography** — filtered section
5. **Industry & Business** — filtered section
6. **Recent Articles** — chronological, paginated (see 2.7)

Each section has a heading, a short description, and a "View all →" link that applies the corresponding category filter.

### 2.7 Pagination / Load More

Replace the unbounded grid with:

- Show first 9 posts per section (3 rows × 3 columns)
- **"Load More"** button at the bottom of each section
- Or a global "Load More Articles" at the very end for the archive

Implementation: local state `visibleCount` per section, increment by 9 on click.

---

## Phase 3 — Article Card Improvements

### 3.1 Enhanced `PostCard`

Update the grid card to show:

```
[Category chip]        [Series: The Five Primitives]
Title (bold)
One-sentence summary (from cardSummary)
──────────
Author avatar · Name · Date          8 min read
```

Changes:
- Add `cardSummary` rendering (fall back to `summary` truncated)
- Add series label chip (if `seriesId` present, lookup `BLOG_SERIES` title)
- Keep existing hover animation

### 3.2 Series navigation on `BlogPostPage`

When a post belongs to a series, show a nav bar at the top and bottom of the article:

```
Series: The Five Primitives  (2 of 5)
← Previous: Trust Profiles    Next: Presentation Policies →
```

Implement as a `SeriesNav` component rendered in `BlogPostPage.jsx`.

### 3.3 Related content links on `BlogPostPage`

At the bottom of each article, add:

- **Related API docs** — manual mapping (new data field `relatedDocs: [{ label, href }]` on post)
- **Next concept** — auto-derived from series or guide order
- **Related guide** — link to the matching guide chapter article if one exists

---

## Phase 4 — Search & Filtering

### 4.1 Full-text search

Extend the current search to also match against `content` blocks (paragraph text). Build a simple inverted index at module load time from `BLOG_POSTS`:

```js
const SEARCH_INDEX = BLOG_POSTS.map(p => ({
  slug: p.slug,
  text: [p.title, p.summary, ...(p.content || []).filter(b => b.text).map(b => b.text)].join(' ').toLowerCase(),
}));
```

Filter against this in the `useMemo`.

### 4.2 Filter chips update

Replace current `CATEGORIES` with the expanded protocol-aligned set from 1.5.

Render as a horizontally scrollable chip bar with overflow fade on mobile.

### 4.3 Tag cloud / secondary filters

Below the main category chips, add an expandable "Topics" row showing concept tags from `BLOG_POST_CONCEPT_TAGS` (deduplicated). Clicking a tag applies `?tag=` filter.

---

## Phase 5 — Author Transparency

### 5.1 Authors page disclosure

Add a prominent notice at the top of `AuthorsPage.jsx`:

```
About Our Authors

Articles are written by AI research personas trained on the Marty Identity
Protocol specification and identity architecture literature.
```

Render as a subtle `Paper` banner above the author card grid.

### 5.2 Per-article author disclosure

On `BlogPostPage`, show the author's `disclosure` field (already in data) in a collapsible section or tooltip near the author byline.

---

## Phase 6 — Blog ↔ Docs Bridge

### 6.1 `relatedDocs` field on posts

Add to `BLOG_POSTS` entries that have a docs counterpart:

```js
relatedDocs: [
  { label: 'Trust Profile API', href: '/docs/trust-profiles' },
]
```

### 6.2 Render on `BlogPostPage`

After the article content, show a "Related Documentation" card with links.

### 6.3 Docs-side backlinks (out of scope for marty-blog)

Note: the docs site should link back to matching blog guides. This is a separate task for the `marty-ui` docs components.

---

## Implementation Priority & Ordering

| Priority | Phase | Items | Impact |
|----------|-------|-------|--------|
| **P0** | 1.1, 1.2 | Series + section data fields | Unlocks all structured UI |
| **P0** | 2.1, 2.2 | Hero + Start Here | Single biggest UX improvement |
| **P1** | 2.3 | Protocol diagram | Fast comprehension |
| **P1** | 2.6, 2.7 | Sectioned feed + Load More | Reduces page fatigue |
| **P1** | 3.1 | Enhanced PostCard | Better scannability |
| **P2** | 1.5, 4.2 | Expanded categories | Better filtering |
| **P2** | 2.4, 2.5 | Refactored guide + Choose Your Path | Clearer onboarding |
| **P2** | 3.2 | Series nav on post pages | Reader retention |
| **P3** | 1.3, 3.1 | Card summaries | Polish |
| **P3** | 1.4, 4.3 | Tag filtering | Discovery |
| **P3** | 4.1 | Full-text search | Power users |
| **P3** | 5.1, 5.2 | Author transparency | Trust/credibility |
| **P3** | 6.1, 6.2 | Blog ↔ Docs bridge | Learning continuity |

---

## Ideal Top-of-Page Layout (Final State)

```
1. Hero                    — "Blog / Learn the Marty Protocol" + dual CTA
2. Start Here              — 6-item numbered learning ladder
3. Protocol Diagram        — visual overview of the five primitives
4. Choose Your Path        — 4 path cards (concepts / issuance / verification / PKI)
5. Featured Articles       — 1–3 flagship pieces
6. Series Blocks           — horizontal card rows per series
7. Latest Articles         — 9 posts + Load More
8. Archive link            — "Browse all articles →"
```

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/data/blogSeries.js` | `BLOG_SERIES` definitions |
| `src/components/HeroSection.jsx` | Learning-hub hero |
| `src/components/StartHereSection.jsx` | Guided entry point |
| `src/components/ProtocolDiagramSection.jsx` | Core diagram + labels |
| `src/components/ChooseYourPathSection.jsx` | 4 path cards |
| `src/components/SectionedArticleFeed.jsx` | Structured article zones |
| `src/components/SeriesNav.jsx` | In-article series navigation |
| `src/components/SeriesBlock.jsx` | Horizontal series card row |

## Files to Modify

| File | Changes |
|------|---------|
| `src/data/blogPosts.js` | Add `seriesId`, `seriesOrder`, `section`, `cardSummary`, `relatedDocs` fields |
| `src/data/index.js` | Re-export `BLOG_SERIES` |
| `src/components/BlogPage.jsx` | Replace layout with new component composition |
| `src/components/BlogPostPage.jsx` | Add `SeriesNav`, related docs, author disclosure |
| `src/components/AuthorsPage.jsx` | Add AI disclosure banner |

---

## What NOT to Change

- Guide system internals (`GUIDE_CHAPTERS`, `GUIDE_ARTICLES`, `ProtocolGuidePage`) — working well
- Author persona data structure — keep as-is
- SEO system — extend, don't replace
- Vite build config — no changes needed
- Editorial workspace (`guides/`) — separate concern

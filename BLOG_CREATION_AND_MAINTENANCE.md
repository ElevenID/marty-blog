# Blog Creation and Maintenance Guide

This document explains how `marty-blog` was assembled, which files are the real source of truth, and how to edit or extend the blog without breaking its structure.

## What this repository is

`marty-blog` is a standalone package named `@marty/blog`.
It is built independently, then consumed by `marty-ui` as a local package dependency.

That design matters because it separates:

- **published blog UI and content** in `src/`
- **editorial planning and drafting assets** in `guides/`
- **generated build output** in `dist/`

In short: this repo is both a publishable package and an editorial workspace, but those are not the same layer.

## How the blog was created

The current blog was built in four layers.

### 1. A standalone package layer

The blog was set up as its own Vite package rather than being hardcoded directly into `marty-ui`.

Key files:

- `package.json` — package metadata and build scripts
- `src/index.js` — package entry point for exported pages and data
- `src/data/index.js` — re-exports of blog data

This makes the blog reusable and keeps content changes separate from the main application.

### 2. A data-driven content layer

The public site is driven mostly by JavaScript data objects rather than markdown files rendered directly at runtime.

The published content lives in:

- `src/data/blogPosts.js` — standalone blog posts
- `src/data/guideContent.js` — protocol guide chapters and guide articles
- `src/data/blogAuthors.js` — author personas and metadata
- `src/data/blogRoadmap.js` — roadmap and avatar prompt metadata

React components render those objects into pages.

### 3. A separate editorial workspace

The `guides/` directory is the working area for planning, drafting, review, and publication prep.
It follows the phase model documented in `guides/README.md`.

Important distinction:

- `guides/` contains **working editorial material**
- `src/data/` contains **what the package actually publishes**

Editing a draft in `guides/` does **not** automatically publish it.

### 4. A draft-conversion step

Long-form draft posts were written in markdown under:

- `guides/05-drafting/post-drafts/`

Those drafts were then converted into the `BLOG_POSTS` format using:

- `scripts/convert-drafts.mjs`

That script reads markdown drafts, converts headings/lists/tables/code into the blog package's content-block format, and emits JavaScript-ready post objects for insertion into `src/data/blogPosts.js`.

The converter now auto-discovers `batch-*` folders under `guides/05-drafting/post-drafts/`, so new batches do **not** require a manual `BATCH_DIRS` update.

So the current live blog is not “markdown rendered directly.”
It is “markdown drafted in `guides/`, then converted into structured JS data for the package.”

## Where progress is tracked

The main editorial status tracker is:

- `EDITORIAL_IMPROVEMENTS.md`

Use that file to see which recovery wave is complete, which backlog items are still open, and how many live stub posts remain.

Use `BLOG_CREATION_AND_MAINTENANCE.md` for **process**, not for the authoritative live cleanup status.

## Source of truth by file

Use this table when deciding where to make a change.

| If you want to change… | Edit this file | Notes |
| --- | --- | --- |
| A published standalone blog post | `src/data/blogPosts.js` | This is the live source for standalone posts |
| A published guide article | `src/data/guideContent.js` | Guide articles are published from JS data, not from `guides/` |
| Author metadata or persona details | `src/data/blogAuthors.js` | Includes both public author cards and deeper character profiles |
| Roadmap metadata | `src/data/blogRoadmap.js` | Used for roadmap/planning surfaces |
| Editorial planning or draft prose | `guides/` | Working source, not automatically published |
| Editorial progress / cleanup status | `EDITORIAL_IMPROVEMENTS.md` | Use this as the live tracker for waves, stub counts, and remediation status |
| Page behavior or rendering | `src/components/*.jsx` | Change this when you need new UI or new block rendering |
| Generated bundle output | `dist/` | Do not edit by hand; rebuild instead |

## How to edit existing content

### Edit a standalone blog post

Edit the relevant object inside `src/data/blogPosts.js`.

Each post should include:

- `slug`
- `title`
- `summary`
- `authorId`
- `date`
- `category`
- `readTime`
- `content`

Important rendering rule:

- `BlogPostPage.jsx` currently renders **`heading`** and **`paragraph`** blocks for blog posts.
- If you add a new block type to a blog post, it will not render correctly until `src/components/BlogPostPage.jsx` is extended to support it.

If you only need to fix wording, update the existing post object and rebuild.

### Edit a guide article

Edit the relevant entry in `src/data/guideContent.js`.

Guide articles support a richer content model than standalone blog posts.
`ProtocolGuidePage.jsx` currently supports:

- `paragraph`
- `heading`
- `code`

Guide articles also include:

- `chapterId`
- `order`
- `conceptTags`

If you are editing guide prose that should already be live, change `src/data/guideContent.js`.
If you are editing planning or future-draft material, change files under `guides/` instead.

### Edit an author

Edit `src/data/blogAuthors.js`.

For an existing author, you will usually update the `BLOG_AUTHORS` entry.
For a new persona or a deeper narrator update, also update the matching entry in `BLOG_AUTHOR_CHARACTER_PROFILES`.

## How to add new content

### Add a new standalone post directly

1. Add or confirm the author in `src/data/blogAuthors.js`
2. Add the new post object in `src/data/blogPosts.js`
3. If the post should expose concept tags, update `BLOG_POST_CONCEPT_TAGS` in `src/data/guideContent.js`
4. Rebuild the package

Use this path when the post is already final or when you are making a direct JS-data edit.

### Promote a markdown draft into the live blog

Use this path when the prose is being written inside the editorial system first.

1. Create or update the planning layer first:
	- `guides/05-drafting/priority-draft-briefs.md`
	- `guides/06-revision/publication-scene-cards.md`
	- `guides/06-revision/publication-post-packets.md`
	- `guides/06-revision/publication-evidence-packets.md` when proof surfaces need strengthening
2. Draft or revise the markdown in `guides/05-drafting/post-drafts/`
3. Run the converter and capture its output
4. Review the generated post objects
5. Insert the generated entries into `src/data/blogPosts.js`
6. Update metadata surfaces that the converter does not manage automatically (`articleMeta.js`, `blogSeries.js`, tag sidecars in `guideContent.js`, and any tracker notes)
7. Rebuild and verify the result

Important notes about the converter:

- Lists are flattened into paragraph text
- Tables are converted into readable paragraph text
- Code blocks are emitted by the script, but standalone blog posts do not currently render code blocks unless `BlogPostPage.jsx` is extended
- Batch folders named `batch-*` are auto-discovered by the converter
- The script is a helper, not a full publishing pipeline; human review is still required before merging output into `blogPosts.js`

### Add a new guide article

1. Add a new object to `GUIDE_ARTICLES` in `src/data/guideContent.js`
2. Assign the correct `chapterId` and `order`
3. Add `conceptTags` if needed
4. Rebuild and verify navigation

The derived lookups at the bottom of `guideContent.js` are generated from `GUIDE_ARTICLES`, so they usually do not need manual editing.

### Add a new guide chapter

1. Add the chapter entry to `GUIDE_CHAPTERS` in `src/data/guideContent.js`
2. Add one or more guide articles pointing at that chapter via `chapterId`
3. Rebuild and check the guide stepper, sidebar, and chapter cards

The UI is already data-driven, so new chapters generally flow through automatically once the source arrays are correct.

## How to extend the blog safely

### Add a new category

If you introduce a category outside the current set (`Business`, `Technical`, `Cryptography`, `Guide`, `Announcement`), update:

- `CATEGORIES` in `src/components/BlogPage.jsx`
- `CATEGORY_COLORS` in `src/components/BlogPage.jsx`
- `CATEGORY_COLORS` in `src/components/BlogPostPage.jsx`

Without this, the new category may not filter correctly or may render with inconsistent chip styling.

### Add a new content block type

If you want to support blocks beyond the current set:

1. Extend the renderer in `src/components/BlogPostPage.jsx` and/or `src/components/ProtocolGuidePage.jsx`
2. Update any content-generation helpers such as `scripts/convert-drafts.mjs`
3. Rebuild and preview the result

Do not add a new block type to data first and hope the renderer “figures it out.” React is good, but not psychic.

### Add new concept tags

For blog-post-level concept tags, update:

- `BLOG_POST_CONCEPT_TAGS` in `src/data/guideContent.js`

If you want custom colors for new guide tags, update:

- `TAG_COLORS` in `src/components/ProtocolGuidePage.jsx`

If you skip the color mapping, the tag can still render, but it will fall back to a default appearance.

## Build and verification

The normal package workflow is:

1. Edit source files in `src/` and/or `guides/`
2. Run a build from this repository
3. Restart or refresh the consuming app if needed

Key rules:

- Use `npm run build` for a one-time package build
- Use `npm run dev` for watch mode while editing
- Do **not** hand-edit `dist/`
- After changing package content, ensure the consuming `marty-ui` app picks up the rebuilt output

### Useful commands

Run these from the `marty-blog` repository root:

```bash
npm install
npm run build
npm run dev
node scripts/convert-drafts.mjs > /tmp/converted-posts.js
```

The converter command generates JS-ready post objects from the markdown drafts in `guides/05-drafting/post-drafts/`.
Review that output before merging it into `src/data/blogPosts.js`.

## Recommended editorial workflow

For new or substantial content work, follow the editorial system rather than editing blindly.

Start here:

- `guides/workflows/editorial-workflow.md`
- `guides/07-polish-and-publish/publication-checklist.md`
- `guides/README.md`

That workflow is the best path when you need to:

- evaluate whether a topic belongs in the blog
- define the post-level contract and scene stack before drafting prose
- assign the right persona voice
- draft from source material
- run review and revision passes before publication

## Practical guardrails

When in doubt, keep these rules in mind:

- **Edit `src/data/` when you want something to be live**
- **Edit `guides/` when you are planning, drafting, or reviewing**
- **Edit `src/components/` when the content model or UI behavior must change**
- **Never treat `dist/` as editable source**
- **Rebuild after any published-content change**
- **If you add new structure, update the renderer and the metadata surfaces together**

If you follow those rules, this repo stays pleasantly boring — which is exactly what good publishing infrastructure should be.

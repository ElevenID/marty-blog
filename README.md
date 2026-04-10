# marty-blog

Marty Identity Protocol blog — posts, authors, and protocol guide components.

This package is developed independently and imported by `marty-ui`.

## Structure

```
src/
  components/       # React page components
    BlogPage.jsx
    BlogPostPage.jsx
    AuthorsPage.jsx
    AuthorPage.jsx
    ProtocolGuidePage.jsx
  data/             # Blog content and guide curriculum
    blogAuthors.js  # BLOG_AUTHORS
    blogPosts.js    # BLOG_POSTS
    blogRoadmap.js  # BLOG_ROADMAP + AUTHOR_AVATAR_PROMPTS
    guideContent.js # Protocol guide chapters and articles
    index.js        # Re-exports all data
  seo/              # SEO head component (self-contained)
    SEOHead.jsx
    structuredData.js
    index.js
  index.js          # Package entry — exports components and data
```

## Development

```bash
npm install
npm run dev    # Watch mode — rebuilds on change
npm run build  # One-time build to dist/
```

## Using in marty-ui

`marty-ui/ui/package.json` references this package:

```json
"@marty/blog": "file:../../marty-blog"
```

After changing content in this package, run `npm run build` (or keep `npm run dev`
running), then restart the marty-ui dev server so it picks up the rebuilt `dist/`.

## Adding Content

- **New blog post**: Add an entry to `src/data/blogPosts.js`
- **New author**: Add an entry to `src/data/blogAuthors.js`
- **New guide article**: Add to `src/data/guideContent.js` `GUIDE_ARTICLES` array
- **Roadmap update**: Edit `src/data/blogRoadmap.js`

## Documentation

- `BLOG_CREATION_AND_MAINTENANCE.md` — how this package was assembled, where the source of truth lives, and how to edit or extend it safely
- `guides/README.md` — how the editorial workspace is organized

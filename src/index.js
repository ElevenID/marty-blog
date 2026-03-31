/**
 * @marty/blog — package entry point
 *
 * Exports all blog components and data for use in marty-ui (or any host app).
 *
 * Usage in marty-ui:
 *
 *   import { BlogPage, BlogPostPage, AuthorsPage, AuthorPage } from '@marty/blog';
 *   import { BLOG_POSTS, BLOG_AUTHORS, GUIDE_CHAPTERS } from '@marty/blog/data';
 */

// ── Page components ────────────────────────────────────────────────────────────
export { default as BlogPage } from './components/BlogPage';
export { default as BlogPostPage } from './components/BlogPostPage';
export { default as AuthorsPage } from './components/AuthorsPage';
export { default as AuthorPage } from './components/AuthorPage';
export { default as ProtocolGuidePage } from './components/ProtocolGuidePage';

// ── Data ───────────────────────────────────────────────────────────────────────
export {
  BLOG_AUTHORS,
  BLOG_POSTS,
  BLOG_ROADMAP,
  AUTHOR_AVATAR_PROMPTS,
  GUIDE_CHAPTERS,
  GUIDE_ARTICLES,
  GUIDE_ARTICLE_MAP,
  GUIDE_ARTICLE_SLUGS,
  GUIDE_ARTICLES_BY_CHAPTER,
  BLOG_POST_CONCEPT_TAGS,
} from './data';

// ── SEO utilities (available for the host app if needed) ──────────────────────
export { default as SEOHead } from './seo/SEOHead';
export { articleSchema, organizationSchema, softwareApplicationSchema } from './seo/structuredData';

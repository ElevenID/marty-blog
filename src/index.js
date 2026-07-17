/**
 * @marty/blog - package entry point
 *
 * Exports all blog components and data for use in marty-ui (or any host app).
 *
 * Usage in marty-ui:
 *
 *   import { BlogPage, BlogPostPage, AuthorsPage, AuthorPage } from '@marty/blog';
 *   import { BLOG_POSTS, BLOG_AUTHORS, GUIDE_CHAPTERS } from '@marty/blog/data';
 */

// Page components
export { default as BlogPage } from './components/BlogPage.jsx';
export { default as BlogPostPage } from './components/BlogPostPage.jsx';
export { default as AuthorsPage } from './components/AuthorsPage.jsx';
export { default as AuthorPage } from './components/AuthorPage.jsx';
export { default as ProtocolGuidePage } from './components/ProtocolGuidePage.jsx';
export { default as FoundationsPage } from './components/FoundationsPage.jsx';

// Shared components
export { default as Breadcrumbs } from './components/Breadcrumbs.jsx';
export { default as ReadingProgressBar } from './components/ReadingProgressBar.jsx';
export { default as AIDisclosureBanner } from './components/AIDisclosureBanner.jsx';
export { default as ProductBridgeCTA } from './components/ProductBridgeCTA.jsx';

// Data
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
  BLOG_POST_STANDARDS_TAGS,
  BLOG_SERIES,
  SERIES_BY_POST_SLUG,
  SERIES_BY_ID,
  SECTION_BY_SLUG,
  START_HERE_SLUGS,
  ARTICLE_META,
  LAYER_COLORS,
  DIFFICULTY_COLORS,
} from './data/index.js';

// SEO utilities (available for the host app if needed)
export { default as SEOHead } from './seo/SEOHead.jsx';
export {
  articleSchema,
  collectionPageSchema,
  organizationSchema,
  personSchema,
  softwareApplicationSchema,
} from './seo/structuredData.js';

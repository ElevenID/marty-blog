// Node-compatible, dependency-light interface used by host build tooling.
// Keep explicit extensions here and in the imported data modules so this
// entry point can be loaded directly by Node as well as by Vite.
export { BLOG_POSTS } from './data/blogPosts.js';
export { BLOG_AUTHORS } from './data/blogAuthors.js';
export {
  BLOG_POST_CONCEPT_TAGS,
  BLOG_POST_STANDARDS_TAGS,
  GUIDE_ARTICLE_SLUGS,
  GUIDE_ARTICLES,
  GUIDE_CHAPTERS,
} from './data/guideContent.js';
export { ARTICLE_META } from './data/articleMeta.js';
export { getBrowseVisiblePosts } from './data/articleBrowseVisibility.js';
export { buildBlogTagPath } from './utils/blogTagRoutes.js';

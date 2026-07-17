/**
 * Data index
 *
 * Re-exports all blog data so consumers can import from a single path:
 *   import { BLOG_POSTS, BLOG_AUTHORS } from '../data/index.js'
 */

export { BLOG_AUTHORS, BLOG_AUTHOR_CHARACTER_PROFILES } from './blogAuthors.js';
export { BLOG_POSTS } from './blogPosts.js';
export { BLOG_ROADMAP, AUTHOR_AVATAR_PROMPTS } from './blogRoadmap.js';
export {
  HANDBOOK_PARTS,
  HANDBOOK_ARTICLE_SLUGS,
  HANDBOOK_ARTICLE_CONTEXT_BY_SLUG,
  isHandbookArticleSlug,
  getHandbookArticleNavigation,
} from './handbookContent.js';
export {
  GUIDE_CHAPTERS,
  GUIDE_ARTICLES,
  GUIDE_ARTICLE_MAP,
  GUIDE_ARTICLE_SLUGS,
  GUIDE_ARTICLES_BY_CHAPTER,
  BLOG_POST_CONCEPT_TAGS,
  BLOG_POST_STANDARDS_TAGS,
} from './guideContent.js';
export {
  BLOG_SERIES,
  SERIES_BY_POST_SLUG,
  SERIES_BY_ID,
  SECTION_BY_SLUG,
  START_HERE_SLUGS,
} from './blogSeries.js';
export {
  ARTICLE_META,
  LAYER_COLORS,
  DIFFICULTY_COLORS,
} from './articleMeta.js';
export {
  BLOG_SOCIAL_BRAND_ASSETS,
  BLOG_SOCIAL_IMAGE_BY_SLUG,
  DEFAULT_BLOG_SOCIAL_IMAGE_PATH,
  SOCIAL_IMAGE_PLATFORM_SPECS,
  getBlogSocialImageAlt,
  getBlogSocialImagePath,
  getBlogSocialImagePrompt,
  getBlogSocialImageSet,
  getBlogSocialImageUrl,
} from './blogSocialImages.js';

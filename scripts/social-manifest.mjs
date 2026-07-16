import { createHash } from 'node:crypto';

import { getCanonicalArticleSlug } from '../src/data/articleMeta.js';
import { getBrowseVisiblePosts } from '../src/data/articleBrowseVisibility.js';
import { BLOG_POST_SUMMARIES } from '../src/data/blogPostSummaries.js';
import {
  getBlogSocialImageAlt,
  getBlogSocialImagePath,
  getBlogSocialImagePrompt,
  getBlogSocialImageSet,
  getBlogSocialImageUrl,
} from '../src/data/blogSocialImages.js';

export const DEFAULT_BLOG_BASE_URL = 'https://elevenidllc.com';

function cleanBaseUrl(baseUrl) {
  return String(baseUrl || DEFAULT_BLOG_BASE_URL).replace(/\/+$/, '');
}

export function canonicalBlogUrl(slug, baseUrl = DEFAULT_BLOG_BASE_URL) {
  return `${cleanBaseUrl(baseUrl)}/blog/${getCanonicalArticleSlug(slug)}`;
}

export function sourceHashForPost(post, canonicalUrl = canonicalBlogUrl(post.slug)) {
  const canonicalSlug = getCanonicalArticleSlug(post.slug);
  const stablePayload = {
    slug: canonicalSlug,
    title: post.title,
    summary: post.summary,
    authorId: post.authorId,
    date: post.date,
    updatedDate: post.updatedDate || '',
    category: post.category,
    readTime: post.readTime || '',
    content: post.content || [],
    canonicalUrl,
    socialImagePath: getBlogSocialImagePath(canonicalSlug),
  };

  return createHash('sha256')
    .update(JSON.stringify(stablePayload))
    .digest('hex');
}

export function buildSocialManifest(posts = BLOG_POST_SUMMARIES, options = {}) {
  const baseUrl = options.baseUrl || process.env.BLOG_CANONICAL_BASE_URL || DEFAULT_BLOG_BASE_URL;

  return getBrowseVisiblePosts(posts).map((post) => {
    const canonicalSlug = getCanonicalArticleSlug(post.slug);
    const canonicalUrl = canonicalBlogUrl(post.slug, baseUrl);
    const socialImages = getBlogSocialImageSet(canonicalSlug, baseUrl);
    return {
      slug: canonicalSlug,
      title: post.title,
      summary: post.summary,
      authorId: post.authorId,
      date: post.date,
      category: post.category,
      canonicalUrl,
      socialImagePath: getBlogSocialImagePath(canonicalSlug),
      socialImageUrl: getBlogSocialImageUrl(canonicalSlug, baseUrl),
      socialImageAlt: getBlogSocialImageAlt(post.title || canonicalSlug),
      socialImages,
      imageGenerationPrompt: getBlogSocialImagePrompt(post),
      imageReviewStatus: 'seeded_placeholder',
      sourceHash: sourceHashForPost(post, canonicalUrl),
    };
  });
}

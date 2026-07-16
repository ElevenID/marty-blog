import { describe, expect, it } from 'vitest';
import {
  BLOG_POST_CONCEPT_TAGS,
  BLOG_POST_STANDARDS_TAGS,
  GUIDE_ARTICLES,
  GUIDE_CHAPTERS,
} from '../data/guideContent.js';
import { BLOG_POSTS } from '../data/blogPosts.js';
import { ARTICLE_META, getBrowseVisiblePosts } from '../data/articleMeta.js';
import {
  buildBlogTagPath,
  buildCanonicalBlogTagPath,
  findMatchingTagLabel,
  slugifyTag,
} from '../utils/blogTagRoutes.js';

describe('blog tag routes', () => {
  it('slugifies visible technical tag labels into stable ASCII paths', () => {
    expect(slugifyTag('X.509')).toBe('x-509');
    expect(slugifyTag('BBS+')).toBe('bbs-plus');
    expect(slugifyTag('Selective Disclosure')).toBe('selective-disclosure');
  });

  it('builds canonical tag paths without encoded punctuation variants', () => {
    expect(buildBlogTagPath('X.509')).toBe('/blog/tag/x-509');
    expect(buildBlogTagPath('BBS+')).toBe('/blog/tag/bbs-plus');
  });

  it('matches canonical slugs back to their visible tag labels', () => {
    const labels = ['X.509', 'BBS+', 'Selective Disclosure'];

    expect(findMatchingTagLabel('x-509', labels)).toBe('X.509');
    expect(findMatchingTagLabel('bbs-plus', labels)).toBe('BBS+');
    expect(buildCanonicalBlogTagPath('x.509', labels)).toBe('/blog/tag/x-509');
  });

  it('generates sitemap-ready tag paths without encoded punctuation variants', () => {
    const chapterById = Object.fromEntries(GUIDE_CHAPTERS.map((chapter) => [chapter.id, chapter]));
    const tagPaths = [];

    getBrowseVisiblePosts(BLOG_POSTS).forEach((post) => {
      const meta = ARTICLE_META[post.slug];
      const tags = new Set([
        ...(BLOG_POST_STANDARDS_TAGS[post.slug] || []),
        ...(BLOG_POST_CONCEPT_TAGS[post.slug] || []),
        ...(meta?.topic ? [meta.topic] : []),
      ]);

      tags.forEach((tag) => {
        tagPaths.push(buildBlogTagPath(tag));
      });
    });

    GUIDE_ARTICLES.forEach((article) => {
      const tags = new Set([
        ...(article.conceptTags || []),
        ...(chapterById[article.chapterId]?.title ? [chapterById[article.chapterId].title] : []),
      ]);

      tags.forEach((tag) => {
        tagPaths.push(buildBlogTagPath(tag));
      });
    });

    expect(tagPaths.length).toBeGreaterThan(0);
    expect(tagPaths.every((path) => path.startsWith('/blog/tag/'))).toBe(true);
    expect(tagPaths.some((path) => path.includes('%'))).toBe(false);
  });
});

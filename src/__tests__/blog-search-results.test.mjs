import { describe, expect, it } from 'vitest';

import { buildSearchResults, buildTagResults } from '../components/BlogPage';
import { BLOG_POSTS } from '../data/blogPosts';
import { GUIDE_ARTICLES, GUIDE_CHAPTERS } from '../data/guideContent';
import { getBrowseVisiblePosts } from '../data/articleMeta';

const browseVisiblePosts = [...getBrowseVisiblePosts(BLOG_POSTS)].sort(
  (a, b) => new Date(b.date) - new Date(a.date),
);

describe('blog search results', () => {
  it('surfaces guide-owned collision slugs as guide results', () => {
    const results = buildSearchResults(
      'offline verification',
      browseVisiblePosts,
      GUIDE_ARTICLES,
      GUIDE_CHAPTERS,
    );

    expect(results.some((result) => result.kind === 'guide' && result.slug === 'offline-verification-guide')).toBe(true);
    expect(results.some((result) => result.kind === 'post' && result.slug === 'offline-verification-guide')).toBe(false);
  });

  it('prefers the browse-visible blog owner when a guide shares the same slug', () => {
    const results = buildSearchResults(
      'selective disclosure',
      browseVisiblePosts,
      GUIDE_ARTICLES,
      GUIDE_CHAPTERS,
    );

    const slugMatches = results.filter((result) => result.slug === 'selective-disclosure');

    expect(slugMatches).toHaveLength(1);
    expect(slugMatches[0]).toMatchObject({ kind: 'post', slug: 'selective-disclosure' });
  });

  it('builds topic tag results from browse-visible posts', () => {
    const results = buildTagResults(
      'Privacy & Disclosure',
      browseVisiblePosts,
      GUIDE_ARTICLES,
      GUIDE_CHAPTERS,
    );

    expect(results.some((result) => result.kind === 'post' && result.slug === 'selective-disclosure')).toBe(true);
    expect(results.some((result) => result.kind === 'post' && result.slug === 'minimum-disclosure-is-a-policy-problem')).toBe(true);
  });

  it('builds guide tag results from chapter titles', () => {
    const results = buildTagResults(
      'Implementations',
      browseVisiblePosts,
      GUIDE_ARTICLES,
      GUIDE_CHAPTERS,
    );

    expect(results.some((result) => result.kind === 'guide' && result.slug === 'impl-oid4vci')).toBe(true);
  });
});
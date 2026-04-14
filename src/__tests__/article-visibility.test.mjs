import { describe, expect, it } from 'vitest';

import { BLOG_POSTS } from '../data/blogPosts';
import {
  ARTICLE_META,
  getBrowseVisiblePosts,
  getCanonicalArticleSlug,
  getLegacyArticleMeta,
  isBrowseVisibleArticleSlug,
} from '../data/articleMeta';
import {
  ARTICLE_BROWSE_PRIMITIVES_BY_SLUG,
  ARTICLE_BROWSE_TOPICS_BY_SLUG,
} from '../data/articleBrowseContext';
import {
  BROWSE_HIDDEN_ARTICLE_SLUGS,
  LEGACY_ARTICLE_SLUGS,
} from '../data/articleBrowseVisibility';

const TODAY_ISO = new Date().toISOString().split('T')[0];

const GUIDE_CANONICAL_COLLISION_SLUGS = [
  'deployment-profiles-in-practice',
  'offline-verification-guide',
  'compliance-profiles-in-practice',
  'deploy-airline-boarding',
  'deploy-age-verification',
  'deploy-enterprise-access',
  'deploy-membership-credentials',
  'impl-oid4vci',
  'impl-oid4vp',
];

describe('article visibility metadata', () => {
  it('marks selective-disclosure-explained as a legacy merge surface', () => {
    expect(isBrowseVisibleArticleSlug('selective-disclosure-explained')).toBe(false);
    expect(getCanonicalArticleSlug('selective-disclosure-explained')).toBe('selective-disclosure');
    expect(getLegacyArticleMeta('selective-disclosure-explained')).toMatchObject({
      status: 'legacy',
      canonicalSlug: 'selective-disclosure',
    });
  });

  it('keeps the canonical disclosure explainer browse-visible', () => {
    expect(isBrowseVisibleArticleSlug('selective-disclosure')).toBe(true);
    expect(getCanonicalArticleSlug('selective-disclosure')).toBe('selective-disclosure');
  });

  it('excludes legacy merge surfaces from browse-visible post lists', () => {
    const visibleSlugs = getBrowseVisiblePosts(BLOG_POSTS).map((post) => post.slug);

    expect(visibleSlugs).toContain('selective-disclosure');
    expect(visibleSlugs).not.toContain('selective-disclosure-explained');
  });

  it('hides guide-canonical collision slugs from browse-visible post lists', () => {
    const visibleSlugs = getBrowseVisiblePosts(BLOG_POSTS).map((post) => post.slug);

    for (const slug of GUIDE_CANONICAL_COLLISION_SLUGS) {
      expect(isBrowseVisibleArticleSlug(slug)).toBe(false);
      expect(visibleSlugs).not.toContain(slug);
    }
  });

  it('excludes future-dated posts from browse-visible post lists', () => {
    const visiblePosts = getBrowseVisiblePosts(BLOG_POSTS);

    expect(visiblePosts.every((post) => post.date <= TODAY_ISO)).toBe(true);
  });

  it('keeps lightweight browse visibility data aligned with ARTICLE_META', () => {
    const browseHiddenSlugsFromMeta = Object.entries(ARTICLE_META)
      .filter(([, meta]) => meta.browseHidden === true)
      .map(([slug]) => slug)
      .sort();
    const legacySlugsFromMeta = Object.entries(ARTICLE_META)
      .filter(([, meta]) => meta.status === 'legacy')
      .map(([slug]) => slug)
      .sort();

    expect([...BROWSE_HIDDEN_ARTICLE_SLUGS].sort()).toEqual(browseHiddenSlugsFromMeta);
    expect([...LEGACY_ARTICLE_SLUGS].sort()).toEqual(legacySlugsFromMeta);
  });

  it('keeps lightweight browse context data aligned with ARTICLE_META', () => {
    const topicsFromMeta = Object.fromEntries(
      Object.entries(ARTICLE_META)
        .filter(([, meta]) => meta.topic)
        .map(([slug, meta]) => [slug, meta.topic]),
    );
    const primitivesFromMeta = Object.fromEntries(
      Object.entries(ARTICLE_META)
        .filter(([, meta]) => meta.primitive)
        .map(([slug, meta]) => [slug, meta.primitive]),
    );

    expect(ARTICLE_BROWSE_TOPICS_BY_SLUG).toEqual(topicsFromMeta);
    expect(ARTICLE_BROWSE_PRIMITIVES_BY_SLUG).toEqual(primitivesFromMeta);
  });
});
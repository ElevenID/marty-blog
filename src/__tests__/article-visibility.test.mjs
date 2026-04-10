import { describe, expect, it } from 'vitest';

import { BLOG_POSTS } from '../data/blogPosts';
import {
  getBrowseVisiblePosts,
  getCanonicalArticleSlug,
  getLegacyArticleMeta,
  isBrowseVisibleArticleSlug,
} from '../data/articleMeta';

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
});
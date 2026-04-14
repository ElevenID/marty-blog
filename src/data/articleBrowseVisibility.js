const TODAY_ISO = new Date().toISOString().split('T')[0];

// Keep this module narrow so browse-only routes do not pull the full ARTICLE_META table.
export const BROWSE_HIDDEN_ARTICLE_SLUGS = [
  'impl-oid4vci',
  'impl-oid4vp',
  'compliance-profiles-in-practice',
  'deployment-profiles-in-practice',
  'offline-verification-guide',
  'deploy-airline-boarding',
  'deploy-enterprise-access',
  'deploy-age-verification',
  'deploy-membership-credentials',
];

export const LEGACY_ARTICLE_SLUGS = ['selective-disclosure-explained'];

const browseHiddenSlugSet = new Set(BROWSE_HIDDEN_ARTICLE_SLUGS);
const legacySlugSet = new Set(LEGACY_ARTICLE_SLUGS);

export function isBrowseHiddenArticleSlug(slug) {
  return browseHiddenSlugSet.has(slug);
}

export function isBrowseVisibleArticleSlug(slug) {
  return !legacySlugSet.has(slug) && !isBrowseHiddenArticleSlug(slug);
}

export function getBrowseVisiblePosts(posts) {
  return posts.filter((post) => post.date <= TODAY_ISO && isBrowseVisibleArticleSlug(post.slug));
}
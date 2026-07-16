export function normalizeTag(tag) {
  return tag?.trim().toLowerCase() || '';
}

export function slugifyTag(tag) {
  const normalizedTag = normalizeTag(tag)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\+/g, ' plus ');

  return normalizedTag
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function buildBlogTagPath(tag) {
  const tagSlug = slugifyTag(tag);
  return tagSlug ? `/blog/tag/${tagSlug}` : '/blog';
}

export function decodeBlogTagParam(tagParam) {
  if (!tagParam) {
    return '';
  }

  try {
    return normalizeTag(decodeURIComponent(tagParam));
  } catch {
    return normalizeTag(tagParam);
  }
}

export function findMatchingTagLabel(tag, tagLabels) {
  const normalizedTag = normalizeTag(tag);
  const tagSlug = slugifyTag(tag);
  return tagLabels.find((label) => (
    normalizeTag(label) === normalizedTag ||
    slugifyTag(label) === tagSlug
  )) || '';
}

export function buildCanonicalBlogTagPath(tag, tagLabels = []) {
  const matchingLabel = findMatchingTagLabel(tag, tagLabels);
  return buildBlogTagPath(matchingLabel || tag);
}

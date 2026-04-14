export function normalizeTag(tag) {
  return tag?.trim().toLowerCase() || '';
}

export function buildBlogTagPath(tag) {
  const normalizedTag = normalizeTag(tag);
  return normalizedTag ? `/blog/tag/${encodeURIComponent(normalizedTag)}` : '/blog';
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
  return tagLabels.find((label) => normalizeTag(label) === normalizedTag) || '';
}
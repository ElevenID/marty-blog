const MOJIBAKE_REPLACEMENTS = [
  ['ΓÇÖ', "'"],
  ['ΓÇÿ', "'"],
  ['ΓÇ£', '"'],
  ['ΓÇ¥', '"'],
  ['ΓÇª', '...'],
  ['ΓÇô', '-'],
  ['ΓÇö', '-'],
  ['ΓåÆ', '->'],
  ['ΓÇó', '-'],
  ['┬╖', '|'],
  ['â€™', "'"],
  ['â€œ', '"'],
  ['â€', '"'],
  ['â€“', '-'],
  ['â€”', '-'],
  ['â€¦', '...'],
  ['Â·', '|'],
];

export function normalizeBlogText(value) {
  if (typeof value !== 'string') {
    return value;
  }

  let normalized = value;

  for (const [searchValue, replacement] of MOJIBAKE_REPLACEMENTS) {
    normalized = normalized.split(searchValue).join(replacement);
  }

  return normalized;
}

export function normalizeBlogData(value) {
  if (typeof value === 'string') {
    return normalizeBlogText(value);
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeBlogData(item));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, normalizeBlogData(nestedValue)]),
    );
  }

  return value;
}

export function truncateAtWord(value, maxLength) {
  const text = normalizeBlogText(value || '');

  if (text.length <= maxLength) {
    return text;
  }

  const candidate = text.slice(0, maxLength + 1);
  const lastSpace = candidate.lastIndexOf(' ');
  const cutoff = lastSpace > Math.floor(maxLength * 0.6) ? lastSpace : maxLength;

  return `${candidate.slice(0, cutoff).trim()}...`;
}
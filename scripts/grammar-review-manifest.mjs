import { createHash } from 'node:crypto';

import { getCanonicalArticleSlug } from '../src/data/articleMeta.js';
import { getBrowseVisiblePosts } from '../src/data/articleBrowseVisibility.js';
import { BLOG_ROADMAP } from '../src/data/blogRoadmap.js';
import { getBlogSocialImagePath, getBlogSocialImageUrl } from '../src/data/blogSocialImages.js';
import { BLOG_POSTS } from '../src/data/blogPosts.js';
import { BLOG_SERIES, SECTION_BY_SLUG } from '../src/data/blogSeries.js';
import { canonicalBlogUrl, DEFAULT_BLOG_BASE_URL } from './social-manifest.mjs';

function cleanText(value) {
  return String(value || '').trim();
}

function paddedIndex(index) {
  return String(index).padStart(4, '0');
}

function blockId(slug, segment, index = '', type = '') {
  return ['blog', slug, segment, index, type].filter(Boolean).join(':');
}

function sourceHashForReviewDocument(document) {
  const stablePayload = {
    documentId: document.documentId,
    slug: document.slug,
    title: document.title,
    summary: document.summary,
    authorId: document.authorId,
    date: document.date,
    category: document.category,
    canonicalUrl: document.canonicalUrl,
    blocks: document.blocks.map((block) => ({
      id: block.id,
      kind: block.kind,
      text: block.text,
      protected: block.protected,
    })),
  };

  return createHash('sha256')
    .update(JSON.stringify(stablePayload))
    .digest('hex');
}

function normalizeDocumentSet(value = 'all') {
  return String(value || 'all').trim().toLowerCase().replace(/\s+/g, '-');
}

function splitSelector(value) {
  const text = normalizeDocumentSet(value);
  const match = text.match(/^([^:=]+)[:=](.+)$/);
  if (match) {
    return { kind: match[1], value: match[2] };
  }
  return { kind: 'auto', value: text };
}

function orderedSlugFilter(slugs) {
  const order = new Map(slugs.map((slug, index) => [getCanonicalArticleSlug(slug), index]));
  return (documents) =>
    documents
      .filter((document) => order.has(document.slug))
      .sort((left, right) => order.get(left.slug) - order.get(right.slug));
}

function roadmapPhaseSlugs(value) {
  const phase = String(value || '').replace(/^phase-/, '');
  const phaseNumber = Number(phase);
  const roadmap = BLOG_ROADMAP.find((entry) =>
    Number(entry.phase) === phaseNumber || normalizeDocumentSet(entry.title) === normalizeDocumentSet(value),
  );
  return roadmap ? roadmap.posts.map((post) => post.slug) : [];
}

function seriesSlugs(value) {
  const series = BLOG_SERIES.find((entry) => normalizeDocumentSet(entry.id) === normalizeDocumentSet(value));
  return series ? series.slugs : [];
}

function filterBlogReviewDocuments(documents, documentSet = 'all') {
  const selector = splitSelector(documentSet);
  const value = selector.value;
  if (!value || ['all', 'default', 'blog'].includes(value)) {
    return documents;
  }

  if (selector.kind === 'slug' || selector.kind === 'slugs') {
    return orderedSlugFilter(value.split(',').map((slug) => slug.trim()).filter(Boolean))(documents);
  }
  if (selector.kind === 'category') {
    return documents.filter((document) => normalizeDocumentSet(document.category) === normalizeDocumentSet(value));
  }
  if (selector.kind === 'author') {
    return documents.filter((document) => normalizeDocumentSet(document.authorId) === normalizeDocumentSet(value));
  }
  if (selector.kind === 'section') {
    return documents.filter((document) => normalizeDocumentSet(SECTION_BY_SLUG[document.slug]) === normalizeDocumentSet(value));
  }
  if (selector.kind === 'series') {
    return orderedSlugFilter(seriesSlugs(value))(documents);
  }
  if (selector.kind === 'roadmap-phase' || selector.kind === 'phase') {
    return orderedSlugFilter(roadmapPhaseSlugs(value))(documents);
  }

  if (value.startsWith('roadmap-phase-')) {
    return orderedSlugFilter(roadmapPhaseSlugs(value.replace(/^roadmap-phase-/, '')))(documents);
  }
  if (value.startsWith('phase-')) {
    return orderedSlugFilter(roadmapPhaseSlugs(value.replace(/^phase-/, '')))(documents);
  }
  const matchingSeriesSlugs = seriesSlugs(value);
  if (matchingSeriesSlugs.length) {
    return orderedSlugFilter(matchingSeriesSlugs)(documents);
  }
  if (Object.values(SECTION_BY_SLUG).some((section) => normalizeDocumentSet(section) === value)) {
    return documents.filter((document) => normalizeDocumentSet(SECTION_BY_SLUG[document.slug]) === value);
  }

  throw new Error(`Unknown blog grammar review document set: ${documentSet}`);
}

function contentBlock(slug, block, index) {
  const type = cleanText(block.type || 'paragraph');
  const text = cleanText(block.text || block.code || '');
  const editable = ['paragraph', 'heading'].includes(type);
  return {
    id: blockId(slug, 'content', paddedIndex(index), type),
    kind: type,
    sourceField: `content[${index}]`,
    text,
    protected: !editable,
    reviewInstructions: editable
      ? 'Grammarly may suggest grammar, clarity, and consistency edits only.'
      : 'Protected non-prose block. Do not edit through Grammarly.',
  };
}

export function buildBlogGrammarReviewDocuments(posts = BLOG_POSTS, options = {}) {
  const baseUrl = options.baseUrl || process.env.BLOG_CANONICAL_BASE_URL || DEFAULT_BLOG_BASE_URL;

  const documents = getBrowseVisiblePosts(posts).map((post) => {
    const slug = getCanonicalArticleSlug(post.slug);
    const canonicalUrl = canonicalBlogUrl(post.slug, baseUrl);
    const blocks = [
      {
        id: blockId(slug, 'title'),
        kind: 'title',
        sourceField: 'title',
        text: cleanText(post.title),
        protected: false,
        reviewInstructions: 'Preserve the claim and category meaning; improve wording only.',
      },
      {
        id: blockId(slug, 'summary'),
        kind: 'summary',
        sourceField: 'summary',
        text: cleanText(post.summary),
        protected: false,
        reviewInstructions: 'Keep this concise and social-card friendly.',
      },
      ...(post.content || []).map((block, index) => contentBlock(slug, block, index)),
    ].filter((block) => block.text);

    const document = {
      documentId: `blog:${slug}`,
      contentScope: 'blog',
      sourceRepo: 'marty-blog',
      sourcePath: 'src/data/blogPosts.js',
      slug,
      title: cleanText(post.title),
      summary: cleanText(post.summary),
      authorId: cleanText(post.authorId),
      date: cleanText(post.date),
      updatedDate: cleanText(post.updatedDate),
      category: cleanText(post.category),
      canonicalUrl,
      socialImagePath: getBlogSocialImagePath(slug),
      socialImageUrl: getBlogSocialImageUrl(slug, baseUrl),
      blocks,
    };

    return {
      ...document,
      sourceHash: sourceHashForReviewDocument(document),
    };
  });
  return filterBlogReviewDocuments(documents, options.documentSet);
}

export function buildBlogGrammarReviewManifest(posts = BLOG_POSTS, options = {}) {
  return {
    version: 1,
    source: 'marty-blog',
    contentScope: 'blog',
    documentSet: options.documentSet || 'all',
    documents: buildBlogGrammarReviewDocuments(posts, options),
  };
}

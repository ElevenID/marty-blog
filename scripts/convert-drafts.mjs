#!/usr/bin/env node
/**
 * Convert markdown draft posts into blogPosts.js content-block format.
 *
 * Usage:
 *   node scripts/convert-drafts.mjs > /tmp/converted-posts.js
 *   node scripts/convert-drafts.mjs --metadata-review > /tmp/draft-metadata-review.md
 *
 * Normal output emits only drafts whose metadata status is `live`.
 */

import { readFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';

const DRAFTS_ROOT = join(process.cwd(), 'guides', '05-drafting', 'post-drafts');
const SCRIPT_ARGS = new Set(process.argv.slice(2));

const AUTHOR_MAP = {
  'Daniel Ortega': 'daniel-ortega',
  'Victor Leclerc': 'victor-leclerc',
  'Aiko Tanaka': 'aiko-tanaka',
  'Marcus Vale': 'marcus-vale',
  'Nora Patel': 'nora-patel',
  'Sofia Rahman': 'sofia-rahman',
  'Elena Kovacs': 'elena-kovacs',
};

const CATEGORY_HINTS = {
  'daniel-ortega': 'Business',
  'victor-leclerc': 'Technical',
  'aiko-tanaka': 'Business',
  'marcus-vale': 'Cryptography',
  'nora-patel': 'Cryptography',
  'sofia-rahman': 'Technical',
  'elena-kovacs': 'Business',
};

// Posts that go technique/impl-heavy override the default author category.
const SLUG_CATEGORY_OVERRIDES = {
  'five-primitives-in-one-picture': 'Technical',
  'same-trust-model-different-runtime': 'Technical',
  'one-protocol-many-ecosystems': 'Technical',
  'why-marty-is-ready-for-evaluation': 'Technical',
  'infrastructure-economics-migration': 'Business',
  'deployment-profiles-in-practice': 'Technical',
  'offline-verification-guide': 'Technical',
  'compliance-profiles-in-practice': 'Business',
  'deploy-airline-boarding': 'Technical',
  'deploy-enterprise-access': 'Technical',
  'selective-disclosure': 'Cryptography',
  'deploy-age-verification': 'Technical',
  'deploy-membership-credentials': 'Business',
  'impl-oid4vci': 'Technical',
  'impl-oid4vp': 'Technical',
};

const EMPTY_META_VALUES = new Set(['', 'none', '(none)', 'n/a', 'na', 'tbd', 'todo']);
const LIVE_BLOG_STATUSES = new Set(['live']);

// ── helpers ────────────────────────────────────────────────────────────

function estimateReadTime(text) {
  const words = text.split(/\s+/).length;
  const minutes = Math.max(3, Math.ceil(words / 230));
  return `${minutes} min read`;
}

/** Strip inline markdown formatting to plain text */
function stripInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')   // bold
    .replace(/\*(.+?)\*/g, '$1')        // italic
    .replace(/`([^`]+)`/g, '$1')        // inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // links
}

/** Escape single quotes and newlines for JS string literals */
function esc(s) {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '');
}

function normalizeMetaValue(value = '') {
  return value
    .trim()
    .replace(/^`/, '')
    .replace(/`$/, '')
    .replace(/^['"]/, '')
    .replace(/['"]$/, '')
    .trim();
}

function isEmptyMetaValue(value = '') {
  return EMPTY_META_VALUES.has(normalizeMetaValue(value).toLowerCase());
}

function parseMetaList(value = '') {
  if (isEmptyMetaValue(value)) return [];

  return value
    .split(',')
    .map((item) => normalizeMetaValue(item))
    .filter((item) => item && !isEmptyMetaValue(item));
}

function formatJsString(value) {
  return `'${esc(value)}'`;
}

function formatJsList(values) {
  return `[${values.map((value) => formatJsString(value)).join(', ')}]`;
}

function formatReviewList(values) {
  return values.length > 0 ? `\`${formatJsList(values)}\`` : '`[]`';
}

function formatArticleMetaCandidate(post) {
  const fields = [];

  if (post.primitive) {
    fields.push(`primitive: ${formatJsString(post.primitive)}`);
  }
  if (post.layer) {
    fields.push(`layer: ${formatJsString(post.layer)}`);
  }
  if (post.topicCluster) {
    fields.push(`topic: ${formatJsString(post.topicCluster)}`);
  }
  if (post.difficulty) {
    fields.push(`difficulty: ${formatJsString(post.difficulty)}`);
  }
  fields.push(`related: ${formatJsList(post.related)}`);

  return `{ ${fields.join(', ')} }`;
}

// ── markdown → content blocks ──────────────────────────────────────────

function markdownToBlocks(md) {
  const blocks = [];
  const lines = md.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip blank lines
    if (line.trim() === '') { i++; continue; }

    // ## Heading
    if (/^## /.test(line)) {
      blocks.push({ type: 'heading', text: stripInline(line.replace(/^## /, '')) });
      i++;
      continue;
    }

    // Markdown table — collect all contiguous | lines, convert to text
    if (/^\|/.test(line.trim())) {
      const tableLines = [];
      while (i < lines.length && /^\|/.test(lines[i].trim())) {
        tableLines.push(lines[i]);
        i++;
      }
      const converted = convertTable(tableLines);
      if (converted) blocks.push({ type: 'paragraph', text: converted });
      continue;
    }

    // Bullet / numbered list — collect contiguous list items
    if (/^(\s*[-*+]|\s*\d+\.) /.test(line)) {
      const listLines = [];
      while (
        i < lines.length &&
        (/^(\s*[-*+]|\s*\d+\.) /.test(lines[i]) || (lines[i].startsWith('  ') && listLines.length > 0))
      ) {
        listLines.push(lines[i]);
        i++;
      }
      const text = convertList(listLines);
      if (text) blocks.push({ type: 'paragraph', text });
      continue;
    }

    // Code block — ```
    if (/^```/.test(line.trim())) {
      const langMatch = line.trim().match(/^```(\w*)/);
      const lang = langMatch?.[1] || 'text';
      i++;
      const codeLines = [];
      while (i < lines.length && !/^```/.test(lines[i].trim())) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      blocks.push({
        type: 'code',
        label: '',
        lang,
        code: codeLines.join('\n'),
      });
      continue;
    }

    // Regular paragraph — collect until blank line or structural element
    const paraLines = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^## /.test(lines[i]) &&
      !/^\|/.test(lines[i].trim()) &&
      !/^(\s*[-*+]|\s*\d+\.) /.test(lines[i]) &&
      !/^```/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({
        type: 'paragraph',
        text: stripInline(paraLines.join(' ').replace(/\s+/g, ' ').trim()),
      });
    }
  }

  return blocks;
}

/** Convert a markdown table to readable text paragraphs */
function convertTable(tableLines) {
  // Parse header
  const headerLine = tableLines[0];
  const separatorIdx = tableLines.findIndex((l) => /^\|\s*-/.test(l));
  const dataStart = separatorIdx >= 0 ? separatorIdx + 1 : 1;
  
  const parseRow = (line) =>
    line
      .split('|')
      .map((c) => c.trim())
      .filter((c) => c !== '' && !/^-+$/.test(c));

  const headers = parseRow(headerLine);
  const rows = tableLines.slice(dataStart).map(parseRow);

  if (rows.length === 0) return '';

  // Build readable text: "Header1: value. Header2: value." per row
  const parts = rows.map((row) => {
    return headers
      .map((h, idx) => `${stripInline(h)}: ${stripInline(row[idx] || '')}`)
      .join('. ');
  });

  return parts.join(' | ');
}

/** Convert a markdown list to a paragraph */
function convertList(listLines) {
  const items = [];
  let current = '';
  for (const line of listLines) {
    if (/^(\s*[-*+]|\s*\d+\.) /.test(line)) {
      if (current) items.push(current.trim());
      current = line.replace(/^(\s*[-*+]|\s*\d+\.)\s*/, '');
    } else {
      current += ' ' + line.trim();
    }
  }
  if (current) items.push(current.trim());
  return items.map(stripInline).join(' ');
}

// ── parse a draft file ────────────────────────────────────────────────

function parseDraft(filePath) {
  const raw = readFileSync(filePath, 'utf-8');
  const lines = raw.split('\n');

  // Extract title (# heading)
  const titleLine = lines.find((l) => /^# /.test(l));
  const title = titleLine ? titleLine.replace(/^# /, '').trim() : basename(filePath, '.md');

  // Extract subtitle (first italic line after title)
  const subtitleIdx = lines.findIndex((l) => /^\*[^*]/.test(l.trim()) && l.trim().endsWith('*'));
  const summary =
    subtitleIdx >= 0
      ? lines[subtitleIdx].trim().replace(/^\*/, '').replace(/\*$/, '').trim()
      : '';

  // Extract draft metadata
  const metaStart = lines.findIndex((l) => /^## Draft metadata/.test(l));
  let slug = '';
  let authorId = '';
  let date = '2026-03-31';
  let updatedDate = '';
  let explicitCategory = '';
  let topic = '';
  let primitive = '';
  let layer = '';
  let topicCluster = '';
  let difficulty = '';
  let section = '';
  let status = '';
  let related = [];
  let conceptTags = [];
  let standardsTags = [];
  let hasRelatedField = false;
  let hasConceptTagsField = false;
  let hasStandardsTagsField = false;
  if (metaStart >= 0) {
    for (let j = metaStart; j < lines.length; j++) {
      const slugMatch = lines[j].match(/\*\*Slug:\*\*\s*`([^`]+)`/);
      if (slugMatch) slug = slugMatch[1];
      const dateMatch = lines[j].match(/\*\*Date:\*\*\s*`?([0-9-]+)`?/i);
      if (dateMatch) date = dateMatch[1];
      const updatedDateMatch = lines[j].match(/\*\*Updated date:\*\*\s*`?([0-9-]+)`?/i);
      if (updatedDateMatch) updatedDate = updatedDateMatch[1];
      const categoryMatch = lines[j].match(/\*\*Category:\*\*\s*`?([^`]+?)`?\s*$/i);
      if (categoryMatch) explicitCategory = categoryMatch[1].trim();
      const topicMatch = lines[j].match(/\*\*Topic:\*\*\s*`?([^`]+?)`?\s*$/i);
      if (topicMatch) topic = topicMatch[1].trim();
      const primitiveMatch = lines[j].match(/\*\*Primitive:\*\*\s*`?([^`]+?)`?\s*$/i);
      if (primitiveMatch) primitive = primitiveMatch[1].trim();
      const topicClusterMatch = lines[j].match(/\*\*(?:Topic cluster|Meta topic):\*\*\s*`?([^`]+?)`?\s*$/i);
      if (topicClusterMatch) topicCluster = topicClusterMatch[1].trim();
      const layerMatch = lines[j].match(/\*\*Layer:\*\*\s*`?([^`]+?)`?\s*$/i);
      if (layerMatch) layer = layerMatch[1].trim();
      const difficultyMatch = lines[j].match(/\*\*Difficulty:\*\*\s*`?([^`]+?)`?\s*$/i);
      if (difficultyMatch) difficulty = difficultyMatch[1].trim();
      const sectionMatch = lines[j].match(/\*\*Section:\*\*\s*`?([^`]+?)`?\s*$/i);
      if (sectionMatch) section = sectionMatch[1].trim();
      const statusMatch = lines[j].match(/\*\*Status:\*\*\s*`?([^`]+?)`?\s*$/i);
      if (statusMatch) status = statusMatch[1].trim();
      const relatedMatch = lines[j].match(/\*\*Related:\*\*\s*(.+)$/i);
      if (relatedMatch) {
        related = parseMetaList(relatedMatch[1]);
        hasRelatedField = true;
      }
      const conceptTagsMatch = lines[j].match(/\*\*Concept tags:\*\*\s*(.+)$/i);
      if (conceptTagsMatch) {
        conceptTags = parseMetaList(conceptTagsMatch[1]);
        hasConceptTagsField = true;
      }
      const standardsTagsMatch = lines[j].match(/\*\*Standards tags:\*\*\s*(.+)$/i);
      if (standardsTagsMatch) {
        standardsTags = parseMetaList(standardsTagsMatch[1]);
        hasStandardsTagsField = true;
      }
      const authorMatch = lines[j].match(/\*\*Lead narrator:\*\*\s*(.+)/);
      if (authorMatch) {
        const name = authorMatch[1].trim();
        authorId = AUTHOR_MAP[name] || 'daniel-ortega';
      }
    }
  }

  if (!slug) {
    slug = basename(filePath, '.md')
      .replace(/^\d+-/, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
  }

  // Find content boundaries: after subtitle, before "## Related reading" or "## Draft metadata"
  const contentStart =
    subtitleIdx >= 0
      ? subtitleIdx + 1
      : lines.findIndex((l) => /^# /.test(l)) + 1;

  let contentEnd = lines.length;
  const relatedIdx = lines.findIndex((l) => /^## Related reading/.test(l));
  const draftMetaIdx = lines.findIndex((l) => /^## Draft metadata/.test(l));
  if (relatedIdx >= 0) contentEnd = Math.min(contentEnd, relatedIdx);
  if (draftMetaIdx >= 0) contentEnd = Math.min(contentEnd, draftMetaIdx);

  const bodyMd = lines.slice(contentStart, contentEnd).join('\n');

  // Convert to content blocks
  const content = markdownToBlocks(bodyMd);

  // Category
  const category = explicitCategory || SLUG_CATEGORY_OVERRIDES[slug] || CATEGORY_HINTS[authorId] || 'Technical';
  const categorySource = explicitCategory ? 'explicit' : 'inferred';
  const resolvedTopicCluster = topicCluster || topic;
  const topicClusterSource = topicCluster ? 'explicit' : topic ? 'defaulted-from-topic' : 'missing';
  const resolvedSection = section || 'archive';
  const sectionSource = section ? 'explicit' : 'defaulted-archive';
  const resolvedStatus = status || 'draft';
  const statusSource = status ? 'explicit' : 'defaulted-draft';

  // Read time
  const readTime = estimateReadTime(bodyMd);

  return {
    slug,
    title,
    summary,
    authorId,
    date,
    updatedDate,
    category,
    categorySource,
    readTime,
    topic,
    primitive,
    layer,
    topicCluster: resolvedTopicCluster,
    topicClusterSource,
    difficulty,
    section: resolvedSection,
    sectionSource,
    related,
    hasRelatedField,
    conceptTags,
    hasConceptTagsField,
    standardsTags,
    hasStandardsTagsField,
    status: resolvedStatus,
    statusSource,
    content,
    draftFile: filePath.replace(`${process.cwd()}/`, ''),
  };
}

// ── main ──────────────────────────────────────────────────────────────

const BATCH_DIRS = readdirSync(DRAFTS_ROOT, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && /^batch-\d+$/.test(entry.name))
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const posts = [];

for (const batch of BATCH_DIRS) {
  const dir = join(DRAFTS_ROOT, batch);
  const files = readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'README.md')
    .sort();

  for (const file of files) {
    const post = parseDraft(join(dir, file));
    posts.push(post);
  }
}

const livePosts = posts.filter((post) => LIVE_BLOG_STATUSES.has(post.status));

// Output as JS-ready code
function blockToJs(block, indent) {
  if (block.type === 'heading') {
    return `${indent}{ type: 'heading', text: '${esc(block.text)}' }`;
  }
  if (block.type === 'code') {
    return `${indent}{ type: 'code', label: '${esc(block.label)}', lang: '${esc(block.lang)}', code: '${esc(block.code)}' }`;
  }
  return `${indent}{ type: 'paragraph', text: '${esc(block.text)}' }`;
}

function outputMetadataReview(postsToReview) {
  console.log('# Draft metadata review');
  console.log('');
  console.log('Generated by `node scripts/convert-drafts.mjs --metadata-review`.');
  console.log('Use this to update `ARTICLE_META`, `SECTION_BY_SLUG`, `BLOG_POST_CONCEPT_TAGS`, and `BLOG_POST_STANDARDS_TAGS` before merging regenerated prose.');
  console.log('');

  for (const post of postsToReview) {
    const reviewFlags = [];

    if (post.categorySource !== 'explicit') {
      reviewFlags.push(`category still inferred -> ${post.category}`);
    }
    if (!post.topic) {
      reviewFlags.push('missing Topic');
    }
    if (!post.layer) {
      reviewFlags.push('missing Layer');
    }
    if (!post.difficulty) {
      reviewFlags.push('missing Difficulty');
    }
    if (post.topicClusterSource !== 'explicit' && post.topic) {
      reviewFlags.push(`Topic cluster defaulted from Topic -> ${post.topicCluster}`);
    }
    if (post.sectionSource !== 'explicit') {
      reviewFlags.push(`Section defaulted to ${post.section}`);
    }
    if (!post.hasRelatedField || post.related.length === 0) {
      reviewFlags.push('missing Related slugs');
    }
    if (!post.hasConceptTagsField || post.conceptTags.length === 0) {
      reviewFlags.push('missing Concept tags');
    }
    if (!post.hasStandardsTagsField) {
      reviewFlags.push('missing Standards tags field (use `(none)` when intentionally empty)');
    }
    if (post.statusSource !== 'explicit') {
      reviewFlags.push(`Status defaulted to ${post.status}`);
    }
    if (!LIVE_BLOG_STATUSES.has(post.status)) {
      reviewFlags.push(`excluded from live blog output (status = ${post.status})`);
    }

    console.log(`## ${post.slug}`);
    console.log(`- Draft file: \`${post.draftFile}\``);
    console.log(`- Blog payload candidate: \`{ category: ${formatJsString(post.category)}, topic: ${formatJsString(post.topic || '')}, readTime: ${formatJsString(post.readTime)} }\``);
    console.log(`- ARTICLE_META candidate: \`${formatArticleMetaCandidate(post)}\``);
    console.log(`- SECTION_BY_SLUG candidate: \`${formatJsString(post.section)}\``);
    console.log(`- BLOG_POST_CONCEPT_TAGS candidate: ${formatReviewList(post.conceptTags)}`);
    console.log(`- BLOG_POST_STANDARDS_TAGS candidate: ${formatReviewList(post.standardsTags)}`);
    console.log(`- Publication status: \`${formatJsString(post.status)}\``);
    if (reviewFlags.length > 0) {
      console.log(`- Review flags: ${reviewFlags.map((flag) => `\`${flag}\``).join(', ')}`);
    }
    console.log('');
  }
}

if (SCRIPT_ARGS.has('--metadata-review')) {
  outputMetadataReview(posts);
  process.exit(0);
}

console.log('// ─── Drafted Posts (generated from guides/05-drafting/post-drafts) ────');
console.log('');

for (const post of livePosts) {
  console.log('  {');
  console.log(`    slug: '${esc(post.slug)}',`);
  console.log(`    title: '${esc(post.title)}',`);
  console.log(`    summary: '${esc(post.summary)}',`);
  console.log(`    authorId: '${esc(post.authorId)}',`);
  console.log(`    date: '${esc(post.date)}',`);
  if (post.updatedDate) {
    console.log(`    updatedDate: '${esc(post.updatedDate)}',`);
  }
  console.log(`    category: '${esc(post.category)}',`);
  console.log(`    readTime: '${esc(post.readTime)}',`);
  if (post.topic) {
    console.log(`    topic: '${esc(post.topic)}',`);
  }
  console.log(`    content: [`);
  for (const block of post.content) {
    console.log(blockToJs(block, '      ') + ',');
  }
  console.log(`    ],`);
  console.log(`  },`);
}

#!/usr/bin/env node
/**
 * Convert markdown draft posts into blogPosts.js content-block format.
 *
 * Usage: node scripts/convert-drafts.mjs > /tmp/converted-posts.js
 */

import { readFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';

const DRAFTS_ROOT = join(process.cwd(), 'guides', '05-drafting', 'post-drafts');

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
  'privacy-data-minimization': 'Cryptography',
  'deploy-age-verification': 'Technical',
  'deploy-membership-credentials': 'Business',
  'impl-oid4vci': 'Technical',
  'impl-oid4vp': 'Technical',
};

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
  if (metaStart >= 0) {
    for (let j = metaStart; j < lines.length; j++) {
      const slugMatch = lines[j].match(/\*\*Slug:\*\*\s*`([^`]+)`/);
      if (slugMatch) slug = slugMatch[1];
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
  const category = SLUG_CATEGORY_OVERRIDES[slug] || CATEGORY_HINTS[authorId] || 'Technical';

  // Read time
  const readTime = estimateReadTime(bodyMd);

  return { slug, title, summary, authorId, category, readTime, content };
}

// ── main ──────────────────────────────────────────────────────────────

const BATCH_DIRS = ['batch-01', 'batch-02', 'batch-03', 'batch-04', 'batch-05', 'batch-06'];

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

console.log('// ─── Drafted Posts (generated from guides/05-drafting/post-drafts) ────');
console.log('');

for (const post of posts) {
  console.log('  {');
  console.log(`    slug: '${esc(post.slug)}',`);
  console.log(`    title: '${esc(post.title)}',`);
  console.log(`    summary: '${esc(post.summary)}',`);
  console.log(`    authorId: '${esc(post.authorId)}',`);
  console.log(`    date: '2026-03-31',`);
  console.log(`    category: '${esc(post.category)}',`);
  console.log(`    readTime: '${esc(post.readTime)}',`);
  console.log(`    content: [`);
  for (const block of post.content) {
    console.log(blockToJs(block, '      ') + ',');
  }
  console.log(`    ],`);
  console.log(`  },`);
}

#!/usr/bin/env node

import { buildBlogGrammarReviewManifest } from './grammar-review-manifest.mjs';
import { DEFAULT_BLOG_BASE_URL } from './social-manifest.mjs';

function optionValue(name, fallback = '') {
  const index = process.argv.indexOf(name);
  if (index === -1 || index + 1 >= process.argv.length) {
    return fallback;
  }
  return process.argv[index + 1];
}

const baseUrl = optionValue('--base-url', process.env.BLOG_CANONICAL_BASE_URL || DEFAULT_BLOG_BASE_URL);
const documentSet = optionValue('--document-set', process.env.BLOG_GRAMMAR_REVIEW_DOCUMENT_SET || 'all');
const payload = {
  ...buildBlogGrammarReviewManifest(undefined, { baseUrl, documentSet }),
  generatedAt: new Date().toISOString(),
};

process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);

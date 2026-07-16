#!/usr/bin/env node

import { buildSocialManifest, DEFAULT_BLOG_BASE_URL } from './social-manifest.mjs';

function optionValue(name, fallback = '') {
  const index = process.argv.indexOf(name);
  if (index === -1 || index + 1 >= process.argv.length) {
    return fallback;
  }
  return process.argv[index + 1];
}

const baseUrl = optionValue('--base-url', process.env.BLOG_CANONICAL_BASE_URL || DEFAULT_BLOG_BASE_URL);
const payload = {
  version: 1,
  source: 'marty-blog',
  generatedAt: new Date().toISOString(),
  posts: buildSocialManifest(undefined, { baseUrl }),
};

process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);

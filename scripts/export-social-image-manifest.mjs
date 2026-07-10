#!/usr/bin/env node

import { DEFAULT_BLOG_BASE_URL } from './social-manifest.mjs';
import { buildSocialImageManifest } from './social-image-manifest.mjs';

function optionValue(name, fallback = '') {
  const index = process.argv.indexOf(name);
  if (index === -1 || index + 1 >= process.argv.length) {
    return fallback;
  }
  return process.argv[index + 1];
}

const baseUrl = optionValue('--base-url', process.env.BLOG_CANONICAL_BASE_URL || DEFAULT_BLOG_BASE_URL);
process.stdout.write(`${JSON.stringify(buildSocialImageManifest(undefined, { baseUrl }), null, 2)}\n`);

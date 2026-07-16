import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { buildSocialManifest, DEFAULT_BLOG_BASE_URL } from './social-manifest.mjs';
import {
  BLOG_SOCIAL_BRAND_ASSETS,
  getBlogSocialImageAlt,
  getBlogSocialImagePrompt,
  getBlogSocialImageSet,
} from '../src/data/blogSocialImages.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_ROOT = path.resolve(__dirname, '..');
const PUBLIC_ROOT = path.join(BLOG_ROOT, 'public');

function cleanBaseUrl(baseUrl) {
  return String(baseUrl || DEFAULT_BLOG_BASE_URL).replace(/\/+$/, '');
}

function publicPathToFilePath(publicPath) {
  return path.join(PUBLIC_ROOT, String(publicPath || '').replace(/^\/+/, ''));
}

function pngDimensions(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const buffer = fs.readFileSync(filePath);
  const pngSignature = '89504e470d0a1a0a';
  if (buffer.length < 24 || buffer.subarray(0, 8).toString('hex') !== pngSignature) {
    return null;
  }
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
    bytes: buffer.length,
  };
}

function withFileEvidence(image) {
  const filePath = publicPathToFilePath(image.path);
  const dimensions = pngDimensions(filePath);
  return {
    ...image,
    fileExists: Boolean(dimensions),
    filePath: path.relative(BLOG_ROOT, filePath).replaceAll(path.sep, '/'),
    actualWidth: dimensions?.width || 0,
    actualHeight: dimensions?.height || 0,
    bytes: dimensions?.bytes || 0,
  };
}

export function buildSocialImageManifest(posts, options = {}) {
  const baseUrl = cleanBaseUrl(options.baseUrl || process.env.BLOG_CANONICAL_BASE_URL);
  const socialPosts = buildSocialManifest(posts, { baseUrl });
  return {
    version: 1,
    source: 'marty-blog',
    generatedAt: new Date().toISOString(),
    brandAssets: BLOG_SOCIAL_BRAND_ASSETS,
    platforms: ['linkedin', 'twitter', 'bluesky', 'mastodon', 'square'],
    assets: socialPosts.map((post, index) => {
      const imageSet = getBlogSocialImageSet(post.slug, baseUrl);
      const platforms = Object.fromEntries(
        Object.entries(imageSet.platforms).map(([platform, image]) => [platform, withFileEvidence(image)]),
      );
      return {
        order: index + 1,
        slug: post.slug,
        title: post.title,
        summary: post.summary,
        category: post.category,
        authorId: post.authorId,
        canonicalUrl: post.canonicalUrl,
        sourceHash: post.sourceHash,
        altText: getBlogSocialImageAlt(post.title || post.slug),
        reviewStatus: platforms.linkedin.fileExists ? 'seeded_placeholder' : 'missing',
        sourceLogoReference: BLOG_SOCIAL_BRAND_ASSETS.logoPath,
        generationPrompt: getBlogSocialImagePrompt(post),
        masterImage: withFileEvidence(imageSet.master),
        platformImages: platforms,
      };
    }),
  };
}

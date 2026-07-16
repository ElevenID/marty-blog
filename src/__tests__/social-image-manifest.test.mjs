import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

import { buildSocialImageManifest } from '../../scripts/social-image-manifest.mjs';
import { buildSocialManifest } from '../../scripts/social-manifest.mjs';

const BLOG_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

function publicPathExists(publicPath) {
  return fs.existsSync(path.join(BLOG_ROOT, 'public', publicPath.replace(/^\/+/, '')));
}

describe('social image manifest exporter', () => {
  it('tracks platform-ready image assets for every browse-visible post', () => {
    const socialManifest = buildSocialManifest();
    const imageManifest = buildSocialImageManifest();

    expect(imageManifest.assets).toHaveLength(socialManifest.length);
    expect(publicPathExists('/images/social/elevenid-blog-default.png')).toBe(true);

    for (const asset of imageManifest.assets) {
      expect(asset.slug).toBeTruthy();
      expect(asset.altText).toContain('ElevenID LLC');
      expect(asset.generationPrompt).toContain(asset.title);
      expect(asset.sourceLogoReference).toBe('/images/brand/elevenidllc-logo.png');
      expect(asset.masterImage.fileExists).toBe(true);
      expect(asset.platformImages.linkedin.fileExists).toBe(true);
      expect(asset.platformImages.linkedin.actualWidth).toBe(1200);
      expect(asset.platformImages.linkedin.actualHeight).toBe(627);
      expect(asset.platformImages.twitter.actualWidth).toBe(1200);
      expect(asset.platformImages.twitter.actualHeight).toBe(675);
      expect(asset.platformImages.bluesky.actualWidth).toBe(1200);
      expect(asset.platformImages.mastodon.actualWidth).toBe(1200);
      expect(asset.platformImages.square.actualWidth).toBe(1080);
      expect(asset.platformImages.square.actualHeight).toBe(1080);
    }
  });
});

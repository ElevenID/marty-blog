import { describe, expect, it } from 'vitest';

import {
  DEFAULT_BLOG_SOCIAL_IMAGE_PATH,
  getBlogSocialImageAlt,
  getBlogSocialImagePath,
  getBlogSocialImagePrompt,
  getBlogSocialImageSet,
  getBlogSocialImageUrl,
} from '../data/blogSocialImages.js';

describe('blog social image resolution', () => {
  it('preserves the versioned CSCA image alias for every artifact class', () => {
    const slug = 'understanding-csca-certificates';

    expect(getBlogSocialImagePath(slug)).toBe(
      '/images/social/understanding-csca-certificates-v2.png',
    );
    expect(getBlogSocialImagePath(slug, 'master')).toBe(
      '/images/social/master/understanding-csca-certificates-v2-master.png',
    );
    expect(getBlogSocialImagePath(slug, 'bluesky')).toBe(
      '/images/social/platforms/understanding-csca-certificates-v2-bluesky.png',
    );
  });

  it('uses platform-appropriate defaults for unknown posts', () => {
    expect(getBlogSocialImagePath('not-published')).toBe(DEFAULT_BLOG_SOCIAL_IMAGE_PATH);
    expect(getBlogSocialImagePath('not-published', 'master')).toBe(
      '/images/social/master/elevenid-blog-default-master.png',
    );
    expect(getBlogSocialImagePath('not-published', 'square')).toBe(
      '/images/social/platforms/elevenid-blog-default-square.png',
    );
  });

  it('normalizes base URLs and returns a complete platform set', () => {
    expect(getBlogSocialImageUrl('why-identity-needs-a-protocol', 'https://example.test///')).toBe(
      'https://example.test/images/social/why-identity-needs-a-protocol.png',
    );

    const imageSet = getBlogSocialImageSet('why-identity-needs-a-protocol', 'https://example.test/');
    expect(imageSet.master).toMatchObject({ width: 1200, height: 675, format: 'png' });
    expect(Object.keys(imageSet.platforms)).toEqual([
      'linkedin',
      'twitter',
      'bluesky',
      'mastodon',
      'square',
    ]);
    expect(imageSet.platforms.twitter.url).toBe(
      'https://example.test/images/social/platforms/why-identity-needs-a-protocol-twitter.png',
    );
  });

  it('builds safe default alt text and prompt metadata', () => {
    expect(getBlogSocialImageAlt()).toBe(
      'ElevenID LLC Blog social preview image for ElevenID LLC',
    );
    expect(getBlogSocialImagePrompt({ slug: 'portable-credentials' })).toContain(
      'Topic: portable-credentials.',
    );
    expect(getBlogSocialImagePrompt({ title: 'Portable Credentials', summary: 'A summary.' })).toContain(
      'Article summary: A summary.',
    );
  });
});

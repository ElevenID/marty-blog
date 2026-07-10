import { BLOG_POST_SUMMARIES } from './blogPostSummaries.js';

const SITE_URL = 'https://elevenidllc.com';
const SOCIAL_IMAGE_BASE_PATH = '/images/social';
const BRAND_IMAGE_BASE_PATH = '/images/brand';

export const BLOG_SOCIAL_BRAND_ASSETS = {
  logoPath: `${BRAND_IMAGE_BASE_PATH}/elevenidllc-logo.png`,
  coverPath: `${BRAND_IMAGE_BASE_PATH}/elevenidllc-cover.png`,
  sourceNotes: 'Seeded from the founder-provided ElevenID LLC logo and cover assets.',
};

export const SOCIAL_IMAGE_PLATFORM_SPECS = {
  linkedin: {
    width: 1200,
    height: 627,
    format: 'png',
    description: 'LinkedIn native article cover and Open Graph default.',
  },
  twitter: {
    width: 1200,
    height: 675,
    format: 'png',
    description: 'X/Twitter wide feed card.',
  },
  bluesky: {
    width: 1200,
    height: 675,
    format: 'png',
    description: 'Bluesky wide feed card.',
  },
  mastodon: {
    width: 1200,
    height: 675,
    format: 'png',
    description: 'Mastodon wide attachment card.',
  },
  square: {
    width: 1080,
    height: 1080,
    format: 'png',
    description: 'Reusable square crop for future channels.',
  },
};

export const DEFAULT_BLOG_SOCIAL_IMAGE_PATH = `${SOCIAL_IMAGE_BASE_PATH}/elevenid-blog-default.png`;

export const BLOG_SOCIAL_IMAGE_BY_SLUG = Object.fromEntries(
  BLOG_POST_SUMMARIES.map((post) => [post.slug, `${SOCIAL_IMAGE_BASE_PATH}/${post.slug}.png`]),
);

function cleanBaseUrl(baseUrl = SITE_URL) {
  return String(baseUrl || SITE_URL).replace(/\/+$/, '');
}

function cleanSlug(slug) {
  return String(slug || '').trim();
}

function isKnownBlogSlug(slug) {
  return Object.prototype.hasOwnProperty.call(BLOG_SOCIAL_IMAGE_BY_SLUG, cleanSlug(slug));
}

export function getBlogSocialImagePath(slug, platform = 'linkedin') {
  const cleanPlatform = String(platform || 'linkedin').trim().toLowerCase();
  const cleanPostSlug = cleanSlug(slug);
  if (!isKnownBlogSlug(cleanPostSlug)) {
    if (cleanPlatform === 'linkedin') {
      return DEFAULT_BLOG_SOCIAL_IMAGE_PATH;
    }
    if (cleanPlatform === 'master') {
      return `${SOCIAL_IMAGE_BASE_PATH}/master/elevenid-blog-default-master.png`;
    }
    return `${SOCIAL_IMAGE_BASE_PATH}/platforms/elevenid-blog-default-${cleanPlatform}.png`;
  }
  if (cleanPlatform === 'linkedin') {
    return BLOG_SOCIAL_IMAGE_BY_SLUG[cleanPostSlug];
  }
  if (cleanPlatform === 'master') {
    return `${SOCIAL_IMAGE_BASE_PATH}/master/${cleanPostSlug}-master.png`;
  }
  return `${SOCIAL_IMAGE_BASE_PATH}/platforms/${cleanPostSlug}-${cleanPlatform}.png`;
}

export function getBlogSocialImageUrl(slug, baseUrl = SITE_URL, platform = 'linkedin') {
  return `${cleanBaseUrl(baseUrl)}${getBlogSocialImagePath(slug, platform)}`;
}

export function getBlogSocialImageAlt(titleOrSlug) {
  const label = String(titleOrSlug || 'ElevenID LLC Blog').trim();
  return `${label} social preview image for ElevenID LLC`;
}

export function getBlogSocialImagePrompt(post) {
  const title = String(post?.title || post?.slug || 'ElevenID LLC Blog').trim();
  const summary = String(post?.summary || '').trim();
  const category = String(post?.category || 'Identity Infrastructure').trim();
  return [
    'Create clean conceptual artwork for an ElevenID LLC blog social image.',
    `Topic: ${title}.`,
    summary ? `Article summary: ${summary}` : '',
    `Category: ${category}.`,
    'Use blue, teal, and green identity-infrastructure visual language with protocol diagrams, trust graphs, credential/document/security motifs, and polished enterprise composition.',
    'Do not include readable text, logos, people, customer marks, pricing claims, compliance claims, security guarantees, or watermarks.',
    'Leave enough negative space for deterministic title and brand overlays added later by repo tooling.',
  ].filter(Boolean).join('\n');
}

export function getBlogSocialImageSet(slug, baseUrl = SITE_URL) {
  const platforms = Object.keys(SOCIAL_IMAGE_PLATFORM_SPECS);
  const platformImages = Object.fromEntries(
    platforms.map((platform) => [
      platform,
      {
        path: getBlogSocialImagePath(slug, platform),
        url: getBlogSocialImageUrl(slug, baseUrl, platform),
        ...SOCIAL_IMAGE_PLATFORM_SPECS[platform],
      },
    ]),
  );

  return {
    master: {
      path: getBlogSocialImagePath(slug, 'master'),
      url: getBlogSocialImageUrl(slug, baseUrl, 'master'),
      width: 1200,
      height: 675,
      format: 'png',
    },
    platforms: platformImages,
  };
}

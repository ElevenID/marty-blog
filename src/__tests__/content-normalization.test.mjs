import { describe, expect, it } from 'vitest';

import { BLOG_AUTHORS } from '../data/blogAuthors';
import { GUIDE_ARTICLES } from '../data/guideContent';
import { BLOG_POSTS } from '../data/blogPosts';
import { BLOG_ROADMAP } from '../data/blogRoadmap';
import { BLOG_SERIES } from '../data/blogSeries';
import { normalizeBlogText } from '../utils/blogText';

describe('blog content normalization', () => {
  it('repairs common mojibake sequences', () => {
    expect(normalizeBlogText("MartyΓÇÖs flows ΓÇö now")).toBe("Marty's flows - now");
  });

  it('exports normalized reader-facing content', () => {
    const serialized = JSON.stringify({
      posts: BLOG_POSTS,
      guides: GUIDE_ARTICLES,
      authors: BLOG_AUTHORS,
      roadmap: BLOG_ROADMAP,
      series: BLOG_SERIES,
    });

    expect(serialized).not.toMatch(/ΓÇ|Γå|┬╖|Γ£ô/);
  });
});
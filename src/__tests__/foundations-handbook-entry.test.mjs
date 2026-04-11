import { describe, expect, it } from 'vitest';

import { getHandbookEntry } from '../components/FoundationsPage';

describe('foundations handbook entry resolution', () => {
  it('uses guide metadata for guide-owned operational collision slugs', () => {
    const entry = getHandbookEntry('offline-verification-guide');

    expect(entry).toMatchObject({
      isGuide: true,
      chapterTitle: 'Deployments',
      article: {
        slug: 'offline-verification-guide',
        chapterId: 5,
      },
    });
  });

  it('keeps conceptual duplicate slugs on the browse-visible blog surface', () => {
    const entry = getHandbookEntry('selective-disclosure');

    expect(entry).toMatchObject({
      isGuide: false,
      chapterTitle: null,
      article: {
        slug: 'selective-disclosure',
      },
    });
  });
});
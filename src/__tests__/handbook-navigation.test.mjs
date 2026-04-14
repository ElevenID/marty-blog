import { describe, expect, it } from 'vitest';

import {
  HANDBOOK_ARTICLE_SLUGS,
  getHandbookArticleNavigation,
  isHandbookArticleSlug,
} from '../data/handbookContent';

describe('handbook navigation metadata', () => {
  it('keeps the handbook article order stable', () => {
    expect(HANDBOOK_ARTICLE_SLUGS[0]).toBe('what-is-digital-identity');
    expect(HANDBOOK_ARTICLE_SLUGS.at(-1)).toBe('eudi-wallet-model-explained');
    expect(HANDBOOK_ARTICLE_SLUGS).toContain('trust-profiles-explained');
  });

  it('returns previous and next handbook links for middle articles', () => {
    expect(getHandbookArticleNavigation('trust-profiles-explained')).toMatchObject({
      part: 'II',
      partTitle: 'The Marty Protocol Model',
      prevSlug: 'the-marty-identity-model',
      nextSlug: 'credential-templates-designing-what-gets-issued',
    });
  });

  it('marks handbook boundaries correctly', () => {
    expect(getHandbookArticleNavigation('what-is-digital-identity')).toMatchObject({
      prevSlug: null,
      nextSlug: 'verifiable-credentials-explained',
    });
    expect(getHandbookArticleNavigation('eudi-wallet-model-explained')).toMatchObject({
      prevSlug: 'credential-portability-across-wallets',
      nextSlug: null,
    });
    expect(isHandbookArticleSlug('what-is-digital-identity')).toBe(true);
    expect(isHandbookArticleSlug('foundations-identity')).toBe(false);
  });
});
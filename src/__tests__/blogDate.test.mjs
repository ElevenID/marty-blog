import { execFileSync } from 'node:child_process';
import { describe, expect, it } from 'vitest';

import { formatBlogDate } from '../utils/blogDate.js';

describe('publication calendar dates', () => {
  it('retains the existing full and abbreviated month formats', () => {
    expect(formatBlogDate('2026-11-14')).toBe('November 14, 2026');
    expect(formatBlogDate('2026-11-14', 'short')).toBe('Nov 14, 2026');
  });

  it.each(['America/Denver', 'America/Los_Angeles', 'UTC', 'Pacific/Kiritimati'])(
    'preserves the publication day in %s',
    (timeZone) => {
      const moduleUrl = new URL('../utils/blogDate.js', import.meta.url).href;
      const script = `
        import { formatBlogDate } from ${JSON.stringify(moduleUrl)};
        console.log(JSON.stringify([
          formatBlogDate('2026-01-01'),
          formatBlogDate('2024-02-29'),
          formatBlogDate('2026-11-14', 'short'),
        ]));
      `;
      const output = execFileSync(process.execPath, ['--input-type=module', '-e', script], {
        encoding: 'utf8',
        env: { ...process.env, TZ: timeZone },
      });
      expect(JSON.parse(output)).toEqual(['January 1, 2026', 'February 29, 2024', 'Nov 14, 2026']);
    },
  );
});

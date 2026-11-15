/** Format a publication's calendar date without shifting it to the reader's timezone. */
export function formatBlogDate(value, month = 'long') {
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month,
    day: 'numeric',
    timeZone: 'UTC',
  });
}

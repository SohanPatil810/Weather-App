export function formatDate(timestamp, locale = 'en-US') {
  return new Intl.DateTimeFormat(locale, { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date(timestamp * 1000));
}

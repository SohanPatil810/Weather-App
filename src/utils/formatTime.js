export function formatTime(timestamp, locale = 'en-US', options = {}) {
  return new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: '2-digit', hour12: true, ...options }).format(new Date(timestamp * 1000));
}

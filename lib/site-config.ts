/**
 * Returns the canonical base URL of the site.
 * Automatically adapts to Vercel production URLs, preview URLs, custom domain env vars, or fallback.
 */
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    const url = process.env.NEXT_PUBLIC_SITE_URL.trim().replace(/\/+$/, '');
    return url.startsWith('http') ? url : `https://${url}`;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'https://speedometer.tools';
}

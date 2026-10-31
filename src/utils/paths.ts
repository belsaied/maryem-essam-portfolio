/**
 * Utility functions for resolving asset paths and URLs relative to Astro's BASE_URL.
 */

// Normalized base URL guaranteed to end with a single trailing slash, e.g. "/maryem-essam-portfolio/" or "/"
export const BASE = (import.meta.env.BASE_URL || '/').endsWith('/')
  ? (import.meta.env.BASE_URL || '/')
  : `${import.meta.env.BASE_URL}/`;

/**
 * Safely resolves a path relative to the base URL.
 * Handles leading slashes cleanly and prevents double slashes or missing slashes.
 * 
 * @example
 * withBase('favicon.svg')   => '/maryem-essam-portfolio/favicon.svg'
 * withBase('/favicon.svg')  => '/maryem-essam-portfolio/favicon.svg'
 * withBase('#hero')        => '/maryem-essam-portfolio/#hero'
 */
export function withBase(path: string = ''): string {
  if (!path) return BASE;
  // If it's already an absolute external URL or special scheme, return as-is
  if (
    /^(?:[a-z]+:)?\/\//i.test(path) ||
    path.startsWith('data:') ||
    path.startsWith('tel:') ||
    path.startsWith('mailto:')
  ) {
    return path;
  }
  // If it's a hash anchor
  if (path.startsWith('#')) {
    return `${BASE}${path}`;
  }
  const cleanPath = path.replace(/^\/+/, '');
  return `${BASE}${cleanPath}`;
}

/**
 * Resolves an absolute canonical URL using the configured site origin and base path.
 */
export function toAbsoluteUrl(path: string = '', site?: string | URL): string {
  if (/^(?:[a-z]+:)?\/\//i.test(path)) {
    return path;
  }
  const siteStr = site
    ? (typeof site === 'string' ? site : site.origin)
    : 'https://belsaied.github.io';
  const cleanOrigin = siteStr.replace(/\/+$/, '');
  const relativeWithBase = withBase(path);
  return `${cleanOrigin}${relativeWithBase}`;
}

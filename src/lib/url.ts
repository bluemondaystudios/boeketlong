// Prefixes a root-relative path with the deploy base, so the site works both on
// www.boeketlong.co.za (base "/") and on a GitHub Pages preview (base "/boeketlong/").
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}${path}`;

/** Strips the deploy base from a pathname, giving the path on the live domain. */
export const unbase = (pathname: string) => (base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname);

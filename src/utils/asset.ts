/**
 * Asset URL helper that prepends Vite's configured BASE_URL.
 * Ensures assets resolve correctly on root domains, localhost, and GitHub Pages subpaths (/BDS/).
 */
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('./')
    ? path.slice(2)
    : path.startsWith('/')
      ? path.slice(1)
      : path;
  return `${cleanBase}${cleanPath}`;
};

/**
 * Single source of truth for every internal URL.
 * The NEPED overview is the site's homepage ("/"); other NEPED pages live under /neped,
 * NEPeD pages under /neped-energy, pages covering both entities (blog, gallery) stay at the root.
 */

export const SHARED_PATHS = {
  home: "/",
  landingPreview: "/landing-preview",
  blog: "/blog",
  blogPost: (slug: string) => `/blog/${slug}`,
  gallery: "/gallery",
  galleryAlbum: (slug: string) => `/gallery/${slug}`,
} as const;

export const NEPED_PATHS = {
  /** The NEPED overview is the homepage */
  home: "/",
  /** Old address of the NEPED overview (redirects to home) */
  legacyHome: "/neped",
  about: "/neped/about",
  projects: "/neped/projects",
  project: (slug: string) => `/neped/projects/${slug}`,
  phase: (slug: string) => `/neped/phases/${slug}`,
  successStory: (slug: string) => `/neped/success-stories/${slug}`,
} as const;

export const NEPED_ENERGY_PATHS = {
  home: "/neped-energy",
  about: "/neped-energy/about",
  technology: "/neped-energy/technology",
  product: (slug: string) => `/neped-energy/technology/${slug}`,
  impact: "/neped-energy/impact",
} as const;

/** True when the pathname belongs to the NEPED section: the homepage and /neped/* (not NEPeD, whose prefix also starts with "/neped"). */
export function isNepedPath(pathname: string) {
  return (
    pathname === NEPED_PATHS.home ||
    pathname === NEPED_PATHS.legacyHome ||
    pathname.startsWith(`${NEPED_PATHS.legacyHome}/`)
  );
}

/** True when the pathname belongs to the NEPeD section. */
export function isNepedEnergyPath(pathname: string) {
  return pathname === NEPED_ENERGY_PATHS.home || pathname.startsWith(`${NEPED_ENERGY_PATHS.home}/`);
}

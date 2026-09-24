/**
 * Single source of truth for every internal URL.
 * NEPED pages live under /neped, NEPeD pages under /neped-energy,
 * pages covering both entities (landing, blog, gallery) stay at the root.
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
  home: "/neped",
  about: "/neped/about",
  projects: "/neped/projects",
  project: (slug: string) => `/neped/projects/${slug}`,
} as const;

export const NEPED_ENERGY_PATHS = {
  home: "/neped-energy",
  about: "/neped-energy/about",
  technology: "/neped-energy/technology",
  product: (slug: string) => `/neped-energy/technology/${slug}`,
  impact: "/neped-energy/impact",
} as const;

/** True when the pathname belongs to the NEPED section (not NEPeD, whose prefix also starts with "/neped"). */
export function isNepedPath(pathname: string) {
  return pathname === NEPED_PATHS.home || pathname.startsWith(`${NEPED_PATHS.home}/`);
}

/** True when the pathname belongs to the NEPeD section. */
export function isNepedEnergyPath(pathname: string) {
  return pathname === NEPED_ENERGY_PATHS.home || pathname.startsWith(`${NEPED_ENERGY_PATHS.home}/`);
}

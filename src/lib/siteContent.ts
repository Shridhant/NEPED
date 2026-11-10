import { PROJECT_LIST as BUNDLED_PROJECTS, type ProjectListItem } from "@/data/neped/projectList";
import { GALLERY_ALBUMS_DATA as BUNDLED_ALBUMS, type GalleryAlbumData } from "@/data/shared/galleryAlbumsData";

/**
 * Content edited in the CMS (Strapi). scripts/fetch-cms.mjs writes it to src/generated/cms/ before
 * each production build; when that folder is absent (local development, or CMS not connected)
 * the site falls back to the data files in src/data.
 */
const generated = import.meta.glob("/src/generated/cms/*.json", { eager: true, import: "default" }) as Record<string, unknown>;

function fromCms<T>(name: string, fallback: T): T {
  return (generated[`/src/generated/cms/${name}.json`] as T | undefined) ?? fallback;
}

/** Projects table + homepage timeline, newest first */
export const PROJECT_LIST: ProjectListItem[] = fromCms("projects", BUNDLED_PROJECTS);

/** Gallery page albums */
export const GALLERY_ALBUMS_DATA: GalleryAlbumData[] = fromCms("galleryAlbums", BUNDLED_ALBUMS);

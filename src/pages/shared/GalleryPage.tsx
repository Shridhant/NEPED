import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import { PhotoAlbums } from "@/components/ui/photo-albums";
import { GALLERY_ALBUMS_DATA } from "@/data/shared/galleryAlbumsData";

/** Shared gallery (NEPED + NEPeD): one album per state folder in public/gallery. */
export function GalleryPage() {
  useEffect(() => {
    document.title = "Gallery";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full pt-28 sm:pt-36 pb-24">
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-[40px] sm:text-[64px] font-light text-[#000000] tracking-[-1.55px] leading-[1.05] mb-12 sm:mb-16">Gallery</h1>
        <PhotoAlbums albums={GALLERY_ALBUMS_DATA} />
      </motion.section>
    </div>
  );
}

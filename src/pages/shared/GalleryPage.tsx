import { useEffect } from "react";
import { PhotoAlbums } from "@/components/ui/photo-albums";
import { GALLERY_ALBUMS_DATA } from "@/data/shared/galleryAlbumsData";
import { BlurReveal } from "@/components/ui/blur-reveal";

/** Shared gallery (NEPED + NEPeD): one album per state folder in public/gallery. */
export function GalleryPage() {
  useEffect(() => {
    document.title = "Gallery";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full pt-28 sm:pt-36 pb-24">
      {/* No scroll-fade on this section: the albums show as soon as the page opens */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <BlurReveal as="h1" className="text-[40px] sm:text-[64px] font-light text-[#000000] tracking-[-1.55px] leading-[1.05] mb-12 sm:mb-16">{"Gallery"}</BlurReveal>
        <PhotoAlbums albums={GALLERY_ALBUMS_DATA} />
      </section>
    </div>
  );
}

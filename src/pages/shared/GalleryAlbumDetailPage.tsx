import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import { loadAllGalleryAlbums } from "@/lib/contentLoader";
import { type GalleryAlbum, type GalleryPhoto } from "@/data/shared/galleryData";
import {
  SectionLabel,
  SectionHeading,
  PillBadge,
} from "@/components/ui/AkerPrimitives";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { NEPED_ENERGY_PATHS, SHARED_PATHS } from "@/routes/paths";

export function GalleryAlbumDetailPage() {
  const { albumSlug } = useParams<{ albumSlug: string }>();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const album: GalleryAlbum | undefined = loadAllGalleryAlbums().find(
    (a) => a.slug === albumSlug || a.id === albumSlug
  );

  useEffect(() => {
    if (album) {
      document.title = `${album.title} (${album.eventDate}) • NEPeD Field Archives`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [album]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (selectedPhotoIndex === null || !album) return;
      if (e.key === "Escape") setSelectedPhotoIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedPhotoIndex((prev) =>
          prev !== null && prev < album.photos.length - 1 ? prev + 1 : 0
        );
      }
      if (e.key === "ArrowLeft") {
        setSelectedPhotoIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : album.photos.length - 1
        );
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, album]);

  if (!album) {
    return (
      <div className="mx-auto max-w-[800px] px-6 py-28 text-center space-y-6">
        <span className="text-[12px] font-mono uppercase text-[#8d8d8d]">
          404 • Album Not Found
        </span>
        <h1 className="text-[32px] font-light text-[#000000]">
          Event Gallery Record Unavailable
        </h1>
        <p className="text-[15px] text-[#666666]">
          The field gallery album you requested could not be located in the photographic index.
        </p>
        <div className="pt-4">
          <Link
            to={SHARED_PATHS.gallery}
            className="inline-flex items-center gap-2 bg-[#1c1c1c] text-[#ffffff] px-6 py-3 rounded-full text-[14px] hover:bg-[#070707] transition-all"
          >
            ← Return to All Gallery Albums
          </Link>
        </div>
      </div>
    );
  }

  // Find adjacent albums
  const allAlbums = loadAllGalleryAlbums();
  const currentIndex = allAlbums.findIndex((a) => a.id === album.id);
  const prevAlbum = currentIndex > 0 ? allAlbums[currentIndex - 1] : null;
  const nextAlbum = currentIndex < allAlbums.length - 1 ? allAlbums[currentIndex + 1] : null;
  const relatedAlbums = allAlbums.filter((a) => a.id !== album.id).slice(0, 3);

  const selectedPhoto: GalleryPhoto | null =
    selectedPhotoIndex !== null && album.photos[selectedPhotoIndex]
      ? album.photos[selectedPhotoIndex]
      : null;

  return (
    <div className="w-full space-y-16 sm:space-y-24">
      {/* 1. BREADCRUMBS & TOP NAVIGATION */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-24 sm:pt-28">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5e4e4] pb-4">
          <div className="flex items-center gap-2 text-[12px] text-[#8d8d8d] font-mono">
            <Link to="/" className="hover:text-[#000000] transition-colors">
              NEPeD
            </Link>
            <span>/</span>
            <Link to={SHARED_PATHS.gallery} className="hover:text-[#000000] transition-colors">
              Field Gallery
            </Link>
            <span>/</span>
            <span className="text-[#000000] font-medium truncate max-w-[200px] sm:max-w-none">
              {album.title}
            </span>
          </div>

          <Link
            to={SHARED_PATHS.gallery}
            className="text-[12px] text-[#b75928] hover:text-[#000000] font-medium flex items-center gap-1 transition-colors"
          >
            <span>← All Event Albums</span>
          </Link>
        </div>
      </section>

      {/* 2. EVENT ALBUM HERO DOSSIER */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-mono uppercase bg-[#b75928] text-white px-2.5 py-1 rounded-[4px] font-semibold">
                {album.eventDate}
              </span>
              <PillBadge dark={true}>{album.category}</PillBadge>
              <span className="text-[12px] font-mono text-[#8d8d8d]">
                {album.photos.length} Verified Photographs
              </span>
            </div>

            <h1 className="text-[34px] sm:text-[48px] md:text-[54px] font-light text-[#ffffff] tracking-[-1.2px] leading-[1.1]">
              {album.title}
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#e5e4e4]/90 font-light leading-relaxed">
              {album.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-[13px] border-t border-white/10 text-[#8d8d8d]">
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#8d8d8d]">Event Location</span>
                <span className="text-[#ffffff] font-medium">{album.location}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#8d8d8d]">District / Region</span>
                <span className="text-[#ffffff] font-medium">{album.district}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#8d8d8d]">Collection Code</span>
                <span className="text-[#ffffff] font-medium font-mono">NEPED-EVT-{album.id.padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. EVENT PHOTOGRAPHIC GALLERY GRID */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <SectionLabel>Photo Archive Index</SectionLabel>
            <SectionHeading size="md" className="mt-1">
              Photographs for this Event & Day
            </SectionHeading>
          </div>
          <span className="text-[12px] text-[#8d8d8d] font-mono hidden sm:inline">
            Click any photograph to inspect in full-screen
          </span>
        </div>

        {/* Masonry-Style Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {album.photos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group bg-[#ffffff] border border-[#e5e4e4] hover:border-[#000000] rounded-[8px] overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              {/* Photo Frame with 4:3 or 16:10 ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#070707]">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-black text-[12px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Maximize2 size={13} />
                    <span>Expand Photo</span>
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5">
                  <span className="text-[10px] font-mono bg-black/70 text-white px-2 py-0.5 rounded-[3px] border border-white/20">
                    {idx + 1} / {album.photos.length}
                  </span>
                </div>
              </div>

              {/* Photo Caption & Metadata */}
              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-[15px] font-medium text-[#000000] group-hover:text-[#b75928] transition-colors leading-snug">
                    {photo.title}
                  </h4>
                  <p className="text-[12px] text-[#666666] mt-1 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#e5e4e4] flex items-center justify-between text-[11px] font-mono text-[#8d8d8d]">
                  <span>{photo.location || album.location}</span>
                  <span>{photo.year || album.eventDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. EVENT HISTORICAL CONTEXT & FIELD HIGHLIGHTS */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <SectionLabel>Field Log & Background</SectionLabel>
              <h3 className="text-[26px] sm:text-[32px] font-light text-[#000000] tracking-tight">
                Historical Context & Operational Significance
              </h3>
              <p className="text-[16px] text-[#333333] leading-relaxed pt-2">
                {album.historicalContext}
              </p>
            </div>

            {/* Key Event Highlights Checklist */}
            <div className="bg-[#e5e4e4]/30 border border-[#e5e4e4] rounded-[8px] p-6 sm:p-8 space-y-4">
              <h4 className="text-[18px] font-medium text-[#000000]">
                Event Key Takeaways & Field Milestones
              </h4>
              <div className="space-y-3">
                {album.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-[#1c1c1c] text-white text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-[14px] text-[#444444] leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            {/* Metadata Card */}
            <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-6 space-y-4">
              <span className="text-[11px] font-mono uppercase text-[#8d8d8d] block border-b border-[#e5e4e4] pb-2">
                Event Classification
              </span>
              <div className="space-y-3 text-[13px]">
                <div>
                  <span className="text-[#8d8d8d] block text-[11px] uppercase font-mono">Category</span>
                  <span className="text-[#000000] font-medium">{album.category}</span>
                </div>
                <div>
                  <span className="text-[#8d8d8d] block text-[11px] uppercase font-mono">Date / Era</span>
                  <span className="text-[#000000] font-medium">{album.eventDate}</span>
                </div>
                <div>
                  <span className="text-[#8d8d8d] block text-[11px] uppercase font-mono">District</span>
                  <span className="text-[#000000] font-medium">{album.district}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="pt-2 border-t border-[#e5e4e4]">
                <span className="text-[11px] font-mono uppercase text-[#8d8d8d] block mb-2">Archival Tags</span>
                <div className="flex flex-wrap gap-1.5">
                  {album.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] bg-[#e5e4e4]/60 text-[#333333] px-2 py-0.5 rounded-[4px] font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Switch to Hydroger Tech */}
            <div className="bg-[#121f1a] text-[#ffffff] rounded-[8px] p-6 space-y-3 border border-[#193f32]">
              <span className="text-[11px] font-mono uppercase text-[#e5e4e4]/70 block">
                Technical Specifications
              </span>
              <h4 className="text-[17px] font-light text-[#ffffff]">
                See the technology behind this deployment
              </h4>
              <p className="text-[12px] text-[#e5e4e4]/80 leading-relaxed">
                Explore the indigenous turbine mechanics, penstock specifications, and electronic load controllers.
              </p>
              <div className="pt-1">
                <Link
                  to={NEPED_ENERGY_PATHS.technology}
                  className="text-[12px] text-[#b75928] hover:text-white underline font-medium transition-colors"
                >
                  View Hydroger Specifications →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. PREVIOUS / NEXT ALBUM NAVIGATION */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="border-t border-b border-[#e5e4e4] py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevAlbum ? (
            <Link
              to={SHARED_PATHS.galleryAlbum(prevAlbum.slug)}
              className="group p-4 rounded-[6px] hover:bg-[#e5e4e4]/20 transition-colors"
            >
              <span className="text-[11px] font-mono text-[#8d8d8d] block mb-1">
                ← Previous Album
              </span>
              <h4 className="text-[16px] font-medium text-[#000000] group-hover:text-[#b75928] transition-colors">
                {prevAlbum.title}
              </h4>
            </Link>
          ) : (
            <div />
          )}

          {nextAlbum ? (
            <Link
              to={SHARED_PATHS.galleryAlbum(nextAlbum.slug)}
              className="group p-4 rounded-[6px] hover:bg-[#e5e4e4]/20 transition-colors sm:text-right"
            >
              <span className="text-[11px] font-mono text-[#8d8d8d] block mb-1">
                Next Album →
              </span>
              <h4 className="text-[16px] font-medium text-[#000000] group-hover:text-[#b75928] transition-colors">
                {nextAlbum.title}
              </h4>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </motion.section>

      {/* 6. RELATED ALBUMS GRID */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <SectionLabel>More Collections</SectionLabel>
            <SectionHeading size="md" className="mt-1">
              Explore Other Event Galleries
            </SectionHeading>
          </div>
          <Link to={SHARED_PATHS.gallery} className="text-[13px] text-[#b75928] hover:text-[#000000] font-medium">
            View All Albums →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedAlbums.map((rel) => (
            <Link
              key={rel.id}
              to={SHARED_PATHS.galleryAlbum(rel.slug)}
              className="group bg-[#ffffff] border border-[#e5e4e4] hover:border-[#000000] rounded-[8px] overflow-hidden flex flex-col justify-between transition-all duration-200"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#070707] relative">
                <img
                  src={rel.coverImage}
                  alt={rel.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-black/70 text-white px-2 py-0.5 rounded-[3px]">
                  {rel.photos.length} Photos
                </span>
              </div>
              <div className="p-5">
                <div className="text-[10px] font-mono text-[#8d8d8d] mb-1">
                  {rel.eventDate} • {rel.district}
                </div>
                <h4 className="text-[16px] font-medium text-[#000000] group-hover:text-[#b75928] transition-colors">
                  {rel.title}
                </h4>
                <p className="text-[12px] text-[#666666] mt-1.5 line-clamp-2">
                  {rel.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* 7. FULL-SCREEN LIGHTBOX MODAL */}
      {selectedPhotoIndex !== null && selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn select-none">
          {/* Lightbox Header Bar */}
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-mono text-[#8d8d8d]">
                Photo {selectedPhotoIndex + 1} of {album.photos.length}
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[13px] text-[#ffffff] font-medium truncate max-w-sm">
                {selectedPhoto.title}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSelectedPhotoIndex(null)}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={22} />
            </button>
          </div>

          {/* Lightbox Main Image Display */}
          <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
            {/* Prev Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : album.photos.length - 1
                );
              }}
              className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-all cursor-pointer hover:scale-110"
              aria-label="Previous Photo"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Active Image */}
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-h-[72vh] max-w-full object-contain rounded-[4px] shadow-2xl transition-all duration-300"
            />

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) =>
                  prev !== null && prev < album.photos.length - 1 ? prev + 1 : 0
                );
              }}
              className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-all cursor-pointer hover:scale-110"
              aria-label="Next Photo"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Lightbox Footer Caption */}
          <div className="border-t border-white/10 pt-4 max-w-3xl mx-auto text-center space-y-1">
            <h4 className="text-[15px] font-medium text-white">
              {selectedPhoto.title}
            </h4>
            <p className="text-[13px] text-[#e5e4e4]/80 leading-relaxed">
              {selectedPhoto.caption}
            </p>
            <div className="pt-1 text-[11px] font-mono text-[#8d8d8d]">
              {selectedPhoto.location && `${selectedPhoto.location} • `}
              {selectedPhoto.year && `${selectedPhoto.year} • `}
              Press ESC or click close to exit
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

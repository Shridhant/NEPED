import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { loadAllGalleryAlbums } from "@/lib/contentLoader";
import { type GalleryAlbum } from "@/data/galleryData";
import { fadeUpOnView } from "@/lib/motionVariants";
import {
  SectionLabel,
  SectionHeading,
  PillBadge,
  TextArrowButton,
} from "@/components/ui/AkerPrimitives";

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    document.title = "Field Gallery & Event Archives • NEPED & NEPeD Energy";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const categories = [
    "All",
    "Field Deployments",
    "Youth Summits & Events",
    "Technology & Fabrication",
    "Village Committees & People",
    "Watershed Landscapes",
  ];

  const allAlbums = loadAllGalleryAlbums();
  const filteredAlbums: GalleryAlbum[] =
    activeCategory === "All"
      ? allAlbums
      : allAlbums.filter((album) => album.category === activeCategory);

  const totalPhotosCount = allAlbums.reduce(
    (acc, album) => acc + album.photos.length,
    0
  );

  return (
    <div className="w-full space-y-16 sm:space-y-24">
      {/* 1. FULL-BLEED HERO BANNER */}
      <section className="relative w-full min-h-[75vh] sm:min-h-[82vh] bg-[#070707] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/forest.png"
            alt="Nagaland Field Operations"
            className="w-full h-full object-cover opacity-45 filter brightness-[0.7] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/40" />
        </div>

        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 pt-16 sm:pt-20 max-w-[620px]"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#b75928]" />
            <span className="text-[12px] uppercase tracking-[0.12px] text-[#e5e4e4]/90 font-mono">
              Photographic Archives • 2007 – Present
            </span>
          </div>
          <h1 className="text-[38px] sm:text-[56px] md:text-[62px] font-light text-[#ffffff] tracking-[-1.55px] leading-[1.05]">
            Field Gallery & Event Logs
          </h1>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#e5e4e4]/90 font-normal leading-relaxed">
            Visual chronicle of indigenous hydroger installations, village energy committees, youth summits, and mountain watershed stewardship across Nagaland and Northeast India.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <TextArrowButton to="#albums" dark={true} variant="pill">
              Browse Event Albums
            </TextArrowButton>
            <Link
              to="/technology"
              className="text-[13px] text-[#e5e4e4]/80 hover:text-white transition-colors"
            >
              Hydroger Specs & Tech →
            </Link>
          </div>
        </motion.div>

        {/* Bottom Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.45, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 mt-auto pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-[13px] text-[#e5e4e4]/70"
        >
          <div className="flex items-center gap-6 sm:gap-10">
            <div>
              <span className="text-[20px] font-light text-[#ffffff] block">108+</span>
              <span className="text-[11px] font-mono text-[#8d8d8d] uppercase">Sites Electrified</span>
            </div>
            <div className="h-8 w-[1px] bg-white/15" />
            <div>
              <span className="text-[20px] font-light text-[#ffffff] block">{allAlbums.length}</span>
              <span className="text-[11px] font-mono text-[#8d8d8d] uppercase">Featured Albums</span>
            </div>
            <div className="h-8 w-[1px] bg-white/15" />
            <div>
              <span className="text-[20px] font-light text-[#ffffff] block">{totalPhotosCount}+</span>
              <span className="text-[11px] font-mono text-[#8d8d8d] uppercase">Archival Photos</span>
            </div>
          </div>
          <span className="text-[12px] font-mono text-[#8d8d8d]">
            Click album to expand full lightbox viewer ↓
          </span>
        </motion.div>
      </section>

      {/* 2. ALBUMS DIRECTORY & FILTERING */}
      <motion.section {...fadeUpOnView} id="albums" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#e5e4e4] pb-6 mb-8">
          <div>
            <SectionLabel>Event Collections</SectionLabel>
            <SectionHeading size="lg" className="mt-1">
              Field Deployments & Summits
            </SectionHeading>
            <p className="text-[14px] text-[#666666] mt-2">
              Explore documented events, village committee charters, and technology deployments.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-[1584px] text-[12px] font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#1c1c1c] text-[#ffffff]"
                    : "bg-[#e5e4e4]/60 text-[#000000] hover:bg-[#e5e4e4]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column or 3-Column Album Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlbums.map((album) => (
            <Link
              key={album.id}
              to={`/gallery/${album.slug}`}
              className="group bg-[#ffffff] border border-[#e5e4e4] hover:border-[#000000] rounded-[8px] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              {/* Photo Thumbnail with aspect-ratio 16:10 */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070707]">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <PillBadge dark={true} className="text-[10px] py-1 px-2.5">
                    {album.category}
                  </PillBadge>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#ffffff]/90">
                  <span>{album.location}</span>
                  <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-[4px] border border-white/20">
                    {album.photos.length} Photos
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[11px] font-mono text-[#8d8d8d] mb-1.5">
                    {album.eventDate} • {album.district}
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-[#000000] group-hover:text-[#b75928] transition-colors tracking-tight leading-snug">
                    {album.title}
                  </h3>
                  <p className="text-[13px] text-[#666666] mt-2 line-clamp-2 leading-relaxed">
                    {album.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#e5e4e4] flex items-center justify-between text-[12px]">
                  <span className="text-[#8d8d8d] font-mono">
                    Album #{album.id.padStart(2, "0")}
                  </span>
                  <span className="text-[#000000] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect Event Album</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* 3. ARCHIVAL PHOTOGRAPHIC SUBMISSION CTA */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-xl space-y-4">
            <SectionLabel dark={true} className="text-[#b75928]">
              Community Contributions
            </SectionLabel>
            <h3 className="text-[28px] sm:text-[36px] font-light text-[#ffffff] tracking-tight leading-tight">
              Have photographs of a NEPeD hydroger in your village?
            </h3>
            <p className="text-[14px] text-[#e5e4e4]/80 leading-relaxed">
              Help us expand the digital archives by sharing high-resolution photographs, field logs, or historical records of hydrogers and community microgrids.
            </p>
            <div className="pt-2">
              <a
                href="mailto:nepednagaland@gmail.com?subject=Field%20Gallery%20Photo%20Contribution"
                className="inline-flex items-center gap-2 bg-white text-black text-[13px] font-medium px-5 py-3 rounded-full hover:bg-[#e5e4e4] transition-colors"
              >
                <span>Submit Field Photos to Secretariat</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

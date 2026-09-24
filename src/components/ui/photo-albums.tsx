import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { motion, LayoutGroup, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryAlbumData, GalleryPhoto } from "@/data/shared/galleryAlbumsData";

/*
 * Adapted from the "PhotoAlbums" component: stacked album cards that expand (shared-layout animation)
 * into a photo grid. Changes for this site: albums come from props, the layout is wider
 * (up to 4 albums per row), and photos open in a full-screen preview (← / → / Esc).
 */

const transition = { type: "spring" as const, stiffness: 280, damping: 32, mass: 1 };

export function PhotoAlbums({ albums }: { albums: GalleryAlbumData[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const layoutGroupId = useId();
  const selected = albums.find((a) => a.id === selectedId);

  const back = () => {
    setPreviewIndex(null);
    setSelectedId(null);
  };

  return (
    <div className="w-full">
      <LayoutGroup id={layoutGroupId}>
        {selected ? (
          <ExpandedAlbum album={selected} onBack={back} onOpen={setPreviewIndex} />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-12 gap-y-16 sm:gap-y-20">
            {albums.map((album) => (
              <AlbumCard key={album.id} album={album} onClick={() => setSelectedId(album.id)} />
            ))}
          </div>
        )}
      </LayoutGroup>

      {/* Portal to <body> so the fixed overlay isn't trapped by transformed (animated) ancestors */}
      {createPortal(
        <AnimatePresence>
          {selected && previewIndex !== null && (
            <PhotoPreview
              photos={selected.photos}
              index={previewIndex}
              title={selected.title}
              onChange={setPreviewIndex}
              onClose={() => setPreviewIndex(null)}
            />
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  );
}

function AlbumCard({ album, onClick }: { album: GalleryAlbumData; onClick: () => void }) {
  const stack = album.photos.slice(0, 3);
  // Spread the stack evenly whatever the photo count (1–3)
  const rotations = stack.length === 1 ? [0] : stack.length === 2 ? [-10, 10] : [-14, 14, 0];

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="group flex cursor-pointer flex-col items-center outline-none select-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) rounded-[24px]"
    >
      <div className="relative mb-4 flex aspect-square w-full items-center justify-center overflow-visible">
        {stack.map((photo, i) => (
          <motion.div
            key={photo.id}
            layoutId={`photo-${photo.id}`}
            className="absolute w-[62%] aspect-square overflow-visible rounded-[22px] bg-[#e5e4e4] ring-1 ring-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
            animate={{ rotate: rotations[i] }}
            whileHover={{ scale: 1.05, y: -6, transition: { duration: 0.2 } }}
            transition={transition}
          >
            <img src={photo.src} alt="" className="pointer-events-none h-full w-full rounded-[22px] object-cover select-none" />
          </motion.div>
        ))}
      </div>
      <motion.h3
        layoutId={`title-${album.id}`}
        className="px-2 text-center text-[17px] sm:text-[19px] font-light tracking-[-0.3px] text-[#000000]"
        transition={transition}
      >
        {album.title}
      </motion.h3>
      <span className="mt-1 text-[12px] font-mono text-[#8d8d8d]">{album.photos.length}</span>
    </motion.button>
  );
}

function ExpandedAlbum({
  album,
  onBack,
  onOpen,
}: {
  album: GalleryAlbumData;
  onBack: () => void;
  onOpen: (index: number) => void;
}) {
  const stacked = new Set(album.photos.slice(0, 3).map((p) => p.id));

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4 pb-8">
        <button
          type="button"
          onClick={onBack}
          className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-(--brand-accent)/10 text-(--brand-accent) transition-transform duration-150 ease-out active:scale-[0.96] hover:bg-(--brand-accent)/20"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
          <span className="sr-only">Go back</span>
        </button>
        <motion.h2
          layoutId={`title-${album.id}`}
          className="text-[30px] sm:text-[40px] font-light leading-tight tracking-[-1px] text-[#000000]"
          transition={transition}
        >
          {album.title}
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {album.photos.map((photo, idx) => (
          <motion.button
            type="button"
            key={photo.id}
            layoutId={`photo-${photo.id}`}
            onClick={() => onOpen(idx)}
            aria-label={photo.alt || `Open photo ${idx + 1}`}
            className="group aspect-square overflow-hidden rounded-[18px] bg-[#e5e4e4] ring-1 ring-black/5 cursor-zoom-in"
            initial={stacked.has(photo.id) ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={transition}
          >
            <img src={photo.src} alt={photo.alt} className="h-full w-full rounded-[18px] object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function PhotoPreview({
  photos,
  index,
  title,
  onChange,
  onClose,
}: {
  photos: GalleryPhoto[];
  index: number;
  title: string;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const count = photos.length;
  const go = useCallback((dir: 1 | -1) => onChange((index + dir + count) % count), [index, count, onChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [go, onClose]);

  const photo = photos[index];
  const control = "flex size-12 items-center justify-center rounded-full bg-white/10 text-[#ffffff] hover:bg-white/20 transition-colors cursor-pointer";

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.img
        key={photo.id}
        src={photo.src}
        alt={photo.alt}
        className="max-h-full max-w-full rounded-[12px] object-contain shadow-2xl"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      />
      <button type="button" aria-label="Close" onClick={onClose} className={cn(control, "absolute top-4 right-4 sm:top-6 sm:right-6")}>
        <X size={20} />
      </button>
      {count > 1 && (
        <>
          <button type="button" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); go(-1); }} className={cn(control, "absolute left-3 sm:left-6 top-1/2 -translate-y-1/2")}>
            <ChevronLeft size={22} />
          </button>
          <button type="button" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); go(1); }} className={cn(control, "absolute right-3 sm:right-6 top-1/2 -translate-y-1/2")}>
            <ChevronRight size={22} />
          </button>
        </>
      )}
      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[12px] font-mono text-[#ffffff]/70">
        {index + 1} / {count}
      </span>
    </motion.div>
  );
}

export default PhotoAlbums;

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import galleryImages, { categories } from "../data/gallery";
import GalleryCard from "./GalleryCard";
import Lightbox from "./Lightbox";
import AlbumModal from "./AlbumModal";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex]   = useState(null);
  const [activeAlbum, setActiveAlbum]       = useState(null);
  const ref = useScrollReveal([activeCategory]);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const nonFolderImages = useMemo(
    () => filtered.filter((img) => !img.isFolder),
    [filtered]
  );

  const handleCardClick = (index) => {
    const item = filtered[index];
    if (item?.isFolder) {
      setActiveAlbum(item);
    } else {
      const nonFolderIdx = nonFolderImages.findIndex((img) => img.id === item?.id);
      setLightboxIndex(nonFolderIdx !== -1 ? nonFolderIdx : 0);
    }
  };

  return (
    <section id="gallery" ref={ref} className="relative bg-char-900 grain py-28 md:py-36 px-6">
      {/* Subtle brick glow bottom-left */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[35vw] h-[35vw] pointer-events-none opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(191,91,52,1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">

        {/* ── Section Header (LENSCRAFT Style) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 reveal">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-beigegold-500" />
              <span className="text-beigegold-500 text-[10px] tracking-[0.3em] uppercase font-bold font-body">
                OUR PORTFOLIO
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-semibold text-ivory tracking-tight">
              Moments We've Captured
            </h2>
          </div>

          <p className="text-ivory/60 font-body text-xs md:text-sm max-w-md mt-4 md:mt-0">
            A curated portfolio of sacred temples, divine alankara rituals, traditional portraits and grand cultural celebrations.
          </p>
        </div>

        {/* ── Category Filter Buttons ── */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 reveal reveal-delay-1">
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              layout
              onClick={() => setActiveCategory(cat.key)}
              whileTap={{ scale: 0.96 }}
              className={`px-4 md:px-5 py-2 text-[10px] md:text-[11px] tracking-[0.2em] uppercase border transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-brick-500 border-brick-500 text-char-950 font-semibold shadow-[0_4px_16px_-4px_rgba(191,91,52,0.5)]"
                  : "border-ivory/15 text-ivory/55 hover:border-gold-400/50 hover:text-gold-400"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* ── Masonry Grid ── */}
        <div className="masonry-grid reveal reveal-delay-2">
          <AnimatePresence>
            {filtered.map((image, index) => (
              <div key={image.id} className="masonry-item">
                <GalleryCard
                  image={image}
                  index={index}
                  onOpen={() => handleCardClick(index)}
                />
              </div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ivory/45 py-20 font-light">
            No photographs in this category yet.
          </p>
        )}
      </div>

      {/* Album Folder Modal */}
      {activeAlbum && (
        <AlbumModal
          album={activeAlbum}
          onClose={() => setActiveAlbum(null)}
        />
      )}

      {/* Standard Image Lightbox */}
      <Lightbox
        images={nonFolderImages}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}

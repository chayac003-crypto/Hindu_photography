import { useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export default function Lightbox({ images, activeIndex, onClose, onNavigate }) {
  const isOpen       = activeIndex !== null && activeIndex >= 0 && activeIndex < images.length && Boolean(images[activeIndex]);
  const image        = isOpen ? images[activeIndex] : null;
  const touchStartX  = useRef(null);

  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  // Keyboard listener
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft")  goPrev();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, goNext, goPrev]);

  // Touch/swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={image.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-char-950/98 backdrop-blur-xl flex flex-col items-center overflow-y-auto px-4 pt-20 pb-10 md:p-12"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          {/* Top Fixed Control Bar */}
          <div className="fixed top-3 left-4 right-4 md:top-6 md:left-8 md:right-8 z-[10000] flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-char-900/95 border border-beigegold-500/50 backdrop-blur-xl shadow-2xl">
            <button
              onClick={onClose}
              aria-label="Go back to website"
              className="px-4 py-2 bg-beigegold-500 hover:bg-beigegold-400 text-char-950 font-bold text-xs tracking-wider uppercase rounded-lg shadow-lg transition-all flex items-center gap-1.5 font-body"
              title="Click here to go back to the main website"
            >
              <span>👈 CLOSE & GO BACK</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close photo"
              className="p-2 text-ivory/70 hover:text-beigegold-400 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* ── Nav arrows ── */}
          <button
            onClick={goPrev}
            aria-label="Previous image"
            className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 text-ivory/60 hover:text-beigegold-400 bg-char-900/80 hover:bg-char-800 rounded-full transition-all duration-300 backdrop-blur-md border border-white/10 shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next image"
            className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 text-ivory/60 hover:text-beigegold-400 bg-char-900/80 hover:bg-char-800 rounded-full transition-all duration-300 backdrop-blur-md border border-white/10 shadow-xl"
          >
            <ChevronRight size={24} />
          </button>

          {/* ── Image + info panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl w-full grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-center my-auto pt-6 md:pt-12"
            >
              {/* Image */}
              <div className="relative overflow-hidden border border-gold-500/20 rounded-xl max-h-[45dvh] md:max-h-[75vh] bg-char-900 flex items-center justify-center">
                <img
                  src={image.src}
                  alt={`${image.title} — ${image.location}`}
                  className="w-full h-full object-contain max-h-[45dvh] md:max-h-[75vh]"
                />
                {/* Gold corner accents */}
                <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold-500/50" />
                <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold-500/50" />
              </div>

              {/* Info */}
              <div className="py-2 text-left">
                <span className="inline-block text-[9px] tracking-[0.3em] uppercase text-beigegold-400 border border-beigegold-500/30 px-2.5 py-1 rounded font-body">
                  {image.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-ivory mt-3 leading-snug font-semibold">
                  {image.title}
                </h3>
                <p className="flex items-center gap-1.5 text-xs sm:text-sm text-beigegold-400 mt-2 font-body">
                  <MapPin size={13} className="shrink-0 text-beigegold-500" />
                  {image.location}
                </p>
                <div className="w-12 h-0.5 bg-beigegold-500/40 my-4" />
                <p className="text-ivory/80 leading-relaxed text-xs sm:text-sm font-light font-body">
                  {image.description}
                </p>

                {/* Counter + swipe hint */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                  <p className="text-ivory/50 text-xs tracking-[0.2em] font-body">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(images.length).padStart(2, "0")}
                  </p>
                  <p className="text-ivory/40 text-[10px] tracking-widest uppercase font-body hidden md:block">
                    ← → to navigate
                  </p>
                  <p className="text-beigegold-400/80 text-[10px] tracking-widest uppercase font-body md:hidden">
                    👈 Swipe left/right to navigate 👉
                  </p>
                </div>

                {/* Dot indicators */}
                <div className="flex gap-1.5 mt-3 flex-wrap">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => onNavigate(i)}
                      aria-label={`Go to image ${i + 1}`}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-6 bg-beigegold-400"
                          : "w-2 bg-ivory/20 hover:bg-ivory/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export default function Lightbox({ images, activeIndex, onClose, onNavigate }) {
  const isOpen       = activeIndex !== null;
  const image        = isOpen ? images[activeIndex] : null;
  const touchStartX  = useRef(null);

  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  // Keyboard + body-scroll lock
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft")  goPrev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
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
          className="fixed inset-0 z-[9999] bg-char-950/98 backdrop-blur-xl flex flex-col items-center justify-center px-4 py-10 md:p-12"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          {/* Top Control Header Bar (Positioned below top navbar) */}
          <div className="absolute top-24 left-4 right-4 md:top-28 md:left-8 md:right-8 z-[10000] flex items-center justify-start p-3 rounded-2xl bg-char-900 border-2 border-beigegold-500/60 backdrop-blur-2xl shadow-2xl">
            <button
              onClick={onClose}
              aria-label="Go back to website"
              className="px-5 py-2.5 bg-beigegold-500 hover:bg-beigegold-400 text-char-950 font-bold text-xs tracking-wider uppercase rounded-xl shadow-lg transition-all flex items-center gap-2 font-body transform hover:-translate-y-0.5"
              title="Click here to go back to the main website"
            >
              <span>👈 CLICK HERE TO GO BACK</span>
            </button>
          </div>

          {/* ── Nav arrows ── */}
          <button
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 p-3 text-ivory/40 hover:text-gold-400 hover:bg-char-800/60 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 p-3 text-ivory/40 hover:text-gold-400 hover:bg-char-800/60 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight size={28} />
          </button>

          {/* ── Image + info panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl w-full grid md:grid-cols-[1.5fr_1fr] gap-6 md:gap-10 items-center"
            >
              {/* Image */}
              <div className="relative overflow-hidden border border-gold-500/15 max-h-[60vh] md:max-h-[78vh]">
                <img
                  src={image.src}
                  alt={`${image.title} — ${image.location}`}
                  className="w-full h-full object-cover"
                />
                {/* Gold corner accents */}
                <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-500/40" />
                <span className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-500/40" />
              </div>

              {/* Info */}
              <div className="py-2">
                <span className="inline-block text-[9px] tracking-[0.4em] uppercase text-brick-400 border border-brick-500/30 px-3 py-1">
                  {image.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-ivory mt-4 leading-tight">
                  {image.title}
                </h3>
                <p className="flex items-center gap-2 text-sm text-brick-400 mt-3 font-body">
                  <MapPin size={14} className="shrink-0" />
                  {image.location}
                </p>
                <div className="w-10 h-px bg-gold-500/50 my-5" />
                <p className="text-ivory/65 leading-[1.85] text-sm font-light font-body">
                  {image.description}
                </p>

                {/* Counter + swipe hint */}
                <div className="flex items-center justify-between mt-8">
                  <p className="text-ivory/30 text-xs tracking-[0.2em] font-body">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(images.length).padStart(2, "0")}
                  </p>
                  <p className="text-ivory/25 text-[9px] tracking-widest uppercase font-body hidden md:block">
                    ← → to navigate
                  </p>
                  <p className="text-ivory/25 text-[9px] tracking-widest uppercase font-body md:hidden">
                    Swipe to navigate
                  </p>
                </div>

                {/* Dot indicators */}
                <div className="flex gap-1.5 mt-4 flex-wrap">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => onNavigate(i)}
                      aria-label={`Go to image ${i + 1}`}
                      className={`h-0.5 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-6 bg-gold-400"
                          : "w-2 bg-ivory/25 hover:bg-ivory/50"
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

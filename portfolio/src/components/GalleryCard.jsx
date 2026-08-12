import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Expand, MapPin, FolderOpen } from "lucide-react";

export default function GalleryCard({ image, onOpen, index }) {
  const imgRef = useRef(null);

  // Lazy-load fade-in
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", () => img.classList.add("loaded"));
    }
  }, []);

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(index)}
      layout
      initial={{ opacity: 0, scale: 0.93, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.93 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
      className={`group relative w-full overflow-hidden text-left block focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
        image.isFolder ? "ring-1 ring-brick-500/40 shadow-xl shadow-brick-500/10" : ""
      }`}
      aria-label={`Open ${image.title} — ${image.location}`}
    >
      {/* Image */}
      <img
        ref={imgRef}
        src={image.src}
        alt={`${image.title} — ${image.location}`}
        loading="lazy"
        className="w-full h-auto block object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-char-950/95 via-char-950/30 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content — slides up on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-expo-out">
        <div className="mb-2">
          <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-char-950 bg-beigegold-500 font-bold px-2.5 py-1 rounded-md shadow-lg font-body">
            {image.isFolder ? (
              <>
                <FolderOpen size={12} /> 👉 CLICK HERE TO OPEN ALBUM ({image.photos?.length || 0} PHOTOS)
              </>
            ) : (
              <>
                <Expand size={11} /> 👉 CLICK HERE TO VIEW PHOTO
              </>
            )}
          </span>
        </div>
        <h3 className="font-display text-lg md:text-xl text-ivory leading-tight font-semibold">
          {image.title}
        </h3>
        <p className="flex items-center gap-1 text-[11px] text-beigegold-400 mt-1 font-body">
          <MapPin size={11} className="text-beigegold-500 shrink-0" />
          {image.location}
        </p>
      </div>

      {/* Top-right Album Folder Badge */}
      {image.isFolder && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.2em] uppercase font-bold text-char-950 bg-beigegold-500 shadow-lg px-2.5 py-1 font-body rounded-sm">
            <FolderOpen size={11} /> ALBUM · {image.photos?.length || 0} PHOTOS
          </span>
        </div>
      )}

      {/* Hover border glow */}
      <div className="absolute inset-0 border border-transparent group-hover:border-brick-500/60 transition-colors duration-500 pointer-events-none" />

      {/* Top-left category tag */}
      <div className="absolute top-3 left-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[8px] tracking-[0.25em] uppercase text-ivory/80 bg-char-950/80 border border-gold-500/20 backdrop-blur-sm px-2 py-1 font-body">
          {image.category}
        </span>
      </div>
    </motion.button>
  );
}

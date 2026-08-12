import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, FolderOpen, MapPin, Expand } from "lucide-react";
import Lightbox from "./Lightbox";

export default function AlbumModal({ album, onClose }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!album) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [album]);

  if (!album) return null;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] bg-char-950/98 backdrop-blur-xl overflow-y-auto px-4 pt-28 pb-12 md:px-10 md:pt-32"
      >
        {/* Sticky Top Control Bar (Pushed down clear of navbar) */}
        <div className="sticky top-2 z-[10000] max-w-6xl mx-auto flex items-center justify-start py-3 px-4 mb-8 rounded-2xl bg-char-900 border-2 border-beigegold-500/60 backdrop-blur-2xl shadow-2xl">
          <button
            onClick={onClose}
            aria-label="Go back to website"
            className="px-5 py-2.5 bg-beigegold-500 hover:bg-beigegold-400 text-char-950 font-bold text-xs tracking-wider uppercase rounded-xl shadow-lg transition-all flex items-center gap-2 font-body transform hover:-translate-y-0.5"
            title="Click here to go back to the main website"
          >
            <span>👈 CLICK HERE TO GO BACK</span>
          </button>
        </div>

        <div className="max-w-6xl mx-auto pt-2 pb-16">
          {/* Header section */}
          <div className="border-b border-gold-500/15 pb-8 mb-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-beigegold-400 font-bold bg-beigegold-500/10 border border-beigegold-500/30 px-3 py-1 mb-4 font-body">
              <FolderOpen size={14} /> ALBUM · {album.photos?.length || 0} PHOTOS
            </div>

            <h2 className="font-display text-3xl md:text-5xl text-ivory leading-tight font-semibold">
              {album.title}
            </h2>

            <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-beigegold-400 mt-3 font-body">
              <MapPin size={15} className="text-beigegold-500" />
              {album.location}
            </p>

            <p className="mt-5 text-ivory/80 leading-relaxed font-light text-base max-w-4xl font-body bg-char-900/60 border-l-2 border-beigegold-500 p-4 md:p-5">
              {album.description}
            </p>
          </div>

          {/* Photo Grid inside folder */}
          <h3 className="font-display text-xl text-ivory mb-6 tracking-wide flex items-center gap-2">
            <span>Photos in this Album</span>
            <span className="w-12 h-px bg-gold-500/40" />
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {album.photos?.map((photo, i) => (
              <motion.button
                key={photo.id || i}
                onClick={() => setSelectedPhotoIndex(i)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative overflow-hidden text-left border border-gold-500/15 hover:border-beigegold-500/60 bg-char-900 transition-all duration-300 rounded-xl"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-char-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  <span className="absolute bottom-3 right-3 bg-beigegold-500 text-char-950 text-[10px] tracking-wider uppercase font-bold px-2.5 py-1 flex items-center gap-1 font-body shadow-lg rounded-md">
                    <Expand size={11} /> 👉 CLICK HERE TO EXPAND PHOTO
                  </span>
                </div>

                <div className="p-4">
                  <h4 className="font-display text-lg text-ivory font-semibold group-hover:text-beigegold-400 transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-beigegold-400 mt-1 font-body flex items-center gap-1">
                    <MapPin size={11} /> {photo.location}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Lightbox for photos inside this album */}
        {selectedPhotoIndex !== null && (
          <Lightbox
            images={album.photos}
            activeIndex={selectedPhotoIndex}
            onClose={() => setSelectedPhotoIndex(null)}
            onNavigate={setSelectedPhotoIndex}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}

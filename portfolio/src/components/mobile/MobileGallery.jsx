import { useState, useMemo } from "react";
import galleryImages, { categories } from "../../data/gallery";
import { FolderOpen, Expand, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function MobileGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(() => {
    return activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const nonFolderImages = useMemo(() => {
    return filtered.filter((img) => !img.isFolder);
  }, [filtered]);

  const handleCardClick = (item) => {
    if (item.isFolder) {
      setActiveAlbum(item);
    } else {
      const idx = nonFolderImages.findIndex((img) => img.id === item.id);
      setLightboxIndex(idx !== -1 ? idx : 0);
    }
  };

  const activeLightboxImage = lightboxIndex !== null && lightboxIndex >= 0 && lightboxIndex < nonFolderImages.length
    ? nonFolderImages[lightboxIndex]
    : null;

  return (
    <section id="m-gallery" className="py-10 px-4 bg-char-900 border-t border-white/10">
      <div className="text-center mb-6">
        <span className="text-beigegold-500 text-[9px] tracking-[0.25em] uppercase font-bold font-body">
          OUR PORTFOLIO
        </span>
        <h2 className="font-display text-2xl font-semibold text-ivory mt-1">
          Moments We've Captured
        </h2>
      </div>

      {/* Category Filter Chips */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-3.5 py-1.5 text-[10px] tracking-wider uppercase rounded-full whitespace-nowrap font-body border shrink-0 transition-colors ${
              activeCategory === cat.key
                ? "bg-beigegold-500 border-beigegold-500 text-char-950 font-bold"
                : "border-white/15 text-ivory/60 bg-char-950/80"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 1-Column Adaptive Mobile Photo Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => handleCardClick(item)}
            className="relative rounded-xl overflow-hidden border border-white/15 bg-char-950 text-left block w-full shadow-lg group"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-char-950/20 to-transparent" />

              <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[9px] tracking-wider uppercase font-bold text-char-950 bg-beigegold-500 px-2.5 py-1 rounded font-body">
                  {item.isFolder ? (
                    <>
                      <FolderOpen size={11} /> OPEN ALBUM ({item.photos?.length || 0})
                    </>
                  ) : (
                    <>
                      <Expand size={10} /> VIEW PHOTO
                    </>
                  )}
                </span>
              </span>
            </div>

            <div className="p-3.5">
              <h3 className="font-display text-base text-ivory font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="flex items-center gap-1 text-[11px] text-beigegold-400 mt-1 font-body">
                <MapPin size={11} className="shrink-0" />
                {item.location}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Album Folder Modal */}
      {activeAlbum && (
        <div className="fixed inset-0 z-50 bg-char-950/98 backdrop-blur-xl overflow-y-auto px-4 pt-16 pb-10">
          <div className="sticky top-2 z-50 flex items-center justify-between p-3 rounded-xl bg-char-900 border border-beigegold-500/50 shadow-xl mb-6">
            <button
              onClick={() => setActiveAlbum(null)}
              className="px-4 py-2 bg-beigegold-500 text-char-950 font-bold text-xs uppercase rounded-lg font-body flex items-center gap-1.5"
            >
              <span>👈 CLOSE & GO BACK</span>
            </button>
            <button onClick={() => setActiveAlbum(null)} className="p-1.5 text-ivory/80">
              <X size={20} />
            </button>
          </div>

          <div className="mb-6">
            <span className="text-[9px] tracking-wider uppercase text-beigegold-400 font-bold font-body">
              ALBUM · {activeAlbum.photos?.length || 0} PHOTOS
            </span>
            <h2 className="font-display text-2xl text-ivory font-semibold mt-1">
              {activeAlbum.title}
            </h2>
            <p className="text-xs text-ivory/70 font-body mt-2">
              {activeAlbum.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {activeAlbum.photos?.map((photo, i) => (
              <div
                key={photo.id || i}
                onClick={() => {
                  const idx = activeAlbum.photos.findIndex((p) => p.id === photo.id);
                  setLightboxIndex(idx !== -1 ? idx : 0);
                }}
                className="rounded-xl overflow-hidden border border-white/15 bg-char-900 p-3"
              >
                <img src={photo.src} alt={photo.title} className="w-full aspect-[4/3] object-cover rounded-lg mb-2" />
                <h4 className="font-display text-sm font-semibold text-ivory">{photo.title}</h4>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Popup */}
      {activeLightboxImage && (
        <div className="fixed inset-0 z-50 bg-char-950/98 backdrop-blur-2xl flex flex-col justify-between p-4 overflow-y-auto">
          <div className="flex items-center justify-between p-2 rounded-xl bg-char-900 border border-beigegold-500/40">
            <button
              onClick={() => setLightboxIndex(null)}
              className="px-3.5 py-1.5 bg-beigegold-500 text-char-950 font-bold text-xs uppercase rounded-md font-body"
            >
              👈 CLOSE
            </button>
            <span className="text-xs text-ivory/60 font-body">
              {lightboxIndex + 1} / {nonFolderImages.length}
            </span>
            <button onClick={() => setLightboxIndex(null)} className="p-1 text-ivory">
              <X size={20} />
            </button>
          </div>

          <div className="my-auto py-4">
            <div className="relative rounded-xl overflow-hidden border border-beigegold-500/30 bg-char-900 max-h-[50dvh]">
              <img
                src={activeLightboxImage.src}
                alt={activeLightboxImage.title}
                className="w-full max-h-[50dvh] object-contain"
              />
            </div>

            <div className="mt-4 text-left">
              <span className="text-[9px] tracking-wider uppercase text-beigegold-400 font-bold font-body">
                {activeLightboxImage.category}
              </span>
              <h3 className="font-display text-lg text-ivory font-semibold mt-1">
                {activeLightboxImage.title}
              </h3>
              <p className="text-xs text-beigegold-400 font-body mt-1 flex items-center gap-1">
                <MapPin size={12} /> {activeLightboxImage.location}
              </p>
              <p className="text-xs text-ivory/80 font-body mt-2 leading-relaxed">
                {activeLightboxImage.description}
              </p>
            </div>
          </div>

          {/* Nav Controls */}
          <div className="flex justify-between items-center pt-2 border-t border-white/10">
            <button
              onClick={() => setLightboxIndex((prev) => (prev - 1 + nonFolderImages.length) % nonFolderImages.length)}
              className="px-4 py-2 rounded-lg bg-char-900 text-beigegold-400 text-xs font-bold font-body flex items-center gap-1"
            >
              <ChevronLeft size={16} /> PREV
            </button>
            <span className="text-[10px] text-beigegold-400 font-body">Swipe or tap arrows</span>
            <button
              onClick={() => setLightboxIndex((prev) => (prev + 1) % nonFolderImages.length)}
              className="px-4 py-2 rounded-lg bg-char-900 text-beigegold-400 text-xs font-bold font-body flex items-center gap-1"
            >
              NEXT <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

import siteConfig from "../../config";

export default function MobileAbout() {
  return (
    <section id="m-about" className="py-10 px-4 bg-char-950 border-t border-white/10">
      <div className="flex flex-col gap-6">
        
        {/* Title Header */}
        <div>
          <span className="text-beigegold-500 text-[9px] tracking-[0.25em] uppercase font-bold font-body">
            BEHIND THE LENS
          </span>
          <h2 className="font-display text-2xl font-semibold text-ivory mt-1">
            {siteConfig.photographerName}
          </h2>
        </div>

        {/* Portrait Card */}
        <div className="relative rounded-2xl overflow-hidden border border-white/15 aspect-[4/5] w-full max-w-xs mx-auto shadow-xl">
          <img
            src={siteConfig.about.portrait}
            alt={`Portrait of photographer ${siteConfig.photographerName}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-char-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-center bg-char-950/90 border border-white/15 py-2 px-3 rounded-lg backdrop-blur-md">
            <p className="font-display text-sm text-ivory font-semibold">{siteConfig.photographerName}</p>
            <p className="text-[9px] tracking-widest text-beigegold-400 font-body uppercase">Photographer</p>
          </div>
        </div>

        {/* Biography Paragraphs */}
        <div className="space-y-3 text-xs text-ivory/80 font-body font-light leading-relaxed">
          {siteConfig.about.paragraphs.map((p, idx) => (
            <p key={idx} className={idx === 0 ? "font-display text-sm text-ivory italic" : ""}>
              {p}
            </p>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-center font-body">
          <div className="bg-char-900 border border-white/10 p-3 rounded-xl">
            <p className="font-display text-2xl font-bold text-beigegold-400">100+</p>
            <p className="text-[9px] uppercase tracking-wider text-ivory/50 mt-0.5">Sacred Shrines</p>
          </div>
          <div className="bg-char-900 border border-white/10 p-3 rounded-xl">
            <p className="font-display text-2xl font-bold text-beigegold-400">500+</p>
            <p className="text-[9px] uppercase tracking-wider text-ivory/50 mt-0.5">Stories Captured</p>
          </div>
          <div className="bg-char-900 border border-white/10 p-3 rounded-xl">
            <p className="font-display text-2xl font-bold text-beigegold-400">1000+</p>
            <p className="text-[9px] uppercase tracking-wider text-ivory/50 mt-0.5">Frames Preserved</p>
          </div>
          <div className="bg-char-900 border border-white/10 p-3 rounded-xl">
            <p className="font-display text-2xl font-bold text-beigegold-400">100%</p>
            <p className="text-[9px] uppercase tracking-wider text-ivory/50 mt-0.5">Devotional Love</p>
          </div>
        </div>

      </div>
    </section>
  );
}

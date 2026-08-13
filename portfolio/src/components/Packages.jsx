import { Camera, Check, Sparkles } from "lucide-react";

const PACKAGES_LIST = [
  {
    name: "BASIC",
    subtitle: "Perfect for small sessions & portraits",
    price: "FROM ₹4,999",
    features: ["2 Hours Session", "25 High-Res Edits", "Online Gallery Access"],
  },
  {
    name: "STANDARD",
    subtitle: "Ideal for events, festivals & pre-weddings",
    price: "FROM ₹14,999",
    popular: true,
    features: ["Full Day Coverage", "100+ Edited Photos", "Cinematic Reel", "USB Album"],
  },
  {
    name: "PREMIUM",
    subtitle: "Complete coverage for grand events & temple rituals",
    price: "FROM ₹29,999",
    features: ["Multi-Day Coverage", "Unlimited High-Res Edits", "Drone Shots & 4K Video", "Custom Leather Album"],
  },
];

export default function Packages() {
  const scrollTo = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="bg-char-950 py-20 px-6 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Dark Banner Container (matching LENSCRAFT reference) */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-char-900 via-char-950 to-char-900 p-5 sm:p-8 md:p-12 shadow-2xl">
          
          {/* Background overlay image */}
          <div
            className="absolute inset-0 bg-cover bg-right opacity-25 pointer-events-none"
            style={{ backgroundImage: 'url("/images/hero_slides/slide4.jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-char-950 via-char-950/90 to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-beigegold-500/30 bg-black/40 text-[9px] tracking-[0.25em] font-bold uppercase text-beigegold-400 mb-4">
                <Sparkles size={11} />
                <span>CHOOSE YOUR PERFECT PACKAGE</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ivory tracking-tight leading-tight">
                Packages That Fit <br /> Every Moment
              </h2>

              <p className="text-ivory/60 text-xs md:text-sm font-body mt-4 leading-relaxed max-w-sm">
                Transparent pricing tailored for temple photography, portraits, traditional pre-weddings, and sacred rituals.
              </p>

              <div className="mt-8">
                <a
                  href="#contact"
                  onClick={scrollTo("#contact")}
                  className="px-7 py-3.5 text-xs tracking-[0.2em] font-bold uppercase text-char-950 bg-beigegold-500 hover:bg-beigegold-400 rounded-lg shadow-xl transition-all inline-block"
                >
                  VIEW PACKAGES
                </a>
              </div>
            </div>

            {/* Right Package Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PACKAGES_LIST.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`p-5 rounded-2xl border transition-all duration-300 ${
                    pkg.popular
                      ? "bg-beigegold-500/10 border-beigegold-500/50 shadow-xl shadow-beigegold-500/5"
                      : "bg-char-950/80 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-beigegold-400 mb-3">
                    <Camera size={18} />
                  </div>

                  <h3 className="font-display text-lg font-bold text-ivory tracking-wider">{pkg.name}</h3>
                  <p className="text-[10px] text-ivory/50 font-body mt-1 leading-snug min-h-[30px]">{pkg.subtitle}</p>

                  <p className="font-display text-xl font-bold text-beigegold-400 mt-3 pt-3 border-t border-white/10">
                    {pkg.price}
                  </p>

                  <ul className="mt-3 space-y-1.5 text-[10px] text-ivory/70 font-body">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-1.5">
                        <Check size={11} className="text-beigegold-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

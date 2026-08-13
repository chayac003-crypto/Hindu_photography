import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, Sparkles, Play, Award, ChevronRight } from "lucide-react";
import siteConfig from "../config";

const HERO_SLIDES = [
  {
    id: "s1",
    url: "/images/lord_ayyappa/ayyappa_chandana_abhisheka.jpg",
    title: "Sri Lord Swamy Chandana Alankara",
  },
  {
    id: "s2",
    url: "/images/temple_clicks/silver_krishna.jpg",
    title: "Sri Venugopala Krishna Rajata Alankara",
  },
  {
    id: "s3",
    url: "/images/other_clicks/brotherhood_portrait.jpg",
    title: "Outdoor Friends & Landscape Portrait",
  },
  {
    id: "s4",
    url: "/images/other_clicks/om_pendant.jpg",
    title: "Sacred Om Pendant & Spiritual Chime",
  },
  {
    id: "s5",
    url: "/images/nayakanahatti/golden_swamy.jpg",
    title: "Nayakanahatti Thipperudra Swamy",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto advance background slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen w-full bg-char-950 pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[60vw] h-[60vh] pointer-events-none opacity-[0.12]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(216,180,143,0.8) 0%, rgba(201,90,40,0.3) 50%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">

          {/* ── Left Content Column (LENSCRAFT Layout) ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Eyebrow Tagline */}
            <div className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.25em] font-body uppercase text-ivory/60 mb-3">
              <span className="w-5 h-px bg-beigegold-500" />
              <span>WE DON'T JUST TAKE PHOTOS.</span>
            </div>

            {/* Big Headline + Script Accent Line */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-semibold text-ivory tracking-tight leading-[1.1]">
              We Capture <br />
              <span className="text-ivory">Emotions.</span> <br />
              <span className="font-script text-4xl sm:text-6xl md:text-8xl text-beigegold-400 font-normal block mt-1 leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                You Live Them.
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-ivory/75 font-body font-light max-w-xl leading-relaxed">
              Professional photography services for all your special moments. From sacred temple heritage & grand cultural festivals to portraits and pre-weddings — let's create memories that last a lifetime.
            </p>

            {/* Action CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#contact"
                onClick={scrollTo("#contact")}
                className="w-full sm:w-auto px-8 py-3.5 text-xs tracking-[0.2em] font-bold uppercase text-char-950 bg-beigegold-500 hover:bg-beigegold-400 rounded-lg shadow-xl shadow-beigegold-500/20 transition-all duration-300 text-center"
              >
                BOOK A SESSION
              </a>
              <a
                href="#gallery"
                onClick={scrollTo("#gallery")}
                className="w-full sm:w-auto px-7 py-3.5 text-xs tracking-[0.2em] font-bold uppercase text-ivory bg-char-900/90 hover:bg-char-800 border border-white/15 rounded-lg shadow-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-beigegold-400 group-hover:bg-beigegold-500 group-hover:text-char-950 transition-colors">
                  <Play size={10} fill="currentColor" />
                </div>
                <span>VIEW PORTFOLIO</span>
              </a>
            </div>

            {/* Additional info badges */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg">
              <div>
                <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-beigegold-400">100+</p>
                <p className="text-[9px] sm:text-[10px] tracking-wider uppercase text-ivory/50 font-body mt-0.5">Sacred Shrines</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-beigegold-400">500+</p>
                <p className="text-[9px] sm:text-[10px] tracking-wider uppercase text-ivory/50 font-body mt-0.5">Stories Captured</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-beigegold-400">1000+</p>
                <p className="text-[9px] sm:text-[10px] tracking-wider uppercase text-ivory/50 font-body mt-0.5">Frames Preserved</p>
              </div>
            </div>

          </div>

          {/* ── Right Image Column (Photographer Showcase + Floating Badge) ── */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-char-900 aspect-[4/3] sm:aspect-[4/5] max-w-md mx-auto">
              
              {/* Background Cross-Fade Images */}
              <AnimatePresence mode="sync">
                <motion.div
                  key={HERO_SLIDES[currentSlide].id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].url})` }}
                />
              </AnimatePresence>

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-char-950/20 to-transparent" />

              {/* Active Image Title Tag */}
              <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-10 flex justify-between items-center">
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold text-char-950 bg-beigegold-500 px-2.5 py-1 rounded-full font-body shadow-md">
                  FEATURED WORK
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-ivory/80 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  {currentSlide + 1} / {HERO_SLIDES.length}
                </span>
              </div>

              {/* Caption at bottom of image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10">
                <p className="font-display text-base sm:text-lg text-ivory font-semibold leading-snug">
                  {HERO_SLIDES[currentSlide].title}
                </p>
                <p className="text-[11px] sm:text-xs text-beigegold-400 font-body mt-0.5 flex items-center gap-1">
                  <span>Explore in Portfolio</span>
                  <ChevronRight size={12} />
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Play, Sparkles, ChevronRight, Star } from "lucide-react";
import siteConfig from "../../config";

const MOBILE_HERO_SLIDES = [
  {
    id: "ms1",
    url: "/images/lord_ayyappa/ayyappa_chandana_abhisheka.jpg",
    title: "Sri Lord Swamy Chandana Alankara",
  },
  {
    id: "ms2",
    url: "/images/temple_clicks/silver_krishna.jpg",
    title: "Sri Venugopala Krishna Rajata Alankara",
  },
  {
    id: "ms3",
    url: "/images/other_clicks/brotherhood_portrait.jpg",
    title: "Outdoor Friends & Landscape Portrait",
  },
  {
    id: "ms4",
    url: "/images/nayakanahatti/golden_swamy.jpg",
    title: "Nayakanahatti Thipperudra Swamy",
  },
];

export default function MobileHero() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % MOBILE_HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="m-home" className="pt-20 pb-10 px-4 bg-char-950 text-ivory relative">
      <div className="flex flex-col gap-6">
        
        {/* Top Eyebrow Tagline */}
        <div>
          <div className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.25em] font-body uppercase text-beigegold-400 mb-2">
            <Sparkles size={10} />
            <span>CAPTURING MOMENTS, CREATING STORIES</span>
          </div>

          <h1 className="font-display text-3xl font-semibold tracking-tight leading-tight">
            We Capture <br />
            <span className="text-ivory">Emotions.</span> <br />
            <span className="font-script text-4xl text-beigegold-400 font-normal block mt-0.5">
              You Live Them.
            </span>
          </h1>

          <p className="mt-3 text-xs text-ivory/80 font-body leading-relaxed font-light">
            Temples. Portraits. Pre-Weddings. Traditional & Cultural photography captured with reverence and divine beauty.
          </p>
        </div>

        {/* Mobile Photo Slider Card */}
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-char-900 aspect-[4/3] w-full shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${MOBILE_HERO_SLIDES[slideIndex].url})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-char-950/20 to-transparent" />

          <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
            <span className="text-[9px] tracking-wider uppercase font-bold text-char-950 bg-beigegold-500 px-2.5 py-0.5 rounded-full font-body">
              FEATURED WORK
            </span>
            <span className="text-[9px] tracking-widest uppercase text-ivory/80 bg-black/60 px-2.5 py-0.5 rounded-full border border-white/10">
              {slideIndex + 1} / {MOBILE_HERO_SLIDES.length}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3">
            <p className="font-display text-sm text-ivory font-semibold truncate">
              {MOBILE_HERO_SLIDES[slideIndex].title}
            </p>
          </div>
        </div>

        {/* Touch CTA Buttons */}
        <div className="flex flex-col gap-2.5 w-full">
          <a
            href="#m-gallery"
            onClick={scrollTo("#m-gallery")}
            className="w-full py-3 text-xs tracking-[0.2em] font-bold uppercase text-ivory bg-char-900 border border-white/15 rounded-lg text-center flex items-center justify-center gap-2 font-body"
          >
            <Play size={10} fill="currentColor" className="text-beigegold-400" />
            <span>EXPLORE PORTFOLIO</span>
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
          <div>
            <p className="font-display text-xl font-bold text-beigegold-400">100+</p>
            <p className="text-[8px] tracking-wider uppercase text-ivory/50 font-body">Sacred Shrines</p>
          </div>
          <div>
            <p className="font-display text-xl font-bold text-beigegold-400">500+</p>
            <p className="text-[8px] tracking-wider uppercase text-ivory/50 font-body">Stories</p>
          </div>
          <div>
            <p className="font-display text-xl font-bold text-beigegold-400">1000+</p>
            <p className="text-[8px] tracking-wider uppercase text-ivory/50 font-body">Frames</p>
          </div>
        </div>

      </div>
    </section>
  );
}

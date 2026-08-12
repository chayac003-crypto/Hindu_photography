import { useEffect, useState, useRef } from "react";
import siteConfig from "../config";
import useScrollReveal from "../hooks/useScrollReveal";
import useCountUp from "../hooks/useCountUp";

function Stat({ stat, start }) {
  const value = useCountUp(stat.value, { start: start && !stat.isInfinite });
  return (
    <div className="text-center md:text-left group">
      <p className="font-display text-3xl md:text-4xl text-gold-400 transition-all duration-300 group-hover:text-gold-300">
        {stat.isInfinite ? "∞" : `${value}${stat.suffix}`}
      </p>
      <div className="w-8 h-px bg-brick-500/50 my-2 mx-auto md:mx-0" />
      <p className="text-ivory/50 text-[10px] tracking-[0.2em] uppercase font-body">
        {stat.label}
      </p>
    </div>
  );
}

export default function About() {
  const ref            = useScrollReveal();
  const [statsVisible, setStatsVisible] = useState(false);
  const imgRef         = useRef(null);

  // Trigger count-up when stats section enters viewport
  useEffect(() => {
    const el = document.getElementById("about-stats");
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Lazy-load portrait
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) img.classList.add("loaded");
    else img.addEventListener("load", () => img.classList.add("loaded"));
  }, []);

  return (
    <section id="about" ref={ref} className="relative bg-char-900 grain py-28 md:py-36 px-6 overflow-hidden">

      {/* Subtle warm glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 w-[40vw] h-[40vw] pointer-events-none opacity-[0.035]"
        style={{
          background: "radial-gradient(ellipse at right, rgba(201,162,39,1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 md:gap-24 items-center">

        {/* ── Portrait ── */}
        <div className="reveal order-2 md:order-1 relative">
          {/* Decorative boxes */}
          <div className="absolute -top-6 -right-6 w-full h-full border border-gold-500/12 hidden md:block" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-brick-500/30 hidden md:block" />

          <div className="relative aspect-[4/5] max-w-[400px] mx-auto overflow-hidden">
            <img
              ref={imgRef}
              src={siteConfig.about.portrait}
              alt={`Portrait of photographer ${siteConfig.photographerName}`}
              loading="lazy"
              className="w-full h-full object-cover grayscale-[12%] hover:grayscale-0 transition-all duration-700"
            />
            {/* Brick border overlay */}
            <div className="absolute inset-0 border border-brick-500/25 pointer-events-none" />
            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-char-900/60 to-transparent pointer-events-none" />
          </div>

          {/* Name badge */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 bg-char-800/90 backdrop-blur-sm border border-gold-500/20 px-5 py-3 text-center">
            <p className="font-display text-base text-ivory">{siteConfig.photographerName}</p>
            <p className="text-[9px] tracking-[0.3em] text-gold-400/70 uppercase font-body mt-0.5">
              Photographer
            </p>
          </div>
        </div>

        {/* ── Text ── */}
        <div className="reveal reveal-delay-1 order-1 md:order-2">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-gold-500/60" />
            <span className="text-gold-500 text-[10px] tracking-[0.45em] uppercase font-body">
              {siteConfig.photographerName}
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-ivory">
            {siteConfig.about.heading}
          </h2>

          <div className="flex items-center gap-4 my-7">
            <div className="w-14 h-px bg-brick-500" />
          </div>

          <div className="space-y-4">
            {siteConfig.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-ivory/70 leading-[1.95] text-[15px] md:text-base font-light font-body ${
                  i === 0 ? "text-ivory/85 text-base md:text-lg italic font-display" : ""
                }`}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div
            id="about-stats"
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-gold-500/10"
          >
            {siteConfig.stats.map((stat) => (
              <Stat key={stat.label} stat={stat} start={statsVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

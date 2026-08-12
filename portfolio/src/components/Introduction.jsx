import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, Calendar, CheckCircle2, Heart, Camera, ArrowRight } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";
import siteConfig from "../config";

export default function Introduction() {
  const ref = useScrollReveal();

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="introduction"
      ref={ref}
      className="relative bg-char-950 grain py-24 md:py-36 px-6 overflow-hidden border-b border-white/10"
    >
      {/* Ambient warm radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[55vw] h-[55vh] pointer-events-none opacity-[0.10]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(216,180,143,0.8) 0%, rgba(201,90,40,0.3) 50%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ── Left Text Philosophy & High-Converting CTA ── */}
        <div className="lg:col-span-6 reveal order-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-beigegold-500/30 bg-beigegold-500/10 text-beigegold-400 text-[10px] tracking-[0.25em] font-bold uppercase mb-4">
            <Sparkles size={12} className="text-beigegold-400 animate-pulse" />
            <span>OUR PHILOSOPHY</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory font-semibold tracking-tight leading-tight">
            Where Stone <br />
            <span className="text-beigegold-400 font-script text-5xl sm:text-6xl lg:text-7xl block mt-1">
              Tells Timeless Stories
            </span>
          </h2>

          <div className="w-16 h-0.5 bg-beigegold-500/50 my-6" />

          <blockquote className="space-y-3">
            <p className="text-ivory/80 leading-relaxed text-sm sm:text-base font-light font-body">
              Every temple has a sacred story. Every sculpture holds a cherished memory. Every ancient wall carries the silence of generations.
            </p>
            <p className="text-ivory/70 leading-relaxed text-sm font-light font-body pt-2">
              Through our lens, we preserve your most special moments — from sacred temple rituals & grand rathotsava celebrations to traditional pre-weddings and ethnic portraits.
            </p>
          </blockquote>

          {/* Feature Highlights Badges */}
          <div className="grid grid-cols-2 gap-3 my-8 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-body text-ivory/80">
              <CheckCircle2 size={14} className="text-beigegold-400 shrink-0" />
              <span>Cinematic 4K Photography</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-body text-ivory/80">
              <CheckCircle2 size={14} className="text-beigegold-400 shrink-0" />
              <span>Sacred Temple Rituals</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-body text-ivory/80">
              <CheckCircle2 size={14} className="text-beigegold-400 shrink-0" />
              <span>Fast 48-Hour Preview</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-body text-ivory/80">
              <CheckCircle2 size={14} className="text-beigegold-400 shrink-0" />
              <span>Custom Photo Album USB</span>
            </div>
          </div>

          {/* High-Converting Action Button */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-3.5 text-xs tracking-[0.2em] font-bold uppercase text-char-950 bg-beigegold-500 hover:bg-beigegold-400 rounded-xl shadow-xl shadow-beigegold-500/20 transition-all flex items-center gap-2.5 group transform hover:-translate-y-0.5"
            >
              <Camera size={16} />
              <span>BOOK YOUR EVENT SHOOT NOW</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* ── Right Cute Photo Collage & High-Converting Booking Cards ── */}
        <div className="lg:col-span-6 reveal reveal-delay-2 order-2 relative">
          
          {/* Top Trust Badge */}
          <div className="absolute -top-6 left-4 z-30 bg-char-950/95 border border-beigegold-500/40 backdrop-blur-xl px-4 py-2 rounded-full shadow-2xl flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} fill="currentColor" />
              ))}
            </div>
            <span className="text-[10px] tracking-wider font-bold text-ivory font-body uppercase">
              500+ Devotees & Families Choice
            </span>
          </div>

          {/* Cute Multi-Frame Photo Collage Grid */}
          <div className="grid grid-cols-12 gap-3 relative p-2 bg-char-900/60 border border-white/15 rounded-3xl backdrop-blur-md shadow-2xl">
            
            {/* Frame 1: Main Sacred Lord Swamy Chandana Alankara (Left 7 cols) */}
            <div className="col-span-7 relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/15 shadow-xl group">
              <img
                src="/images/lord_ayyappa/ayyappa_chandana_abhisheka.jpg"
                alt="Sri Lord Swamy Chandanabhisheka Alankara"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-char-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-beigegold-400 font-body block">
                  🪔 SACRED SANCTUM
                </span>
                <p className="font-display text-xs text-ivory font-semibold mt-0.5">
                  Sri Swamy Chandana Alankara
                </p>
              </div>
            </div>

            {/* Right Stacked Frames (Right 5 cols) */}
            <div className="col-span-5 grid grid-rows-2 gap-3">
              
              {/* Frame 2: Silver Krishna Rajata Alankara */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/15 shadow-xl group">
                <img
                  src="/images/temple_clicks/silver_krishna.jpg"
                  alt="Sri Venugopala Krishna Rajata Alankara"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char-950/80 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[8px] tracking-widest uppercase font-bold text-beigegold-300 font-body bg-black/60 px-2 py-0.5 rounded-md border border-white/10">
                  ✨ RAJATA ALANKARA
                </span>
              </div>

              {/* Frame 3: Om Pendant & Spiritual Chime */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/15 shadow-xl group">
                <img
                  src="/images/other_clicks/om_pendant.jpg"
                  alt="Sacred Om Pendant & Spiritual Chime"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char-950/80 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[8px] tracking-widest uppercase font-bold text-beigegold-300 font-body bg-black/60 px-2 py-0.5 rounded-md border border-white/10 flex items-center gap-1">
                  <span>🕉️ SPIRITUAL VIBES</span>
                </span>
              </div>

            </div>

            {/* Frame 4: Bottom Wide Outdoor Friends Portrait Frame */}
            <div className="col-span-12 relative rounded-2xl overflow-hidden h-28 border border-white/15 shadow-xl group">
              <img
                src="/images/other_clicks/brotherhood_portrait.jpg"
                alt="Outdoor Friends & Landscape Photography"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-char-950/90 via-char-950/50 to-transparent" />
              <div className="absolute inset-y-0 left-4 flex flex-col justify-center">
                <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-beigegold-400 font-body">
                  📷 OUTDOOR & LIFESTYLE PORTRAITURE
                </span>
                <p className="font-display text-sm text-ivory font-bold mt-0.5">
                  Chitradurga Hills & Candid Outdoor Sessions
                </p>
              </div>
            </div>

          </div>

          {/* Floating High-Converting Booking Box (Overlapping Bottom Right) */}
          <div className="absolute -bottom-6 -right-3 sm:right-4 z-30 bg-gradient-to-r from-char-950 via-char-900 to-char-950 border border-beigegold-500/50 p-4 rounded-2xl shadow-2xl backdrop-blur-xl max-w-xs text-left">
            <div className="flex items-center gap-2 mb-1.5 text-beigegold-400">
              <Calendar size={15} />
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold font-body">
                2026-27 DATES OPENING!
              </span>
            </div>
            <p className="text-xs text-ivory font-bold font-body leading-snug">
              Reserve your wedding, temple event or shoot date today.
            </p>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="mt-2.5 px-4 py-1.5 text-[10px] tracking-widest uppercase font-bold text-char-950 bg-beigegold-500 hover:bg-beigegold-400 rounded-lg inline-flex items-center gap-1 font-body transition-all"
            >
              <span>RESERVE DATE NOW</span>
              <ArrowRight size={11} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

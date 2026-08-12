import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import siteConfig from "../config";

export default function DivineMoments() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative h-[75vh] min-h-[540px] w-full overflow-hidden">

      {/* ── Background temple image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed will-change-transform"
        style={{ backgroundImage: `url(${siteConfig.divineMoments.image})` }}
        aria-hidden="true"
      />

      {/* Dark cinematic overlays */}
      <div className="absolute inset-0 bg-char-950/78" />
      <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-transparent to-char-950/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-char-950/40 via-transparent to-char-950/40" />

      {/* ── Pulsing golden radial glow behind the quote ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full animate-pulseglow"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,162,39,0.22) 0%, rgba(191,91,52,0.06) 45%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Subtle light rays ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.15] mix-blend-screen pointer-events-none"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 10%, transparent 0deg, rgba(201,162,39,0.6) 6deg, transparent 14deg, transparent 166deg, rgba(201,162,39,0.4) 174deg, transparent 182deg, transparent 350deg, rgba(191,91,52,0.3) 357deg, transparent 360deg)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 reveal">



        <div className="flex items-center gap-4 mb-6">
          <span className="w-10 h-px bg-gold-500/50" />
          <span className="text-gold-400 text-[10px] tracking-[0.5em] uppercase font-body">
            Divine Moments
          </span>
          <span className="w-10 h-px bg-gold-500/50" />
        </div>

        <blockquote className="max-w-3xl">
          <p className="font-display italic text-2xl md:text-4xl xl:text-5xl text-ivory leading-[1.4] md:leading-[1.35]">
            "{siteConfig.divineMoments.quote}"
          </p>
        </blockquote>

        <div className="w-16 h-px bg-gold-500 mt-10" />

        <p className="text-gold-400/60 text-[10px] tracking-[0.4em] uppercase font-body mt-6">
          {siteConfig.brandName}
        </p>
      </div>
    </section>
  );
}

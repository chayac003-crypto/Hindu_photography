import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import stories from "../data/stories";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Stories() {
  const ref = useScrollReveal();

  return (
    <section id="stories" ref={ref} className="relative bg-char-950 grain py-28 md:py-36 px-6 overflow-hidden">

      {/* Subtle top glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-1 pointer-events-none"
        style={{
          background: "linear-gradient(to right, transparent, rgba(201,162,39,0.2), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-500/60" />
            <span className="text-gold-500 text-[10px] tracking-[0.45em] uppercase font-body">
              Journal
            </span>
            <span className="w-8 h-px bg-gold-500/60" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mt-2">
            Stories Beyond the Frame
          </h2>
          <p className="text-ivory/50 mt-4 text-sm md:text-base font-light font-body leading-relaxed">
            Narratives from sacred spaces, forgotten ruins and living traditions.
          </p>
        </div>

        {/* ── Story Cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, i) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-112"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-char-950/50 to-transparent" />
                {/* Brick-orange border on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-brick-500/40 transition-colors duration-500 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <span className="text-[9px] tracking-[0.35em] uppercase text-gold-400/70 font-body mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  {story.id === "s01" ? "Temples" :
                   story.id === "s02" ? "Architecture" :
                   story.id === "s03" ? "Heritage" : "Culture"}
                </span>
                <h3 className="font-display text-lg md:text-xl text-ivory leading-snug">
                  {story.title}
                </h3>
                <p className="text-ivory/60 text-sm mt-2 font-light leading-relaxed font-body line-clamp-2">
                  {story.excerpt}
                </p>
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-[10px] tracking-[0.25em] uppercase text-gold-400 mt-4 group-hover:gap-3 transition-all duration-300 w-fit"
                >
                  Read Story <ArrowRight size={12} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

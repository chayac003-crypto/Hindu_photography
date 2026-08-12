import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import siteConfig from "../config";
import galleryImages from "../data/gallery";
import useScrollReveal from "../hooks/useScrollReveal";

export default function InstagramGallery() {
  const ref    = useScrollReveal();
  const thumbs = galleryImages.slice(0, 8);

  return (
    <section ref={ref} className="relative bg-char-950 grain py-24 md:py-32 px-6 overflow-hidden">

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto text-center">

        {/* Header matching LENSCRAFT reference */}
        <div className="reveal flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 text-left">
          <div className="flex items-center gap-3">
            <Instagram size={20} className="text-beigegold-500" />
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-beigegold-500 font-body block">
                FOLLOW ME ON INSTAGRAM
              </span>
              <p className="font-display text-xl md:text-2xl text-ivory font-semibold mt-0.5">
                {siteConfig.contact.instagramHandle}
              </p>
            </div>
          </div>

          <a
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-[10px] tracking-[0.2em] font-bold uppercase text-ivory border border-white/20 hover:border-beigegold-500 hover:text-beigegold-400 rounded-lg transition-all inline-block w-fit font-body"
          >
            VIEW INSTAGRAM →
          </a>
        </div>

        {/* Grid — 4 × 2 */}
        <div className="grid grid-cols-4 gap-1.5 md:gap-2.5 mt-12 reveal reveal-delay-2">
          {thumbs.map((img, i) => (
            <motion.a
              key={img.id}
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${img.title} on Instagram`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-char-950/0 group-hover:bg-char-950/60 flex items-center justify-center transition-all duration-350">
                <Instagram
                  size={18}
                  className="text-ivory opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                />
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold-500/30 transition-colors duration-400 pointer-events-none" />
            </motion.a>
          ))}
        </div>

        {/* CTA button */}
        <motion.a
          href={siteConfig.contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center gap-2.5 mt-12 px-9 py-3.5 border border-gold-500/35 text-gold-400 text-[11px] tracking-[0.25em] uppercase font-body hover:bg-gold-500 hover:text-char-950 hover:border-gold-500 transition-all duration-350 group"
        >
          <Instagram size={14} className="group-hover:scale-110 transition-transform duration-300" />
          Follow on Instagram
        </motion.a>
      </div>
    </section>
  );
}

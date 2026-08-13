import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Bell, Volume2, VolumeX, Heart, RefreshCw } from "lucide-react";
import siteConfig from "../config";

const WORD_SETS = [
  { w1: "TIMELESS.", w2: "SACRED.", w3: "UNFORGETTABLE." },
  { w1: "DIVINE.", w2: "DEVOTIONAL.", w3: "ETERNAL." },
  { w1: "SPIRITUAL.", w2: "AUTHENTIC.", w3: "CELESTIAL." },
  { w1: "HERITAGE.", w2: "CULTURE.", w3: "MEMORIES." },
];

const DIVINE_QUOTES = [
  "Photography is the sacred art of freezing divine moments in eternal light. ✨",
  "Where deep devotion meets the lens, memories transform into living heritage. 🪔",
  "Every temple lamp carries a whisper of faith, peace, and timeless beauty. 🙏",
  "Capturing the soul of traditional celebrations, one frame at a time. ❤️",
];

export default function CinematicShowcase() {
  const [currentSet, setCurrentSet] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioContextRef = useRef(null);

  // Auto cycle word sets
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % WORD_SETS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Web Audio API synthesized warm temple bell chime
  const playTempleBellSound = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") ctx.resume();

      // Create dual bell oscillators for rich harmonic resonance
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = "sine";
      osc2.type = "triangle";

      // Temple bell harmonic frequencies (~432Hz & ~864Hz)
      osc1.frequency.setValueAtTime(432, ctx.currentTime);
      osc2.frequency.setValueAtTime(864, ctx.currentTime);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.5);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 3.5);
      osc2.stop(ctx.currentTime + 3.5);

      setIsPlayingAudio(true);
      setTimeout(() => setIsPlayingAudio(false), 3500);
    } catch {
      // Audio fallback
    }
  };

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % DIVINE_QUOTES.length);
  };

  return (
    <section className="relative min-h-[550px] py-20 w-full overflow-hidden bg-char-950 flex items-center justify-center border-y border-white/10">
      
      {/* Background Cinematic Image with subtle scale animation */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
        style={{ backgroundImage: 'url("/images/lord_ayyappa/ayyappa_chandana_abhisheka.jpg")' }}
      />

      {/* Layered overlays for dramatic atmosphere */}
      <div className="absolute inset-0 bg-char-950/75 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-char-950 via-char-950/50 to-char-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-char-950/80 via-transparent to-char-950/80" />

      {/* Ambient warm temple light glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] pointer-events-none opacity-[0.25]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(216,180,143,0.8) 0%, rgba(201,90,40,0.4) 45%, transparent 70%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center py-10">

        {/* Top Floating Sound Ambience Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            onClick={playTempleBellSound}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold tracking-wider uppercase font-body transition-all duration-300 shadow-xl ${
              isPlayingAudio
                ? "bg-beigegold-500 text-char-950 border-beigegold-400 scale-105"
                : "bg-char-900/90 text-beigegold-400 border-beigegold-500/40 hover:bg-beigegold-500/20"
            }`}
          >
            <Bell size={14} className={isPlayingAudio ? "animate-bounce text-char-950" : "text-beigegold-400"} />
            <span>{isPlayingAudio ? "RINGING TEMPLE BELL..." : "🔔 PLAY TEMPLE BELL CHIME"}</span>
          </button>
        </div>

        {/* ── Dynamic Morphing Outline Headline Words ── */}
        <div className="min-h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h3
              key={currentSet}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] leading-tight select-none"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory via-beigegold-300 to-ivory drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                {WORD_SETS[currentSet].w1}{" "}
              </span>
              <span className="text-outline text-ivory/80 hover:text-beigegold-400 transition-colors">
                {WORD_SETS[currentSet].w2}{" "}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-beigegold-400 via-brick-400 to-beigegold-300">
                {WORD_SETS[currentSet].w3}
              </span>
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* ── Interactive Devotional Quote Generator Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 max-w-2xl bg-char-900/90 border border-white/15 p-5 md:p-6 rounded-2xl backdrop-blur-xl shadow-2xl relative group"
        >
          <div className="flex items-center justify-between gap-4 mb-2 pb-2 border-b border-white/10">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] font-bold uppercase text-beigegold-400 font-body">
              <Sparkles size={12} />
              <span>DIVINE WISDOM & INSPIRATION</span>
            </div>
            <button
              onClick={nextQuote}
              aria-label="Next quote"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-beigegold-500 hover:text-char-950 text-beigegold-400 transition-all"
              title="Get next quote"
            >
              <RefreshCw size={13} />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="text-xs sm:text-sm text-ivory/90 font-body italic font-light leading-relaxed text-center"
            >
              "{DIVINE_QUOTES[quoteIndex]}"
            </motion.p>
          </AnimatePresence>

          <p className="text-[9px] tracking-[0.3em] uppercase text-beigegold-500/70 font-body text-center mt-3">
            TAP 🔄 TO REFRESH QUOTE
          </p>
        </motion.div>

        {/* Brand mark */}
        <p className="mt-8 text-[10px] tracking-[0.4em] uppercase text-ivory/40 font-body">
          ✦ {siteConfig.brandName} · ETERNAL DIVINITY ✦
        </p>

      </div>
    </section>
  );
}

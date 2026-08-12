// ============================================================================
// SITE CONFIGURATION — VAARAM LENS
// Edit everything about your brand, contact details and links right here.
// You should NOT need to touch any other file to update this information.
// ============================================================================

const siteConfig = {
  // ── Brand ──────────────────────────────────────────────────────────────────
  brandName: "HINDU PHOTOGRAPHY",      // [PHOTOGRAPHY BRAND NAME]
  brandTagline: "ETERNAL DIVINITY",
  photographerName: "Santhosh Yadu", // [PHOTOGRAPHER NAME]

  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    heading: "",
    subheading: "Temples. Portraits. Pre-Weddings. Every moment, beautifully captured.",
    tagline: "TEMPLE · HERITAGE · HISTORY · CULTURE · ARCHITECTURE",
    // Hero background image:
    backgroundImage: "/hero-bg.jpg",
  },

  // ── Cinematic Showcase (parallax full-width section) ──────────────────────
  cinematicShowcase: {
    image: "/hero-bg.jpg",
    alt: "Sacred deity illuminated in divine temple lights",
    text: "TIMELESS. SACRED. UNFORGETTABLE.",
  },

  // ── Divine Moments Section ─────────────────────────────────────────────────
  divineMoments: {
    image: "/hero-bg.jpg",
    quote:
      "Where architecture meets devotion, photography becomes a memory.",
  },

  // ── Contact / Social ────────────────────────────────────────────────────────
  contact: {
    email: "Santhoshyadu8055@gmail.com",
    instagram: "https://www.instagram.com/hindu_photography?igsh=OTVtbTV5d20ya28x",
    instagramHandle: "@hindu_photography",
    facebook: "https://facebook.com/hinduphotography",
    facebookHandle: "Hindu Photography",
    whatsappNumber: "919110482993",
    get whatsapp() {
      return `https://wa.me/${this.whatsappNumber}`;
    },
  },

  // ── About Section ──────────────────────────────────────────────────────────
  about: {
    heading: "BEHIND THE LENS",
    paragraphs: [
      "I don't just capture places — I capture people, emotions, and the stories that make every moment unforgettable.",
      "From the sacred grandeur of temples and heritage structures to the intimate joy of pre-weddings, portraits, and special events — my lens finds beauty in every frame.",
      "Whether it's the divine silence of a shrine at dawn or the laughter shared between two people in love, every photograph I take is a piece of someone's story, preserved forever.",
    ],
    portrait: "/images/other_clicks/santhosh_yadu_portrait.jpg",
  },

  // ── Stats (animate on scroll) ──────────────────────────────────────────────
  stats: [
    { label: "Sacred Places",     value: 100,  suffix: "+" },
    { label: "Stories Captured",  value: 500,  suffix: "+" },
    { label: "Frames",            value: 1000, suffix: "+" },
    { label: "Moments Preserved", value: 0,    suffix: "∞", isInfinite: true },
  ],

  // ── Introduction Section Image ─────────────────────────────────────────────
  introduction: {
    image: "/deity.jpg",
    imageAlt: "Sacred deity adorned in divine jewels, bathed in the warm glow of temple lamps",
  },
};

export default siteConfig;

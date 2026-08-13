import { useEffect, useState, useCallback } from "react";
import { Menu, X, Camera, MapPin, Phone, Mail, Sparkles } from "lucide-react";
import siteConfig from "../config";

const NAV_LINKS = [
  { label: "HOME",      href: "#home" },
  { label: "ABOUT",     href: "#about" },
  { label: "SERVICES",  href: "#services" },
  { label: "PORTFOLIO", href: "#gallery" },
  { label: "FEEDBACK",  href: "#feedback" },
  { label: "CONTACT",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("home");

  // Track scroll to change navbar appearance
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* ── Top Announcement Bar (LENSCRAFT Style) ── */}
      <div className="hidden lg:flex items-center justify-between px-8 py-2 bg-char-950/95 border-b border-white/10 text-[11px] text-ivory/60 font-body tracking-wider">
        <div className="flex items-center gap-2">
          <MapPin size={12} className="text-beigegold-500" />
          <span>Chitradurga, Karnataka, India</span>
        </div>

        <div className="flex items-center gap-2 text-beigegold-400 font-medium">
          <Sparkles size={11} />
          <span>✦ Capturing Moments, Creating Stories ✦</span>
        </div>

        <div className="flex items-center gap-5">
          <a href={`tel:+${siteConfig.contact.whatsappNumber}`} className="flex items-center gap-1.5 hover:text-beigegold-400 transition-colors">
            <Phone size={11} className="text-beigegold-500" />
            <span>+91 91104 82993</span>
          </a>
          <span className="text-white/20">|</span>
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-1.5 hover:text-beigegold-400 transition-colors">
            <Mail size={11} className="text-beigegold-500" />
            <span>Santhoshyadu8055@gmail.com</span>
          </a>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav
        className={`transition-all duration-500 border-b ${
          scrolled
            ? "bg-char-950/95 backdrop-blur-lg border-white/10 py-3.5 shadow-2xl"
            : "bg-char-950/80 backdrop-blur-md border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

          {/* ── Brand Logo ── */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
            aria-label={`${siteConfig.brandName} — Home`}
          >
            {/* Aperture Lens Icon */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-beigegold-500/40 bg-char-900 flex items-center justify-center text-beigegold-500 group-hover:bg-beigegold-500 group-hover:text-char-950 transition-all duration-300 shadow-lg shadow-beigegold-500/10 shrink-0">
              <Camera size={16} className="sm:hidden" />
              <Camera size={18} className="hidden sm:block" />
            </div>

            <div className="flex flex-col leading-none">
              <span className="font-display text-sm sm:text-lg md:text-xl font-bold tracking-[0.1em] sm:tracking-[0.18em] uppercase text-ivory group-hover:text-beigegold-400 transition-colors">
                HINDU PHOTOGRAPHY
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.35em] text-beigegold-500 uppercase font-body mt-0.5 sm:mt-1">
                ETERNAL DIVINITY
              </span>
            </div>
          </a>

          {/* ── Desktop Links ── */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
                      isActive ? "text-beigegold-400 font-semibold" : "text-ivory/70 hover:text-beigegold-400"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-beigegold-500 rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ── BOOK A SESSION CTA Button ── */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-6 py-2.5 text-[11px] tracking-[0.18em] font-bold uppercase text-char-950 bg-beigegold-500 hover:bg-beigegold-400 rounded-lg shadow-lg shadow-beigegold-500/20 transition-all duration-300 transform hover:-translate-y-0.5 inline-block"
            >
              BOOK A SESSION
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden relative z-[60] text-ivory hover:text-beigegold-400 transition-colors duration-300 p-1"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Full-screen Menu ── */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-char-950/98 grain flex flex-col justify-between p-8 transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center pt-4">
          <span className="font-display text-lg tracking-[0.18em] uppercase text-ivory">HINDU PHOTOGRAPHY</span>
        </div>

        <ul className="flex flex-col items-center gap-6 my-auto">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-display text-2xl tracking-[0.15em] uppercase transition-colors ${
                  active === link.href.replace("#", "") ? "text-beigegold-400" : "text-ivory/80"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="text-center pb-6">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="w-full py-3.5 text-xs tracking-[0.2em] font-bold uppercase text-char-950 bg-beigegold-500 rounded-lg inline-block text-center"
          >
            BOOK A SESSION
          </a>
        </div>
      </div>
    </header>
  );
}

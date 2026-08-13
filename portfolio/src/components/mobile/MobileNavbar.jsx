import { useState, useCallback } from "react";
import { Menu, X, Camera, Phone, Mail, Sparkles, MessageCircle } from "lucide-react";
import siteConfig from "../../config";

const NAV_LINKS = [
  { label: "HOME", href: "#m-home" },
  { label: "SERVICES", href: "#m-services" },
  { label: "PORTFOLIO", href: "#m-gallery" },
  { label: "ABOUT", href: "#m-about" },
  { label: "CONTACT", href: "#m-contact" },
];

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-char-950/95 backdrop-blur-md border-b border-white/10">
      <nav className="px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#m-home"
          onClick={(e) => handleNavClick(e, "#m-home")}
          className="flex items-center gap-2.5"
          aria-label="Hindu Photography Home"
        >
          <div className="w-8 h-8 rounded-full border border-beigegold-500/40 bg-char-900 flex items-center justify-center text-beigegold-400 shrink-0">
            <Camera size={16} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-sm font-bold tracking-wider text-ivory">
              HINDU PHOTOGRAPHY
            </span>
            <span className="text-[8px] tracking-[0.25em] text-beigegold-500 font-body uppercase mt-0.5">
              ETERNAL DIVINITY
            </span>
          </div>
        </a>

        {/* Action button & Hamburger toggle */}
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-beigegold-500/15 border border-beigegold-500/40 text-beigegold-400 text-xs font-bold font-body flex items-center gap-1"
          >
            <MessageCircle size={14} />
            <span>CHAT</span>
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-ivory hover:text-beigegold-400 transition-colors"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 top-[53px] z-40 bg-char-950/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto">
          <ul className="flex flex-col items-center gap-6 my-auto">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-display text-xl tracking-[0.15em] uppercase text-ivory hover:text-beigegold-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-3 pt-6 border-t border-white/10 text-center">
            <a
              href="#m-contact"
              onClick={(e) => handleNavClick(e, "#m-contact")}
              className="w-full py-3 text-xs tracking-[0.2em] font-bold uppercase text-char-950 bg-beigegold-500 rounded-lg inline-block text-center shadow-lg font-body"
            >
              BOOK A SESSION NOW
            </a>
            <div className="flex justify-center items-center gap-4 text-xs text-ivory/60 pt-2 font-body">
              <a href={`tel:+${siteConfig.contact.whatsappNumber}`} className="flex items-center gap-1 hover:text-beigegold-400">
                <Phone size={12} className="text-beigegold-500" /> +91 91104 82993
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

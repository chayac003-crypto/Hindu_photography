import { useState } from "react";
import { Camera, Instagram, Facebook, MessageCircle, Mail, Send } from "lucide-react";
import siteConfig from "../config";

export default function Footer() {
  const year = new Date().getFullYear();
  const { contact } = siteConfig;
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollTo = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const socialLinks = [
    { href: contact.instagram, icon: Instagram, label: "Instagram" },
    { href: contact.facebook, icon: Facebook, label: "Facebook" },
    { href: contact.whatsapp, icon: MessageCircle, label: "WhatsApp" },
    { href: `mailto:${contact.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <footer className="bg-char-950 border-t border-white/10 pt-12 sm:pt-16 pb-8 px-4 sm:px-6 text-ivory font-body relative overflow-hidden">

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beigegold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">

          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-beigegold-500/40 bg-char-900 flex items-center justify-center text-beigegold-500">
                <Camera size={18} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold tracking-[0.18em] uppercase text-ivory">
                  HINDU PHOTOGRAPHY
                </span>
                <span className="text-[9px] tracking-[0.35em] text-beigegold-500 uppercase font-body mt-1">
                  ETERNAL DIVINITY
                </span>
              </div>
            </div>

            <p className="text-ivory/60 text-xs leading-relaxed max-w-sm">
              Capturing real moments and creating timeless memories across sacred temples, heritage shrines, portraits, and grand celebrations. Let's tell your story through our lens.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-ivory/70 hover:text-beigegold-400 hover:border-beigegold-500 hover:bg-beigegold-500/10 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-ivory mb-4 font-body">QUICK LINKS</h4>
            <ul className="space-y-2.5 text-xs text-ivory/60">
              {["#home", "#about", "#gallery", "#contact"].map((link) => (
                <li key={link}>
                  <a href={link} onClick={scrollTo(link)} className="hover:text-beigegold-400 transition-colors uppercase tracking-wider text-[11px]">
                    {link.replace("#", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-ivory mb-4 font-body">SERVICES</h4>
            <ul className="space-y-2.5 text-xs text-ivory/60">
              <li><a href="#gallery" onClick={scrollTo("#gallery")} className="hover:text-beigegold-400 transition-colors">Temple Photography</a></li>
              <li><a href="#gallery" onClick={scrollTo("#gallery")} className="hover:text-beigegold-400 transition-colors">Portrait Photography (Chaya)</a></li>
              <li><a href="#gallery" onClick={scrollTo("#gallery")} className="hover:text-beigegold-400 transition-colors">Events & Jaathre Coverage</a></li>
              <li><a href="#gallery" onClick={scrollTo("#gallery")} className="hover:text-beigegold-400 transition-colors">Divine Alankara Rituals</a></li>
              <li><a href="#gallery" onClick={scrollTo("#gallery")} className="hover:text-beigegold-400 transition-colors">Pre-Wedding Shoots</a></li>
              <li><a href="#gallery" onClick={scrollTo("#gallery")} className="hover:text-beigegold-400 transition-colors">Heritage & Nature Photography</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-ivory mb-4 font-body">NEWSLETTER</h4>
            <p className="text-xs text-ivory/60 mb-4 leading-relaxed">
              Subscribe to get exclusive photography updates, behind-the-scenes stories & booking offers!
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full bg-char-900 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-beigegold-500"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="p-2.5 rounded-lg bg-beigegold-500 text-char-950 hover:bg-beigegold-400 transition-colors shrink-0"
              >
                <Send size={15} />
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] text-beigegold-400 font-body mt-2">✦ Thank you for subscribing!</p>
            )}
          </div>

        </div>

        {/* Bottom copyright bar + Creator Box */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ivory/40">
          <p>© {year} {siteConfig.brandName}. All Rights Reserved.</p>

          {/* Badge for CHAYA C - Creative Developer */}
          <a
            href="mailto:chayac003@gmail.com"
            title="Contact Chaya C"
            className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl border border-beigegold-500/40 bg-char-900/90 text-ivory hover:border-beigegold-400 hover:bg-beigegold-500/10 transition-all shadow-lg shadow-beigegold-500/10 font-body group max-w-full text-center"
          >
            <span className="text-beigegold-400 text-[10px] sm:text-xs">🎨 Creative Developer:</span>
            <span className="font-bold text-ivory group-hover:text-beigegold-300 tracking-widest uppercase font-display text-xs">CHAYA C</span>
            <span className="text-[10px] text-ivory/50 group-hover:text-beigegold-400 border-t sm:border-t-0 sm:border-l border-white/10 pt-0.5 sm:pt-0 sm:pl-2 sm:ml-1 lowercase font-body font-normal block sm:inline">
              chayac003@gmail.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

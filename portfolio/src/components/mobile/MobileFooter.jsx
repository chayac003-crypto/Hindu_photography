import siteConfig from "../../config";
import { Camera } from "lucide-react";

export default function MobileFooter() {
  const year = new Date().getFullYear();

  const scrollTo = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-char-950 border-t border-white/10 py-8 px-4 text-center font-body text-ivory">
      <div className="flex flex-col items-center gap-4">
        {/* Brand Header */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full border border-beigegold-500/40 bg-char-900 flex items-center justify-center text-beigegold-500">
            <Camera size={14} />
          </div>
          <span className="font-display text-sm font-bold tracking-wider text-ivory">
            HINDU PHOTOGRAPHY
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 text-[11px] text-ivory/60 uppercase tracking-wider">
          <a href="#m-home" onClick={scrollTo("#m-home")} className="hover:text-beigegold-400">Home</a>
          <a href="#m-services" onClick={scrollTo("#m-services")} className="hover:text-beigegold-400">Services</a>
          <a href="#m-gallery" onClick={scrollTo("#m-gallery")} className="hover:text-beigegold-400">Portfolio</a>
          <a href="#m-about" onClick={scrollTo("#m-about")} className="hover:text-beigegold-400">About</a>
          <a href="#m-contact" onClick={scrollTo("#m-contact")} className="hover:text-beigegold-400">Contact</a>
        </div>

        <p className="text-[10px] text-ivory/40 pt-2 border-t border-white/10 w-full">
          © {year} {siteConfig.brandName}. All Rights Reserved.
        </p>

        {/* Developer Credit */}
        <a
          href="mailto:chayac003@gmail.com"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-beigegold-500/30 bg-char-900/90 text-[10px] text-ivory font-body"
        >
          <span className="text-beigegold-400">🎨 Developer:</span>
          <span className="font-bold tracking-wider uppercase font-display text-xs">CHAYA C</span>
        </a>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ComeBackNavigation() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[80] flex flex-col items-end gap-2 font-body">
      <button
        onClick={scrollToTop}
        aria-label="Come Back to Top of Website"
        className="px-4 py-2.5 rounded-full bg-beigegold-500 hover:bg-beigegold-400 text-char-950 font-bold text-xs tracking-widest uppercase shadow-2xl shadow-beigegold-500/30 transition-all transform hover:-translate-y-1 flex items-center gap-2 group border border-beigegold-300"
        title="Click here to come back to top of website"
      >
        <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform text-char-950" />
        <span>👈 CLICK HERE TO COME BACK TO TOP</span>
      </button>
    </div>
  );
}

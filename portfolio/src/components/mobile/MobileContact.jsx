import { useState } from "react";
import { Mail, Instagram, Facebook, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import siteConfig from "../../config";

export default function MobileContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setStatus("sending");
    await new Promise((res) => setTimeout(res, 800));
    setStatus("sent");
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  const socialLinks = [
    { href: `mailto:${siteConfig.contact.email}`, icon: Mail, label: "Email", text: siteConfig.contact.email },
    { href: siteConfig.contact.instagram, icon: Instagram, label: "Instagram", text: siteConfig.contact.instagramHandle, external: true },
    { href: siteConfig.contact.facebook, icon: Facebook, label: "Facebook", text: siteConfig.contact.facebookHandle || "Hindu Photography", external: true },
    { href: siteConfig.contact.whatsapp, icon: MessageCircle, label: "WhatsApp", text: "+91 91104 82993", external: true },
  ];

  return (
    <section id="m-contact" className="py-10 px-4 bg-char-900 border-t border-white/10">
      <div className="text-center mb-6">
        <span className="text-beigegold-500 text-[9px] tracking-[0.25em] uppercase font-bold font-body">
          GET IN TOUCH
        </span>
        <h2 className="font-display text-2xl font-semibold text-ivory mt-1">
          Let's Capture Memories
        </h2>
      </div>

      {/* Touch Social Channels */}
      <div className="grid grid-cols-1 gap-2.5 mb-8">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 p-3 rounded-xl bg-char-950 border border-white/10 text-ivory font-body shadow-sm"
            >
              <div className="w-9 h-9 rounded-full bg-beigegold-500/15 border border-beigegold-500/30 flex items-center justify-center text-beigegold-400 shrink-0">
                <Icon size={16} />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <span className="block text-[9px] uppercase tracking-wider text-ivory/50">{link.label}</span>
                <span className="block text-xs text-ivory truncate">{link.text}</span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Simplified Mobile Form */}
      <form onSubmit={handleSubmit} className="bg-char-950 border border-white/15 p-4 rounded-2xl space-y-3 font-body">
        <h3 className="font-display text-base text-ivory font-bold text-left mb-2">
          Send a Direct Message
        </h3>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-ivory/70 mb-1 text-left">Your Name *</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full bg-char-900 border border-white/15 rounded-lg px-3 py-2.5 text-xs text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-beigegold-500"
          />
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-ivory/70 mb-1 text-left">Your Email / Phone</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your contact info"
            className="w-full bg-char-900 border border-white/15 rounded-lg px-3 py-2.5 text-xs text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-beigegold-500"
          />
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-ivory/70 mb-1 text-left">Your Message *</label>
          <textarea
            required
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your event or shoot..."
            className="w-full bg-char-900 border border-white/15 rounded-lg p-3 text-xs text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-beigegold-500 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-3 bg-beigegold-500 text-char-950 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 shadow-md"
        >
          {status === "sent" ? (
            <>
              <CheckCircle2 size={14} /> Message Sent!
            </>
          ) : status === "sending" ? (
            "Sending..."
          ) : (
            <>
              Send Message <Send size={13} />
            </>
          )}
        </button>
      </form>
    </section>
  );
}

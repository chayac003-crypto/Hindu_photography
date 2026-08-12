import { Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import siteConfig from "../config";
import ContactForm from "./ContactForm";
import useScrollReveal from "../hooks/useScrollReveal";

const getLinks = (contact) => [
  {
    key: "email",
    label: "Email",
    icon: Mail,
    href: `mailto:${contact.email}`,
    display: contact.email,
    tooltip: "Send an Email",
    color: "hover:shadow-[0_0_24px_-4px_rgba(191,91,52,0.7)]",
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: Instagram,
    href: contact.instagram,
    display: contact.instagramHandle,
    tooltip: "Follow on Instagram",
    color: "hover:shadow-[0_0_24px_-4px_rgba(191,91,52,0.7)]",
    external: true,
  },
  {
    key: "facebook",
    label: "Facebook",
    icon: Facebook,
    href: contact.facebook,
    display: contact.facebookHandle || "Hindu Photography",
    tooltip: "Like on Facebook",
    color: "hover:shadow-[0_0_24px_-4px_rgba(191,91,52,0.7)]",
    external: true,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    href: contact.whatsapp,
    display: "Message Directly",
    tooltip: "Chat on WhatsApp",
    color: "hover:shadow-[0_0_24px_-4px_rgba(191,91,52,0.7)]",
    external: true,
  },
];

export default function Contact() {
  const ref   = useScrollReveal();
  const links = getLinks(siteConfig.contact);

  return (
    <section id="contact" ref={ref} className="relative bg-char-900 grain py-28 md:py-36 px-6 overflow-hidden">

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] pointer-events-none opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(191,91,52,1) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-500/60" />
            <span className="text-gold-500 text-[10px] tracking-[0.45em] uppercase font-body">
              Get in Touch
            </span>
            <span className="w-8 h-px bg-gold-500/60" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mt-2">
            Let's Create Something Timeless
          </h2>
          <p className="text-ivory/55 mt-4 font-light text-sm md:text-base font-body leading-relaxed">
            For collaborations, photography projects, events, heritage documentation,
            or simply to share a story — get in touch.
          </p>
        </div>

        {/* ── Contact links + Form ── */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">

          {/* Contact links */}
          <div className="reveal reveal-delay-1 flex flex-col gap-4">
            {links.map(({ key, label, icon: Icon, href, display, tooltip, external }, i) => (
              <motion.a
                key={key}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                data-tooltip={tooltip}
                className="tooltip-wrapper group relative flex items-center gap-4 border border-ivory/8 px-5 py-4 transition-all duration-350 hover:border-brick-500/50 hover:shadow-[0_0_24px_-6px_rgba(191,91,52,0.55)] hover:bg-char-800/40"
              >
                {/* Icon */}
                <span className="flex items-center justify-center w-11 h-11 rounded-full border border-gold-500/25 text-gold-400 group-hover:bg-brick-500 group-hover:border-brick-500 group-hover:text-char-950 transition-all duration-350 shrink-0">
                  <Icon size={17} />
                </span>

                {/* Labels */}
                <span className="flex-1 min-w-0">
                  <span className="block text-[9px] tracking-[0.25em] uppercase text-ivory/40 font-body">
                    {label}
                  </span>
                  <span className="block text-ivory text-sm mt-0.5 font-body truncate group-hover:text-gold-400 transition-colors duration-300">
                    {display}
                  </span>
                </span>

                {/* Arrow */}
                <span className="text-ivory/20 group-hover:text-gold-400/60 transition-colors duration-300 text-lg">
                  →
                </span>
              </motion.a>
            ))}

            {/* Decorative divider */}
            <div className="mt-4 pt-6 border-t border-gold-500/10 text-center">
              <p className="text-ivory/30 text-[10px] tracking-[0.3em] uppercase font-body">
                Every story deserves to be told
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal reveal-delay-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Heart, User, Calendar, Landmark, Sparkles, Compass } from "lucide-react";

const SERVICES_LIST = [
  {
    icon: Heart,
    title: "WEDDINGS",
    subtitle: "Pre-weddings & ethnic grace",
    image: "/images/other_clicks/other_click3.jpg",
    filterKey: "chaya",
  },
  {
    icon: User,
    title: "PORTRAITS",
    subtitle: "Outdoor & lifestyle sessions",
    image: "/images/other_clicks/brotherhood_portrait.jpg",
    filterKey: "other_clicks",
  },
  {
    icon: Calendar,
    title: "EVENTS & JAATHRE",
    subtitle: "Grand rathotsava & festivals",
    image: "/images/nayakanahatti/jaathre_crowd.jpg",
    filterKey: "nayakanahatti",
  },
  {
    icon: Landmark,
    title: "TEMPLES",
    subtitle: "Sri Swamy Chandana Alankara",
    image: "/images/lord_ayyappa/ayyappa_chandana_abhisheka.jpg",
    filterKey: "lord_ayyappa",
  },
  {
    icon: Sparkles,
    title: "DIVINE ALANKARA",
    subtitle: "Silver Krishna & deity darshan",
    image: "/images/temple_clicks/silver_krishna.jpg",
    filterKey: "temple_clicks",
  },
  {
    icon: Compass,
    title: "OTHER CLICKS",
    subtitle: "Om pendant & candid moments",
    image: "/images/other_clicks/om_pendant.jpg",
    filterKey: "other_clicks",
  },
];

export default function Services() {
  const handleCardClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-char-950 py-12 px-6 border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Dark Container Grid featuring Real Photo Frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 bg-char-900/90 border border-white/10 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl backdrop-blur-xl">
          {SERVICES_LIST.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.title}
                href="#gallery"
                onClick={(e) => handleCardClick(e, "#gallery")}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-end p-4 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 hover:border-beigegold-500/50 transition-all duration-500 h-52 sm:h-60 shadow-lg cursor-pointer"
              >
                {/* Background Photo Frame */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-char-950/65 to-char-950/20 group-hover:from-char-950/95 transition-all duration-300" />

                {/* Top Icon Badge */}
                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-char-950/80 border border-white/15 backdrop-blur-md flex items-center justify-center text-beigegold-400 group-hover:bg-beigegold-500 group-hover:text-char-950 transition-all duration-300 shadow-md">
                  <Icon size={14} />
                </div>

                {/* Bottom Text Content */}
                <div className="relative z-10 text-left">
                  <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-ivory group-hover:text-beigegold-400 transition-colors font-body drop-shadow-md">
                    {service.title}
                  </h3>
                  <p className="text-[10px] text-ivory/70 font-body mt-1 leading-tight drop-shadow-sm">
                    {service.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[8px] tracking-widest text-char-950 bg-beigegold-500 uppercase font-bold mt-2.5 px-2 py-0.5 rounded shadow font-body">
                    👉 CLICK HERE TO VIEW
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

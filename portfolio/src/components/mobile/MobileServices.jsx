import { Heart, User, Calendar, Landmark, Sparkles, Compass } from "lucide-react";

const MOBILE_SERVICES = [
  {
    icon: Heart,
    title: "WEDDINGS & PRE-WEDDINGS",
    subtitle: "Ethnic grace & candid portraits",
    image: "/images/other_clicks/other_click3.jpg",
  },
  {
    icon: User,
    title: "PORTRAITS",
    subtitle: "Outdoor & lifestyle sessions",
    image: "/images/other_clicks/brotherhood_portrait.jpg",
  },
  {
    icon: Calendar,
    title: "EVENTS & JAATHRE",
    subtitle: "Grand rathotsava & festivals",
    image: "/images/nayakanahatti/jaathre_crowd.jpg",
  },
  {
    icon: Landmark,
    title: "TEMPLES",
    subtitle: "Sacred heritage photography",
    image: "/images/lord_ayyappa/ayyappa_chandana_abhisheka.jpg",
  },
  {
    icon: Sparkles,
    title: "DIVINE ALANKARA",
    subtitle: "Silver Krishna & deity darshan",
    image: "/images/temple_clicks/silver_krishna.jpg",
  },
  {
    icon: Compass,
    title: "HERITAGE CLICKS",
    subtitle: "Architecture & candid moments",
    image: "/images/other_clicks/om_pendant.jpg",
  },
];

export default function MobileServices() {
  const scrollTo = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="m-services" className="py-10 px-4 bg-char-950 border-t border-white/10">
      <div className="text-center mb-6">
        <span className="text-beigegold-500 text-[9px] tracking-[0.25em] uppercase font-bold font-body">
          OUR SERVICES
        </span>
        <h2 className="font-display text-2xl font-semibold text-ivory mt-1">
          Specialized Photography
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3.5">
        {MOBILE_SERVICES.map((srv) => {
          const Icon = srv.icon;
          return (
            <a
              key={srv.title}
              href="#m-gallery"
              onClick={scrollTo("#m-gallery")}
              className="relative rounded-xl overflow-hidden border border-white/10 bg-char-900 h-36 flex flex-col justify-end p-4 shadow-md"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${srv.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-char-950/70 to-transparent" />

              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-char-950/80 border border-white/15 flex items-center justify-center text-beigegold-400">
                <Icon size={13} />
              </div>

              <div className="relative z-10 text-left">
                <h3 className="text-xs font-bold tracking-wider uppercase text-ivory font-body">
                  {srv.title}
                </h3>
                <p className="text-[10px] text-ivory/70 font-body mt-0.5">
                  {srv.subtitle}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

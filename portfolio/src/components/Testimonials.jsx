import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote: "Amazing experience! The photos turned out better than we imagined. Highly professional, punctual and super easy to work with during our temple visit.",
    name: "Santhosh Kumar",
    role: "Temple Devotee & Client",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "Incredible eye for detail and creativity. Captured our pre-wedding traditional shoot so beautifully. We will cherish these memories forever!",
    name: "Kavya & Ramesh",
    role: "Pre-Wedding Shoot",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "Very professional, punctual and talented photographer. The divine alankara photos speak for themselves. Highly recommended for any sacred event!",
    name: "Dr. Vijay Prasad",
    role: "Jaathre Organizer",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);

  return (
    <section id="testimonials" className="bg-char-950 py-20 px-6 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] font-bold uppercase text-beigegold-500 mb-3">
          <span className="w-6 h-px bg-beigegold-500" />
          <span>KIND WORDS</span>
          <span className="w-6 h-px bg-beigegold-500" />
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ivory tracking-tight">
          What Our Clients Say
        </h2>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-6 md:p-8 rounded-3xl bg-ivory text-char-950 shadow-2xl border border-white/20 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 relative"
            >
              <div>
                <Quote size={28} className="text-beigegold-500/30 mb-3" />
                <p className="text-xs md:text-sm text-char-950/80 font-body leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-beigegold-500"
                  />
                  <div>
                    <h4 className="font-display text-sm font-bold text-char-950">{item.name}</h4>
                    <p className="text-[10px] text-char-950/50 font-body">{item.role}</p>
                  </div>
                </div>

                <div className="flex text-amber-500 gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

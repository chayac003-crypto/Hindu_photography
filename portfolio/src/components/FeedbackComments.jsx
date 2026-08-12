import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Send, Sparkles, MessageSquare, ThumbsUp } from "lucide-react";

const INITIAL_COMMENTS = [
  {
    id: 1,
    name: "Priya & Vinay",
    rating: 5,
    message: "Your temple photography brings so much peace to our hearts! Every photo of Lord Ayyappa and Nayakanahatti Swamy feels divine. Keep shining with love! ❤️✨",
    date: "August 10, 2026",
    likes: 18,
    isLiked: false,
    avatar: "💖",
  },
  {
    id: 2,
    name: "Kavya M",
    rating: 5,
    message: "Chaya's ethnic portraits are beyond gorgeous! The natural lighting and saree draping frames are so authentic and beautiful. Sending lots of love! 💕🌸",
    date: "August 11, 2026",
    likes: 24,
    isLiked: false,
    avatar: "🌺",
  },
  {
    id: 3,
    name: "Ramesh Kumar",
    rating: 5,
    message: "Nayakanahatti Swamy rathotsava clicks and Kanive Maramma Devi photos are breathtaking! Captured the soul of Chitradurga. Devotional perfection! 🙏❤️",
    date: "August 12, 2026",
    likes: 31,
    isLiked: false,
    avatar: "🪔",
  },
];

export default function FeedbackComments() {
  const [comments, setComments] = useState(() => {
    try {
      const saved = localStorage.getItem("hindu_photo_comments");
      return saved ? JSON.parse(saved) : INITIAL_COMMENTS;
    } catch {
      return INITIAL_COMMENTS;
    }
  });

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("hindu_photo_comments", JSON.stringify(comments));
    } catch {
      // ignore
    }
  }, [comments]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newComment = {
      id: Date.now(),
      name: name.trim(),
      rating,
      message: message.trim(),
      date: "Just now",
      likes: 1,
      isLiked: true,
      avatar: ["💖", "🌸", "✨", "🌺", "🪔", "⭐"][Math.floor(Math.random() * 6)],
    };

    setComments([newComment, ...comments]);
    setName("");
    setMessage("");
    setRating(5);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleToggleLike = (id) => {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          return {
            ...c,
            likes: c.isLiked ? c.likes - 1 : c.likes + 1,
            isLiked: !c.isLiked,
          };
        }
        return c;
      })
    );
  };

  return (
    <section id="feedback" className="bg-char-950 py-20 px-6 border-t border-white/10 relative overflow-hidden">
      
      {/* Background ambient heart glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] pointer-events-none opacity-[0.08]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,118,58,0.8) 0%, rgba(216,180,143,0.4) 50%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-[10px] tracking-[0.25em] font-bold uppercase mb-3">
            <Heart size={12} className="fill-rose-400 text-rose-400 animate-pulse" />
            <span>SPREAD THE LOVE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ivory tracking-tight">
            Visitor Feedback & Love Notes
          </h2>
          <p className="text-ivory/60 text-xs sm:text-sm font-body mt-3 leading-relaxed">
            Share your love, memories, and feedback for Hindu Photography. Every comment is cherished with love! ❤️
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ── Cute Input Comment Box Form (Left 5 cols) ── */}
          <div className="lg:col-span-5 bg-char-900/90 border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-xl relative">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <div className="w-9 h-9 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <Heart size={18} className="fill-rose-400" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ivory">Leave a Note with Love</h3>
                <p className="text-[10px] text-ivory/50 font-body">Your words bring joy to our lens ✨</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-body">
              {/* Visitor Name */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-ivory/80 mb-1.5">
                  YOUR NAME <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya & Vinay"
                  className="w-full bg-char-950 border border-white/15 rounded-xl px-4 py-3 text-xs text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-beigegold-500 transition-colors"
                />
              </div>

              {/* Star Rating Selection */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-ivory/80 mb-1.5">
                  YOUR RATING ❤️
                </label>
                <div className="flex items-center gap-2 bg-char-950 border border-white/15 rounded-xl px-4 py-2.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="text-amber-400 hover:scale-125 transition-transform"
                    >
                      <Star
                        size={18}
                        fill={(hoverRating || rating) >= star ? "currentColor" : "none"}
                        className={(hoverRating || rating) >= star ? "text-amber-400" : "text-ivory/20"}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-beigegold-400 font-bold ml-2">
                    {rating} / 5 Stars
                  </span>
                </div>
              </div>

              {/* Feedback Message */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-ivory/80 mb-1.5">
                  YOUR FEEDBACK / LOVE NOTE <span className="text-rose-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts, favorite photo, or love note..."
                  className="w-full bg-char-950 border border-white/15 rounded-xl p-4 text-xs text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-beigegold-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 text-xs tracking-[0.2em] font-bold uppercase text-char-950 bg-beigegold-500 hover:bg-beigegold-400 rounded-xl shadow-lg shadow-beigegold-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>SEND WITH LOVE</span>
                <Heart size={14} className="fill-char-950 group-hover:scale-125 transition-transform" />
              </button>

              {/* Success Notification */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 bg-rose-500/20 border border-rose-500/40 rounded-xl text-center text-xs text-rose-300 font-medium flex items-center justify-center gap-2"
                  >
                    <span>Thank you for sending your love! ❤️ Your note is live below.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* ── Live Comments List (Right 7 cols) ── */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-beigegold-400 font-body">
                RECENT LOVE NOTES ({comments.length})
              </span>
              <span className="text-[10px] text-ivory/50 font-body">✦ Tap ❤️ to send a like</span>
            </div>

            {comments.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 sm:p-6 rounded-2xl bg-char-900/80 border border-white/10 hover:border-white/20 transition-all shadow-xl relative group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0">
                      {item.avatar}
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-ivory">{item.name}</h4>
                      <p className="text-[10px] text-ivory/40 font-body">{item.date}</p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-ivory/80 font-body leading-relaxed pl-1 italic">
                  "{item.message}"
                </p>

                {/* Like Button */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-end">
                  <button
                    onClick={() => handleToggleLike(item.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-body transition-all ${
                      item.isLiked
                        ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                        : "bg-white/5 text-ivory/60 hover:text-rose-400 hover:bg-rose-500/10 border border-white/10"
                    }`}
                  >
                    <Heart
                      size={12}
                      className={item.isLiked ? "fill-rose-400 text-rose-400" : ""}
                    />
                    <span>{item.likes} {item.likes === 1 ? "Love" : "Loves"}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

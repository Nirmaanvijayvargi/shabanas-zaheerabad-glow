import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare, Send } from "lucide-react";

const testimonials = [
  {
    text: "Shabana's is the only salon I trust for my bridal clients. The team is professional, friendly, and truly cares about making you feel beautiful. Highly recommend!",
    name: "Ayesha K.",
    role: "Zaheerabad",
    initial: "A",
  },
  {
    text: "Best dandruff treatment I've ever had! My scalp feels so healthy now. The staff explained everything clearly and made me feel comfortable.",
    name: "Priya M.",
    role: "Regular Client",
    initial: "P",
  },
  {
    text: "I had my bridal makeup done here and I've never felt more beautiful. Everyone at my wedding complimented how natural and stunning I looked!",
    name: "Fatima R.",
    role: "Bride",
    initial: "F",
  },
];

const TestimonialsSection = () => {
  const [showReview, setShowReview] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: "", review: "", rating: 5 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowReview(false);
      setSubmitted(false);
      setReviewForm({ name: "", review: "", rating: 5 });
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-serif font-bold">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-8 text-center max-w-lg mx-auto"
        >
          {!showReview ? (
            <>
              <MessageSquare className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Loved Your Experience?</h3>
              <p className="text-sm text-muted-foreground mb-4">Share your experience and help others discover the best beauty salon in Zaheerabad</p>
              <button
                onClick={() => setShowReview(true)}
                className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-gold hover:opacity-90 transition-opacity"
              >
                Write a Review
              </button>
            </>
          ) : submitted ? (
            <div className="py-4">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Thank You!</h3>
              <p className="text-sm text-muted-foreground">Your review has been submitted. We appreciate your feedback!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="text-left space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground text-center mb-2">Write Your Review</h3>
              
              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                    className="p-1"
                  >
                    <Star className={`w-6 h-6 transition-colors ${star <= reviewForm.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder="Your Name"
                value={reviewForm.name}
                onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                placeholder="Share your experience..."
                value={reviewForm.review}
                onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowReview(false)}
                  className="flex-1 px-4 py-3 rounded-full border border-border text-foreground/70 text-sm font-medium hover:bg-secondary transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-4 py-3 rounded-full font-semibold shadow-gold hover:opacity-90 transition-opacity text-sm"
                >
                  <Send className="w-4 h-4" /> Submit
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

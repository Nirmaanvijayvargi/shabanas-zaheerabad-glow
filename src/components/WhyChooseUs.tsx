import { motion } from "framer-motion";
import { Users, Star, Heart, DollarSign, GraduationCap, Sparkles } from "lucide-react";

const points = [
  { icon: Users, title: "Trusted by the Community", desc: "Zaheerabad's most recognized beauty salon with years of proven excellence" },
  { icon: Star, title: "Proven Results", desc: "40+ five-star reviews from real clients who love their transformations" },
  { icon: Heart, title: "Personalized Attention", desc: "We treat every client like family with customized beauty solutions" },
  { icon: DollarSign, title: "Affordable & Transparent", desc: "Premium quality at honest prices — no hidden costs" },
  { icon: GraduationCap, title: "Academy-Backed Expertise", desc: "Our team is trained to professional standards at our own academy" },
  { icon: Sparkles, title: "Clean & Hygienic", desc: "Spotless environment with the highest safety standards" },
];

const WhyChooseUs = () => (
  <section className="py-20 bg-gradient-dark">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
      >
        Why Hundreds Choose Shabana's
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <p.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

import { motion } from "framer-motion";
import { Star, Users, Heart, Shield, Phone } from "lucide-react";
import heroBridal from "@/assets/hero-bridal.png";

const badges = [
  { icon: Star, label: "5-Star Rated" },
  { icon: Users, label: "40+ Happy Reviews" },
  { icon: Heart, label: "Bridal Specialists" },
  { icon: Shield, label: "Locally Trusted" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBridal} alt="Shabana's Beauty Salon luxurious interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        {/* Established Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-8"
        >
          <span className="text-primary">✨</span>
          <span className="text-sm text-foreground/90">The Best Professional Beauty Academy in Zaheerabad — Est. 2023, Serving Happy Customers Since Then</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-2xl mb-6"
        >
          Zaheerabad's Most{" "}
          <span className="text-gradient-gold italic">Trusted</span>
          <br />
          Beauty Salon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-muted-foreground max-w-xl mb-8"
        >
          Professional Hair, Skin & Bridal Care Trusted by Hundreds of Happy Clients
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {badges.map((b) => (
            <div key={b.label} className="glass-card rounded-full px-4 py-2 flex items-center gap-2 text-sm text-foreground/80">
              <b.icon className="w-4 h-4 text-primary" />
              {b.label}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4"
        >
          <a href="tel:+917780467684" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-gold hover:opacity-90 transition-opacity">
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a href="#services" className="inline-flex items-center gap-2 border border-primary/30 text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/10 transition-colors">
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Sparkles, Heart, Zap, Flower2, Palette, Hand, Target, Waves } from "lucide-react";

const PHONE = "tel:+917780467684";

const categories = [
  {
    id: "hair",
    label: "Hair & Scalp",
    icon: Scissors,
    services: [
      { name: "Dandruff Treatment", desc: "Deep cleansing for a healthy, flake-free scalp" },
      { name: "Hair Smoothening", desc: "Silky, frizz-free hair that lasts for months" },
      { name: "Hair Highlights", desc: "Add dimension with professionally blended color" },
      { name: "Hair Botox", desc: "Restore damaged hair to its natural glory" },
      { name: "Hair Spa", desc: "Deep nourishment for stronger, shinier hair" },
      { name: "PRP Hair Treatment", desc: "Advanced therapy for hair growth & thickness" },
    ],
  },
  {
    id: "skin",
    label: "Skin & Beauty",
    icon: Sparkles,
    services: [
      { name: "Pigmentation Treatment", desc: "Even-toned, radiant skin with expert care" },
      { name: "BB Glow Treatment", desc: "Semi-permanent foundation for flawless skin" },
      { name: "Eye Brow Ombre", desc: "Perfectly shaped brows with natural gradient" },
      { name: "Facial & Skincare", desc: "Rejuvenating treatments for glowing skin" },
      { name: "PRP Skin Treatment", desc: "Advanced platelet-rich plasma skin rejuvenation" },
    ],
  },
  {
    id: "bridal",
    label: "Bridal",
    icon: Heart,
    services: [
      { name: "Bridal Makeup", desc: "Stunning looks for your most special day" },
      { name: "Pre-Bridal Packages", desc: "Complete bridal preparation treatments" },
      { name: "Engagement & Reception", desc: "Picture-perfect looks for every celebration" },
      { name: "Complete Bridal Care", desc: "Head-to-toe beauty for brides" },
    ],
  },
  {
    id: "advanced",
    label: "Advanced",
    icon: Zap,
    services: [
      { name: "PMU Treatment", desc: "Permanent makeup for effortless everyday beauty" },
      { name: "PRP Treatments", desc: "Cutting-edge platelet-rich plasma therapy" },
      { name: "Laser Hair Removal", desc: "Unwanted hair removal with advanced laser technology" },
      { name: "BB Glow", desc: "Semi-permanent skin perfecting treatment" },
      { name: "Ear Stitching", desc: "Professional ear lobe repair treatment" },
    ],
  },
  {
    id: "mehendi",
    label: "Mehendi & Nail Art",
    icon: Palette,
    services: [
      { name: "Bridal Mehendi", desc: "Intricate, beautiful henna designs for brides" },
      { name: "Arabic Mehendi", desc: "Elegant Arabic-style henna patterns" },
      { name: "Party Mehendi", desc: "Trendy designs for celebrations & events" },
      { name: "Nail Art", desc: "Creative, stunning nail designs & extensions" },
      { name: "Gel & Acrylic Nails", desc: "Long-lasting, salon-quality nail treatments" },
    ],
  },
  {
    id: "wellness",
    label: "Wellness",
    icon: Flower2,
    services: [
      { name: "Head Massage", desc: "Relaxing scalp therapy for stress relief" },
      { name: "Reflexology", desc: "Pressure-point therapy for total wellbeing" },
      { name: "Spa Treatments", desc: "Luxurious body treatments for ultimate relaxation" },
    ],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState("hair");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Complete Beauty Solutions <br className="hidden sm:block" /> Under One Roof
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">From everyday beauty to special occasion glamour — we've got you covered</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat.id ? "bg-gradient-gold text-primary-foreground shadow-gold" : "bg-card text-foreground/70 hover:bg-card/80 border border-border"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {current.services.map((s) => (
              <div key={s.name} className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <a href={PHONE} className="text-sm text-primary font-medium group-hover:underline">
                  Book Now →
                </a>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;

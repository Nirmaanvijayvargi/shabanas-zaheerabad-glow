import { motion } from "framer-motion";
import salonInterior from "@/assets/salon-interior.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 bg-gradient-section">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden"
        >
          <img src={salonInterior} alt="Shabana's Beauty Salon interior" className="w-full h-[400px] object-cover" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Zaheerabad's Most Trusted Beauty Destination
          </h2>
          <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
            <p>
              At Shabana's Beauty Salon & Academy, we've built our reputation on trust, quality, and genuine care for every client who walks through our doors. Since 2023, we've been the salon that Zaheerabad's women, brides, and families rely on for professional beauty treatments that deliver real results.
            </p>
            <p>
              What started as a passion for beauty has grown into the city's most loved salon — backed by 40+ five-star reviews and countless happy clients. Our experienced team combines professional training from our own academy with a warm, personalized approach that makes everyone feel at home.
            </p>
            <p>
              Whether you're preparing for your wedding day, treating yourself to a relaxing spa session, or addressing specific hair and skin concerns, we're here to help you look and feel your absolute best.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-gold hover:opacity-90 transition-opacity mt-6"
          >
            Visit Us Today
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/shabanabeautyacademygmail.com6/";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-gradient-dark">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
      >
        Visit Us or Call to Book
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Call Card */}
        <motion.a
          href="tel:+917780467684"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-6 text-center hover:border-primary/40 transition-all group col-span-1 lg:col-span-1"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Call Us</h3>
          <p className="text-sm text-muted-foreground mb-2">Tap to call and book your appointment</p>
          <p className="text-primary font-semibold">+91 77804 67684</p>
        </motion.a>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-xl p-6 text-center"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Visit Us</h3>
          <p className="text-sm text-muted-foreground mb-2">Shabana's Beauty Salon & Academy</p>
          <p className="text-sm text-foreground/70">Zaheerabad, Telangana</p>
          <a href="https://maps.google.com/?q=Zaheerabad+Telangana" target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-medium mt-2 inline-block hover:underline">
            Get Directions →
          </a>
        </motion.div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-xl p-6 text-center"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Hours</h3>
          <p className="text-sm text-foreground/70">Monday – Saturday</p>
          <p className="text-sm text-foreground/90 font-medium">10:00 AM – 8:00 PM</p>
          <p className="text-sm text-foreground/70 mt-1">Sunday</p>
          <p className="text-sm text-foreground/90 font-medium">10:00 AM – 6:00 PM</p>
        </motion.div>

        {/* Instagram */}
        <motion.a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-xl p-6 text-center hover:border-primary/40 transition-all group"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Follow Us</h3>
          <p className="text-sm text-primary font-medium">@shabana_beauty_care</p>
        </motion.a>
      </div>
    </div>
  </section>
);

export default ContactSection;

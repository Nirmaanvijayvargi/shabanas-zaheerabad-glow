import { Phone } from "lucide-react";

const FloatingCallButton = () => (
  <a
    href="tel:+917780467684"
    className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-3 rounded-full font-semibold shadow-gold hover:opacity-90 transition-opacity md:hidden"
    aria-label="Call Now"
  >
    <Phone className="w-5 h-5" />
    Call Now
  </a>
);

export default FloatingCallButton;

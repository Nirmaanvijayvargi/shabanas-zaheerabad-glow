const INSTAGRAM_URL = "https://www.instagram.com/shabanabeautyacademygmail.com6/";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-secondary py-12 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <span className="font-serif text-xl font-bold text-gradient-gold">Shabana's</span>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">Beauty Salon & Academy</p>
          <p className="text-sm text-muted-foreground mt-3">Zaheerabad's Most Trusted Beauty Salon</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary mt-3 hover:opacity-80 transition-opacity">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif font-semibold text-foreground mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {footerLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif font-semibold text-foreground mb-3">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a href="tel:+917780467684" className="block hover:text-primary transition-colors">+91 77804 67684</a>
            <p>Zaheerabad, Telangana</p>
            <p>Mon–Sat: 10 AM – 8 PM</p>
            <p>Sun: 10 AM – 6 PM</p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="block text-primary hover:opacity-80 transition-opacity">
              @shabana_beauty_care
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Shabana's Beauty Salon & Academy. All rights reserved. | Zaheerabad, Telangana
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    diensten: [
      { name: 'Werkwijze', href: '/#werkwijze' },
      { name: 'Diensten', href: '/#diensten' },
      { name: 'Projecten', href: '/#projecten' },
    ],
    bedrijf: [
      { name: 'Tarieven', href: '/#tarieven' },
      { name: 'Reviews', href: '/#reviews' },
      { name: 'Contact', href: '/#contact' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'LinkedIn', href: '#' },
    { name: 'GitHub', icon: 'GitHub', href: '#' },
    { name: 'Twitter', icon: '𝕏', href: '#' },
  ];

  return (
    <footer className="bg-neutral-dark text-foreground border-t border-glow relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-primary">
                <span className="text-neutral-dark font-bold text-xl">J</span>
              </div>
              <span className="text-2xl font-bold gradient-text">JorSite</span>
            </div>
            <p className="text-neutral text-sm leading-relaxed">
              Professionele webdesign en branding oplossingen die uw bedrijf naar een hoger niveau tillen.
            </p>
          </div>

          {/* Navigatie Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Navigatie</h3>
            <ul className="space-y-2">
              {links.diensten.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Snel Menu */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Snel Menu</h3>
            <ul className="space-y-2">
              {links.bedrijf.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Volg Ons</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-lg flex items-center justify-center transition-all hover:scale-110 glow-primary"
                  aria-label={social.name}
                >
                  <span className="text-primary text-sm font-semibold">{social.icon}</span>
                </a>
              ))}
            </div>
            <div className="text-neutral text-sm space-y-1">
              <p>info@jorsite.nl</p>
              <p>📍 Nederland</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral text-sm">
              © {currentYear} JorSite. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-neutral hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral hover:text-white transition-colors">
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


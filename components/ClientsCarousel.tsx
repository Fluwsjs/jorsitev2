'use client';

export default function ClientsCarousel() {
  const clients = [
    { 
      name: 'TapGroep',
      industry: 'Tech & Innovatie',
      initials: 'TG'
    },
    { 
      name: 'NFB Salon',
      industry: 'Beauty & Wellness',
      initials: 'NF'
    },
    { 
      name: 'Dak- & Onderhoudsbedrijf de Koning',
      industry: 'Dakonderhoud',
      initials: 'DK'
    },
    { 
      name: 'Van Geenen Timmerbedrijf',
      industry: 'Timmerbedrijf',
      initials: 'VG'
    },
    { 
      name: 'Arnhem Schildersbedrijf',
      industry: 'Schilderwerk',
      initials: 'AS'
    },
  ];

  // Duplicate for seamless loop
  const allClients = [...clients, ...clients, ...clients];

  return (
    <section className="w-full overflow-hidden bg-background py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Vertrouwd door professionals
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Samen met <span className="gradient-text">5+ bedrijven</span>
          </h3>
          <p className="text-neutral text-lg">
            Die hun online aanwezigheid naar een hoger niveau tillen
          </p>
        </div>
      </div>
      
      <div className="relative">
        {/* Enhanced Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-scroll gap-8">
          {allClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-card-bg border border-neutral/10 rounded-3xl p-6 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Logo placeholder */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <span className="text-2xl font-bold gradient-text">{client.initials}</span>
                  </div>
                  <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                    <span className="text-xs font-semibold text-primary">{client.industry}</span>
                  </div>
                </div>
                
                {/* Company name */}
                <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {client.name}
                </h4>
                
                {/* Trust indicator */}
                <div className="flex items-center gap-2 text-neutral text-sm">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Geverifieerd klant</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom text */}
      <div className="container mx-auto px-6 relative z-10 mt-12">
        <p className="text-center text-neutral text-sm">
          Sluit je aan bij professionals die kiezen voor kwaliteit en resultaat
        </p>
      </div>
    </section>
  );
}


'use client';

import { useState } from 'react';
import { Navbar1 } from '@/components/ui/navbar-1';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import ClientsCarousel from '@/components/ClientsCarousel';
import PricingCard from '@/components/PricingCard';
import GoogleReviewsBadge from '@/components/GoogleReviewsBadge';

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Netlify Forms werkt met standaard form submission
      // De form wordt automatisch afgevangen en verwerkt door Netlify
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    {
      icon: '🎨',
      title: 'Custom Web Ontwerp',
      description: 'Wij garanderen een uniek ontwerp voor jouw website, nauwkeurig afgestemd op de huisstijl van jouw bedrijf.',
      features: [
        'Uniek design op maat',
        'Huisstijl integratie',
        'Moderne UI/UX',
        'Perfect pixel ontwerp',
      ],
    },
    {
      icon: '📱',
      title: 'Responsieve Design',
      description: 'Wij zorgen ervoor dat jouw website niet alleen op computers geweldig uitziet, maar ook op mobiele apparaten.',
      features: [
        'Mobile-first aanpak',
        'Tablet geoptimaliseerd',
        'Desktop perfect',
        'Cross-browser compatible',
      ],
    },
    {
      icon: '⚡',
      title: 'Snelheid Optimalisatie',
      description: 'Een snelle website is cruciaal voor de gebruikerservaring en SEO. Wij optimaliseren jouw website.',
      features: [
        'Page speed optimization',
        'Image compression',
        'Caching strategie',
        'CDN integratie',
      ],
    },
    {
      icon: '🔍',
      title: 'SEO Optimalisatie',
      description: 'Wij combineren een strak design met een sterke zoekmachinepositie voor maximale vindbaarheid.',
      features: [
        'On-page SEO',
        'Meta tags optimalisatie',
        'Schema markup',
        'Google indexering',
      ],
    },
    {
      icon: '📧',
      title: 'E-mail Ontwerp',
      description: 'Op maat gemaakte e-mailontwerp zorgen ervoor dat jouw campagnes visueel aantrekkelijk zijn.',
      features: [
        'Email templates',
        'Responsive emails',
        'Newsletter design',
        'Campaign setup',
      ],
    },
    {
      icon: '📱',
      title: 'Social Media Marketing',
      description: 'Wij helpen je een krachtige online aanwezigheid op te bouwen door gerichte strategieën.',
      features: [
        'Content strategie',
        'Social media beheer',
        'Advertentie campagnes',
        'Analytics & rapportage',
      ],
    },
  ];

  const workProcess = [
    {
      number: '01',
      title: 'Strategie & Planning',
      description:
        'We beginnen met het in kaart brengen van jouw doelen en de strategie die we gaan volgen. Van merkidentiteit tot doelgroepanalyse.',
    },
    {
      number: '02',
      title: 'Ontwikkeling',
      description:
        'Met een solide basis van strategie, bouwen we de website of webshop die jouw merk weerspiegelt. Responsief en geoptimaliseerd.',
    },
    {
      number: '03',
      title: 'Testen & Optimaliseren',
      description:
        'We testen de gebruiksvriendelijkheid en prestaties van je website grondig. Alle knelpunten worden opgelost.',
    },
    {
      number: '04',
      title: 'Lancering & Nazorg',
      description:
        'Na de lancering zorgen we voor de nodige ondersteuning. We monitoren de prestaties en geven advies.',
    },
  ];

  const featuredProjects = [
    {
      title: 'TapGroep',
      category: 'Webdesign',
      description: 'Innovatieve digitale NFC-oplossingen voor ondernemers met Tappo, Tap2Menu en Tap2Rate. Moderne website met focus op gebruikerservaring.',
      image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://www.tap-groep.nl',
      tags: ['Executive Pakket'],
      link: 'https://www.tap-groep.nl',
    },
    {
      title: 'NFB Salon',
      category: 'Webdesign',
      description: 'Stijlvolle website voor kapsalon met online afspraken maken, prijslijst en fotogalerij van kapsels.',
      image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://www.nfbsalon.nl',
      tags: ['Premium Pakket'],
      link: 'https://www.nfbsalon.nl',
    },
    {
      title: 'Dak- & Onderhoudsbedrijf de Koning',
      category: 'Webdesign',
      description: 'Complete website voor dakdekkerbedrijf met diensten, projecten, reviews en contactformulier. Moderne uitstraling met focus op conversie.',
      image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://www.dakonderhoudsbedrijfdekoning.nl',
      tags: ['Executive Pakket'],
      link: 'https://www.dakonderhoudsbedrijfdekoning.nl',
    },
    {
      title: 'Van Geenen Timmerbedrijf',
      category: 'Webdesign',
      description: 'Moderne website voor timmerbedrijf met portfolio, diensten overzicht en online offerte aanvraag systeem.',
      image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://www.vangeenentimmerbedrijf.nl',
      tags: ['Premium Pakket'],
      link: 'https://www.vangeenentimmerbedrijf.nl',
    },
    {
      title: 'Arnhem Schildersbedrijf',
      category: 'Webdesign',
      description: 'Professionele website voor schildersbedrijf met diensten, referenties en direct contact mogelijkheden.',
      image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://www.arnhem-schildersbedrijf.nl',
      tags: ['Basis Pakket'],
      link: 'https://www.arnhem-schildersbedrijf.nl',
    },
  ];

  const pricingPackages = [
    {
      name: 'Basis Website',
      price: 'Vanaf €799',
      description:
        'Perfect voor een startende onderneming die een professionele online aanwezigheid wil zonder hoge kosten.',
      features: [
        'Standaard ontwerp',
        'Gratis domeinregistratie',
        'Email ontwerp inbegrepen',
        'Optimale SEO-mogelijkheden',
        'SSL-certificaat',
        'Regelmatige updates en bugfixes',
        'Mobielvriendelijk ontwerp',
        '3 Subpagina\'s inbegrepen',
      ],
      badge: 'Basis',
    },
    {
      name: 'Premium Website',
      price: 'Vanaf €999',
      description:
        'Ideaal voor bedrijven die een professionele website willen die zowel esthetisch als functioneel is.',
      features: [
        'Premium ontwerp',
        'Gratis domeinregistratie',
        'Email ontwerp inbegrepen',
        'Optimale SEO-mogelijkheden',
        'SSL-certificaat',
        'Regelmatige updates en bugfixes',
        'Mobielvriendelijk ontwerp',
        'Diverse plug-ins inbegrepen',
        'Social media-integratie',
        '6 Subpagina\'s',
      ],
      popular: true,
      badge: 'Premium',
    },
    {
      name: 'Executive Website',
      price: 'Vanaf €1499',
      description:
        'Het ultieme pakket voor bedrijven die een leiderschapspositie willen innemen in hun industrie.',
      features: [
        'Executive ontwerp op maat',
        'Gratis domeinregistratie',
        'Email ontwerp inbegrepen',
        'Geavanceerde SEO-mogelijkheden',
        'SSL-certificaat',
        'Regelmatige updates en bugfixes',
        'Mobielvriendelijk ontwerp',
        'Diverse plug-ins en maatwerk',
        'Social media-integratie en strategie',
        'Onbeperkte subpagina\'s',
        'Strategisch webdesignadvies',
      ],
      badge: 'Executive',
    },
  ];

  const testimonials = [
    {
      name: 'P.S.E. Aartsen',
      company: 'Dak- & Onderhoudsbedrijf de Koning',
      text: 'Wij zijn uitstekend geholpen met de volledige renovatie van ons pannendak uit de jaren 30. Het dak is vakkundig vernieuwd, alles netjes achtergelaten en het resultaat is prachtig! Zeker aan te raden!',
      rating: 5,
    },
    {
      name: 'Rogier',
      company: 'Dak- & Onderhoudsbedrijf de Koning',
      text: 'Een echte aanrader, komt afspraken na en keurig en professioneel werk geleverd. De tijd tussen de prijsopgave en uitvoeren van de werkzaamheden is ook erg snel. Op een andere plek na de werkzaamheden kleine lekkage ontstaan en zeer snel en adequaat opgelost. Ga zo door!',
      rating: 5,
    },
    {
      name: 'Koos Landers',
      company: 'Dak- & Onderhoudsbedrijf de Koning',
      text: 'Zeer goed geholpen, kon heel kort nadat er een prijsafspraak was gemaakt. Keurig werk geleverd (dakgoot en nieuwe dakbedekking) en alles netjes weer achtergelaten. Ik kan het echt aanbevelen. Betrouwbaar en komt afspraken na.',
      rating: 5,
    },
  ];

  return (
    <>
      <Navbar1 />
      <GoogleReviewsBadge />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Websites die werken.{' '}
              <span className="gradient-text glow-text">Voor bedrijven die groeien.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-neutral mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              Moderne webdesign vanaf €799. Ik help ondernemers met een website die klanten binnenhaalt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button href="#contact" size="lg">
                Neem contact op
              </Button>
              <Button href="#portfolio" variant="outline" size="lg">
                Bekijk werk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <ClientsCarousel />

      {/* Werkwijze Section */}
      <section id="werkwijze" className="py-16 sm:py-24 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-light/50 via-background to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Onze Werkwijze</h2>
            <p className="text-lg sm:text-xl text-neutral max-w-2xl mx-auto px-4">
              Zo realiseren we websites en merken die écht voor jou werken
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {workProcess.map((step) => (
              <div
                key={step.number}
                className="bg-card-bg border-glow rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 text-6xl sm:text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="text-primary font-bold text-2xl sm:text-3xl mb-3 glow-text">{step.number}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-neutral leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-16 sm:py-24 bg-neutral-light relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Diensten</h2>
            <p className="text-lg sm:text-xl text-neutral max-w-2xl mx-auto px-4">
              Bij JorSite leveren we al onze diensten met de hoogste professionaliteit en passie!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-neutral-light to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4">
                Klaar voor een website die <span className="gradient-text">écht werkt</span>?
              </h2>
              <p className="text-lg sm:text-xl text-neutral max-w-2xl mx-auto leading-relaxed px-4">
                Samen bouwen we een website die past bij jouw bedrijf en klanten binnenhaalt.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="bg-card-bg rounded-2xl p-5 sm:p-6 border border-neutral/10 hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-neutral-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Snel online</h3>
                <p className="text-neutral text-sm">Binnen 2-4 weken een professionele website</p>
              </div>

              <div className="bg-card-bg rounded-2xl p-5 sm:p-6 border border-neutral/10 hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-neutral-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Op maat gemaakt</h3>
                <p className="text-neutral text-sm">Uniek design dat bij jouw merk past</p>
              </div>

              <div className="bg-card-bg rounded-2xl p-5 sm:p-6 border border-neutral/10 hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-neutral-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Altijd support</h3>
                <p className="text-neutral text-sm">Hulp en updates wanneer je ze nodig hebt</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button href="#contact" size="lg">
                Start je project
              </Button>
              <Button href="#tarieven" variant="outline" size="lg">
                Bekijk pakketten
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Projecten</h2>
            <p className="text-lg sm:text-xl text-neutral max-w-2xl mx-auto px-4">
              Websites die we met trots hebben opgeleverd, altijd met volledige tevredenheid van onze klanten!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button href="/portfolio" variant="outline" size="lg">
                Bekijk alle projecten
              </Button>
              <Button href="#contact" size="lg">
                Start jouw project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarieven" className="py-24 bg-neutral-light relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Tarieven</h2>
            <p className="text-lg sm:text-xl text-neutral max-w-2xl mx-auto">
              Kies het pakket dat het beste bij uw behoeften past
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8 max-w-7xl mx-auto mt-16 sm:mt-8">
            {pricingPackages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 sm:py-24 bg-background relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-neutral-light to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Reviews</h2>
            <p className="text-lg sm:text-xl text-neutral max-w-2xl mx-auto px-4">
              Elke review vertelt een uniek verhaal van tevredenheid
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="bg-card-bg border-glow rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-neutral mb-6 leading-relaxed text-sm sm:text-base">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-neutral">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-neutral-light relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact</h2>
            <p className="text-lg sm:text-xl text-neutral max-w-2xl mx-auto px-4">
              Heeft u vragen of wilt u meer weten? We staan voor u klaar!<br className="hidden sm:block" />
              Neem vandaag nog contact met ons op en ontdek hoe wij u kunnen helpen.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card-bg border-glow rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
              <div className="relative z-10">
                {status === 'success' && (
                  <div className="bg-primary/10 border border-primary text-primary px-4 py-3 rounded-lg mb-6 glow-primary">
                    ✅ Bedankt voor uw bericht! We nemen binnen 24 uur contact met u op.
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6">
                    ❌ Er ging iets mis. Probeer het opnieuw of mail ons direct.
                  </div>
                )}

                <form 
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div style={{ display: 'none' }}>
                    <input name="bot-field" />
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Voornaam
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border-color focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Achternaam
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border-color focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border-color focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border-color focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tarieven pakket
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-light dark:bg-neutral-dark border border-neutral/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                  >
                    <option value="">Maak een keuze...</option>
                    <option>Website Basis</option>
                    <option>Website Premium</option>
                    <option>Website Executive</option>
                    <option>Social Media Marketing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Specifieke vereisten...
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border-color focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground resize-none"
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full" onClick={undefined}>
                  {status === 'sending' ? 'Verzenden...' : 'Vrijblijvend offerte aanvragen'}
                </Button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

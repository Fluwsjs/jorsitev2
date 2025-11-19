'use client';

import { useState } from 'react';
import { Navbar1 } from '@/components/ui/navbar-1';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Alle');

  const categories = ['Alle', 'Webdesign', 'Branding', 'Maatwerk'];

  const projects = [
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

  const filteredProjects =
    activeFilter === 'Alle'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <Navbar1 />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-neutral-light via-white to-primary/5 dark:from-neutral-dark dark:via-background dark:to-primary/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Ons <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral leading-relaxed px-4">
              Een selectie van onze meest recente projecten. Van webdesign tot branding en maatwerk oplossingen.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sm:py-12 bg-white dark:bg-background border-b border-neutral/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium transition-all text-sm sm:text-base ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'bg-neutral-light dark:bg-neutral-dark text-neutral hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 sm:py-20">
              <p className="text-neutral text-base sm:text-lg">
                Geen projecten gevonden voor deze categorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold gradient-text glow-text mb-2">5+</div>
              <div className="text-neutral text-sm sm:text-base">Projecten Afgerond</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold gradient-text glow-text mb-2">5+</div>
              <div className="text-neutral text-sm sm:text-base">Tevreden Klanten</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold gradient-text glow-text mb-2">2+</div>
              <div className="text-neutral text-sm sm:text-base">Jaar Ervaring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold gradient-text glow-text mb-2">100%</div>
              <div className="text-neutral text-sm sm:text-base">Tevredenheid</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Wat Klanten Zeggen
            </h2>
            <p className="text-lg sm:text-xl text-neutral max-w-2xl mx-auto px-4">
              Lees wat onze klanten over hun ervaring met JorSite vertellen
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: 'P.S.E. Aartsen',
                company: 'Dak- & Onderhoudsbedrijf de Koning',
                text: 'Wij zijn uitstekend geholpen met de volledige renovatie van ons pannendak uit de jaren 30. Het dak is vakkundig vernieuwd, alles netjes achtergelaten en het resultaat is prachtig! Zeker aan te raden!',
                rating: 5,
              },
              {
                name: 'Rogier',
                company: 'Dak- & Onderhoudsbedrijf de Koning',
                text: 'Een echte aanrader, komt afspraken na en keurig en professioneel werk geleverd. De tijd tussen de prijsopgave en uitvoeren van de werkzaamheden is ook erg snel.',
                rating: 5,
              },
              {
                name: 'Koos Landers',
                company: 'Dak- & Onderhoudsbedrijf de Koning',
                text: 'Zeer goed geholpen, kon heel kort nadat er een prijsafspraak was gemaakt. Keurig werk geleverd en alles netjes weer achtergelaten. Ik kan het echt aanbevelen.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-card-bg border-glow rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-neutral mb-6 leading-relaxed text-sm sm:text-base">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/20 to-accent/20 border-y border-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-foreground">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text glow-text">
              Wilt u ook zo'n resultaat?
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-neutral px-4">
              Laten we samen bouwen aan uw digitale succes. Neem contact op voor een vrijblijvend gesprek.
            </p>
            <button
              onClick={() => (window.location.href = '/#contact')}
              className="bg-gradient-to-r from-primary to-accent text-neutral-dark px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-base sm:text-lg glow-primary hover:scale-105 transition-all"
            >
              Start Uw Project
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}


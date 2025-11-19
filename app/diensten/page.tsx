import { Navbar1 } from '@/components/ui/navbar-1';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';

export const metadata = {
  title: 'Onze Diensten - JorSite',
  description: 'Ontdek onze webdesign, branding en maatwerk oplossingen. Professionele digitale diensten voor uw bedrijf.',
};

export default function DienstenPage() {
  const services = [
    {
      id: 'webdesign',
      icon: '🎨',
      title: 'Webdesign',
      description: 'Moderne, responsieve websites die converteren en een blijvende indruk maken op uw bezoekers.',
      features: [
        'Responsive design voor alle apparaten',
        'SEO geoptimaliseerd',
        'Snelle laadtijden',
        'Moderne UI/UX principes',
      ],
      details: [
        'Custom website design op maat',
        'Mobiel-first ontwikkeling',
        'Toegankelijkheid (WCAG compliant)',
        'Content Management Systeem integratie',
        'E-commerce oplossingen',
        'Onderhoud en support',
      ],
    },
    {
      id: 'branding',
      icon: '✨',
      title: 'Branding',
      description: 'Een sterke merkidentiteit die uw bedrijf onderscheidt en vertrouwen wekt bij uw doelgroep.',
      features: [
        'Logo ontwerp',
        'Huisstijl ontwikkeling',
        'Brand guidelines',
        'Visuele identiteit',
      ],
      details: [
        'Merkstrategie en positionering',
        'Logo en visuele identiteit',
        'Kleurenpalet en typografie',
        'Brand guidelines document',
        'Marketing materiaal ontwerp',
        'Social media templates',
      ],
    },
    {
      id: 'maatwerk',
      icon: '⚙️',
      title: 'Maatwerk Oplossingen',
      description: 'Op maat gemaakte webapplicaties en tools die perfect aansluiten bij uw specifieke behoeften.',
      features: [
        'Custom web applicaties',
        'API integraties',
        'Database ontwerp',
        'Onderhoud & support',
      ],
      details: [
        'Complexe webapplicaties',
        'Dashboard en admin panels',
        'API ontwikkeling en integraties',
        'Database architectuur',
        'Cloud hosting setup',
        'Continue support en updates',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Kennismaking',
      description: 'We beginnen met een vrijblijvend gesprek om uw wensen, doelen en budget te bespreken.',
    },
    {
      step: '02',
      title: 'Strategie',
      description: 'We ontwikkelen een strategie en maken een gedetailleerd plan voor uw project.',
    },
    {
      step: '03',
      title: 'Ontwerp',
      description: 'We creëren moderne designs die perfect aansluiten bij uw merkidentiteit.',
    },
    {
      step: '04',
      title: 'Ontwikkeling',
      description: 'We bouwen uw website of applicatie met de nieuwste technologieën en best practices.',
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Uitgebreid testen op alle apparaten en browsers voor een perfecte ervaring.',
    },
    {
      step: '06',
      title: 'Lancering',
      description: 'We lanceren uw project en bieden continue ondersteuning en optimalisatie.',
    },
  ];

  return (
    <>
      <Navbar1 />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-neutral-light via-white to-primary/5 dark:from-neutral-dark dark:via-background dark:to-primary/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Onze <span className="gradient-text">Diensten</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral leading-relaxed px-4">
              Van webdesign tot branding en maatwerk oplossingen. We bieden alles wat u nodig heeft voor een succesvolle online aanwezigheid.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 sm:py-20 bg-neutral-light dark:bg-neutral-dark">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-16 sm:space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 sm:gap-12 items-center scroll-mt-20`}
              >
                <div className="flex-1 w-full">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-4xl sm:text-5xl">{service.icon}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-base sm:text-lg text-neutral mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button href="/contact" size="lg">
                    Vraag Offerte Aan
                  </Button>
                </div>
                <div className="flex-1 w-full bg-white dark:bg-background rounded-2xl p-6 sm:p-8 shadow-xl">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">
                    Wat is inbegrepen:
                  </h3>
                  <ul className="space-y-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-accent mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-neutral text-sm sm:text-base">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ons Proces</h2>
            <p className="text-lg sm:text-xl text-neutral max-w-2xl mx-auto px-4">
              Van eerste contact tot succesvolle lancering. Dit is hoe we werken.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {process.map((item) => (
              <div
                key={item.step}
                className="bg-neutral-light dark:bg-neutral-dark rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="absolute top-0 right-0 text-6xl sm:text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {item.step}
                </div>
                <div className="relative">
                  <div className="text-primary font-bold text-xl sm:text-2xl mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-neutral leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Laten we uw project bespreken
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-90 px-4">
              Neem contact op voor een vrijblijvend gesprek over uw wensen en mogelijkheden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="!border-white !text-white hover:!bg-white hover:!text-primary"
              >
                Neem Contact Op
              </Button>
              <Button
                href="/portfolio"
                variant="outline"
                size="lg"
                className="!border-white !text-white hover:!bg-white hover:!text-primary"
              >
                Bekijk Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}


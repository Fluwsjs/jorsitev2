'use client';

import { useState } from 'react';
import { Navbar1 } from '@/components/ui/navbar-1';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'Webdesign',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: 'Webdesign',
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'info@jorsite.nl',
      link: 'mailto:info@jorsite.nl',
    },
    {
      icon: '📱',
      title: 'Telefoon',
      value: '+31 6 12345678',
      link: 'tel:+31612345678',
    },
    {
      icon: '📍',
      title: 'Locatie',
      value: 'Amsterdam, Nederland',
      link: '#',
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
              Neem <span className="gradient-text">Contact</span> Op
            </h1>
            <p className="text-lg sm:text-xl text-neutral leading-relaxed px-4">
              Heeft u een project in gedachten? Laten we samen kijken hoe we uw digitale ambities waar kunnen maken.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 sm:py-12 bg-white dark:bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="bg-neutral-light dark:bg-neutral-dark rounded-2xl p-5 sm:p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                  {info.title}
                </div>
                <div className="text-neutral text-sm sm:text-base">{info.value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-neutral-light dark:bg-neutral-dark rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
                Stuur een Bericht
              </h2>

              {status === 'success' && (
                <div className="bg-accent/10 border border-accent text-accent px-4 py-3 rounded-lg mb-6">
                  Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-background border border-neutral/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    placeholder="Uw naam"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-background border border-neutral/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    placeholder="uw@email.nl"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-background border border-neutral/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    placeholder="+31 6 12345678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Dienst
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-background border border-neutral/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                  >
                    <option>Webdesign</option>
                    <option>Branding</option>
                    <option>Maatwerk Oplossingen</option>
                    <option>Overig</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Onderwerp *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-background border border-neutral/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    placeholder="Waar kan ik u mee helpen?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-background border border-neutral/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground resize-none"
                    placeholder="Vertel ons over uw project..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  onClick={undefined}
                >
                  {status === 'sending' ? 'Verzenden...' : 'Verstuur Bericht'}
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
                  Waarom JorSite?
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Persoonlijke Aanpak',
                      description:
                        'Elk project is uniek. We luisteren naar uw wensen en denken actief mee.',
                    },
                    {
                      title: 'Transparante Communicatie',
                      description:
                        'Heldere updates en open communicatie gedurende het gehele proces.',
                    },
                    {
                      title: 'Snelle Levering',
                      description:
                        'We werken efficiënt zonder concessies te doen aan kwaliteit.',
                    },
                    {
                      title: 'Continue Support',
                      description:
                        'Ook na lancering staan we voor u klaar met onderhoud en updates.',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-neutral-light dark:hover:bg-neutral-dark transition-all"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
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
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                          {item.title}
                        </h3>
                        <p className="text-neutral text-xs sm:text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Snel Antwoord Nodig?</h3>
                <p className="mb-6 opacity-90 text-sm sm:text-base">
                  Bel ons direct voor een vrijblijvend gesprek over uw project.
                </p>
                <a
                  href="tel:+31612345678"
                  className="inline-flex items-center space-x-2 bg-white text-primary px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:shadow-lg transition-all text-sm sm:text-base"
                >
                  <span>📱</span>
                  <span>+31 6 12345678</span>
                </a>
              </div>

              <div className="bg-neutral-light dark:bg-neutral-dark rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground">
                  Openingstijden
                </h3>
                <div className="space-y-2 text-neutral text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Maandag - Vrijdag</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zaterdag</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zondag</span>
                    <span className="font-medium">Gesloten</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-neutral-light dark:bg-neutral-dark">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center text-foreground">
              Veelgestelde Vragen
            </h2>

            <div className="space-y-5 sm:space-y-6">
              {[
                {
                  question: 'Wat zijn de kosten voor een website?',
                  answer:
                    'De kosten variëren per project afhankelijk van de complexiteit en functionaliteiten. Een eenvoudige website start vanaf €1.500, terwijl uitgebreidere projecten €5.000+ kunnen zijn. Neem contact op voor een op maat gemaakte offerte.',
                },
                {
                  question: 'Hoe lang duurt het om een website te bouwen?',
                  answer:
                    'Een standaard website duurt ongeveer 4-6 weken van start tot lancering. Complexere projecten kunnen 8-12 weken duren. We houden u gedurende het proces op de hoogte van de voortgang.',
                },
                {
                  question: 'Kan ik mijn website zelf bijwerken?',
                  answer:
                    'Ja! We bouwen websites met gebruiksvriendelijke Content Management Systemen. We verzorgen ook training zodat u zelfstandig content kunt toevoegen en wijzigen.',
                },
                {
                  question: 'Bieden jullie ook onderhoud en support?',
                  answer:
                    'Absoluut! We bieden onderhoudscontracten voor hosting, updates, beveiliging en technische support. Zo blijft uw website altijd actueel en veilig.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-background rounded-xl p-5 sm:p-6 shadow-lg"
                >
                  <h3 className="text-base sm:text-lg font-bold mb-3 text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-neutral leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}


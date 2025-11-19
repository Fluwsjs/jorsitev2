import Button from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-card-bg rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 group ${
        popular ? 'border-2 border-primary glow-primary' : 'border-glow'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
      <div className="relative z-10">
        {popular && (
          <div className="absolute -top-12 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20 w-full sm:w-auto px-4 sm:px-0">
            <span className="bg-gradient-to-r from-primary to-accent text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold glow-primary block text-center whitespace-nowrap">
              Meest gekozen
            </span>
          </div>
        )}
        
        {badge && (
          <div className="inline-block mb-4 px-4 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold">
            {badge}
          </div>
        )}

        <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{name}</h3>
        
        <div className="mb-4">
          <span className="text-4xl font-bold gradient-text glow-text">{price}</span>
        </div>

        <p className="text-neutral mb-6 leading-relaxed">{description}</p>

        <div className="mb-8">
          <h4 className="font-semibold text-foreground mb-4">Inbegrepen:</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
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
                <span className="text-neutral text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <Button href="/#contact" className="w-full">
            Vraag offerte aan
          </Button>
        </div>
      </div>
    </div>
  );
}


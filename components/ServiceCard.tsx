import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group bg-card-bg rounded-2xl p-8 border-glow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform glow-primary">
          <div className="text-primary text-3xl">{icon}</div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-neutral mb-6 leading-relaxed">{description}</p>
        
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
        
      <div className="mt-6 pt-6 border-t border-neutral/10">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium group"
        >
          Meer informatie
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      </div>
    </div>
  );
}


interface ProjectPlaceholderProps {
  category: string;
  className?: string;
}

export default function ProjectPlaceholder({
  category,
  className = '',
}: ProjectPlaceholderProps) {
  const colors = {
    Webdesign: { bg: '#6366f1', text: '#ffffff' },
    Branding: { bg: '#ec4899', text: '#ffffff' },
    Maatwerk: { bg: '#14b8a6', text: '#ffffff' },
  };

  const color = colors[category as keyof typeof colors] || colors.Webdesign;

  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`grad-${category}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: color.bg, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: color.bg, stopOpacity: 0.7 }} />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#grad-${category})`} />
      <circle cx="200" cy="150" r="80" fill="rgba(255,255,255,0.1)" />
      <circle cx="650" cy="450" r="120" fill="rgba(255,255,255,0.1)" />
      <rect x="250" y="200" width="300" height="200" rx="10" fill="rgba(255,255,255,0.2)" />
      <text
        x="400"
        y="320"
        fontFamily="system-ui, sans-serif"
        fontSize="48"
        fontWeight="bold"
        fill={color.text}
        textAnchor="middle"
      >
        {category}
      </text>
    </svg>
  );
}


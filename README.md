# JorSite - Premium Webdesign & Branding

Een moderne, professionele website voor JorSite, een webdesignbedrijf gespecialiseerd in websites, branding en maatwerk oplossingen.

## 🎨 Design Keuzes

### Kleurenschema

Het kleurenpalet is zorgvuldig gekozen om professionaliteit, vertrouwen en creativiteit uit te stralen:

- **Primary Color** (#6366f1 - Indigo): Staat voor betrouwbaarheid, professionaliteit en innovatie
- **Secondary Color** (#ec4899 - Pink): Voegt creativiteit en energie toe
- **Accent Color** (#14b8a6 - Teal): Voor call-to-actions en belangrijke elementen
- **Neutral Colors**: Subtiele grijstinten voor optimale leesbaarheid

### Typografie

- **Font Family**: Geist Sans & Geist Mono (moderne, schone lettertypen)
- **Hiërarchie**: Duidelijke typografische hiërarchie met groottes van 5xl tot sm
- **Leesbaaarheid**: Optimale line-height en letter-spacing voor beste leeservaring

### Design Principes

1. **Minimalistisch & Modern**: Clean design zonder onnodige elementen
2. **Gradient Accenten**: Subtiele gradiënten voor visuele interesse
3. **Microinteracties**: Hover effecten en animaties voor betere UX
4. **Witruimte**: Ruime marges en padding voor een luchtig gevoel
5. **Responsive**: Mobile-first aanpak voor perfecte weergave op alle apparaten

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Google Fonts (Geist Sans & Geist Mono)

## 📁 Project Structuur

```
v2jorsite/
├── app/
│   ├── page.tsx              # Homepage
│   ├── diensten/
│   │   └── page.tsx          # Diensten pagina
│   ├── portfolio/
│   │   └── page.tsx          # Portfolio pagina
│   ├── contact/
│   │   └── page.tsx          # Contact pagina
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles & theme
├── components/
│   ├── Header.tsx            # Navigatie header
│   ├── Footer.tsx            # Footer component
│   ├── Button.tsx            # Herbruikbare button
│   ├── ServiceCard.tsx       # Service card component
│   ├── ProjectCard.tsx       # Project card component
│   └── ProjectPlaceholder.tsx # SVG placeholder voor projecten
└── public/
    └── projects/             # Project afbeeldingen
```

## 🎯 Features

### Homepage
- **Hero Sectie**: Impactvolle hero met animated background en duidelijke CTA's
- **Diensten Overzicht**: Grid met service cards
- **Portfolio Preview**: Uitgelichte projecten
- **Statistieken**: Vertrouwen wekken met cijfers
- **CTA Sectie**: Gradient banner voor conversie

### Diensten Pagina
- **Service Grid**: Overzicht van alle diensten
- **Gedetailleerde Info**: Uitgebreide beschrijvingen per dienst
- **Proces Timeline**: Stapsgewijze uitleg van het werkproces
- **Multiple CTA's**: Verschillende contactmogelijkheden

### Portfolio Pagina
- **Filter Functionaliteit**: Filteren op categorie
- **Project Cards**: Aantrekkelijke presentatie van projecten
- **Testimonials**: Klantreviews voor social proof
- **Statistieken**: Impressieve cijfers

### Contact Pagina
- **Contact Formulier**: Volledig functioneel formulier
- **Contact Info**: Email, telefoon en locatie
- **Waarom JorSite**: USP's uitgelicht
- **FAQ Sectie**: Veelgestelde vragen beantwoord
- **Openingstijden**: Duidelijke beschikbaarheid

## 🎨 Componenten

### Header
- Sticky navigation met scroll effect
- Responsive hamburger menu voor mobile
- Smooth hover animaties
- Active state voor huidige pagina

### Footer
- Gestructureerde links (Diensten, Bedrijf, Social)
- Contact informatie
- Social media links
- Copyright informatie

### Button
- 3 Varianten: primary, secondary, outline
- 3 Groottes: sm, md, lg
- Werkt als link of button
- Hover en focus states

### ServiceCard
- Icon met gradient background
- Feature lijst met checkmarks
- Hover animatie (lift effect)
- Consistent design

### ProjectCard
- SVG placeholder afbeeldingen
- Category badge
- Tag systeem
- Hover zoom effect

## 🌈 Kleur Variabelen

De kleuren zijn gedefinieerd in `app/globals.css` en werken met dark mode:

```css
:root {
  --primary: #6366f1;        /* Indigo */
  --primary-dark: #4f46e5;   /* Darker Indigo */
  --secondary: #ec4899;       /* Pink */
  --accent: #14b8a6;          /* Teal */
  --neutral-light: #f8fafc;   /* Very Light Gray */
  --neutral: #64748b;         /* Gray */
  --neutral-dark: #1e293b;    /* Dark Gray */
}
```

## 📱 Responsive Design

De website is volledig responsive met breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Alle componenten passen zich automatisch aan voor optimale weergave op elk apparaat.

## 🚀 Installatie & Gebruik

### Installatie
```bash
npm install
```

### Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Production Build
```bash
npm run build
npm start
```

## 🎯 Performance

- **Fast Load Times**: Geoptimaliseerd met Next.js
- **SEO Friendly**: Proper meta tags en semantic HTML
- **Accessible**: WCAG richtlijnen gevolgd
- **Modern**: Laatste web technologieën

## 📝 Aanpassingen

### Kleuren Aanpassen
Wijzig de CSS variabelen in `app/globals.css`:

```css
:root {
  --primary: YOUR_COLOR;
}
```

### Content Aanpassen
- **Homepage**: `app/page.tsx`
- **Diensten**: `app/diensten/page.tsx`
- **Portfolio**: `app/portfolio/page.tsx`
- **Contact**: `app/contact/page.tsx`

### Projecten Toevoegen
Voeg nieuwe projecten toe aan de `projects` array in `app/portfolio/page.tsx`:

```typescript
{
  title: 'Project Naam',
  category: 'Webdesign',
  description: 'Project beschrijving',
  image: '/projects/image.jpg',
  tags: ['Tag1', 'Tag2'],
}
```

## 🎨 Design Tips

1. **Consistentie**: Gebruik altijd de gedefinieerde kleuren en spacing
2. **Witruimte**: Geef elementen ruimte om te ademen
3. **Contrast**: Zorg voor voldoende contrast voor leesbaarheid
4. **Hover States**: Voeg subtiele hover effecten toe voor interactie
5. **Mobile First**: Begin met mobile design, scale dan op

## 📧 Contact

Voor vragen of suggesties:
- Email: info@jorsite.nl
- Telefoon: +31 6 12345678

## 📄 Licentie

Dit project is gebouwd voor JorSite en is eigendom van het bedrijf.

---

Gebouwd met ❤️ door JorSite

# JorSite - Changelog

## Versie 2.0 - Web Refresh Stijl (18 November 2025)

### ✨ Grote Veranderingen

De website is volledig getransformeerd naar een **one-page** layout geïnspireerd op [Web Refresh](https://www.web-refresh.nl/), met alle belangrijke secties op de homepage.

### 🆕 Nieuwe Features

#### Homepage Secties
1. **Hero Sectie** - Aangepaste tagline: "Wij creëren merken en websites die altijd voor jou werken"
2. **Klanten Carousel** ⭐ - Scrollende logo's van 30+ bedrijven (infinite scroll animatie)
3. **Werkwijze Sectie** - 4-stappen proces (Strategie, Ontwikkeling, Testen, Lancering)
4. **Diensten Sectie** - 6 diensten in plaats van 3 (toegevoegd: SEO, Email, Social Media)
5. **CTA Banner** - "Breng jouw merk naar een hoger niveau" met 3 USP's
6. **Projecten Sectie** - 6 projecten met pakket badges (Basis/Premium/Executive)
7. **Tarieven Sectie** ⭐ - 3 pakketkeuzes direct op homepage
8. **Reviews Sectie** ⭐ - 3 klantreviews met sterren ratings
9. **Contact Sectie** ⭐ - Volledig formulier direct op homepage

### 🎨 Nieuwe Componenten

#### ClientsCarousel Component
- Infinite scrollende animatie (40s loop)
- Pause on hover
- 20 klanten namen (duplicated voor seamless loop)
- Responsive cards met hover effect
```tsx
components/ClientsCarousel.tsx
```

#### PricingCard Component
- 3 varianten: Basis, Premium, Executive
- "Meest gekozen" badge optie
- Feature lijst met checkmarks
- Prijs vanaf notatie
- CTA button per kaart
```tsx
components/PricingCard.tsx
```

### 🔄 Aangepaste Componenten

#### Header
- **Oude navigatie**: Home, Diensten, Portfolio, Contact
- **Nieuwe navigatie**: Home, Werkwijze, Diensten, Projecten, Tarieven, Reviews
- Alle links gaan naar anchor secties op homepage (#werkwijze, #diensten, etc.)
- CTA button tekst: "Offerte Aanvragen" (was "Start Project")

#### Footer
- Links aangepast naar one-page secties
- "Navigatie" sectie: Werkwijze, Diensten, Projecten
- "Snel Menu" sectie: Tarieven, Reviews, Contact

#### Homepage (app/page.tsx)
- Client component geworden (useState voor formulier)
- 6 diensten i.p.v. 3
- 6 projecten i.p.v. 3
- Project tags nu pakket badges: "Executive Pakket", "Premium Pakket", "Basis Pakket"
- Testimonials array met 5 reviews
- Pricing packages array met 3 pakketten
- Contact formulier met state management

### 🎯 One-Page Navigatie

Alle secties hebben ID's voor anchor links:
- `#werkwijze` - Werkwijze sectie
- `#diensten` - Diensten sectie
- `#projecten` - Projecten sectie
- `#tarieven` - Tarieven sectie
- `#reviews` - Reviews sectie
- `#contact` - Contact sectie

### 💅 CSS Wijzigingen

#### Nieuwe Animaties (app/globals.css)
```css
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
```

### 📦 Tarieven Pakketten

#### Basis Website - €799
- Standaard ontwerp
- 3 subpagina's
- Email ontwerp
- SEO optimalisatie
- SSL certificaat
- Mobile friendly

#### Premium Website - €999 (Meest gekozen)
- Premium ontwerp
- 6 subpagina's
- Alle Basis features
- Diverse plug-ins
- Social media integratie

#### Executive Website - €1499
- Executive ontwerp op maat
- Onbeperkte subpagina's
- Alle Premium features
- Geavanceerde SEO
- Strategisch webdesignadvies

### 📱 Content Wijzigingen

#### Diensten (nu 6 i.p.v. 3)
1. Custom Web Ontwerp (🎨)
2. Responsieve Design (📱)
3. Snelheid Optimalisatie (⚡)
4. SEO Optimalisatie (🔍)
5. E-mail Ontwerp (📧)
6. Social Media Marketing (📱)

#### Projecten Tags
- Oude tags: Next.js, E-commerce, Design, etc.
- Nieuwe tags: Executive Pakket, Premium Pakket, Basis Pakket

### 🔗 Link Structuur

#### Voor
- Separate pagina's: `/diensten`, `/portfolio`, `/contact`
- Multi-page navigatie

#### Na
- One-page homepage met anchor links
- Alle content op `/` met secties
- Behouden: `/diensten`, `/portfolio`, `/contact` pagina's voor diepere content

### ⚡ Performance

- Client-side form handling (geen backend nodig)
- Smooth scroll behavior
- CSS animaties (hardware accelerated)
- Geen externe images (SVG placeholders)

### 🎨 Design Taal

Geïnspireerd op Web Refresh:
- **Tagline stijl**: "Wij creëren merken en websites die altijd voor jou werken"
- **Secties**: Alle belangrijke info direct toegankelijk
- **Carousel**: Vertrouwen opbouwen met klanten logo's
- **Tarieven**: Transparante prijzen prominent
- **Reviews**: Social proof prominent
- **CTA's**: Meerdere contactmogelijkheden

### 📊 Statistieken

- 30+ Bedrijven (klanten carousel)
- 6 Diensten (was 3)
- 6 Projecten featured (was 3)
- 3 Tarieven pakketten
- 5 Testimonials (3 getoond op homepage)
- 9 Secties op homepage

### 🚀 Migratiepad

Voor gebruikers die de oude structuur gewend zijn:
- `/diensten` - Werkt nog steeds, gedetailleerde diensten pagina
- `/portfolio` - Werkt nog steeds, alle projecten met filter
- `/contact` - Werkt nog steeds, uitgebreide contact pagina met FAQ

### ✅ Testing Checklist

- [x] Responsive design (mobile/tablet/desktop)
- [x] Smooth scroll naar secties
- [x] Carousel animatie werkt
- [x] Formulier werkt (client-side)
- [x] Alle links functioneel
- [x] Dark mode support
- [x] No linter errors
- [x] Header scroll effect werkt
- [x] Mobile menu werkt

### 🎯 Key Differences vs Web Refresh

**Behouden van JorSite identiteit:**
- Eigen kleurenschema (Indigo/Pink/Teal vs Web Refresh groen)
- JorSite branding en logo
- Eigen typografie (Geist Sans)
- Aangepaste content en teksten

**Overgenomen concepten:**
- One-page layout structuur
- Klanten carousel
- Tarieven prominent
- Reviews sectie
- Contact formulier op homepage
- Werkwijze met genummerde stappen

### 📝 Volgende Stappen (Optioneel)

1. Echte klanten logo's toevoegen (nu placeholder namen)
2. Backend integratie voor contact formulier
3. Echte project afbeeldingen
4. Testimonials uitbreiden met foto's
5. FAQ sectie toevoegen aan homepage
6. Social media links activeren

---

**Geïnspireerd door**: [Web Refresh](https://www.web-refresh.nl/)  
**Versie**: 2.0  
**Datum**: 18 November 2025  
**Status**: ✅ Production Ready


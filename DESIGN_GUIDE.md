# JorSite Design Guide

Een complete gids voor het design systeem van JorSite.

## 🎨 Kleurenpalet

### Primaire Kleuren

#### Indigo (Primary)
- **Hex**: #6366f1
- **RGB**: rgb(99, 102, 241)
- **Gebruik**: Hoofdkleur voor CTA's, links, en belangrijke UI elementen
- **Betekenis**: Professionaliteit, betrouwbaarheid, innovatie

#### Pink (Secondary)
- **Hex**: #ec4899
- **RGB**: rgb(236, 72, 153)
- **Gebruik**: Accent kleur, gradiënten, highlights
- **Betekenis**: Creativiteit, energie, moderniteit

#### Teal (Accent)
- **Hex**: #14b8a6
- **RGB**: rgb(20, 184, 166)
- **Gebruik**: Succes states, checkmarks, positieve acties
- **Betekenis**: Groei, vernieuwing, actie

### Neutrale Kleuren

#### Foreground
- **Light Mode**: #0f172a (Slate 900)
- **Dark Mode**: #f1f5f9 (Slate 100)
- **Gebruik**: Hoofdtekst

#### Background
- **Light Mode**: #ffffff (Wit)
- **Dark Mode**: #0f172a (Slate 900)
- **Gebruik**: Pagina achtergrond

#### Neutral Light
- **Light Mode**: #f8fafc (Slate 50)
- **Dark Mode**: #1e293b (Slate 800)
- **Gebruik**: Cards, sections, achtergronden

#### Neutral
- **Hex**: #64748b (Slate 500)
- **Gebruik**: Secundaire tekst, placeholders

#### Neutral Dark
- **Light Mode**: #1e293b (Slate 800)
- **Dark Mode**: #cbd5e1 (Slate 300)
- **Gebruik**: Footer, dark sections

## 📐 Typografie

### Font Stack

```css
font-family: var(--font-geist-sans), system-ui, sans-serif;
```

### Typografische Schaal

| Gebruik | Class | Font Size | Line Height |
|---------|-------|-----------|-------------|
| Hero Heading | text-7xl | 4.5rem (72px) | 1.1 |
| Page Title | text-6xl | 3.75rem (60px) | 1.1 |
| Section Title | text-5xl | 3rem (48px) | 1.2 |
| Heading | text-4xl | 2.25rem (36px) | 1.3 |
| Subheading | text-3xl | 1.875rem (30px) | 1.3 |
| Large Text | text-2xl | 1.5rem (24px) | 1.4 |
| Lead Text | text-xl | 1.25rem (20px) | 1.5 |
| Body | text-base | 1rem (16px) | 1.6 |
| Small | text-sm | 0.875rem (14px) | 1.5 |

### Font Weights

- **Bold** (700): Headings, belangrijke tekst
- **Semibold** (600): Subheadings, labels
- **Medium** (500): Buttons, navigatie
- **Regular** (400): Body text

## 🎯 Spacing System

Consistent gebruik van Tailwind's spacing schaal (4px base unit):

| Size | Value | Gebruik |
|------|-------|---------|
| 2 | 8px | Kleine gaps, padding in badges |
| 3 | 12px | Icon spacing |
| 4 | 16px | Standard gap tussen elementen |
| 6 | 24px | Card padding, margin tussen secties |
| 8 | 32px | Grid gaps, grotere padding |
| 12 | 48px | Section spacing |
| 16 | 64px | Large section gaps |
| 20 | 80px | Section padding (py-20) |
| 24 | 96px | Extra large gaps |

## 🔘 Componenten

### Buttons

#### Primary Button
```tsx
className="bg-gradient-to-r from-primary to-secondary text-white 
           px-6 py-2.5 rounded-full font-medium 
           hover:shadow-lg hover:scale-105 transition-all"
```

**Gebruik**: Hoofdacties, belangrijkste CTA's

#### Secondary Button
```tsx
className="bg-accent text-white px-6 py-2.5 rounded-full 
           font-medium hover:bg-accent/90 hover:shadow-lg"
```

**Gebruik**: Secundaire acties

#### Outline Button
```tsx
className="border-2 border-primary text-primary px-6 py-2.5 
           rounded-full font-medium hover:bg-primary hover:text-white"
```

**Gebruik**: Tertiaire acties, minder nadruk

### Cards

#### Service Card
- **Background**: Wit (dark: neutral-dark)
- **Padding**: 8 (32px)
- **Border Radius**: 2xl (16px)
- **Shadow**: lg, hover: 2xl
- **Hover Effect**: -translate-y-2 (lift effect)

#### Project Card
- **Image Height**: h-64 (256px)
- **Overlay**: gradient-to-t from-black/60
- **Border Radius**: 2xl
- **Hover**: Scale image 110%, lift card

### Forms

#### Input Fields
```tsx
className="w-full px-4 py-3 rounded-lg 
           bg-white dark:bg-background 
           border border-neutral/20 
           focus:border-primary focus:ring-2 focus:ring-primary/20"
```

#### Labels
```tsx
className="block text-sm font-medium text-foreground mb-2"
```

## 🎭 Visual Hierarchy

### Level 1: Hero/Page Titles
- **Size**: text-6xl of text-7xl
- **Weight**: Bold (700)
- **Color**: Foreground met gradient accent
- **Margin Bottom**: mb-6

### Level 2: Section Titles
- **Size**: text-4xl of text-5xl
- **Weight**: Bold (700)
- **Color**: Foreground
- **Margin Bottom**: mb-4

### Level 3: Card/Component Titles
- **Size**: text-2xl of text-3xl
- **Weight**: Bold (700)
- **Color**: Foreground
- **Margin Bottom**: mb-3 of mb-4

### Level 4: Body Text
- **Size**: text-base of text-lg
- **Weight**: Regular (400)
- **Color**: Neutral
- **Line Height**: leading-relaxed

## 🌊 Animaties & Transitions

### Hover Effecten

#### Lift Effect
```tsx
transition-all duration-300 hover:-translate-y-2
```

#### Scale Effect
```tsx
transition-transform hover:scale-105
```

#### Shadow Effect
```tsx
transition-all hover:shadow-lg
```

### Loading States
```tsx
opacity-50 cursor-not-allowed
```

### Smooth Scroll
```tsx
scroll-smooth (op html element)
scroll-mt-20 (voor anchors met fixed header)
```

## 📱 Responsive Breakpoints

### Mobile First Approach

```tsx
// Mobile (< 768px): Default styles
className="text-xl"

// Tablet (≥ 768px)
className="text-xl md:text-2xl"

// Desktop (≥ 1024px)
className="text-xl md:text-2xl lg:text-3xl"
```

### Grid Layouts

```tsx
// 1 kolom mobile, 2 tablet, 3 desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
```

## 🎨 Gradient Usage

### Primary Gradient
```tsx
className="bg-gradient-to-r from-primary to-secondary"
```
**Gebruik**: Buttons, CTA sections, belangrijke highlights

### Text Gradient
```tsx
className="gradient-text"
```
**CSS**:
```css
.gradient-text {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Background Gradient (Subtle)
```tsx
className="bg-gradient-to-br from-neutral-light via-white to-primary/5"
```
**Gebruik**: Hero sections, grote achtergronden

## 🔍 Accessibility

### Contrast Ratios
- **Primary Text**: 4.5:1 minimum
- **Large Text**: 3:1 minimum
- **UI Components**: 3:1 minimum

### Focus States
```tsx
focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none
```

### Alt Text
Altijd beschrijvende alt text voor afbeeldingen:
```tsx
alt="Beschrijving van afbeelding"
```

### Aria Labels
Voor icon buttons:
```tsx
aria-label="Omschrijving van actie"
```

## 📐 Layout Patterns

### Container
```tsx
className="container mx-auto px-6"
```
- Max width: automatisch (1280px)
- Horizontal padding: 24px (px-6)

### Section
```tsx
className="py-20 bg-white dark:bg-background"
```
- Vertical padding: 80px (py-20)
- Background: Alternating wit/neutral-light

### Max Width Content
```tsx
className="max-w-3xl mx-auto"  // Voor tekst content
className="max-w-4xl mx-auto"  // Voor forms
className="max-w-6xl mx-auto"  // Voor grids
```

## 🎯 Best Practices

### 1. Consistentie
- Gebruik altijd de gedefinieerde kleuren via CSS variabelen
- Houd spacing consistent met Tailwind's schaal
- Gebruik dezelfde border-radius waarden (rounded-lg, rounded-xl, rounded-2xl)

### 2. Performance
- Gebruik transform voor animaties (niet top/left)
- Lazy load images waar mogelijk
- Minimaliseer repaints/reflows

### 3. Dark Mode
- Test alle componenten in dark mode
- Gebruik semantic kleuren (foreground/background) in plaats van absolute waarden
- Zorg voor voldoende contrast in beide modes

### 4. Mobile First
- Begin met mobile layout
- Scale op naar grotere schermen
- Test op echte devices, niet alleen browser tools

### 5. Whitespace
- Geef content ruimte om te ademen
- Gebruik consistent padding/margin
- Verhoog line-height voor leesbaarheid (leading-relaxed)

## 🎨 Design Tokens

### Border Radius
- **sm**: 0.25rem (4px) - Kleine elementen
- **md**: 0.5rem (8px) - Badges, pills
- **lg**: 0.75rem (12px) - Inputs, buttons
- **xl**: 1rem (16px) - Cards (klein)
- **2xl**: 1.5rem (24px) - Cards (groot)
- **full**: 9999px - Pills, rounded buttons

### Shadows
```css
shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)
```

### Z-Index Layers
- **1**: Overlays binnen componenten
- **10**: Dropdown menus, tooltips
- **20**: Absolute positioned elements
- **50**: Fixed header, footer
- **100**: Modals, notifications

---

## 📚 Voorbeelden

### Hero Section Pattern
```tsx
<section className="relative min-h-screen flex items-center justify-center 
                    overflow-hidden bg-gradient-to-br from-neutral-light 
                    via-white to-primary/5 dark:from-neutral-dark 
                    dark:via-background dark:to-primary/10">
  <div className="container mx-auto px-6 py-32 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Titel met <span className="gradient-text">Gradient</span>
      </h1>
      <p className="text-xl md:text-2xl text-neutral mb-10 
                    max-w-2xl mx-auto leading-relaxed">
        Omschrijving tekst die de propositie uitlegt
      </p>
      <Button href="/contact" size="lg">
        Call to Action
      </Button>
    </div>
  </div>
</section>
```

### Card Grid Pattern
```tsx
<section className="py-20 bg-white dark:bg-background">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Sectie Titel
      </h2>
      <p className="text-xl text-neutral max-w-2xl mx-auto">
        Sectie omschrijving
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Cards here */}
    </div>
  </div>
</section>
```

---

**Laatst bijgewerkt**: November 2025
**Versie**: 1.0


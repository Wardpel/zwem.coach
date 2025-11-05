# ZWEM.COACH - Start to Crawl Vilvoorde

Een moderne, one-page landing page voor zwemcoaching programma in Vilvoorde, gebouwd met Next.js 15, Tailwind CSS en Stripe integratie.

## Overzicht

Dit project is een professionele website voor ZWEM.COACH, een crawl zwemprogramma begeleid door Olympisch medaillewinnaar Pieter Timmers en coach Ward Pellegrims. De website biedt informatie over het programma en maakt inschrijving mogelijk via Stripe Payment Links.

## Technische Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS met ocean/athletic theme
- **Animaties:** Framer Motion
- **Testing:** Playwright E2E tests
- **Code Formatting:** Prettier
- **Analytics:** Vercel Analytics & Speed Insights
- **Payment:** Stripe Payment Links

## Features

- 🎨 Moderne, responsieve one-page design
- 🌊 Ocean/athletic themed color palette
- ✨ Smooth animaties met Framer Motion
- 💳 Stripe Payment Links integratie voor twee groepen
- 📱 Volledig responsive voor alle apparaten
- 🧪 Uitgebreide E2E tests met Playwright
- ⚡ Geoptimaliseerd voor performance en SEO
- 🎯 Nederlandse content

## Installatie

### Vereisten

- Node.js 18 of hoger
- npm of yarn

### Stappen

1. Clone de repository:

```bash
git clone <repository-url>
cd zwem.coach
```

2. Installeer dependencies:

```bash
npm install
```

3. Configureer environment variables (zie hieronder)

4. Start de development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in je browser

## Environment Variables

Kopieer `.env.example` naar `.env.local`:

```bash
cp .env.example .env.local
```

Vul de Stripe Payment Links in:

```env
NEXT_PUBLIC_STRIPE_MONDAY_LINK=https://buy.stripe.com/your-monday-link
NEXT_PUBLIC_STRIPE_WEDNESDAY_LINK=https://buy.stripe.com/your-wednesday-link
```

## Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code met Prettier
npm run format

# Run E2E tests
npm run test:e2e

# Run E2E tests in headed mode
npm run test:e2e:headed

# Run E2E tests in UI mode
npm run test:e2e:ui
```

## Project Structuur

```
zwem.coach/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout met fonts & analytics
│   │   ├── page.tsx             # Homepage
│   │   └── globals.css          # Global styles
│   └── components/
│       ├── CTAButton.tsx        # CTA button met modal
│       ├── HeroSection.tsx      # Hero sectie
│       ├── ProgramSection.tsx   # Programma info
│       ├── CoachesSection.tsx   # Coaches bios
│       ├── ScheduleSection.tsx  # Data, tijden & locatie
│       ├── PricingSection.tsx   # Prijs & benodigdheden
│       └── Footer.tsx           # Footer met contact
├── tests/
│   └── homepage.spec.ts         # E2E tests
├── public/                      # Static assets
├── tailwind.config.js           # Tailwind configuration
├── playwright.config.ts         # Playwright configuration
├── next.config.mjs              # Next.js configuration
└── package.json                 # Dependencies
```

## Deployment

### Vercel (Aanbevolen)

1. Push je code naar GitHub

2. Ga naar [Vercel](https://vercel.com) en import je repository

3. Configureer environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_STRIPE_MONDAY_LINK`
   - `NEXT_PUBLIC_STRIPE_WEDNESDAY_LINK`

4. Deploy!

## Testing

De website bevat uitgebreide E2E tests voor:

- ✅ Hero sectie en CTA functionaliteit
- ✅ Alle content secties zichtbaar
- ✅ Modal voor groepsselectie
- ✅ Responsive design op mobiel
- ✅ Contact informatie
- ✅ Metadata en SEO

Run tests:

```bash
npm run test:e2e
```

## Styling & Design

Het project gebruikt een ocean/athletic theme consistent met pellegrims.coach:

- **Primary Color:** Deep ocean blue (#0369a1)
- **Secondary Color:** Coastal blue (#0ea5e9)
- **Accent Color:** Bright cyan (#06b6d4)
- **Fonts:** Inter (body), Poppins (headings)
- **Animations:** Framer Motion voor smooth transitions

## Browser Support

- Chrome/Edge (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- ⚡ Lighthouse Score: 95+
- 📦 Optimized bundle size
- 🖼️ Image optimization met Next.js
- 🚀 Fast page loads met Vercel Edge Network

## Support & Contact

Voor vragen of problemen met de website:

- Email: info@zwem.coach
- Repository Issues: [GitHub Issues](link-to-issues)

## License

Copyright (c) 2025 ZWEM.COACH

Licensed under the MIT License - see LICENSE file for details

# Richards, Lathrop & Associates

A boutique wealth management firm website built with Next.js 15 and Tailwind CSS.

## About

Richards, Lathrop & Associates is an independently owned wealth management firm founded by Christian P. Richards III and Michael Lathrop. This website showcases their client-first philosophy, services, and unique approach to financial advisory.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Typography:** Vanio (custom font) with Georgia fallback
- **Animations:** Custom scroll-triggered animations using Intersection Observer

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles, fonts, animations
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── AnimateOnScroll.tsx   # Reusable animation wrapper
│   ├── ComparisonSection.tsx # Big firms vs. our approach
│   ├── FinalCTA.tsx          # Call-to-action section
│   ├── Footer.tsx            # Site footer
│   ├── Founders.tsx          # Founder bios
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Hero section
│   ├── Lineage.tsx           # Mentors section
│   ├── OriginStory.tsx       # Company story
│   └── Philosophy.tsx        # Four pillars section
├── hooks/
│   └── useScrollAnimation.ts # Intersection Observer hook
└── public/
    └── assets/
        ├── fonts/       # Vanio font files
        └── img/         # Images and logo
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Features

- Smooth scroll-triggered animations on all sections
- Responsive design for mobile and desktop
- Custom Vanio typography for headings
- Fixed navigation header with smooth scroll links
- Hero section with staggered entrance animations

## Sections

1. **Hero** - Main headline and call-to-action
2. **Comparison** - Big firms vs. Richards, Lathrop approach
3. **Origin Story** - How the firm came to be
4. **Founders** - Christian Richards and Michael Lathrop bios
5. **Philosophy** - The four pillars guiding the firm
6. **Lineage** - Mentors who shaped the philosophy
7. **Final CTA** - Contact and consultation prompt
8. **Footer** - Navigation, services, and contact info

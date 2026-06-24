# Vinay Kumar — Senior Software Developer Portfolio

A premium, interactive 3D portfolio built with **Next.js**, **TypeScript**, **React Three Fiber**, **Tailwind CSS**, and **Framer Motion**.

**[Live Demo](https://vinayk1801.github.io)**

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router & Static Export |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| React Three Fiber | 3D WebGL experiences |
| Framer Motion | Declarative animations |
| Three.js | 3D graphics engine |
| GSAP | Advanced timeline animations |
| Lucide React | Icon system |

---

## Features

- **3D Hero Section** — Animated particle system, floating geometric shapes, aurora gradients
- **Interactive Timeline** — Professional experience with scroll animations
- **Skills Visualization** — Animated progress bars with proficiency indicators
- **Project Showcase** — Premium cards with metrics, tech stacks, and hover effects
- **Performance Optimized** — Static export, lazy loading, code splitting
- **Enterprise SEO** — JSON-LD structured data, Open Graph, Twitter Cards, sitemap, robots.txt
- **Fully Responsive** — Desktop, tablet, mobile optimized
- **Accessibility** — WCAG compliant, ARIA labels, keyboard navigation
- **Glassmorphism Design** — Premium dark theme inspired by Apple, Vercel, Stripe

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |

---

## Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles & Tailwind
│   │   └── not-found.tsx        # 404 page
│   ├── components/
│   │   ├── sections/            # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── ScrollReveal.tsx
│   │   │   ├── GlassCard.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── BackToTop.tsx
│   │   └── 3d/                  # 3D components
│   │       ├── ParticleBackground.tsx
│   │       └── FloatingShape.tsx
│   ├── hooks/                   # Custom React hooks
│   │   ├── useMousePosition.ts
│   │   ├── useScrollProgress.ts
│   │   └── useInView.ts
│   ├── lib/
│   │   ├── utils.ts             # Utility functions
│   │   └── data.ts              # Portfolio data
│   └── types/
│       └── index.ts             # TypeScript types
├── next.config.js               # Static export configuration
├── tailwind.config.ts           # Tailwind theme
├── tsconfig.json                # TypeScript config
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/vinayk1801/vinayk1801.github.io.git
cd vinayk1801.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

The static export will be generated in the `dist/` directory.

---

## Deployment

### GitHub Pages (Recommended)

1. Go to **Settings → Pages** in your repository
2. Set **Source** to "GitHub Actions"
3. Push to the `main` branch — the workflow will automatically deploy

### Manual Deploy

```bash
npm run build
# Copy dist/ contents to your hosting provider
```

---

## SEO Checklist

- [x] Dynamic metadata (title, description, keywords)
- [x] Open Graph tags for social sharing
- [x] Twitter Cards
- [x] JSON-LD Structured Data (Schema.org Person)
- [x] Canonical URLs
- [x] robots.txt
- [x] sitemap.xml
- [x] Semantic HTML
- [x] Accessibility (ARIA labels, keyboard nav)
- [ ] Add Google Analytics / GTM tracking ID
- [ ] Add Google Search Console verification code

---

## Customization

### Update Personal Information

Edit `src/lib/data.ts`:

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  // ...
};
```

### Add/Edit Projects

Edit the `PROJECTS` array in `src/lib/data.ts`.

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },
  accent: { ... },
}
```

---

## License

MIT License — feel free to use this as a template for your own portfolio.

---

## Contact

**Vinay Kumar**

- [GitHub](https://github.com/vinayk1801)
- [LinkedIn](https://linkedin.com/in/vinaykumar1801)
- [Email](mailto:vinayk180323@gmail.com)

---

*Built with passion and precision for the modern web.*

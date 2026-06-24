# Performance Optimization Guide

## Build Targets

| Metric | Target | Current Approach |
|--------|--------|------------------|
| Lighthouse Performance | 95+ | Static export, code splitting, lazy loading |
| Lighthouse Accessibility | 100 | Semantic HTML, ARIA labels, keyboard navigation |
| Lighthouse Best Practices | 100 | HTTPS, modern APIs, no deprecated features |
| Lighthouse SEO | 100 | Structured data, meta tags, semantic HTML |
| First Contentful Paint (FCP) | < 1.5s | Static export eliminates server latency |
| Largest Contentful Paint (LCP) | < 2.5s | Optimized fonts, preloaded critical assets |
| Time to Interactive (TTI) | < 3.5s | Code splitting, minimal JS on initial load |
| Cumulative Layout Shift (CLS) | < 0.1 | Fixed dimensions, font-display: swap |

## Implemented Optimizations

### 1. Static Export
- `output: 'export'` in `next.config.js`
- Zero server-side rendering overhead
- Instant CDN delivery

### 2. Image Optimization
- `next/image` configured with `unoptimized: true` for static export
- All images should be placed in `public/images/`
- Recommended: WebP format, max width 1920px

### 3. Font Optimization
- Google Fonts loaded with `display=swap`
- Only required font weights included (300, 400, 500, 600, 700, 800, 900)
- Font preloading for critical text

### 4. Code Splitting
- Dynamic imports for heavy components (3D scenes)
- Route-based splitting via Next.js App Router
- Component-level splitting where beneficial

### 5. 3D Performance
- `dpr={[1, 1.5]}` limits pixel ratio on high-DPI screens
- Reduced particle count (500) for 60 FPS target
- `willReadFrequently: true` for canvas operations
- Frustum culling enabled by default in Three.js

### 6. CSS Optimization
- Tailwind purge removes unused styles
- Critical CSS inlined by Next.js
- Minimal custom CSS in `globals.css`

### 7. JavaScript Bundle
- Tree shaking for unused exports
- `framer-motion` tree-shakeable imports
- Lucide icons imported individually

## Pre-Launch Checklist

### Images
- [ ] Compress all images to WebP
- [ ] Add `width` and `height` attributes to prevent CLS
- [ ] Use `loading="lazy"` for below-fold images
- [ ] Add meaningful `alt` text for accessibility

### Fonts
- [ ] Verify font-display: swap is working
- [ ] Preload critical font files if self-hosting
- [ ] Ensure fallback fonts have similar metrics

### 3D Assets
- [ ] Test on mobile devices (may need to reduce particle count)
- [ ] Verify 60 FPS on target hardware
- [ ] Consider disabling 3D on low-power devices

### SEO
- [ ] Update Google Search Console verification code
- [ ] Add Google Analytics / GTM tracking ID
- [ ] Verify structured data with Google's Rich Results Test
- [ ] Submit sitemap to Google Search Console

### Testing
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Test on real mobile devices
- [ ] Verify keyboard navigation
- [ ] Test with screen reader (NVDA, VoiceOver)
- [ ] Check color contrast ratios (WCAG AA)

## Recommended Tools

- **Lighthouse** — Chrome DevTools built-in audit
- **PageSpeed Insights** — Google's online test
- **WebPageTest** — Detailed waterfall analysis
- **GTmetrix** — Performance monitoring
- **Squoosh** — Image compression (https://squoosh.app)

## Bundle Analysis

To analyze the production bundle size:
```bash
npm run build
npx @next/bundle-analyzer
```

Look for:
- Large dependencies that could be tree-shaken
- Duplicate package versions
- Opportunities for dynamic imports

## Monitoring

After deployment, monitor:
- Core Web Vitals via Google Search Console
- Real User Metrics (RUM) with Vercel Analytics or Cloudflare
- Error tracking with Sentry (recommended)

## Future Improvements

1. **Service Worker** — Add PWA capabilities with offline caching
2. **Critical CSS Extraction** — Inline above-the-fold styles
3. **Image CDN** — Use Cloudflare Images or Imgix for responsive images
4. **Edge Caching** — Configure CDN cache headers for static assets
5. **Prefetching** — Add `rel="prefetch"` for likely next pages
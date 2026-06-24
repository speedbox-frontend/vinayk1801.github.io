# Deployment Guide

## GitHub Pages (Recommended)

Your portfolio is configured for static export and GitHub Pages deployment.

### Option 1: Use the Created Repository (speedbox-frontend)

A repository has been created at:
**https://github.com/speedbox-frontend/speedbox-frontend.github.io**

To push your code:

```bash
cd D:\Portfolio\portfolio
git push origin main
```

If you get a 403 permission error, your local Git credentials may be tied to a different GitHub account. You have two options:

#### Option A: Configure Git Credentials for speedbox-frontend
```bash
git config user.name "speedbox-frontend"
git config user.email "your-speedbox-email@example.com"
```

Then use a personal access token (PAT) for authentication:
```bash
git remote set-url origin https://speedbox-frontend:YOUR_PAT@github.com/speedbox-frontend/speedbox-frontend.github.io.git
git push origin main
```

#### Option B: Transfer to Your Personal Account (vinayk1801)
1. Create a new repository named `vinayk1801.github.io` under your personal GitHub account
2. Update the remote URL:
```bash
git remote set-url origin https://github.com/vinayk1801/vinayk1801.github.io.git
git push origin main
```

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy on the next push to `main`

### Custom Domain (Optional)

1. Add a `CNAME` file in the `public/` directory with your domain name
2. Configure your DNS provider to point to GitHub Pages
3. Update `metadataBase` in `src/app/layout.tsx` to your custom domain

## Local Build & Preview

```bash
npm install
npm run build
npx serve dist
```

## Other Hosting Providers

The `dist/` folder contains a fully static export that can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static hosting provider

## Troubleshooting

### 404 on refresh
GitHub Pages SPA routing requires the `404.html` file in `public/`, which is already included. This redirects all routes back to `index.html`.

### Images not loading
For static export, images must be placed in the `public/` directory. The `next/image` component is configured with `unoptimized: true` for static export compatibility.

### Base Path issues
If deploying to a subdirectory (e.g., `github.com/username/repo-name`), update `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  basePath: '/repo-name',
  assetPrefix: '/repo-name',
};
```
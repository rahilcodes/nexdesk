# NEXDESK Coworking Website

Premium static website for NEXDESK coworking space built with Next.js, Tailwind CSS, and Framer Motion.

## Features
- **Fully Static Export:** No backend or forms required, compatible with GitHub pages.
- **Mobile-first Design:** Fully responsive layout with seamless interactions.
- **Premium Aesthetics:** Clean, modern UI inspired by top tech brands with smooth Framer Motion animations.
- **Performance Optimized:** Static assets, `next/image` with unoptimized flags for static hosting, fast loading.
- **Conversion Focused:** Floating action buttons for WhatsApp and Direct Calls.
- **Local SEO Optimized:** JSON-LD complete schema injected via `layout.tsx`.

## Tech Stack
- **Framework:** Next.js (App Router, Static Export)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Local Development
1. Clone the repository and navigate to the project root.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages
This project is configured to output static files (`output: 'export'` in `next.config.ts`).

1. Build the production static export:
   ```bash
   npm run build
   ```
2. The `out/` directory will contain the generated pure HTML/CSS/JS files.
3. Deploy the contents of the `out/` folder to your host (like GitHub Pages, Netlify, or Vercel). For GitHub pages, simply upload these files to the `gh-pages` branch or use the Next.js GitHub Actions deployment guide.

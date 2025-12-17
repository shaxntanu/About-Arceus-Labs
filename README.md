# Arceus Labs - About Page

A modern, professional About webpage for Arceus Labs built with Tailwind CSS.

## Quick Start

### Option 1: Build with Tailwind CLI (Recommended)

```bash
# Install dependencies
npm install

# Development (watch mode)
npm run dev

# Production build
npm run build
```

Then open `index.html` in your browser.

### Option 2: CDN Fallback (Quick Preview)

Replace the stylesheet link in `index.html`:

```html
<!-- Replace this -->
<link href="assets/output.css" rel="stylesheet">

<!-- With this -->
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          dark: { bg: '#0a0a0f', card: '#12121a', border: '#1e1e2e' },
          accent: { blue: '#4a9eff', purple: '#8b5cf6' }
        },
        fontFamily: {
          heading: ['"Times New Roman"', 'Times', 'serif'],
          body: ['Roboto', 'system-ui', 'sans-serif']
        },
        maxWidth: { content: '800px' }
      }
    }
  }
</script>
<link href="assets/style.css" rel="stylesheet">
```

## Project Structure

```
├── index.html          # Main HTML file
├── assets/
│   ├── style.css       # Tailwind input + custom CSS
│   └── output.css      # Generated CSS (after build)
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## Deployment

### GitHub Pages

1. Build the CSS: `npm run build`
2. Push to GitHub
3. Go to Settings > Pages
4. Select branch and root folder
5. Save and wait for deployment

### Vercel

1. Build the CSS: `npm run build`
2. Push to GitHub
3. Import project in Vercel
4. Deploy (no build command needed, static files)

Or use Vercel CLI:

```bash
npm run build
npx vercel
```

### Netlify

1. Build the CSS: `npm run build`
2. Drag and drop the project folder to Netlify
3. Or connect your GitHub repo

## Customization

- **Colors**: Edit `tailwind.config.js` under `theme.extend.colors`
- **Content**: Edit sections directly in `index.html`
- **Background**: Modify shooting stars in `assets/style.css`
- **Fonts**: Update Google Fonts link and `fontFamily` in config

## Features

- Animated shooting stars background
- Responsive mobile-first design
- Scroll reveal animations
- Respects `prefers-reduced-motion`
- Semantic HTML structure
- Open Graph meta tags

## License

© 2025 Arceus Labs. Open Source Hardware.

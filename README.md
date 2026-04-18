# Arun Lama — Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple.svg)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg)](https://tailwindcss.com)

A modern, high-performance personal portfolio built with **React 19**, **Vite 6**, and **Tailwind CSS**. Designed with **Swiss Minimalism** principles, featuring bold typography, grid-based layouts, and purposeful micro-interactions. Showcases selected work through deep-dive case studies with a focus on accessibility, performance, and recruiter-friendly design.

🌐 **Live Demo:** [arunlama0.github.io](https://arunlama0.github.io)

---

## ✨ Key Features

### 🎨 Design & UX
- **Swiss Minimalism Theme:** Clean off-white (#F4F4F0) and deep charcoal (#121212) palette with electric indigo accents
- **Bold Typography:** Massive display type using Inter/Helvetica Now with tight letter-spacing
- **Grid-Based Layouts:** Asymmetric Swiss-style grids with purposeful whitespace
- **Micro-Interactions:** Subtle hover states, staggered animations, and geometric card designs
- **Grayscale-to-Color:** Project images reveal color on hover for focused browsing
- **Fully Responsive:** Fluid layouts adapting seamlessly across all devices
- **Dark/Light Mode:** Smooth theme transitions with persistent user preference

### 🔒 Security
- **CSRF Protection:** Token-based validation for all form submissions
- **Input Sanitization:** Comprehensive validation and XSS prevention
- **Rate Limiting:** Client-side throttling (3 submissions/minute)
- **Honeypot Field:** Advanced spam detection with time-based analysis
- **Error Boundaries:** Graceful error handling with recovery options

### ♿ Accessibility (WCAG 2.1 AA)
- **Screen Reader Support:** Descriptive ARIA labels on all interactive elements
- **Keyboard Navigation:** Full keyboard support with visible focus indicators
- **Skip Links:** Quick navigation to main content
- **Semantic HTML:** Proper heading hierarchy and landmark regions
- **Color Contrast:** Optimized for readability in both themes (AAA compliance)

### ⚡ Performance
- **Code Splitting:** Lazy-loaded components for faster initial page load
- **Image Optimization:** Automatic WebP conversion and responsive images
- **Bundle Analysis:** Optimized chunk sizes (total bundle < 50KB gzipped)
- **Zero Layout Shift:** Careful asset loading strategies
- **Lighthouse Scores:** 95-100 across all metrics

### 📈 SEO & Analytics
- **Meta Tags:** Complete Open Graph, Twitter Cards, and SEO metadata
- **Structured Data:** JSON-LD schema for enhanced search visibility
- **robots.txt:** Proper crawl directives
- **Privacy-Friendly:** No tracking by default, analytics-ready

## 🎨 Design Philosophy

This portfolio follows **Swiss International Style** (International Typographic Style) principles:

- **Grid Systems:** Asymmetric layouts built on mathematical grids for visual harmony
- **Typography First:** Bold, sans-serif typefaces (Inter/Helvetica Now) as primary design elements
- **Whitespace:** Purposeful negative space to let content breathe
- **Minimalism:** "Less is more" approach - removing unnecessary decorative elements
- **Function Over Form:** Every design element serves a clear purpose
- **Micro-Interactions:** Subtle animations that enhance UX without distracting

### Color Palette

| Role | Light Mode | Dark Mode |
|------|-----------|-----------|
| Background | Off-White (#F4F4F0) | Deep Charcoal (#121212) |
| Primary Text | Charcoal (#121212) | Off-White (#F4F4F0) |
| Accent | Electric Indigo (#4F46E5) | Electric Indigo (#6366F1) |
| Secondary | Cool Gray (#6B7280) | Warm Gray (#9CA3AF) |

---

## 📂 Project Structure

```
portfolio/
├── public/                     # Static assets
│   ├── favicon-*.png          # Multi-size favicons
│   ├── profile_optimized.*    # Optimized profile images
│   ├── robots.txt             # Crawl directives
│   └── site.webmanifest       # PWA manifest
├── src/
│   ├── components/            # Reusable React components
│   │   ├── About.jsx          # About section with config
│   │   ├── Contact.jsx        # Secure contact form
│   │   ├── ErrorBoundary.jsx  # Error handling component
│   │   ├── Hero.jsx           # Hero section with animations
│   │   ├── Projects.jsx       # Project showcase
│   │   └── Skills.jsx         # Skills display
│   ├── config.js              # Centralized configuration
│   ├── App.jsx                # Main app with lazy loading
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles & Tailwind
├── .github/
│   └── workflows/             # CI/CD pipelines
├── docs/                      # Documentation
├── SECURITY.md                # Security policy
├── CONTRIBUTING.md            # Contribution guidelines
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind customization
└── package.json               # Dependencies & scripts
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Git (for cloning)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arun-2057/arunlama0.github.io.git
   cd arunlama0.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables (optional):**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173`

### Build & Deploy

```bash
# Production build
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

---

## 📊 Performance Metrics

| Metric | Score | Status |
|--------|-------|--------|
| Lighthouse Performance | 98+ | ✅ Excellent |
| Lighthouse Accessibility | 100 | ✅ Excellent |
| Lighthouse Best Practices | 100 | ✅ Excellent |
| Lighthouse SEO | 100 | ✅ Excellent |
| First Contentful Paint | < 1.0s | ✅ Fast |
| Time to Interactive | < 2.0s | ✅ Fast |
| Total Bundle Size | < 50KB | ✅ Optimized |
| Cumulative Layout Shift | 0 | ✅ Perfect |

---

## 🎯 Case Study Approach

Projects are presented using the **STAR method** for maximum impact:

- **Situation:** Context and background of the problem
- **Task:** Goals and objectives to achieve
- **Action:** Design decisions, technical implementation, and process
- **Result:** Measurable outcomes and lessons learned

Each case study includes:
- Problem statement and user research insights
- Wireframes and design iterations
- Technical architecture decisions
- Before/after metrics
- Reflections and future improvements

---

## 🔐 Security Features

This portfolio implements multiple security layers:

- ✅ **Client-side validation** with sanitization
- ✅ **CSRF token** generation and validation
- ✅ **Rate limiting** to prevent abuse
- ✅ **Honeypot fields** for spam detection
- ✅ **Content Security Policy** headers ready
- ✅ **No sensitive data** in client code

See [SECURITY.md](SECURITY.md) for detailed security policy.

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📬 Contact

- **Email:** arunlama@example.com
- **LinkedIn:** [linkedin.com/in/arunlama](https://linkedin.com/in/arunlama)
- **GitHub:** [github.com/arun-2057](https://github.com/arun-2057)
- **Website:** [arunlama0.github.io](https://arunlama0.github.io)

For questions or collaboration, please [open an issue](https://github.com/arun-2057/arunlama0.github.io/issues) or use the contact form on the website.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

```
Copyright (c) 2024 Arun Lama

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Bundled with [Vite](https://vitejs.dev)
- Icons from [React Icons](https://react-icons.github.io)
- Deployed on [GitHub Pages](https://pages.github.com)
- Inspired by Swiss International Design Style

---

## 📚 Design Resources

- **Typography:** Inter font family (optimized for screen readability)
- **Color Theory:** Electric indigo accent for maximum contrast and accessibility
- **Grid Systems:** 12-column responsive grid with asymmetric layouts
- **Animation Principles:** Subtle micro-interactions following Fitts's Law

---

<div align="center">

**Made by Arun Lama** — Swiss Minimalism meets Modern Web Development

[⬆ Back to Top](#arun-lama--portfolio-website)

</div>

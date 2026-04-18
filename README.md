# Arun Lama - Data Analyst Portfolio

A modern, performant portfolio website showcasing data analysis projects, skills, and professional experience.

## 🚀 Features

- **Performance Optimized**: Critical CSS inlining, lazy loading, module preloading
- **SEO Enhanced**: Structured data (JSON-LD), Open Graph tags, canonical URLs
- **Accessibility First**: Skip links, ARIA labels, keyboard navigation, WCAG compliant
- **Security Hardened**: CSP headers, X-Frame-Options, Referrer-Policy
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Automatic theme switching based on system preferences
- **PWA Ready**: Installable as a progressive web app

## 🛠️ Tech Stack

- **Frontend**: React 18, Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions with Lighthouse CI

## 📁 Project Structure

```
/workspace
├── index.html              # Main HTML with security headers & SEO
├── assets/
│   ├── index-*.js         # Bundled JavaScript
│   └── index-*.css        # Bundled CSS
├── images/                 # Optimized images (WebP + fallbacks)
├── .github/workflows/      # CI/CD pipeline configuration
└── README.md              # This file
```

## 🎯 Performance Scores

Target Lighthouse scores:
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

## 🔒 Security Features

- Content Security Policy (CSP)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy

## ♿ Accessibility Features

- Skip to main content link
- Semantic HTML structure
- Focus management
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support

## 📊 Structured Data

The site includes JSON-LD structured data for:
- Person schema (professional profile)
- WebSite schema (search capability)

## 🔄 CI/CD Pipeline

The GitHub Actions workflow includes:
1. Dependency caching
2. HTML validation
3. Jekyll build
4. Lighthouse CI audit
5. Automated deployment

## 🚦 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Running Lighthouse Audit Locally

```bash
# Install Lighthouse CLI
npm install -g @lhci/cli

# Run audit
lhci autorun --collect.staticDistDir=./dist
```

## 📈 Optimization Checklist

- [x] Security headers implemented
- [x] Critical CSS inlined
- [x] Module preloading
- [x] DNS prefetching
- [x] Image optimization (WebP format)
- [x] Lazy loading for non-critical resources
- [x] Structured data added
- [x] Accessibility improvements
- [x] CI/CD with quality gates

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

**Arun Lama** - Data Analyst

- Portfolio: [arunlama.com](https://arunlama.com)
- LinkedIn: [linkedin.com/in/arunlama](https://linkedin.com/in/arunlama)
- GitHub: [github.com/arunlama](https://github.com/arunlama)

---

Built with ❤️ using React, Tailwind CSS, and Vite

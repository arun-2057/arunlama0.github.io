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
- **Advanced Animations:** 15+ micro-interactions including cascade effects, slide-ups, and parallax scrolling
- **Interactive Components:** Project modals, animated statistics, animated progress bars, and proficiency indicators
- **Grayscale-to-Color:** Project images reveal color on hover with metrics overlay for focused browsing
- **Fully Responsive:** Fluid layouts adapting seamlessly across all devices (mobile-first approach)
- **Dark/Light Mode:** Smooth theme transitions with persistent user preference and enhanced color contrast

### 🔒 Security
- **CSRF Protection:** Token-based validation for all form submissions
- **Input Sanitization:** Comprehensive validation and XSS prevention
- **Rate Limiting:** Client-side throttling (3 submissions/minute)
- **Honeypot Field:** Advanced spam detection with time-based analysis
- **Error Boundaries:** Graceful error handling with recovery options

### ♿ Accessibility (WCAG 2.1 AAA)
- **Screen Reader Support:** Descriptive ARIA labels on all interactive elements
- **Keyboard Navigation:** Full keyboard support with visible focus indicators and breadcrumb support
- **Skip Links:** Quick navigation to main content
- **Semantic HTML:** Proper heading hierarchy, landmark regions, and form semantics
- **Color Contrast:** Optimized for readability in both themes (AAA compliance throughout)
- **Motion Preferences:** Respects `prefers-reduced-motion` for accessible animations

### ⚡ Performance
- **Code Splitting:** Lazy-loaded components for faster initial page load
- **Image Optimization:** Automatic WebP conversion and responsive images
- **Bundle Analysis:** Optimized chunk sizes (71KB gzipped total, 223KB uncompressed)
- **Zero Layout Shift:** Careful asset loading strategies with skeleton screens
- **GPU-Accelerated Animations:** Smooth 60fps animations using CSS transforms
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

## 🎬 UI/UX Enhancements

### Hero Section
- 📊 **Statistics Dashboard:** Animated counter cards showing 50+ ML models, 91% accuracy, 10+ years experience
- 🎯 **Enhanced CTAs:** Animated buttons with directional icons and hover effects
- ✨ **Hero Tags:** Staggered entrance animations with hover states

### Projects Section
- 🎯 **Interactive Project Modal:** Click cards to view detailed case studies with challenge/solution/results
- 📈 **Metrics Overlay:** Project impact metrics appear on hover with gradient overlay
- 🎨 **Color-Coded Tech Tags:** Technology tags with category-specific colors (Python, Data Science, Web, etc.)
- 🔗 **Quick Links:** External project link icon with hover animations
- 🎬 **Cascade Animations:** Staggered project card entrance effects

### Contact Form
- ✍️ **FormField Component:** Enhanced form fields with focus animations and live validation
- 📝 **Character Counter:** Real-time message length display with visual progress bar
- ⚠️ **Error Feedback:** Shake animations for validation errors with clear messaging
- ✅ **Success State:** Animated checkmark with gradient background on submission
- 🚫 **Advanced Security:** Honeypot spam detection and rate limiting

### Skills Section
- ⭐ **Proficiency Icons:** Star-based skill level indicators (Expert/Intermediate/Beginner)
- 🏷️ **Category Icons:** Emoji icons for each skill category (💻 Programming, 🤖 ML, 📊 Data, 🛠️ Tools)
- 📊 **Enhanced Progress Bars:** Animated progress bars with gradient fills and smooth transitions
- 💫 **Cascading Animations:** Staggered card entrance with skill-level indicators

### Coursework Section
- 📅 **Visual Timeline:** Organized coursework by category with vertical timeline design
- ✓ **Course Checkmarks:** Animated dots and checkmark indicators for completed courses
- 📊 **Summary Stats:** Total courses, categories, and completion rate displayed
- 🎨 **Professional Layout:** Better typography and visual hierarchy

### About Section
- 💭 **Pull Quote Block:** Highlighted key philosophy statement in styled card
- 📋 **Quick Facts Cards:** Animated statistics cards with hover lift effects
- ⚡ **Core Competencies:** Enhanced skill tags with icons and hover animations
- 🎯 **Better CTAs:** Improved call-to-action buttons with directional indicators

### Footer
- 🔗 **Social Media Icons:** Animated circular social links (GitHub, Kaggle, LinkedIn)
- 🎨 **Color-Coded Hovers:** Different colors for each social platform
- ↑ **Back-to-Top Button:** Styled button with smooth scroll animation
- 📋 **Quick Navigation:** Links to all main sections

### Animations & Effects
- 🎯 **15+ CSS Animations:** slideUp, shake, cascadeIn, countUp, parallax, and more
- 🔄 **Smooth Transitions:** GPU-accelerated animations at 60fps
- 👁️ **Intersection Observer:** Elements animate when scrolled into view
- 📱 **Motion Preferences:** Respects `prefers-reduced-motion` for accessibility

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
│   │   ├── About.jsx          # About section with pull quotes & animated facts
│   │   ├── Contact.jsx        # Advanced contact form with validation
│   │   ├── Coursework.jsx     # Coursework timeline with categorization
│   │   ├── ErrorBoundary.jsx  # Error handling component
│   │   ├── Footer.jsx         # Enhanced footer with social animations
│   │   ├── Header.jsx         # Header with breadcrumb navigation
│   │   ├── Hero.jsx           # Hero section with statistics dashboard
│   │   ├── Projects.jsx       # Project showcase with modal system
│   │   ├── Skills.jsx         # Skills with proficiency icons & progress bars
│   │   ├── AnimatedCheckmark.jsx    # Success indicator animation
│   │   ├── Breadcrumb.jsx           # Dynamic breadcrumb navigation
│   │   ├── ColoredBadge.jsx         # Color-coded tech tags
│   │   ├── FormField.jsx            # Enhanced form field component
│   │   ├── ProgressBar.jsx          # Animated progress bars
│   │   ├── ProficiencyIcon.jsx      # Skill level indicators
│   │   ├── ProjectModal.jsx         # Project detail modals
│   │   ├── ScrollProgress.jsx       # Scroll position indicator
│   │   ├── ScrollAnimations.jsx     # Scroll-triggered effects
│   │   ├── Skeleton.jsx             # Loading skeleton screens
│   │   ├── SocialProof.jsx          # Social media proof badges
│   │   └── StatisticsCard.jsx       # Animated counter cards
│   ├── hooks/                 # Custom React hooks
│   │   └── useIntersectionObserver.js  # Intersection Observer hook
│   ├── config.js              # Centralized configuration
│   ├── App.jsx                # Main app with lazy loading & breadcrumbs
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles, Tailwind, & 15+ animations
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
| Lighthouse Accessibility | 100 | ✅ Excellent AAA |
| Lighthouse Best Practices | 100 | ✅ Excellent |
| Lighthouse SEO | 100 | ✅ Excellent |
| First Contentful Paint | < 1.0s | ✅ Fast |
| Time to Interactive | < 2.0s | ✅ Fast |
| Total Bundle Size | 71KB (gzipped) | ✅ Highly Optimized |
| Cumulative Layout Shift | 0 | ✅ Perfect |
| Animation Frame Rate | 60fps | ✅ Smooth |
| Components | 23 | ✅ Modular |
| Animation Effects | 15+ | ✅ Enhanced UX |

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

## 🆕 Component Library

**13 New React Components Added:**
- `StatisticsCard.jsx` - Animated counter cards with Intersection Observer
- `FormField.jsx` - Enhanced form inputs with focus animations and live validation
- `ProjectModal.jsx` - Detailed case study viewer with challenge/solution sections
- `ColoredBadge.jsx` - Color-coded technology tags with category-specific colors
- `ProficiencyIcon.jsx` - Skill level indicator with star-based ratings
- `ScrollProgress.jsx` - Fixed top progress bar showing scroll position
- `Breadcrumb.jsx` - Dynamic breadcrumb navigation following scroll position
- `ProgressBar.jsx` - Animated skill progress bars with gradient fills
- `AnimatedCheckmark.jsx` - SVG-based success indicator with bounce animation
- `Skeleton.jsx` - Loading placeholders for lazy-loaded components
- `ScrollAnimations.jsx` - Utility for scroll-triggered entrance effects
- `SocialProof.jsx` - Social media proof badges with platform colors
- `ExperienceTimeline.jsx` - Timeline component prepared for future work history

**Custom Hook:**
- `useIntersectionObserver.js` - Reusable hook for scroll-triggered animations

---

## 🎨 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Bundled with [Vite](https://vitejs.dev)
- Icons from [React Icons](https://react-icons.github.io)
- Deployed on [GitHub Pages](https://pages.github.com)
- Inspired by Swiss International Design Style
- Enhanced with 15+ custom CSS animations for smooth 60fps interactions

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

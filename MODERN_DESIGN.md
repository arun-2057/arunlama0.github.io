# Modern Design System

A complete redesign of the portfolio website with modern UI/UX principles.

## 🎨 Design Features

### Visual Design
- **Modern Gradient Brand Colors**: Purple-to-cyan gradient palette (#4F46E5 → #7C3AED → #06B6D4)
- **Glassmorphism Effects**: Frosted glass navigation and cards with backdrop blur
- **Smooth Animations**: Fade-in, slide-up, and scale animations with staggered delays
- **Layered Shadows**: Multi-depth shadow system for depth perception
- **Rounded Corners**: Modern 2xl border radius on cards and components

### Typography
- **Fluid Typography**: Clamp-based responsive font sizes
- **Inter Font Family**: Clean, modern sans-serif
- **Gradient Text**: Brand gradient text effects on headings

### Components

#### Hero Section
- Animated gradient background
- Floating badge with glassmorphism
- Gradient text titles
- Staggered fade-in animations
- Dual CTA buttons (primary + secondary)

#### Cards
- Hover lift effect (-8px translateY)
- Gradient top border reveal on hover
- Colored shadow glow effects
- Smooth transition animations

#### Skills Grid
- Auto-fit responsive grid
- Icon-based skill items
- Hover scale and shadow effects
- Clean minimalist design

#### Projects Grid
- 16:10 aspect ratio images
- Zoom effect on hover
- Overlay with gradient
- Tag-based categorization
- Responsive card layout

#### Navigation
- Fixed glassmorphism header
- Blur backdrop filter
- Scroll state detection
- Smooth transitions

### Dark Mode Support
Full dark mode implementation with:
- Inverted color palette
- Adjusted contrast ratios
- Modified glassmorphism opacity
- Consistent brand colors

### Accessibility
- Reduced motion support
- High contrast ratios (WCAG AA+)
- Focus visible states
- Screen reader friendly
- Keyboard navigation support

### Performance
- CSS custom properties for theming
- Hardware-accelerated animations
- Optimized transitions
- Print stylesheet included

## 📁 Files

- `assets/modern-design.css` - Complete modern design system
- `index.html` - Updated with new stylesheet links

## 🚀 Usage

The modern design CSS is loaded asynchronously with print media trick for optimal performance:

```html
<link rel="stylesheet" href="/assets/modern-design.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="/assets/modern-design.css"></noscript>
```

## 🎯 Key Classes

### Layout
- `.container` - Max-width centered container
- `.section` - Spaced section wrapper
- `.hero` - Full-screen hero section

### Components
- `.card` - Modern card component
- `.btn`, `.btn-primary`, `.btn-secondary` - Button variants
- `.project-card` - Project showcase card
- `.skill-item` - Skill badge item

### Utilities
- `.text-gradient` - Gradient text effect
- `.glass` - Glassmorphism effect
- `.scroll-reveal` - Scroll animation trigger
- `.floating` - Floating animation

### Animations
- `.animate-fade-in-up` - Fade in from bottom
- `.delay-100` to `.delay-500` - Animation delays
- `.scroll-reveal.visible` - Revealed state

## 🎨 Color Palette

| Variable | Light Mode | Dark Mode |
|----------|-----------|-----------|
| `--bg-primary` | #FFFFFF | #0F172A |
| `--bg-secondary` | #F8FAFC | #1E293B |
| `--text-primary` | #0F172A | #F8FAFC |
| `--brand-primary` | #4F46E5 | #4F46E5 |
| `--brand-secondary` | #7C3AED | #7C3AED |

## ✨ Animations

All animations respect `prefers-reduced-motion`:
- Fade In Up/Down/Left/Right
- Scale In
- Floating
- Hero Gradient Background
- Scroll Reveal

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px
- Large: > 1280px

## 🔧 Customization

Edit CSS variables in `:root` to customize:
- Brand colors and gradients
- Spacing scale
- Border radius
- Shadow depths
- Transition timings

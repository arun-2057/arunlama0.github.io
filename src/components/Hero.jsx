import { useMemo } from 'react';
import { config } from '../config';

export default function Hero() {
  // Memoize image paths to avoid recreation on each render
  const images = useMemo(() => ({
    profileSrc: '/profile.jpg',
    profile400: '/profile_optimized-400.jpg',
    profile200: '/profile_optimized-200.jpg',
    profileWebp400: '/profile_optimized-400.webp',
    profileWebp200: '/profile_optimized-200.webp',
  }), []);
  
  return (
    <section id="hero" aria-labelledby="hero-heading" className="pt-32 md:pt-40 pb-16 bg-offWhite dark:bg-charcoal">
      <div className="max-w-max mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 card-anim">
          <h1 id="hero-heading" className="text-display mb-6">
            <span className="text-brand">{config.personal.name}</span>
          </h1>
          <p className="text-headline text-gray-600 dark:text-gray-400 mb-8 font-normal">
            {config.personal.title}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl">
            {config.bio}
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            <a
              href="#projects"
              className="glow-on-hover inline-block bg-brand text-white px-8 py-4 font-bold tracking-tight shadow-swiss hover:shadow-swiss-hover focus:outline-none focus:ring-2 focus:ring-brand-light transition-all"
            >
              View Projects
            </a>
            <a
              href={config.resumePath}
              download
              className="inline-block border-2 border-gray-900 dark:border-white px-8 py-4 font-bold tracking-tight hover:bg-brand hover:text-white hover:border-brand dark:hover:bg-brand dark:hover:text-white transition-all swiss-card"
            >
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {config.heroTags.map((tag) => (
              <span key={tag} className="px-5 py-2.5 bg-white dark:bg-slateDark text-sm font-semibold rounded-none border-2 border-gray-900 dark:border-white hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand transition-all cursor-default tracking-tight">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end card-anim" style={{ animationDelay: '100ms' }}>
          <div className="relative group">
            {/* Futuristic circular frame with neon glow */}
            <div className="absolute -inset-2 border-2 border-brand rounded-full shadow-lg neon-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden border-2 border-gray-700 dark:border-gray-600 rounded-full transform group-hover:scale-105 transition duration-300 shadow-xl">
              <picture>
                <source type="image/webp" srcSet={`${images.profileWebp200} 200w, ${images.profileWebp400} 400w`} sizes="(max-width: 768px) 50vw, 200px" />
                <img
                  src={images.profileSrc}
                  srcSet={`${images.profile200} 200w, ${images.profile400} 400w`}
                  sizes="(max-width: 768px) 50vw, 200px"
                  alt="Headshot of Arun Lama"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

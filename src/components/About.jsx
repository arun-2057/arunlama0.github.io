import { config } from '../config';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const { heading, cta } = config;
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/10"
      role="region"
      ref={ref}
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className={`mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 id="about-heading" className="text-headline mb-4 text-indigo-600 dark:text-indigo-400 uppercase tracking-wide font-bold">
            {heading}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 dark:from-indigo-400 to-indigo-600/40 dark:to-indigo-400/40 mx-auto"></div>
        </div>

        {/* Main bio */}
        <div className={`mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
          <p className="text-slate-900 dark:text-slate-100 leading-relaxed text-lg mb-6">
            {config.aboutBio}
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
            {config.aboutBioExtended}
          </p>
        </div>

        {/* CTA Button */}
        {cta && cta.href && (
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
            <a
              href={cta.href}
              className="btn btn-primary group inline-flex items-center gap-2"
              aria-describedby="about-heading"
            >
              {cta.label || 'Contact'}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

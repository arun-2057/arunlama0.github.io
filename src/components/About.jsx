import { config } from '../config';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const { heading, cta } = config;
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 md:py-24 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700"
      role="region"
      ref={ref}
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className={`mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 id="about-heading" className="text-xl md:text-2xl font-bold mb-3 text-slate-700 dark:text-slate-300 uppercase tracking-wide">
            {heading}
          </h2>
          <div className="h-0.5 w-12 bg-gradient-to-r from-slate-600 to-teal-600 mx-auto"></div>
        </div>

        {/* Main bio */}
        <div className={`mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
          <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-base mb-4">
            {config.aboutBio}
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
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
              className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 font-medium rounded-lg transition-all"
              aria-describedby="about-heading"
            >
              {cta.label || 'Contact'}
              <span>→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
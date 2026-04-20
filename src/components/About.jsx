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

        {/* New Philosophy Section */}
        <div className={`mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
          <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 uppercase tracking-wide">
            My Philosophy: Architecture Over Algorithms
          </h3>
          <blockquote className="swiss-card p-8 bg-slate-50 dark:bg-[#111111]/80 backdrop-blur-md border-l-4 border-indigo-600 dark:border-indigo-400 hover-lift text-left">
            <p className="text-slate-900 dark:text-slate-100 leading-relaxed italic mb-4">
              "I believe that the most powerful machine learning models are useless if they aren't built on a foundation of clean, resilient data architecture. My approach is rooted in the 'Data-First' mindset: I prioritize engineering robust ETL pipelines and meaningful feature selection before a single line of model code is written.
            </p>
            <p className="text-slate-900 dark:text-slate-100 leading-relaxed italic">
              To me, data science isn't just about achieving high accuracy on a test set; it's about building 'frugal' AI—systems that are optimized for the real world. Whether that's deploying RAG pipelines that run on limited VRAM or forecasting sales for global retailers, I focus on creating solutions that are as efficient as they are accurate. I don't just build models; I build the pipelines that make them sustainable."
            </p>
          </blockquote>
        </div>

        {/* CTA Button */}
        {cta && cta.href && (
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
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

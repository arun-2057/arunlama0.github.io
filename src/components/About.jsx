import { config } from '../config';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const { heading, aboutDetails, heroTags: skills, cta } = config;
  const { ref, isVisible } = useIntersectionObserver();

  const pullQuote = "Transforming raw data into actionable insights through statistical rigor and machine learning.";
  
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/10"
      role="region"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className={`mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 id="about-heading" className="text-headline mb-4 text-indigo-600 dark:text-indigo-400 uppercase tracking-wide font-bold">
            {heading}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 dark:from-indigo-400 to-indigo-600/40 dark:to-indigo-400/40"></div>
        </div>

        {/* Main bio with pull quote */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Bio text */}
          <div className={`lg:col-span-2 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
            <p className="text-slate-900 dark:text-slate-100 leading-relaxed max-w-3xl text-lg mb-6">
              {config.bio}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl text-base">
              I combine technical expertise with business acumen to solve real-world challenges. Whether it's building predictive models, optimizing pipelines, or designing interactive dashboards, I focus on creating solutions that drive measurable impact.
            </p>
          </div>

          {/* Pull Quote */}
          <div className={`lg:col-span-1 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
            <blockquote className="swiss-card p-6 bg-slate-50 dark:bg-[#111111]/80 backdrop-blur-md border-l-4 border-indigo-600 dark:border-indigo-400 hover-lift">
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold italic mb-4 text-lg">"{pullQuote}"</p>
              <footer className="text-xs text-slate-500 dark:text-slate-400">My philosophy</footer>
            </blockquote>
          </div>
        </div>

        {/* About Details Cards */}
        <div className={`mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-tight">Quick Facts</h3>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutDetails.map(({ label, value }, index) => (
              <div 
                key={label} 
                className="swiss-card accent-left p-6 bg-slate-50 dark:bg-[#111111]/80 backdrop-blur-md hover-lift transition-all group animate-cascade border border-slate-200 dark:border-white/5"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <dt className="font-bold text-indigo-600 dark:text-indigo-400 tracking-tight mb-2 uppercase text-sm group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                  {label}
                </dt>
                <dd className="text-slate-900 dark:text-slate-100 font-semibold text-lg">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Skills Tags */}
        <div className={`mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-tight">Core Competencies</h3>
          <ul className="flex flex-wrap gap-3" aria-label="Key skills">
            {skills.map((s, index) => (
              <li key={s}>
                <span
                  className="px-5 py-2.5 bg-slate-50 dark:bg-[#1A1A1A] text-sm font-semibold rounded-none border border-indigo-600/40 dark:border-indigo-500/40 hover:border-indigo-600 dark:hover:border-indigo-500 hover:bg-indigo-600/10 dark:hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-500 transition-all cursor-default tracking-tight text-indigo-600 dark:text-indigo-500 group hover-lift animate-slideUp"
                  tabIndex={0}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  ⚡ {s}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        {cta && cta.href && (
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
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

import { config } from '../config';

export default function About() {
  const { heading, aboutDetails, heroTags: skills, cta } = config;
  
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-12 bg-navy-light dark:bg-navy-dark"
      role="region"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 id="about-heading" className="text-headline mb-8 text-brand uppercase tracking-wide">
          {heading}
        </h2>

        <p className="text-gray-300 dark:text-gray-300 leading-relaxed max-w-3xl text-lg mb-8">
          {config.bio}
        </p>

        <dl className="mt-8 grid-swiss grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-base">
          {aboutDetails.map(({ label, value }) => (
            <div key={label} className="swiss-card accent-left shimmer-border p-5 bg-navy-light dark:bg-slateDark hover-lift">
              <dt className="font-bold text-white dark:text-white tracking-tight mb-2 uppercase">{label}</dt>
              <dd className="text-gray-300 dark:text-gray-300">{value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-10 flex flex-wrap gap-3" aria-label="Key skills">
          {skills.map((s) => (
            <li key={s}>
              <span
                className="px-5 py-2.5 bg-navy-light dark:bg-slateDark text-sm font-semibold rounded-none border-l-2 border-brand hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand transition-all cursor-default tracking-tight text-brand swiss-card accent-left"
                tabIndex={0}
              >
                {s}
              </span>
            </li>
          ))}
        </ul>

        {cta && cta.href && (
          <div className="mt-10">
            <a
              href={cta.href}
              className="glow-on-hover inline-block bg-brand text-navy-dark px-8 py-4 font-bold tracking-tight shadow-swiss hover:shadow-swiss-hover transition-all"
              aria-describedby="about-heading"
            >
              {cta.label || 'Contact'}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

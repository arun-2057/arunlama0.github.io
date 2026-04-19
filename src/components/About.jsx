import { config } from '../config';

export default function About() {
  const { heading, aboutDetails, heroTags: skills, cta } = config;
  
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 bg-white dark:bg-slateDark"
      role="region"
    >
      <div className="max-w-max mx-auto px-4">
        <h2 id="about-heading" className="text-display mb-8 text-brand">
          {heading}
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl text-xl mb-10">
          {config.bio}
        </p>

        <dl className="mt-8 grid-swiss grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-base text-gray-600 dark:text-gray-400">
          {aboutDetails.map(({ label, value }) => (
            <div key={label} className="swiss-card p-5 bg-white dark:bg-slateDark hover-lift">
              <dt className="font-bold text-gray-900 dark:text-white tracking-tight mb-2">{label}</dt>
              <dd className="text-gray-600 dark:text-gray-400">{value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-10 flex flex-wrap gap-3" aria-label="Key skills">
          {skills.map((s) => (
            <li key={s}>
              <span
                className="px-5 py-2.5 bg-white dark:bg-slateDark text-sm font-semibold rounded-none border-2 border-gray-900 dark:border-white hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand transition-all cursor-default tracking-tight"
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
              className="glow-on-hover inline-block bg-brand text-white px-8 py-4 font-bold tracking-tight shadow-swiss hover:shadow-swiss-hover transition-all"
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

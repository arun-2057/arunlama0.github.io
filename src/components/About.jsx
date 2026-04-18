import { config } from '../config';

export default function About() {
  const { heading, description, aboutDetails, heroTags: skills, cta } = config;
  
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      role="region"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
          {heading}
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-prose text-lg mb-8">
          {description}
        </p>

        <dl className="mt-6 grid sm:grid-cols-2 gap-4 text-base text-gray-600 dark:text-gray-400">
          {aboutDetails.map(({ label, value }) => (
            <div key={label} className="p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 shadow-soft hover-lift">
              <dt className="font-semibold text-gray-800 dark:text-gray-200">{label}</dt>
              <dd className="text-gray-600 dark:text-gray-400 mt-1">{value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-8 flex flex-wrap gap-3" aria-label="Key skills">
          {skills.map((s) => (
            <li key={s}>
              <span
                className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/30 dark:to-cyan-900/30 text-sm rounded-full text-gray-800 dark:text-gray-200 transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-brand font-medium border border-indigo-100 dark:border-indigo-800"
                tabIndex={0}
              >
                {s}
              </span>
            </li>
          ))}
        </ul>

        {cta && cta.href && (
          <div className="mt-8">
            <a
              href={cta.href}
              className="glow-on-hover inline-block bg-brand text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all font-semibold"
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

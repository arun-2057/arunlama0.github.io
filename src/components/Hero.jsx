import { config } from '../config';

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="pt-32 md:pt-40 pb-16 bg-navy-base dark:bg-navy-dark">
      <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 card-anim">
          <h1 id="hero-heading" className="text-display mb-6">
            <span className="text-brand">{config.personal.name}</span>
          </h1>
          <p className="text-headline text-gray-400 dark:text-gray-400 mb-8 font-normal">
            {config.personal.title}
          </p>
          <p className="text-lg text-gray-300 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl">
            {config.bio}
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            <a
              href="#projects"
              className="glow-on-hover inline-block bg-brand text-navy-dark px-8 py-4 font-bold tracking-tight shadow-swiss hover:shadow-swiss-hover focus:outline-none focus:ring-2 focus:ring-brand-light transition-all"
            >
              View Projects
            </a>
            <a
              href={config.resumePath}
              download
              className="inline-block border-2 border-brand px-8 py-4 font-bold tracking-tight hover:bg-brand hover:text-navy-dark hover:border-brand dark:hover:bg-brand dark:hover:text-navy-dark transition-all swiss-card"
            >
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {config.heroTags.map((tag) => (
              <span key={tag} className="px-5 py-2.5 bg-navy-light dark:bg-slateDark text-sm font-semibold rounded-none border border-brand/50 hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand transition-all cursor-default tracking-tight text-brand">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4 card-anim" style={{ animationDelay: '200ms' }}>
          <div className="swiss-card p-6 h-full flex flex-col justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-brand mb-2">Data-Driven Insights</h3>
              <p className="text-sm text-gray-400 dark:text-gray-400">Transforming raw data into actionable business strategies through advanced analytics and machine learning.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

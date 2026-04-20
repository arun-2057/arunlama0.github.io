import { config } from '../config';
import { StatisticsCard } from './StatisticsCard';

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="pt-32 md:pt-40 pb-24 bg-dark-base dark:bg-dark-base">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main hero content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8 card-anim">
            <h1 id="hero-heading" className="text-display mb-6">
              <span className="text-brand">{config.personal.name}</span>
            </h1>
            <p className="text-headline text-gray-300 dark:text-gray-300 mb-8 font-normal">
              {config.personal.title}
            </p>
            <p className="text-lg text-gray-300 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl">
              {config.bio}
            </p>

            {/* Enhanced CTAs with icons */}
            <div className="flex flex-wrap gap-4 items-center mb-8">
              <a
                href="#projects"
                className="btn btn-primary group relative overflow-hidden"
              >
                <span className="relative flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Projects
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
              <a
                href={config.resumePath}
                download
                className="btn btn-secondary group"
              >
                <span className="flex items-center gap-2 group-hover:gap-3 transition-all">
                  Download Resume
                  <span className="group-hover:scale-110 transition-transform duration-300">↓</span>
                </span>
              </a>
            </div>

            {/* Hero tags with improved styling */}
            <div className="flex flex-wrap gap-3">
              {config.heroTags.map((tag, index) => (
                <span 
                  key={tag} 
                  className="px-5 py-2.5 bg-dark-light dark:bg-dark-light text-sm font-semibold rounded-none border border-brand/40 hover:border-brand hover:text-brand hover:bg-dark-lighter dark:hover:border-brand dark:hover:text-brand transition-all cursor-default tracking-tight text-brand group animate-on-scroll"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="group-hover:scale-110 inline-block transition-transform">#{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Hero highlight card */}
          <div className="lg:col-span-4 card-anim" style={{ animationDelay: '200ms' }}>
            <div className="swiss-card p-6 h-full flex flex-col justify-center bg-dark-light hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-xl font-bold text-brand mb-2">Data-Driven Insights</h3>
                <p className="text-sm text-gray-400 dark:text-gray-400 leading-relaxed">Transforming raw data into actionable business strategies through advanced analytics and machine learning.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-brand/10">
          <StatisticsCard 
            stat="50+"
            icon="🤖"
            label="ML Models Built"
          />
          <StatisticsCard 
            stat="91%"
            icon="🎯"
            label="Avg Accuracy Rate"
          />
          <StatisticsCard 
            stat="10+"
            icon="💼"
            label="Years Experience"
          />
          <StatisticsCard 
            stat="25K+"
            icon="📈"
            label="Data Records Processed"
          />
        </div>
      </div>
    </section>
  )
}

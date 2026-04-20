import { motion } from 'framer-motion';
import { config } from '../config';

export default function Hero() {
  const stats = [
    { value: '50+', label: 'ML Models Built' },
    { value: '91%', label: 'Avg Accuracy Rate' },
    { value: '10+', label: 'Years Experience' },
    { value: '25K+', label: 'Data Records Processed' },
  ];

  return (
    <section id="hero" aria-labelledby="hero-heading" className="pt-32 md:pt-40 pb-24 bg-[#121212] dark:bg-[#121212]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main hero content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8 card-anim">
            {/* Gradient H1 */}
            <h1 id="hero-heading" className="text-display mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                {config.personal.name}
              </span>
            </h1>
            <p className="text-headline text-gray-300 dark:text-gray-300 mb-8 font-normal">
              {config.personal.title}
            </p>
            <p className="text-lg text-gray-300 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl">
              {config.bio}
            </p>

            {/* Enhanced CTAs with clear hierarchy */}
            <div className="flex flex-wrap gap-4 items-center mb-8">
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[#6366f1] text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#4f46e5] hover:shadow-lg transition-all group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                View Projects
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.a>
              <a
                href={config.resumePath}
                download
                className="inline-flex items-center gap-2 text-gray-300 hover:text-[#6366f1] underline underline-offset-4 transition-colors group"
              >
                Download Resume
                <span className="group-hover:translate-x-1 transition-transform duration-300">↓</span>
              </a>
            </div>

            {/* Hero tags with improved styling */}
            <div className="flex flex-wrap gap-3">
              {config.heroTags.map((tag, index) => (
                <motion.span 
                  key={tag} 
                  className="px-5 py-2.5 bg-[#1A1A1A] text-sm font-semibold border border-[#6366f1]/40 hover:border-[#6366f1] hover:text-[#6366f1] transition-all cursor-default tracking-tight text-[#6366f1]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  #{tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Hero highlight card */}
          <div className="lg:col-span-4 card-anim" style={{ animationDelay: '200ms' }}>
            <div className="swiss-card p-6 h-full flex flex-col justify-center bg-[#1A1A1A] hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-xl font-bold text-[#6366f1] mb-2">Data-Driven Insights</h3>
                <p className="text-sm text-gray-400 dark:text-gray-400 leading-relaxed">Transforming raw data into actionable business strategies through advanced analytics and machine learning.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clean borderless stats section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold text-[#6366f1] mb-2">{stat.value}</div>
              <p className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { config } from '../config';

export default function Hero() {
  const profileSrc = '/profile.jpg';
  const profile400 = '/profile_optimized-400.jpg';
  const profile200 = '/profile_optimized-200.jpg';
  const profileWebp400 = '/profile_optimized-400.webp';
  const profileWebp200 = '/profile_optimized-200.webp';
  return (
    <section id="hero" aria-labelledby="hero-heading" className="pt-32 md:pt-40 pb-16 bg-offWhite dark:bg-charcoal">
      <div className="max-w-max mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 card-anim">
          <h1 id="hero-heading" className="text-display mb-6">
            <span className="text-brand">{config.personal.name}</span>
          </h1>
          <p className="text-headline text-gray-600 dark:text-gray-400 mb-8 font-normal">
            {config.personal.title}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl">
            {config.personal.bio}
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            <a
              href="#projects"
              className="glow-on-hover inline-block bg-brand text-white px-8 py-4 font-bold tracking-tight shadow-swiss hover:shadow-swiss-hover focus:outline-none focus:ring-2 focus:ring-brand-light transition-all"
            >
              View Projects
            </a>
            <a
              href={config.resumePath}
              download
              className="inline-block border-2 border-gray-900 dark:border-white px-8 py-4 font-bold tracking-tight hover:bg-brand hover:text-white hover:border-brand dark:hover:bg-brand dark:hover:text-white transition-all swiss-card"
            >
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {config.heroTags.map((tag) => (
              <span key={tag} className="px-5 py-2.5 bg-white dark:bg-slateDark text-sm font-semibold rounded-none border-2 border-gray-900 dark:border-white hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand transition-all cursor-default tracking-tight">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end card-anim" style={{ animationDelay: '100ms' }}>
          <div className="relative group">
            {/* Swiss-style geometric frame */}
            <div className="absolute -inset-4 border-4 border-brand rounded-none shadow-swiss"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-gray-900 dark:border-white rounded-none transform group-hover:translate-x-1 group-hover:translate-y-1 transition duration-300">
              <picture>
                <source type="image/webp" srcSet={`${profileWebp200} 200w, ${profileWebp400} 400w`} sizes="(max-width: 768px) 50vw, 200px" />
                <img
                  src={profileSrc}
                  srcSet={`${profile200} 200w, ${profile400} 400w`}
                  sizes="(max-width: 768px) 50vw, 200px"
                  alt="Headshot of Arun Lama"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

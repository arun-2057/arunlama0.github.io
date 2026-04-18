import profile from '/profile.jpg';
import { config } from '../config';

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="pt-24 md:pt-36 pb-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="card-anim">
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="gradient-text">{config.personal.name}</span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-600 dark:text-gray-400 font-semibold mt-2 block">{config.personal.title}</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed max-w-prose">
            {config.personal.bio}
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-6">
            <a
              href="#projects"
              className="glow-on-hover inline-block bg-brand text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-light transition-all transform hover:-translate-y-0.5 font-semibold"
            >
              View Projects
            </a>
            <a
              href={config.resumePath}
              download
              className="inline-block border-2 border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand transition-all font-semibold hover-lift"
            >
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {config.heroTags.map((tag) => (
              <span key={tag} className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/30 dark:to-cyan-900/30 text-sm rounded-full font-medium text-gray-700 dark:text-gray-300 border border-indigo-100 dark:border-indigo-800 hover:scale-105 transition-transform cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end card-anim">
          <div className="relative group">
            {/* Decorative gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity animate-pulse-slow"></div>
            <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform group-hover:scale-105 transition duration-300">
              <picture>
                <source type="image/webp" srcSet={`${profile.replace('.jpg','-400.webp')} 400w, ${profile.replace('.jpg','-200.webp')} 200w`} sizes="(max-width: 768px) 50vw, 200px" />
                <img
                  src={profile}
                  srcSet={`${profile.replace('.jpg','-400.jpg')} 400w, ${profile.replace('.jpg','-200.jpg')} 200w`}
                  sizes="(max-width: 768px) 50vw, 200px"
                  alt="Headshot of Arun Lama"
                  className="w-full h-full object-cover"
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

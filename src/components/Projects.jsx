import { config } from '../config';

export default function Projects() {
  const projects = config.projects;

  function handleImgError(e) {
    e.currentTarget.onerror = null
    e.currentTarget.src =
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675' viewBox='0 0 1200 675'><rect width='100%' height='100%' fill='%23e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23737482' font-family='Inter, Arial, sans-serif' font-size='28'>Image unavailable</text></svg>`
      )
  }

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800" role="region" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold mb-10 gradient-text">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6" role="list">
          {projects.map((p, index) => (
            <article
              key={p.title}
              role="listitem"
              aria-label={`Project: ${p.title}. ${p.desc}`}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-soft overflow-hidden group relative focus-within:ring-2 focus-within:ring-brand hover:shadow-medium transition-all hover-lift border border-gray-100 dark:border-gray-600"
            >
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open project ${p.title} - ${p.desc} in a new tab`}
                className="block"
              >
                <div className="relative overflow-hidden">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`${p.image.replace('.jpg', '-800.webp')} 800w, ${p.image.replace('.jpg', '-400.webp')} 400w`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <img
                      src={p.image}
                      srcSet={`${p.image} 800w, ${p.image.replace('.jpg', '-400.jpg')} 400w`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      alt={`${p.title} project screenshot showing ${p.tags.join(', ')}`}
                      loading="lazy"
                      width="800"
                      height="600"
                      onError={handleImgError}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </picture>
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200 group-hover:text-brand transition-colors">{p.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4" aria-label={`Technologies used in ${p.title}`}>
                    {p.tags.map((t, i) => (
                      <span
                        key={t + i}
                        className="text-xs bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/30 dark:to-cyan-900/30 px-3 py-1.5 rounded-full font-medium text-gray-700 dark:text-gray-300 border border-indigo-100 dark:border-indigo-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg font-semibold text-sm glow-on-hover">
                    View Project <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

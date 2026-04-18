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
    <section id="projects" className="py-20 bg-offWhite dark:bg-charcoal" role="region" aria-labelledby="projects-heading">
      <div className="max-w-max mx-auto px-4">
        <h2 id="projects-heading" className="text-display mb-12 text-brand">Selected Work</h2>
        <div className="grid-swiss grid md:grid-cols-2 gap-8" role="list">
          {projects.map((p, index) => (
            <article
              key={p.title}
              role="listitem"
              aria-label={`Project: ${p.title}. ${p.desc}`}
              className="swiss-card bg-white dark:bg-slateDark group relative focus-within:ring-2 focus-within:ring-brand"
            >
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open project ${p.title} - ${p.desc} in a new tab`}
                className="block"
              >
                <div className="relative overflow-hidden border-b-2 border-gray-900 dark:border-white">
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
                      className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </picture>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-3 text-gray-900 dark:text-white group-hover:text-brand transition-colors tracking-tight">{p.title}</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6" aria-label={`Technologies used in ${p.title}`}>
                    {p.tags.map((t, i) => (
                      <span
                        key={t + i}
                        className="text-xs font-semibold px-4 py-2 rounded-none bg-white dark:bg-slateDark border-2 border-gray-900 dark:border-white hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 bg-brand text-white px-5 py-3 font-bold text-sm glow-on-hover tracking-tight">
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

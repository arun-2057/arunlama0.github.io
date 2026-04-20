import { config } from '../config';

export default function Projects() {
  const projects = config.projects;

  function handleImgError(e) {
    e.currentTarget.onerror = null
    e.currentTarget.src =
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675' viewBox='0 0 1200 675'><rect width='100%' height='100%' fill='%230F2440'/></svg>`
      )
  }

  return (
    <section id="projects" className="py-16 bg-offWhite dark:bg-charcoal" role="region" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="projects-heading" className="text-headline mb-10 text-brand tracking-wide uppercase font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" role="list">
          {projects.map((p, index) => (
            <article
              key={p.title}
              role="listitem"
              aria-label={`Project: ${p.title}. ${p.desc}`}
              className="swiss-card bg-white dark:bg-slateDark group relative focus-within:ring-2 focus-within:ring-brand overflow-hidden"
            >
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open project ${p.title} - ${p.desc} in a new tab`}
                className="block h-full"
              >
                <div className="relative overflow-hidden border-b border-gray-200 dark:border-gray-700">
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
                      height="450"
                      onError={handleImgError}
                      className="w-full h-48 md:h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </picture>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-brand transition-colors tracking-tight">{p.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4" aria-label={`Technologies used in ${p.title}`}>
                    {p.tags && p.tags.length > 0 ? (
                      p.tags.map((t, i) => (
                        <span
                          key={t + i}
                          className="text-xs font-medium px-3 py-1.5 rounded bg-white dark:bg-slateDark border border-gray-300 dark:border-gray-600 hover:border-brand hover:text-brand dark:hover:border-brand transition-all text-gray-800 dark:text-gray-200"
                        >
                          {t}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-gray-500">No tags specified</span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-brand text-white px-4 py-2 font-semibold text-xs uppercase tracking-wider glow-on-hover">
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

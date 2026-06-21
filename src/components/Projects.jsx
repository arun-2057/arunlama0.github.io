import { useState } from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const projects = config.projects;
  const [selectedProject, setSelectedProject] = useState(null);
  
  function handleImgError(e) {
    e.currentTarget.onerror = null
    e.currentTarget.src =
      "data:image/svg+xml.utf8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675' viewBox='0 0 1200 675'><rect width='100%' height='100%' fill='%23334155'/></svg>`
      )
  }

  return (
    <section id="projects" className="py-16 md:py-20 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700" role="region" aria-labelledby="projects-heading">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-0.5 w-10 bg-gradient-to-r from-teal-600 to-slate-600 rounded-full"></div>
            <h2 id="projects-heading" className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-tight uppercase">Featured Work</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-2 leading-relaxed">
            Hand-picked projects showcasing expertise in machine learning, data engineering, and business intelligence solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" role="list">
          {projects.map((p, index) => (
            <motion.article
              key={p.title}
              role="listitem"
              aria-label={`Project: ${p.title}. ${p.desc}`}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(p)}
            >
              {/* Image section */}
              <div className="relative overflow-hidden rounded-t-xl h-56 bg-slate-100 dark:bg-slate-700">
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
                    alt={`${p.title} project screenshot`}
                    loading="lazy"
                    width="800"
                    height="450"
                    onError={handleImgError}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>

              {/* Content section */}
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-200">{p.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2">
                  {p.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4" aria-label={`Technologies used in ${p.title}`}>
                  {p.tags && p.tags.length > 0 ? (
                    p.tags.map((t, i) => (
                      <span 
                        key={t}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-500">No tags specified</span>
                  )}
                </div>

                {/* Button */}
                <button 
                  className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 font-medium text-xs rounded-lg transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(p);
                  }}
                >
                  View Details 
                  <span>→</span>
                </button>

                {/* External link button */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open project ${p.title} in new tab`}
                  className="ml-3 inline-flex items-center text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                >
                  <span className="text-sm">↗</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  )
}
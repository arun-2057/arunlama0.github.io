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
        `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675' viewBox='0 0 1200 675'><rect width='100%' height='100%' fill='%231A1A1A'/></svg>`
      )
  }

  return (
    <section id="projects" className="py-24 md:py-32 bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/10" role="region" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header with accent */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full"></div>
            <h2 id="projects-heading" className="text-5xl md:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight uppercase">Featured Work</h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mt-4 leading-relaxed">Hand-picked projects showcasing expertise in machine learning, data engineering, and business intelligence solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" role="list">
          {projects.map((p, index) => (
            <motion.article
              key={p.title}
              role="listitem"
              aria-label={`Project: ${p.title}. ${p.desc}`}
              className="group relative overflow-hidden rounded-2xl cursor-pointer focus-within:ring-2 focus-within:ring-cyan-500 dark:focus-within:ring-cyan-400 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(p)}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(p)}
              tabIndex={0}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
            >
              {/* Card background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 dark:from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Border with gradient */}
              <div className="absolute inset-0 rounded-2xl border border-slate-200 dark:border-white/10 group-hover:border-cyan-400/50 dark:group-hover:border-cyan-500/40 transition-colors duration-300"></div>
              
              {/* Image section with enhanced hover */}
              <div className="relative overflow-hidden rounded-t-2xl h-64 md:h-80 bg-slate-900">
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
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                  />
                </picture>
                
                {/* Accent bar */}
                <div className="absolute top-0 left-0 h-1 w-16 bg-gradient-to-r from-cyan-500 to-indigo-600"></div>
                
                {/* Metrics overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-end justify-between p-6">
                  <div></div>
                  <div className="text-white">
                    <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">{p.metrics}</div>
                    <p className="text-white/80 text-sm mt-2 font-semibold">Key Achievement</p>
                  </div>
                </div>
              </div>

              {/* Content section */}
              <div className="p-7 relative z-10">
                <h3 className="font-black text-2xl mb-3 text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors tracking-tight">{p.title}</h3>
                <p className="text-base text-slate-700 dark:text-slate-300 mb-5 leading-relaxed line-clamp-2">
                  {p.desc}
                </p>

                {/* Tech tags with vibrant colors */}
                <div className="flex flex-wrap gap-2 mb-6" aria-label={`Technologies used in ${p.title}`}>
                  {p.tags && p.tags.length > 0 ? (
                    p.tags.map((t, i) => (
                      <span 
                        key={t}
                        className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-600/20 dark:from-cyan-500/10 dark:to-indigo-600/10 text-cyan-700 dark:text-cyan-400 text-xs font-bold border border-cyan-400/40 dark:border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-400 hover:bg-cyan-500/30 dark:hover:bg-cyan-500/20 transition-all cursor-default tracking-wide uppercase"
                      >
                        {t}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-500">No tags specified</span>
                  )}
                </div>

                {/* View Details Button - Larger and more prominent */}
                <motion.button 
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 dark:from-cyan-600 dark:to-indigo-700 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider rounded-lg hover:shadow-xl transition-all group/btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(p);
                  }}
                >
                  View Details 
                  <span className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </motion.button>
              </div>

              {/* External link button */}
              <motion.a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open project ${p.title} in new tab`}
                className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-cyan-500 to-indigo-600 dark:from-cyan-600 dark:to-indigo-700 hover:shadow-lg rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform"
                whileHover={{ scale: 1.15 }}
              >
                <span className="text-xl">↗</span>
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

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
    <section id="projects" className="py-16 bg-[#121212] dark:bg-[#121212]" role="region" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 id="projects-heading" className="text-headline mb-3 text-[#6366f1] tracking-wide uppercase font-bold">Projects</h2>
          <p className="text-gray-400 max-w-2xl">Featured data science and analytics projects showcasing my expertise in machine learning, ETL pipelines, and business intelligence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 animate-stagger" role="list">
          {projects.map((p, index) => (
            <article
              key={p.title}
              role="listitem"
              aria-label={`Project: ${p.title}. ${p.desc}`}
              className="swiss-card bg-[#1A1A1A] dark:bg-[#1A1A1A] group relative focus-within:ring-2 focus-within:ring-[#6366f1] overflow-hidden cursor-pointer animate-cascade hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(p)}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(p)}
              tabIndex={0}
            >
              {/* Image section with purple accent bar */}
              <div className="relative overflow-hidden border-b border-[#2A2A2A] border-l-4 border-l-[#6366f1]">
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
                    className="w-full h-48 md:h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                </picture>
                
                {/* Metrics overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <div className="text-white text-sm font-semibold">
                    <div className="text-[#6366f1] text-lg">{p.metrics}</div>
                  </div>
                </div>
              </div>

              {/* Content section */}
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2 text-white group-hover:text-[#6366f1] transition-colors tracking-tight">{p.title}</h3>
                <p className="text-sm text-gray-400 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {p.desc}
                </p>

                {/* Purple pill tags */}
                <div className="flex flex-wrap gap-2 mb-4" aria-label={`Technologies used in ${p.title}`}>
                  {p.tags && p.tags.length > 0 ? (
                    p.tags.map((t) => (
                      <span 
                        key={t}
                        className="px-3 py-1 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-xs font-semibold border border-[#6366f1]/30 hover:border-[#6366f1] transition-colors cursor-default"
                      >
                        {t}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-gray-500">No tags specified</span>
                  )}
                </div>

                {/* Solid purple CTA Button */}
                <motion.button 
                  className="inline-flex items-center gap-1.5 bg-[#6366f1] text-white px-4 py-2 font-semibold text-xs uppercase tracking-wider hover:bg-[#4f46e5] hover:shadow-lg transition-all"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(p);
                  }}
                >
                  View Details 
                  <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </motion.button>
              </div>

              {/* External link icon */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open project ${p.title} in new tab`}
                className="absolute top-4 right-4 w-10 h-10 bg-[#121212]/70 hover:bg-[#6366f1] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
              >
                🔗
              </a>
            </article>
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

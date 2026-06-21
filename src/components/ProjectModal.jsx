import ColoredBadge from './ColoredBadge';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 max-w-xl w-full rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="300"><rect fill="#334155" width="100%" height="100%"/></svg>'
              );
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-2">{project.title}</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">{project.desc}</p>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-medium text-slate-700 dark:text-slate-300 text-xs uppercase mb-2">🎯 Challenge</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">{project.challenge || project.desc}</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-700 dark:text-slate-300 text-xs uppercase mb-2">Solution</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">{project.solution || project.metrics}</p>
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded mb-6 border-l-2 border-teal-600">
              <p className="text-xs font-medium text-teal-600 dark:text-teal-400 uppercase mb-1">Impact Achieved</p>
              <p className="text-xs text-slate-700 dark:text-slate-300">{project.metrics}</p>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="font-medium text-slate-700 dark:text-slate-300 text-xs uppercase mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <ColoredBadge key={tag} tag={tag} />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-medium text-xs text-center transition-colors"
            >
              View Full Project →
            </a>
            <button
              onClick={onClose}
              className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 px-4 py-2 rounded-lg font-medium text-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
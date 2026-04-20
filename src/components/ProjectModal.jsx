import { useState } from 'react';
import ColoredBadge from './ColoredBadge';
import { AnimatedCheckmark } from './AnimatedCheckmark';

/**
 * Case study modal for detailed project information
 */
export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-dark-light max-w-2xl w-full rounded-lg overflow-hidden animate-slideUp max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400"><rect fill="#1A1A1A" width="100%" height="100%"/></svg>'
              );
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark-base/90 flex items-center justify-center text-white hover:bg-brand transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
          <p className="text-gray-400 mb-6">{project.desc}</p>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-bold text-brand uppercase text-sm mb-3 flex items-center gap-2">
                <span>🎯</span> Challenge
              </h3>
              <p className="text-gray-300">{project.challenge || project.desc}</p>
            </div>
            <div>
              <h3 className="font-bold text-brand uppercase text-sm mb-3 flex items-center gap-2">
                <AnimatedCheckmark size="small" /> Solution
              </h3>
              <p className="text-gray-300">{project.solution || project.metrics}</p>
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="bg-dark-base p-4 rounded mb-8 border-l-2 border-brand">
              <p className="text-sm font-semibold text-brand uppercase mb-2">Impact Achieved</p>
              <p className="text-gray-200">{project.metrics}</p>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="font-bold text-brand uppercase text-sm mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <ColoredBadge key={tag} tag={tag} />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn btn-primary text-center"
            >
              View Full Project →
            </a>
            <button
              onClick={onClose}
              className="btn btn-secondary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

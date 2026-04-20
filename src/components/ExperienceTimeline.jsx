import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

/**
 * Experience timeline component
 */
export function TimelineItem({ year, title, description, type = 'education' }) {
  const { ref, isVisible } = useIntersectionObserver();
  
  const icon = type === 'education' ? '🎓' : '💼';

  return (
    <div
      ref={ref}
      className={`relative pl-8 pb-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
    >
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-brand border-4 border-dark-base" />
      <div className="text-sm text-brand font-bold uppercase tracking-wide mb-1">{year}</div>
      <h3 className="text-lg font-bold text-white mb-2">{icon} {title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default function ExperienceTimeline({ items }) {
  return (
    <div className="relative pl-4 before:absolute before:left-1.5 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-brand before:to-brand/50">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
}

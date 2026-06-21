import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function TimelineItem({ year, title, description, type = 'education' }) {
  const { ref, isVisible } = useIntersectionObserver();
  
  const icon = type === 'education' ? '🎓' : '💼';

  return (
    <div
      ref={ref}
      className={`relative pl-6 pb-6 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
    >
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-slate-600 border-2 border-white dark:border-slate-800" />
      <div className="text-xs text-slate-600 font-medium uppercase mb-1">{year}</div>
      <h3 className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">{icon} {title}</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
    </div>
  );
}

export default function ExperienceTimeline({ items }) {
  return (
    <div className="relative pl-3 before:absolute before:left-1 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-300 dark:before:bg-slate-600">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
}
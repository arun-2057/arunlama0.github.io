import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

/**
 * Animated progress bar component with percentage indicator
 * Animates from 0 to target value when in view
 */
export function ProgressBar({ label, level, percentage = 100, hideLabel = false }) {
  const { ref, isVisible } = useIntersectionObserver();
  
  // Convert skill level to percentage
  const getLevelPercentage = (level) => {
    switch(level) {
      case 'Proficient': return 90;
      case 'Familiar': return 70;
      case 'Learning': return 50;
      default: return 40;
    }
  };

  const targetPercentage = getLevelPercentage(level);

  return (
    <div ref={ref} className="mb-4">
      {!hideLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-300">{label}</span>
          <span className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded border ${
            level === 'Proficient' ? 'text-brand border-brand/50 bg-brand/10' :
            level === 'Familiar' ? 'text-accent border-accent/50 bg-accent/10' :
            'text-gray-400 border-gray-500/50 bg-gray-500/10'
          }`}>
            {level}
          </span>
        </div>
      )}
      
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand to-brand-light rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${targetPercentage}%` : '0%',
          }}
        />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

/**
 * Animated counter that counts from 0 to target when visible
 */
export function StatisticsCard({ stat, icon, label }) {
  const { ref, isVisible } = useIntersectionObserver();
  
  const countToValue = (str) => {
    const num = parseInt(str);
    return isNaN(num) ? str : num;
  };

  return (
    <div 
      ref={ref}
      className="swiss-card p-6 bg-dark-light dark:bg-dark-light text-center hover-lift group transition-all duration-300"
    >
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-3xl font-bold text-brand mb-2">
        {isVisible ? (
          <AnimatedNumber value={countToValue(stat)} />
        ) : (
          '0'
        )}
      </div>
      <p className="text-sm text-gray-400 font-medium uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}

function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof value !== 'number') return;
    
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return typeof value === 'number' ? `${count}${value > 100 ? '+' : ''}` : value;
}

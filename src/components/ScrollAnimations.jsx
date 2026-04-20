import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

/**
 * Scroll Trigger Component - Generic scroll animation wrapper
 * Applies animations when element comes into view
 */
export function ScrollTrigger({ 
  children, 
  animation = 'fadeIn',
  delay = 0,
  stagger = false 
}) {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/**
 * Staggered List Component - Animates list items on scroll
 * Each item animates with a delay
 */
export function StaggeredList({ children, itemDelay = 100 }) {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <div ref={ref} className="animate-stagger">
      {children}
    </div>
  );
}

/**
 * Lazy Load Image Component - Shows skeleton while loading
 * Animates in when image loads
 */
export function LazyImage({ 
  src, 
  alt, 
  placeholder = null,
  className = '',
  onLoad = () => {}
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);
  
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    
    img.addEventListener('load', () => {
      setLoaded(true);
      onLoad();
    });
    
    return () => {
      img.removeEventListener('load', onLoad);
    };
  }, [onLoad]);
  
  return (
    <div className="relative overflow-hidden">
      {!loaded && placeholder}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className={`${className} ${loaded ? 'animate-fadeIn' : 'opacity-0'}`}
      />
    </div>
  );
}

/**
 * Counter Animation Component - Animates number counting
 * Useful for statistics and metrics
 */
export function Counter({ end = 100, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useIntersectionObserver();
  
  useEffect(() => {
    if (!isVisible) return;
    
    let current = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);
  
  return (
    <span ref={ref} className="animate-scaleUp">
      {count}{suffix}
    </span>
  );
}

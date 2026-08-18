import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 75 | 100 | 150 | 200 | 300 | 400 | 500;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay,
  direction = 'up',
  threshold = 0.05
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it reveals, we don't need to observe it anymore
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      },
      { threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Build class names dynamically
  const directionClass = 
    direction === 'left' ? 'reveal-left' :
    direction === 'right' ? 'reveal-right' :
    direction === 'down' ? 'reveal-down' :
    direction === 'fade' ? 'reveal-fade' : '';

  const delayClass = delay ? `delay-${delay}` : '';
  const visibleClass = isVisible ? 'reveal-visible' : '';

  return (
    <div
      ref={domRef}
      className={`reveal ${directionClass} ${delayClass} ${visibleClass} ${className}`}
    >
      {children}
    </div>
  );
};

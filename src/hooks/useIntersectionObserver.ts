import { useEffect, useRef, useState } from 'react';

interface AnimationOptions {
  type?: 'fade-in' | 'typewriter' | 'typewriter-number' | 'typewriter-title' | 'typewriter-badge' | 'typewriter-text' | 'typewriter-tech' | 'typewriter-right' | 'typewriter-line';
  delay?: number;
  threshold?: number;
}

const useIntersectionObserver = (options: AnimationOptions = {}) => {
  const { type = 'fade-in', delay = 0, threshold = 0.1 } = options;
  const [observedElements, setObservedElements] = useState<Set<Element>>(new Set());
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                entry.target.classList.add(`animate-${type}`);
              }, delay);
            } else {
              entry.target.classList.add(`animate-${type}`);
            }
          }
        });
      },
      { threshold }
    );

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [type, delay, threshold]);

  const setObservedElement = (element: Element | null) => {
    if (element && !observedElements.has(element)) {
      setObservedElements((prev) => new Set(prev).add(element));
      observer.current?.observe(element);
    }
  };

  return { observedElements, setObservedElement };
};

export default useIntersectionObserver;

import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = () => {
  const [observedElements, setObservedElements] = useState<Set<Element>>(new Set());
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const setObservedElement = (element: Element | null) => {
    if (element && !observedElements.has(element)) {
      setObservedElements((prev) => new Set(prev).add(element));
      observer.current?.observe(element);
    }
  };

  return { observedElements, setObservedElement };
};

export default useIntersectionObserver;

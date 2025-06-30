import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
  startAnimation?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 0,
  speed = 50,
  className = '',
  style = {},
  onComplete,
  startAnimation = false
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      const delayTimer = setTimeout(() => {
        setShouldStart(true);
      }, delay);

      return () => clearTimeout(delayTimer);
    }
  }, [startAnimation, delay]);

  useEffect(() => {
    if (!shouldStart || currentIndex >= text.length) {
      if (currentIndex >= text.length && !isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(text.substring(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, shouldStart, isComplete, onComplete]);

  return (
    <span className={className} style={style}>
      {displayedText}
      {shouldStart && !isComplete && currentIndex < text.length && (
        <span className="typewriter-cursor" />
      )}
    </span>
  );
};

export default TypewriterText; 
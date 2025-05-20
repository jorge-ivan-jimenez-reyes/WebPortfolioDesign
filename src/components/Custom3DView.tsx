// src/components/Custom3DView.tsx
import React, { useState, useRef, memo, useCallback, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

interface PersonaInfo {
  letter: string;
  info: string;
  detail?: string;
}

const personaInfo: PersonaInfo[] = [
  {
    letter: "J",
    info: "Graphic Designer",
    detail: "Passionate about creating visually stunning designs with attention to detail."
  },
  {
    letter: "O",
    info: "Frontend Developer",
    detail: "Skilled in React and modern web technologies to build interactive user experiences."
  },
  {
    letter: "R",
    info: "Responsive Design",
    detail: "Expert in ensuring optimal user experience across all devices and screen sizes."
  },
  {
    letter: "G",
    info: "Growth Mindset",
    detail: "Always learning and staying up-to-date with the latest industry trends and technologies."
  },
  {
    letter: "E",
    info: "Engineer",
    detail: "Software engineer with a strong foundation in computer science principles and problem-solving."
  },
];

const EASTER_EGG_CLICKS = 4;
const EASTER_EGG_TIMEOUT = 2000; // 2 seconds
const EASTER_EGG_DISPLAY_TIME = 5000; // 5 seconds

// Define your custom neon colors with opacity for dark mode
const darkModeColors = [
  "rgba(0, 200, 255, 0.65)",   // Brighter Electric Blue
  "rgba(255, 80, 200, 0.65)",  // Vivid Pink/Magenta
  "rgba(80, 220, 120, 0.65)",  // Bright Mint Green
  "rgba(160, 60, 255, 0.65)",  // Electric Purple
  "rgba(255, 120, 40, 0.65)",  // Vibrant Orange
];

// Define pastel colors for light mode
const lightModeColors = [
  "rgba(100, 149, 237, 0.5)", // cornflower blue
  "rgba(255, 105, 180, 0.5)", // hot pink
  "rgba(50, 205, 50, 0.5)", // lime green
  "rgba(147, 112, 219, 0.5)", // medium purple
  "rgba(255, 165, 0, 0.5)", // orange
];

// Memoized Cell for performance
const Cell: React.FC<{ index: number; total: number }> = memo(({ index, total }) => {
  const { isDarkMode } = useTheme();
  const colors = isDarkMode ? darkModeColors : lightModeColors;
  const [bg, setBg] = useState(
    isDarkMode ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)",
  );
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Make some cells invisible
  const shouldRender = index % 5 !== 0;
  
  if (!shouldRender) {
    return <div className="cell-empty" />;
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBg(randomColor);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    timerRef.current = window.setTimeout(() => {
      setBg(isDarkMode ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)");
      timerRef.current = null;
    }, 1000); // delay of 1 second before reverting
  };

  return (
    <div
      className={`cell transition-all duration-300 ${isHovered ? "scale-110 z-10" : ""}`}
      style={{
        background: bg,
        aspectRatio: "1 / 1",
        boxShadow: isHovered
          ? `0 0 10px ${isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.2)"}`
          : "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
});

Cell.displayName = "Cell";

const Custom3DView: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedInfo, setSelectedInfo] = useState<PersonaInfo | null>(null);
  const [clickCounts, setClickCounts] = useState<{ [key: string]: number }>({});
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  
  // Create an array for 900 squares (30 x 30 grid) - more manageable than 2500
  const squares = Array.from({ length: 900 }, (_, i) => i);

  const handleLetterClick = useCallback(
    (info: PersonaInfo) => {
      setSelectedInfo(info);

      // Easter egg logic
      const newClickCounts = { ...clickCounts };
      newClickCounts[info.letter] = (newClickCounts[info.letter] || 0) + 1;
      setClickCounts(newClickCounts);

      if (newClickCounts[info.letter] === EASTER_EGG_CLICKS) {
        setTimeout(() => {
          setShowEasterEgg(true);
        }, EASTER_EGG_TIMEOUT);
      }

      // Reset click count after 2 seconds
      setTimeout(() => {
        setClickCounts((prevCounts) => ({
          ...prevCounts,
          [info.letter]: 0,
        }));
      }, EASTER_EGG_TIMEOUT);
    },
    [clickCounts],
  );

  const handleLetterHover = useCallback((info: PersonaInfo, entering: boolean) => {
    if (entering) {
      setCursorText(info.info);
    } else {
      setCursorText("");
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setHoverPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    if (showEasterEgg) {
      const timer = setTimeout(() => {
        setShowEasterEgg(false);
      }, EASTER_EGG_DISPLAY_TIME);

      return () => clearTimeout(timer);
    }
  }, [showEasterEgg]);

  return (
    <div 
      className={`w-screen h-screen overflow-hidden relative ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-black"
          : "bg-gradient-to-br from-gray-50 to-white"
      }`}
      style={{ overscrollBehavior: "none" }}
      onMouseMove={handleMouseMove}
    >
      {/* Custom cursor text follower */}
      {cursorText && (
        <div 
          className={`fixed pointer-events-none z-50 p-2 rounded-md text-sm font-medium transition-opacity duration-200 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black shadow-lg"
          }`}
          style={{ 
            left: `${hoverPosition.x + 15}px`, 
            top: `${hoverPosition.y + 15}px`,
            opacity: cursorText ? 1 : 0,
            backdropFilter: "blur(4px)",
          }}
        >
          {cursorText}
        </div>
      )}
      
      {/* Container with 3D perspective */}
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          width: "300vmin",
          height: "300vmin",
          display: "grid",
          gridTemplateColumns: "repeat(30, 1fr)",
          gridTemplateRows: "repeat(30, 1fr)",
          gap: "2px", // Slightly larger gap for better definition
          transform:
            "translate(-50%, -50%) skewX(-42deg) skewY(12deg) scaleX(1.5) scale(0.35) rotate(0deg) translateZ(0)",
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
      >
        {squares.map((i) => (
          <Cell key={i} index={i} total={squares.length} />
        ))}
        
        {/* Letters group with 3D perspective */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            transform: "translateZ(50px) scale(1.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {personaInfo.map((info) => (
            <button
              key={info.letter}
              className={`text-7xl font-bold ${
                isDarkMode ? "text-white" : "text-black"
              } hover:scale-110 transition-all duration-300 relative`}
              style={{
                textShadow: isDarkMode
                  ? "0 0 15px rgba(255,255,255,0.35)"
                  : "0 0 15px rgba(0,0,0,0.2)",
                letterSpacing: "0.05em",
              }}
              onClick={() => handleLetterClick(info)}
              onMouseEnter={() => handleLetterHover(info, true)}
              onMouseLeave={() => handleLetterHover(info, false)}
            >
              {info.letter}
            </button>
          ))}
        </div>
      </div>
      
      {/* Info popup - redesigned for a modern look */}
      {selectedInfo && (
        <div 
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-40 backdrop-blur-sm transition-opacity duration-300`}
          onClick={() => setSelectedInfo(null)}
        >
          <div 
            className={`max-w-md p-8 rounded-xl shadow-2xl transform transition-all duration-500 ${
              isDarkMode
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-900"
            }`}
            style={{
              boxShadow: isDarkMode
                ? "0 10px 15px -3px rgba(0,0,0,0.4), 0 4px 6px -4px rgba(0,0,0,0.3)"
                : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-4xl font-bold mb-2">{selectedInfo.letter}</h2>
            <h3 className="text-2xl font-semibold mb-4">{selectedInfo.info}</h3>
            <p className="text-lg leading-relaxed mb-6">{selectedInfo.detail}</p>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                isDarkMode 
                  ? "bg-white text-black hover:bg-gray-200" 
                  : "bg-black text-white hover:bg-gray-800"
              }`}
              onClick={() => setSelectedInfo(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      {/* Easter egg popup */}
      {showEasterEgg && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50">
          <div
            className={`p-8 rounded-xl max-w-md text-center transform transition-all duration-300 ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
            style={{
              boxShadow: isDarkMode
                ? "0 10px 15px -3px rgba(0,0,0,0.4), 0 4px 6px -4px rgba(0,0,0,0.3)"
                : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h2 className={`text-3xl font-bold mb-4`}>
              ¡Felicidades! Has encontrado el easter egg
            </h2>
            <p className={`text-lg mb-4`}>
              Aquí hay un dato curioso sobre mí:
            </p>
            <p className={`text-xl font-semibold mb-6`}>
              Me encanta programar mientras escucho música electrónica
            </p>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                isDarkMode
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
              onClick={() => setShowEasterEgg(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Custom3DView.displayName = "Custom3DView";

export default Custom3DView;
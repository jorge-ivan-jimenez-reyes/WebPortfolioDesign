// src/components/Custom3DView.tsx
import React, { useState, useCallback, useEffect, useRef } from "react";
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
const EASTER_EGG_TIMEOUT = 2000;
const EASTER_EGG_DISPLAY_TIME = 5000;

const darkModeColors = [
  "rgba(0, 190, 240, 0.6)",
  "rgba(240, 70, 190, 0.6)",
  "rgba(70, 200, 110, 0.6)",
  "rgba(150, 50, 240, 0.6)",
  "rgba(240, 110, 30, 0.6)",
  "rgba(255, 215, 0, 0.6)",
  "rgba(255, 20, 147, 0.6)",
  "rgba(0, 255, 255, 0.6)",
];

const lightModeColors = [
  "rgba(100, 149, 237, 0.5)",
  "rgba(255, 105, 180, 0.5)",
  "rgba(50, 205, 50, 0.5)",
  "rgba(147, 112, 219, 0.5)",
  "rgba(255, 165, 0, 0.5)",
  "rgba(255, 192, 203, 0.5)",
  "rgba(135, 206, 235, 0.5)",
  "rgba(255, 218, 185, 0.5)",
];

// Cell component exactly like Rauno's style
const Cell: React.FC<{ index: number; gridCols: number }> = ({ index, gridCols }) => {
  const { isDarkMode } = useTheme();
  const colors = isDarkMode ? darkModeColors : lightModeColors;
  const [bg, setBg] = useState("transparent");
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBg(randomColor);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    timerRef.current = window.setTimeout(() => {
      setBg("transparent");
    }, 800);
  };

  return (
    <div
      className={`transition-all duration-300 ${isHovered ? "z-20" : ""}`}
      data-cell-index={index}
      style={{
        background: bg,
        aspectRatio: "1 / 1",
        boxShadow: isHovered
          ? `0 0 20px ${bg}, 0 0 40px ${bg.replace('0.6', '0.3')}`
          : "none",
        borderRadius: isHovered ? "4px" : "0px",
        transform: isHovered ? "scale(1.1)" : "scale(1)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

const Custom3DView: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedInfo, setSelectedInfo] = useState<PersonaInfo | null>(null);
  const [clickCounts, setClickCounts] = useState<{ [key: string]: number }>({});
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleLetterClick = useCallback(
    (info: PersonaInfo) => {
      setSelectedInfo(info);

      const newClickCounts = { ...clickCounts };
      newClickCounts[info.letter] = (newClickCounts[info.letter] || 0) + 1;
      setClickCounts(newClickCounts);

      if (newClickCounts[info.letter] === EASTER_EGG_CLICKS) {
        setTimeout(() => {
          setShowEasterEgg(true);
        }, EASTER_EGG_TIMEOUT);
      }

      setTimeout(() => {
        setClickCounts((prevCounts) => ({
          ...prevCounts,
          [info.letter]: 0,
        }));
      }, EASTER_EGG_TIMEOUT);
    },
    [clickCounts],
  );



  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setHoverPosition({ x: e.clientX, y: e.clientY });
    // No actualizar mousePosition para mantener el grid estático
  }, []);

  useEffect(() => {
    if (showEasterEgg) {
      const timer = setTimeout(() => {
        setShowEasterEgg(false);
      }, EASTER_EGG_DISPLAY_TIME);

      return () => clearTimeout(timer);
    }
  }, [showEasterEgg]);

  // Create grid array (60x60 like Rauno)
  const gridItems = Array.from({ length: 3600 }, (_, i) => i);

  return (
    <>
      {/* Global styles for animations */}
      <style>{`
        @keyframes fadeInOut3D {
          0% {
            transform: translateZ(0px) rotateX(0deg) rotateY(0deg) scale(0);
            opacity: 0;
          }
          25% {
            transform: translateZ(50px) rotateX(15deg) rotateY(15deg) scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: translateZ(80px) rotateX(25deg) rotateY(25deg) scale(1);
            opacity: 1;
          }
          75% {
            transform: translateZ(100px) rotateX(35deg) rotateY(35deg) scale(1.1);
            opacity: 0.6;
          }
          100% {
            transform: translateZ(120px) rotateX(45deg) rotateY(45deg) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
      
      <div 
        className={`w-screen h-screen overflow-hidden relative ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
            : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
        }`}
        style={{ 
          overscrollBehavior: "none",
          '--x': '0px',
          '--y': '0px',
          '--rotate': '0deg'
        } as React.CSSProperties}
        onMouseMove={handleMouseMove}
      >
        {/* Rauno-style 3D Grid */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            opacity: 1,
            transform: `translate(calc(-50% + var(--x)), calc(-50% + var(--y))) 
                       skewX(-48deg) 
                       skewY(14deg) 
                       scaleX(2) 
                       scale(0.54375) 
                       rotate(var(--rotate)) 
                       translateZ(0)`,
            width: '200vmin',
            height: '200vmin',
            display: 'grid',
            gridTemplateColumns: 'repeat(60, 1fr)',
            gridTemplateRows: 'repeat(60, 1fr)',
            gap: '1px',
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          {gridItems.map((index) => (
            <Cell key={index} index={index} gridCols={60} />
          ))}
          
          {/* JORGE Letters floating above grid */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: 'translateZ(100px) scale(2.2) translateX(-50px) translateY(-80px)',
              zIndex: 100,
            }}
          >
            <div
              className="flex justify-center items-center gap-5 p-7"
            >
              {personaInfo.map((info) => (
                <button
                  key={info.letter}
                  className={`text-7xl font-bold ${
                    isDarkMode ? "text-white" : "text-black"
                  } hover:scale-110 transition-all duration-300 relative`}
                  style={{
                    textShadow: isDarkMode
                      ? "0.03em 0.03em 0px #2c3e50, 0.06em 0.06em 0px #1a252f, 0 0 25px rgba(80, 180, 255, 0.5)"
                      : "0.03em 0.03em 0px #d1d5db, 0.06em 0.06em 0px #9ca3af, 0 0 15px rgba(0, 0, 0, 0.1)",
                    letterSpacing: "0.05em",
                  }}
                  onClick={() => handleLetterClick(info)}
                >
                  {info.letter}
                </button>
              ))}
            </div>
          </div>
        </div>

        
        
        {/* Info popup */}
        {selectedInfo && (
          <div 
            className="fixed inset-0 flex items-center justify-center bg-black/20 z-40 transition-opacity duration-300"
            style={{ backdropFilter: "blur(12px)" }}
            onClick={() => setSelectedInfo(null)}
          >
            <div 
              className={`max-w-md p-8 rounded-2xl transform transition-all duration-500 ${
                isDarkMode
                  ? "bg-gray-900/80 text-white border border-gray-700/50"
                  : "bg-white/80 text-gray-900 border border-gray-200/50"
              }`}
              style={{
                backdropFilter: "blur(25px)",
                boxShadow: isDarkMode
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  : "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-4xl font-bold mb-2">{selectedInfo.letter}</h2>
              <h3 className="text-2xl font-semibold mb-4 opacity-80">{selectedInfo.info}</h3>
              <p className="text-lg leading-relaxed mb-6 opacity-70">{selectedInfo.detail}</p>
              <button
                className={`px-6 py-3 rounded-lg transition-all duration-200 font-medium ${
                  isDarkMode 
                    ? "bg-white/10 text-white hover:bg-white/20 border border-white/20" 
                    : "bg-black/10 text-black hover:bg-black/20 border border-black/20"
                }`}
                style={{ backdropFilter: "blur(10px)" }}
                onClick={() => setSelectedInfo(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        
        {/* Easter egg popup */}
        {showEasterEgg && (
          <div 
            className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 transition-opacity duration-300"
            style={{ backdropFilter: "blur(15px)" }}
          >
            <div
              className={`p-8 rounded-2xl max-w-md text-center transform transition-all duration-300 ${
                isDarkMode ? "bg-gray-900/80 text-white border border-gray-700/50" : "bg-white/80 text-gray-900 border border-gray-200/50"
              }`}
              style={{
                backdropFilter: "blur(25px)",
                boxShadow: isDarkMode
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  : "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
              }}
            >
              <h2 className="text-3xl font-bold mb-4">
                ¡Felicidades! Has encontrado el easter egg
              </h2>
              <p className="text-lg mb-4 opacity-80">
                Aquí hay un dato curioso sobre mí:
              </p>
              <p className="text-xl font-semibold mb-6">
                Me encanta programar mientras escucho música electrónica
              </p>
              <button
                className={`px-6 py-3 rounded-lg transition-all duration-200 font-medium ${
                  isDarkMode
                    ? "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    : "bg-black/10 text-black hover:bg-black/20 border border-black/20"
                }`}
                style={{ backdropFilter: "blur(10px)" }}
                onClick={() => setShowEasterEgg(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

Custom3DView.displayName = "Custom3DView";

export default Custom3DView;
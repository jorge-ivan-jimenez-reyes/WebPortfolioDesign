// src/components/Custom3DGrid.tsx
import React, { useState, useRef, memo } from 'react';
import { useTheme } from '../context/ThemeContext';

interface PersonaInfo {
    letter: string;
    info: string;
}

const personaInfo: PersonaInfo[] = [
    { letter: 'J', info: 'Graphic Designer with a passion for creating visually stunning designs.' },
    { letter: 'O', info: 'Frontend Developer skilled in React and modern web technologies.' },
    { letter: 'R', info: 'Responsive Design expert, ensuring optimal user experience across all devices.' },
    { letter: 'G', info: 'Enthusiastic learner, always staying up-to-date with the latest industry trends.' },
    { letter: 'E', info: 'Software Engineer with a strong foundation in computer science principles.' },

];

// Define your custom neon colors with opacity for dark mode
const darkModeColors = [
    'rgba(0, 255, 255, 0.8)',   // electric blue
    'rgba(255, 0, 255, 0.8)',   // neon pink
    'rgba(128, 255, 0, 0.8)',   // acid green
    'rgba(204, 0, 255, 0.8)',   // bright purple
    'rgba(255, 128, 0, 0.8)',   // neon orange
    'rgba(255, 255, 0, 0.8)',   // neon yellow
    'rgba(0, 255, 128, 0.8)',   // aqua
    'rgba(255, 0, 128, 0.8)',   // hot pink
    'rgba(128, 0, 255, 0.8)',   // electric indigo
];

// Define pastel colors for light mode
const lightModeColors = [
    'rgba(100, 149, 237, 0.8)', // cornflower blue
    'rgba(255, 105, 180, 0.8)', // hot pink
    'rgba(50, 205, 50, 0.8)',   // lime green
    'rgba(147, 112, 219, 0.8)', // medium purple
    'rgba(255, 165, 0, 0.8)',   // orange
    'rgba(255, 215, 0, 0.8)',   // gold
    'rgba(0, 206, 209, 0.8)',   // dark turquoise
    'rgba(255, 20, 147, 0.8)',  // deep pink
    'rgba(65, 105, 225, 0.8)',  // royal blue
];

// Memoized Cell for performance
const Cell: React.FC = memo(() => {
    const { isDarkMode } = useTheme();
    const colors = isDarkMode ? darkModeColors : lightModeColors;
    const [bg, setBg] = useState(isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)');
    const [isHovered, setIsHovered] = useState(false);
    const timerRef = useRef<number | null>(null);

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
            setBg(isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)');
            timerRef.current = null;
        }, 1000); // delay of 1 second before reverting
    };

    return (
        <div
            className={`w-full h-full transition-all duration-500 ${isHovered ? 'scale-110 z-10' : ''}`}
            style={{ 
                background: bg, 
                aspectRatio: '1 / 1',
                boxShadow: isHovered ? `0 0 15px ${isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.4)'}` : 'none'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
});

const Custom3DView: React.FC = () => {
    const { isDarkMode } = useTheme();
    const [selectedInfo, setSelectedInfo] = useState<PersonaInfo | null>(null);
    // Create an array for 2,500 squares (50 x 50 grid)
    const squares = Array.from({ length: 2500 }, (_, i) => i);

    const handleLetterClick = (info: PersonaInfo) => {
        setSelectedInfo(info);
    };

    return (
        <div
            className={`w-screen h-screen overflow-hidden relative ${
                isDarkMode ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
            }`}
            style={{ overscrollBehavior: 'none' }}
        >
            {/* Container with 3D perspective */}
            <div
                className="absolute top-1/2 left-1/2"
                style={{
                    width: '450vmin',
                    height: '450vmin',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(50, 1fr)',
                    gridTemplateRows: 'repeat(50, 1fr)',
                    gap: '1px', // Added small gap for better definition
                    transform:
                        'translate(-50%, -50%) skewX(-48deg) skewY(14deg) scaleX(2) scale(0.3234375) rotate(0deg) translateZ(0)',
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                }}
            >
                {squares.map((i) => (
                    <Cell key={i} />
                ))}
                {/* Letters group with 3D perspective */}
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                        transform: 'translateZ(50px) scale(2)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}
                >
                    {personaInfo.map((info) => (
                        <button
                            key={info.letter}
                            className={`text-6xl font-bold ${
                                isDarkMode ? 'text-white' : 'text-black'
                            } hover:scale-110 transition-transform duration-200`}
                            style={{
                                textShadow: isDarkMode ? '0 0 10px rgba(255,255,255,0.8)' : '0 0 10px rgba(0,0,0,0.3)',
                            }}
                            onClick={() => handleLetterClick(info)}
                        >
                            {info.letter}
                        </button>
                    ))}
                </div>
            </div>
            {/* Info popup */}
            {selectedInfo && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-md">
                    <p className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {selectedInfo.info}
                    </p>
                    <button
                        className="mt-2 text-sm text-blue-500 hover:text-blue-700"
                        onClick={() => setSelectedInfo(null)}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default Custom3DView;

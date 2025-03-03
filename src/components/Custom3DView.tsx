// src/components/Custom3DGrid.tsx
import React, { useState, useRef, memo } from 'react';
import { useTheme } from '../context/ThemeContext';

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
    'rgba(173, 216, 230, 0.8)', // light blue
    'rgba(255, 182, 193, 0.8)', // light pink
    'rgba(152, 251, 152, 0.8)', // pale green
    'rgba(221, 160, 221, 0.8)', // plum
    'rgba(255, 218, 185, 0.8)', // peach
    'rgba(255, 255, 224, 0.8)', // light yellow
    'rgba(175, 238, 238, 0.8)', // pale turquoise
    'rgba(255, 192, 203, 0.8)', // pink
    'rgba(176, 196, 222, 0.8)', // light steel blue
];

// Memoized Cell for performance
const Cell: React.FC = memo(() => {
    const { isDarkMode } = useTheme();
    const colors = isDarkMode ? darkModeColors : lightModeColors;
    const [bg, setBg] = useState(isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)');
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
            setBg(isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)');
            timerRef.current = null;
        }, 1000); // delay of 1 second before reverting
    };

    return (
        <div
            className={`w-full h-full transition-all duration-500 ${isHovered ? 'scale-110 z-10' : ''}`}
            style={{ 
                background: bg, 
                aspectRatio: '1 / 1',
                boxShadow: isHovered ? `0 0 15px ${isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.3)'}` : 'none'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
});

const Custom3DView: React.FC = () => {
    const { isDarkMode } = useTheme();
    // Create an array for 2,500 squares (50 x 50 grid)
    const squares = Array.from({ length: 2500 }, (_, i) => i);

    return (
        <div
            className={`w-screen h-screen overflow-hidden relative ${
                isDarkMode ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-100 to-white'
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
            </div>
        </div>
    );
};

export default Custom3DView;

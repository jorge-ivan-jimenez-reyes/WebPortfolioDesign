// src/components/Custom3DGrid.tsx
import React, { useState, useRef } from 'react';

// Define your custom colors (you can adjust these values or use hex/rgba if preferred)
const colors = [
    'color(display-p3 0.94 0.19 0.04 / 0.8)',   // red with opacity 0.8
    'color(display-p3 0.083 0.75 0.283 / 0.8)',  // green
    'color(display-p3 0.071 0.442 0.945 / 0.8)', // blue
    'color(display-p3 1 0.87 0.05 / 0.8)',         // yellow
    'color(display-p3 1 0.5 0.005 / 0.8)',         // orange
    'color(display-p3 1 0.301961 0  / 0.8)',       // orange2
    'color(display-p3 1 0.64 0.703 / 0.8)',       // pink1
    'color(display-p3 0.856 1 0.205 / 0.8)',      // neon1
    'color(display-p3 0 1 0.984 / 0.8)',          // neon2
];

const Cell: React.FC = () => {
    // Start with a semi-transparent white (modern glass look)
    const [bg, setBg] = useState('rgba(255,255,255,0.15)');
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBg(randomColor);
    };

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => {
            setBg('rgba(255,255,255,0.15)');
            timerRef.current = null;
        }, 1000); // delay before reverting back
    };

    return (
        <div
            className="w-full h-full border border-white/20 backdrop-blur-md shadow-md rounded-lg transition-all duration-500"
            style={{ background: bg, aspectRatio: '1 / 1' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
};

const Custom3DGrid: React.FC = () => {
    // Create an array for 2,500 squares (50 x 50 grid)
    const squares = Array.from({ length: 2500 }, (_, i) => i);

    return (
        <div
            className="w-screen h-screen overflow-hidden relative"
            style={{ overscrollBehavior: 'none' }}
        >
            {/* Container with 3D perspective */}
            <div
                className="absolute top-1/2 left-1/2"
                style={{
                    // Using a large square container that fills most of the page
                    width: '450vmin',
                    height: '450vmin',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(50, 1fr)',
                    gridTemplateRows: 'repeat(50, 1fr)',
                    gap: '0.25rem',
                    transform:
                        'translate(-50%, -50%) skewX(-48deg) skewY(14deg) scaleX(2) scale(0.3234375) rotate(0deg) translateZ(0)',
                }}
            >
                {squares.map((i) => (
                    <Cell key={i} />
                ))}
            </div>
        </div>
    );
};

export default Custom3DGrid;

// src/components/Custom3DGrid.tsx
import React, { useState, useRef } from 'react';

// Define your custom colors
const colors = [
    'color(display-p3 0.94 0.19 0.04)',   // red
    'color(display-p3 0.083 0.75 0.283)',  // green
    'color(display-p3 0.071 0.442 0.945)', // blue
    'color(display-p3 1 0.87 0.05)',        // yellow
    'color(display-p3 1 0.5 0.005)',        // orange
    'color(display-p3 1 0.301961 0 / 1)',   // orange2
    'color(display-p3 1 0.64 0.703)',       // pink1
    'color(display-p3 0.856 1 0.205)',      // neon1
    'color(display-p3 0 1 0.984)',          // neon2
];

const Cell: React.FC = () => {
    const [bg, setBg] = useState('white'); // initial color white
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        // Clear any pending timeout so the color doesn't revert while hovered
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        // Pick a random color from the array on hover
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBg(randomColor);
    };

    const handleMouseLeave = () => {
        // Delay reverting to white for 1 second (adjust as needed)
        timerRef.current = setTimeout(() => {
            setBg('white');
            timerRef.current = null;
        }, 1000);
    };

    return (
        <div
            className="w-full h-full transition-colors duration-500"
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
            {/* Container for 3D perspective */}
            <div
                className="absolute top-1/2 left-1/2"
                style={{
                    // Use 450vmin so the container is square and fills a large portion of the page
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

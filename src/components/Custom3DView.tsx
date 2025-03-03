// src/components/Custom3DGrid.tsx
import React, { useState, useRef, memo } from 'react';

// Define your custom neon colors
const colors = [
    'color(display-p3 0 1 1)',          // electric blue
    'color(display-p3 1 0 1)',          // neon pink
    'color(display-p3 0.5 1 0)',        // acid green
    'color(display-p3 0.8 0 1)',        // bright purple
    'color(display-p3 1 0.5 0)',        // neon orange
    'color(display-p3 1 1 0)',          // neon yellow
    'color(display-p3 0 1 0.5)',        // aqua
    'color(display-p3 1 0 0.5)',        // hot pink
    'color(display-p3 0.5 0 1)',        // electric indigo
];

// Memoized Cell for performance
const Cell: React.FC = memo(() => {
    const [bg, setBg] = useState('white'); // initial white background
    const timerRef = useRef<number | null>(null);

    const handleMouseEnter = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBg(randomColor);
    };

    const handleMouseLeave = () => {
        timerRef.current = window.setTimeout(() => {
            setBg('white');
            timerRef.current = null;
        }, 1000); // delay of 1 second before reverting
    };

    return (
        <div
            className="w-full h-full transition-colors duration-500"
            style={{ background: bg, aspectRatio: '1 / 1' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
});

const Custom3DView: React.FC = () => {
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
                    // Use 450vmin so the container is square and fills most of the page
                    width: '450vmin',
                    height: '450vmin',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(50, 1fr)',
                    gridTemplateRows: 'repeat(50, 1fr)',
                    gap: '0', // Removed gap between cells
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

export default Custom3DView;

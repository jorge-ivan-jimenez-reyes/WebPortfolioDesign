// src/components/Custom3DGrid.tsx
import React, { useState } from 'react';

// Define your custom colors (using the CSS color(display-p3 ...) syntax)
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
    const [bg, setBg] = useState('white'); // initial white background

    return (
        <div
            className="w-full h-full transition-colors duration-200"
            style={{ background: bg, aspectRatio: '1 / 1' }}
            onMouseEnter={() => {
                // On hover, pick a random color from the array
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                setBg(randomColor);
            }}
            onMouseLeave={() => {
                // Revert back to white when the mouse leaves
                setBg('white');
            }}
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
            {/* A horizontal line of colors at the top */}
            <div
                className="absolute top-0 left-0 w-full h-2"
                style={{
                    background: `linear-gradient(to right, ${colors.join(', ')})`,
                }}
            />

            {/* 3D grid container */}
            <div
                className="absolute top-1/2 left-1/2"
                style={{
                    // Ensure the container is square and fits within the viewport
                    width: '90vmin',
                    height: '90vmin',
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

// src/components/CustomGrid.tsx
import React, { useState } from 'react';

export default function CustomGrid() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        setMouse({ x: e.clientX, y: e.clientY });
    }

    // Set the CSS variables and transform exactly as your sample
    const containerStyle: React.CSSProperties = {
        '--x': `${mouse.x}px`,
        '--y': `${mouse.y}px`,
        '--rotate': '0deg',
        transform: `translate(calc(-50% + var(--x)), calc(-50% + var(--y))) 
                skewX(-48deg) skewY(14deg) 
                scaleX(2) scale(0.3234375) 
                rotate(var(--rotate)) translateZ(0)`,
        opacity: 1,
    } as React.CSSProperties;

    // For demonstration, we'll create 5 squares.
    // You can adjust the number or use different elements (like SVGs or letters).
    const squares = Array.from({ length: 5 }, (_, i) => i);

    return (
        <div
            onMouseMove={handleMouseMove}
            className="w-full h-screen relative bg-white" // white background added
        >
            <div
                style={containerStyle}
                className="absolute top-1/2 left-1/2 grid grid-cols-4 grid-rows-3 gap-4"
            >
                {squares.map((idx) => (
                    <div
                        key={idx}
                        className="w-32 h-32 bg-gray-700 hover:bg-gray-500 transition-colors duration-200 opacity-80 hover:opacity-100"
                    >
                        {/* Replace this div content with your SVG or letter as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
}

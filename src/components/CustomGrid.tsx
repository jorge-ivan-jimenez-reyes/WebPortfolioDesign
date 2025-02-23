// src/components/CustomGrid.tsx
import React, { useState } from 'react';

export default function CustomGrid() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        // store mouse coords
        setMouse({ x: e.clientX, y: e.clientY });
    }

    // Create an array for 12 squares (or placeholders for letters)
    const squares = Array.from({ length: 12 }, (_, i) => i);

    // Generate a transform string based on the mouse position
    const containerTransform = `
    translate(calc(-50% + ${mouse.x}px), calc(-50% + ${mouse.y}px))
    skewX(-48deg)
    skewY(14deg)
    scale(0.6)
  `;

    return (
        <div
            // The parent covers the full area and tracks the mouse movement
            onMouseMove={handleMouseMove}
            className="w-full h-full relative"
        >
            {/* This container is centered and transforms based on mouse coords */}
            <div
                style={{
                    transform: containerTransform,
                    transition: 'transform 0.05s linear', // smooth movement
                }}
                className="absolute top-1/2 left-1/2 grid grid-cols-4 grid-rows-3 gap-4"
            >
                {squares.map((idx) => (
                    <div
                        key={idx}
                        className="w-32 h-32 bg-gray-700 hover:bg-gray-500 transition-colors duration-200 opacity-80 hover:opacity-100"
                    />
                ))}
            </div>
        </div>
    );
}

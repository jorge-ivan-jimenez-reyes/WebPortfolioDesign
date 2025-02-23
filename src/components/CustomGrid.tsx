import React, { useState, useRef } from 'react';

function Square() {
    const [rotate, setRotate] = useState({ rotateX: 0, rotateY: 0 });
    const squareRef = useRef<HTMLDivElement>(null);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!squareRef.current) return;
        const rect = squareRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const maxRotate = 15; // maximum rotation in degrees

        // Calculate rotation based on distance from center
        const rotateY = ((x - centerX) / centerX) * maxRotate;
        const rotateX = -((y - centerY) / centerY) * maxRotate; // negative to tilt upward when cursor moves down

        setRotate({ rotateX, rotateY });
    }

    function handleMouseLeave() {
        setRotate({ rotateX: 0, rotateY: 0 });
    }

    return (
        <div
            ref={squareRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-32 h-32 bg-gray-700 hover:bg-gray-500 transition-colors duration-200 opacity-80 hover:opacity-100 flex items-center justify-center shadow-lg"
            style={{
                perspective: '800px',
                transform: `perspective(800px) rotateX(${rotate.rotateX}deg) rotateY(${rotate.rotateY}deg)`,
                transition: 'transform 0.2s ease'
            }}
        >
            {/* Optionally, you can render a letter or an SVG */}
            <span className="text-white text-xl">A</span>
        </div>
    );
}

export default function CustomGrid() {
    // Create an array for 12 squares (adjust count as needed)
    const squares = Array.from({ length: 12 }, (_, i) => i);

    return (
        <div className="w-full h-screen relative bg-white">
            {/* Static grid container */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-4 place-items-center">
                {squares.map((idx) => (
                    <Square key={idx} />
                ))}
            </div>
        </div>
    );
}

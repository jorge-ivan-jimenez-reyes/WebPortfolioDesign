// src/components/CustomGrid.tsx
import React from 'react';

export default function CustomGrid() {
    // Create an array of squares (adjust length as needed)
    const squares = Array.from({ length: 12 }, (_, i) => i);

    return (
        <div className="w-full h-screen relative bg-white">
            {/* Static grid container */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-4 place-items-center">
                {squares.map((idx) => (
                    <div
                        key={idx}
                        className="w-32 h-32 bg-gray-700 hover:bg-gray-500 transition-colors duration-200 opacity-80 hover:opacity-100 flex items-center justify-center"
                    >
                        {/* Optionally, add content such as a letter or SVG */}
                        <span className="text-white text-xl">A</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

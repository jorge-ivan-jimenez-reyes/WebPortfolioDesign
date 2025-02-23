// src/components/Custom3DGrid.tsx
import React from 'react';

const Custom3DGrid: React.FC = () => {
    // Create an array of 100 squares (10x10 grid).
    // Change the length and grid classes for a different number of squares.
    const squares = Array.from({ length: 300 }, (_, i) => i);

    return (
        <div
            className="w-full h-screen overflow-hidden relative"
            style={{ perspective: '10000px' }} // gives a 3D perspective to its children
        >
            <div
                className="absolute top-1/2 left-1/2 grid grid-cols-10 grid-rows-10 gap-2"
                style={{
                    transform:
                        'translate(-50%, -50%) skewX(-48deg) skewY(14deg) scaleX(2) scale(0.3234375) rotate(0deg) translateZ(0)',
                }}
            >
                {squares.map((i) => (
                    <div
                        key={i}
                        className="w-16 h-16 bg-gray-700 hover:bg-gray-500 transition-colors duration-200"
                    />
                ))}
            </div>
        </div>
    );
};

export default Custom3DGrid;

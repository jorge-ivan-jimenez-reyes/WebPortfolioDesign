// src/components/Custom3DGrid.tsx
import React from 'react';

const Custom3DGrid: React.FC = () => {
    // Create an array for 2,500 squares (50 x 50 grid)
    const squares = Array.from({ length: 2500 }, (_, i) => i);

    return (
        <div className="w-screen h-screen overflow-hidden relative">
            {/* Container for 3D perspective */}
            <div
                className="absolute top-1/2 left-1/2"
                style={{
                    // Use 90vmin so the container is square and fits within the viewport
                    width: '400vmin',
                    height: '400vmin',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(50, 1fr)',
                    gridTemplateRows: 'repeat(50, 1fr)',
                    gap: '0.25rem', // adjust gap as needed
                    transform:
                        'translate(-50%, -50%) skewX(-48deg) skewY(14deg) scaleX(2) scale(0.3234375) rotate(0deg) translateZ(0)',
                }}
            >
                {squares.map((i) => (
                    <div
                        key={i}
                        className="bg-gray-700 hover:bg-gray-500 transition-colors duration-200"
                        // Each square will maintain a 1:1 aspect ratio
                        style={{ aspectRatio: '1 / 1' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Custom3DGrid;

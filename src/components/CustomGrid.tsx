// src/components/CustomGrid.tsx
import React from 'react';

export default function CustomGrid() {
    // A static container transform similar to your provided snippet.
    const containerStyle = {
        transform:
            'translate(calc(-50% + 0px), calc(-50% + 0px)) skewX(-48deg) skewY(14deg) scaleX(2) scale(0.3234375) rotate(0deg) translateZ(0)',
    };

    // Create 60*60 = 3600 squares.
    const squares = Array.from({ length: 60 * 60 }, (_, i) => i);

    return (
        <div className="w-full h-screen relative bg-gray-100">
            {/* This container is fixed (static 3D view) */}
            <div
                className="absolute top-1/2 left-1/2 gap-1"
                style={{
                    ...containerStyle,
                    perspective: '1000px',
                    // Define a grid with 60 columns and 60 rows.
                    display: 'grid',
                    gridTemplateColumns: 'repeat(60, minmax(0, 1fr))',
                    gridTemplateRows: 'repeat(60, minmax(0, 1fr))',
                }}
            >
                {squares.map((idx) => (
                    <div
                        key={idx}
                        // Each cell fills its grid cell. Adjust padding, border, etc., if needed.
                        className="w-full h-full bg-gray-700 hover:bg-white transition-colors duration-300 opacity-80 hover:opacity-100 flex items-center justify-center"
                    >
                        {/* Optionally display content, e.g., a letter or number */}
                        <span className="text-white text-xs">{idx}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

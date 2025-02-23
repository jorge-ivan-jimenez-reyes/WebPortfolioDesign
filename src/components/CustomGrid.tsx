// src/components/CustomGrid.tsx
import React, { useState } from 'react';

export default function CustomGrid() {
    // Optional: track mouse position for fancy transforms
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        setMouse({ x: e.clientX, y: e.clientY });
    }

    // Generate a bunch of squares or cells
    const cells = Array.from({ length: 100 }, (_, i) => i); // 100 squares

    return (
        <div
            onMouseMove={handleMouseMove}
            className="relative w-full h-screen overflow-hidden
                 bg-white /* or any bg color you want */
                 grid grid-cols-10 grid-rows-10 gap-1
                 /* Tailwind: 10 columns, 10 rows, 1px gap, etc. */
      "
        >
            {cells.map((cell) => (
                <div
                    key={cell}
                    className="bg-gray-200 transition-transform duration-300
                     hover:bg-gray-400
                     /* Some effect on hover? */
                     "
                    style={{
                        // If you want a subtle transform that changes with mouse:
                        transform: `translate(${mouse.x * 0.001 * cell}px, ${mouse.y * 0.001 * cell}px)`,
                    }}
                />
            ))}
        </div>
    );
}

import React from 'react';

export default function CustomGrid() {
    // This style mimics the static transform you provided.
    const containerStyle = {
        transform:
            'translate(calc(-50% + 0px), calc(-50% + 0px)) skewX(-48deg) skewY(14deg) scaleX(2) scale(0.3234375) rotate(0deg) translateZ(0)',
    };

    // Create 12 placeholder squares (adjust the number as needed)
    const squares = Array.from({ length: 12 }, (_, i) => i);

    return (
        <div className="w-full h-screen relative bg-gray-100">
            {/* This container is centered and uses a fixed 3D transform */}
            <div
                className="absolute top-1/2 left-1/2 grid grid-cols-4 grid-rows-3 gap-4"
                style={{
                    ...containerStyle,
                    perspective: '1000px', // sets up the 3D context
                }}
            >
                {squares.map((idx) => (
                    <div
                        key={idx}
                        className="w-32 h-32 bg-gray-700 hover:bg-white transition-colors duration-300 flex items-center justify-center shadow-lg"
                    >
                        {/* Optionally, render a letter or icon here */}
                        <span className="text-white text-2xl font-bold">A</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

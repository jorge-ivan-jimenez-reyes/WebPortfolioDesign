// components/CustomGrid.tsx
import React from 'react';

export default function CustomGrid() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-200 p-4 rounded shadow">Item 1</div>
            <div className="bg-blue-300 p-4 rounded shadow">Item 2</div>
            <div className="bg-blue-400 p-4 rounded shadow">Item 3</div>
            <div className="bg-blue-200 p-4 rounded shadow">Item 4</div>
            <div className="bg-blue-300 p-4 rounded shadow">Item 5</div>
            <div className="bg-blue-400 p-4 rounded shadow">Item 6</div>
        </div>
    );
}

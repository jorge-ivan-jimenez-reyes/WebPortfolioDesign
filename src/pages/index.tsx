// src/pages/index.tsx
import CustomGrid from '../components/CustomGrid';

export default function HomePage() {
    return (
        <div className="w-screen h-screen">
            <CustomGrid />
            {/* Possibly overlay some content on top */}
            <div className="absolute top-0 left-0 p-8 z-10 text-black">
                <h1 className="text-3xl font-bold">My Minimal Interactive Grid</h1>
                <p>Drag the mouse around; hover squares to see effects.</p>
            </div>
        </div>
    );
}

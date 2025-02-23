// src/pages/index.tsx
import Custom3DGrid from '../components/Custom3DView';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="w-screen h-screen relative">
            <Custom3DGrid />
            <Footer />
        </div>
    );
}

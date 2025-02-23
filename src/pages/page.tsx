// pages/index.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomGridComponent from '../components/CustomGridComponent';

export default function Home() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
                <p className="mt-4 text-lg">
                    This is my portfolio website built with Next.js.
                </p>
                {/* Insert your custom grid component here */}
                <CustomGridComponent />
            </main>
            <Footer />
        </>
    );
}

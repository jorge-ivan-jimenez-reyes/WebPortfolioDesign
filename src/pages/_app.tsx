import type { AppProps } from 'next/app';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import '../styles/globals.css';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import ThemeToggle from '../components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

function Loading() {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
}

const DynamicCustom3DView = dynamic(() => import('../components/Custom3DView'), {
    loading: () => <Loading />,
    ssr: false,
});

function AppContent({ Component, pageProps }: AppProps) {
    const { isDarkMode } = useTheme();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <div className={`${inter.className} ${isDarkMode ? 'dark' : ''}`}>
            {Component.name === 'Custom3DView' ? (
                <DynamicCustom3DView {...pageProps} />
            ) : (
                <Component {...pageProps} />
            )}
            <ThemeToggle />
        </div>
    );
}

function MyApp(props: AppProps) {
    return (
        <ThemeProvider>
            <AppContent {...props} />
        </ThemeProvider>
    );
}

export default MyApp;

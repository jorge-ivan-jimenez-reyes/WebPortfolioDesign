import type { AppProps } from 'next/app';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import '../styles/globals.css';
import { useEffect, memo } from 'react';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const ThemeToggle = memo(function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`fixed bottom-4 right-4 p-3 rounded-full z-50 ${
                isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'
            } transition-colors duration-200 shadow-lg`}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
            {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            )}
        </button>
    );
});

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

// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <button
                onClick={toggleTheme}
                className={`fixed bottom-4 right-4 p-2 rounded-full ${
                    isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'
                }`}
                aria-label="Toggle theme"
            >
                {isDarkMode ? '☀️' : '🌙'}
            </button>
        </div>
    );
};

export default Layout;

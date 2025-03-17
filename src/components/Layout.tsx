// src/components/Layout.tsx
import React, { ReactNode, memo } from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
    children: ReactNode;
}

const Layout = memo(({ children }: LayoutProps) => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <motion.div
            className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
            initial={false}
            animate={{ backgroundColor: isDarkMode ? '#111827' : '#ffffff' }}
            transition={{ duration: 0.3 }}
        >
            <Header />
            <AnimatePresence mode="wait">
                <motion.main 
                    key={isDarkMode ? 'dark' : 'light'}
                    className="flex-grow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer />
            <motion.button
                onClick={toggleTheme}
                className={`fixed bottom-4 right-4 p-2 rounded-full shadow-lg ${
                    isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-indigo-600 text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
            >
                {isDarkMode ? '☀️' : '🌙'}
            </motion.button>
        </motion.div>
    );
});

Layout.displayName = 'Layout';

export default memo(Layout);

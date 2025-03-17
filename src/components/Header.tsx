// src/components/Header.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowSize } from '../hooks/useWindowSize';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDarkMode } = useTheme();
    const { width } = useWindowSize();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (width && width >= 1024) {
            setIsMenuOpen(true);
        } else {
            setIsMenuOpen(false);
        }
    }, [width]);

    return (
        <motion.header
            className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-lg fixed w-full z-50`}
            initial={false}
            animate={{
                backgroundColor: isDarkMode ? '#111827' : '#ffffff',
                color: isDarkMode ? '#ffffff' : '#111827'
            }}
            transition={{ duration: 0.3 }}
        >
            <nav className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
                {/* Logo or site name */}
                <motion.div
                    className="text-2xl font-bold tracking-tight"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/" className={`${isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'} transition duration-300`}>
                        My Portfolio
                    </Link>
                </motion.div>
                {/* Hamburger menu for mobile */}
                <motion.button
                    className="lg:hidden"
                    onClick={toggleMenu}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </motion.button>
                {/* Navigation Links */}
                <AnimatePresence>
                    {(isMenuOpen || (width && width >= 1024)) && (
                        <motion.ul
                            className="lg:flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 text-sm sm:text-base mt-4 lg:mt-0 w-full lg:w-auto"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {['Projects', 'Photos', 'Crafts'].map((item) => (
                                <motion.li key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link 
                                        href={item === 'Crafts' ? '/crafts/craft' : `/${item.toLowerCase()}`}
                                        className={`block lg:inline-block ${
                                            isDarkMode 
                                            ? 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800' 
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                                        } transition duration-300 px-3 py-2 rounded-md`}
                                    >
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};

export default Header;

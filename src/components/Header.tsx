// src/components/Header.tsx
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDarkMode } = useTheme();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-lg fixed w-full z-50`}>
            <nav className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
                {/* Logo or site name */}
                <div className="text-2xl font-bold tracking-tight">
                    <Link href="/" className={`${isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'} transition duration-300`}>
                        My Portfolio
                    </Link>
                </div>
                {/* Hamburger menu for mobile */}
                <button className="lg:hidden" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                {/* Navigation Links */}
                <ul className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 text-sm sm:text-base mt-4 lg:mt-0 w-full lg:w-auto`}>
                    {['Projects', 'Photos', 'Craft', 'About', 'Skills', 'Blog', 'Contact', 'Resume'].map((item) => (
                        <li key={item}>
                            <Link 
                                href={`/${item.toLowerCase()}`} 
                                className={`block lg:inline-block ${
                                    isDarkMode 
                                    ? 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800' 
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                                } transition duration-300 px-3 py-2 rounded-md`}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

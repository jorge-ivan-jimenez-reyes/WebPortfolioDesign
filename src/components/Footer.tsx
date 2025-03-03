// src/components/Footer.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { isDarkMode } = useTheme();

    return (
        <div
            className={`c-lesPJm-iezzKVe-css flex items-center justify-center gap-6 h-[70px] px-8 fixed z-10 left-1/2 rounded-full ${
                isDarkMode ? 'bg-gray-800/40' : 'bg-white/40'
            } backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg`}
            style={{
                bottom: "25px",
                transform: "translateX(-50%)",
                width: "auto",
            }}
        >
            {[
                { href: "/", label: "Home", icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
                { href: "/craft", label: "Craft", icon: <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /> },
                { href: "/projects", label: "Projects", icon: <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" /> },
                { href: "/photos", label: "Photos", icon: <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /> }
            ].map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    aria-label={item.label}
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${
                        isDarkMode ? 'bg-gray-700/60 hover:bg-gray-600' : 'bg-gray-100/80 hover:bg-white'
                    } transition-all duration-300 hover:-translate-y-1 hover:shadow-md group`}
                >
                    <svg
                        className={`w-5 h-5 ${isDarkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'} transition-colors duration-300`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {item.icon}
                    </svg>
                </a>
            ))}
        </div>
    );
};

export default Footer;

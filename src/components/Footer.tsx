// src/components/Footer.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { isDarkMode } = useTheme();

    return (
        <div
            className={`flex items-center justify-center gap-4 h-[80px] px-4 fixed z-10 left-1/2 rounded-full ${
                isDarkMode ? 'bg-gray-800/30 border-gray-700' : 'bg-white/30 border-gray-200'
            } border shadow-sm`}
            style={{
                bottom: "15px",
                transform: "translateX(-50%)",
            }}
        >
            {[
                { href: "/", label: "Home", icon: <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" /> },
                { href: "/craft", label: "Craft", icon: <circle cx="12" cy="12" r="10" /> },
                { href: "/projects", label: "Projects", icon: <rect x="4" y="4" width="16" height="16" /> },
                { href: "/photos", label: "Photos", icon: <path d="M4 4h16v16H4z" /> }
            ].map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    aria-label={item.label}
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${
                        isDarkMode ? 'bg-gray-700/60 hover:bg-gray-600/60' : 'bg-white/60 hover:bg-gray-100/60'
                    } transition-colors duration-200`}
                >
                    <svg
                        className={`w-8 h-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        {item.icon}
                    </svg>
                </a>
            ))}
        </div>
    );
};

export default Footer;

// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { isDarkMode } = useTheme();

    return (
        <div
            className={`c-lesPJm-iezzKVe-css flex items-center justify-between h-[70px] px-6 fixed z-10 left-1/2 rounded-full ${
                isDarkMode ? 'bg-gray-900/20' : 'bg-white/20'
            } backdrop-blur-md border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/30'} shadow-lg`}
            style={{
                bottom: "30px",
                transform: "translateX(-50%)",
                width: "420px",
            }}
        >
            {[
                { 
                    href: "/", 
                    label: "Home", 
                    icon: (
                        <path 
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                            strokeWidth="2"
                        />
                    )
                },
                { 
                    href: "/projects", 
                    label: "Projects", 
                    icon: (
                        <g strokeWidth="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                        </g>
                    )
                },
                { 
                    href: "/achievements", 
                    label: "Achievements", 
                    icon: (
                        <g strokeWidth="2">
                            <path d="M6 9l6 6 6-6"/>
                            <path d="M12 3v9"/>
                            <circle cx="12" cy="21" r="1"/>
                        </g>
                    )
                },
                { 
                    href: "/experience", 
                    label: "Experience", 
                    icon: (
                        <g strokeWidth="2">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                        </g>
                    )
                },
                { 
                    href: "/blog", 
                    label: "Blog", 
                    icon: (
                        <g strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14,2 14,8 20,8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10,9 9,9 8,9"/>
                        </g>
                    )
                },
                { 
                    href: "/architecture", 
                    label: "Solution Architecture", 
                    icon: (
                        <g strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <rect x="7" y="7" width="3" height="9"/>
                            <rect x="14" y="7" width="3" height="5"/>
                        </g>
                    )
                }
            ].map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    aria-label={item.label}
                    prefetch={false}
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${
                        isDarkMode 
                            ? 'hover:bg-gray-800/40' 
                            : 'hover:bg-white/40'
                    } transition-all duration-300 hover:-translate-y-1 group relative`}
                    title={item.label}
                >
                    <svg
                        className={`w-5 h-5 ${
                            isDarkMode 
                                ? 'text-gray-300 group-hover:text-white' 
                                : 'text-gray-600 group-hover:text-gray-900'
                        } transition-colors duration-300`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {item.icon}
                    </svg>
                </Link>
            ))}
        </div>
    );
};

export default Footer;

// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
    // Use one of your main component colors – adjust this as needed
    const mainColor = 'color(display-p3 0.94 0.19 0.04)';

    return (
        // Fixed at bottom-center
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            {/* The container is a rounded, blurred background circle with your main color */}
            <div
                className="flex items-center justify-center gap-2 p-2 rounded-full bg-opacity-80 backdrop-blur shadow-lg"
                style={{ background: mainColor }}
            >
                {/* Each menu item is a round button */}
                <a
                    href="/"
                    aria-label="Home"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white"
                >
                    <svg
                        className="w-6 h-6 text-black"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
                    </svg>
                </a>
                <a
                    href="/craft"
                    aria-label="Craft"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white"
                >
                    <svg
                        className="w-6 h-6 text-black"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </a>
                <a
                    href="/projects"
                    aria-label="Projects"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white"
                >
                    <svg
                        className="w-6 h-6 text-black"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <rect x="4" y="4" width="16" height="16" />
                    </svg>
                </a>
                <a
                    href="/photos"
                    aria-label="Photos"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white"
                >
                    <svg
                        className="w-6 h-6 text-black"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M4 4h16v16H4z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Footer;

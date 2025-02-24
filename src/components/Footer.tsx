// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
    return (
        <div
            className="flex items-end w-auto h-[58px] px-2 fixed z-10 left-1/2 rounded-full"
            style={{
                background: "rgb(255,255,255)",
                boxShadow: "var(--shadows-large)",
                border: "1px solid var(--colors-grayA4)",
                bottom: "16px", // Adjusted to ensure visibility
                transform: "translateX(-50%)", // Only horizontal centering
                // Remove animation temporarily for debugging:
                // animation: "500msease 200ms 1 normal forwards running k-PnvVd",
            }}
        >
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
    );
};

export default Footer;

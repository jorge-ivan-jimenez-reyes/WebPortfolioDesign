// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
    return (
        <div
            className="flex items-center justify-center gap-4 h-[80px] px-4 fixed z-10 left-1/2 rounded-full bg-white/30 border border-gray-200 shadow-sm"
            style={{
                bottom: "16px",
                transform: "translateX(-50%)",
            }}
        >
            <a
                href="/"
                aria-label="Home"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/60"
            >
                <svg
                    className="w-8 h-8 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
                </svg>
            </a>
            <a
                href="/craft"
                aria-label="Craft"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/60"
            >
                <svg
                    className="w-8 h-8 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </a>
            <a
                href="/projects"
                aria-label="Projects"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/60"
            >
                <svg
                    className="w-+8 h-8 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <rect x="4" y="4" width="16" height="16" />
                </svg>
            </a>
            <a
                href="/photos"
                aria-label="Photos"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/60"
            >
                <svg
                    className="w-8 h-8 text-black"
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

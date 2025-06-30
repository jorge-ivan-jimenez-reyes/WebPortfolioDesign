// src/components/Header.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize";

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
      className="shadow-lg fixed w-full z-50"
      style={{
        backgroundColor: 'var(--surface)',
        color: 'var(--text-primary)',
        borderBottom: `1px solid var(--border)`
      }}
      initial={false}
      animate={{
        backgroundColor: isDarkMode ? "var(--surface)" : "var(--surface)",
        color: isDarkMode ? "var(--text-primary)" : "var(--text-primary)",
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
          <Link
            href="/"
            className="transition duration-300 hover:opacity-80"
            style={{ color: 'var(--accent)' }}
          >
            My Portfolio
          </Link>
        </motion.div>
        {/* Hamburger menu for mobile */}
        <motion.button
          className="lg:hidden"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: 'var(--text-primary)' }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
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
              {["Projects", "Photos", "Craft"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="block lg:inline-block transition duration-300 px-3 py-2 rounded-md"
                    style={{
                      color: 'var(--text-secondary)',
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent)';
                      e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
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

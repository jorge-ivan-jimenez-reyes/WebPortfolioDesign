// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
            <nav className="container mx-auto px-4 py-6 flex flex-wrap justify-between items-center">
                {/* Logo or site name */}
                <div className="text-2xl font-bold tracking-tight">
                    <Link href="/" className="hover:text-yellow-300 transition duration-300">My Portfolio</Link>
                </div>
                {/* Navigation Links */}
                <ul className="flex flex-wrap space-x-1 sm:space-x-4 text-sm sm:text-base mt-4 sm:mt-0">
                    <li>
                        <Link href="/projects" className="hover:text-yellow-300 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-700">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/photos" className="hover:text-yellow-300 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-700">
                            Photos
                        </Link>
                    </li>
                    <li>
                        <Link href="/craft" className="hover:text-yellow-300 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-700">
                            Craft
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-yellow-300 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-700">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills" className="hover:text-yellow-300 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-700">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:text-yellow-300 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-700">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-yellow-300 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-700">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume" className="hover:text-yellow-300 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-700">
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

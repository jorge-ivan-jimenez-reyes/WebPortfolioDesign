// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo or site name */}
                <div className="text-xl font-bold">
                    <Link href="/">
                        <a>My Portfolio</a>
                    </Link>
                </div>
                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/projects">
                            <a className="hover:text-blue-600">Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/photos">
                            <a className="hover:text-blue-600">Photos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/craft">
                            <a className="hover:text-blue-600">Craft</a>
                        </Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

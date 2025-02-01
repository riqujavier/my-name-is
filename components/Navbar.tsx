import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-sm font-bold">
                    <Link href="/">MyPortfolio</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/about" className="text-white hover:text-gray-400">About</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="text-white hover:text-gray-400">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white hover:text-gray-400">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

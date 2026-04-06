'use client';
import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

const Navbar: React.FC = () => {
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <nav className="fixed top-0 w-full z-50 bg-gray-900/40 backdrop-blur-xl border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                <div className="text-white text-xl font-bold tracking-tight hover:text-indigo-400 transition-colors">
                    <Link href="/">JR</Link>
                </div>
                <div className="flex items-center gap-6">
                    <ul className="hidden md:flex space-x-8">
                        <li>
                            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{t('nav_about')}</a>
                        </li>
                        <li>
                            <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{t('nav_projects')}</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{t('nav_contact')}</a>
                        </li>
                    </ul>
                    <button 
                        onClick={toggleLanguage}
                        className="px-3 py-1 rounded-full border border-white/20 text-xs font-bold bg-white/5 hover:bg-white/10 transition-colors uppercase tracking-wider"
                    >
                        {language === 'en' ? 'ES' : 'EN'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

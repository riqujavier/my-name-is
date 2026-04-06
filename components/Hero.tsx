'use client';
import React from "react";
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center py-20 relative">
            <div className="relative z-10 space-y-6">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm pb-2">
                    {t('hero_title')}
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                    {t('hero_subtitle')}
                </p>
                <div className="pt-8">
                    <a href="#projects" className="px-8 py-3 outline-none rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all duration-300 text-white font-medium shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] inline-block">
                        {t('nav_projects')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

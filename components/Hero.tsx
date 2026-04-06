'use client';
import React from "react";
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center py-20 relative px-4">
            <div className="relative z-10 space-y-6 flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm pb-2">
                    {t('hero_title')}
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                    {t('hero_subtitle')}
                </p>
                <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#projects" className="px-8 py-3 outline-none rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all duration-300 text-white font-medium shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] block w-full sm:w-auto text-center">
                        {t('hero_btn_projects')}
                    </a>
                    {/* Placeholder action for Download CV. In a real scenario, href would point to /Javier_Riquelme_CV.pdf */}
                    <a href="#" className="px-8 py-3 outline-none rounded-full bg-indigo-600/80 border border-indigo-400/50 hover:bg-indigo-500 backdrop-blur-md transition-all duration-300 text-white font-medium shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2 w-full sm:w-auto">
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        <span className="whitespace-nowrap">{t('hero_btn_cv')}</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

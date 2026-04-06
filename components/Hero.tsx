'use client';
import React from "react";
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();
    const { themeClasses, glassClasses } = useTheme();
    
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center py-20 relative px-4">
            <div className="relative z-10 space-y-6 flex flex-col items-center">
                <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight ${themeClasses.textGradient} drop-shadow-sm pb-2`}>
                    {t('hero_title')}
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                    {t('hero_subtitle')}
                </p>
                <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#projects" className={`px-8 py-3 outline-none rounded-full ${glassClasses.card} ${glassClasses.hover} transition-all duration-300 text-white font-medium block w-full sm:w-auto text-center`}>
                        {t('hero_btn_projects')}
                    </a>
                    <a href="/Javier_Riquelme_CV_EN.pdf" target="_blank" rel="noopener noreferrer" className={`px-8 py-3 outline-none rounded-full ${themeClasses.buttonStyle} ${glassClasses.card} transition-all duration-300 text-white font-medium flex items-center justify-center gap-2 w-full sm:w-auto`}>
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        <span className="whitespace-nowrap">{t('hero_btn_cv')}</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

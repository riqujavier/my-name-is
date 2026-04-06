'use client';
import React from 'react';
import { useLanguage } from './LanguageContext';

const AboutMe: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="flex flex-col items-center justify-center py-12 relative z-10">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8 md:p-12 max-w-3xl w-full text-center md:text-left transition-all duration-300 hover:bg-white/10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                    {t('about_title')}
                </h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                    <p>
                        {t('about_p1')}
                    </p>
                    <p>
                        {t('about_p2')}
                    </p>
                    <p>
                        {t('about_p3')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
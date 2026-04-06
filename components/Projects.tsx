'use client';
import React from 'react';
import { useLanguage } from './LanguageContext';

const projects = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution with real-time inventory and seamless checkout.',
        link: '#'
    },
    {
        title: '3D Render Portfolio',
        description: 'Interactive gallery showcasing 3ds Max and V-Ray models on the web.',
        link: '#'
    },
    {
        title: 'Dashboard Analytics',
        description: 'Performance monitoring tool built with React and advanced charting libraries.',
        link: '#'
    }
];

const Projects: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-12 relative z-10">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
                    {t('projects_title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                            <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed font-light">{project.description}</p>
                            <a href={project.link} className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                                {t('projects_learn_more')}
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
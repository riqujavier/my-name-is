'use client';
import React, { useState } from 'react';
import { useTheme } from './ThemeContext';

const ThemeCustomizer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { colorTheme, setColorTheme, glassStyle, setGlassStyle, glassClasses } = useTheme();

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Control Panel Panel */}
            <div className={`mb-4 overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className={`${glassClasses.card} p-5 rounded-2xl w-64`}>
                    <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Live Settings</h3>
                    
                    <div className="mb-5">
                        <label className="text-xs text-gray-400 mb-2 block">Primary Color</label>
                        <div className="flex gap-2">
                            <button onClick={() => setColorTheme('midnight')} className={`w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 transition-transform ${colorTheme === 'midnight' ? 'border-white scale-110' : 'border-transparent'}`} />
                            <button onClick={() => setColorTheme('ocean')} className={`w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 transition-transform ${colorTheme === 'ocean' ? 'border-white scale-110' : 'border-transparent'}`} />
                            <button onClick={() => setColorTheme('emerald')} className={`w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 border-2 transition-transform ${colorTheme === 'emerald' ? 'border-white scale-110' : 'border-transparent'}`} />
                            <button onClick={() => setColorTheme('ruby')} className={`w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-orange-400 border-2 transition-transform ${colorTheme === 'ruby' ? 'border-white scale-110' : 'border-transparent'}`} />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs text-gray-400 mb-2 block">Glassmorphism Level</label>
                        <div className="flex flex-col gap-2">
                            <button onClick={() => setGlassStyle('soft')} className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${glassStyle === 'soft' ? 'bg-white/10 text-white border-white/20' : 'bg-transparent text-gray-400 border-transparent hover:bg-white/5'}`}>Soft (Default)</button>
                            <button onClick={() => setGlassStyle('heavy')} className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${glassStyle === 'heavy' ? 'bg-white/10 text-white border-white/20' : 'bg-transparent text-gray-400 border-transparent hover:bg-white/5'}`}>Heavy Blur</button>
                            <button onClick={() => setGlassStyle('solid')} className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${glassStyle === 'solid' ? 'bg-white/10 text-white border-white/20' : 'bg-transparent text-gray-400 border-transparent hover:bg-white/5'}`}>Disable Glass</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`w-12 h-12 rounded-full ${glassClasses.card} flex items-center justify-center hover:scale-110 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]`}
                aria-label="Open Theme Customizer"
            >
                <svg className={`w-6 h-6 text-white transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  )}
                  {!isOpen && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />}
                </svg>
            </button>
        </div>
    );
};

export default ThemeCustomizer;

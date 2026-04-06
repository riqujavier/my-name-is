'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ColorTheme = 'midnight' | 'ocean' | 'emerald' | 'ruby';
type GlassStyle = 'soft' | 'heavy' | 'solid';

export const ThemeContext = createContext<{
  colorTheme: ColorTheme;
  setColorTheme: (v: ColorTheme) => void;
  glassStyle: GlassStyle;
  setGlassStyle: (v: GlassStyle) => void;
  themeClasses: any;
  glassClasses: any;
}>(null as any);

const themeMap = {
    midnight: {
        textGradient: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500",
        buttonStyle: "bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.3)] border-indigo-400/30",
        buttonStroke: "border-indigo-400/30",
        iconStyle: "text-indigo-400"
    },
    ocean: {
        textGradient: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",
        buttonStyle: "bg-blue-600 hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)] border-blue-400/30",
        buttonStroke: "border-blue-400/30",
        iconStyle: "text-blue-400"
    },
    emerald: {
        textGradient: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400",
        buttonStyle: "bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_15px_rgba(5,150,105,0.3)] border-emerald-400/30",
        buttonStroke: "border-emerald-400/30",
        iconStyle: "text-emerald-400"
    },
    ruby: {
        textGradient: "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400",
        buttonStyle: "bg-rose-600 hover:bg-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.3)] border-rose-400/30",
        buttonStroke: "border-rose-400/30",
        iconStyle: "text-rose-400"
    }
}

const glassMap = {
    soft: {
        card: "bg-white/5 backdrop-blur-md border border-white/10 shadow-lg",
        hover: "hover:bg-white/[0.07] hover:border-white/20"
    },
    heavy: {
        card: "bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl",
        hover: "hover:bg-white/[0.15] hover:border-white/30"
    },
    solid: {
        card: "bg-[#13111C] border border-[#2D2A3B] shadow-xl", 
        hover: "hover:bg-[#1C1A27] hover:border-[#3E3A52]"
    }
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [colorTheme, setColorTheme] = useState<ColorTheme>('midnight');
    const [glassStyle, setGlassStyle] = useState<GlassStyle>('soft');

    return (
        <ThemeContext.Provider value={{
            colorTheme, setColorTheme,
            glassStyle, setGlassStyle,
            themeClasses: themeMap[colorTheme],
            glassClasses: glassMap[glassStyle]
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

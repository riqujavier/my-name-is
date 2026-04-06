'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    hero_title: "I'm Javier Riquelme",
    hero_subtitle: "Crafting modern web experiences.",
    about_title: "About Me",
    about_p1: "Hello! I'm Javier, a passionate developer who loves blending engaging narratives with beautiful user interfaces.",
    about_p2: "Instead of a traditional CV, I prefer to let my work speak for itself. I focus on creating intuitive, performant, and stunning applications that leave a lasting impression.",
    about_p3: "Whether I'm debugging complex logic or polishing pixel-perfect designs, I strive to grow and learn every single day.",
    projects_title: "Featured Projects",
    projects_learn_more: "Learn more"
  },
  es: {
    nav_about: 'Sobre Mí',
    nav_projects: 'Proyectos',
    nav_contact: 'Contacto',
    hero_title: "Soy Javier Riquelme",
    hero_subtitle: "Creando experiencias web modernas.",
    about_title: "Sobre Mí",
    about_p1: "¡Hola! Soy Javier, un desarrollador apasionado al que le encanta combinar narrativas atractivas con hermosas interfaces de usuario.",
    about_p2: "En lugar de un CV tradicional, prefiero que mi trabajo hable por sí mismo. Me concentro en crear aplicaciones intuitivas, rápidas e impresionantes que dejen una huella.",
    about_p3: "Ya sea depurando lógica compleja o puliendo diseños perfectos, me esfuerzo por crecer y aprender todos los días.",
    projects_title: "Proyectos Destacados",
    projects_learn_more: "Más información"
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

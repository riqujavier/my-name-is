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
    hero_subtitle: "Frontend Developer | React & Next.js",
    hero_btn_projects: "Projects",
    hero_btn_cv: "Download CV",
    about_title: "My Journey",
    about_p1: "Hello! I'm Javier, a passionate Frontend Developer based in Buenos Aires. I specialize in building scalable, accessible, and high-performance web applications using React and modern JavaScript.",
    about_p2: "Currently, I work as a Frontend Developer at The8Agency, where I develop reusable components for production environments and integrate them with Magnolia CMS. My focus is always on performance, clean architecture, and delivering responsive, user-focused solutions.",
    about_p3: "Before transitioning fully to Frontend, my background in IT support gave me a strong foundation in problem-solving. Whether I'm collaborating with design and backend teams or optimizing accessibility (WCAG), I am constantly growing and eager for new challenges.",
    tech_title: "Tech Stack",
    projects_title: "Featured Projects",
    projects_private: "Confidential Client Project",
    contact_title: "Let's Connect",
    contact_desc: "Whether you have a question or just want to collaborate, my inbox is open!",
    contact_btn: "Send Message",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message"
  },
  es: {
    nav_about: 'Sobre Mí',
    nav_projects: 'Proyectos',
    nav_contact: 'Contacto',
    hero_title: "Soy Javier Riquelme",
    hero_subtitle: "Frontend Developer | React & Next.js",
    hero_btn_projects: "Proyectos",
    hero_btn_cv: "Descargar CV",
    about_title: "Mi Historia",
    about_p1: "¡Hola! Soy Javier, un desarrollador Frontend apasionado radicado en Buenos Aires. Me especializo en construir aplicaciones web escalables, accesibles y de alto rendimiento utilizando React y JavaScript moderno.",
    about_p2: "Actualmente trabajo como Desarrollador Frontend en The8Agency, donde desarrollo componentes reutilizables y los integro con Magnolia CMS. Mi enfoque siempre está en el rendimiento, la arquitectura limpia y en entregar soluciones responsivas orientadas al usuario.",
    about_p3: "Antes de dedicarme por completo al Frontend, mi experiencia en soporte IT me brindó una sólida base en resolución de problemas. Ya sea colaborando con equipos de diseño y backend u optimizando la accesibilidad (WCAG), busco crecer constantemente y enfrentar nuevos desafíos.",
    tech_title: "Herramientas y Tecnologías",
    projects_title: "Proyectos Destacados",
    projects_private: "Proyecto Confidencial de Cliente",
    contact_title: "Hablemos",
    contact_desc: "Ya sea para una oportunidad laboral o simplemente para saludar, ¡mi bandeja de entrada está abierta!",
    contact_btn: "Enviar Mensaje",
    form_name: "Nombre",
    form_email: "Correo",
    form_message: "Mensaje"
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

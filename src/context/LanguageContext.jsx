import React, { createContext, useState, useContext } from 'react';
import en from '../i18n/en';
import es from '../i18n/es';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  // Determinamos el diccionario actual aquí una sola vez
  const dictionary = language === 'es' ? es : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
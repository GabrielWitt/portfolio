import React, { useState } from 'react';
import './Header.css';
import { useLanguage } from '../context/LanguageContext';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ onOpenContact }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleResumeClick = () => {
    const cvUrl = language === 'en' 
      ? 'https://raw.githubusercontent.com/GabrielWitt/portfolio/948e7757adf8904e780b527cc766b7ec61b006f7/src/assets/CV/GabrielWittCV.pdf'
      : 'https://raw.githubusercontent.com/GabrielWitt/portfolio/948e7757adf8904e780b527cc766b7ec61b006f7/src/assets/CV/GabrielWittCVSP.pdf';
    window.open(cvUrl, '_blank', 'noopener,noreferrer');
    closeMenu();
  };

  return (
    <header className="header-container">
      {/* Botón Hamburguesa - Solo Mobile */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Logo - Centrado en Mobile */}
      <div className="logo-section" onClick={() => { window.scrollTo(0,0); closeMenu(); }}>
        <div className="logo-icon">&lt;/&gt;</div>
        <span className="logo-text">GabroDev</span>
      </div>

      {/* Navegación Desktop - Se esconde en Mobile */}
      <nav className="nav-menu-desktop">
        <a href="#home" className="nav-link">{t.header.home}</a>
        <a href="#projects" className="nav-link">{t.header.projects}</a>
        <a href="#skills" className="nav-link">{t.header.skills}</a>
        <a href="#experience" className="nav-link">{t.header.exp}</a>
      </nav>

      {/* Acciones Derecha - Idioma siempre visible, botones solo Desktop */}
      <div className="actions-section">
        <div className="lang-toggle" onClick={toggleLanguage}>
          <span className={language === 'en' ? 'lang-active' : ''}>EN</span>
          <span className="lang-divider">/</span>
          <span className={language === 'es' ? 'lang-active' : ''}>ES</span>
        </div>

        <button onClick={handleResumeClick} className="resume-btn desktop-only">
          {t.header.resume}
        </button>

        <button className="btn btn-primary desktop-only" onClick={onOpenContact}>
          {t.header.contact}
        </button>
      </div>

      {/* Menú Mobile (Copia de navegación + acciones) */}
      <div className={`nav-menu-mobile ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>{t.header.home}</a>
        <a href="#projects" onClick={closeMenu}>{t.header.projects}</a>
        <a href="#skills" onClick={closeMenu}>{t.header.skills}</a>
        <a href="#experience" onClick={closeMenu}>{t.header.exp}</a>
        <hr className="mobile-divider" />
        <a href="#experience" onClick={handleResumeClick}>{t.header.resume}</a>
        <button className="btn btn-primary" onClick={() => { onOpenContact(); closeMenu(); }}>
          {t.header.contact}
        </button>
      </div>
    </header>
  );
};

export default Header;
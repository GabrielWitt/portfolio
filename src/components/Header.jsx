import './Header.css';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  
  const texts = {
    es: { home: 'Inicio', projects: 'Proyectos', skills: 'Habilidades', exp: 'Experiencia', contact: 'Contacto', resume: 'CV' },
    en: { home: 'Home', projects: 'Projects', skills: 'Skills', exp: 'Experience', contact: 'Contact', resume: 'Resume' }
  };

  const t = texts[language]; 

  return (
    <header className="header-container">
      {/* 1. Logo Section */}
      <div className="logo-section">
        <div className="logo-icon">&lt;/&gt;</div>
        <span className="logo-text">GabroDev</span>
      </div>

      {/* 2. Navigation Links (Ahora usan la variable 't') */}
      <nav className="nav-menu">
        <a href="#home" className="nav-link">{t.home}</a>
        <a href="#projects" className="nav-link">{t.projects}</a>
        <a href="#skills" className="nav-link">{t.skills}</a>
        <a href="#experience" className="nav-link">{t.exp}</a>
      </nav>

      {/* 3. Actions Section */}
      <div className="actions-section">
        
        {/* Language Toggle conectado al Contexto */}
        <div className="lang-toggle" onClick={toggleLanguage}>
          {/* Tu contexto usa 'en'/'es' en minúsculas, ajustamos la condición */}
          <span className={language === 'en' ? 'lang-active' : ''}>EN</span>
          <span className="lang-divider">/</span>
          <span className={language === 'es' ? 'lang-active' : ''}>ES</span>
        </div>

        <button className="btn btn-secondary">
          {t.resume}
        </button>

        <button className="btn btn-primary">
          {t.contact}
        </button>
      </div>
    </header>
  );
};

export default Header;
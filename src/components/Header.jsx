import './Header.css';
import { useLanguage } from '../context/LanguageContext';

// Recibimos onOpenContact como prop
const Header = ({ onOpenContact }) => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="header-container">
      <div className="logo-section">
        <div className="logo-icon">&lt;/&gt;</div>
        <span className="logo-text">GabroDev</span>
      </div>

      <nav className="nav-menu">
        <a href="#home" className="nav-link">{t.header.home}</a>
        <a href="#projects" className="nav-link">{t.header.projects}</a>
        <a href="#skills" className="nav-link">{t.header.skills}</a>
        <a href="#experience" className="nav-link">{t.header.exp}</a>
      </nav>

      <div className="actions-section">
        <div className="lang-toggle" onClick={toggleLanguage}>
          <span className={language === 'en' ? 'lang-active' : ''}>EN</span>
          <span className="lang-divider">/</span>
          <span className={language === 'es' ? 'lang-active' : ''}>ES</span>
        </div>

        <button 
          className="btn btn-secondary" 
          onClick={() => window.open('/path-to-your-cv.pdf', '_blank')}
        >
          {t.header.resume}
        </button>

        <button className="btn btn-primary" onClick={onOpenContact}>
          {t.header.contact}
        </button>
      </div>
    </header>
  );
};

export default Header;
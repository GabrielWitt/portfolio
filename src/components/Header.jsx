import './Header.css';
import { useLanguage } from '../context/LanguageContext';

// Recibimos onOpenContact como prop
const Header = ({ onOpenContact }) => {
  const { language, toggleLanguage, t } = useLanguage();

  const handleResumeClick = () => {
      // URLs directas (Raw) para que el navegador abra el PDF directamente
      const cvUrl = language === 'en' 
        ? 'https://raw.githubusercontent.com/GabrielWitt/portfolio/948e7757adf8904e780b527cc766b7ec61b006f7/src/assets/CV/GabrielWittCV.pdf'
        : 'https://raw.githubusercontent.com/GabrielWitt/portfolio/948e7757adf8904e780b527cc766b7ec61b006f7/src/assets/CV/GabrielWittCVSP.pdf';

      // Abrir en pestaña nueva
      window.open(cvUrl, '_blank', 'noopener,noreferrer');
    };
  
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

        <button onClick={handleResumeClick} className="resume-btn">
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
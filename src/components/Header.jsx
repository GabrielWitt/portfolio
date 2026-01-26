import './Header.css';
import { useLanguage } from '../context/LanguageContext';
import cvEn from '../CV/GabrielWittCV.pdf';
import cvEs from '../CV/GabrielWittCVSP.pdf';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const handleDownload = () => {
    // Seleccionamos el archivo importado según el idioma
    const cvFile = language === 'en' ? cvEn : cvEs;
    const fileName = language === 'en' ? 'GabrielWittCV.pdf' : 'GabrielWittCVSP.pdf';

    // Disparamos la descarga
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

        <button 
          className="btn btn-secondary" 
          onClick={() => window.open('/path-to-your-cv.pdf', '_blank')}
        >
          {t.header.resume}
        </button>

        <button onClick={handleDownload} className="resume-btn">
          {t.header.resume}
        </button>
      </div>
    </header>
  );
};

export default Header;
import './Hero.css';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      headline: "Frontend & Mobile Developer",
      subtitle: "Construyendo experiencias digitales impecables para web y móvil con React, Swift y herramientas modernas.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Contrátame",
    },
    en: {
      headline: "Frontend & Mobile Developer",
      subtitle: "Building seamless digital experiences for web and mobile with React, Swift, and modern tools.",
      ctaPrimary: "View projects",
      ctaSecondary: "Hire me",
    }
  };

  const { headline, subtitle, ctaPrimary, ctaSecondary } = content[language];

  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Contenedor de Imagen */}
        <div className="hero-image-wrapper">
          <div className="hero-accent-blur"></div>
          <div className="hero-placeholder">
            <img 
              src="../../assets/project-dummy.png" 
              alt="Developer Profile" 
              onError={(e) => e.target.style.display = 'none'}
            />
            <span className="placeholder-text">hero-dummy.png</span>
          </div>
        </div>

        {/* Contenedor de Texto */}
        <div className="hero-text-content">
          <h1 className="hero-headline">{headline}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          
          <div className="hero-cta-group">
            <button className="btn-primary">
              {ctaPrimary}
            </button>
            <button className="btn-secondary">
              {ctaSecondary}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
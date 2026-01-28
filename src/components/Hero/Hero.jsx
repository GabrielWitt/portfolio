import './Hero.css';
import { useLanguage } from '../../context/LanguageContext';
import profileImg from '../../assets/GAboWittPortfolio.png';

const Hero = () => {
  // Extraemos 't' (las traducciones) del contexto
  const { t } = useLanguage();

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        {/* Contenedor de Imagen */}
        <div className="hero-image-wrapper">
          <div className="hero-accent-blur"></div>
          <div className="hero-image-main">
            <img 
              src={profileImg} 
              alt="Gabriel Esteban Witt - Senior Frontend & Mobile Engineer" 
              className="hero-profile-img"
              // En caso de error, podrías mostrar un fallback o un icono
              onError={(e) => e.target.src = 'https://via.placeholder.com/400'} 
            />
          </div>
        </div>

        {/* Contenedor de Texto - Usando la data del JSON */}
        <div className="hero-text-content">
          <h1 className="hero-headline">
            {t.home.headline}
          </h1>
          <p className="hero-subtitle">
            {t.home.subtitle}
          </p>
          
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              {t.home.ctaPrimary}
            </a>
            <a href="#contact" className="btn btn-secondary">
              {t.home.ctaSecondary}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
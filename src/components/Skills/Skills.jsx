import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  FaReact, FaNodeJs, FaMobileAlt, FaCloud, 
  FaLightbulb, FaComments, FaTasks, FaApple, 
  FaCode
} from 'react-icons/fa';
import { 
  SiTypescript, SiFirebase, SiTailwindcss, SiIonic, SiSwift, SiRedux, SiGoogleplay, SiAmazon 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const { t } = useLanguage();

  // Diccionario de iconos para habilidades técnicas
  const getIcon = (skill) => {
    const icons = {
      'React': <FaReact />,
      'TypeScript': <SiTypescript />,
      'Next.js': <FaReact />, // Next no tiene icono oficial en FA/SI a veces, React queda bien
      'Redux': <SiRedux />,
      'Tailwind CSS': <SiTailwindcss />,
      'React Native': <FaMobileAlt />,
      'Ionic': <SiIonic />,
      'SwiftUI': <SiSwift />,
      'App Store Publishing': <FaApple />, // Para la versión EN
      'Publicación en App Store': <FaApple />, // Para la versión ES
      'Play Store Publishing': <SiGoogleplay />, // Para la versión EN
      'Publicación en Play Store': <SiGoogleplay />, // Para la versión ES
      'Node.js': <FaNodeJs />,
      'Firebase': <SiFirebase />,
      'RESTful APIs': <FaCode />, // Versión en inglés
      'APIs RESTful': <FaCode />, // Versión en español
      'NoSQL': <FaCloud />,
      'AWS Cognito & Lambda': <SiAmazon />,
    };
    return icons[skill] || null;
  };

  // Diccionario de iconos para habilidades blandas
  const getSoftIcon = (iconName) => {
    const icons = {
      'FaLightbulb': <FaLightbulb />,
      'FaComments': <FaComments />,
      'FaTasks': <FaTasks />
    };
    return icons[iconName] || <FaLightbulb />;
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">{t.skillsSection.title}</h2>
        
        {/* Hard Skills Grid */}
        <div className="skills-grid">
          {t.skillsSection.categories.map((cat) => (
            <div key={cat.id} className="skill-category-card">
              <h3 className="category-title">{cat.title}</h3>
              <div className="skills-list">
                {cat.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <span className="skill-icon">{getIcon(skill)}</span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="skills-divider" />

        {/* Soft Skills Section */}
        <div className="soft-skills-container">
          <h3 className="soft-skills-headline">{t.skillsSection.softTitle}</h3>
          <div className="soft-skills-grid">
            {t.skillsSection.softSkills.map((soft, index) => (
              <div key={index} className="soft-skill-card">
                <div className="soft-icon-circle">
                  {getSoftIcon(soft.icon)}
                </div>
                <p className="soft-skill-name">{soft.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
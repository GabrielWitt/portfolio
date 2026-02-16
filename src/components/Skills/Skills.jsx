import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  FaReact, 
  FaMobileAlt, 
  FaApple, 
  FaNodeJs, 
  FaCode, 
  FaCloud,
  FaLightbulb,
  FaComments,
  FaTasks,
  FaCheckCircle
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiRedux, 
  SiTailwindcss, 
  SiIonic, 
  SiSwift, 
  SiGoogleplay, 
  SiFirebase, 
  SiAmazon,
  SiNextdotjs,
  SiJavascript,
  SiDotnet
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const { t } = useLanguage();

  // Diccionario de iconos para habilidades técnicas (Hard Skills)
  const iconsMap = {
    'React': <FaReact />,
    'TypeScript': <SiTypescript />,
    'JavaScript': <SiJavascript />,
    'Next.js': <SiNextdotjs />,
    'Redux': <SiRedux />,
    'Tailwind CSS': <SiTailwindcss />,
    'React Native': <FaMobileAlt />,
    'Ionic (v3–v7)': <SiIonic />,
    'SwiftUI': <SiSwift />,
    'App Store Publishing': <FaApple />,
    'Publicación en App Store': <FaApple />,
    'Play Store Publishing': <SiGoogleplay />,
    'Publicación en Play Store': <SiGoogleplay />,
    'Node.js': <FaNodeJs />,
    'Firebase': <SiFirebase />,
    'Firebase (Auth, Firestore, Functions)': <SiFirebase />,
    'AWS Cognito': <SiAmazon />,
    'AWS S3': <SiAmazon />,
    'AWS Lambda': <SiAmazon />,
    'REST API Design': <FaCode />,
    'Diseño de APIs REST': <FaCode />,
    'Planificación de Arquitectura Cloud': <FaCloud />,
    'Cloud Architecture Planning': <FaCloud />,
    'RESTful APIs': <FaCode />,
    'APIs RESTful': <FaCode />,
    'NoSQL': <FaCloud />,
    '.NET': <SiDotnet />,
    'Modular Component Systems': <FaTasks />, // idea: modularidad/tareas
    'Sistemas Modulares de Componentes': <FaTasks />, // idea: modularidad/tareas
    'Clean Architecture (UI)': <FaCode />, // idea: arquitectura
    'Capas de Abstracción de API': <FaCloud />, // idea: abstracción cloud/API
    'API Abstraction Layers': <FaCloud />, // idea: abstracción cloud/API
    'Pruebas Automatizadas': <FaCheckCircle />, // requiere import
    'Automated Testing': <FaCheckCircle /> // requiere import
  };

  // Diccionario de iconos para habilidades blandas (Soft Skills)
  const softIconsMap = {
    'FaLightbulb': <FaLightbulb />,
    'FaComments': <FaComments />,
    'FaTasks': <FaTasks />
  };

  const getIcon = (skill) => iconsMap[skill] || null;
  const getSoftIcon = (iconName) => softIconsMap[iconName] || <FaLightbulb />;

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

import { useLanguage } from '../../context/LanguageContext';
import './Projects.css';
import DvoraImg from '../../assets/DvoraProject.png';
import HabitsImg from '../../assets/HabitsAI.png';
import InsuranceImg from '../../assets/Insurance.png';

const Projects = () => {
  // Ahora extraemos 't' (traducciones) y 'language' del contexto
  const { t, language } = useLanguage();

  const srtImg = (projectName) => {
    switch(projectName) {
      case 'HABITSAI':
        return HabitsImg;
      case 'DVORA':
        return DvoraImg;
      case 'Insurance':
        return InsuranceImg;
      default:
        break;
    }
    return DvoraImg;
  }

  return (
    <section id="projects" className="projects-section">
      {/* Usamos el título que viene del JSON de traducción */}
      <h2 className="section-title">{t.skills.sectionTitle}</h2>
      
      <div className="projects-grid">
        {t.skills.projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              {/* Intentamos cargar la imagen, si falla mostramos el icono */}
              <img 
                src={srtImg(project.image)} 
                className="project-img" 
                alt={project.content[language].title}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="dummy-image" style={{display: 'none'}}>
                <span className="image-icon">🖼️</span>
              </div>
            </div>

            <div className="project-info">
              {/* Accedemos al contenido según el idioma actual */}
              <h3 className="project-title">
                {project.content[language].title}
              </h3>
              <p className="project-description">
                {project.content[language].description}
              </p>
              
              <div className="tech-stack">
                {project.tech.map((tag, index) => (
                  <span key={index} className="tech-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
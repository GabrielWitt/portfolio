import { useLanguage } from '../../context/LanguageContext';
import './Projects.css';
import DvoraImg from '../../assets/DvoraProject.png';
import HabitsImg from '../../assets/HabitsAI.png';
import InsuranceImg from '../../assets/Insurance.png';

const Projects = () => {
  const { t } = useLanguage();

  const srtImg = (projectName) => {
    switch(projectName) {
      case 'HABITSAI':
        return HabitsImg;
      case 'DVORA':
        return DvoraImg;
      case 'Insurance':
        return InsuranceImg;
      default:
        return DvoraImg;
    }
  }

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">{t.projects.sectionTitle}</h2>
      
      <div className="projects-grid">
        {t.projects.projects.map((project) => (
          <div key={project.id} className="project-card">
            
            <div className="project-image-container">
              <img 
                src={srtImg(project.image)} 
                className="project-img" 
                alt={project.content.title}
              />
            </div>

            <div className="project-info">
              
              <h3 className="project-title">
                {project.content.title}
              </h3>

              <p className="project-problem">
                <strong>Problem:</strong> {project.content.problem}
              </p>

              <p className="project-role">
                <strong>Role:</strong> {project.content.role}
              </p>

              <ul className="project-impact">
                {project.content.impact.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

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

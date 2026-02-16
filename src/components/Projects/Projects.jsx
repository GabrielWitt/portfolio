import { useLanguage } from '../../context/LanguageContext';
import './Projects.css';
import { useState } from 'react';
import ProjectInfo from './component/ProjectInfo';
import DvoraImg from '../../assets/DvoraProject.png';
import HabitsImg from '../../assets/HabitsAI.png';
import InsuranceImg from '../../assets/Insurance.png';

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);


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

              <div className="project-section">
                <span className="project-label">{t.projects.problemLabel}</span>
                <p className="clamp-2">
                  {project.content.problem}
                </p>
              </div>

              <div className="project-section">
                <span className="project-label">{t.projects.roleLabel}</span>
                <p className="clamp-2">
                  {project.content.role}
                </p>
              </div>

              <button
                className="case-study-btn"
                onClick={() => setSelectedProject(project)}
              >
                {t.projects.caseStudyButton}
              </button>

            </div>
          </div>
        ))}
      </div>

      <ProjectInfo 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </section>
  );
};

export default Projects;

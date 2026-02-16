import './ProjectInfo.css';
import { useLanguage } from '../../../context/LanguageContext';

const ProjectInfo = ({ project, onClose }) => {
  const { t } = useLanguage();
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="modal-title">
          {project.content.title}
        </h2>

        <div className="modal-section">
          <span className="project-label">{t.projects.problemLabel}</span>
          <p>{project.content.problem}</p>
        </div>

        <div className="modal-section">
          <span className="project-label">{t.projects.roleLabel}</span>
          <p>{project.content.role}</p>
        </div>

        <div className="modal-section">
          <span className="project-label">{t.projects.impactLabel}</span>
          <ul className="impact-list">
            {project.content.impact.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="tech-stack modal-tech">
          {project.tech.map((tag, index) => (
            <span key={index} className="tech-chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;

import { useLanguage } from '../../context/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { language } = useLanguage();

  const projectData = [
    {
      id: 1,
      image: '../../assets/project-dummy.png',
      tech: ['React', 'Node.js', 'MongoDB'],
      content: {
        en: {
          title: 'E-commerce Platform Redesign',
          description: 'Modernized online store with improved UX and performance.',
        },
        es: {
          title: 'Rediseño de Plataforma E-commerce',
          description: 'Tienda en línea modernizada con UX y rendimiento mejorados.',
        }
      }
    },
    {
      id: 2,
      image: '../../assets/project-dummy.png',
      tech: ['Vue.js', 'GraphQL', 'Sass'],
      content: {
        en: {
          title: 'Portfolio Website v2',
          description: 'Personal branding site with blog integration.',
        },
        es: {
          title: 'Sitio Web Portafolio v2',
          description: 'Sitio de marca personal con integración de blog.',
        }
      }
    },
    {
      id: 3,
      image: '../../assets/project-dummy.png',
      tech: ['Angular', 'Firebase', 'TypeScript'],
      content: {
        en: {
          title: 'Task Management App',
          description: 'Collaborative tool with real-time updates.',
        },
        es: {
          title: 'App de Gestión de Tareas',
          description: 'Herramienta colaborativa con actualizaciones en tiempo real.',
        }
      }
    }
  ];

  const t = {
    en: { sectionTitle: 'MY PROJECTS' },
    es: { sectionTitle: 'MIS PROYECTOS' }
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">{t[language].sectionTitle}</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <div className="dummy-image">
                <span className="image-icon">🖼️</span>
                <img 
                  src={project.image}
                  alt="Developer Profile" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.content[language].title}</h3>
              <p className="project-description">{project.content[language].description}</p>
              <div className="tech-stack">
                {project.tech.map((tag, index) => (
                  <span key={index} className="tech-chip">{tag}</span>
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
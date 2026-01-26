import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Experience.css';

const Experience = () => {
  // Extraemos t para las traducciones y language para saber qué versión mostrar
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="experience-title">{t.experience.title}</h2>
        
        <div className="timeline-container">
          {t.experience.jobs.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <div className="experience-card">
                <div className="experience-header">
                  {/* Si no tienes logos aún, puedes usar un icono genérico de react-icons */}
                  <div className="company-logo-placeholder">
                    {job.company.charAt(0)}
                  </div>
                  
                  <div className="title-group">
                    <h3>{job.role}</h3>
                    <span className="company-name">{job.company}</span>
                  </div>
                  <span className="experience-years">{job.years}</span>
                </div>
                <p className="experience-description">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
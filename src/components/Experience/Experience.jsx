import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { experienceData } from '../../data/experienceData';
import './Experience.css';

const Experience = () => {
  const { language } = useLanguage();

  return (
    <section className="experience-section">
      <h2 className="experience-title">
        {language === 'es' ? 'Experiencia Profesonal' : 'Professional Experience'}
      </h2>
      
      <div className="timeline-container">
        {experienceData.map((item) => {
          const content = item[language];
          return (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <img src={item.logo} alt={content.company} className="company-logo" />
                  <div className="title-group">
                    <h3>{content.role}</h3>
                    <span className="company-name">{content.company}</span>
                  </div>
                  <span className="experience-years">{content.years}</span>
                </div>
                <p className="experience-description">{content.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Skills.css';
import { 
  FaCode, FaComments, FaLightbulb, FaTasks, 
  FaJs, FaReact, FaHtml5, FaNodeJs, FaGitAlt, FaFigma 
} from 'react-icons/fa';

const SkillsSection = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Technical Skills",
      softTitle: "Soft Skills",
      soft: [
        { name: "Problem Solving", icon: <FaLightbulb /> },
        { name: "Communication", icon: <FaComments /> },
        { name: "Project Management", icon: <FaTasks /> }
      ]
    },
    es: {
      title: "Habilidades Técnicas",
      softTitle: "Habilidades Blandas",
      soft: [
        { name: "Resolución de Problemas", icon: <FaLightbulb /> },
        { name: "Comunicación", icon: <FaComments /> },
        { name: "Gestión de Proyectos", icon: <FaTasks /> }
      ]
    }
  };

  const t = content[language];

  const coreSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "HTML/CSS", level: 95 },
  ];

  const tools = ["Node.js", "Express", "PostgreSQL", "Git", "AWS", "TypeScript", "Figma", "Python"];

  return (
    <section className="skills-container">
      <h2 className="skills-title">{t.title}</h2>
      
      <div className="skills-grid">
        {/* Progress Bars Column */}
        <div className="skills-column">
          {coreSkills.map((skill, index) => (
            <div key={index} className="skill-bar-wrapper">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="progress-bg">
                <div 
                  className="progress-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Chips Column */}
        <div className="skills-column tools-flex">
          {tools.map((tool, index) => (
            <span key={index} className="skill-chip">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* Soft Skills Section */}
      <h3 className="soft-skills-title">{t.softTitle}</h3>
      <div className="soft-skills-grid">
        {t.soft.map((skill, index) => (
          <div key={index} className="soft-skill-card">
            <div className="soft-icon-circle">
              {skill.icon}
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from '../../../context/LanguageContext';
import "./ProjectInfo.css";

const ProjectInfo = ({ project, onClose }) => {
  const { t } = useLanguage();
  const { content, tech } = project;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">{content.title}</h2>

        <div className="project-info-details">

          {content.context && (
            <div className="modal-section">
              <span className="project-label">{t.projects.contextLabel}</span>
              <p>{content.context}</p>
            </div>
          )}

          {content.challenge && (
            <div className="modal-section">
              <span className="project-label">{t.projects.challengeLabel}</span>
              <p>{content.challenge}</p>
            </div>
          )}

          {content.architecture && (
            <div className="modal-section">
              <span className="project-label">{t.projects.architectureLabel}</span>
              <ul className="impact-list">
                {content.architecture.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {content.tradeoffs && (
            <div className="modal-section">
              <span className="project-label">{t.projects.tradeoffsLabel}</span>
              <p>{content.tradeoffs}</p>
            </div>
          )}

          {content.role && (
            <div className="modal-section">
              <span className="project-label">{t.projects.roleLabel}</span>
              <p>{content.role}</p>
            </div>
          )}

          {content.impact && (
            <div className="modal-section">
              <span className="project-label">{t.projects.impactLabel}</span>
              <ul className="impact-list">
                {content.impact.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {tech && (
          <div className="tech-stack">
            {tech.map((item, index) => (
              <span key={index} className="tech-chip">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ProjectInfo;

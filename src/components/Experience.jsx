import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { language } = useLanguage();
  const experiences = [
    {
      role: "Senior Fullstack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      desc: language === 'es' ? "Liderazgo de equipo y arquitectura de microservicios." : "Team leadership and microservices architecture."
    },
    {
      role: "Backend Developer",
      company: "Innovate Digital",
      period: "2020 - 2022",
      desc: language === 'es' ? "Optimización de bases de datos y APIs REST." : "Database optimization and REST APIs."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          {language === 'es' ? 'Trayectoria Profesional' : 'Professional Path'}
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-indigo-500">
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_#6366f1]"></div>
              <span className="text-indigo-400 font-mono text-sm">{exp.period}</span>
              <h3 className="text-2xl font-bold mt-1">{exp.role}</h3>
              <p className="text-slate-400 font-medium">{exp.company}</p>
              <p className="mt-4 text-slate-300 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
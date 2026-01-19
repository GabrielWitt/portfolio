import React from 'react';
import { LanguageProvider } from './context/LanguageContext';

// Importación de componentes
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-700">
        
        {/* El Header ya contiene la lógica del LanguageContext y navegación fija */}
        <Header />

        <main>
          {/* Hero Section (Inicio) */}
          <section id="home">
            <Hero />
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20">
            <Projects />
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 bg-slate-50">
            {/* Nota: bg-slate-50 da un contraste sutil de fondo si lo deseas */}
            <Skills />
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20">
            <Experience />
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <Contact />
          </section>
        </main>

        <footer className="py-10 text-center text-slate-400 border-t border-slate-100 text-sm">
          <p>© 2026 Fullstack Developer Portfolio. Built with React & Tailwind.</p>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';

// Importación de componentes
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  // Estado para controlar el Modal
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-700">
        
        {/* Pasamos la función openContact al Header */}
        <Header onOpenContact={openContact} />

        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="projects" className="py-20">
            <Projects />
          </section>

          <section id="skills" className="py-20 bg-slate-50">
            <Skills />
          </section>

          <section id="experience" className="py-20">
            <Experience />
          </section>
          
          {/* Hemos eliminado la <section id="contact"> del flujo normal */}
        </main>

        <footer className="py-10 text-center text-slate-400 border-t border-slate-100 text-sm">
          <p>© 2026 Fullstack Developer Portfolio. Built with React & Tailwind.</p>
        </footer>

        {/* Renderizamos el Contacto como Modal si el estado es true */}
        {isContactOpen && <Contact onClose={closeContact} />}
        
      </div>
    </LanguageProvider>
  );
}

export default App;
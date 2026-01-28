import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';

// Importación de componentes
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

// Importamos el CSS global que tiene las variables de modo oscuro
import './App.css';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <LanguageProvider>
      {/* Eliminamos clases de colores fijos para que App.css tome el control */}
      <div className="app-wrapper">
        
        <Header onOpenContact={openContact} />

        <main>
          {/* Usamos id directamente en los componentes para el scroll suave */}
          <Hero onOpenContact={openContact} />
          
          <section id="projects">
            <Projects />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>
        </main>

        <footer className="footer">
          <div className="container">
            <p>© 2026 Gabriel Esteban Witt | Senior Frontend & Mobile Engineer</p>
            <p className="footer-sub">Built with React 19 & Vite</p>
          </div>
        </footer>

        {isContactOpen && <Contact onClose={closeContact} />}
      </div>
    </LanguageProvider>
  );
}

export default App;
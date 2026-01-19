import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          {language === 'es' ? '¿Tienes un proyecto en mente?' : 'Have a project in mind?'}
        </h2>
        <p className="text-slate-600 mb-12 text-lg">
          {language === 'es' ? 'Hablemos sobre cómo puedo ayudarte.' : 'Let\'s talk about how I can help you.'}
        </p>
        
        <form className="grid gap-4 max-w-xl mx-auto text-left">
          <input type="text" placeholder={language === 'es' ? "Nombre" : "Name"} className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
          <input type="email" placeholder="Email" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
          <textarea rows="4" placeholder={language === 'es' ? "Tu mensaje" : "Your message"} className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
          <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition shadow-lg">
            {language === 'es' ? 'Enviar Mensaje' : 'Send Message'}
          </button>
        </form>

        <div className="mt-12 flex justify-center space-x-6 text-slate-400">
           <a href="#" className="hover:text-indigo-600 transition">LinkedIn</a>
           <a href="#" className="hover:text-indigo-600 transition">GitHub</a>
           <a href="#" className="hover:text-indigo-600 transition">WhatsApp</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
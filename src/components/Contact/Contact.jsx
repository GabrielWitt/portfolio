import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Contact.css'; // Asegúrate de crear este archivo CSS (ver abajo)

const Icons = {
  LinkedIn: () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>),
  Email: () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>),
  WhatsApp: () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>),
  Close: () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>)
};

const translations = {
  en: {
    title: "Get in Touch",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    button: "Send Message",
    placeholderName: "Your name",
    placeholderEmail: "your@email.com",
    placeholderMsg: "How can I help you?",
  },
  es: {
    title: "Ponte en Contacto",
    nameLabel: "Nombre",
    emailLabel: "Correo Electrónico",
    messageLabel: "Mensaje",
    button: "Enviar Mensaje",
    placeholderName: "Tu nombre",
    placeholderEmail: "tu@correo.com",
    placeholderMsg: "¿En qué puedo ayudarte?",
  }
};

const Contact = ({ onClose }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Lógica de envío aquí...
    onClose(); // Cerrar modal al enviar (opcional)
  };

  return (
    // Overlay: Fondo oscuro que cierra el modal al hacer click fuera
    <div className="modal-overlay" onClick={onClose}>
      
      {/* Contenido del Modal: stopPropagation evita que el click dentro cierre el modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Botón Cerrar (X) */}
        <button className="close-modal-btn" onClick={onClose} aria-label="Close">
            <Icons.Close />
        </button>

        <h2>{t.title}</h2>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t.nameLabel}</label>
            <input 
              type="text" 
              id="name" 
              placeholder={t.placeholderName}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t.emailLabel}</label>
            <input 
              type="email" 
              id="email" 
              placeholder={t.placeholderEmail}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t.messageLabel}</label>
            <textarea 
              id="message" 
              rows="4" 
              placeholder={t.placeholderMsg}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
          </div>

          <div className="contact-footer">
            <button type="submit" className="btn-submit">
              {t.button}
            </button>

            <div className="secondary-options">
              <a href="#" className="icon-btn dark-blue" aria-label="LinkedIn"><Icons.LinkedIn /></a>
              <a href="mailto:hello@example.com" className="icon-btn light-blue" aria-label="Email"><Icons.Email /></a>
              <a href="#" className="icon-btn dark-blue" aria-label="WhatsApp"><Icons.WhatsApp /></a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
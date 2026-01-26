const en = {
  header: { 
    home: 'Home', 
    projects: 'Projects', 
    skills: 'Skills', 
    exp: 'Experience', 
    contact: 'Contact', 
    resume: 'Resume' 
  },
  home: {
      headline: "Senior Frontend & Mobile Engineer",
      subtitle: "10+ years of experience architecting high-performance digital solutions with React, React Native, and SwiftUI. Expert in leading remote teams and scaling startups.",
      ctaPrimary: "View my work",
      ctaSecondary: "Contact me",
  },
  skills: {
    sectionTitle: 'FEATURED PROJECTS',
    projects: [
      {
        id: 1,
        image: '../../assets/dvora-app.png', // Actualiza con tu imagen
        tech: ['Ionic 7', 'SwiftUI', 'Firebase', 'ML Kit'],
        content: {
          en: {
            title: 'Dvora Mobile Ecosystem',
            description: 'Led development of 2 flagship apps, optimizing load times by 30% and integrating AI-driven recognition features.',
          },
          es: {
            title: 'Ecosistema Móvil Dvora',
            description: 'Lideré el desarrollo de 2 apps principales, optimizando tiempos de carga en un 30% e integrando funciones de IA.',
          }
        }
      },
      {
        id: 2,
        image: '../../assets/insurance-platform.png',
        tech: ['Angular', 'Firebase', 'Cloud Functions'],
        content: {
          en: {
            title: 'Digital Insurance Self-Service',
            description: 'Architected a scalable insurance platform reducing support tickets by 40% through intuitive UX and offline-first capabilities.',
          },
          es: {
            title: 'Autoservicio de Seguros Digital',
            description: 'Arquitectura de plataforma de seguros que redujo tickets de soporte en un 40% mediante UX intuitiva y capacidades offline.',
          }
        }
      },
      {
        id: 3,
        image: '../../assets/habits-ai.png',
        tech: ['Ionic 3', 'Firebase', 'Node.js'],
        content: {
          en: {
            title: 'Habits.AI Health-Tech MVP',
            description: 'Rapid engineering and delivery of a functional health-tech MVP in 4 weeks, leading a remote team of developers.',
          },
          es: {
            title: 'MVP Health-Tech Habits.AI',
            description: 'Ingeniería y entrega rápida de un MVP funcional para salud en 4 semanas, liderando un equipo remoto.',
          }
        }
      }
    ],
  },
  experience: {
    title: 'Professional Experience',
    jobs: [
      {
        role: 'Mobile Applications Team Lead',
        company: 'Dvora',
        years: '2020 - 2024',
        description: 'Led cross-functional teams for Ionic/SwiftUI apps. Scaled platform to 2,000+ active users with 99.9% crash-free rates and implemented CI/CD pipelines.',
      },
      {
        role: 'Senior Software Engineer (Contract)',
        company: 'Dunathelia',
        years: '2017 - 2020',
        description: 'Architected digital self-service solutions and cross-platform mobile apps. Focused on real-time data synchronization and scalable business logic.',
      },
      {
        role: 'Development Lead',
        company: 'Habits.AI',
        years: '2017 - 2019',
        description: 'Managed remote LATAM teams for rapid MVP delivery. Ensured high-quality deliverables under aggressive product milestones.',
      },
      {
        role: 'SAP UI5 Consultant & Mobile Developer',
        company: 'IBM Ecuador',
        years: '2016 - 2017',
        description: 'Developed Bluetooth-based automation modules for enterprise clients, cutting operational processing time by 60%.',
      },
    ],
  },
  contact: {
    title: "Get in Touch",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    button: "Send Message",
    placeholderName: "Your name",
    placeholderEmail: "gabrowitt@hotmail.com",
    placeholderMsg: "How can I help you with your next project?",
  }
}

export default en;
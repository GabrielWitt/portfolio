const es = {
  header: { 
    home: 'Inicio', 
    projects: 'Proyectos', 
    skills: 'Habilidades', 
    exp: 'Experiencia', 
    contact: 'Contacto', 
    resume: 'CV' 
  },
  home: {
      headline: "Ingeniero Senior Frontend y Mobile",
      subtitle: "Más de 10 años de experiencia arquitectando soluciones digitales de alto rendimiento con React, React Native y SwiftUI. Experto en liderar equipos remotos y escalar startups.",
      ctaPrimary: "Ver mi trabajo",
      ctaSecondary: "Contáctame",
  },
  // 1. SECCIÓN DE HABILIDADES (Técnicas y Blandas)
  skillsSection: {
    title: 'Habilidades Técnicas',
    softTitle: 'Habilidades Blandas',
    categories: [
      {
        id: "frontend",
        title: "Frontend",
        skills: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS"]
      },
      {
        id: "mobile",
        title: "Mobile",
        skills: ["React Native", "Ionic", "SwiftUI", "Publicación en App Store", "Publicación en Play Store"]
      },
      {
        id: "backend",
        title: "Backend & Cloud",
        skills: ["Node.js", "Firebase", "APIs RESTful", "NoSQL", "AWS Cognito & Lambda"]
      }
    ],
    softSkills: [
      { name: "Resolución de Problemas", icon: "FaLightbulb" },
      { name: "Comunicación", icon: "FaComments" },
      { name: "Gestión de Proyectos", icon: "FaTasks" }
    ]
  },
  // 2. SECCIÓN DE PROYECTOS (Asegúrate de que coincida con Projects.jsx)
  skills: { 
    sectionTitle: 'Proyectos Destacados',
    projects: [
      {
        id: 1,
        image: '../../assets/dvora-app.png',
        tech: ['Ionic 7', 'SwiftUI', 'Firebase', 'ML Kit'],
        content: {
          en: {
            title: 'Dvora Mobile Ecosystem',
            description: 'Led development of 2 flagship apps, optimizing load times by 30% and integrating AI-driven recognition features.',
          },
          es: {
            title: 'Ecosistema Móvil Dvora',
            description: 'Lideré el desarrollo de 2 aplicaciones principales, optimizando los tiempos de carga en un 30% e integrando funciones de reconocimiento basadas en IA.',
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
            title: 'Autoservicio Digital de Seguros',
            description: 'Arquitectura de una plataforma de seguros escalable que redujo los tickets de soporte en un 40% mediante una UX intuitiva y capacidades offline.',
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
            description: 'Ingeniería y entrega rápida de un MVP funcional para el sector salud en 4 semanas, liderando un equipo remoto de desarrolladores.',
          }
        }
      }
    ],
  },
  experience: {
    title: 'Experiencia Profesional',
    jobs: [
      {
        role: 'Líder de Equipo de Aplicaciones Móviles',
        company: 'Dvora',
        years: '2020 - 2024',
        description: 'Liderazgo de equipos multidisciplinarios para apps en Ionic/SwiftUI. Escalabilidad de la plataforma a más de 2,000 usuarios activos con un 99.9% de tasa libre de errores.',
      },
      {
        role: 'Ingeniero de Software Senior (Contract)',
        company: 'Dunathelia',
        years: '2017 - 2020',
        description: 'Arquitectura de soluciones digitales de autoservicio y aplicaciones móviles multiplataforma. Enfoque en sincronización de datos en tiempo real.',
      },
      {
        role: 'Líder de Desarrollo',
        company: 'Habits.AI',
        years: '2017 - 2019',
        description: 'Gestión de equipos remotos en LATAM para la entrega rápida de MVPs funcionales.',
      },
      {
        role: 'Consultor SAP UI5 & Desarrollador Móvil',
        company: 'IBM Ecuador',
        years: '2016 - 2017',
        description: 'Desarrollo de módulos de automatización basados en Bluetooth para clientes corporativos, optimizando tiempos operativos en un 60%.',
      },
    ],
  },
  contact: {
    title: "Ponte en Contacto",
    nameLabel: "Nombre",
    emailLabel: "Correo",
    messageLabel: "Mensaje",
    button: "Enviar Mensaje",
    placeholderName: "Tu nombre",
    placeholderEmail: "gabrowitt@hotmail.com",
    placeholderMsg: "¿Cómo puedo ayudarte en tu próximo proyecto?",
  }
}

export default es;
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
      subtitle: "Más de 10 años de experiencia arquitectando soluciones digitales de alto rendimiento con React, React Native y SwiftUI. Experto en liderazgo de equipos remotos y escalabilidad de startups.",
      ctaPrimary: "Ver mis proyectos",
      ctaSecondary: "Contrátame",
  },
  skills: {
    sectionTitle: 'PROYECTOS DESTACADOS',
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
            description: 'Lideré el desarrollo integral de 2 apps principales, optimizando los tiempos de carga en un 30% e integrando funciones de reconocimiento con IA.',
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
            description: 'Arquitectura de una plataforma escalable que redujo los tickets de soporte en un 40% mediante una UX intuitiva y capacidades offline.',
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
            description: 'Ingeniería y entrega rápida de un MVP funcional en solo 4 semanas, liderando un equipo de desarrollo remoto en LATAM.',
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
        description: 'Liderazgo de equipos multidisciplinarios para aplicaciones en Ionic y SwiftUI. Escalé la plataforma a más de 2,000 usuarios activos manteniendo una tasa del 99.9% libre de fallos e implementando pipelines de CI/CD.',
      },
      {
        role: 'Ingeniero de Software Senior (Contratista)',
        company: 'Dunathelia',
        years: '2017 - 2020',
        description: 'Arquitectura de soluciones de autoservicio digital y aplicaciones móviles multiplataforma. Enfoque en sincronización de datos en tiempo real y lógica de negocio escalable para lanzamientos de MVP.',
      },
      {
        role: 'Líder de Desarrollo',
        company: 'Habits.AI',
        years: '2017 - 2019',
        description: 'Gestión de equipos remotos en LATAM para la entrega rápida de MVPs. Aseguré el cumplimiento de hitos de producto agresivos y entregables de alta calidad.',
      },
      {
        role: 'Consultor SAP UI5 y Desarrollador Móvil',
        company: 'IBM Ecuador',
        years: '2016 - 2017',
        description: 'Desarrollo de módulos de automatización basados en Bluetooth para impresión de facturas, reduciendo el tiempo de procesamiento operativo en un 60% para clientes corporativos.',
      },
    ],
  },
  contact: {
    title: "Contacto",
    nameLabel: "Nombre",
    emailLabel: "Correo electrónico",
    messageLabel: "Mensaje",
    button: "Enviar Mensaje",
    placeholderName: "Tu nombre",
    placeholderEmail: "gabrowitt@hotmail.com",
    placeholderMsg: "¿Cómo puedo ayudarte con tu próximo proyecto?",
  }
}

export default es;
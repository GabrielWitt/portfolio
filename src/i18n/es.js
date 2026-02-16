const es = {
  header: { 
    home: 'Inicio',
    impact: 'Impacto',
    projects: 'Proyectos', 
    skills: 'Especialización', 
    experience: 'Experiencia', 
    leadership: 'Liderazgo',
    contact: 'Contacto', 
    resume: 'Descargar CV' 
  },

  home: {
    headline: "Ingeniero Full Stack Senior (Enfoque en Frontend)",
    subtitle: "Diseño arquitecturas frontend escalables, lidero equipos distribuidos y construyo sistemas web y móviles de alto rendimiento con React, TypeScript y tecnologías cloud.",
    ctaPrimary: "Ver Proyectos",
    ctaSecondary: "Descargar CV",
  },

  impact: {
    title: "Impacto en Ingeniería",
    highlights: [
      "Reducción del 60% en llamadas a API mediante arquitectura de caché inteligente",
      "Disminución del 40% en tiempo de QA implementando pruebas automatizadas",
      "Entrega de MVPs funcionales en 4 semanas",
      "Escalamiento de plataforma móvil de 300 a 2,000+ usuarios en 18 meses",
      "Mejora del 30% en rendimiento tras optimización y refactorización arquitectónica"
    ]
  },

  skillsSection: {
    title: 'Especialización Técnica',
    softTitle: 'Liderazgo y Habilidades Estratégicas',
    categories: [
      {
        id: "frontend",
        title: "Arquitectura Frontend",
        skills: [
          "React",
          "TypeScript",
          "Next.js",
          "Sistemas Modulares de Componentes",
          "Clean Architecture (UI)",
          "Capas de Abstracción de API",
          "Pruebas Automatizadas"
        ]
      },
      {
        id: "mobile",
        title: "Ingeniería Mobile",
        skills: [
          "React Native",
          "Ionic (v3–v7)",
          "SwiftUI",
          "Publicación en App Store",
          "Publicación en Play Store"
        ]
      },
      {
        id: "backend",
        title: "Colaboración Backend & Cloud",
        skills: [
          "Firebase (Auth, Firestore, Functions)",
          "AWS Cognito",
          "AWS S3",
          "AWS Lambda",
          "Diseño de APIs REST",
          "Planificación de Arquitectura Cloud"
        ]
      }
    ],
    softSkills: [
      { name: "Liderazgo Técnico", icon: "FaUsers" },
      { name: "Toma de Decisiones Arquitectónicas", icon: "FaProjectDiagram" },
      { name: "Colaboración en Equipos Remotos", icon: "FaGlobe" },
      { name: "Mentalidad Orientada a Producto", icon: "FaLightbulb" }
    ]
  },

  projects: { 
    sectionTitle: 'PROYECTOS SELECCIONADOS',
    problemLabel: "Problema",
    roleLabel: "Mi Rol",
    impactLabel: "Impacto",
    caseStudyButton: "Ver detalles",
    projects: [
            {
        id: 1,
        image: 'DVORA',
        tech: ['Ionic 7', 'SwiftUI', 'Firebase', 'ML Kit'],
        content: {
          title: 'Ecosistema Móvil PropTech Dvora',
          problem: "Escalamiento de una plataforma PropTech enfocada en la gestión de edificios, cobranza de rentas y monetización de servicios internos, manteniendo alto rendimiento y confiabilidad.",
          role: "Definición de estándares de arquitectura frontend, liderazgo de equipo distribuido y diseño del Design System v3 para mejorar escalabilidad y consistencia visual.",
          impact: [
            "Escalamiento de 300 a 2,000+ usuarios activos",
            "Reducción del 60% en llamadas a API mediante estrategia de caché inteligente",
            "Mejora del 30% en rendimiento de la aplicación",
            "Disminución del 40% en tiempo de QA mediante pruebas automatizadas"
          ]
        }
      },
      {
        id: 2,
        image: 'Insurance',
        tech: ['Angular', 'Firebase', 'Cloud Functions'],
        content: {
          title: 'Plataforma Digital de Autoservicio de Seguros',
          problem: "Alto volumen de tickets de soporte debido a procesos manuales.",
          role: "Arquitectura de estructura frontend escalable y colaboración en diseño de APIs backend.",
          impact: [
            "Reducción del 40% en tickets de soporte",
            "UX optimizada con enfoque offline-first",
            "Entrega de MVP listo para producción"
          ]
        }
      },
      {
        id: 3,
        image: 'HABITSAI',
        tech: ['Ionic', 'Firebase', 'Node.js'],
        content: {
          title: 'MVP Health-Tech Habits.AI',
          problem: "Validación rápida de producto en startup de tecnología para salud.",
          role: "Liderazgo de equipo remoto LATAM y entrega bajo cronograma agresivo de 4 semanas.",
          impact: [
            "MVP entregado en 4 semanas",
            "Arquitectura con sincronización en tiempo real",
            "Entrega de alta calidad bajo presión"
          ]
        }
      }
    ],
  },

  experience: {
    title: 'Experiencia Profesional',
    jobs: [
      {
        role: 'Ingeniero de Software (Freelance)',
        company: 'Independiente',
        years: '2017 - Actualidad',
        description: 'Diseño y entrega de sistemas web y móviles escalables. Liderazgo en decisiones arquitectónicas, implementación de Clean Architecture y colaboración en planificación de APIs utilizando Firebase y AWS.',
      },
      {
        role: 'Líder de Aplicaciones Móviles',
        company: 'Dvora',
        years: '2020 - 2024',
        description: 'Liderazgo de equipo distribuido, definición de estándares de arquitectura frontend, implementación de estrategia de caché reduciendo llamadas a API en 60% y escalamiento de plataforma a 2,000+ usuarios activos.',
      },
      {
        role: 'Consultor SAP UI5 & Desarrollador Móvil',
        company: 'IBM Ecuador',
        years: '2016 - 2017',
        description: 'Desarrollo de módulos de automatización empresarial reduciendo tiempos operativos en un 60% y colaboración con equipos internacionales.',
      }
    ],
  },

  leadership: {
    title: "Filosofía de Ingeniería y Liderazgo",
    principles: [
      "Enfoque arquitectónico orientado a escalabilidad",
      "Confiabilidad basada en pruebas automatizadas",
      "Sistemas modulares para acelerar iteraciones",
      "Decisiones técnicas alineadas al producto",
      "Mentoría y alineación de equipos distribuidos"
    ]
  },

  contact: {
    title: "Construyamos Algo Escalable",
    nameLabel: "Nombre",
    emailLabel: "Correo",
    messageLabel: "Mensaje",
    button: "Enviar Mensaje",
    placeholderName: "Tu nombre",
    placeholderEmail: "tu@email.com",
    placeholderMsg: "Cuéntame sobre tu proyecto o desafío técnico.",
  }
}

export default es;

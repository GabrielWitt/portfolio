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
    title: 'Capacidades de Ingeniería',
    softTitle: 'Principios de Ingeniería',
    categories: [
      {
        id: "architecture",
        title: "Arquitectura y Diseño de Sistemas",
        skills: [
          "Sistemas Modulares de Componentes",
          "Clean Architecture (UI)",
          "Capas de Abstracción de API",
          "Diseño de APIs REST"
        ]
      },
      {
        id: "performance",
        title: "Ingeniería de Rendimiento",
        skills: [
          "TypeScript",
          "React",
          "Next.js",
          "Pruebas Automatizadas"
        ]
      },
      {
        id: "cloud",
        title: "Cloud y Colaboración Backend",
        skills: [
          "Firebase (Auth, Firestore, Functions)",
          "AWS Cognito",
          "AWS Lambda",
          "Planificación de Arquitectura Cloud"
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
      }
    ],
    softSkills: [
      { name: "Mentalidad architecture-first para escalabilidad a largo plazo", icon: "FaLightbulb" },
      { name: "Confiabilidad basada en pruebas automatizadas", icon: "FaCheckCircle" },
      { name: "Decisiones técnicas orientadas a producto", icon: "FaTasks" },
      { name: "Alineación y mentoría en equipos distribuidos", icon: "FaComments" }
    ]
  },

  projects: { 
    sectionTitle: 'Ingeniería en Producción',
    contextLabel: "Contexto",
    challengeLabel: "Desafío",
    architectureLabel: "Decisiones de Arquitectura",
    tradeoffsLabel: "Compromisos Técnicos",
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

          context:
            "Dvora es una plataforma PropTech enfocada en la gestión de edificios, cobro de rentas y monetización de servicios en comunidades residenciales.",

          challenge:
            "La plataforma estaba experimentando un rápido crecimiento de usuarios activos mientras enfrentaba sobreuso de APIs, cuellos de botella en rendimiento y ciclos de QA cada vez más largos. La arquitectura frontend necesitaba escalar sin comprometer estabilidad ni mantenibilidad.",

          architecture: [
            "Diseñé una arquitectura frontend modular de 3 capas (Core / Tenant / Admin)",
            "Implementé una estrategia de caché inteligente para reducir llamadas redundantes a la API",
            "Establecí una estructura basada en features para escalabilidad a largo plazo",
            "Introduje prácticas de pruebas automatizadas para estabilizar los releases"
          ],

          tradeoffs:
            "Priorizamos mantenibilidad y escalabilidad a largo plazo sobre velocidad inmediata de desarrollo, invirtiendo en refactorización arquitectónica antes de continuar expandiendo funcionalidades.",

          role:
            "Lideré decisiones de arquitectura frontend, mentoreé a un equipo de ingeniería distribuido y definí el Design System v3 para mejorar consistencia visual y velocidad de desarrollo.",

          impact: [
            "Escalamos la plataforma de 300 a más de 2.000 usuarios activos",
            "Redujimos llamadas a la API en un 60%",
            "Mejoramos el rendimiento en un 30%",
            "Reducimos el tiempo de QA en un 40%"
          ]
        }
      },

      {
        id: 2,
        image: 'Insurance',
        tech: ['Angular', 'Firebase', 'Cloud Functions'],
        content: {
          title: 'Plataforma Digital de Autogestión de Seguros',

          context:
            "Una aseguradora digital necesitaba modernizar su plataforma de autogestión para reducir la dependencia de procesos manuales y soporte operativo.",

          challenge:
            "Alto volumen de tickets de soporte debido a validaciones manuales de reclamos y flujos poco automatizados para los usuarios.",

          architecture: [
            "Diseñé una arquitectura frontend escalable en Angular con estructura modular por features",
            "Integré Firebase y Cloud Functions para procesamiento seguro de reclamos",
            "Implementé manejo offline-first para usuarios con conectividad inestable"
          ],

          tradeoffs:
            "Equilibré la entrega rápida de un MVP con decisiones arquitectónicas que permitieran escalar el producto sin necesidad de reescrituras mayores.",

          role:
            "Arquitecté la estructura frontend, colaboré en el diseño de APIs backend y coordiné la implementación entre equipos multifuncionales.",

          impact: [
            "Reducción del 40% en tickets de soporte",
            "Mejora en la tasa de finalización de autogestión",
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

          context:
            "Una startup health-tech requería validación rápida de producto para probar engagement y seguimiento de hábitos en tiempo real.",

          challenge:
            "Entregar un MVP con calidad de producción en solo 4 semanas, coordinando un equipo de ingeniería 100% remoto en LATAM.",

          architecture: [
            "Implementé sincronización en tiempo real usando Firebase",
            "Estructuré la aplicación Ionic basada en features para futura escalabilidad",
            "Diseñé integración backend con servicios Node.js"
          ],

          tradeoffs:
            "Priorizamos velocidad de entrega sin sacrificar principios de arquitectura limpia que permitieran escalar después del MVP.",

          role:
            "Lideré el equipo remoto, definí el roadmap técnico y aseguré la entrega dentro del plazo agresivo establecido.",

          impact: [
            "MVP entregado en 4 semanas",
            "Arquitectura con sincronización en tiempo real",
            "Release estable bajo alta presión de tiempo"
          ]
        }
      }
    ]
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

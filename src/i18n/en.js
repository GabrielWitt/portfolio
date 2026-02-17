const en = {
  header: { 
    home: 'Home', 
    impact: 'Impact',
    projects: 'Projects', 
    skills: 'Expertise', 
    experience: 'Experience', 
    leadership: 'Leadership',
    contact: 'Contact', 
    resume: 'Download CV' 
  },

  home: {
    headline: "Senior Full Stack Engineer (Frontend-Focused)",
    subtitle: "I design scalable frontend architectures, lead distributed teams, and build high-performance web & mobile systems using React, TypeScript, and cloud-native technologies.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Download CV",
  },

  impact: {
    title: "Engineering Impact",
    highlights: [
      "Reduced API calls by 60% through intelligent caching architecture",
      "Decreased QA time by 40% by implementing automated testing strategies",
      "Delivered MVPs in 4 weeks for early-stage startups",
      "Scaled mobile platform from 300 to 2,000+ users in 18 months",
      "Improved app performance by 30% through optimization & architectural refactoring"
    ]
  },

  skillsSection: {
    title: 'Engineering Capabilities',
    softTitle: 'Engineering Principles',
    categories: [
      {
        id: "architecture",
        title: "Architecture & System Design",
        skills: [
          "Modular Component Systems",
          "Clean Architecture (UI)",
          "API Abstraction Layers",
          "REST API Design"
        ]
      },
      {
        id: "performance",
        title: "Performance Engineering",
        skills: [
          "TypeScript",
          "React",
          "Next.js",
          "Automated Testing"
        ]
      },
      {
        id: "cloud",
        title: "Cloud & Backend Collaboration",
        skills: [
          "Firebase (Auth, Firestore, Functions)",
          "AWS Cognito",
          "AWS Lambda",
          "Cloud Architecture Planning"
        ]
      },
      {
        id: "mobile",
        title: "Mobile Engineering",
        skills: [
          "React Native",
          "Ionic (v3–v7)",
          "SwiftUI",
          "App Store Publishing",
          "Play Store Publishing"
        ]
      }
    ],
    softSkills: [
      { name: "Architecture-first mindset for long-term scalability", icon: "FaLightbulb" },
      { name: "Test-driven reliability and delivery confidence", icon: "FaCheckCircle" },
      { name: "Product-oriented technical decision making", icon: "FaTasks" },
      { name: "Distributed team alignment & mentorship", icon: "FaComments" }
    ]
  },

  projects: { 
    sectionTitle: 'Engineering in Production',
    contextLabel: "Context",
    challengeLabel: "Challenge",
    architectureLabel: "Architecture Decisions",
    tradeoffsLabel: "Trade-offs",
    roleLabel: "My Role",
    impactLabel: "Impact",
    caseStudyButton: "More Details",
    projects: [
      {
        id: 1,
        image: 'DVORA',
        tech: ['Ionic 7', 'SwiftUI', 'Firebase', 'ML Kit'],
        content: {
          title: 'Dvora PropTech Mobile Ecosystem',

          context: "Dvora is a PropTech platform focused on building management, rent collection, and service monetization across residential communities.",

          challenge: "The platform was experiencing growth in active users while struggling with API overuse, performance bottlenecks, and increasing QA cycles. The architecture needed to scale without compromising stability.",

          architecture: [
            "Designed a modular 3-layer frontend architecture (Core / Tenant / Admin)",
            "Implemented intelligent caching strategy to reduce redundant API calls",
            "Established feature-based folder structure for long-term scalability",
            "Introduced automated testing practices to stabilize releases"
          ],

          tradeoffs: "Prioritized maintainability and long-term scalability over short-term feature velocity. Invested in architectural refactoring before continuing feature expansion.",

          role: "Led frontend architecture decisions, mentored distributed engineering team, and defined the v3 Design System to improve UI consistency and development speed.",

          impact: [
            "Scaled platform from 300 to 2,000+ active users",
            "Reduced API calls by 60%",
            "Improved performance by 30%",
            "Reduced QA time by 40%"
          ]
        }
      },

      {
        id: 2,
        image: 'Insurance',
        tech: ['Angular', 'Firebase', 'Cloud Functions'],
        content: {
          title: 'Digital Insurance Self-Service Platform',

          context: "A digital insurance provider needed to modernize its self-service platform to reduce dependency on manual support processes.",

          challenge: "High support ticket volume due to manual claim validation and limited automation in customer workflows.",

          architecture: [
            "Designed scalable Angular frontend architecture with modular feature structure",
            "Integrated Firebase backend with Cloud Functions for secure claim processing",
            "Implemented offline-first data handling for unstable network conditions"
          ],

          tradeoffs: "Balanced rapid MVP delivery with long-term scalability by prioritizing modular design and reusable service layers.",

          role: "Architected frontend structure, collaborated on backend API design, and coordinated cross-functional implementation.",

          impact: [
            "Reduced support tickets by 40%",
            "Improved customer self-service completion rate",
            "Delivered production-ready MVP under tight timeline"
          ]
        }
      },

      {
        id: 3,
        image: 'HABITSAI',
        tech: ['Ionic', 'Firebase', 'Node.js'],
        content: {
          title: 'Habits.AI Health-Tech MVP',

          context: "A health-tech startup required rapid product validation to test user engagement and behavioral tracking features.",

          challenge: "Deliver a production-quality MVP within 4 weeks while coordinating a fully remote LATAM engineering team.",

          architecture: [
            "Implemented real-time synchronization using Firebase",
            "Structured feature-based Ionic application for scalability",
            "Designed backend integration with Node.js services"
          ],

          tradeoffs: "Prioritized delivery speed while maintaining clean architecture principles to allow post-MVP scaling.",

          role: "Led remote engineering team, defined technical roadmap, and ensured milestone delivery within aggressive deadline.",

          impact: [
            "MVP delivered in 4 weeks",
            "Real-time data synchronization architecture",
            "High-quality release under strict deadline"
          ]
        }
      }
    ]
  },

  experience: {
    title: 'Professional Experience',
    jobs: [
      {
        role: 'Software Engineer (Freelance)',
        company: 'Independent',
        years: '2017 - Present',
        description: 'Design and delivery of scalable web and mobile systems. Led architectural decisions, implemented Clean Architecture principles, collaborated in API planning using Firebase and AWS, and delivered MVPs for early-stage startups.',
      },
      {
        role: 'Mobile Applications Team Leader',
        company: 'Dvora',
        years: '2020 - 2024',
        description: 'Led distributed engineering team, defined frontend architecture standards, implemented caching strategies reducing API calls by 60%, and scaled user base to 2,000+ active users.',
      },
      {
        role: 'SAP UI5 Consultant & Mobile Developer',
        company: 'IBM Ecuador',
        years: '2016 - 2017',
        description: 'Developed enterprise automation modules reducing operational processing time by 60% while collaborating with international teams.',
      }
    ],
  },

  leadership: {
    title: "Leadership & Engineering Philosophy",
    principles: [
      "Architecture-first approach for long-term scalability",
      "Test-driven reliability for confident releases",
      "Modular systems for faster feature iteration",
      "Product-focused engineering decisions",
      "Mentorship and distributed team alignment"
    ]
  },

  contact: {
    title: "Let’s Build Something Scalable",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    button: "Send Message",
    placeholderName: "Your name",
    placeholderEmail: "your@email.com",
    placeholderMsg: "Tell me about your project or technical challenge.",
  }
}

export default en;

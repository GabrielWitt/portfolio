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
    title: 'Core Expertise',
    softTitle: 'Leadership & Soft Skills',
    categories: [
      {
        id: "frontend",
        title: "Frontend Architecture",
        skills: [
          "React",
          "TypeScript",
          "Next.js",
          "Modular Component Systems",
          "Clean Architecture (UI)",
          "API Abstraction Layers",
          "Automated Testing"
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
      },
      {
        id: "backend",
        title: "Backend & Cloud Collaboration",
        skills: [
          "Firebase (Auth, Firestore, Functions)",
          "AWS Cognito",
          "AWS S3",
          "AWS Lambda",
          "REST API Design",
          "Cloud Architecture Planning"
        ]
      }
    ],
    softSkills: [
      { name: "Technical Leadership", icon: "FaUsers" },
      { name: "Architectural Decision-Making", icon: "FaProjectDiagram" },
      { name: "Remote Team Collaboration", icon: "FaGlobe" },
      { name: "Product-Oriented Thinking", icon: "FaLightbulb" }
    ]
  },

  projects: { 
    sectionTitle: 'SELECTED PROJECTS',
    problemLabel: "Problem",
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
          problem: "Scaling a growing PropTech platform focused on building management, rent collection, and internal service monetization, while maintaining performance and reliability.",
          role: "Defined frontend architecture standards, led a distributed engineering team, and designed the v3 Design System to improve scalability and UI consistency.",
          impact: [
            "Scaled platform from 300 to 2,000+ active users",
            "Reduced API calls by 60% through intelligent caching strategy",
            "Improved application performance by 30%",
            "Decreased QA time by 40% by implementing automated testing"
          ]
        }
      },
      {
        id: 2,
        image: 'Insurance',
        tech: ['Angular', 'Firebase', 'Cloud Functions'],
        content: {
          title: 'Digital Insurance Self-Service Platform',
          problem: "High support ticket volume due to manual insurance claim processes.",
          role: "Architected scalable frontend structure and collaborated in backend API design.",
          impact: [
            "Reduced support tickets by 40%",
            "Improved UX with offline-first architecture",
            "Delivered production-ready MVP"
          ]
        }
      },
      {
        id: 3,
        image: 'HABITSAI',
        tech: ['Ionic', 'Firebase', 'Node.js'],
        content: {
          title: 'Habits.AI Health-Tech MVP',
          problem: "Need for rapid product validation in health-tech startup.",
          role: "Led remote LATAM team and delivered MVP under aggressive 4-week milestone.",
          impact: [
            "MVP delivered in 4 weeks",
            "Real-time synchronization architecture",
            "High-quality release under tight deadline"
          ]
        }
      }
    ],
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

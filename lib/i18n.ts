import { create } from "zustand";

type Language = "en" | "pt";

interface I18nStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useI18nStore = create<I18nStore>((set) => ({
  language: "en",
  setLanguage: (lang) => set({ language: lang }),
}));

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Gabriel Anselmo",
      role: "Back-End Developer",
      description:
        "Building optimized and scalable web applications and systems with modern technologies.",
    },
    about: {
      title: "About Me",
      description:
        "As a Back-End Developer, I am passionate about creating elegant solutions to complex problems. With a strong foundation in backend technologies and knowledge in frontend, I thrive on building scalable and user-friendly applications that make a real impact.",
      stats: {
        years: "2+",
        yearsLabel: "years",
        projects: "12+",
        projectsLabel: "Projects",
        technologies: "10+",
        technologiesLabel: "Technologies",
        commitment: "100%",
        commitmentLabel: "Commitment",
      },
      traits: [
        "Problem Solver",
        "Clean Code Supporter",
        "Performance Enthusiast",
        "Continuous Learner",
      ],
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
      items: {
        workshop: {
          title: "WorkShop API",
          description:
            "A full-featured WorkShop platform built with Spring Boot, Hibernate, PostgreSQL and JPA.",
        },
        contacts: {
          title: "Contacts Management System",
          description:
            "A collaborative contacts management system with real-time updates and features.",
        },
        nodeApi: {
          title: "Node.js Users API",
          description:
            "An optimized API for users management with Node.js, Express, MySQL and Prisma.",
        },
      },
    },
    experience: {
      title: "Experience",
      years: "years",
      viewSkills: "View Skills",
      technical: "Technical Skills",
      soft: "Soft Skills",
      skillsAcquired: "Skills Acquired",
      viewMore: "View More",
      viewLess: "View Less",
      positions: {
      dataAnalyst: {
        title: "Data Analyst",
        company: "Alcoa | Alumar",
        period: "2024 - Present",
        description: "As a Data Analyst at Alcoa | Alumar, I specialize in improving our Dashboards and systems through various software, modeling and creating SQL data as well as creating web components | pages for internal use, and more.",
      },
      webDev: {
        title: "Web Developer",
        company: "EEL Energy Solutions & Technologies",
        period: "2024 - present",
        description: "As a Web Developer at EEL Energy Solutions & Technologies, I specialize in improving our web system through WordPress enhancements, AI integration with APIs, and more.",
      },
      itIntern: {
        title: "IT Intern",
        company: "Maple Bear Canadian School",
        period: "2023 - 2024",
        description: "As IT Intern, I specialize in crafting impactful activities as building websites using Next.js, React.js, Tailwind, and TypeScript. My role extends beyond front-end technologies, encompassing a dynamic learning journey. I've expanded my expertise into Python, delving into versatile applications. Exploring PowerBI, I've harnessed data visualization for informed decision-making. Additionally, I've delved into networking and infrastructure, broadening my skill set. This holistic approach not only sharpens my technical acumen but also positions me as a versatile team player capable of navigating diverse aspects of web development and beyond.",
      },
      },
    },
    contact: {
      title: "Contact",
      description:
        "Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
      profile: {
        name: "Gabriel Anselmo",
        title: "Back-End Developer",
        description:
          "Back-End Developer with a passion for creating elegant solutions",
      },
      connectLinkedIn: "Connect with me on LinkedIn",
      sendEmail: "Send me an email directly",
      checkGithub: "Check out my projects",
      location: "Available Worldwide",
      availability: "Open to Opportunities",
      schedule: {
        title: "Schedule a Meeting",
        description: "Book a time slot for a video call or meeting",
      },
      whatsapp: {
        title: "WhatsApp Business",
        description: "Quick responses during business hours",
      },
      telegram: {
        title: "Telegram",
        description: "Direct and instant messaging",
      },
      discord: {
        title: "Discord Community",
        description: "Join our tech community",
      },
    },
    skills: {
      title: "Skills & Technologies",
      frontend: "Frontend Development",
      backend: "Backend Development",
      devops: "DevOps & Cloud",
      database: "Database & Storage",
    },
    footer: {
      copyright: "© 2025 Gabriel Anselmo. All rights reserved.",
      location: {
        label: "Available Worldwide",
        title: "Location",
      },
      availability: {
        label: "Open to Opportunities",
        title: "Status",
      },
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Gabriel Anselmo",
      role: "Desenvolvedor Back-End",
      description:
        "Construindo aplicações web e sistemas escaláveis e otimizados com tecnologias modernas.",
    },
    about: {
      title: "Sobre Mim",
      description:
        "Como Desenvolvedor Back-End, sou apaixonado por criar soluções elegantes para problemas complexos. Com uma base sólida em tecnologias backende e conhecimento em frontend, prospero construindo aplicações escaláveis e amigáveis que causam impacto real.",
      stats: {
        years: "2+",
        yearsLabel: "anos",
        projects: "12+",
        projectsLabel: "Projetos",
        technologies: "10+",
        technologiesLabel: "Tecnologias",
        commitment: "100%",
        commitmentLabel: "Comprometimento",
      },
      traits: [
        "Solucionador de Problemas",
        "Apoiador de Código Limpo",
        "Entusiasta de Performance",
        "Aprendiz Contínuo",
      ],
    },
    projects: {
      title: "Projetos",
      viewProject: "Ver Projeto",
      items: {
        workshop: {
          title: "API de WorkShop",
          description:
            "Uma plataforma completa de WorkShop construída com Spring Boot, Hibernate, PostgreSQL e JPA.",
        },
        contacts: {
          title: "Sistema de Gerenciamento de Contatos",
          description:
            "Um sistema colaborativo de gerenciamento de contatos com atualizações em tempo real e recursos avançados.",
        },
        nodeApi: {
          title: "API de Usuários em Node.js",
          description:
            "Uma API otimizada para gerenciamento de usuários com Node.js, Express, MySQL e Prisma.",
        },
      },
    },
    experience: {
      title: "Experiência",
      years: "anos",
      viewSkills: "Ver Habilidades",
      technical: "Habilidades Técnicas",
      soft: "Habilidades Interpessoais",
      skillsAcquired: "Habilidades Adquiridas",
      viewMore: "Ver Mais",
      viewLess: "Ver Menos",
      positions: {
        dataAnalyst: {
          title: "Analista de Dados",
          company: "Alcoa | Alumar",
          period: "2024 - Presente",
          description:
            "Como Analista de Dados na Alcoa | Alumar, me especializo em melhorar nossos Dashboards e sistemas através de diversos softwares, modelando e criando dados SQL, além de criar componentes e páginas web para uso interno, entre outras atividades.",
        },
        webDev: {
          title: "Desenvolvedor Web",
          company: "EEL Energy Solutions & Technologies",
          period: "2024 - presente",
          description:
            "Como Desenvolvedor Web na EEL Energy Solutions & Technologies, me especializo em melhorar nosso sistema web através de aprimoramentos em WordPress, integração com APIs de IA e muito mais.",
        },
        itIntern: {
          title: "Estagiário de TI",
          company: "Maple Bear | Canadian School",
          period: "2023 - 2024",
          description:
            "Como Estagiário de TI, me especializo em criar atividades impactantes como construir websites usando Next.js, React.js, Tailwind e TypeScript. Meu papel vai além das tecnologias front-end, abrangendo uma jornada dinâmica de aprendizado. Expandi minha experiência em Python, explorando aplicações versáteis. Explorando PowerBI, aproveitei a visualização de dados para tomada de decisões informadas. Além disso, me aprofundei em redes e infraestrutura, ampliando meu conjunto de habilidades. Essa abordagem holística não apenas aprimora minha capacidade técnica, mas também me posiciona como um profissional versátil capaz de navegar por diversos aspectos do desenvolvimento web e além.",
        },
      },
    },
    contact: {
      title: "Contato",
      description:
        "Sinta-se à vontade para entrar em contato através de qualquer uma dessas plataformas. Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades de fazer parte das suas visões.",
      profile: {
        name: "Gabriel Anselmo",
        title: "Desenvolvedor Back-End",
        description:
          "Desenvolvedor Back-End apaixonado por criar soluções elegantes",
      },
      connectLinkedIn: "Conecte-se comigo no LinkedIn",
      sendEmail: "Envie-me um email diretamente",
      checkGithub: "Confira meus projetos",
      location: "Disponível Mundialmente",
      availability: "Aberto a Oportunidades",
      schedule: {
        title: "Agendar Reunião",
        description: "Reserve um horário para uma videochamada ou reunião",
      },
      whatsapp: {
        title: "WhatsApp Business",
        description: "Respostas rápidas em horário comercial",
      },
      telegram: {
        title: "Telegram",
        description: "Mensagens diretas e instantâneas",
      },
      discord: {
        title: "Comunidade Discord",
        description: "Participe da nossa comunidade tech",
      },
    },
    skills: {
      title: "Habilidades & Tecnologias",
      frontend: "Desenvolvimento Frontend",
      backend: "Desenvolvimento Backend",
      devops: "DevOps & Cloud",
      database: "Banco de Dados & Storage",
    },
    footer: {
      copyright: "© 2025 Gabriel Anselmo. Todos os direitos reservados.",
      location: {
        label: "Disponível Mundialmente",
        title: "Localização",
      },
      availability: {
        label: "Aberto a Oportunidades",
        title: "Status",
      },
    },
  },
};

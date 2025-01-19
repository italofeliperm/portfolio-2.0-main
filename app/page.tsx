"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const containerVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
      staggerChildren: 0.1
    }
  }
};

const fadeUpVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};




const GitHubIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { Footer } from "@/components/footer";
import { useI18nStore, translations } from "@/lib/i18n";
import { Navbar } from "@/components/navbar";

// Images
import foto1 from "@/assets/images/foto1.png";
import myPhoto from "@/assets/images/profile-bl.png";

// Icons import
import {
  Linkedin,
  ExternalLink,
  Code2,
  Database,
  Briefcase,
  Server,
  Cpu,
  Layout,
  Lightbulb,
  Zap,
  BookOpen,
  ChevronDown,
  Calendar,
  MessageCircle,
  Send,
  Headphones,
  FileType,
  GitBranch,
  Coffee,
  Container,
  Workflow,
} from "lucide-react";



export default function Home() {
  const { language } = useI18nStore();
  const t = translations[language];




  const [expandedExperience, setExpandedExperience] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const skills = {
    frontend: [
      { name: "React.js", icon: <Code2 className="h-4 w-4" /> },
      { name: "Next.js", icon: <Zap className="h-4 w-4" /> },
      { name: "TypeScript", icon: <FileType className="h-4 w-4" /> },
    ],
    backend: [
      { name: "Java", icon: <Coffee className="h-4 w-4" /> },
      { name: "Spring Boot", icon: <Zap className="h-4 w-4" /> },
      { name: "Node.js", icon: <Server className="h-4 w-4" /> },
    ],
    devops: [
      { name: "Docker", icon: <Container className="h-4 w-4" /> },
      { name: "CI/CD", icon: <GitBranch className="h-4 w-4" /> },
      { name: "GitHub Actions", icon: <Workflow className="h-4 w-4" /> },
    ],
    database: [
      { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> },
      { name: "SQL Server", icon: <Database className="h-4 w-4" /> },
      { name: "Oracle DB", icon: <Database className="h-4 w-4" /> },
    ],
  };

  const projects = [
    {
      title:
        language === "pt" ? t.projects.items.workshop.title : "WorkShop API",
      description:
        language === "pt"
          ? t.projects.items.workshop.description
          : "A full-featured WorkShop platform built with Spring Boot, Hibernate, PostgreSQL and JPA.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["Spring Boot", "Hibernate", "PostgreSQL", "JPA"],
      link: "https://github.com/gabrielanselmoa/workshop-springboot3-jpa",
    },
    {
      title:
        language === "pt"
          ? t.projects.items.contacts.title
          : "Contacts Management System",
      description:
        language === "pt"
          ? t.projects.items.contacts.description
          : "A collaborative contacts management system with real-time updates and features.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      tags: ["Java-EE", "JSP", "Servlet", "MySQL"],
      link: "https://github.com/gabrielanselmoa/java-ee",
    },
    {
      title:
        language === "pt"
          ? t.projects.items.nodeApi.title
          : "Node.js Users API",
      description:
        language === "pt"
          ? t.projects.items.nodeApi.description
          : "An optimized API for users management with Node.js, Express, MySQL and Prisma.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["Node.js", "Express", "MySQL", "Prisma"],
      link: "https://github.com/gabrielanselmoa/Node-API-Backend",
    },
  ];

  const experiences = [
    {
      title:
        language === "pt"
          ? t.experience?.positions?.dataAnalyst?.title || "Data Analyst"
          : "Data Analyst",
      company: t.experience?.positions?.dataAnalyst?.company || "Alcoa",
      period: t.experience?.positions?.dataAnalyst?.period || "2024 - Present",
      description:
        t.experience?.positions?.dataAnalyst?.description ||
        "As a Data Analyst at Alcoa | Alumar, I specialize in improving our Dashboards and system through some softwares, modeling and creating SQL data as well as creating web components | pages for internal use, and more.",
      skills: {
        technical: [
          "SQL Server",
          "Oracle DB",
          "Power BI",
          "Angular.js",
          "C#",
          "PI System",
        ],
        soft: [
          language === "pt" ? "Liderança" : "Leadership",
          language === "pt" ? "Mentoria" : "Mentoring",
          language === "pt" ? "Gestão de Projetos" : "Project Management",
          language === "pt" ? "Revisão de Código" : "Code Review",
        ],
      },
    },
    {
      title:
        language === "pt"
          ? t.experience?.positions?.webDev?.title || "Web Developer"
          : "Web Developer",
      company: t.experience?.positions?.webDev?.company || "EEL Energy Solutions & Technologies",
      period: t.experience?.positions?.webDev?.period || "2024 - present",
      description:
        t.experience?.positions?.webDev?.description ||
        "As a Web Developer at EEL Energy solutions & technologies, I specialize in improving our web system through WordPress enhancements, AI integration with APIs, and more.",
      skills: {
        technical: [
          "React.js",
          "Next.js",
          "PostgreSQL",
          "Spring Boot",
          "Docker",
        ],
        soft: [
          language === "pt" ? "Resolução de Problemas" : "Problem Solving",
          language === "pt" ? "Colaboração em Equipe" : "Team Collaboration",
          language === "pt" ? "Desenvolvimento Ágil" : "Agile Development",
        ],
      },
    },
    {
      title:
        language === "pt"
          ? t.experience?.positions?.itIntern?.title || "IT Intern"
          : "IT Intern",
      company: t.experience?.positions?.itIntern?.company || "Maple Bear Canadian School",
      period: t.experience?.positions?.itIntern?.period || "2023 - 2024",
      description:
        t.experience?.positions?.itIntern?.description ||
        "As IT Intern, I specialize in crafting impactful activities as building websites using Next.js, React.js, Tailwind, and TypeScript. My role extends beyond front-end technologies, encompassing a dynamic learning journey. I've expanded my expertise into Python, delving into versatile applications. Exploring PowerBI, I've harnessed data visualization for informed decision-making. Additionally, I've delved into networking and infrastructure, broadening my skill set. This holistic approach not only sharpens my technical acumen but also positions me as a versatile team player capable of navigating diverse aspects of web development and beyond.",
      skills: {
        technical: [
          "Infrastructure",
          "Python",
          "PostgreSQL",
          "Linux",
          "Hardware",
        ],
        soft: [
          language === "pt" ? "Pensamento Crítico" : "Critical Thinking",
          language === "pt" ? "Colaboração em Equipe" : "Team Collaboration",
          language === "pt" ? "Multitarefa" : "Multitasking",
        ],
      },
    },
  ];

  const getTraitDescription = (index: number) => {
    switch (index) {
      case 0:
        return language === "pt"
          ? "Encontrando soluções criativas para desafios complexos"
          : "Finding creative solutions for complex challenges";
      case 1:
        return language === "pt"
          ? "Código limpo, manutenível e bem documentado"
          : "Clean, maintainable, and well-documented code";
      case 2:
        return language === "pt"
          ? "Otimização e eficiência em cada linha de código"
          : "Optimization and efficiency in every line of code";
      case 3:
        return language === "pt"
          ? "Sempre atualizado com as últimas tecnologias"
          : "Always up-to-date with the latest technologies";
      default:
        return "";
    }
  }

  const showUnavailableMessage = (service: string) => {
    setModalMessage(`${service} indisponível no momento.`);
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div
        key="main-container"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative min-h-screen"
      >
        {/* Background Image */}
        <div
          className="fixed inset-0 z-0 backdrop-blur-sm"
          style={{
            backgroundImage: `url(${foto1.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.1',
            filter: 'blur(2px)'
          }}
        />

        {/* Background Layers */}
        <div className="fixed inset-0 z-[1] bg-gradient-to-b from-background/80 to-background/40" />
        <div className="bg-base" />
        <div className="dark-grid-pattern" />
        <div className="bg-gradient-overlay" />

        {/* Content */}
        <motion.div
          key="content-wrapper"
          variants={containerVariants}
          className="relative z-10"
        >
          <Navbar />
          <main>


            {/* Hero Section */}
            <motion.section
              key="hero-section"
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-200px" }}
              className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
            >

              <motion.div variants={fadeUpVariants} className="text-center">
                <motion.p
                  variants={fadeUpVariants}
                  className="text-lg mb-4 text-muted-foreground"
                >
                  {t.hero.greeting}
                </motion.p>
                <motion.div
                  variants={fadeUpVariants}
                  className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 mx-auto mb-8"
                >
                  <Image
                    src={myPhoto}
                    alt="Profile"
                    className="rounded-full object-cover"
                    fill
                    priority
                  />
                </motion.div>
                <motion.h1
                  variants={fadeUpVariants}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                >
                  {t.hero.name}
                </motion.h1>
                <motion.h2
                  variants={fadeUpVariants}
                  className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8"
                >
                  {t.hero.role}
                </motion.h2>
                <motion.p
                  variants={fadeUpVariants}
                  className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 md:whitespace-nowrap"
                >
                  {t.hero.description}
                </motion.p>
                <motion.div variants={fadeUpVariants} className="flex justify-center space-x-4">
                  <Button
                    size="lg"
                    className="gap-2"
                    onClick={() => window.open("https://github.com/gabrielanselmoa", "_blank")}
                  >
                    <GitHubIcon />
                    GitHub
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2"
                    onClick={() => window.open("https://www.linkedin.com/in/gabrielanselmoa", "_blank")}
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </Button>
                </motion.div>
              </motion.div>

            </motion.section>

            {/* About Section */}
            <motion.section
              key="about-section"
              variants={containerVariants}
              initial="initial"
              whileInView="animate"

              viewport={{ once: true, margin: "-200px" }}
              id="about"
              className="py-20 px-4 sm:px-6 lg:px-8"
            >
              <motion.div variants={fadeUpVariants} className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-16 text-center">
                  {t.about.title}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Bio Side */}
                  <div className="space-y-8">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/0 rounded-lg blur opacity-75" />
                      <Card className="relative bg-card/50 backdrop-blur-sm border-none">
                        <div className="p-6 sm:p-8">
                          <p className="text-l leading-relaxed text-muted-foreground">
                            {t.about.description}
                          </p>
                        </div>
                      </Card>
                    </div>

                    {/* Stats/Quick Info */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        {
                          value: t.about.stats.years,
                          label: t.about.stats.yearsLabel,
                        },
                        {
                          value: t.about.stats.projects,
                          label: t.about.stats.projectsLabel,
                        },
                        {
                          value: t.about.stats.technologies,
                          label: t.about.stats.technologiesLabel,
                        },
                        {
                          value: t.about.stats.commitment,
                          label: t.about.stats.commitmentLabel,
                        },
                      ].map((stat, index) => (
                        <Card
                          key={index}
                          className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors duration-300"
                        >
                          <div className="p-4 text-center">
                            <div className="text-2xl font-bold text-primary mb-1">
                              {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {stat.label}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Traits/Skills Side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {t.about.traits?.map((trait, index) => (
                      <Card
                        key={index}
                        className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group"
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              {index === 0 && (
                                <Lightbulb className="h-6 w-6 text-primary" />
                              )}
                              {index === 1 && (
                                <Code2 className="h-6 w-6 text-primary" />
                              )}
                              {index === 2 && (
                                <Zap className="h-6 w-6 text-primary" />
                              )}
                              {index === 3 && (
                                <BookOpen className="h-6 w-6 text-primary" />
                              )}
                            </div>
                            <h3 className="text-lg font-semibold">{trait}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                            {getTraitDescription(index)}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              key="skills-section"
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-200px" }}

              id="skills"
              className="py-20 px-4 sm:px-6 lg:px-8"
            >
              <motion.div
                variants={fadeUpVariants}
                className="max-w-7xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-16 text-center">
                  {t.skills.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                  {/* Frontend Skills */}
                  <Card className="bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 group">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                          <Layout className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">
                          {t.skills.frontend}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {skills.frontend.map((skill, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-500"
                          >
                            <div className="text-primary">{skill.icon}</div>
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  {/* Backend Skills */}
                  <Card className="bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 group">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                          <Server className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">
                          {t.skills.backend}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {skills.backend.map((skill, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-500"
                          >
                            <div className="text-primary">{skill.icon}</div>
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  {/* DevOps Skills */}
                  <Card className="bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 group">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                          <Cpu className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">
                          {t.skills.devops}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {skills.devops.map((skill, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-500"
                          >
                            <div className="text-primary">{skill.icon}</div>
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  {/* Database Skills */}
                  <Card className="bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 group">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                          <Database className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">
                          {t.skills.database}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {skills.database.map((skill, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-500"
                          >
                            <div className="text-primary">{skill.icon}</div>
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
              key="projects-section"
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-200px" }}

              id="projects"
              className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50"
            >
              <motion.div
                variants={fadeUpVariants}
                className="max-w-7xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-12 text-center">
                  {t.projects.title}
                </h2>

                <motion.div
                  variants={fadeUpVariants}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {projects.map((project, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div
                        className="h-48 bg-cover bg-center project-image"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          className="w-full gap-2"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          {t.projects.viewProject}
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </motion.div>
              </motion.div>
            </motion.section>


            {/* Experience Section */}
            <motion.section
              key="experience-section"
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-200px" }}

              id="experience"
              className="py-20 px-4 sm:px-6 lg:px-8"
            >
              <motion.div variants={fadeUpVariants} className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-16 text-center">
                  {t.experience?.title || "Experiência"}
                </h2>
                <motion.div variants={fadeUpVariants} className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUpVariants}
                    >

                      <Card

                        className="bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-full bg-primary/10">
                                  <Briefcase className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">
                                  {exp.title}
                                </h3>
                              </div>
                              <p className="text-lg text-muted-foreground mb-1">
                                {exp.company}
                              </p>
                              <p className="text-sm text-muted-foreground mb-4">
                                {exp.period}
                              </p>
                              <p className="text-muted-foreground mb-6">
                                {exp.description}
                              </p>
                            </div>
                          </div>

                          {/* Skills Section */}
                          <div
                            className={`grid gap-6 transition-all duration-300 ${expandedExperience === index
                              ? "grid-rows-[1fr]"
                              : "grid-rows-[0fr]"
                              }`}
                          >
                            <div className="overflow-hidden">
                              <div className="space-y-4 pt-4 border-t border-border/40">
                                <h4 className="font-medium text-lg mb-3">
                                  {t.experience?.skillsAcquired ||
                                    "Habilidades Adquiridas"}
                                </h4>

                                <div className="grid sm:grid-cols-2 gap-6">
                                  {/* Technical Skills */}
                                  <div>
                                    <h5 className="text-sm font-medium text-muted-foreground mb-3">
                                      {t.experience?.technical || "Técnicas"}
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                      {exp.skills.technical.map(
                                        (skill, skillIndex) => (
                                          <span
                                            key={skillIndex}
                                            className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                                          >
                                            {skill}
                                          </span>
                                        )
                                      )}
                                    </div>
                                  </div>

                                  {/* Soft Skills */}
                                  <div>
                                    <h5 className="text-sm font-medium text-muted-foreground mb-3">
                                      {t.experience?.soft || "Comportamentais"}
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                      {exp.skills.soft.map(
                                        (skill, skillIndex) => (
                                          <span
                                            key={skillIndex}
                                            className="px-3 py-1 rounded-full text-sm bg-secondary/50 text-secondary-foreground"
                                          >
                                            {skill}
                                          </span>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Toggle Button */}
                          <Button
                            variant="ghost"
                            className="mt-4 w-full justify-center gap-2"
                            onClick={() =>
                              setExpandedExperience(
                                expandedExperience === index ? null : index
                              )
                            }
                          >
                            {expandedExperience === index
                              ? t.experience?.viewLess || "Ver menos"
                              : t.experience?.viewMore || "Ver mais"}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${expandedExperience === index ? "rotate-180" : ""
                                }`}
                            />
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
              key="contact-section"
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-200px" }}
              id="contact"
              className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
            >
              <motion.div variants={fadeUpVariants} className="relative max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
                <p className="text-muted-foreground mb-12">
                  {t.contact.description}
                </p>
                <motion.div variants={fadeUpVariants}>



                  <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
                    <div className="p-6">
                      <div className="relative w-full max-w-[320px] mx-auto mb-8">
                        <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                          <img
                            src={myPhoto.src}
                            alt="Profile"
                            className="w-full h-full object-contain transform scale-100 hover:scale-105 transition-transform duration-700"
                          />
                        </div>

                        <div className="text-center mt-8">
                          <h4 className="text-4xl font-bold text-primary/90">
                            {t.contact.profile.name}
                          </h4>
                        </div>
                      </div>

                      {/* Opções de contato */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {/* Agendamento */}
                        <Card
                          className="p-6 bg-card/30 hover:bg-card/50 transition-colors group cursor-pointer"
                          onClick={() =>
                            window.open(
                              "mailto:gabrielanselmo29@gmail.com?subject=Agendamento de Reunião"
                            )
                          }
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Calendar className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                              <h3 className="font-semibold mb-1">
                                {t.contact.schedule.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {t.contact.schedule.description}
                              </p>
                            </div>
                          </div>
                        </Card>

                        {/* WhatsApp Business */}
                        <Card
                          className="p-6 bg-card/30 hover:bg-card/50 transition-colors group cursor-pointer"
                          onClick={() =>
                            showUnavailableMessage("WhatsApp Business")
                          }
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <MessageCircle className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                              <h3 className="font-semibold mb-1">
                                {t.contact.whatsapp.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {t.contact.whatsapp.description}
                              </p>
                            </div>
                          </div>
                        </Card>

                        {/* Telegram */}
                        <Card
                          className="p-6 bg-card/30 hover:bg-card/50 transition-colors group cursor-pointer"
                          onClick={() => showUnavailableMessage("Telegram")}
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Send className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                              <h3 className="font-semibold mb-1">
                                {t.contact.telegram.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {t.contact.telegram.description}
                              </p>
                            </div>
                          </div>
                        </Card>

                        {/* Discord */}
                        <Card
                          className="p-6 bg-card/30 hover:bg-card/50 transition-colors group cursor-pointer"
                          onClick={() => showUnavailableMessage("Discord")}
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Headphones className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                              <h3 className="font-semibold mb-1">
                                {t.contact.discord.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {t.contact.discord.description}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.section>
          </main>
          <Footer />
        </motion.div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Aviso</h3>
          <p className="text-muted-foreground">{modalMessage}</p>
        </div>
      </Modal>
    </>
  );
}

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt" | "es";

type Translations = {
  [key: string]: {
    [key in Language]: string;
  };
};

// Define all translations here
const translations: Translations = {
    fullStackJunior: {
    en: "Full Stack Developer Junior",
    pt: "Desenvolvedor Full Stack Júnior",
    es: "Desarrollador Full Stack Junior"
  },
    dunnasDesc: {
    en: "Currently working at Dunnas, a company that provides software services for multiple businesses across Brazil. Responsible for developing complete projects in Ruby on Rails for Dunnas itself, as well as handling projects from Sinqia using Java and SQL Server.",
    pt: "Atualmente trabalhando na Dunnas, empresa que presta serviços de software para diversas empresas no Brasil. Responsável por desenvolver projetos completos em Ruby on Rails para a própria Dunnas, além de atuar em projetos da Sinqia utilizando Java e SQL Server.",
    es: "Actualmente trabajando en Dunnas, una empresa que brinda servicios de software a varias empresas en Brasil. Responsable de desarrollar proyectos completos en Ruby on Rails para la propia Dunnas, además de trabajar en proyectos de Sinqia utilizando Java y SQL Server."
  },
  // Navbar
  portfolio: {
    en: "Portfolio",
    pt: "Portfólio",
    es: "Portafolio"
  },
  // About section
  aboutMe: {
    en: "About Me",
    pt: "Sobre Mim",
    es: "Sobre Mí"
  },
aboutText: {
  en: "I am a Software Developer with experience in developing web and mobile applications that leverage artificial intelligence. I have worked on projects, including initiatives for my city's municipality, showcasing practical applications of AI. Additionally, I have strong knowledge of cloud technologies, enabling scalable and efficient solutions.",
  pt: "Sou um Desenvolvedor de Software com experiência no desenvolvimento de aplicações web e mobile que aproveitam inteligência artificial. Trabalhei em projetos, incluindo iniciativas para a prefeitura da minha cidade, demonstrando aplicações práticas de IA. Além disso, possuo sólido conhecimento em tecnologias de nuvem, permitindo soluções escaláveis e eficientes.",
  es: "Soy un Desarrollador de Software con experiencia en el desarrollo de aplicaciones web y móviles que aprovechan la inteligencia artificial. He trabajado en proyectos, incluyendo iniciativas para el municipio de mi ciudad, mostrando aplicaciones prácticas de IA. Además, tengo un sólido conocimiento de tecnologías en la nube, permitiendo soluciones escalables y eficientes."
},
title: {
  en: "Software Developer",
  pt: "Desenvolvedor de Software",
  es: "Desarrollador de Software"
},
  degree: {
    en: "Bachelor's Degree in Computer Science",
    pt: "Bacharel em Ciência da Computação",
    es: "Licenciatura en Ciencias de la Computación"
  },
  location: {
    en: "Mossoró, Rio Grande do Norte, Brazil",
    pt: "Mossoró, Rio Grande do Norte, Brasil",
    es: "Mossoró, Rio Grande do Norte, Brasil"
  },
  downloadResume: {
    en: "Download Resume",
    pt: "Baixar Currículo",
    es: "Descargar Currículum"
  },
  // Common sections
  skills: {
    en: "Skills",
    pt: "Habilidades",
    es: "Habilidades"
  },
  experience: {
    en: "Experience",
    pt: "Experiência",
    es: "Experiencia"
  },
  certifications: {
    en: "Certifications",
    pt: "Certificações",
    es: "Certificaciones"
  },
  contact: {
    en: "Contact",
    pt: "Contato",
    es: "Contacto"
  },
  // Skill levels
  advanced: {
    en: "Advanced",
    pt: "Avançado",
    es: "Avanzado"
  },
  intermediate: {
    en: "Intermediate",
    pt: "Intermediário",
    es: "Intermedio"
  },
  // Experience
  
  fullStackIntern: {
    en: "Full Stack Developer Intern",
    pt: "Estagiário Desenvolvedor Full Stack",
    es: "Practicante Desarrollador Full Stack"
  },
  prefeitura: {
    en: "Prefeitura de Mossoró",
    pt: "Prefeitura de Mossoró",
    es: "Ayuntamiento de Mossoró"
  },
  ongoing: {
    en: "Ongoing",
    pt: "Em andamento",
    es: "En curso"
  },
prefeituraDesc: {
  en: `Interned as a full-stack developer at the City Hall of Mossoró, contributing to various projects:\n
- Developed and maintained Codex, an internal training platform and project showcase built with Ruby on Rails and React.js.\n
- Created a Python script to assist data migration from an old SQL Server system to PostgreSQL for the HR system.\n
- Helped develop the inclusion feature for Mossoró Cidade Junina, the city’s most popular cultural event, using Ruby on Rails.\n
- Built a custom ETL tool with Django and React.js to streamline government data migration processes.`,
  pt: `Estágio como desenvolvedor full-stack na Prefeitura de Mossoró, atuando em diversos projetos:\n
- Desenvolvimento e manutenção do Codex, plataforma interna de treinamento e vitrine de projetos, utilizando Ruby on Rails e React.js.\n
- Criação de script em Python para auxiliar na migração de dados do sistema antigo em SQL Server para PostgreSQL, no sistema de RH.\n
- Colaboração no desenvolvimento da funcionalidade de inclusão para o Mossoró Cidade Junina, evento cultural mais popular da cidade, usando Ruby on Rails.\n
- Desenvolvimento de ferramenta ETL personalizada com Django e React.js para otimizar processos de migração de dados governamentais.`,
  es: `Prácticas como desarrollador full-stack en el Ayuntamiento de Mossoró, participando en varios proyectos:\n
- Desarrollo y mantenimiento de Codex, plataforma interna de capacitación y vitrina de proyectos, usando Ruby on Rails y React.js.\n
- Creación de un script en Python para ayudar en la migración de datos del sistema antiguo en SQL Server a PostgreSQL, para el sistema de RRHH.\n
- Colaboración en el desarrollo de la función de inclusión para Mossoró Cidade Junina, el evento cultural más popular de la ciudad, con Ruby on Rails.\n
- Desarrollo de una herramienta ETL personalizada con Django y React.js para optimizar procesos de migración de datos gubernamentales.`,
},
  programmingLanguages: {
    en: "Programming Languages",
    pt: "Linguagens de Programação",
    es: "Lenguajes de Programación"
  },
  frameworks: {
    en: "Frameworks",
    pt: "Frameworks",
    es: "Frameworks"
  },
  databases: {
    en: "Databases",
    pt: "Bancos de Dados",
    es: "Bases de Datos"
  },
  tools: {
    en: "Tools",
    pt: "Ferramentas",
    es: "Herramientas"
  },
  Java: {
    en: "Java",
    pt: "Java",
    es: "Java"
  },
  Spring: {
    en: "Spring",
    pt: "Spring",
    es: "Spring"
  },
  "SQL Server": {
    en: "SQL Server",
    pt: "SQL Server",
    es: "SQL Server"
  }
,
  researchScholarship: {
    en: "Research Scholarship",
    pt: "Bolsista de Pesquisa",
    es: "Becario de Investigación"
  },
  higiaWay: {
    en: "Higia Way Project",
    pt: "Projeto Higia Way",
    es: "Proyecto Higia Way"
  },
 higiaWayDesc: {
  en: `Contributed to the development of an AI assistant designed to support pregnant women in their daily routines. Key contributions included:\n
- Assisted in debugging and maintaining the clinic's legacy system built with Node.js and React.js.\n
- Helped recover and repopulate lost data following a VM migration.\n
- Gathered requirements and researched technologies for developing an intelligent agent to assist pregnant women.\n
- Supported the development of a chatbot using n8n, integrating it with the clinic's frontend and backend.`,

  pt: `Contribuiu para o desenvolvimento de um assistente de IA projetado para apoiar mulheres grávidas em suas rotinas diárias. Principais contribuições:\n
- Auxiliou na correção de bugs e manutenção do sistema legado da clínica, desenvolvido com Node.js e React.js.\n
- Ajudou no processo de recuperação e povoamento dos dados perdidos após uma migração de VM.\n
- Realizou o levantamento de requisitos e pesquisa de tecnologias para o desenvolvimento de um agente inteligente para auxiliar gestantes.\n
- Colaborou no desenvolvimento do chatbot utilizando n8n, integrando-o ao frontend e backend da clínica.`,

  es: `Contribuyó al desarrollo de un asistente de IA diseñado para apoyar a mujeres embarazadas en sus rutinas diarias. Contribuciones clave:\n
- Ayudó en la corrección de errores y mantenimiento del sistema heredado de la clínica, desarrollado con Node.js y React.js.\n
- Colaboró en la recuperación y repoblación de datos perdidos tras una migración de VM.\n
- Realizó levantamiento de requisitos e investigación de tecnologías para el desarrollo de un agente inteligente para asistir a mujeres embarazadas.\n
- Participó en el desarrollo del chatbot usando n8n, integrándolo con el frontend y backend de la clínica.`
},

  volunteerDeveloper: {
    en: "Volunteer Developer",
    pt: "Desenvolvedor Voluntário",
    es: "Desarrollador Voluntario"
  },
  languageLearningApp: {
    en: "Language Learning AI App",
    pt: "App de IA para Aprendizado de Idiomas",
    es: "Aplicación de IA para Aprendizaje de Idiomas"
  },
  completed: {
    en: "Completed",
    pt: "Concluído",
    es: "Completado"
  },
  languageLearningAppDesc: {
    en: "Contributed to the development of an AI-powered micro-SaaS language learning app, focusing on user engagement features and advanced natural language processing. Helped build a scalable solution for immersive and personalized language acquisition.",
    pt: "Contribuiu para o desenvolvimento de um aplicativo micro-SaaS de aprendizado de idiomas com IA, com foco em recursos de engajamento do usuário e processamento avançado de linguagem natural. Ajudou a construir uma solução escalável para aquisição de idiomas imersiva e personalizada.",
    es: "Contribuyó al desarrollo de una aplicación micro-SaaS de aprendizaje de idiomas impulsada por IA, centrándose en funciones de compromiso del usuario y procesamiento avanzado del lenguaje natural. Ayudó a construir una solución escalable para la adquisición inmersiva y personalizada de idiomas."
  },
  intern: {
    en: "Intern",
    pt: "Estagiário",
    es: "Practicante"
  },
  compassUol: {
    en: "Compass UOL",
    pt: "Compass UOL",
    es: "Compass UOL"
  },
  compassUolDesc: {
    en: "Acquired hands-on experience with machine learning techniques using AWS and earned the AWS Cloud Practitioner certification. Contributed to developing an application for tracking lost animals.",
    pt: "Adquiriu experiência prática com técnicas de machine learning usando AWS e obteve a certificação AWS Cloud Practitioner. Contribuiu para o desenvolvimento de um aplicativo para rastreamento de animais perdidos.",
    es: "Adquirió experiencia práctica con técnicas de aprendizaje automático utilizando AWS y obtuvo la certificación AWS Cloud Practitioner. Contribuyó al desarrollo de una aplicación para rastrear animales perdidos."
  },
  volunteerInstructor: {
    en: "Volunteer Instructor",
    pt: "Instrutor Voluntário",
    es: "Instructor Voluntario"
  },
  universityCourses: {
    en: "University Courses",
    pt: "Cursos Universitários",
    es: "Cursos Universitarios"
  },
  volunteerInstructorDesc: {
    en: "Taught basic programming and algorithms to students from various higher education programs. Empowered over 60 students with foundational knowledge in algorithms and computational thinking.",
    pt: "Ensinou programação básica e algoritmos a estudantes de vários programas de ensino superior. Capacitou mais de 60 alunos com conhecimentos fundamentais em algoritmos e pensamento computacional.",
    es: "Enseñó programación básica y algoritmos a estudiantes de diversos programas de educación superior. Capacitó a más de 60 estudiantes con conocimientos fundamentales en algoritmos y pensamiento computacional."
  },
  // Certifications
  awsCloudPractitioner: {
    en: "AWS Cloud Practitioner – Amazon Web Services (2024)",
    pt: "AWS Cloud Practitioner – Amazon Web Services (2024)",
    es: "AWS Cloud Practitioner – Amazon Web Services (2024)"
  },
  aiAssisted: {
    en: "AI-Assisted Certified Professional – Compass UOL (2024)",
    pt: "Profissional Certificado em Assistência por IA – Compass UOL (2024)",
    es: "Profesional Certificado en Asistencia de IA – Compass UOL (2024)"
  },
  genAiCertification: {
    en: "Gen AI Technical Certification – Compass UOL (2024)",
    pt: "Certificação Técnica em IA Generativa – Compass UOL (2024)",
    es: "Certificación Técnica en IA Generativa – Compass UOL (2024)"
  },
  // Contact section
  getInTouch: {
    en: "Get in touch",
    pt: "Entre em contato",
    es: "Ponte en contacto"
  },
  name: {
    en: "Name",
    pt: "Nome",
    es: "Nombre"
  },
  email: {
    en: "Email",
    pt: "Email",
    es: "Correo electrónico"
  },
  message: {
    en: "Message",
    pt: "Mensagem",
    es: "Mensaje"
  },
  sendMessage: {
    en: "Send Message",
    pt: "Enviar Mensagem",
    es: "Enviar Mensaje"
  },
  connectWithMe: {
    en: "Connect with me",
    pt: "Conecte-se comigo",
    es: "Conéctate conmigo"
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

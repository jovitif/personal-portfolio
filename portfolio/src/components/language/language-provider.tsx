
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
  en: "Development of customizations for banking systems, serving multiple clients. Implementation of features using Java, JavaFX, and SQL Server. Experience working in agile environments (Scrum), participating in planning, refinement, and continuous delivery. Collaboration in the maintenance and evolution of critical systems.",
  
  pt: "Desenvolvimento de customizações para sistemas do setor bancário, atendendo múltiplos clientes. Implementação de funcionalidades utilizando Java, JavaFX e SQL Server. Atuação em ambiente ágil (Scrum), participando de planejamento, refinamento e entregas contínuas. Colaboração na manutenção e evolução de sistemas críticos.",
  
  es: "Desarrollo de personalizaciones para sistemas del sector bancario, atendiendo a múltiples clientes. Implementación de funcionalidades utilizando Java, JavaFX y SQL Server. Experiencia en entornos ágiles (Scrum), participando en planificación, refinamiento y entregas continuas. Colaboración en el mantenimiento y evolución de sistemas críticos."
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

viewCertificate: {
  en: "View Certificate",
  pt: "Ver Certificado",
  es: "Ver Certificado"
},

viewRepository: {
  en: "Source Code",
  pt: "Código Fonte",
  es: "Código Fuente"
},

previewVideo: {
  en: "Preview Video",
  pt: "Vídeo de Demonstração",
  es: "Video de Demostración"
},
aboutText: {
  en: "Software Engineer with experience in developing full-stack web applications and AI integrations, working on real-world projects across public, academic, and financial sectors. Experienced in building systems using Node.js, React, and TypeScript, as well as working with automation, chatbots, and ETL tools. Familiar with agile environments (Scrum), focusing on delivering efficient, scalable solutions to real-world problems.",
  
  pt: "Engenheiro de Software com experiência no desenvolvimento de aplicações web full-stack e integrações com inteligência artificial, atuando em projetos reais nos setores público, acadêmico e financeiro. Possuo vivência na construção de sistemas utilizando Node.js, React e TypeScript, além de experiência com automações, chatbots e ferramentas de ETL. Atuo em ambientes ágeis (Scrum), com foco na criação de soluções eficientes, escaláveis e orientadas a problemas reais.",
  
  es: "Ingeniero de Software con experiencia en el desarrollo de aplicaciones web full-stack e integraciones con inteligencia artificial, participando en proyectos reales en los sectores público, académico y financiero. Experiencia en la construcción de sistemas utilizando Node.js, React y TypeScript, además de trabajar con automatizaciones, chatbots y herramientas de ETL. Trabajo en entornos ágiles (Scrum), enfocado en crear soluciones eficientes, escalables y orientadas a problemas reales."
},
title: {
  en: "Software Engineer | Full-Stack (Node.js, React, TypeScript) | AI and Data Integrations",
  pt: "Engenheiro de Software | Full-Stack (Node.js, React, TypeScript) | Integrações com IA e Dados",
  es: "Ingeniero de Software | Full-Stack (Node.js, React, TypeScript) | Integraciones con IA y Datos"
},
degree: {
  en: "B.Sc. in Computer Science",
  pt: "Bacharel em Ciência da Computação",
  es: "Grado en Ciencias de la Computación"
},
  location: {
    en: "Brazil | Open to Remote Work",
    pt: "Brasil | Disponível para trabalho remoto",
    es: "Brasil | Disponible para oportunidades remotas"
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
  en: "Development of web applications using React.js (frontend) and Ruby on Rails (backend). Implementation of responsive interfaces and secure APIs for municipal systems. Development of an ETL tool using Python (Django) for data migration automation. Handling and integration of structured data (JSON, SQL).",
  
  pt: "Desenvolvimento de aplicações web com React.js (frontend) e Ruby on Rails (backend). Implementação de interfaces responsivas e APIs seguras para sistemas municipais. Desenvolvimento de ferramenta de ETL utilizando Python (Django) para automação de migração de dados. Manipulação e integração de dados estruturados (JSON, SQL).",
  
  es: "Desarrollo de aplicaciones web utilizando React.js (frontend) y Ruby on Rails (backend). Implementación de interfaces responsivas y APIs seguras para sistemas municipales. Desarrollo de una herramienta ETL utilizando Python (Django) para la automatización de migración de datos. Manipulación e integración de datos estructurados (JSON, SQL)."
},
programmingLanguages: {
  en: "Core Technologies",
  pt: "Tecnologias Principais",
  es: "Tecnologías Principales"
},
frameworks: {
  en: "Backend Development",
  pt: "Desenvolvimento Backend",
  es: "Desarrollo Backend"
},
frontend: {
  en: "Frontend Development",
  pt: "Desenvolvimento Frontend",
  es: "Desarrollo Frontend"
},
  databases: {
    en: "Databases",
    pt: "Bancos de Dados",
    es: "Bases de Datos"
  },
tools: {
  en: "Integrations and AI",
  pt: "Integrações e IA",
  es: "Integraciones e IA"
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
  en: "Development of a chatbot for a healthcare application using Node.js, React.js, and n8n. Implementation of automations and integrations to enhance system intelligence. Maintenance and bug fixing in web applications.",
  
  pt: "Desenvolvimento de chatbot para aplicação de saúde utilizando Node.js, React.js e n8n. Implementação de automações e integrações para aprimorar a inteligência do sistema. Manutenção e correção de bugs em aplicações web.",
  
  es: "Desarrollo de un chatbot para una aplicación de salud utilizando Node.js, React.js y n8n. Implementación de automatizaciones e integraciones para mejorar la inteligencia del sistema. Mantenimiento y corrección de errores en aplicaciones web."
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
  en: "Development of an English learning application using Flutter and Firebase. Integration of artificial intelligence to personalize the user experience. Hands-on experience with mobile development and API integrations.",
  
  pt: "Desenvolvimento de aplicativo de aprendizado de inglês com Flutter e Firebase. Integração de inteligência artificial para personalização da experiência do usuário. Experiência prática com desenvolvimento mobile e integração de APIs.",
  
  es: "Desarrollo de una aplicación de aprendizaje de inglés utilizando Flutter y Firebase. Integración de inteligencia artificial para personalizar la experiencia del usuario. Experiencia práctica en desarrollo móvil e integración de APIs."
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
  en: "Experience working with cloud computing services and serverless solutions on AWS. Development of APIs and integration with cognitive services. AWS Cloud Practitioner certified.",
  
  pt: "Atuação com serviços de computação em nuvem e soluções serverless na AWS. Desenvolvimento de APIs e integração com serviços cognitivos. Certificação AWS Cloud Practitioner.",
  
  es: "Experiencia trabajando con servicios de computación en la nube y soluciones serverless en AWS. Desarrollo de APIs e integración con servicios cognitivos. Certificación AWS Cloud Practitioner."
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
  en: "Taught programming logic and Python to 20–30 beginner students, helping them build foundational problem-solving skills. Created and maintained a GitHub repository with structured learning materials to support students' learning and reinforce core computer science concepts. Developed strong communication, mentorship, and instructional skills.",
  
  pt: "Ensinei lógica de programação e Python para 20–30 alunos iniciantes, auxiliando no desenvolvimento de habilidades fundamentais de resolução de problemas. Criei e mantive um repositório no GitHub com materiais estruturados para apoiar o aprendizado e reforçar conceitos básicos de computação. Desenvolvi habilidades de comunicação, mentoria e ensino.",
  
  es: "Enseñé lógica de programación y Python a 20–30 estudiantes principiantes, ayudándolos a desarrollar habilidades fundamentales de resolución de problemas. Creé y mantuve un repositorio en GitHub con materiales estructurados para apoyar el aprendizaje y reforzar conceptos básicos de computación. Desarrollé habilidades de comunicación, mentoría y enseñanza."
},  // Certifications
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

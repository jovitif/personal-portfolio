
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
  en: "Worked as a Junior Software Developer at Dunnas Tecnologia e Consultoria, allocated to the Evertec Brasil team. Developed and customized enterprise banking solutions for multiple financial clients using Java, JavaFX, and SQL Server. Responsibilities included implementing business rules, enhancing enterprise applications, developing database functionalities, and working with complex SQL queries and stored procedures to support transactional and financial processes. Also contributed to system integration activities and collaborated in agile teams throughout the software development lifecycle using Scrum.",
  pt: "Atuei como Desenvolvedor de Software Júnior na Dunnas Tecnologia e Consultoria, alocado na equipe da Evertec Brasil. Desenvolvi e customizei soluções bancárias corporativas para diversos clientes financeiros utilizando Java, JavaFX e SQL Server. Minhas responsabilidades incluíam implementar regras de negócio, aprimorar aplicações corporativas, desenvolver funcionalidades de banco de dados e trabalhar com consultas SQL complexas e stored procedures para suportar processos transacionais e financeiros. Também contribuí para atividades de integração de sistemas e colaborei em equipes ágeis ao longo do ciclo de vida do desenvolvimento de software utilizando Scrum.",
  es: "Trabajé como Desarrollador de Software Junior en Dunnas Tecnologia e Consultoria, asignado al equipo de Evertec Brasil. Desarrollé y personalicé soluciones bancarias empresariales para múltiples clientes financieros utilizando Java, JavaFX y SQL Server. Mis responsabilidades incluían implementar reglas de negocio, mejorar aplicaciones empresariales, desarrollar funcionalidades de bases de datos y trabajar con consultas SQL complejas y procedimientos almacenados para respaldar procesos transaccionales y financieros. También contribuí a actividades de integración de sistemas y colaboré en equipos ágiles a lo largo del ciclo de vida del desarrollo de software utilizando Scrum."  
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
  en: "Software Engineer with experience in backend and full-stack development, data integration, and enterprise software solutions. Worked on real-world projects across public, academic, and financial sectors, developing business applications, ETL platforms, automation workflows, AI-assisted systems, and database-driven solutions. Experienced with Java, Ruby on Rails, Python, SQL, React, cloud technologies, and system integrations. Strong background in APIs, data processing, automation, and scalable software development. Experienced in agile environments (Scrum) and focused on building reliable, maintainable, and business-oriented solutions.",
  pt: "Engenheiro de Software com experiência em desenvolvimento backend e full-stack, integração de dados e soluções de software corporativo. Atuou em projetos reais nos setores público, acadêmico e financeiro, desenvolvendo aplicações empresariais, plataformas ETL, fluxos de automação, sistemas assistidos por IA e soluções orientadas a banco de dados. Experiência com Java, Ruby on Rails, Python, SQL, React, tecnologias em nuvem e integrações de sistemas. Forte conhecimento em APIs, processamento de dados, automação e desenvolvimento de software escalável. Experiência em ambientes ágeis (Scrum) e foco na construção de soluções confiáveis, manuteníveis e orientadas a negócios.",
  es: "Ingeniero de Software con experiencia en desarrollo backend y full-stack, integración de datos y soluciones de software empresarial. Ha trabajado en proyectos reales en los sectores público, académico y financiero, desarrollando aplicaciones empresariales, plataformas ETL, flujos de automatización, sistemas asistidos por IA y soluciones orientadas a bases de datos. Experiencia con Java, Ruby on Rails, Python, SQL, React, tecnologías en la nube e integraciones de sistemas. Sólida experiencia en APIs, procesamiento de datos, automatización y desarrollo de software escalable. Experiencia en entornos ágiles (Scrum) y enfoque en la construcción de soluciones confiables, mantenibles y orientadas al negocio."
},
title: {
  en: "Software Engineer | Backend Development | Data Integration | ETL",
  pt: "Engenheiro de Software | Desenvolvimento Backend | Integração de Dados | ETL",
  es: "Ingeniero de Software | Desarrollo Backend | Integración de Datos | ETL"
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
  en: "Worked as a Full-Stack Developer Intern at Mossoró City Hall, contributing to the development of web applications and data-driven solutions for municipal services using React.js, Ruby on Rails, and Python. Designed and developed an ETL platform to automate data migration, transformation, and validation processes, improving the integration of information across different systems and data sources. Developed web applications and APIs, implemented responsive user interfaces, and collaborated on backend solutions focused on system integration, structured data processing, and operational efficiency. Participated in the maintenance and enhancement of existing systems, working closely with stakeholders to deliver reliable and user-oriented solutions.",
  pt: "Atuei como Estagiário Desenvolvedor Full-Stack na Prefeitura de Mossoró, contribuindo para o desenvolvimento de aplicações web e soluções orientadas a dados para serviços municipais utilizando React.js, Ruby on Rails e Python. Projetei e desenvolvi uma plataforma ETL para automatizar processos de migração, transformação e validação de dados, melhorando a integração de informações entre diferentes sistemas e fontes de dados. Desenvolvi aplicações web e APIs, implementei interfaces de usuário responsivas e colaborei em soluções backend focadas em integração de sistemas, processamento estruturado de dados e eficiência operacional. Participei da manutenção e aprimoramento de sistemas existentes, trabalhando em estreita colaboração com as partes interessadas para entregar soluções confiáveis e orientadas ao usuário.",
  es: "Trabajé como Practicante Desarrollador Full-Stack en el Ayuntamiento de Mossoró, contribuyendo al desarrollo de aplicaciones web y soluciones basadas en datos para servicios municipales utilizando React.js, Ruby on Rails y Python. Diseñé y desarrollé una plataforma ETL para automatizar procesos de migración, transformación y validación de datos, mejorando la integración de información entre diferentes sistemas y fuentes de datos. Desarrollé aplicaciones web y APIs, implementé interfaces de usuario responsivas y colaboré en soluciones backend enfocadas en integración de sistemas, procesamiento estructurado de datos y eficiencia operativa. Participé en el mantenimiento y mejora de sistemas existentes, trabajando estrechamente con las partes interesadas para entregar soluciones confiables y orientadas al usuario."  
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

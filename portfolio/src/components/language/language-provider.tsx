
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt" | "es";

type Translations = {
  [key: string]: {
    [key in Language]: string;
  };
};

// Define all translations here
const translations: Translations = {
openGovInsightsDesc: {
  en: "An open-source platform that centralizes, analyzes, and visualizes public government data, making transparency information more accessible through interactive dashboards and modern web technologies.",
  pt: "Uma plataforma open source que centraliza, analisa e visualiza dados públicos governamentais, tornando as informações de transparência mais acessíveis por meio de dashboards interativos e tecnologias web modernas.",
  es: "Una plataforma de código abierto que centraliza, analiza y visualiza datos públicos gubernamentales, haciendo que la información de transparencia sea más accesible mediante paneles interactivos y tecnologías web modernas."
},
potiSaudeDesc: {
  en: "A healthcare management platform developed for a public university clinic to digitalize patient records and streamline clinical workflows. Created from the vision of a medical student, the system aims to improve patient management and automate processes that were previously handled manually.",
  pt: "Uma plataforma de gestão em saúde desenvolvida para a clínica de uma universidade pública, com o objetivo de digitalizar prontuários e otimizar os fluxos clínicos. Criado a partir da iniciativa de um estudante de Medicina, o sistema busca melhorar o gerenciamento de pacientes e automatizar processos que antes eram realizados manualmente.",
  es: "Una plataforma de gestión sanitaria desarrollada para la clínica de una universidad pública, con el objetivo de digitalizar historiales clínicos y optimizar los flujos de trabajo. Creada a partir de la iniciativa de un estudiante de Medicina, el sistema busca mejorar la gestión de pacientes y automatizar procesos que antes se realizaban de forma manual."
},
prefeituraEtlDesc: {
  en: "A government-focused ETL platform designed to support the migration of legacy databases to modern data systems. The project provides an accessible and adaptable solution for data extraction, transformation, and loading, with the potential to leverage generative AI to automate and enhance transformation workflows.",
  pt: "Uma plataforma de ETL voltada ao setor público, desenvolvida para apoiar a migração de bancos de dados legados para sistemas de dados modernos. O projeto oferece uma solução acessível e adaptável para extração, transformação e carregamento de dados, com potencial para utilizar IA generativa na automação e otimização dos processos de transformação.",
  es: "Una plataforma ETL orientada al sector público, desarrollada para apoyar la migración de bases de datos heredadas hacia sistemas de datos modernos. El proyecto ofrece una solución accesible y adaptable para la extracción, transformación y carga de datos, con potencial para utilizar IA generativa en la automatización y optimización de los procesos de transformación."
},
octoFocusDesc: {
  en: "An AI-powered platform that aggregates data from public service examination sources and transforms it into a personalized study experience. The project helps candidates discover relevant content, organize study materials, and prepare more efficiently through intelligent data processing.",
  pt: "Uma plataforma com IA desenvolvida para coletar dados de diferentes fontes de concursos públicos e transformá-los em uma experiência de estudo personalizada. O projeto auxilia concurseiros a encontrar conteúdos relevantes, organizar materiais de estudo e se preparar de forma mais eficiente por meio do processamento inteligente de dados.",
  es: "Una plataforma impulsada por IA diseñada para recopilar datos de diferentes fuentes de oposiciones y transformarlos en una experiencia de estudio personalizada. El proyecto ayuda a los candidatos a encontrar contenido relevante, organizar materiales de estudio y prepararse de manera más eficiente mediante el procesamiento inteligente de datos."
},
potiUpDesc: {
  en: "A gamified habit-tracking platform designed to help users build and maintain healthy daily routines in an engaging and intuitive way. The project combines habit management, progress tracking, and supportive communities to encourage consistency and long-term personal growth.",
  pt: "Uma plataforma de gamificação de hábitos desenvolvida para ajudar usuários a criar e manter rotinas diárias de forma leve e intuitiva. O projeto combina gerenciamento de hábitos, acompanhamento de progresso e comunidades de apoio para incentivar a consistência e o desenvolvimento pessoal a longo prazo.",
  es: "Una plataforma de gamificación de hábitos diseñada para ayudar a los usuarios a crear y mantener rutinas diarias de forma sencilla e intuitiva. El proyecto combina la gestión de hábitos, el seguimiento del progreso y comunidades de apoyo para fomentar la constancia y el desarrollo personal a largo plazo."
},
languageWorldDesc: {
  en: "A gamified language learning platform that uses interactive 3D environments to create immersive learning experiences. The project helps learners develop language skills through engaging scenarios, real-world interactions, and game-inspired progression.",
  pt: "Uma plataforma gamificada de aprendizado de idiomas que utiliza ambientes 3D interativos para criar experiências imersivas de aprendizagem. O projeto ajuda estudantes a desenvolver habilidades linguísticas por meio de cenários envolventes, interações do mundo real e progressão inspirada em jogos.",
  es: "Una plataforma gamificada de aprendizaje de idiomas que utiliza entornos 3D interactivos para crear experiencias de aprendizaje inmersivas. El proyecto ayuda a los estudiantes a desarrollar habilidades lingüísticas mediante escenarios atractivos, interacciones del mundo real y una progresión inspirada en los videojuegos."
},
  openSourceProject:{
  en: "Open Source Project",
  pt: "Projeto Open Source",
  es: "Proyecto de Código Abierto"
  },
  corporateProject: {
  en: "Corporate Project",
  pt: "Projeto Coorporativo",
  es: "Proyecto Corporativo"
  },
  
  microsaasIdeas: {
  en: "Micro-SaaS Ideas",
  pt: "Ideias de Micro-SaaS",
  es: "Ideas de Micro-SaaS"
  },
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
AcessUrl: {
  en: "View Project",
  pt: "Ver Projeto",
  es: "Ver Proyecto"
},
viewCertificate: {
  en: "View Certificate",
  pt: "Ver Certificado",
  es: "Ver Certificado"
},

dataengineer: {
  en: "Data Engineer",
  pt: "Engenheiro de Dados",
  es: "Ingeniero de Datos"
},

currentlyLearning: {
  en: "Currently Learning",
  pt: "Atualmente Aprendendo",
  es: "Actualmente Aprendiendo"
},
cloudanddevops: {
  en: "Cloud & DevOps",
  pt: "Nuvem e DevOps",
  es: "Nube y DevOps",
},

backendandintegration: {
  en: "Backend & Integration",
  pt: "Backend e Integração",
  es: "Backend e Integración",
},

systemintegration:{
  en: "System Integration",
  pt: "Integração de Sistemas",
  es: "Integración de Sistemas"
},

workflowautomation: {
  en: "Workflow Automation",
  pt: "Automação de Fluxos de Trabalho",
  es: "Automatización de Flujos de Trabajo"
},
dataintegration:{
  en: "Data Integration",
  pt: "Integração de Dados",
  es: "Integración de Datos",
},
datamigration:{
  en:"Data Migration",
  pt: "Migração de Dados",
  es: "Migración de Datos",
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
  en: "Data Engineer with a strong software engineering background, specializing in ETL pipelines, data integration, and Python backend development. I develop scalable data solutions, automate workflows, and build reliable APIs using Python, SQL, PostgreSQL, SQL Server, and AWS. Passionate about solving complex data challenges and creating efficient systems that transform raw data into valuable business insights.",
  pt: "Engenheiro de Dados com sólida experiência em engenharia de software, especializado em pipelines ETL, integração de dados e desenvolvimento backend em Python. Desenvolvo soluções de dados escaláveis, automatizo fluxos de trabalho e construo APIs confiáveis utilizando Python, SQL, PostgreSQL, SQL Server e AWS. Apaixonado por resolver desafios complexos de dados e criar sistemas eficientes que transformam dados brutos em insights valiosos para os negócios.",
  es: "Ingeniero de Datos con sólida experiencia en ingeniería de software, especializado en pipelines ETL, integración de datos y desarrollo backend en Python. Desarrollo soluciones de datos escalables, automatizo flujos de trabajo y construyo APIs confiables utilizando Python, SQL, PostgreSQL, SQL Server y AWS. Apasionado por resolver desafíos complejos de datos y crear sistemas eficientes que transforman datos brutos en valiosos insights para los negocios."
},
degree: {
  en: "B.Sc. in Computer Science",
  pt: "Bacharel em Ciência da Computação",
  es: "Grado en Ciencias de la Computación"
},
descricao:{
  en: "Building scalable web applications, data pipelines and AI-powered \n integrations using modern technologies.",
  pt: "Construindo aplicações web escaláveis, pipelines de dados e \n integrações com IA utilizando tecnologias modernas.",
  es: "Construyendo aplicaciones web escalables, pipelines de datos e \n integraciones con IA utilizando tecnologías modernas."
},
  location: {
    en: "Brazil | Open to Remote Work",
    pt: "Brasil | Disponível para trabalho remoto",
    es: "Brasil | Disponible para oportunidades remotas"
  },
  downloadResume: {
    en: "Resume",
    pt: "Currículo",
    es: "Currículum"
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
  project: {
    en: "Projects",
    pt: "Projetos",
    es: "Proyectos"
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
  title:{
    en: "Software & Data Engineer",
    pt: "Engenheiro de Software e Dados",
    es: "Ingeniero de Software y Datos"
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
  en: "An AI-powered chatbot developed to support pregnant women by answering everyday questions and providing accessible health-related guidance. In addition to developing new features, the project also involved maintaining and correcting existing modules to improve stability, reliability, and overall system functionality.",
  pt: "Um chatbot com IA desenvolvido para auxiliar gestantes no dia a dia, respondendo dúvidas e fornecendo orientações acessíveis sobre temas relacionados à gestação. Além do desenvolvimento de novas funcionalidades, o projeto também envolveu a correção e manutenção de módulos existentes para garantir maior estabilidade, confiabilidade e o funcionamento adequado do sistema.",
  es: "Un chatbot impulsado por IA desarrollado para apoyar a mujeres embarazadas, respondiendo preguntas cotidianas y proporcionando orientación accesible sobre temas relacionados con el embarazo. Además del desarrollo de nuevas funcionalidades, el proyecto también incluyó la corrección y el mantenimiento de módulos existentes para garantizar una mayor estabilidad, confiabilidad y el correcto funcionamiento del sistema."
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
  current:{
    en: "Current",
    pt: "Atual",
    es: "Actual"
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

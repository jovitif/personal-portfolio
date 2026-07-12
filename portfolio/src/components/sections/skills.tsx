import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../language/language-provider";

import {
  FaPython,
  FaJava,
  FaAws,
  FaDatabase,
  FaExchangeAlt,
  FaServer,
  FaCloud,
  FaCode,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiN8N,
  SiPowers,
  SiApachespark,
  SiApacheairflow,
  SiBt,
  SiDocker,
  SiGit,
  SiRubyonrails,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export function Skills() {
  const { t } = useLanguage();

const categories = [
  {
    name: t("dataengineer"),
    items: [
      { name: "Python", icon: FaPython },
      { name: "SQL", icon: FaDatabase },
      { name: "ETL", icon: FaExchangeAlt },
      { name: t("dataintegration"), icon: FaServer },
      { name: t("datamigration"), icon: FaDatabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQL Server", icon: FaDatabase },
      { name: "Power BI", icon: SiPowers },
    ],
  },

  {
    name: t("backendandintegration"),
    items: [
      { name: "Java", icon: FaJava },
      { name: "Ruby on Rails", icon: SiRubyonrails },
      { name: "REST APIs", icon: FaServer },
      { name: t("systemintegration"), icon: FaExchangeAlt },
      { name: t("workflowautomation"), icon: FaExchangeAlt },
      { name: "n8n", icon: SiN8N },
    ],
  },

  {
    name: "Frontend",
    items: [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    name: t("cloudanddevops"),
    items: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
    ],
  },

  {
    name: t("currentlyLearning"),
    items: [
      { name: "Microsoft Fabric", icon: FaCloud },
      { name: "Apache Spark", icon: SiApachespark },
      { name: "Apache Airflow", icon: SiApacheairflow },
      { name: "dbt", icon: SiBt },
    ],
  },
];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">{t("skills")}</h2>

        {categories.map((category) => (
          <div key={category.name} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.items.map((skill) => (
                <Card
                  key={skill.name}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="flex items-center gap-3 p-5">
                    <skill.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../language/language-provider";

import { FaPython, FaNodeJs, FaAws, FaReact, FaJava } from "react-icons/fa";
import { SiPostgresql, SiSpring, SiN8N, SiRubyonrails, SiReactivex } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

export function Skills() {
  const { t } = useLanguage();

  const categories = [
    {
      name: "programmingLanguages",
      items: [
        { name: "Python", level: "advanced", icon: FaPython },
        { name: "Java", level: "intermediate", icon: FaJava },
        { name: "JavaScript", level: "intermediate", icon: FaReact },
        { name: "TypeScript", level: "intermediate", icon: FaReact },
        { name: "Ruby", level: "intermediate", icon: SiRubyonrails },
      ]
    },
    {
      name: "frameworks",
      items: [
        { name: "Node.js", level: "advanced", icon: FaNodeJs },
        { name: "Django", level: "intermediate", icon: FaPython },
        { name: "React.js", level: "intermediate", icon: FaReact },
        { name: "React Native", level: "intermediate", icon: SiReactivex },
        { name: "Ruby on Rails", level: "intermediate", icon: SiRubyonrails },
        { name: "Spring", level: "intermediate", icon: SiSpring },
      ]
    },
    {
      name: "databases",
      items: [
        { name: "PostgreSQL", level: "advanced", icon: SiPostgresql },
        { name: "SQL Server", level: "intermediate", icon: DiMsqlServer },
      ]
    },
    {
      name: "tools",
      items: [
        { name: "AWS", level: "intermediate", icon: FaAws },
        { name: "n8n", level: "advanced", icon: SiN8N },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">{t("skills")}</h2>

        {categories.map((category) => (
          <div key={category.name} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">{t(category.name)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.items.map((skill) => (
                <Card key={skill.name} className="flex flex-col">
                  <CardHeader className="flex-row items-center gap-4">
                    <skill.icon className="w-6 h-6" />
                    <CardTitle>{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{t(skill.level)}</p>
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



import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../language/language-provider";

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
  title: "fullStackJunior",
  company: "Dunnas",
  period: "current",
  description: "dunnasDesc",
},
    {
      title: "fullStackIntern",
      company: "prefeitura",
      period: "completed",
      description: "prefeituraDesc",
    },
    {
      title: "researchScholarship",
      company: "higiaWay",
      period: "completed",
      description: "higiaWayDesc",
    },
    {
      title: "volunteerDeveloper",
      company: "languageLearningApp",
      period: "completed",
      description: "languageLearningAppDesc",
    },
    {
      title: "intern",
      company: "compassUol",
      period: "completed",
      description: "compassUolDesc",
    },
    {
      title: "volunteerInstructor",
      company: "universityCourses",
      period: "completed",
      description: "volunteerInstructorDesc",
    },
  ];


  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">{t("experience")}</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const description = t(exp.description);
            const lines = description.split('\n').filter(Boolean);

            // Variável para controlar se já renderizou a lista
            let listRendered = false;

            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{t(exp.title)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{t(exp.company)}</p>
                  <p className="text-sm text-muted-foreground">{t(exp.period)}</p>
                  <div className="mt-2 space-y-1">
                    {lines.map((line, i) => {
                      if (line.trim().startsWith('-')) {
                        // Se a lista já foi renderizada, não renderiza novamente os itens
                        if (listRendered) return null;

                        // Pega só os itens de lista a partir da linha atual
                        const listItems = lines.slice(i).filter(l => l.trim().startsWith('-'));

                        listRendered = true; // Marca que a lista já foi renderizada

                        return (
                          <ul key={i} className="list-disc list-inside ml-4">
                            {listItems.map((item, idx) => (
                              <li key={idx}>{item.replace(/^-/, '').trim()}</li>
                            ))}
                          </ul>
                        );
                      }

                      // Evita renderizar linhas da lista em separado
                      if (listRendered && line.trim().startsWith('-')) return null;

                      return <p key={i}>{line}</p>;
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );  }

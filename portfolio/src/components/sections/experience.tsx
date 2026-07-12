
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../language/language-provider";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Experience() {
  const { t } = useLanguage();

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  image?: string;
  certificateUrl?: string;
  repoUrl?: string;
  previewVideoUrl?: string;
};
  const experiences: Experience[] = [
    {
  title: "fullStackJunior",
  company: "Dunnas",
  period: "current",
  description: "dunnasDesc",
      image: "https://media.licdn.com/dms/image/v2/D4D0BAQGG_PyIEk0O0w/company-logo_200_200/B4DZfW8646GkAM-/0/1751657983926/evertecbr_logo?e=2147483647&v=beta&t=JfFBdoywSNX0CpLaIKF_RDkECICIDoaXw6XiaiGiGdo",
},
    {
      title: "fullStackIntern",
      company: "prefeitura",
      period: "completed",
      description: "prefeituraDesc",
      image: "https://media.licdn.com/dms/image/v2/D4D0BAQGG_PyIEk0O0w/company-logo_200_200/B4DZfW8646GkAM-/0/1751657983926/evertecbr_logo?e=2147483647&v=beta&t=JfFBdoywSNX0CpLaIKF_RDkECICIDoaXw6XiaiGiGdo",
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
      repoUrl: "https://github.com/jovitif/cs-fundamentals",
      certificateUrl: "src/assets/voluntario.pdf",
    },
  ];


return (
  <section id="experience" className="py-20 bg-muted/50">
    <div className="container">
      <h2 className="text-3xl font-bold mb-8">{t("experience")}</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const description = t(exp.description);
          const lines = description.split('\n').filter(Boolean);

          let listRendered = false;

          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{t(exp.title)}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="font-semibold">{t(exp.company)}</p>
                <p className="text-sm text-muted-foreground">
                  {t(exp.period)}
                </p>

                <div className="mt-2 space-y-1">
                  {lines.map((line, i) => {
                    if (line.trim().startsWith('-')) {
                      if (listRendered) return null;

                      const listItems = lines
                        .slice(i)
                        .filter(l => l.trim().startsWith('-'));

                      listRendered = true;

                      return (
                        <ul key={i} className="list-disc list-inside ml-4">
                          {listItems.map((item, idx) => (
                            <li key={idx}>
                              {item.replace(/^-/, '').trim()}
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    if (listRendered && line.trim().startsWith('-')) return null;

                    return <p key={i}>{line}</p>;
                  })}
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {exp.certificateUrl && (
                    <Button asChild> 
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-emerald-700 text-white transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t("viewCertificate")}
                    </a>
                    </Button> 
                  )}

                {exp.repoUrl && (
                  <Button asChild >

                    <a
                      href={exp.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {t("viewRepository")}
                    </a>
                  </Button>
                )}                
          </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
); }

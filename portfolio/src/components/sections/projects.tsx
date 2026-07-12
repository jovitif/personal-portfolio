
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../language/language-provider";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const { t } = useLanguage();

  type Project = {
    title: string;
    company: string;
    period?: string;
    description: string;
    acessUrl?: string;
    repoUrl?: string;
    previewVideoUrl?: string;
  };

  const projects: Project[] = [
    {
      title: "Open Gov Insights",
      company: "openSourceProject",
      description: "openGovInsightsDesc",
      acessUrl: "https://www.opengovinsights.com/",
      repoUrl: "https://www.opengovinsights.com/",
      previewVideoUrl: "https://www.youtube-nocookie.com/embed/ztnT36-K19g?si=KjKGgCtKvQ9CIz0k&amp;controls=0",
    },
    {
      title: "PrefeituraETL",
      company: "corporateProject",
      description: "prefeituraEtlDesc",
      previewVideoUrl: "https://www.youtube-nocookie.com/embed/ztnT36-K19g?si=KjKGgCtKvQ9CIz0k&amp;controls=0",
    },
    {
      title: "Poti Saude Clinica",
      company: "corporateProject",
      description: "potiSaudeDesc",
      previewVideoUrl: "https://www.youtube-nocookie.com/embed/ztnT36-K19g?si=KjKGgCtKvQ9CIz0k&amp;controls=0",
    },
    {
      title: "OctoFocus.AI",
      company: "openSourceProject",
      description: "octoFocusDesc",
      acessUrl: "https://www.opengovinsights.com/",
      repoUrl: "https://www.opengovinsights.com/",
      previewVideoUrl: "https://www.youtube-nocookie.com/embed/ztnT36-K19g?si=KjKGgCtKvQ9CIz0k&amp;controls=0",
    },
    {
      title: "3D Language World",
      company: "microsaasIdeas",
      description: "languageWorldDesc",
      acessUrl: "https://www.opengovinsights.com/",
      previewVideoUrl: "https://www.youtube-nocookie.com/embed/ztnT36-K19g?si=KjKGgCtKvQ9CIz0k&amp;controls=0",
    },
    {
      title: "PotiUp",
      company: "microsaasIdeas",
      description: "potiUpDesc",
      acessUrl: "https://www.opengovinsights.com/",
      previewVideoUrl: "https://www.youtube-nocookie.com/embed/ztnT36-K19g?si=KjKGgCtKvQ9CIz0k&amp;controls=0",
    },
    {
      title: "Higia Way",
      company: "corporateProject",
      description: "higiaWayDesc",
      previewVideoUrl: "https://www.youtube-nocookie.com/embed/ztnT36-K19g?si=KjKGgCtKvQ9CIz0k&amp;controls=0",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">{t("project")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => {
            const description = t(project.description);
            const lines = description.split('\n').filter(Boolean);

            let listRendered = false;

            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{t(project.title)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{t(project.company)}</p>
                  {project.previewVideoUrl && (
                    <div className="mt-4">
                      <iframe src={project.previewVideoUrl} title={t("previewVideo")} className="w-full h-64 rounded-lg" allowFullScreen />
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {t(project.period)}
                  </p>
                  <div className="mt-2 space-y-1">
                    {lines.map((line, i) => {
                      if (line.trim().startsWith('-')) {
                        if (listRendered) return null;

                        const listItems = lines.slice(i).filter(l => l.trim().startsWith('-'));

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
                    {project.acessUrl && (
                      <Button asChild>
                        <a href={project.acessUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {t("AcessUrl")}
                        </a>
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button asChild >
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          <span>{t("viewRepository")}</span>
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
  ); 
}
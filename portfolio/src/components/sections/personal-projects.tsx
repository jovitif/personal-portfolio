import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../language/language-provider";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

export function PersonalProjects() {
  const { t } = useLanguage();

  type PersonalProject = {
    title: string;
    company: string;
    description: string;
    image?: string;
    acessUrl?: string;
  };

  const projects: PersonalProject[] = [
    {
      title: "octofocusTitle",
      company: "personalProject",
      description: "octofocusDesc",
      image: "/octofocus.png",
      acessUrl: "https://octofocus-front.vercel.app/login",
    },
  ];

  return (
    <section id="personal-projects" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">{t("personalProjects")}</h2>
        <div className="space-y-6">
          {projects.map((project, index) => {
            const description = t(project.description);
            const lines = description.split('\n').filter(Boolean);

            let listRendered = false;

            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={t(project.title)}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                    )}
                    <CardTitle>{t(project.title)}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="font-semibold">{t(project.company)}</p>

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
                    {project.acessUrl && (
                      <Button asChild>
                        <a
                          href={project.acessUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-emerald-700 text-white transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {t("AcessUrl")}
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
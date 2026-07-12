import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "../language/language-provider";

import {
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import {
  SiYoutube,
  SiUpwork,
} from "react-icons/si";

export function Hero() {
  const { t } = useLanguage();

  const technologies = [
    "Python",
    "Next.js",
    "SQL",
    "AWS",
    "TypeScript",
  ];

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center justify-center py-20"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          {/* Avatar */}
          <Avatar className="h-40 w-40 mb-8 border-4 border-primary/10">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/83482081?s=400&u=b4a9b2d3fcf7ad6e03cca5297952ba99e61ad651&v=4"
              alt={t("name")}
            />
            <AvatarFallback>JVS</AvatarFallback>
          </Avatar>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            João Sales
          </h1>

          {/* Title */}
          <p className="mt-4 text-2xl font-semibold text-primary">
            {t("title")}
          </p>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-8">
            {t("descricao")}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                {t("downloadResume")}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                {t("contact")}
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-10">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/joaofdsales"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/jovitif"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://youtube.com/@SEU_CANAL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiYoutube className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.upwork.com/freelancers/SEU_ID"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiUpwork className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:joaosales911@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
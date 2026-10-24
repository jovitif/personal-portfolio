
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { PersonalProjects } from "@/components/sections/personal-projects";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <About />
          <Experience />
          <PersonalProjects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;

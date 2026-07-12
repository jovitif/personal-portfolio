
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Projects } from "@/components/sections/projects";
import { Hero } from "@/components/sections/hero";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;

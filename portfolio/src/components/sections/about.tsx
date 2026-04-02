
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../language/language-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download } from "lucide-react";

export function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">{t("aboutMe")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="md:col-span-1">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <Avatar className="h-32 w-32 mb-4">
                <AvatarImage 
                  src="https://avatars.githubusercontent.com/u/83482081?s=400&u=b4a9b2d3fcf7ad6e03cca5297952ba99e61ad651&v=4" 
                  alt={t("name")} 
                />
                <AvatarFallback>JVS</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">João Sales</h3>
              <p className="text-muted-foreground mb-2">{t("title")}</p>
              <div className="space-y-2 mb-4">
                <p>{t("degree")}</p>
                <p>{t("location")}</p>
              </div>
            </CardContent>
          </Card>
          
          {/* About Text */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>{t("aboutMe")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                {t("aboutText")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

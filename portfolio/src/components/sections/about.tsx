import { useLanguage } from "../language/language-provider";

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 bg-muted/40"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto">

          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
           {t("aboutMe")}
          </span>

          <h2 className="text-4xl font-bold mt-2 mb-8">
            {t("aboutMe")}
          </h2>

          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>{t("aboutText")}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
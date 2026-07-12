
import { ThemeToggle } from "../theme/theme-toggle";
import { LanguageSwitcher } from "../language/language-switcher";
import { useLanguage } from "../language/language-provider";

export function Navbar() {
  const { t } = useLanguage();
  
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-sm border-b bg-muted/50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-bold">
          {t("portfolio")}
        </a>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

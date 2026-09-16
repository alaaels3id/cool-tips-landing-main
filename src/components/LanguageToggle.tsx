import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

interface LanguageToggleProps {
  variant?: "floating" | "inline";
  className?: string;
}

export function LanguageToggle({ variant = "inline", className = "" }: LanguageToggleProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  const toggleLanguage = () => {
    const nextLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLang);
  };

  if (variant === "floating") {
    return (
      <div className="fixed bottom-6 right-6 z-40 group">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleLanguage}
          className="w-12 h-12 rounded-full border border-border bg-card/80 backdrop-blur-md text-foreground shadow-lg hover:border-primary transition-all duration-300"
          aria-label="Toggle language"
        >
          <Languages className="h-5 w-5" />
          <span className="sr-only">Switch Language</span>
        </Button>
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className={`h-9 w-9 rounded-xl text-muted-foreground hover:text-foreground relative ${className}`}
      title={currentLang === "en" ? "Switch to Arabic" : "Switch to English"}
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4" />
      <span className="absolute -bottom-0.5 -right-0.5 text-[9px] font-bold font-mono uppercase bg-secondary px-1 rounded border border-border">
        {currentLang.slice(0, 2)}
      </span>
    </Button>
  );
}

export default LanguageToggle;

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export function LanguageToggle() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const toggleLanguage = () => {
        const nextLang = currentLang === "en" ? "ar" : "en";
        i18n.changeLanguage(nextLang);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] group">
            <Button
                variant="outline"
                size="icon"
                onClick={toggleLanguage}
                className="w-20 h-20 rounded-full border-4 border-foreground bg-white text-foreground shadow-tactile hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-tactile-hover transition-all duration-300 relative group active:scale-90 flex items-center justify-center overflow-visible"
            >
                <div className="relative w-10 h-10 flex items-center justify-center">
                    <Languages className="h-10 w-10 transition-all duration-500 group-hover:text-primary group-hover:animate-wiggle" />
                    <span className="absolute -bottom-1 -right-1 text-[10px] font-black bg-foreground text-background dark:text-black px-1.5 py-0.5 rounded-full border-2 border-foreground uppercase tracking-widest">
                        {currentLang === 'en' ? 'EN' : 'AR'}
                    </span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary border-4 border-foreground rounded-full animate-pulse" />
                <span className="sr-only">Toggle language</span>
            </Button>
            <div className="absolute bottom-full right-0 mb-6 overflow-hidden whitespace-nowrap pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity">
                <span className="font-bold text-xs bg-foreground text-background dark:text-black px-4 py-1.5 rounded-none uppercase tracking-widest shadow-tactile-hover">
                    {currentLang === 'en' ? 'Switch to Arabic!' : 'التبديل إلى الإنجليزية!'}
                </span>
            </div>
        </div>
    );
}

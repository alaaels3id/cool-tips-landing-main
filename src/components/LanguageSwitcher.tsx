import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="fixed bottom-6 right-6 z-[100] group">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleLanguage}
        className="w-16 h-16 rounded-none border-4 border-foreground bg-background text-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] transition-all duration-300 relative group"
      >
        <Languages className="h-8 w-8 transition-all group-hover:text-blue-500" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 border border-foreground" />
        <span className="sr-only">Toggle language</span>
      </Button>
      <div className="absolute right-20 bottom-0 overflow-hidden whitespace-nowrap pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity">
        <span className="font-mono text-[10px] bg-foreground text-background px-2 py-1 uppercase font-black">
          Language_{i18n.language?.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

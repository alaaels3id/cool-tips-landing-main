import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Playful Decorative Blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-bounce-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[120px] animate-bounce-slow" style={{ animationDelay: '1s' }} />

        <div className="text-center animate-reveal relative z-10">
          <h1 className="text-[12rem] md:text-[18rem] font-bold text-primary leading-none tracking-tighter mb-4 drop-shadow-2xl">
            404
          </h1>
          <div className="inline-block px-8 py-3 bg-foreground text-background font-bold text-xl uppercase tracking-widest rounded-full mb-12 shadow-tactile rotate-[-2deg]">
            {t('not_found.badge')}
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground/60 mb-12 max-w-lg mx-auto leading-tight">
            {t('not_found.description')}
          </p>
          <Button
            size="lg"
            asChild
            className="h-20 px-12 rounded-full bg-primary text-primary-foreground dark:text-black font-bold text-2xl border-4 border-foreground shadow-tactile hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_#222] transition-all"
          >
            <Link to="/" className="flex items-center gap-4">
              <Home className="w-8 h-8" />
              {t('common.back')}
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

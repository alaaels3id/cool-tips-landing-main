import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppLayout from "@/components/layout/AppLayout";
import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home, Play } from "lucide-react";

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <AppLayout>
      <SEO
        title={t("not_found.title")}
        description={t("not_found.desc")}
      />

      <div className="container mx-auto px-4 py-24 md:py-36 text-center max-w-2xl">
        <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center mx-auto mb-6 text-primary shadow-inner">
          <FileQuestion className="w-10 h-10" />
        </div>

        <div className="inline-block px-3 py-1 rounded-md bg-destructive/10 text-destructive font-mono text-xs font-bold uppercase tracking-wider mb-4 border border-destructive/20">
          {t("not_found.badge")}
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          {t("not_found.title")}
        </h1>

        <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed font-mono">
          {t("not_found.desc")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-xl gap-2 font-semibold">
            <Link to="/">
              <Home className="w-4 h-4" />
              {t("not_found.back_home")}
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="rounded-xl gap-2">
            <Link to="/videos">
              <Play className="w-4 h-4" />
              {t("not_found.explore_videos")}
            </Link>
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFound;

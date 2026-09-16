import { useTranslation } from "react-i18next";
import AppLayout from "@/components/layout/AppLayout";
import SEO from "@/components/seo/SEO";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Terms = () => {
  const { t } = useTranslation();

  return (
    <AppLayout>
      <SEO
        title={t("terms.title")}
        description={t("terms.s1_text")}
      />

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <div className="mb-6">
          <Button asChild variant="ghost" size="sm" className="gap-1.5 text-xs text-muted-foreground">
            <Link to="/">
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" /> {t("terms.back")}
            </Link>
          </Button>
        </div>

        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5" />
            <span>{t("terms.badge")}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            {t("terms.title")}
          </h1>
          <p className="text-xs font-mono text-muted-foreground">
            {t("terms.effective_date")} {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <section className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
            <h2 className="text-xl font-bold text-foreground">{t("terms.s1_title")}</h2>
            <p>{t("terms.s1_text")}</p>
          </section>

          <section className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
            <h2 className="text-xl font-bold text-foreground">{t("terms.s2_title")}</h2>
            <p>{t("terms.s2_p1")}</p>
            <p>{t("terms.s2_p2")}</p>
          </section>

          <section className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
            <h2 className="text-xl font-bold text-foreground">{t("terms.s3_title")}</h2>
            <p>{t("terms.s3_text")}</p>
          </section>

          <section className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
            <h2 className="text-xl font-bold text-foreground">{t("terms.s4_title")}</h2>
            <p>{t("terms.s4_text")}</p>
          </section>

          <section className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
            <h2 className="text-xl font-bold text-foreground">{t("terms.s5_title")}</h2>
            <p>{t("terms.s5_text")}</p>
          </section>

          <section className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
            <h2 className="text-xl font-bold text-foreground">{t("terms.s6_title")}</h2>
            <p>{t("terms.s6_text")}</p>
          </section>
        </div>
      </div>
    </AppLayout>
  );
};

export default Terms;

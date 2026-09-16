import { useTranslation } from "react-i18next";
import AppLayout from "@/components/layout/AppLayout";
import SEO from "@/components/seo/SEO";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Privacy = () => {
  const { t } = useTranslation();

  return (
    <AppLayout>
      <SEO
        title={t("privacy.title")}
        description={t("privacy.s1_text")}
      />

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <div className="mb-6">
          <Button asChild variant="ghost" size="sm" className="gap-1.5 text-xs text-muted-foreground">
            <Link to="/">
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" /> {t("privacy.back")}
            </Link>
          </Button>
        </div>

        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>{t("privacy.badge")}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            {t("privacy.title")}
          </h1>
          <p className="text-xs font-mono text-muted-foreground">
            {t("privacy.last_updated")} {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <section className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
            <h2 className="text-xl font-bold text-foreground">{t("privacy.s1_title")}</h2>
            <p>{t("privacy.s1_text")}</p>
          </section>

          <section className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
            <h2 className="text-xl font-bold text-foreground">{t("privacy.s2_title")}</h2>
            <p>{t("privacy.s2_intro")}</p>
            <ul className="list-disc pl-5 rtl:pl-0 rtl:pr-5 space-y-1">
              <li>{t("privacy.s2_p1")}</li>
              <li>{t("privacy.s2_p2")}</li>
              <li>{t("privacy.s2_p3")}</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
            <h2 className="text-xl font-bold text-foreground">{t("privacy.s3_title")}</h2>
            <p>{t("privacy.s3_text1")}</p>
            <p>{t("privacy.s3_text2")}</p>
          </section>

          <section className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
            <h2 className="text-xl font-bold text-foreground">{t("privacy.s4_title")}</h2>
            <p>{t("privacy.s4_text")}</p>
          </section>

          <section className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
            <h2 className="text-xl font-bold text-foreground">{t("privacy.s5_title")}</h2>
            <p>{t("privacy.s5_text")}</p>
          </section>

          <section className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
            <h2 className="text-xl font-bold text-foreground">{t("privacy.s6_title")}</h2>
            <p>
              {t("privacy.s6_text")}{" "}
              <Link to="/contact" className="text-primary hover:underline">
                {t("nav.contact")}
              </Link>.
            </p>
          </section>
        </div>
      </div>
    </AppLayout>
  );
};

export default Privacy;

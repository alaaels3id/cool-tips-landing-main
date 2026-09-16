import { useTranslation } from "react-i18next";
import AppLayout from "@/components/layout/AppLayout";
import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Sparkles,
  Youtube,
  Layers,
  Code,
  Database,
  Cpu,
  Terminal,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { YouTubeIcon } from "@/components/common/YouTubeIcon";

const technologies = [
  { name: "Laravel", icon: Layers, desc: "Modern Eloquent, routing hacks, model strictness, custom stubs, queues, and multi-tenant architectures." },
  { name: "PHP 8.2+", icon: Code, desc: "Modern features, readonly classes, enums, match expressions, typed constants, and OOP patterns." },
  { name: "MySQL", icon: Database, desc: "Composite indexes, execution plan optimization with EXPLAIN, safe migrations, and schema design." },
  { name: "APIs & Webhooks", icon: Cpu, desc: "RESTful architecture, status codes, Sanctum authentication, rate limiting, and webhook resilience." },
  { name: "Developer Tools", icon: Terminal, desc: "Artisan CLI, Vite bundling, custom helpers, Spatie Ray, and automated testing." },
];

export const About = () => {
  const { t } = useTranslation();

  return (
    <AppLayout>
      <SEO
        title={t("about.badge")}
        description={t("about.subtitle")}
      />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-20 h-20 rounded-full border-2 border-primary/30 p-1 mx-auto mb-6 bg-card shadow-lg">
            <img src={logo} alt="Cool Tips" className="w-full h-full object-cover rounded-full" />
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("about.badge")}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            {t("about.title_prefix")}{" "}
            <span className="text-primary font-mono">{t("about.title_highlight")}</span>
            {t("about.title_suffix")}
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Channel Mission Quote */}
        <div className="p-8 md:p-10 rounded-3xl bg-secondary/30 border border-border/80 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-3">
            {t("about.mission_badge")}
          </h2>
          <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic mb-4">
            {t("about.mission_quote")}
          </blockquote>
          <p className="text-sm text-muted-foreground font-mono">
            {t("about.mission_author")}
          </p>
        </div>

        {/* Section 2: What We Cover & Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-card border border-border/70 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">{t("about.why_title")}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {t("about.why_desc")}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border/70 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">{t("about.audience_title")}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {t("about.audience_desc")}
            </p>
          </div>
        </div>

        {/* Section 3: Content Philosophy */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight mb-3">
              {t("about.philosophy_title")}
            </h2>
            <p className="text-muted-foreground text-sm">
              {t("about.philosophy_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-secondary/20 border border-border/60 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-base mb-1">{t("about.p1_title")}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("about.p1_desc")}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/20 border border-border/60 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-base mb-1">{t("about.p2_title")}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("about.p2_desc")}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/20 border border-border/60 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-base mb-1">{t("about.p3_title")}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("about.p3_desc")}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/20 border border-border/60 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-base mb-1">{t("about.p4_title")}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("about.p4_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Technologies Covered */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight mb-3">
              {t("about.tech_title")}
            </h2>
            <p className="text-muted-foreground text-sm">
              {t("about.tech_subtitle")}
            </p>
          </div>

          <div className="space-y-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="p-5 rounded-2xl bg-card border border-border/70 flex items-start sm:items-center gap-4 hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <tech.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base text-foreground">{tech.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: YouTube Channel CTA */}
        <div className="p-10 rounded-3xl bg-gradient-to-br from-card via-secondary/20 to-card border border-border text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-[#FF0000]/10 flex items-center justify-center mx-auto shadow-sm border border-[#FF0000]/15">
            <YouTubeIcon className="w-8 h-8" variant="red" />
          </div>
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t("about.community_title")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("about.community_desc")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold px-8 rounded-xl gap-2"
            >
              <a
                href="https://www.youtube.com/@coooltips?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon className="w-4 h-4" variant="white" />
                {t("about.subscribe_btn")}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <Link to="/videos">
                {t("about.explore_btn")} <ArrowRight className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1 rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default About;

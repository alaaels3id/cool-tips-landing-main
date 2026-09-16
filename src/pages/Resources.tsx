import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import AppLayout from "@/components/layout/AppLayout";
import SEO from "@/components/seo/SEO";
import ResourceCard from "@/components/resource/ResourceCard";
import { resources } from "@/data/resources";
import { BookOpen, Search, Github, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const technologies = ["All", "Laravel", "PHP", "MySQL", "APIs & Webhooks", "Developer Tools"];

export const Resources = () => {
  const { t } = useTranslation();
  const [selectedTech, setSelectedTech] = useState("All");
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const resourceTypes = [
    { label: t("resources.all_types"), value: "all" },
    { label: t("resources.type_github"), value: "github" },
    { label: t("resources.type_cheatsheet"), value: "cheatsheet" },
    { label: t("resources.type_tool"), value: "tool" },
    { label: t("resources.type_docs"), value: "docs" },
  ];

  const filteredResources = useMemo(() => {
    return resources.filter((res) => {
      const matchTech =
        selectedTech === "All" ||
        res.technology.toLowerCase() === selectedTech.toLowerCase();
      const matchType =
        selectedType === "all" ||
        res.type.toLowerCase() === selectedType.toLowerCase();
      const matchSearch =
        !searchQuery.trim() ||
        res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.technology.toLowerCase().includes(searchQuery.toLowerCase());

      return matchTech && matchType && matchSearch;
    });
  }, [selectedTech, selectedType, searchQuery]);

  return (
    <AppLayout>
      <SEO
        title={t("resources.title")}
        description={t("resources.subtitle")}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t("resources.badge")}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t("resources.title")}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("resources.subtitle")}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-card/70 border border-border/80 rounded-2xl p-6 mb-10 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
            <Input
              type="text"
              placeholder={t("resources.search_placeholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rtl:pl-4 rtl:pr-10 h-11 bg-background rounded-xl"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-4 border-t border-border/60">
            {/* Tech filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-muted-foreground font-semibold mr-1 rtl:mr-0 rtl:ml-1">
                {t("resources.technology_label")}
              </span>
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedTech === tech
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tech === "All" ? t("resources.all_types") : tech}
                </button>
              ))}
            </div>

            {/* Type filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-muted-foreground font-semibold mr-1 rtl:mr-0 rtl:ml-1">
                {t("resources.type_label")}
              </span>
              {resourceTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedType === type.value
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resource Cards Grid */}
        {filteredResources.length === 0 ? (
          <div className="text-center py-20 px-4 rounded-2xl bg-card/40 border border-border/80 max-w-md mx-auto my-12">
            <BookOpen className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-1">{t("resources.empty_title")}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t("resources.empty_desc")}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedTech("All");
                setSelectedType("all");
                setSearchQuery("");
              }}
            >
              {t("resources.reset_filters")}
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredResources.map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        )}

        {/* GitHub Organization CTA */}
        <div className="p-8 rounded-3xl bg-secondary/30 border border-border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left rtl:sm:text-right">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold">{t("resources.github_cta_title")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("resources.github_cta_desc")}
            </p>
          </div>
          <Button asChild className="gap-2 rounded-xl shrink-0">
            <a href="https://github.com/coooltips" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              <span>{t("resources.visit_github")}</span>
              <ExternalLink className="w-3 h-3 ml-1 rtl:ml-0 rtl:mr-1 rtl:rotate-180" />
            </a>
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Resources;

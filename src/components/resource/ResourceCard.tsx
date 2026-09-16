import { useTranslation } from "react-i18next";
import { Resource } from "@/types";
import { Github, FileText, Wrench, BookOpen, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  const { t } = useTranslation();

  const getIcon = () => {
    switch (resource.type) {
      case "github":
        return <Github className="w-5 h-5 text-purple-400" />;
      case "cheatsheet":
        return <FileText className="w-5 h-5 text-amber-400" />;
      case "tool":
        return <Wrench className="w-5 h-5 text-cyan-400" />;
      case "docs":
      default:
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getTypeLabel = () => {
    switch (resource.type) {
      case "github":
        return t("resources.type_github");
      case "cheatsheet":
        return t("resources.type_cheatsheet");
      case "tool":
        return t("resources.type_tool");
      case "docs":
      default:
        return t("resources.type_docs");
    }
  };

  return (
    <div className="group flex flex-col h-full bg-card border border-border/70 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          {getIcon()}
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-mono text-xs">
            {resource.technology}
          </Badge>
          <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
            {getTypeLabel()}
          </span>
        </div>
      </div>

      <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
        {resource.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
        {resource.description}
      </p>

      <div className="pt-4 border-t border-border/60 flex items-center justify-between">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <span>{t("resources.access_resource")}</span>
          <ExternalLink className="w-3.5 h-3.5 rtl:rotate-180" />
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;

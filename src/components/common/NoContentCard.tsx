import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FolderX, Sparkles, RefreshCw, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface NoContentCardProps {
  icon?: React.ComponentType<{ className?: string }>;
  title?: string;
  description?: string;
  badge?: string;
  actionLabel?: string;
  onAction?: () => void;
  actionLink?: string;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  secondaryActionLink?: string;
  className?: string;
}

export const NoContentCard: React.FC<NoContentCardProps> = ({
  icon: Icon = FolderX,
  title,
  description,
  badge,
  actionLabel,
  onAction,
  actionLink,
  secondaryActionLabel,
  onSecondaryAction,
  secondaryActionLink,
  className = "",
}) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const displayTitle = title || t("common.no_content_title");
  const displayDescription = description || t("common.no_content_desc");

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 backdrop-blur-md p-8 sm:p-12 text-center max-w-xl mx-auto my-8 shadow-xl transition-all duration-300 hover:border-primary/40 ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-primary/10 blur-3xl rounded-full pointer-events-none -z-10" />

      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/80 border border-border/80 text-[11px] font-mono text-muted-foreground mb-6">
          <Sparkles className="w-3 h-3 text-primary" />
          <span>{badge}</span>
        </div>
      )}

      {/* Modern Glowing Icon Box */}
      <div className="relative mx-auto mb-6 w-20 h-20 rounded-2xl bg-secondary/70 border border-border/80 flex items-center justify-center shadow-lg group">
        <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
        <Icon className="w-9 h-9 text-muted-foreground transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Typography */}
      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-2.5">
        {displayTitle}
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed mb-8">
        {displayDescription}
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        {actionLabel && (actionLink ? (
          <Button asChild className="rounded-xl px-6 h-11 font-semibold gap-2 shadow-md shadow-primary/20 w-full sm:w-auto">
            <Link to={actionLink}>
              {actionLabel}
              {isRtl ? (
                <ArrowLeft className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </Link>
          </Button>
        ) : onAction ? (
          <Button
            onClick={onAction}
            className="rounded-xl px-6 h-11 font-semibold gap-2 shadow-md shadow-primary/20 w-full sm:w-auto"
          >
            <RefreshCw className="w-4 h-4" />
            {actionLabel}
          </Button>
        ) : null)}

        {secondaryActionLabel && (secondaryActionLink ? (
          <Button
            asChild
            variant="outline"
            className="rounded-xl px-6 h-11 font-semibold border-border/80 w-full sm:w-auto"
          >
            <Link to={secondaryActionLink}>{secondaryActionLabel}</Link>
          </Button>
        ) : onSecondaryAction ? (
          <Button
            onClick={onSecondaryAction}
            variant="outline"
            className="rounded-xl px-6 h-11 font-semibold border-border/80 w-full sm:w-auto"
          >
            {secondaryActionLabel}
          </Button>
        ) : null)}
      </div>
    </div>
  );
};

export default NoContentCard;

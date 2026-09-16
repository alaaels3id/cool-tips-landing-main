import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Video } from "@/types";
import { Play, Clock, Eye, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface VideoCardProps {
  video: Video;
  priority?: boolean;
}

export const VideoCard = ({ video }: VideoCardProps) => {
  const { t } = useTranslation();
  const thumbnail =
    video.thumbnailUrl ||
    `https://img.youtube.com/vi/${video.youtubeVideoId}/hqdefault.jpg`;

  return (
    <article className="group flex flex-col h-full bg-card border border-border/70 hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      {/* Thumbnail Container */}
      <Link
        to={`/videos/${video.slug}`}
        className="relative aspect-video w-full overflow-hidden bg-secondary block"
        aria-label={video.title}
      >
        <img
          src={thumbnail}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.src.includes("maxresdefault.jpg")) {
              img.src = img.src.replace("maxresdefault.jpg", "hqdefault.jpg");
            }
          }}
        />
        {/* Dark overlay with play button */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary">
            <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-2.5 right-2.5 rtl:right-auto rtl:left-2.5 z-10 flex items-center gap-1 bg-black/80 backdrop-blur-sm text-white px-2 py-0.5 rounded-md text-xs font-mono font-medium">
          <Clock className="w-3 h-3" />
          <span>{video.duration}</span>
        </div>

        {/* Category badge */}
        <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 z-10">
          <Badge
            variant="secondary"
            className="bg-background/85 backdrop-blur-md text-foreground font-semibold text-xs border border-border/50"
          >
            {video.category}
          </Badge>
        </div>
      </Link>

      {/* Details Container */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-bold text-base md:text-lg text-foreground mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          <Link to={`/videos/${video.slug}`}>{video.title}</Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
          {video.description}
        </p>

        {/* Tags */}
        {video.tags && video.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {video.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Meta footer */}
        <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {video.publishedAt}
          </span>
          {video.views && (
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {video.views} {t("videos.views")}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default VideoCard;

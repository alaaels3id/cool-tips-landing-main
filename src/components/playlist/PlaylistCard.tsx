import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Playlist } from "@/types";
import { ListVideo, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaylistCardProps {
  playlist: Playlist;
}

export const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="group flex flex-col h-full bg-card border border-border/70 hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
      {/* Thumbnail Banner */}
      <div className="relative aspect-video w-full overflow-hidden bg-secondary">
        <img
          src={playlist.thumbnailUrl}
          alt={playlist.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Video count badge */}
        <div className="absolute bottom-3 left-3 rtl:left-auto rtl:right-3 z-10 flex items-center gap-1.5 bg-primary text-primary-foreground font-semibold px-2.5 py-1 rounded-md text-xs shadow-md">
          <ListVideo className="w-3.5 h-3.5" />
          <span>{t("playlists.series_videos", { count: playlist.videoCount })}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
          {playlist.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
          {playlist.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {playlist.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-border/60">
          <Button asChild variant="default" className="flex-1 gap-2">
            <Link to={`/videos?search=${encodeURIComponent(playlist.tags[0] || playlist.title)}`}>
              <Play className="w-4 h-4 fill-current" />
              {t("playlists.explore_videos")}
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" title="Watch on YouTube">
            <a
              href={playlist.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open YouTube Playlist"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;

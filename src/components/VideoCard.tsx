import { Play, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Video } from "@/data/videos";

interface VideoCardProps {
  video: Video;
  index: number;
  onClick: (video: Video) => void;
  showEntryNumber?: boolean;
}

const VideoCard = ({ video, index, onClick, showEntryNumber = false }: VideoCardProps) => {
  const { t } = useTranslation();

  return (
    <div 
      className="bubble-card group relative p-6 cursor-pointer animate-reveal h-full flex flex-col"
      onClick={() => onClick(video)}
    >
      <div className="relative aspect-video rounded-[2rem] overflow-hidden border-4 border-foreground mb-6 transition-transform group-hover:scale-[1.02] group-hover:rotate-1">
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
          onError={(e) => {
            // Fallback for missing maxresdefault
            const target = e.target as HTMLImageElement;
            if (target.src.includes('maxresdefault')) {
              target.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
            }
          }}
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <div className="w-20 h-20 rounded-full bg-foreground text-background flex items-center justify-center animate-wiggle">
            <Play className="w-10 h-10 fill-current ml-1 rtl:rotate-180" />
          </div>
        </div>
      </div>

      <div className="px-2 flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest bg-secondary text-secondary-foreground px-3 py-1 rounded-full border-2 border-foreground">
            {showEntryNumber 
              ? `${t('archive.entry')}_${String(index + 1).padStart(3, '0')}`
              : `${t('featured.lesson')} #${index + 1}`
            }
          </span>
          <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
            <Clock className="w-4 h-4" />
            {video.duration}
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {video.title}
        </h3>
        <p className="text-base text-muted-foreground line-clamp-2 font-medium">
          {video.description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;

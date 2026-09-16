import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { allVideos } from "@/data/videos";
import { playlists } from "@/data/playlists";
import { categories } from "@/data/categories";
import { resources } from "@/data/resources";
import { Play, ListVideo, FolderCode, BookOpen, ExternalLink } from "lucide-react";

interface GlobalSearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const GlobalSearchDialog = ({ open, onOpenChange }: GlobalSearchDialogProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const handleSelect = (callback: () => void) => {
    onOpenChange(false);
    callback();
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder={t("search.placeholder")} />
      <CommandList className="max-h-[70vh] p-2">
        <CommandEmpty>{t("search.no_results")}</CommandEmpty>

        {/* Videos Group */}
        <CommandGroup heading={t("search.group_videos")}>
          {allVideos.map((video) => (
            <CommandItem
              key={video.id}
              value={`${video.title} ${video.category} ${video.tags.join(" ")}`}
              onSelect={() => handleSelect(() => navigate(`/videos/${video.slug}`))}
              className="flex items-center gap-3 cursor-pointer py-2.5"
            >
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                <Play className="w-4 h-4 text-primary" fill="currentColor" />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="font-medium text-sm text-foreground truncate">
                  {video.title}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className="text-primary">{video.category}</span> • {video.duration}
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        {/* Topics / Categories Group */}
        <CommandGroup heading={t("search.group_topics")}>
          {categories.map((category) => (
            <CommandItem
              key={category.id}
              value={`category ${category.name} ${category.description}`}
              onSelect={() =>
                handleSelect(() => navigate(`/videos?category=${encodeURIComponent(category.name)}`))
              }
              className="flex items-center gap-3 cursor-pointer py-2.5"
            >
              <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center shrink-0">
                <FolderCode className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="font-medium text-sm text-foreground">{category.name}</span>
                <span className="text-xs text-muted-foreground truncate">{category.description}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        {/* Playlists Group */}
        <CommandGroup heading={t("search.group_playlists")}>
          {playlists.map((playlist) => (
            <CommandItem
              key={playlist.id}
              value={`playlist series ${playlist.title} ${playlist.description}`}
              onSelect={() => handleSelect(() => navigate(`/playlists`))}
              className="flex items-center gap-3 cursor-pointer py-2.5"
            >
              <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center shrink-0">
                <ListVideo className="w-4 h-4 text-primary" />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="font-medium text-sm text-foreground">{playlist.title}</span>
                <span className="text-xs text-muted-foreground">
                  {t("search.videos_count", { count: playlist.videoCount })}
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        {/* Resources Group */}
        <CommandGroup heading={t("search.group_resources")}>
          {resources.map((resource) => (
            <CommandItem
              key={resource.id}
              value={`resource ${resource.title} ${resource.technology} ${resource.description}`}
              onSelect={() =>
                handleSelect(() => window.open(resource.url, "_blank", "noopener,noreferrer"))
              }
              className="flex items-center gap-3 cursor-pointer py-2.5"
            >
              <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-sm text-foreground">{resource.title}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </div>
                <span className="text-xs text-muted-foreground truncate">{resource.description}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default GlobalSearchDialog;

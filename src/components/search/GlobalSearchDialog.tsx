import { useEffect, useState } from "react";
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
import { apiClient } from "@/lib/apiClient";
import { Video, Playlist, Category, Resource } from "@/types";
import { Play, ListVideo, FolderCode, BookOpen, ExternalLink } from "lucide-react";

interface GlobalSearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const GlobalSearchDialog = ({ open, onOpenChange }: GlobalSearchDialogProps) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [videos, setVideos] = useState<Video[]>([]);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);

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

  // Fetch search items whenever dialog opens or language changes
  useEffect(() => {
    if (!open) return;
    let isMounted = true;

    Promise.all([
      apiClient.getVideos({ per_page: 50 }),
      apiClient.getPlaylists(),
      apiClient.getCategories(),
      apiClient.getResources(),
    ])
      .then(([videosRes, playlistsRes, categoriesRes, resourcesRes]) => {
        if (!isMounted) return;
        setVideos(videosRes.data || []);
        setPlaylists(playlistsRes || []);
        setCategories(categoriesRes || []);
        setResources(resourcesRes || []);
      })
      .catch((err) => {
        console.warn("Failed to load search data:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [open, i18n.language]);

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
        {videos.length > 0 && (
          <CommandGroup heading={t("search.group_videos")}>
            {videos.map((video) => (
              <CommandItem
                key={video.id}
                value={`${video.title} ${video.category} ${(video.tags || []).join(" ")}`}
                onSelect={() => handleSelect(() => navigate(`/videos/${video.slug || video.id}`))}
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
        )}

        {videos.length > 0 && categories.length > 0 && <CommandSeparator />}

        {/* Topics / Categories Group */}
        {categories.length > 0 && (
          <CommandGroup heading={t("search.group_topics")}>
            {categories.map((category) => (
              <CommandItem
                key={category.id}
                value={`category ${category.name} ${category.description || ""}`}
                onSelect={() =>
                  handleSelect(() => navigate(`/videos?category=${encodeURIComponent(category.slug || category.name)}`))
                }
                className="flex items-center gap-3 cursor-pointer py-2.5"
              >
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center shrink-0">
                  <FolderCode className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-medium text-sm text-foreground">{category.name}</span>
                  {category.description && (
                    <span className="text-xs text-muted-foreground truncate">{category.description}</span>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {categories.length > 0 && playlists.length > 0 && <CommandSeparator />}

        {/* Playlists Group */}
        {playlists.length > 0 && (
          <CommandGroup heading={t("search.group_playlists")}>
            {playlists.map((playlist) => (
              <CommandItem
                key={playlist.id}
                value={`playlist series ${playlist.title} ${playlist.description || ""}`}
                onSelect={() => handleSelect(() => navigate(`/playlists`))}
                className="flex items-center gap-3 cursor-pointer py-2.5"
              >
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center shrink-0">
                  <ListVideo className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-medium text-sm text-foreground">{playlist.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {t("search.videos_count", { count: playlist.videoCount || 0 })}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {playlists.length > 0 && resources.length > 0 && <CommandSeparator />}

        {/* Resources Group */}
        {resources.length > 0 && (
          <CommandGroup heading={t("search.group_resources")}>
            {resources.map((resource) => (
              <CommandItem
                key={resource.id}
                value={`resource ${resource.title} ${resource.technology || ""} ${resource.description || ""}`}
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
                  {resource.description && (
                    <span className="text-xs text-muted-foreground truncate">{resource.description}</span>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
};

export default GlobalSearchDialog;

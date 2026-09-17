import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppLayout from "@/components/layout/AppLayout";
import SEO from "@/components/seo/SEO";
import VideoCard from "@/components/video/VideoCard";
import NoContentCard from "@/components/common/NoContentCard";
import { videoRepository } from "@/repositories/videoRepository";
import { apiClient } from "@/lib/apiClient";
import { Video, Category, Playlist } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, X, Filter, Video as VideoIcon, ListVideo } from "lucide-react";

const VIDEOS_PER_PAGE = 8;

export const Videos = () => {
  const { t, i18n } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearch = searchParams.get("search") || "";
  const initialCategory = searchParams.get("category") || "all";
  const initialPlaylist = searchParams.get("playlist") || "all";
  const initialSort = (searchParams.get("sort") as "newest" | "oldest" | "views") || "newest";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPlaylist, setSelectedPlaylist] = useState(initialPlaylist);
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "views">(initialSort);
  const [currentPage, setCurrentPage] = useState(1);
  const [videos, setVideos] = useState<Video[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(true);

  // Sync state to URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("search", searchTerm);
    if (selectedCategory && selectedCategory !== "all") params.set("category", selectedCategory);
    if (selectedPlaylist && selectedPlaylist !== "all") params.set("playlist", selectedPlaylist);
    if (sortBy && sortBy !== "newest") params.set("sort", sortBy);
    setSearchParams(params, { replace: true });
  }, [searchTerm, selectedCategory, selectedPlaylist, sortBy, setSearchParams]);

  // Read changes if external navigation set searchParams
  useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (urlCategory && urlCategory !== selectedCategory) {
      setSelectedCategory(urlCategory);
    }
    const urlPlaylist = searchParams.get("playlist");
    if (urlPlaylist && urlPlaylist !== selectedPlaylist) {
      setSelectedPlaylist(urlPlaylist);
    }
    const urlSearch = searchParams.get("search");
    if (urlSearch !== null && urlSearch !== searchTerm) {
      setSearchTerm(urlSearch);
    }
  }, [searchParams]);

  // Fetch categories & playlists from API
  useEffect(() => {
    let isMounted = true;
    Promise.all([apiClient.getCategories(), apiClient.getPlaylists()]).then(
      ([cats, pls]) => {
        if (isMounted) {
          setCategories(cats);
          setPlaylists(pls);
        }
      }
    );
    return () => {
      isMounted = false;
    };
  }, [i18n.language]);

  // Fetch / filter videos
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    videoRepository
      .search({
        query: searchTerm,
        category: selectedCategory,
        playlist: selectedPlaylist,
        sortBy: sortBy,
      })
      .then((results) => {
        if (isMounted) {
          setVideos(results);
          setCurrentPage(1);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setVideos([]);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [searchTerm, selectedCategory, selectedPlaylist, sortBy, i18n.language]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(videos.length / VIDEOS_PER_PAGE));
  const paginatedVideos = useMemo(() => {
    const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
    return videos.slice(startIndex, startIndex + VIDEOS_PER_PAGE);
  }, [videos, currentPage]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedPlaylist("all");
    setSortBy("newest");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  // Find active playlist title
  const activePlaylistObj = playlists.find(
    (p) => p.slug === selectedPlaylist || p.id === selectedPlaylist
  );

  return (
    <AppLayout>
      <SEO
        title={t("videos.title")}
        description={t("videos.subtitle")}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary uppercase tracking-widest mb-3">
            <VideoIcon className="w-3.5 h-3.5" />
            <span>{t("videos.badge")}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t("videos.title")}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("videos.subtitle")}
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="bg-card/70 border border-border/80 rounded-2xl p-6 mb-10 backdrop-blur-sm shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="relative md:col-span-6">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
              <Input
                type="text"
                placeholder={t("videos.search_placeholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rtl:pl-4 rtl:pr-10 h-11 bg-background rounded-xl border-border/70"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Playlist Dropdown Filter */}
            <div className="md:col-span-3">
              <Select
                value={selectedPlaylist}
                onValueChange={(val: string) => setSelectedPlaylist(val)}
              >
                <SelectTrigger className="h-11 bg-background rounded-xl border-border/70">
                  <div className="flex items-center gap-2 truncate">
                    <ListVideo className="w-4 h-4 text-primary shrink-0" />
                    <SelectValue placeholder={t("playlists.title", "Playlists")} />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("videos.all_topics", "All Series")}</SelectItem>
                  {playlists.map((pl) => (
                    <SelectItem key={pl.id} value={pl.slug || pl.id}>
                      {pl.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3">
              <Select
                value={sortBy}
                onValueChange={(val: "newest" | "oldest" | "views") => setSortBy(val)}
              >
                <SelectTrigger className="h-11 bg-background rounded-xl border-border/70">
                  <SelectValue placeholder="Sort order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">{t("videos.sort_newest")}</SelectItem>
                  <SelectItem value="oldest">{t("videos.sort_oldest")}</SelectItem>
                  <SelectItem value="views">{t("videos.sort_views")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-4 border-t border-border/60">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono font-medium text-muted-foreground">
              <Filter className="w-3.5 h-3.5" />
              <span>{t("videos.filter_by_topic")}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === "all"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {t("videos.all_topics")} ({videos.length})
              </button>
              {categories.map((cat) => {
                const isSelected =
                  selectedCategory.toLowerCase() === cat.name.toLowerCase() ||
                  selectedCategory.toLowerCase() === cat.slug?.toLowerCase();
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug || cat.name)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Count & Active Filters Summary */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 flex-wrap text-sm text-muted-foreground font-mono">
            <div>
              {t("videos.showing")}{" "}
              <span className="font-bold text-foreground">{paginatedVideos.length}</span>{" "}
              {t("videos.of")}{" "}
              <span className="font-bold text-foreground">{videos.length}</span>{" "}
              {t("videos.tutorials_count")}
            </div>

            {selectedPlaylist !== "all" && (
              <Badge
                variant="secondary"
                className="gap-1.5 px-3 py-1 text-xs font-normal border border-primary/30 text-primary bg-primary/5"
              >
                <ListVideo className="w-3 h-3" />
                <span>
                  {t("playlists.badge", "Series")}:{" "}
                  <strong>{activePlaylistObj?.title || selectedPlaylist}</strong>
                </span>
                <button
                  onClick={() => setSelectedPlaylist("all")}
                  className="ml-1 hover:text-foreground"
                  aria-label="Remove playlist filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
          </div>

          {(searchTerm || selectedCategory !== "all" || selectedPlaylist !== "all") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFilters}
              className="text-xs text-primary hover:text-primary/80 gap-1.5 h-8 px-2"
            >
              <X className="w-3.5 h-3.5" />
              {t("videos.reset_filters")}
            </Button>
          )}
        </div>

        {/* Video Grid or Empty State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-72 rounded-2xl bg-card border border-border animate-pulse"
              />
            ))}
          </div>
        ) : videos.length === 0 ? (
          <NoContentCard
            icon={VideoIcon}
            title={t("common.no_videos_title")}
            description={t("common.no_videos_desc")}
            actionLabel={t("videos.clear_and_view_all")}
            onAction={handleClearFilters}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {paginatedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-40"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => handlePageChange(page)}
                    isActive={currentPage === page}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-40"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </AppLayout>
  );
};

export default Videos;

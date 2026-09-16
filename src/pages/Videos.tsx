import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppLayout from "@/components/layout/AppLayout";
import SEO from "@/components/seo/SEO";
import VideoCard from "@/components/video/VideoCard";
import { videoRepository } from "@/repositories/videoRepository";
import { categories } from "@/data/categories";
import { Video } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { Search, X, Filter, Video as VideoIcon } from "lucide-react";

const VIDEOS_PER_PAGE = 8;

export const Videos = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearch = searchParams.get("search") || "";
  const initialCategory = searchParams.get("category") || "all";
  const initialSort = (searchParams.get("sort") as "newest" | "oldest" | "views") || "newest";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "views">(initialSort);
  const [currentPage, setCurrentPage] = useState(1);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  // Sync state to URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("search", searchTerm);
    if (selectedCategory && selectedCategory !== "all") params.set("category", selectedCategory);
    if (sortBy && sortBy !== "newest") params.set("sort", sortBy);
    setSearchParams(params, { replace: true });
  }, [searchTerm, selectedCategory, sortBy, setSearchParams]);

  // Read changes if external navigation set searchParams
  useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (urlCategory && urlCategory !== selectedCategory) {
      setSelectedCategory(urlCategory);
    }
    const urlSearch = searchParams.get("search");
    if (urlSearch !== null && urlSearch !== searchTerm) {
      setSearchTerm(urlSearch);
    }
  }, [searchParams]);

  // Fetch / filter videos
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    videoRepository
      .search({
        query: searchTerm,
        category: selectedCategory,
        sortBy: sortBy,
      })
      .then((results) => {
        if (isMounted) {
          setVideos(results);
          setCurrentPage(1);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [searchTerm, selectedCategory, sortBy]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(videos.length / VIDEOS_PER_PAGE));
  const paginatedVideos = useMemo(() => {
    const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
    return videos.slice(startIndex, startIndex + VIDEOS_PER_PAGE);
  }, [videos, currentPage]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortBy("newest");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

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
        <div className="bg-card/70 border border-border/80 rounded-2xl p-6 mb-10 backdrop-blur-sm shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="relative md:col-span-8">
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

            {/* Sort Dropdown */}
            <div className="md:col-span-4">
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
          <div className="mt-6 pt-6 border-t border-border/60">
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
                  selectedCategory.toLowerCase() === cat.name.toLowerCase();
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
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
          <div className="text-sm text-muted-foreground font-mono">
            {t("videos.showing")}{" "}
            <span className="font-bold text-foreground">{paginatedVideos.length}</span>{" "}
            {t("videos.of")}{" "}
            <span className="font-bold text-foreground">{videos.length}</span>{" "}
            {t("videos.tutorials_count")}
          </div>

          {(searchTerm || selectedCategory !== "all") && (
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
          <div className="text-center py-20 px-4 rounded-2xl bg-card/40 border border-border/80 max-w-xl mx-auto my-12">
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4 text-muted-foreground">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t("videos.empty_title")}</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              {t("videos.empty_desc")}
            </p>
            <Button onClick={handleClearFilters} variant="default" className="rounded-xl">
              {t("videos.clear_and_view_all")}
            </Button>
          </div>
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

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppLayout from "@/components/layout/AppLayout";
import SEO from "@/components/seo/SEO";
import VideoPlayer from "@/components/video/VideoPlayer";
import VideoCard from "@/components/video/VideoCard";
import NoContentCard from "@/components/common/NoContentCard";
import { videoRepository } from "@/repositories/videoRepository";
import { Video } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { YouTubeIcon } from "@/components/common/YouTubeIcon";
import {
  Youtube,
  Share2,
  Copy,
  Calendar,
  Clock,
  Eye,
  ArrowLeft,
  ArrowRight,
  Github,
  FileText,
  ExternalLink,
  BookOpen,
  ListVideo,
} from "lucide-react";

export const VideoDetails = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams<{ slug: string }>();

  const [video, setVideo] = useState<Video | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([]);
  const [allVideosList, setAllVideosList] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    let isMounted = true;
    setLoading(true);

    Promise.all([
      videoRepository.getBySlug(slug),
      videoRepository.getAll(),
    ])
      .then(([found, catalog]) => {
        if (!isMounted) return;
        if (found) {
          setVideo(found);
          setAllVideosList(catalog);
          videoRepository.getRelated(found, 4).then((related) => {
            if (isMounted) setRelatedVideos(related);
          });
        } else {
          setVideo(null);
          setRelatedVideos([]);
        }
        setLoading(false);
      })
      .catch(() => {
        if (isMounted) {
          setVideo(null);
          setRelatedVideos([]);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [slug, i18n.language]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success(t("video_details.copied_toast"), {
      description: t("video_details.copied_desc"),
    });
  };

  const handleShare = async () => {
    if (navigator.share && video) {
      try {
        await navigator.share({
          title: video.title,
          text: video.description,
          url: window.location.href,
        });
      } catch {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  // Find next and previous video
  const currentIndex = video ? allVideosList.findIndex((v) => v.id === video.id || v.slug === video.slug) : -1;
  const prevVideo = currentIndex > 0 ? allVideosList[currentIndex - 1] : null;
  const nextVideo =
    currentIndex >= 0 && currentIndex < allVideosList.length - 1
      ? allVideosList[currentIndex + 1]
      : null;

  if (loading) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground font-mono">Loading tutorial details...</p>
        </div>
      </AppLayout>
    );
  }

  if (!video) {
    return (
      <AppLayout>
        <SEO title={t("video_details.not_found_title")} />
        <div className="container mx-auto px-4 py-20">
          <NoContentCard
            title={t("video_details.not_found_title")}
            description={t("video_details.not_found_desc")}
            actionLabel={t("home.explore_all_videos")}
            actionLink="/videos"
          />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <SEO
        title={video.title}
        description={video.description}
        ogType="video.other"
        ogImage={video.thumbnailUrl}
        video={video}
      />

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Back Link Breadcrumb */}
        <div className="mb-6">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-xs text-muted-foreground hover:text-foreground gap-1.5 px-0 h-auto"
          >
            <Link to="/videos">
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
              <span>{t("video_details.back")}</span>
            </Link>
          </Button>
        </div>

        {/* Top Grid: Player and Video Meta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Main Video Player & Description */}
          <div className="lg:col-span-8 space-y-6">
            <VideoPlayer videoId={video.youtubeVideoId} title={video.title} />

            {/* Video Title & Actions */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="default" className="font-semibold text-xs">
                  {video.category}
                </Badge>
                {video.playlist && (
                  <Link to={`/videos?playlist=${encodeURIComponent(video.playlist)}`}>
                    <Badge
                      variant="secondary"
                      className="font-semibold text-xs gap-1.5 hover:bg-secondary/80 cursor-pointer border border-primary/20 text-primary"
                    >
                      <ListVideo className="w-3 h-3" />
                      <span>{video.playlist}</span>
                    </Badge>
                  </Link>
                )}
                <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {video.publishedAt}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {video.duration}
                  </span>
                  {video.views && (
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {video.views} {t("videos.views")}
                    </span>
                  )}
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4 leading-tight">
                {video.title}
              </h1>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 pb-6 border-b border-border/70">
                <Button
                  asChild
                  className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-semibold gap-2 rounded-xl"
                >
                  <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <YouTubeIcon className="w-4 h-4" variant="white" />
                    {t("video_details.watch_youtube")}
                  </a>
                </Button>

                <Button
                  variant="outline"
                  onClick={handleShare}
                  className="gap-2 rounded-xl"
                >
                  <Share2 className="w-4 h-4" />
                  {t("video_details.share")}
                </Button>

                <Button
                  variant="outline"
                  onClick={handleCopyLink}
                  className="gap-2 rounded-xl"
                >
                  <Copy className="w-4 h-4" />
                  {t("video_details.copy_link")}
                </Button>
              </div>

              {/* Description Section */}
              <div className="pt-6 space-y-4">
                <h2 className="text-lg font-bold uppercase tracking-wider text-foreground font-mono text-xs">
                  {t("video_details.about_title")}
                </h2>
                <div className="text-muted-foreground leading-relaxed text-base whitespace-pre-line bg-card/40 p-6 rounded-2xl border border-border/70">
                  {video.description}
                </div>
              </div>

              {/* Tags */}
              {video.tags && video.tags.length > 0 && (
                <div className="pt-4">
                  <span className="text-xs font-mono text-muted-foreground block mb-2 font-semibold">
                    {t("video_details.topics_label")}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag) => (
                      <Link
                        key={tag}
                        to={`/videos?search=${encodeURIComponent(tag)}`}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar: Resources, Next/Prev, Channel CTA */}
          <div className="lg:col-span-4 space-y-8">
            {/* Associated Resources / Code */}
            <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-4 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary font-mono flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{t("video_details.code_resources")}</span>
              </h3>
              {video.resources && video.resources.length > 0 ? (
                <div className="space-y-3">
                  {video.resources.map((res, index) => (
                    <a
                      key={index}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary border border-border/60 transition-colors"
                    >
                      <div className="mt-0.5 text-primary">
                        {res.type === "github" ? (
                          <Github className="w-4 h-4" />
                        ) : (
                          <FileText className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary flex items-center gap-1">
                          <span className="truncate">{res.title}</span>
                          <ExternalLink className="w-3 h-3 opacity-60 rtl:rotate-180" />
                        </div>
                        <span className="text-xs text-muted-foreground capitalize">
                          {res.type}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t("video_details.code_desc_fallback")}
                </p>
              )}

              <Button asChild variant="outline" size="sm" className="w-full gap-2 text-xs">
                <Link to="/resources">{t("video_details.browse_all_resources")}</Link>
              </Button>
            </div>

            {/* Previous & Next Navigation */}
            <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground font-mono">
                {t("video_details.continuous_learning")}
              </h3>
              <div className="space-y-3">
                {prevVideo && (
                  <Link
                    to={`/videos/${prevVideo.slug}`}
                    className="block p-3 rounded-xl bg-secondary/40 hover:bg-secondary border border-border/50 transition-colors"
                  >
                    <span className="text-[10px] uppercase font-mono font-bold text-muted-foreground flex items-center gap-1">
                      <ArrowLeft className="w-3 h-3 rtl:rotate-180" /> {t("video_details.prev_tutorial")}
                    </span>
                    <span className="text-sm font-semibold text-foreground line-clamp-1 mt-1 block">
                      {prevVideo.title}
                    </span>
                  </Link>
                )}
                {nextVideo && (
                  <Link
                    to={`/videos/${nextVideo.slug}`}
                    className="block p-3 rounded-xl bg-secondary/40 hover:bg-secondary border border-border/50 transition-colors"
                  >
                    <span className="text-[10px] uppercase font-mono font-bold text-muted-foreground flex items-center gap-1">
                      {t("video_details.next_tutorial")} <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                    </span>
                    <span className="text-sm font-semibold text-foreground line-clamp-1 mt-1 block">
                      {nextVideo.title}
                    </span>
                  </Link>
                )}
              </div>
            </div>

            {/* YouTube Channel Promo */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FF0000]/10 to-transparent border border-[#FF0000]/20 space-y-4 text-center">
              <YouTubeIcon className="w-9 h-9 mx-auto" variant="red" />
              <div>
                <h4 className="font-bold text-base">{t("video_details.channel_box_title")}</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {t("video_details.channel_box_desc")}
                </p>
              </div>
              <Button
                asChild
                className="w-full bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold text-xs h-9 rounded-xl gap-2"
              >
                <a
                  href="https://www.youtube.com/@coooltips?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon className="w-4 h-4" variant="white" />
                  {t("video_details.subscribe_btn")}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Related Videos */}
        {relatedVideos.length > 0 && (
          <div className="pt-12 border-t border-border/70">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">{t("video_details.related_title")}</h2>
                <p className="text-sm text-muted-foreground">
                  {t("video_details.related_subtitle", { category: video.category })}
                </p>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link to={`/videos?category=${encodeURIComponent(video.category)}`}>
                  {t("video_details.view_more", { category: video.category })}{" "}
                  <ArrowRight className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1 rtl:rotate-180" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedVideos.map((item) => (
                <VideoCard key={item.id} video={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default VideoDetails;

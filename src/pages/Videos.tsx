import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Clock, Eye, ArrowLeft, ArrowRight, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { allVideos, Video } from "@/data/videos";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import VideoCard from "@/components/VideoCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const VIDEOS_PER_PAGE = 9; // Changed from 8 to 9 to fit 3-column grid better

const Videos = () => {
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const totalPages = Math.ceil(allVideos.length / VIDEOS_PER_PAGE);

  const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
  const currentVideos = allVideos.slice(
    startIndex,
    startIndex + VIDEOS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Friendly Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b-8 border-foreground">
        <div className="container px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-[1.2rem] bg-white p-2 border-4 border-foreground shadow-tactile-hover group-hover:rotate-6 group-hover:scale-110 transition-all">
                <img
                  src={logo}
                  alt="Cool Tips"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-3xl tracking-tighter">
                  {t("hero.title_cool")}{" "}
                  <span className="text-primary italic">
                    {t("hero.title_tips")}!
                  </span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-foreground text-background px-2 py-0.5 rounded-full inline-block">
                  Video_Palooza_v2
                </span>
              </div>
            </Link>
            <Link
              to="/"
              className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors bg-white border-4 border-foreground px-6 py-2 rounded-full shadow-tactile hover:translate-x-1 rtl:hover:translate-x-[-4px]"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 rtl:rotate-180 transition-transform" />
              {t("common.back")}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-32 relative">
        {/* Playful Floating Blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-bounce-slow" />
        <div
          className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] animate-bounce-slow"
          style={{ animationDelay: "1s" }}
        />

        <div className="flex flex-col items-center text-center mb-32 animate-reveal">
          <div className="inline-block px-4 py-1 rounded-full bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest mb-10 rotate-[-2deg]">
            {t("archive.badge")}
          </div>
          <h1 className="text-6xl md:text-9xl font-bold mb-10 leading-[0.8] tracking-tighter">
            {t("archive.title")}{" "}
            <span className="text-primary italic">{t("archive.subtitle")}</span>
          </h1>
          <p className="text-2xl font-bold text-foreground/60 max-w-2xl leading-tight uppercase">
            {t("archive.description")}
          </p>
          <div className="w-40 h-4 bg-secondary rounded-full mt-16" />
        </div>

        {/* Video Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32 animate-reveal"
          style={{ animationDelay: "0.2s" }}
        >
          {currentVideos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={startIndex + index}
              onClick={setSelectedVideo}
              showEntryNumber={true}
            />
          ))}
        </div>

        {/* Friendly Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 animate-reveal">
            <Button
              variant="outline"
              size="lg"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-20 h-20 rounded-full border-4 border-foreground bg-white shadow-tactile hover:translate-x-[-2px] hover:translate-y-[-2px] disabled:opacity-30 disabled:shadow-none transition-all"
            >
              <ArrowLeft className="w-10 h-10 rtl:rotate-180" />
            </Button>

            <div className="flex gap-4">
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i}
                  size="lg"
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-16 h-16 rounded-full border-4 border-foreground text-2xl font-bold shadow-tactile transition-all
                    ${currentPage === i + 1
                      ? "bg-primary text-primary-foreground scale-110 rotate-6"
                      : "bg-white text-foreground hover:bg-secondary/20"
                    }
                  `}
                >
                  {i + 1}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="w-20 h-20 rounded-full border-4 border-foreground bg-white shadow-tactile hover:translate-x-1 hover:translate-y-[-2px] disabled:opacity-30 disabled:shadow-none transition-all"
            >
              <ArrowRight className="w-10 h-10 rtl:rotate-180" />
            </Button>
          </div>
        )}

        {/* Video Modal */}
        <Dialog
          open={!!selectedVideo}
          onOpenChange={(open) => !open && setSelectedVideo(null)}
        >
          <DialogContent className="max-w-5xl p-0 bg-background border-8 border-foreground rounded-[3.5rem] overflow-hidden shadow-tactile">
            <DialogHeader className="p-8 bg-primary text-primary-foreground border-b-8 border-foreground">
              <DialogTitle className="text-3xl font-bold tracking-tighter">
                {selectedVideo?.title}!
              </DialogTitle>
            </DialogHeader>
            <div className="relative aspect-video w-full bg-black">
              {selectedVideo && (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <div className="p-10 bg-background flex flex-col md:flex-row justify-between items-center gap-10">
              <p className="text-xl font-bold max-w-2xl leading-tight uppercase">
                {selectedVideo?.description}
              </p>
              <Button
                onClick={() => setSelectedVideo(null)}
                className="h-20 px-12 rounded-full bg-accent text-accent-foreground font-bold text-2xl border-4 border-foreground shadow-tactile hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                {t("archive.close")}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </main>

      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Videos;

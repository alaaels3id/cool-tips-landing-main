import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Clock, Eye, ArrowLeft, ArrowRight, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { allVideos, Video } from "@/data/videos";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const VIDEOS_PER_PAGE = 8;

const Videos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const totalPages = Math.ceil(allVideos.length / VIDEOS_PER_PAGE);

  const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
  const currentVideos = allVideos.slice(startIndex, startIndex + VIDEOS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Refined Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/10">
        <div className="container px-4 py-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 p-2 border border-primary/20 group-hover:scale-105 transition-transform duration-500">
                <img src={logo} alt="Cool Tips" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-2xl tracking-tight italic">
                  Cool <span className="not-italic text-primary font-black">Tips</span>
                </span>
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  Refined_Archive_v2
                </span>
              </div>
            </Link>
            <Link 
              to="/" 
              className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-32 relative">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10" />

        <div className="mb-32 animate-reveal text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
            Heritage / Expertise / Insight
          </div>
          <h1 className="text-6xl md:text-8xl font-medium mb-10 leading-[0.9] italic">
            Complete <span className="not-italic text-primary font-black">Catalogue</span>
          </h1>
          <p className="text-foreground/60 text-xl font-light leading-relaxed">
            DEEP DIVE INTO OUR FULL ARCHIVE OF TECHNICAL PATTERNS, ARCHITECTURAL INSIGHTS, AND ADVANCED BACKEND MASTERCLASSES.
          </p>
          <div className="w-24 h-px bg-primary/30 mx-auto mt-16" />
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-32 animate-reveal" style={{ animationDelay: '0.2s' }}>
          {currentVideos.map((video, index) => (
            <div 
              key={startIndex + index}
              className="premium-hover group relative bg-card rounded-[2rem] overflow-hidden border border-primary/10 shadow-card cursor-pointer pb-6"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-20">
                  <div className="w-14 h-14 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-500 shadow-glow">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2 bg-background/90 backdrop-blur-md text-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-primary/10">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">ENTRY_{String(startIndex + index + 1).padStart(3, '0')}</span>
                  <div className="h-px flex-1 bg-primary/10" />
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    <Eye className="w-3 h-3" />
                    {video.views}
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 leading-snug group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed font-light">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
          <DialogContent className="max-w-5xl p-0 bg-background border border-primary/20 rounded-[2.5rem] overflow-hidden shadow-glow">
            <DialogHeader className="p-10 border-b border-primary/10">
              <DialogTitle className="text-3xl font-medium italic">
                {selectedVideo?.title}
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
            <div className="p-10 bg-background flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-foreground/70 font-light max-w-2xl leading-relaxed">
                {selectedVideo?.description}
              </p>
              <Button 
                onClick={() => setSelectedVideo(null)}
                className="rounded-full bg-primary text-primary-foreground font-bold px-10 h-14 shadow-glow hover:scale-105 transition-all"
              >
                Close Masterclass
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Refined Pagination */}
        <div className="flex justify-center animate-reveal" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3 p-2 bg-card border border-primary/10 rounded-full shadow-card">
            <button 
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-full flex items-center justify-center text-foreground hover:bg-primary/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-12 h-12 rounded-full text-sm font-bold transition-all
                    ${currentPage === page 
                      ? "bg-primary text-primary-foreground shadow-glow scale-110" 
                      : "text-foreground hover:bg-primary/5"}`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-12 h-12 rounded-full flex items-center justify-center text-foreground hover:bg-primary/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
      
      {/* Decorative Bottom Line */}
      <footer className="container px-4 py-20 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground opacity-40">
        <span className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-primary" />
          Refined_Experience
        </span>
        <span>Folio_{String(currentPage).padStart(2, '0')}_of_{String(totalPages).padStart(2, '0')}</span>
        <span>Access:Granted</span>
      </footer>
    </div>
  );
};

export default Videos;

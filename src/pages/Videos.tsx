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
      {/* Friendly Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b-8 border-foreground">
        <div className="container px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-[1.2rem] bg-white p-2 border-4 border-foreground shadow-tactile-hover group-hover:rotate-6 group-hover:scale-110 transition-all">
                <img src={logo} alt="Cool Tips" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-3xl tracking-tighter">
                  COOL <span className="text-primary italic">TIPS!</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-foreground text-background px-2 py-0.5 rounded-full inline-block">
                  Video_Palooza_v2
                </span>
              </div>
            </Link>
            <Link 
              to="/" 
              className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors bg-white border-4 border-foreground px-6 py-2 rounded-full shadow-tactile hover:translate-x-1"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back Home!
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-32 relative">
        {/* Playful Floating Blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-bounce-slow" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] animate-bounce-slow" style={{ animationDelay: '1s' }} />

        <div className="flex flex-col items-center text-center mb-32 animate-reveal">
          <div className="inline-block px-4 py-1 rounded-full bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest mb-10 rotate-[-2deg]">
            All The Awesome Stuff!
          </div>
          <h1 className="text-6xl md:text-9xl font-bold mb-10 leading-[0.8] tracking-tighter">
            BIG <span className="text-primary italic">ARCHIVE!</span>
          </h1>
          <p className="text-2xl font-bold text-foreground/60 max-w-2xl leading-tight uppercase">
            JUMP INTO OUR WHOLE COLLECTION OF SUPER EASY TUTORIALS AND COOL CODING TRICKS!
          </p>
          <div className="w-40 h-4 bg-secondary rounded-full mt-16" />
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-32 animate-reveal" style={{ animationDelay: '0.2s' }}>
          {currentVideos.map((video, index) => (
            <div 
              key={startIndex + index}
              className="bubble-card group relative p-6 cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video rounded-[2rem] overflow-hidden border-4 border-foreground mb-6 transition-transform group-hover:scale-[1.05] group-hover:-rotate-1">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-20">
                  <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center animate-wiggle">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2 bg-white text-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border-2 border-foreground shadow-tactile-hover">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full border-2 border-foreground">Entry_{String(startIndex + index + 1).padStart(3, '0')}</span>
                  <div className="h-1 flex-1 bg-foreground/10 rounded-full" />
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground uppercase">
                    <Eye className="w-3 h-3" />
                    {video.views}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm font-medium opacity-80 line-clamp-2 leading-relaxed uppercase">
                  {video.description}
                </p>
              </div>
            </div>
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
              <ArrowLeft className="w-10 h-10" />
            </Button>
            
            <div className="flex gap-4">
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i}
                  size="lg"
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-16 h-16 rounded-full border-4 border-foreground text-2xl font-bold shadow-tactile transition-all
                    ${currentPage === i + 1 
                      ? 'bg-primary text-primary-foreground scale-110 rotate-6' 
                      : 'bg-white text-foreground hover:bg-secondary/20'}
                  `}
                >
                  {i + 1}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-20 h-20 rounded-full border-4 border-foreground bg-white shadow-tactile hover:translate-x-1 hover:translate-y-[-2px] disabled:opacity-30 disabled:shadow-none transition-all"
            >
              <ArrowRight className="w-10 h-10" />
            </Button>
          </div>
        )}

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
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
                CLOSE!
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </main>

      {/* Playful Decorative Line */}
      <div className="bg-foreground text-background py-4 overflow-hidden border-y-8 border-primary">
        <div className="flex gap-20 animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-xl font-bold tracking-widest uppercase select-none">
              AWESOME TIPS ★ COOL TRICKS ★ HAPPY CODING ★ SUPER LARAVEL ★ MASTER PHP ★ AWESOME TIPS ★ COOL TRICKS ★ HAPPY CODING ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;

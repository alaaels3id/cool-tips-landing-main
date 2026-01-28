import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Clock, Eye, ArrowLeft, X } from "lucide-react";
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
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b-4 border-foreground">
        <div className="container px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 group">
              <img src={logo} alt="Cool Tips" className="w-12 h-12 rounded-none border-2 border-foreground grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="flex flex-col leading-none">
                <span className="font-black text-2xl uppercase tracking-tighter">
                  COOL <span className="text-primary italic">TIPS</span>
                </span>
                <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">
                  Archive_Access_v2
                </span>
              </div>
            </Link>
            <Link 
              to="/" 
              className="group flex items-center gap-3 font-black uppercase tracking-tighter text-lg hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              EXIT_ARCHIVE
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-20 relative">
        {/* Background Decorative Type */}
        <div className="absolute top-0 right-0 text-[20rem] font-black text-foreground/[0.03] select-none pointer-events-none leading-none -z-10">
          VIDS
        </div>

        <div className="mb-24 animate-reveal">
          <div className="inline-block px-3 py-1 bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest mb-6">
            Database / Tutorials / Archive
          </div>
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.8] tracking-tighter uppercase italic">
            COMPLETE<br />
            <span className="text-primary not-italic">CATALOGUE</span>
          </h1>
          <p className="text-foreground font-bold text-2xl max-w-2xl uppercase tracking-tight leading-tight">
            DEEP DIVE INTO THE FULL ARCHIVE OF LARAVEL, PHP, AND MODERN WEB ARCHITECTURE MASTERCLASSES.
          </p>
          <div className="w-32 h-6 bg-foreground mt-12" />
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-foreground mb-20 animate-reveal" style={{ animationDelay: '0.2s' }}>
          {currentVideos.map((video, index) => (
            <div 
              key={startIndex + index}
              className="group relative bg-card border-foreground border-b-2 sm:[&:nth-child(odd)]:border-r-2 lg:[&:nth-child(n)]:border-r-2 lg:[&:nth-child(4n)]:border-r-0 hover:bg-primary transition-all duration-300 cursor-pointer overflow-hidden pb-4"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video bg-black overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-20">
                  <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2 bg-foreground text-background px-3 py-1 text-xs font-black uppercase tracking-widest border border-background">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
                
                <div className="absolute inset-0 bg-secondary flex items-center justify-center opacity-40 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <div className="font-mono text-[6px] text-foreground leading-tight overflow-hidden p-6 whitespace-pre">
                    {`<?php
namespace Archive;
class Tutorial_${index} {
  public function watch() {
    return 'Knowledge++';
  }
}`}
                  </div>
                </div>
              </div>
              
              <div className="p-8 group-hover:text-primary-foreground transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">ID_{String(startIndex + index + 1).padStart(3, '0')}</span>
                  <div className="h-px flex-1 bg-current opacity-20" />
                  <div className="flex items-center gap-1 font-mono text-[10px] opacity-60">
                    <Eye className="w-3 h-3" />
                    {video.views}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 leading-tight uppercase tracking-tighter group-hover:text-inherit transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm font-medium opacity-80 line-clamp-2 leading-relaxed uppercase">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
          <DialogContent className="max-w-5xl p-0 bg-background border-4 border-foreground rounded-none shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] dark:shadow-[20px_20px_0px_0px_rgba(255,255,255,0.2)] overflow-hidden">
            <DialogHeader className="p-8 bg-foreground text-background">
              <DialogTitle className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">
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
            <div className="p-8 bg-background border-t-2 border-foreground flex justify-between items-center">
              <p className="text-foreground font-bold uppercase tracking-tight max-w-2xl">
                {selectedVideo?.description}
              </p>
              <Button 
                onClick={() => setSelectedVideo(null)}
                className="rounded-none bg-primary text-primary-foreground font-black px-8 h-12 border-2 border-foreground hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                CLOSE_ENTRY
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Pagination Redesign */}
        <div className="flex justify-center animate-reveal" style={{ animationDelay: '0.4s' }}>
          <div className="flex border-4 border-foreground bg-foreground gap-1">
            <button 
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-14 px-6 bg-background text-foreground font-black uppercase tracking-tighter text-lg hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:hover:bg-background disabled:hover:text-foreground transition-colors"
            >
              PREV
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-14 h-14 font-black text-lg transition-colors
                  ${currentPage === page 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background text-foreground hover:bg-muted"}`}
              >
                {String(page).padStart(2, '0')}
              </button>
            ))}
            
            <button 
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-14 px-6 bg-background text-foreground font-black uppercase tracking-tighter text-lg hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:hover:bg-background disabled:hover:text-foreground transition-colors"
            >
              NEXT
            </button>
          </div>
        </div>
      </main>
      
      {/* Decorative Bottom Line */}
      <footer className="container px-4 py-20 flex justify-between items-center opacity-20 font-mono text-[10px] uppercase tracking-[0.5em]">
        <span>Archive_End_Protocol</span>
        <span>Page_{String(currentPage).padStart(2, '0')}_of_{String(totalPages).padStart(2, '0')}</span>
        <span>Access:Authorized</span>
      </footer>
    </div>
  );
};

export default Videos;

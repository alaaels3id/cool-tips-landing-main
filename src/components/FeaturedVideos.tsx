import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Clock, Eye, X, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { featuredVideos as videos } from "@/data/videos";

const FeaturedVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  return (
    <section className="py-32 relative bg-background overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center mb-24 animate-reveal">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Curated Collection</span>
          <h2 className="text-5xl md:text-7xl font-medium mb-6 italic">
            Featured <span className="not-italic text-foreground">Archive</span>
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.slice(0, 6).map((video, index) => (
            <div 
              key={index}
              className="premium-hover group relative bg-card rounded-[2rem] overflow-hidden border border-primary/10 shadow-card cursor-pointer animate-reveal"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-500 shadow-glow">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10">
                    Masterclass {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-3 leading-snug group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed font-light">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20 animate-reveal">
          <Link 
            to="/videos"
            className="group flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors"
          >
            Visit Full Database
            <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
          <DialogContent className="max-w-5xl p-0 bg-background border border-primary/20 rounded-[2rem] overflow-hidden shadow-glow">
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
      </div>
    </section>
  );
};


export default FeaturedVideos;

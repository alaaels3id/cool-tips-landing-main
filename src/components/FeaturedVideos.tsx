import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Clock, ArrowRight } from "lucide-react";
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
    <section className="py-32 relative bg-background overflow-hidden border-t-8 border-foreground">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center mb-24 animate-reveal">
          <div className="inline-block px-4 py-1 rounded-full bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest mb-6 rotate-[-2deg]">
            Super Awesome!
          </div>
          <h2 className="text-5xl md:text-8xl font-bold mb-6 text-foreground tracking-tighter">
            THE BEST <span className="text-primary italic">STUFF!</span>
          </h2>
          <div className="w-32 h-4 bg-secondary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {videos.slice(0, 6).map((video, index) => (
            <div 
              key={index}
              className="bubble-card group relative p-6 cursor-pointer animate-reveal"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video rounded-[2rem] overflow-hidden border-4 border-foreground mb-6 transition-transform group-hover:scale-[1.02] group-hover:rotate-1">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-20 h-20 rounded-full bg-foreground text-background flex items-center justify-center animate-wiggle">
                    <Play className="w-10 h-10 fill-current ml-1" />
                  </div>
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest bg-secondary text-secondary-foreground px-3 py-1 rounded-full border-2 border-foreground">
                    Tip #{index + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {video.duration}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-base text-muted-foreground line-clamp-2 font-medium">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-24 animate-reveal">
          <Link 
            to="/videos"
            className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-primary transition-colors hover:scale-110"
          >
            See way more!
            <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-12 transition-all shadow-tactile border-4 border-foreground">
              <ArrowRight className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
          <DialogContent className="max-w-5xl p-0 bg-background border-8 border-foreground rounded-[3rem] overflow-hidden shadow-tactile">
            <DialogHeader className="p-8 bg-primary text-primary-foreground border-b-8 border-foreground">
              <DialogTitle className="text-2xl md:text-4xl font-bold tracking-tighter">
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
              <p className="text-xl font-bold max-w-2xl leading-tight">
                {selectedVideo?.description}
              </p>
              <Button 
                onClick={() => setSelectedVideo(null)}
                className="h-16 px-10 rounded-full bg-accent text-accent-foreground font-bold text-xl border-4 border-foreground shadow-tactile hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                Close it!
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};


export default FeaturedVideos;

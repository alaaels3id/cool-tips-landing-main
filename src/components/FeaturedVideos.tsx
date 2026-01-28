import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Clock, Eye, X } from "lucide-react";
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
    <section className="py-24 relative bg-background overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-foreground/5 -rotate-6 pointer-events-none" />
      
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="animate-reveal" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-5xl md:text-7xl font-black mb-4 leading-none italic text-primary">
              FEATURED<br />
              <span className="text-foreground not-italic">ARCHIVE</span>
            </h2>
            <p className="text-foreground font-bold text-lg max-w-md uppercase tracking-tighter">
              A curated selection of Laravel technical masterclasses. Master the framework, one tip at a time.
            </p>
          </div>
          <div className="animate-reveal hidden lg:block" style={{ animationDelay: '0.2s' }}>
            <div className="text-right">
              <span className="text-[10rem] font-black text-foreground/5 leading-none">08</span>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-[-2rem]">Latest Lessons</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-foreground">
          {videos.map((video, index) => (
            <div 
              key={index}
              className={`group relative bg-card border-foreground transition-all duration-500 overflow-hidden cursor-pointer
                ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
                ${index % 3 === 0 && index !== 0 ? 'lg:col-span-2' : ''}
                border-r-2 last:border-r-0 md:border-b-2 [&:nth-child(2n)]:md:border-r-0 lg:[&:nth-child(2n)]:border-r-2 lg:[&:nth-child(4n)]:border-r-0
              `}
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video lg:aspect-auto h-full min-h-[300px] bg-black overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-20 h-20 bg-foreground text-background flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
                    <Play className="w-10 h-10 fill-current ml-1" />
                  </div>
                </div>
                
                {/* Meta Overlay */}
                <div className="absolute top-4 left-4 bg-foreground text-background px-3 py-1 text-xs font-black uppercase tracking-widest z-10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Lesson {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl lg:text-3xl font-black text-white mb-2 leading-tight uppercase tracking-tighter">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-2 font-medium">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

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
                className="rounded-none bg-primary text-primary-foreground font-black px-8 h-12 border-2 border-foreground"
              >
                CLOSE_ENTRY
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-12 border-t-2 border-foreground animate-reveal">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 md:mb-0">
            End of featured archive / version 2.0.24
          </p>
          <Link 
            to="/videos"
            className="group flex items-center gap-4 text-2xl font-black uppercase italic hover:text-primary transition-colors"
          >
            visit all videos
            <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};


export default FeaturedVideos;

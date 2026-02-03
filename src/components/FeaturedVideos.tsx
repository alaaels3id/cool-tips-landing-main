import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Clock, Eye, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

const videos = [
  {
    id: "qkRTqCwF5gw",
    title: "Create Custom Laravel Stub File",
    thumbnail: "/placeholder.svg",
    duration: "17:38",
    views: "801",
    description: "Learn how to create a custom stub file to make a specific idea and how to use it in real life with a given template."
  },
  {
    id: "y6n-Un06_9Q",
    title: "Laravel API Development",
    thumbnail: "/placeholder.svg",
    duration: "24:15",
    views: "1.2K",
    description: "Master Laravel API development with best practices and real-world examples."
  },
  {
    id: "mJ92tK181zI",
    title: "PHP Tips & Tricks",
    thumbnail: "/placeholder.svg",
    duration: "12:30",
    views: "956",
    description: "Essential PHP tips and tricks every developer should know."
  },
  {
    id: "_la-3s6j788",
    title: "Vue.js Integration",
    thumbnail: "/placeholder.svg",
    duration: "19:45",
    views: "734",
    description: "Seamlessly integrate Vue.js with your Laravel applications."
  }
];

const FeaturedVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{t('featured.title')}</span> {t('featured.subtitle')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('featured.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative aspect-video bg-secondary overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1 bg-background/80 px-2 py-1 rounded text-xs font-mono">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
                {/* Code pattern background */}
                <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                  <div className="font-mono text-[8px] text-muted-foreground/30 leading-tight overflow-hidden p-4">
                    {`<?php
namespace App\\Http;
class Controller {
  public function index() {
    return view('home');
  }
}`}
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {video.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Eye className="w-3 h-3" />
                  <span>{video.views} {t('hero.subscribers').toLowerCase()}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/videos"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            {t('featured.visit_all')}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden aspect-video">
          <div className="relative w-full h-full">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 z-50 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedVideo && (
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeaturedVideos;

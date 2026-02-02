import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Clock, Eye } from "lucide-react";

const videos = [
  {
    title: "Create Custom Laravel Stub File",
    thumbnail: "/placeholder.svg",
    duration: "17:38",
    views: "801",
    description: "Learn how to create a custom stub file to make a specific idea and how to use it in real life with a given template."
  },
  {
    title: "Laravel API Development",
    thumbnail: "/placeholder.svg",
    duration: "24:15",
    views: "1.2K",
    description: "Master Laravel API development with best practices and real-world examples."
  },
  {
    title: "PHP Tips & Tricks",
    thumbnail: "/placeholder.svg",
    duration: "12:30",
    views: "956",
    description: "Essential PHP tips and tricks every developer should know."
  },
  {
    title: "Vue.js Integration",
    thumbnail: "/placeholder.svg",
    duration: "19:45",
    views: "734",
    description: "Seamlessly integrate Vue.js with your Laravel applications."
  }
];

const FeaturedVideos = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured</span> Tutorials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dive into our most popular programming tutorials and level up your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-video bg-secondary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
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
                  <span>{video.views} views</span>
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
            View all videos
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;

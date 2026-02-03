import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Clock, Eye, ArrowLeft } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import logo from "@/assets/logo.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const allVideos = [
  { id: "qkRTqCwF5gw", title: "Create Custom Laravel Stub File", duration: "17:38", views: "801", description: "Learn how to create a custom stub file to make a specific idea and how to use it in real life." },
  { id: "y6n-Un06_9Q", title: "Laravel API Development", duration: "24:15", views: "1.2K", description: "Master Laravel API development with best practices and real-world examples." },
  { id: "mJ92tK181zI", title: "PHP Tips & Tricks", duration: "12:30", views: "956", description: "Essential PHP tips and tricks every developer should know." },
  { id: "_la-3s6j788", title: "Vue.js Integration", duration: "19:45", views: "734", description: "Seamlessly integrate Vue.js with your Laravel applications." },
  { id: "HqUe5d3g684", title: "MySQL Query Optimization", duration: "21:10", views: "1.1K", description: "Optimize your database queries for better performance." },
  { id: "MYyJ4PuL4pY", title: "Laravel Authentication", duration: "28:30", views: "2.3K", description: "Build secure authentication systems with Laravel." },
  { id: "3BiL3S2_E4M", title: "RESTful API Design", duration: "15:45", views: "890", description: "Design clean and scalable RESTful APIs." },
  { id: "mfYQf5R6w4c", title: "PHP OOP Fundamentals", duration: "32:20", views: "1.5K", description: "Master object-oriented programming in PHP." },
  { id: "N82L1j88788", title: "Laravel Eloquent Relationships", duration: "26:15", views: "1.8K", description: "Deep dive into Eloquent relationships." },
  { id: "7tfj3k81z-0", title: "Blade Templates Mastery", duration: "18:40", views: "670", description: "Create dynamic templates with Laravel Blade." },
  { id: "9qUe5d3g684", title: "CLI Tool Development", duration: "22:55", views: "540", description: "Build powerful command-line tools with PHP." },
  { id: "5yJ4PuL4pY2", title: "Laravel Middleware", duration: "14:20", views: "920", description: "Understanding and creating custom middleware." },
  { id: "2BiL3S2_E4N", title: "Database Migrations", duration: "11:30", views: "780", description: "Manage database changes with migrations." },
  { id: "1fYQf5R6w4b", title: "Laravel Queues & Jobs", duration: "29:45", views: "1.4K", description: "Handle background tasks efficiently." },
  { id: "6tfj3k81z-1", title: "Testing in Laravel", duration: "35:10", views: "650", description: "Write tests for your Laravel applications." },
  { id: "0qUe5d3g685", title: "Laravel Events & Listeners", duration: "16:25", views: "430", description: "Implement event-driven architecture." },
];

const VIDEOS_PER_PAGE = 8;

const Videos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const totalPages = Math.ceil(allVideos.length / VIDEOS_PER_PAGE);

  const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
  const currentVideos = allVideos.slice(startIndex, startIndex + VIDEOS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="container px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">All</span> Videos
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through our complete collection of programming tutorials
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentVideos.map((video, index) => (
            <Card
              key={startIndex + index}
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

        {/* Pagination */}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => handlePageChange(page)}
                  isActive={currentPage === page}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>

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
      <Footer />
    </div>
  );
};

export default Videos;

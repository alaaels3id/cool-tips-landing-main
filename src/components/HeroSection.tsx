import { Button } from "@/components/ui/button";
import { Play, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Playful Floating Blobs */}
      <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/20 rounded-full blur-[80px] animate-bounce-slow" />
      <div className="absolute bottom-[15%] right-[10%] w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-bounce-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[40%] right-[20%] w-48 h-48 bg-accent/20 rounded-full blur-[60px] animate-bounce-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-12 animate-reveal group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 transition-all duration-500 scale-150" />
            <img 
              src={logo} 
              alt="Cool Tips Logo" 
              className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-8 border-foreground relative z-10 object-cover squish-hover shadow-tactile"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold text-2xl z-20 shadow-tactile rotate-12 animate-wiggle">
              Yay! 2024
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="animate-reveal inline-block px-6 py-2 rounded-full border-4 border-foreground bg-white text-foreground text-sm font-bold uppercase tracking-widest shadow-tactile-hover" style={{ animationDelay: '0.1s' }}>
              Awesome Programming Tips!
            </div>
            
            <h1 className="animate-reveal text-7xl md:text-9xl font-bold mb-6 leading-[0.8] tracking-tighter" style={{ animationDelay: '0.2s' }}>
              <span className="block text-primary drop-shadow-lg">COOL</span>
              <span className="block text-foreground drop-shadow-lg">TIPS</span>
            </h1>

            <p className="animate-reveal text-2xl md:text-3xl text-foreground/80 font-bold max-w-2xl mx-auto leading-tight" style={{ animationDelay: '0.3s' }}>
              WE MAKE CODING FUN & BUBBLY WITH OUR EASY TUTORIALS!
            </p>
          </div>

          <div className="animate-reveal flex flex-col sm:flex-row items-center justify-center gap-8" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="h-20 px-12 text-2xl font-bold rounded-full bg-primary text-primary-foreground border-4 border-foreground shadow-tactile hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px_#222] transition-all"
              asChild
            >
              <a href="https://www.youtube.com/@coooltips" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                <Youtube className="w-8 h-8" />
                JOIN US!
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-20 px-12 text-2xl font-bold rounded-full border-4 border-foreground bg-white text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all shadow-tactile"
              asChild
            >
              <a href="https://www.youtube.com/@coooltips/videos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                <Play className="w-8 h-8 fill-current" />
                WATCH!
              </a>
            </Button>
          </div>
          
          <div className="animate-reveal mt-20 flex justify-center gap-12" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-col items-center group cursor-pointer hover:scale-110 transition-transform">
              <span className="text-5xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">216</span>
              <span className="text-xs uppercase font-bold text-muted-foreground">Buddies</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer hover:scale-110 transition-transform">
              <span className="text-5xl font-bold text-foreground mb-1 group-hover:text-secondary transition-colors">64</span>
              <span className="text-xs uppercase font-bold text-muted-foreground">Stories</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Bubbly Elements */}
      <div className="absolute top-20 right-20 w-12 h-12 rounded-full bg-accent animate-bounce-slow opacity-20" />
      <div className="absolute bottom-40 left-40 w-16 h-16 rounded-full bg-primary animate-bounce-slow opacity-30" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};


export default HeroSection;

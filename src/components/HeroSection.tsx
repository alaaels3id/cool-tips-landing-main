import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Ambient Lighting */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-reveal inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8" style={{ animationDelay: '0.1s' }}>
            The Digital Masterclass Archive
          </div>
          
          <h1 className="animate-reveal text-7xl md:text-9xl font-medium mb-10 leading-[0.9] tracking-tight italic" style={{ animationDelay: '0.2s' }}>
            Elevate Your<br />
            <span className="not-italic text-primary font-black">Architecture</span>
          </h1>

          <p className="animate-reveal text-foreground/80 text-xl md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed font-light" style={{ animationDelay: '0.3s' }}>
            A curated collection of technical insights for the modern developer. Master the intricate patterns of Laravel and PHP with grace.
          </p>

          <div className="animate-reveal flex flex-col sm:flex-row items-center justify-center gap-6" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="group h-16 px-10 rounded-full bg-primary text-primary-foreground text-lg font-bold hover:scale-[1.02] transition-all duration-500 shadow-glow"
            >
              Explore Archive
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-16 px-10 rounded-full border-primary/20 hover:bg-primary/5 text-foreground text-lg font-bold transition-all duration-500"
            >
              Watch Trailer
            </Button>
          </div>

          <div className="animate-reveal mt-24 pt-12 border-t border-primary/10 flex flex-wrap justify-center gap-12 text-muted-foreground font-medium uppercase tracking-[0.1em] text-xs" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center">
              <span className="text-foreground text-2xl font-bold mb-1">216</span>
              <span>Subscribers</span>
            </div>
            <div className="h-12 w-px bg-primary/10 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-foreground text-2xl font-bold mb-1">64</span>
              <span>Masterclasses</span>
            </div>
            <div className="h-12 w-px bg-primary/10 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-foreground text-2xl font-bold mb-1">4.8k</span>
              <span>Total Impact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] select-none pointer-events-none -z-10">
        <div className="w-full h-full border-[100px] border-primary rounded-full blur-[100px]" />
      </div>
    </section>
  );
};

export default HeroSection;

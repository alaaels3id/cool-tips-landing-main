import { Button } from "@/components/ui/button";
import { Play, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Editorial Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] text-[40rem] font-black text-primary/5 select-none pointer-events-none leading-none">
          216
        </div>
        <div className="absolute bottom-[10%] left-[-5%] text-[20rem] font-black text-accent/5 select-none pointer-events-none leading-none rotate-12">
          64
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Code background decoration */}
      <div className="absolute right-0 top-0 h-full w-1/4 overflow-hidden opacity-[0.03] pointer-events-none border-l border-border hidden lg:block">
        <div className="font-mono text-[10px] text-foreground animate-code-scroll whitespace-pre leading-none p-4">
          {`// COOL TIPS SOURCE
function masterLaravel() {
  const roadmap = ['Basics', 'Eloquent', 'Architecture'];
  return roadmap.reduce((acc, curr) => acc + ' > ' + curr);
}

class TechBrutalism {
  constructor() {
    this.aesthetic = 'High Contrast';
    this.typography = 'Bricolage Grotesque';
    this.speed = 'Extreme';
  }
}

// Repeating for texture
function masterLaravel() {
  const roadmap = ['Basics', 'Eloquent', 'Architecture'];
  return roadmap.reduce((acc, curr) => acc + ' > ' + curr);
}

class TechBrutalism {
  constructor() {
    this.aesthetic = 'High Contrast';
    this.typography = 'Bricolage Grotesque';
    this.speed = 'Extreme';
  }
}

function masterLaravel() {
  const roadmap = ['Basics', 'Eloquent', 'Architecture'];
  return roadmap.reduce((acc, curr) => acc + ' > ' + curr);
}`}
        </div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-24">
          {/* Logo & Side Stats */}
          <div className="relative group lg:w-1/3 flex flex-col items-center lg:items-start">
            <div className="relative mb-8 animate-reveal" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -inset-4 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-all duration-500 rounded-full" />
              <img 
                src={logo} 
                alt="Cool Tips Logo" 
                className="w-48 h-48 lg:w-64 lg:h-64 rounded-none border-4 border-foreground relative z-10 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 font-black text-xl z-20 shadow-card">
                EST. 2024
              </div>
            </div>
            
            <div className="flex gap-12 animate-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black text-foreground">216</span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">Subscribers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black text-foreground">64</span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">Tutorials</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest mb-6 animate-reveal" style={{ animationDelay: '0.3s' }}>
              Laravel Educational Content
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.9] animate-reveal" style={{ animationDelay: '0.4s' }}>
              <span className="block italic text-primary">COOL</span>
              <span className="block text-foreground">TIPS</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground font-bold mb-8 max-w-xl animate-reveal leading-tight" style={{ animationDelay: '0.5s' }}>
              @coooltips — WE WANT TO HELP MAKE PROGRAMMING POPULAR WITH OUR TUTORIALS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-reveal" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="h-16 px-10 text-xl font-black rounded-none bg-primary text-primary-foreground hover:translate-x-1 hover:translate-y-1 transition-transform border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                asChild
              >
                <a href="https://www.youtube.com/@coooltips" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Youtube className="w-6 h-6" />
                  SUBSCRIBE
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-16 px-10 text-xl font-black rounded-none border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-colors"
                asChild
              >
                <a href="https://www.youtube.com/@coooltips/videos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Play className="w-6 h-6" />
                  WATCH
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-12 left-0 w-full flex items-center gap-4 px-4 overflow-hidden opacity-20">
        <div className="h-px flex-1 bg-foreground" />
        <div className="font-mono text-xs whitespace-nowrap uppercase tracking-[0.5em]">
          Learn more and more / Laravel / PHP / JS / Backend Masterclass
        </div>
        <div className="h-px w-24 bg-foreground" />
      </div>
    </section>
  );
};


export default HeroSection;

import { Button } from "@/components/ui/button";
import { Play, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Code background decoration */}
      <div className="absolute left-0 top-0 h-full w-1/3 overflow-hidden opacity-20 pointer-events-none">
        <div className="font-mono text-xs text-foreground/80 dark:text-foreground/60 animate-code-scroll whitespace-pre leading-relaxed">
          {`function createTutorial() {
  const skills = ['PHP', 'Laravel', 'JavaScript'];
  return skills.map(skill => {
    console.log(\`Learning \${skill}\`);
    return { skill, mastered: true };
  });
}

class CoolTips {
  constructor() {
    this.subscribers = 218;
    this.videos = 64;
    this.passion = 'programming';
  }

  teach() {
    return 'Learn more and more!';
  }
}

const tips = new CoolTips();
tips.teach();

// More content for scrolling
async function fetchKnowledge() {
  const response = await fetch('/api/tips');
  const data = await response.json();
  return data;
}

function createTutorial() {
  const skills = ['PHP', 'Laravel', 'JavaScript'];
  return skills.map(skill => {
    console.log(\`Learning \${skill}\`);
    return { skill, mastered: true };
  });
}

class CoolTips {
  constructor() {
    this.subscribers = 218;
    this.videos = 64;
    this.passion = 'programming';
  }

  teach() {
    return 'Learn more and more!';
  }
}`}
        </div>
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 relative animate-float">
            <img
              src={logo}
              alt="Cool Tips Logo"
              className="w-32 h-32 rounded-full shadow-glow"
            />
          </div>

          {/* Channel name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-gradient">Cool</span>{" "}
            <span className="text-foreground">Tips</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-medium">
            @coooltips
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            LEARN MORE AND MORE
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-10 text-muted-foreground">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground">218</span>
              <span className="text-sm">Subscribers</span>
            </div>
            <div className="w-px bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground">64</span>
              <span className="text-sm">Videos</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            We are friends who love <span className="text-primary font-semibold">#programming</span> and we want to help make it popular with our tutorials and tips. Join us on this coding journey!
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground gap-2 px-8 shadow-glow transition-all duration-300"
              asChild
            >
              <a href="https://www.youtube.com/@coooltips" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5" />
                Subscribe Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 gap-2 px-8"
              asChild
            >
              <a href="https://www.youtube.com/@coooltips/videos" target="_blank" rel="noopener noreferrer">
                <Play className="w-5 h-5" />
                Watch Videos
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import { Play, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { t } = useTranslation();

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
              <Link to="/" className="block relative z-10 transition-transform hover:scale-105 active:scale-95">
                <img 
                  src={logo} 
                  alt="Cool Tips Logo" 
                  className="w-48 h-48 lg:w-64 lg:h-64 rounded-none border-4 border-foreground object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </Link>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 font-black text-xl z-20 shadow-card">
                EST. 2024
              </div>
            </div>
            
            <div className="flex gap-12 animate-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black text-foreground">216</span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">{t('hero.subscribers')}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black text-foreground">64</span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">{t('hero.tutorials')}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 text-center lg:text-left rtl:lg:text-right">
            <div className="inline-block px-3 py-1 bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest mb-6 animate-reveal" style={{ animationDelay: '0.3s' }}>
              {t('hero.badge')}
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.9] animate-reveal" style={{ animationDelay: '0.4s' }}>
              <span className="block italic text-primary">{t('hero.title_cool')}</span>
              <span className="block text-foreground">{t('hero.title_tips')}</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground font-bold mb-8 max-w-xl animate-reveal leading-tight" style={{ animationDelay: '0.5s' }}>
              {t('hero.description')}
            </p>
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

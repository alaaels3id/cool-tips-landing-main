import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-24 border-t border-primary/10 bg-background overflow-hidden relative">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 p-2 border border-primary/20">
                <img src={logo} alt="Cool Tips" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-3xl tracking-tight leading-none italic mb-1">
                  Cool <span className="not-italic text-primary font-black">Tips</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  Refined Digital Archive
                </span>
              </div>
            </div>
            <p className="text-foreground/60 font-light text-lg max-w-sm leading-relaxed">
              Cultivating a standard of excellence in technical education for the discerning developer.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20">
            <div className="flex flex-col gap-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Discover</span>
              <a href="https://www.youtube.com/@coooltips" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">YouTube Archive</a>
              <a href="https://twitter.com/coool_tips" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">Technical Twitter</a>
              <a href="https://www.linkedin.com/in/alaa-elsa" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">LinkedIn Node</a>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Experience</span>
              <span className="text-sm font-medium hover:text-primary cursor-pointer transition-colors">Privacy Charter</span>
              <span className="text-sm font-medium hover:text-primary cursor-pointer transition-colors">Usage Terms</span>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Heritage</span>
              <span className="text-sm font-medium">Evolution 2024</span>
              <span className="text-sm font-medium opacity-40">© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Archive System Status: Optimized
            </span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-30">
            Crafted with Artistry & Precision
          </span>
        </div>
      </div>

      {/* Ambient Lighting Overlay */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/2 translate-y-1/2" />
    </footer>
  );
};


export default Footer;

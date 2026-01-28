import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-20 border-t-4 border-foreground bg-background overflow-hidden relative">
      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-primary" />
      
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Cool Tips" className="w-16 h-16 rounded-none border-2 border-foreground grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="flex flex-col leading-none">
                <span className="font-black text-4xl uppercase tracking-tighter">
                  COOL <span className="text-primary italic">TIPS</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Educational_Archive_Node_01
                </span>
              </div>
            </div>
            <p className="text-foreground font-bold text-lg max-w-sm leading-tight uppercase">
              MADE WITH ZERO COMPROMISES FOR THE MODERN DEVELOPER. JOIN THE JOURNEY.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-auto overflow-hidden">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Platforms</span>
              <a href="https://www.youtube.com/@coooltips" target="_blank" rel="noopener noreferrer" className="font-black text-xl hover:text-primary transition-colors italic">YOUTUBE</a>
              <a href="https://twitter.com/coool_tips" target="_blank" rel="noopener noreferrer" className="font-black text-xl hover:text-primary transition-colors italic">TWITTER</a>
              <a href="https://www.linkedin.com/in/alaa-elsa" target="_blank" rel="noopener noreferrer" className="font-black text-xl hover:text-primary transition-colors italic">LINKEDIN</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Legal</span>
              <span className="font-black text-xl italic">PRIVACY</span>
              <span className="font-black text-xl italic">TERMS</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Meta</span>
              <span className="font-black text-xl italic">REV_2024</span>
              <span className="font-black text-xl italic">© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t-2 border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Connection: Stable / Latency: 24ms / Status: Active
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Built with Laravel / React / Tailwind / Antigravity
          </span>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-24 border-t-8 border-foreground bg-background overflow-hidden relative">
      {/* Decorative Bottom Bubbles */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center gap-4 opacity-20">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
      
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-[1.5rem] bg-white p-2 border-4 border-foreground shadow-tactile squish-hover">
                <img src={logo} alt="Cool Tips" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-4xl tracking-tighter uppercase mb-1">
                  COOL <span className="text-primary italic">TIPS!</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground bg-foreground text-background px-2 py-0.5 rounded-full inline-block">
                  Your Bestest Coding Pal!
                </span>
              </div>
            </div>
            <p className="text-xl font-bold text-foreground/60 max-w-sm leading-tight uppercase">
              WE'RE JUST A BUNCH OF FRIENDS WHO LOVE MAKING CODING COOL & EASY FOR EVERYONE!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Jump In!</span>
              <a href="https://www.youtube.com/@coooltips" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-primary transition-colors italic uppercase tracking-tighter">YouTube!</a>
              <a href="https://twitter.com/coool_tips" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-primary transition-colors italic uppercase tracking-tighter">Twitter!</a>
              <a href="https://www.linkedin.com/in/alaa-elsa" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-primary transition-colors italic uppercase tracking-tighter">LinkedIn!</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Boring Stuff</span>
              <span className="text-xl font-bold hover:text-primary cursor-pointer transition-colors italic uppercase tracking-tighter">Privacy!</span>
              <span className="text-xl font-bold hover:text-primary cursor-pointer transition-colors italic uppercase tracking-tighter">Terms!</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Friendship</span>
              <span className="text-xl font-bold italic uppercase tracking-tighter">Since 2024</span>
              <span className="text-xl font-bold italic uppercase tracking-tighter opacity-40">© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t-4 border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Status: Super Healthy & Happy!
            </span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-30">
            Crafted With Hugs & Sprinkles
          </span>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

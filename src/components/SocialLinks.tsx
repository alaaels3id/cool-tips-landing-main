import { Button } from "@/components/ui/button";
import { Youtube, Twitter, Linkedin, Facebook } from "lucide-react";

const socials = [
  { icon: Youtube, name: "YouTube", url: "https://www.youtube.com/@coooltips", color: "hover:bg-red-600" },
  { icon: Twitter, name: "Twitter", url: "https://twitter.com/coool_tips", color: "hover:bg-sky-500" },
  { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/alaa-elsa", color: "hover:bg-blue-600" },
  { icon: Facebook, name: "Facebook", url: "https://www.facebook.com/coooltips", color: "hover:bg-blue-700" },
];

const SocialLinks = () => {
  return (
    <section className="py-40 bg-background relative overflow-hidden border-t-8 border-foreground">
      {/* Playful Floating Blobs */}
      <div className="absolute top-[20%] left-[10%] w-48 h-48 bg-primary/20 rounded-full blur-[60px] animate-bounce-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-secondary/20 rounded-full blur-[80px] animate-bounce-slow" style={{ animationDelay: '1s' }} />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 animate-reveal">
          <div className="inline-block px-4 py-1 rounded-full bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest mb-6 rotate-[-2deg]">
            Let's Be Friends!
          </div>
          <h2 className="text-5xl md:text-8xl font-bold mb-8 text-foreground tracking-tighter">
            JOIN OUR <span className="text-primary italic">CLUB!</span>
          </h2>
          <p className="text-2xl font-bold text-foreground/60 max-w-xl mx-auto leading-tight">
            FOLLOW THE ADVENTURE! CONNECT WITH OUR FRIENDLY COMMUNITY ACROSS ALL THESE COOL PLACES!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-reveal" style={{ animationDelay: '0.2s' }}>
          {socials.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bubble-card group relative p-10 flex flex-col items-center justify-center gap-6 overflow-hidden
                ${index % 4 === 0 ? 'hover:bg-primary/10' : index % 4 === 1 ? 'hover:bg-secondary/10' : index % 4 === 2 ? 'hover:bg-accent/10' : 'hover:bg-red-500/10'}
              `}
            >
              <div className={`w-20 h-20 rounded-[1.5rem] border-4 border-foreground flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12
                ${index % 4 === 0 ? 'bg-primary text-primary-foreground' : index % 4 === 1 ? 'bg-secondary text-secondary-foreground' : index % 4 === 2 ? 'bg-accent text-accent-foreground' : 'bg-red-500 text-white'}
              `}>
                <social.icon className="w-10 h-10" />
              </div>
              
              <div className="text-center">
                <span className="block text-2xl font-bold tracking-tighter mb-1 uppercase">{social.name}!</span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                  Click to Join!
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};


export default SocialLinks;

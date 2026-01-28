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
    <section className="py-40 bg-background relative overflow-hidden">
      {/* Dynamic Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 animate-reveal">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Pulse of the Archive</span>
          <h2 className="text-5xl md:text-7xl font-medium mb-8">
            Join the <span className="italic text-primary">Inner Circle</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Follow the evolution of Laravel education. Connect with our technical community across premium digital channels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-reveal" style={{ animationDelay: '0.2s' }}>
          {socials.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-hover group relative p-10 rounded-[2.5rem] bg-card border border-primary/10 shadow-card flex flex-col items-center justify-center gap-6 overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-primary`} />
              
              <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-12">
                <social.icon className="w-8 h-8" />
              </div>
              
              <div className="text-center">
                <span className="block text-xl font-medium tracking-tight mb-1">{social.name}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
                  Join Channel
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

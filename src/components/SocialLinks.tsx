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
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-xl animate-reveal">
            <h2 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter leading-none">
              JOIN THE<br />
              <span className="text-primary italic">COMMUNITY</span>
            </h2>
            <p className="text-foreground font-bold text-xl uppercase tracking-tight">
              FOLLOW US ON SOCIAL MEDIA FOR MORE TIPS, UPDATES, AND COMMUNITY DISCUSSIONS. STAY CONNECTED WITH THE ARCHIVE.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto animate-reveal" style={{ animationDelay: '0.2s' }}>
            {socials.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                className="group h-24 px-8 rounded-none border-4 border-foreground bg-background hover:bg-primary hover:text-primary-foreground hover:translate-x-1 hover:translate-y-1 transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none"
                asChild
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6">
                  <social.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-2xl font-black uppercase tracking-tighter italic">
                    {social.name}
                  </span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Industrial Decorative Element */}
      <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[10px] hidden lg:block">
        GLOBAL_CONNECT_PROTOCOL_v04
      </div>
    </section>
  );
};


export default SocialLinks;

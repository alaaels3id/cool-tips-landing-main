import { Button } from "@/components/ui/button";
import { Youtube, Twitter, Linkedin, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

const socials = [
  { icon: Youtube, nameKey: "social.youtube", url: "https://www.youtube.com/@coooltips", color: "hover:bg-red-600" },
  { icon: Twitter, nameKey: "social.twitter", url: "https://twitter.com/coool_tips", color: "hover:bg-sky-500" },
  { icon: Linkedin, nameKey: "social.linkedin", url: "https://www.linkedin.com/in/alaa-elsa", color: "hover:bg-blue-600" },
  { icon: Facebook, nameKey: "social.facebook", url: "https://www.facebook.com/coooltips", color: "hover:bg-blue-700" },
];

const SocialLinks = () => {
  const { t } = useTranslation();

  return (
    <section className="py-40 bg-background relative overflow-hidden border-t-8 border-foreground">
      {/* Playful Floating Blobs */}
      {/* Industrial Floating Lines */}
      <div className="absolute top-[20%] left-[10%] w-48 h-48 border-l-4 border-t-4 border-primary/20" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 border-r-4 border-b-4 border-secondary/20" style={{ animationDelay: '1s' }} />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 animate-reveal">
          <div className="inline-block px-4 py-1 rounded-none bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest mb-6 rotate-[-2deg]">
            {t('social.badge')}
          </div>
          <h2 className="text-5xl md:text-8xl font-bold mb-8 text-foreground tracking-tighter">
            {t('social.title')} <span className="text-primary italic">{t('social.subtitle')}</span>
          </h2>
          <p className="text-2xl font-bold text-foreground/60 max-w-xl mx-auto leading-tight">
            {t('social.description')}
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
              <div className={`w-20 h-20 rounded-none border-4 border-foreground flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12
                ${index % 4 === 0 ? 'bg-primary text-primary-foreground' : index % 4 === 1 ? 'bg-secondary text-secondary-foreground' : index % 4 === 2 ? 'bg-accent text-accent-foreground' : 'bg-red-500 text-white'}
              `}>
                <social.icon className="w-10 h-10" />
              </div>

              <div className="text-center">
                <span className="block text-2xl font-bold tracking-tighter mb-1 uppercase">{t(social.nameKey)}!</span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                  {t('social.join')}
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

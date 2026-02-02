import { Code, Database, Globe, Terminal, Layers, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";

const topics = [
  { icon: Code, name: "PHP", color: "text-blue-400" },
  { icon: Layers, name: "Laravel", color: "text-red-400" },
  { icon: Globe, name: "Web Development", color: "text-green-400" },
  { icon: Database, name: "MySQL", color: "text-orange-400" },
  { icon: Terminal, name: "CLI Tools", color: "text-yellow-400" },
  { icon: Cpu, name: "APIs", color: "text-purple-400" },
];

const TopicsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-40 relative bg-background overflow-hidden border-t-8 border-foreground">
      {/* Decorative Floating Blobs */}
      {/* Decorative Structural Lines */}
      <div className="absolute top-0 right-[-5%] w-64 h-64 border-l-4 border-b-4 border-accent/20" />

      <div className="container px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 animate-reveal">
          <div className="inline-block px-4 py-1 rounded-none bg-secondary text-secondary-foreground font-bold text-xs uppercase tracking-widest mb-6 rotate-[2deg]">
            {t('topics.badge')}
          </div>
          <h2 className="text-5xl md:text-8xl font-bold mb-8 text-foreground tracking-tighter">
            {t('topics.title')} <span className="text-accent italic">{t('topics.subtitle')}</span>
          </h2>
          <p className="text-2xl font-bold text-foreground/60 max-w-2xl mx-auto leading-tight">
            {t('topics.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-reveal" style={{ animationDelay: '0.2s' }}>
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`bubble-card group flex flex-col gap-6 p-10 cursor-pointer overflow-hidden
                ${index % 3 === 0 ? 'hover:bg-primary/10' : index % 3 === 1 ? 'hover:bg-secondary/10' : 'hover:bg-accent/10'}
              `}
            >
              <div className={`w-20 h-20 rounded-none border-4 border-foreground flex items-center justify-center p-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                ${index % 3 === 0 ? 'bg-primary text-primary-foreground' : index % 3 === 1 ? 'bg-secondary text-secondary-foreground' : 'bg-accent text-accent-foreground'}
              `}>
                <topic.icon className="w-10 h-10" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-foreground text-background px-2 py-0.5 rounded-none">
                    {t('topics.module')} {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-3xl font-bold tracking-tighter group-hover:text-primary transition-colors">
                  {topic.name}!
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;

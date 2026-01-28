import { Code, Database, Globe, Terminal, Layers, Cpu } from "lucide-react";

const topics = [
  { icon: Code, name: "PHP", color: "text-blue-400" },
  { icon: Layers, name: "Laravel", color: "text-red-400" },
  { icon: Globe, name: "Web Development", color: "text-green-400" },
  { icon: Database, name: "MySQL", color: "text-orange-400" },
  { icon: Terminal, name: "CLI Tools", color: "text-yellow-400" },
  { icon: Cpu, name: "APIs", color: "text-purple-400" },
];

const TopicsSection = () => {
  return (
    <section className="py-40 relative bg-background overflow-hidden border-t border-primary/5">
      {/* Soft Ambient Light */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 animate-reveal">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Domain Expertise</span>
          <h2 className="text-5xl md:text-7xl font-medium mb-8">
            Technical <span className="italic text-primary font-serif">Spectrum</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto font-light leading-relaxed">
            A comprehensive curriculum spanning the entire breadth of modern web architecture and high-performance backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-reveal" style={{ animationDelay: '0.2s' }}>
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="premium-hover group relative flex items-center gap-6 p-10 bg-card rounded-[2.5rem] border border-primary/10 shadow-card overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-primary" />
              
              <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center p-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-6 shadow-sm">
                <topic.icon className="w-8 h-8" />
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60 mb-2">
                  Module {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-2xl font-medium tracking-tight group-hover:text-primary transition-colors">
                  {topic.name}
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

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
    <section className="py-32 relative bg-background overflow-hidden border-t-4 border-foreground">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:32px_32px]" />
      
      <div className="container px-4">
        <div className="mb-20 animate-reveal">
          <h2 className="text-6xl md:text-8xl font-black mb-6 leading-none uppercase tracking-tighter italic">
            TECHNICAL<br />
            <span className="not-italic text-accent">SPECTRUM</span>
          </h2>
          <div className="w-24 h-4 bg-primary mb-8" />
          <p className="text-foreground font-bold text-xl max-w-xl uppercase tracking-tight">
            Comprehensive coverage of the modern web stack. From the foundations of PHP to the architectural patterns of Laravel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-foreground">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="group flex items-center gap-6 p-8 bg-card border-foreground border-b-2 sm:[&:nth-child(odd)]:border-r-2 lg:[&:nth-child(n)]:border-r-2 lg:[&:nth-child(3n)]:border-r-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <div className="p-4 bg-foreground text-background group-hover:bg-background group-hover:text-foreground transition-colors duration-500 rounded-none border-2 border-foreground">
                <topic.icon className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-1">
                  Topic_{String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-black text-2xl uppercase tracking-tighter leading-none">
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

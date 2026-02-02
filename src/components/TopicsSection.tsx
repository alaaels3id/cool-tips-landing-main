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
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Topics We <span className="text-gradient">Cover</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From backend fundamentals to advanced frameworks, we've got you covered
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className={`mb-4 ${topic.color}`}>
                <topic.icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="font-medium text-foreground text-sm text-center">
                {topic.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;

import { Code, Database, Globe, Terminal, Layers, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";

const topics = [
  { icon: Code, name: "PHP", color: "text-blue-400" },
  { icon: Layers, name: "Laravel", color: "text-red-400" },
  { icon: Globe, name: "Web Development", color: "text-green-400" },
  { icon: Cpu, name: "APIs", color: "text-purple-400" },
];

const TopicsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('topics.title')} <span className="text-gradient">{t('topics.subtitle')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('topics.description')}
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[var(--lg-cols)] gap-4"
          style={{
            '--lg-cols': `repeat(${topics.length}, minmax(0, 1fr))`,
            '--md-cols': `repeat(${Math.min(topics.length, 3)}, minmax(0, 1fr))`,
          } as React.CSSProperties}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
            @media (min-width: 1024px) {
              .dynamic-grid { grid-template-columns: var(--lg-cols) !important; }
            }
            @media (min-width: 768px) and (max-width: 1023px) {
              .dynamic-grid { grid-template-columns: var(--md-cols) !important; }
            }
          `}} />
          <div className="dynamic-grid grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-none md:grid-cols-none w-full col-span-full">
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
      </div>
    </section>
  );
};

export default TopicsSection;

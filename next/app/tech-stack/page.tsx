import { Code2, Layers, Database, Cloud, Wrench, Palette } from "lucide-react";
import techData from "@/data/tech-stack.json";

export const metadata = {
  title: "Tech Stack | Giulian",
  description: "Technologies and tools I use to build modern web applications.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Layers,
  Database,
  Cloud,
  Wrench,
};

export default function TechStackPage() {
  return (
    <div className="py-16 sm:py-24 px-8 sm:px-16 lg:px-24">
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Tech Stack</h1>
        <p className="text-lg text-muted-foreground">
          Technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="space-y-8 mb-16">
        {techData.categories.map((category, index) => {
          const Icon = iconMap[category.icon] || Code2;
          return (
            <div key={index} className="p-6 rounded-2xl bg-background border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold">{category.title}</h2>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span>{tech.name}</span>
                      <span className="text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-accent overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Currently Learning</h2>
        <div className="flex flex-wrap gap-2">
          {techData.currentlyLearning.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-full bg-primary/10 border border-border text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

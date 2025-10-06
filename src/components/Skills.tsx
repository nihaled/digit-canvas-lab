import { Card } from "@/components/ui/card";

const skills = [
  { name: "Innovative", icon: "💡" },
  { name: "Decision Maker", icon: "🎯" },
  { name: "Problem Solver", icon: "🧩" },
  { name: "Creative Design", icon: "🎨" },
  { name: "Mathematics & Statistics", icon: "📊" },
  { name: "Service-Focused", icon: "🤝" },
  { name: "Project Management", icon: "📋" },
];

const Skills = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Skill Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)] border-border"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{skill.icon}</span>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

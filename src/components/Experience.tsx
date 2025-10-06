import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Python – Fullstack Developer Trainee",
    company: "QUEST Calicut",
    period: "Dec 2021 – Mar 2022",
    highlights: [
      "Expert in front-end development",
      "Developed project concepts and maintained workflow",
      "Proficient in HTML, CSS, JavaScript, Bootstrap",
      "Worked on Python software development projects",
    ],
    skills: ["Python", "HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Freelance Graphic Designer",
    company: "Self-Employed",
    period: "Mar 2020 – Nov 2021",
    highlights: [
      "Advanced skills in Photoshop and Inkscape",
      "Translated client requirements into visual concepts",
      "Proficient in logo/poster design",
      "Basics of Blender 3D",
    ],
    skills: ["Photoshop", "Inkscape", "Logo Design", "Blender 3D"],
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="w-fit border-accent text-accent">
                    {exp.period}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

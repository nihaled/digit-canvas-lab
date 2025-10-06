import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Calicut University Institute of Engineering and Technology",
    period: "2015 – 2019",
  },
  {
    degree: "Plus Two",
    institution: "NHSS Nanminda",
    period: "",
  },
];

const certifications = [
  {
    name: "Practical Machine Learning with TensorFlow",
    issuer: "NPTEL",
  },
  {
    name: "NDG Linux Essentials 0220 wr",
    issuer: "CISCO",
  },
];

const Education = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  {edu.period && <p className="text-sm text-muted-foreground">{edu.period}</p>}
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">Certifications</h2>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-accent mb-2">{cert.name}</h3>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

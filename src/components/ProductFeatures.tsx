import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Shield, Zap, Wind } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Fully Adjustable",
    description: "Customize every aspect - height, armrests, lumbar support, and recline tension for your perfect fit."
  },
  {
    icon: Wind,
    title: "Breathable Mesh",
    description: "Premium mesh material ensures optimal airflow, keeping you cool during long work sessions."
  },
  {
    icon: Shield,
    title: "Durable Build",
    description: "Heavy-duty construction with reinforced base supports up to 300 lbs with a 5-year warranty."
  },
  {
    icon: Zap,
    title: "Ergonomic Design",
    description: "Scientifically designed to support natural posture and reduce back strain throughout your day."
  }
];

const ProductFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Engineered for <span className="gradient-text">Comfort</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every detail designed with your comfort and productivity in mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="gradient-border hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;

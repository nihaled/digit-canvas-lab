import { Mail, Phone, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <div className="space-y-4 animate-float">
          <h1 className="text-6xl md:text-8xl font-bold gradient-text">
            NIHAL E
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Full-Stack Developer & Creative Designer
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
          <a
            href="tel:+918281542427"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 82815 42427
          </a>
          <span className="text-muted-foreground">•</span>
          <a
            href="mailto:nihaledavalath@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            nihaledavalath@gmail.com
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="default"
            size="lg"
            className="bg-primary hover:bg-primary/90 animate-glow"
            asChild
          >
            <a href="https://nihaled.github.io/nihaled" target="_blank" rel="noopener noreferrer">
              <Globe className="w-4 h-4 mr-2" />
              Portfolio
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://www.linkedin.com/in/nihal-e" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Logical and organised individual with a strong foundation in Information Technology. 
            An abstract thinker, effective in decision-making situations. Excellent teamwork, 
            interpersonal, and communication skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

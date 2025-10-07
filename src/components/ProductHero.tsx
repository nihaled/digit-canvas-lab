import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import chairHero from "@/assets/chair-hero.jpg";

const ProductHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                ErgoLux
                <span className="block gradient-text">Premium Chair</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Experience ultimate comfort and style. Designed for the modern workspace, engineered for your well-being.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Order Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold gradient-text">5-Year</div>
                <div className="text-sm text-muted-foreground">Warranty</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img 
              src={chairHero} 
              alt="ErgoLux Premium Ergonomic Chair" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

const ProductCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="gradient-border max-w-4xl mx-auto">
          <CardContent className="p-12">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Ready to Upgrade Your <span className="gradient-text">Comfort?</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of satisfied customers who've transformed their workspace
                </p>
              </div>

              <div className="max-w-md mx-auto space-y-4">
                <div className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1"
                  />
                  <Button size="lg" className="whitespace-nowrap">
                    Get Quote
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get a personalized quote within 24 hours
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="flex items-center gap-3 justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">sales@ergolux.com</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">Worldwide Shipping</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductCTA;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import chairDetail from "@/assets/chair-detail.jpg";

const specifications = [
  { label: "Dimensions", value: "27\" W × 27\" D × 42-46\" H" },
  { label: "Seat Height", value: "18-22 inches (Adjustable)" },
  { label: "Weight Capacity", value: "300 lbs" },
  { label: "Material", value: "Premium Mesh & Aluminum" },
  { label: "Recline", value: "90-135° with Lock" },
  { label: "Warranty", value: "5 Years Full Coverage" }
];

const ProductSpecs = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={chairDetail} 
              alt="ErgoLux Chair Detail View" 
              className="rounded-2xl shadow-card w-full h-auto"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent text-accent-foreground">Technical Specifications</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold">
                Built to <span className="gradient-text">Last</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Premium materials and precision engineering come together in every ErgoLux chair.
              </p>
            </div>

            <Card className="gradient-border">
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {specifications.map((spec, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
                  >
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-semibold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="flex gap-4 pt-4">
              <div className="flex-1 text-center p-4 rounded-lg bg-primary/10">
                <div className="text-2xl font-bold text-primary">Free</div>
                <div className="text-sm text-muted-foreground">Shipping</div>
              </div>
              <div className="flex-1 text-center p-4 rounded-lg bg-accent/10">
                <div className="text-2xl font-bold text-accent">30-Day</div>
                <div className="text-sm text-muted-foreground">Returns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;

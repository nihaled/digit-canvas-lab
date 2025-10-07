import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ChairCarousel from "@/components/ChairCarousel";
import PurchaseDialog from "@/components/PurchaseDialog";
import ConfirmationDialog from "@/components/ConfirmationDialog";
import { toast } from "sonner";

const variants = [
  { name: "Classic Chair", price: 599 },
  { name: "Comfort Chair", price: 799 },
];

const Index = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [purchaseDialogOpen, setPurchaseDialogOpen] = useState(false);
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");

  const handlePurchaseConfirm = (data: any) => {
    setCustomerName(data.name);
    setPurchaseDialogOpen(false);
    
    // Simulate sending email
    setTimeout(() => {
      setConfirmationDialogOpen(true);
      toast.success("Order confirmed! Check your email for details.");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
            The <span className="gradient-text">Perfect Chair</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience unparalleled comfort and elegant design that transforms your workspace
          </p>
        </div>

        {/* Carousel */}
        <div className="mb-16">
          <ChairCarousel />
        </div>

        {/* Product Details */}
        <Card className="max-w-3xl mx-auto gradient-border">
          <CardContent className="p-8 lg:p-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">{variants[selectedVariant].name}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Crafted with premium materials and ergonomic excellence, this chair combines 
                  timeless design with modern comfort. Perfect for long work sessions and 
                  stylish enough to elevate any space.
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold gradient-text">
                  ${variants[selectedVariant].price}
                </span>
                <span className="text-muted-foreground">/ chair</span>
              </div>

              {/* Variant Selector */}
              <div className="space-y-3">
                <label className="text-sm font-medium">Select Variant:</label>
                <div className="grid grid-cols-2 gap-4">
                  {variants.map((variant, index) => (
                    <button
                      key={variant.name}
                      onClick={() => setSelectedVariant(index)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedVariant === index
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="font-semibold">{variant.name}</div>
                      <div className="text-sm text-muted-foreground">${variant.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Purchase Button */}
              <Button
                size="lg"
                className="w-full text-lg h-14"
                onClick={() => setPurchaseDialogOpen(true)}
              >
                Purchase This
              </Button>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="font-semibold">Free Shipping</div>
                  <div className="text-sm text-muted-foreground">Worldwide delivery</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">5-Year Warranty</div>
                  <div className="text-sm text-muted-foreground">Full coverage</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">30-Day Returns</div>
                  <div className="text-sm text-muted-foreground">No questions asked</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Chair Co. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Facebook
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Dialogs */}
      <PurchaseDialog
        open={purchaseDialogOpen}
        onOpenChange={setPurchaseDialogOpen}
        onConfirm={handlePurchaseConfirm}
        selectedVariant={variants[selectedVariant].name}
        price={variants[selectedVariant].price}
      />
      
      <ConfirmationDialog
        open={confirmationDialogOpen}
        onOpenChange={setConfirmationDialogOpen}
        customerName={customerName}
      />
    </div>
  );
};

export default Index;

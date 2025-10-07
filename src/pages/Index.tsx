import ProductHero from "@/components/ProductHero";
import ProductFeatures from "@/components/ProductFeatures";
import ProductSpecs from "@/components/ProductSpecs";
import ProductCTA from "@/components/ProductCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ProductHero />
      <ProductFeatures />
      <ProductSpecs />
      <ProductCTA />
    </div>
  );
};

export default Index;

import Hero from "@/components/layout/Hero";
import CategorySection from "@/components/home/CategorySection";
import ProductGrid from "@/components/product/ProductGrid";

export default function Home() {
  return (
    <main>
      <Hero />
       <CategorySection />
      <ProductGrid/> 
    </main>
  );
}
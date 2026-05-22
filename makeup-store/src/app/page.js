import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
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
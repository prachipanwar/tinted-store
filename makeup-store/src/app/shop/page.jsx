import ProductList from "@/components/shop/ProductList";
import ClientOnly from "@/components/shared/ClientOnly";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
export default function ShopPage() {
  return (
    <main>
        <ClientOnly>
        <Navbar />
        <ProductList />
        <Footer />
        </ClientOnly>
      
    </main>
  );
}
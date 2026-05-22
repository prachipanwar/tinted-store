import Container from "../layout/Container";
import ProductCard from "./ProductCard";
import SectionHeader from "../common/SectionHeader";

import { getProducts } from "@/services/products";

export default async function ProductGrid() {

  const products = await getProducts();

  return (
    <section id="best-sellers" className="py-20">

      <Container>

        <SectionHeader
          subtitle="Featured Products"
          title="Best Selling Products"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.slice(0,6).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}
import ProductList from "@/components/shop/ProductList";
import ClientOnly from "@/components/shared/ClientOnly";
export default async function ShopPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  return (
    <main>
      <ClientOnly>
        <ProductList initialSearch={resolvedSearchParams.search || ""} initialCategory={
    resolvedSearchParams.category || "All"
  }/>
      </ClientOnly>
    </main>
  );
}

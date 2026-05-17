import Image from "next/image";

import Container from "@/components/layout/Container";

import { getSingleProduct } from "@/services/products";

export default async function ProductDetailsPage({
  params,
}) {

  const resolvedParams = await params;

  const product = await getSingleProduct(
    resolvedParams.id
  );

  if (!product) {
    return (
      <div className="p-20 text-center">
        Product not found
      </div>
    );
  }

  return (
    <section className="py-20">

      <Container>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* IMAGE */}
          <div className="relative h-[650px] rounded-[40px] overflow-hidden bg-accent">

            <Image
              src={product.customImage}
              alt={product.name}
              fill
              sizes="50vw"
              className="object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="uppercase tracking-[4px] text-sm text-muted-foreground mb-4">
              {product.brand}
            </p>

            <h1 className="text-5xl font-semibold leading-tight mb-6">
              {product.name}
            </h1>

            <p className="text-3xl font-medium mb-8">
              ${product.price || "25"}
            </p>

            <p className="text-muted-foreground leading-8 mb-10">
              Luxury beauty essentials crafted for elegance,
              confidence, and timeless style.
            </p>

            <button className="bg-primary text-primary-foreground px-10 py-4 rounded-full">
              Add To Cart
            </button>

          </div>

        </div>

      </Container>

    </section>
  );
}
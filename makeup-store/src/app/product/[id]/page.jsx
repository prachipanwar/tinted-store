import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { getSingleProduct } from "@/services/products";
import ProductActions from "@/components/product/ProductActions";

export default async function ProductDetailsPage({ params }) {
  const resolvedParams = await params;

  const product = await getSingleProduct(resolvedParams.id);

  if (!product) {
    return <div className="pt-32 pb-20 text-center">Product not found</div>;
  }

  return (
    <section className="pt-20 md:pt-28 pb-16 md:pb-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* IMAGE */}
          <div className="lg:sticky lg:top-28">
            <div
              className="
                relative
                h-[320px]
                sm:h-[460px]
                lg:h-[700px]
                rounded-[24px]
                md:rounded-[40px]
                overflow-hidden
                bg-gradient-to-b
                from-[#f8f4f1]
                to-[#efe7e2]
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >
              {/* BADGE */}
              <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium">
                Bestseller
              </div>

              <Image
                src={product.customImage}
                alt={product.name}
                fill
                priority
                sizes="
                  (max-width:768px) 100vw,
                  (max-width:1200px) 50vw,
                  50vw
                "
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="w-full max-w-[600px]">
            {/* BREADCRUMB */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground mb-5">
              <Link href="/" className="hover:text-foreground transition">
                Home
              </Link>

              <span>/</span>

              <Link href="/shop" className="hover:text-foreground transition">
                Shop
              </Link>
            </div>

            {/* BRAND */}
            <p className="uppercase tracking-[2px] md:tracking-[4px] text-xs md:text-sm text-muted-foreground mb-3">
              {product.brand}
            </p>

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold leading-[1.1] mb-5">
              {product.name}
            </h1>

            {/* PRICE */}
            <div className="flex items-center gap-3 mb-8">
              <p className="text-3xl md:text-4xl font-semibold">
                ${product.price}
              </p>

              <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-green-100 text-green-700">
                In Stock
              </span>
            </div>

            {/* DESCRIPTION */}
            <div className="bg-[#faf7f5] rounded-[24px] p-5 md:p-6 mb-8">
              <p className="text-sm md:text-lg text-muted-foreground leading-7 md:leading-8">
                {product.description ||
                  "Crafted for effortless beauty and timeless elegance."}
              </p>
            </div>

            {/* ACTIONS */}
            <ProductActions product={product} />

            {/* META */}
            <div className="bg-[#faf7f5] rounded-[24px] p-5 md:p-6 mt-8 space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="font-medium">Category:</span>

                <span className="capitalize text-muted-foreground">
                  {product.category || "Beauty"}
                </span>
              </div>

              <div className="flex gap-3">
                <span className="font-medium">Brand:</span>

                <span className="capitalize text-muted-foreground">
                  {product.brand}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

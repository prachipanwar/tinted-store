import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {

  return (
    <Link
  href={`/product/${product.id}`}
  className="group block"
>

      {/* IMAGE */}
      <div className="relative h-[420px] overflow-hidden rounded-[30px] bg-accent">

        <Image
          src={product.customImage}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="object-cover group-hover:scale-105 transition duration-500"
        />

      </div>

      {/* CONTENT */}
      <div className="mt-5">

        <p className="text-sm capitalize text-muted-foreground mb-2">
          {product.brand || "Beauty Brand"}
        </p>

        <div className="flex items-start justify-between gap-5">

          <h3 className="text-xl font-medium line-clamp-2">
            {product.name}
          </h3>

          <p className="font-semibold whitespace-nowrap">
            ${product.price || "25"}
          </p>

        </div>

      </div>

    </Link>
  );
}
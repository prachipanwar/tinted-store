"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function ShopProductCard({
  product,
}) {

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="group rounded-[28px] border border-border bg-card overflow-hidden">

      {/* IMAGE */}
      <Link
        href={`/product/${product.id}`}
        className="block"
      >

        <div className="relative h-[280px] overflow-hidden bg-accent">

          <Image
            src={product.customImage}
            alt={product.name}
            fill
            sizes="(max-width:768px) 100vw,
                   (max-width:1200px) 50vw,
                   25vw"
            className="object-cover group-hover:scale-105 transition duration-500"
          />

        </div>

      </Link>

      {/* CONTENT */}
      <div className="p-5">

        <p className="text-xs uppercase tracking-[3px] text-muted-foreground mb-2">
          {product.brand}
        </p>

        <h3 className="font-medium line-clamp-2 mb-4 min-h-[48px]">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mb-5">

          <p className="text-lg font-semibold">
            ${product.price || "25"}
          </p>

          <p className="text-sm text-muted-foreground capitalize">
            {product.category}
          </p>

        </div>

        {/* QUANTITY */}
        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center border border-border rounded-full overflow-hidden">

            <button
              onClick={() =>
                setQuantity((prev) =>
                  prev > 1 ? prev - 1 : 1
                )
              }
              className="w-10 h-10"
            >
              -
            </button>

            <span className="w-10 text-center text-sm">
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity((prev) => prev + 1)
              }
              className="w-10 h-10"
            >
              +
            </button>

          </div>

          <button className="bg-primary text-primary-foreground px-5 h-10 rounded-full text-sm">
            Add
          </button>

        </div>

      </div>

    </div>
  );
}
"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";

export default function ShopProductCard({ product }) {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  return (
    <div className="group rounded-[28px] border border-border bg-card overflow-hidden cursor-pointer">
      {/* IMAGE */}
      <Link href={`/product/${product.id}`} className="block">
     
        <div className="relative h-[260px] sm:h-[220px] md:h-[260px] overflow-hidden bg-accent">
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
       

        {/* CONTENT */}
        <div className="p-4">
          <p className="text-xs uppercase tracking-[3px] text-muted-foreground mb-2">
            {product.brand}
          </p>

          <h3 className="font-medium line-clamp-2 mb-4 min-h-[40px]">
            {product.name}
          </h3>

          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">${product.price || "25"}</p>

            <p className="text-sm text-muted-foreground capitalize">
              {product.category}
            </p>
          </div>
        </div>
      </Link>

      {/* ACTIONS */}
      <div className="w-full px-4 pb-5">
        <div className="w-full flex items-center justify-center">
          {cartItem ? (
            <div className="flex flex-col items-center gap-3 w-full">
              {/* QUANTITY */}
              <div className="flex items-center border border-border rounded-full overflow-hidden cursor-pointer">
                <button
                  onClick={() => dispatch(decreaseQuantity(product.id))}
                  className="w-10 h-10 cursor-pointer"
                >
                  -
                </button>

                <span className="w-10 text-center text-sm">
                  {cartItem.quantity}
                </span>

                <button
                  onClick={() => dispatch(increaseQuantity(product.id))}
                  className="w-10 h-10 cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* VIEW CART */}
              <Link
                href="/cart"
                className="text-sm underline underline-offset-4 hover:text-primary transition"
              >
                View Cart
              </Link>
            </div>
          ) : (
            <button
              onClick={() => dispatch(addToCart(product))}
              className="w-full bg-primary text-primary-foreground px-5 h-10 rounded-full text-sm cursor-pointer"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

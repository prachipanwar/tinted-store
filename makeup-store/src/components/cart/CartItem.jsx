"use client";
import Image from "next/image";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row gap-5 border border-border rounded-[24px] md:rounded-[30px] p-4 md:p-5 bg-card">
      {/* IMAGE */}
      <div className="relative w-full sm:w-[140px] h-[260px] sm:h-[160px] rounded-[20px] overflow-hidden bg-accent shrink-0">
        <Image
          src={item.imageURL}
          alt={item.name}
          fill
          sizes="(max-width:640px) 100vw, 140px"
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* BRAND */}
          <p className="text-xs md:text-sm text-muted-foreground mb-2">
            {item.brand}
          </p>

          {/* TITLE */}
          <h3 className="text-xl md:text-2xl font-medium mb-3 leading-tight">
            {item.name}
          </h3>

          {/* PRICE */}
          <p className="text-lg md:text-xl font-semibold">${item.price}</p>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
          {/* QUANTITY */}
          <div className="flex items-center border border-border rounded-full overflow-hidden bg-[#faf7f5] w-fit">
            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="w-10 h-10 flex items-center justify-center hover:bg-background transition"
            >
              -
            </button>

            <span className="w-10 text-center text-sm font-medium">
              {item.quantity}
            </span>

            <button
              onClick={() => dispatch(increaseQuantity(item.id))}
              className="w-10 h-10 flex items-center justify-center hover:bg-background transition"
            >
              +
            </button>
          </div>

          {/* REMOVE */}
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-sm underline underline-offset-4 hover:text-primary transition text-left sm:text-right"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

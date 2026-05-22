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
    <div className="flex gap-5 border border-border rounded-[30px] p-5 bg-card">

      {/* IMAGE */}
      <div className="relative w-[140px] h-[160px] rounded-[20px] overflow-hidden bg-accent shrink-0">

        <Image
          src={item.imageURL}
          alt={item.name}
          fill
          sizes="140px"
          className="object-cover"
        />

      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col justify-between">

        <div>

          <p className="text-sm text-muted-foreground mb-2">
            {item.brand}
          </p>

          <h3 className="text-2xl font-medium mb-4">
            {item.name}
          </h3>

          <p className="text-xl font-semibold">
            ${item.price}
          </p>

        </div>

        {/* ACTIONS */}
        <div className="flex items-center justify-between gap-5">

          {/* QUANTITY */}
          <div className="flex items-center border border-border rounded-full overflow-hidden">

            <button
              onClick={() =>
                dispatch(
                  decreaseQuantity(item.id)
                )
              }
              className="w-10 h-10"
            >
              -
            </button>

            <span className="w-10 text-center">
              {item.quantity}
            </span>

            <button
              onClick={() =>
                dispatch(
                  increaseQuantity(item.id)
                )
              }
              className="w-10 h-10"
            >
              +
            </button>

          </div>

          {/* REMOVE */}
          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
            className="text-sm underline underline-offset-4"
          >
            Remove
          </button>

        </div>

      </div>

    </div>
  );
}
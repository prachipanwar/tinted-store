"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/features/cartSlice";

export default function ProductActions({
  product,
}) {

  const dispatch = useDispatch();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cartItem = useSelector((state) =>
    state.cart.items.find(
      (item) => item.id === product?.id
    )
  );

  return (

    <div className="space-y-5">

      {/* WAIT FOR CLIENT HYDRATION */}
      {!mounted ? (

        <button
          className="w-full sm:w-auto min-w-[200px] bg-primary text-primary-foreground px-10 h-14 rounded-full font-medium opacity-90"
        >
          Add To Cart
        </button>

      ) : cartItem ? (

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

          {/* QUANTITY */}
          <div className="flex items-center justify-between sm:justify-start border border-border rounded-full overflow-hidden bg-[#faf7f5] h-14 px-2">

            <button
              onClick={() =>
                dispatch(
                  decreaseQuantity(product.id)
                )
              }
              className="w-10 h-10 rounded-full hover:bg-background transition flex items-center justify-center text-lg cursor-pointer"
            >
              -
            </button>

            <span className="w-12 text-center font-medium text-sm">
              {cartItem.quantity}
            </span>

            <button
              onClick={() =>
                dispatch(
                  increaseQuantity(product.id)
                )
              }
              className="w-10 h-10 rounded-full hover:bg-background transition flex items-center justify-center text-lg cursor-pointer"
            >
              +
            </button>

          </div>

          {/* STATUS */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">

            <span className="w-2 h-2 rounded-full bg-green-500" />

            <p>
              Added to cart
            </p>

          </div>

        </div>

      ) : (

        <button
          onClick={() =>
            dispatch(addToCart(product))
          }
          className="w-full sm:w-auto min-w-[200px] bg-primary text-primary-foreground px-10 h-14 rounded-full font-medium hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer shadow-sm"
        >
          Add To Cart
        </button>

      )}

      {/* SHIPPING */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">

        <span className="w-2 h-2 rounded-full bg-primary/70" />

        <p>
          Free shipping on all orders worldwide.
        </p>

      </div>

    </div>

  );
}
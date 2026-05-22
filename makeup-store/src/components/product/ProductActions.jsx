"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
export default function ProductActions({product}) {
    const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {

    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
  
  };

  return (
    <div>

      {/* QUANTITY */}
      <div className="flex items-center gap-5 mb-8">

        <p className="font-medium">
          Quantity
        </p>

        <div className="flex items-center border border-border rounded-full overflow-hidden">

          <button
            onClick={() =>
              setQuantity((prev) =>
                prev > 1 ? prev - 1 : 1
              )
            }
            className="w-12 h-12"
          >
            -
          </button>

          <span className="w-12 text-center">
            {quantity}
          </span>

          <button
            onClick={() =>
              setQuantity((prev) => prev + 1)
            }
            className="w-12 h-12"
          >
            +
          </button>

        </div>

      </div>

      {/* BUTTONS */}
      <div className="flex gap-4">

        <button className="bg-primary text-primary-foreground px-10 h-14 rounded-full font-medium"
          onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>

    </div>
  );
}
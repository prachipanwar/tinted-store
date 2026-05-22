"use client";

import { useSelector } from "react-redux";

import Container from "@/components/layout/Container";

import CartItem from "@/components/cart/CartItem";
import EmptyCart from "@/components/cart/EmptyCart";
import CartSummary from "@/components/cart/CartSummary";

export default function CartPage() {

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  return (
    <section className="pt-28 pb-20">

      <Container>

        {/* HEADER */}
        <div className="mb-14">

          <p className="uppercase tracking-[4px] text-sm text-muted-foreground mb-3">
            Shopping Cart
          </p>

          <h1 className="text-5xl font-semibold">
            Your Cart
          </h1>

        </div>

        {cartItems.length === 0 ? (

          <EmptyCart />

        ) : (

          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">

            {/* ITEMS */}
            <div className="space-y-6">

              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}

            </div>

            {/* SUMMARY */}
            <CartSummary items={cartItems} />

          </div>

        )}

      </Container>

    </section>
  );
}
import { toast } from "sonner";
export default function CartSummary({ items }) {
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="xl:sticky xl:top-28 border border-border rounded-[24px] md:rounded-[30px] p-5 md:p-8 bg-card h-fit">
      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
        Order Summary
      </h2>

      {/* SUBTOTAL */}
      <div className="flex items-center justify-between py-4 border-b border-border">
        <p className="text-sm md:text-base text-muted-foreground">Subtotal</p>

        <p className="font-medium">${subtotal.toFixed(2)}</p>
      </div>

      {/* SHIPPING */}
      <div className="flex items-center justify-between py-4 border-b border-border">
        <p className="text-sm md:text-base text-muted-foreground">Shipping</p>

        <p className="font-medium">Free</p>
      </div>

      {/* TOTAL */}
      <div className="flex items-center justify-between pt-6 mb-8 md:mb-10">
        <p className="text-lg md:text-xl font-semibold">Total</p>

        <p className="text-lg md:text-xl font-semibold">
          ${subtotal.toFixed(2)}
        </p>
      </div>

      {/* CTA */}
      <button
        onClick={() => toast.success("Thank you for shopping ✨")}
        className="w-full bg-primary text-primary-foreground h-14 rounded-full font-medium hover:scale-[1.01] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
      >
        Proceed To Checkout
      </button>

      {/* NOTE */}
      <p className="text-xs md:text-sm text-muted-foreground text-center mt-4 leading-6">
        Secure checkout experience with free worldwide shipping.
      </p>
    </div>
  );
}

import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="py-32 text-center">

      <h2 className="text-4xl font-semibold mb-5">
        Your cart is empty
      </h2>

      <p className="text-muted-foreground mb-10">
        Looks like you haven't added anything yet.
      </p>

      <Link
        href="/shop"
        className="inline-flex bg-primary text-primary-foreground px-8 h-12 rounded-full items-center"
      >
        Continue Shopping
      </Link>

    </div>
  );
}
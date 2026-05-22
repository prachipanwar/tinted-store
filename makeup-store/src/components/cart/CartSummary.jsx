export default function CartSummary({
    items,
  }) {
  
    const subtotal = items.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  
    return (
      <div className="sticky top-28 border border-border rounded-[30px] p-8 bg-card h-fit">
  
        <h2 className="text-3xl font-semibold mb-8">
          Order Summary
        </h2>
  
        <div className="flex items-center justify-between mb-5">
  
          <p className="text-muted-foreground">
            Subtotal
          </p>
  
          <p className="font-medium">
            ${subtotal.toFixed(2)}
          </p>
  
        </div>
  
        <div className="flex items-center justify-between mb-10">
  
          <p className="text-muted-foreground">
            Shipping
          </p>
  
          <p className="font-medium">
            Free
          </p>
  
        </div>
  
        <div className="border-t border-border pt-5 flex items-center justify-between mb-10">
  
          <p className="text-xl font-semibold">
            Total
          </p>
  
          <p className="text-xl font-semibold">
            ${subtotal.toFixed(2)}
          </p>
  
        </div>
  
        <button className="w-full bg-primary text-primary-foreground h-14 rounded-full font-medium">
          Proceed To Checkout
        </button>
  
      </div>
    );
  }
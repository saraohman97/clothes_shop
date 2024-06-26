"use client";

import useCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const Cart = () => {
  const cart = useCart();

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      {cart.items.length === 0 && <p>No items added to cart.</p>}
      {cart.items.map((item) => (
        <CartItem key={item.id} data={item} />
      ))}

      <Summary />
    </>
  );
};

export default Cart;

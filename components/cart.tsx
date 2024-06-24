"use client";

import useCart from "@/hooks/use-cart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiShoppingBag } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const Cart = () => {
  const cart = useCart();
  const router = useRouter();

  return (
    <div className="h-10 w-10 bg-[#C2B280] hover:bg-opacity-80 rounded-full flex items-center justify-center group relative">
        <BiShoppingBag size={18} onClick={() => router.push("/cart")} /> {cart.items.length}
      <div className="invisible group-hover:visible absolute z-50 top-12 right-0 transition-all duration-500 bg-white shadow w-96">
        {/* item */}
        <div className="flex justify-between p-4">
          <div className="flex items-center gap-6">
            <Image
              src={`/clothes/shirt.jpg`}
              alt=""
              width={1000}
              height={1000}
              className="w-24 max-h-32 object-cover cursor-pointer"
            />
            <div>
              <p className="text-xl">T-shirt, white</p>
              <p className="text-sm font-bold">199 kr</p>
              <p className="text-sm">Amount: 1</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs cursor-pointer h-fit">
            Remove <CgClose />
          </div>
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between">
            <p>Leverans</p>
            <p>0 kr</p>
          </div>
          <div className="flex justify-between font-bold">
            <p>Totalsumma</p>
            <p>199 kr</p>
          </div>
          <button className="w-full bg-[#336069] hover:bg-opacity-80 cursor-pointer text-white font-bold uppercase p-2 mt-4">
            Betala
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

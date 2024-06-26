import { toast } from "react-hot-toast";

import { Product } from "@/types";
import Image from "next/image";
import useCart from "@/hooks/use-cart";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <div className="flex justify-between w-96 mb-10">
      <div className="flex text-sm gap-4">
        <Image
          src={data.images[0].url}
          width={500}
          height={500}
          alt=""
          className="w-32 aspect-square object-cover rounded-xl"
        />
        <div>
          <p>{data.name}</p>
          <p>{data.color.name}</p>
          <p>{data.size.name}</p>
          <p>{data.price}</p>
        </div>
      </div>
      <button onClick={onRemove} className="text-sm underline">
        Remove
      </button>
    </div>
  );
};

export default CartItem;

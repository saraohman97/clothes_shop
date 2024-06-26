"use client";

import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modal";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { BiHeart } from "react-icons/bi";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal()
  const cart = useCart()
  const router = useRouter()

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation()

      cart.addItem(data)
    }


  return (
    <div
      key={data.id}
      className="relative group w-72"
    >
      <Image
        src={data?.images?.[0].url}
        alt=""
        width={1000}
        height={1000}
        className="w-full md:h-[400px] object-cover cursor-pointer"
        onClick={() => router.push(`/products/${data?.id}`)}
      />
      <p className="text-sm mt-2 ml-2">{data?.name}</p>
      <p className=" text-sm font-bold ml-2">{data?.price} kr</p>

      <div className="h-10 w-10 bg-[#C2B280]/70 rounded-full md:flex items-center justify-center hidden md:absolute right-2 top-96 hover:bg-[#C2B280] cursor-pointer">
        <BiHeart size={25} />
      </div>
      <button onClick={onAddToCart} className="absolute top-2 right-2 text-[#C2B280] uppercase invisible group-hover:visible cursor-pointer hover:underline transition-all duration-300">
        {/* Visit! */}
        Shop
      </button>
    </div>
  );
};

export default ProductCard;

"use client";

import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <Link
      href={`/products/${data?.id}`}
      key={data.id}
      className="relative group w-72"
    >
      <Image
        src={data?.images?.[0].url}
        alt=""
        width={1000}
        height={1000}
        className="w-full md:h-[400px] object-cover cursor-pointer"
      />
      <p className="text-sm mt-2 ml-2">{data?.name}</p>
      <p className=" text-sm font-bold ml-2">{data?.price} kr</p>

      <div className="h-10 w-10 bg-[#C2B280]/70 rounded-full md:flex items-center justify-center hidden md:absolute right-2 top-96 hover:bg-[#C2B280] cursor-pointer">
        <BiHeart size={25} />
      </div>
      <p className="absolute top-2 right-2 text-[#C2B280] uppercase invisible group-hover:visible cursor-pointer hover:underline transition-all duration-300">
        Visit!
      </p>
    </Link>
  );
};

export default ProductCard;

import { Product } from "@/types";
import React from "react";
import NoResults from "./no-results";
import ProductCard from "./ui/product-card";
import { BiChevronDown } from "react-icons/bi";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="w-fit">
      <div className="flex max-md:flex-col md:items-end gap-4 mb-4">
        <h1 className="text-3xl font-bold uppercase">{title}</h1>
        <div className="flex items-end gap-4">
          <div className="flex items-center gap-1">
            Color
            <div className="h-6 w-6 bg-transparent rounded-full border-4" />
          </div>
          <div className="flex items-center gap-1">
            Sizes <BiChevronDown />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-fit">
        {items.length === 0 && <NoResults />}
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;

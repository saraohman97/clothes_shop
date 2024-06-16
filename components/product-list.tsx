import { Product } from "@/types";
import React from "react";
import NoResults from "./no-results";
import ProductCard from "./ui/product-card";
import { BiChevronDown } from "react-icons/bi";

interface ProductListProps {
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (

      <div className="flex flex-wrap gap-6">
        {items.length === 0 && <NoResults />}
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
  );
};
export default ProductList;

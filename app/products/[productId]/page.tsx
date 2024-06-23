import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import { BiChevronRight } from "react-icons/bi";

import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/Info";

// npm i @headlessui/react

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <>
      <div className="max-w-screen-xl mx-auto mb-10 px-4 overflow-hidden">
        <div className="flex gap-2 md:gap-4 items-center text-sm mb-8 max-md:text-gray-400">
          Home <BiChevronRight /> Shirts <BiChevronRight /> T-shirt, white
        </div>

        {/* Gallery and product info */}
        <div className="flex max-md:flex-col md:gap-10">
          <Gallery images={product.images} />
          <Info data={product} />
        </div>

        {/* Suggested products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Andra produkter</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-fit">
            <ProductList items={suggestedProducts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

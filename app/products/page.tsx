import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

const ProductsPage = async () => {
  const billboard = await getBillboard("6669ec32ef936fd07685c868");
  const products = await getProducts({ isFeatured: true });

  return (
    <>
      <Billboard data={billboard} />

      <div className="max-w-screen-xl mx-auto relative px-4">
        <div className="flex md:hidden gap-2 items-center text-sm mt-3 text-gray-400">
          Home <BiChevronRight /> Shirts
        </div>
        <div className="flex my-10">
          {/* sidebar */}
          <div className="w-96 space-y-1 max-md:hidden">
            <div className="flex gap-4 items-center text-sm mb-8">
              Home <BiChevronRight /> Shirts
            </div>
            <h1 className="text-xl">Nyheter</h1>
            <h1 className="text-xl">Kläder</h1>
            <p className="text-sm">Text</p>
            <p className="text-sm">Text</p>
          </div>

          {/* main */}
          <div className="w-fit">
      <div className="flex max-md:flex-col md:items-end gap-4 mb-4">
        <h1 className="text-3xl font-bold uppercase">Nyheter</h1>
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
          <ProductList items={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

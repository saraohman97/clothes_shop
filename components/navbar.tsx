import Link from "next/link";
import { BiHeart, BiLogIn, BiMenu, BiSearch, BiShoppingBag } from "react-icons/bi";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import Cart from "./cart";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <>
      {/* top navbar */}
      <div className="bg-[#C2B280] w-full p-1 text-center text-sm">
        New members get 15% off their next purchase
      </div>

      {/* navbar  */}
      <div>
        <div className="flex max-md:flex-col justify-between gap-4 p-4 md:p-8">
          <div className="flex items-center gap-6">
            <BiMenu size={30} className="md:hidden" />
            <Link
              href="/"
              className="text-2xl md:text-5xl font-sans font-bold uppercase"
            >
              Clothes
            </Link>
            <MainNav data={categories} />
          </div>

          <div className="flex flex-col items-end gap-6">
            <div className="hidden md:flex items-center gap-4">
              <div className="h-10 w-10 bg-[#C2B280] hover:bg-opacity-80 cursor-pointer rounded-full flex items-center justify-center">
                <BiHeart size={18} />
              </div>

              <Cart />

              <div className="h-10 w-10 bg-[#C2B280] hover:bg-opacity-80 cursor-pointer rounded-full flex items-center justify-center">
                <BiLogIn size={18} />
              </div>
            </div>

            <div className="flex items-bottom w-full group relative">
              <input
                type="text"
                className="border-b-2 border-black w-full rounded-none"
                placeholder="Search..."
              />
              <button className="border-b-2 border-black">
                <BiSearch size={30} />
              </button>

              <div className="invisible group-focus-within:visible absolute z-40 top-12 right-0 transition-all duration-500 bg-white shadow w-96">
                <div className="text-xs p-4 text-center">
                  No result on &quot; &ldquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

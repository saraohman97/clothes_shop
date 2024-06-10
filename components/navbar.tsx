import Image from "next/image";
import Link from "next/link";
import {
  BiHeart,
  BiLogIn,
  BiMenu,
  BiSearch,
  BiShoppingBag,
} from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
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
            <div className="hidden md:flex gap-4 font-bold">
              <Link href="/shirts">Shirts</Link>
              <Link href="/shirts">Shorts</Link>
              <Link href="/shirts">Shoes</Link>
              <Link href="/shirts">Dresses</Link>
              <Link href="/shirts">Underwear</Link>
            </div>
          </div>

          <div className="flex flex-col items-end gap-6">
            <div className="hidden md:flex items-center gap-4">
              <div className="h-10 w-10 bg-[#C2B280] hover:bg-opacity-80 cursor-pointer rounded-full flex items-center justify-center">
                <BiHeart size={18} />
              </div>

              <div className="h-10 w-10 bg-[#C2B280] hover:bg-opacity-80 rounded-full flex items-center justify-center group relative">
                <BiShoppingBag size={18} />

                {/* cart */}
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

                  <div className="flex items-center gap-2 text-xs cursor-pointer h-fit">Remove <CgClose /></div>
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
                <div className="text-xs p-4 text-center">No result on &quot;  &ldquo;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

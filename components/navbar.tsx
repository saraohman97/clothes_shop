import Link from "next/link";
import {
  BiHeart,
  BiLogIn,
  BiMenu,
  BiSearch,
  BiShoppingBag,
} from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      {/* top navbar */}
      <div className="bg-[#C2B280] w-full p-1 text-center text-sm max-md:hidden">
        Get 15% off your next purchase by becoming a member $
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
              <div>Shirts</div>
              <div>Shorts</div>
              <div>Shoes</div>
              <div>Dresses</div>
              <div>Underwear</div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-6">
            <div className="hidden md:flex items-center gap-4">
              <div className="h-10 w-10 bg-[#C2B280] rounded-full flex items-center justify-center">
                <BiHeart size={25} />
              </div>
              <div className="h-10 w-10 bg-[#C2B280] rounded-full flex items-center justify-center">
                <BiShoppingBag size={25} />
              </div>
              <div className="h-10 w-10 bg-[#C2B280] rounded-full flex items-center justify-center">
                <BiLogIn size={25} />
              </div>
            </div>

            <div className="flex items-bottom">
              <input
                type="text"
                className="border-b-2 border-black w-full"
                placeholder="Search..."
              />
              <button className="border-b-2 border-black">
                <BiSearch size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

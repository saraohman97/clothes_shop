import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";
import { BiChevronDown, BiChevronRight, BiHeart } from "react-icons/bi";

const ShirtsPage = () => {
  const newsItems = [
    {
      image: "shirt.jpg",
      name: "T-shirt, white",
      price: 100,
    },
    {
      image: "shirt.jpg",
      name: "T-shirt, white",
      price: 100,
    },
    {
      image: "shirt.jpg",
      name: "T-shirt, white",
      price: 100,
    },
    {
      image: "shirt.jpg",
      name: "T-shirt, white",
      price: 100,
    },
  ];

  return (
    <>
      <Hero />

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
              <h1 className="text-3xl font-bold uppercase">Shirts</h1>
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
              {/* item */}
              {newsItems.map((item) => (
                <Link href="/123" key={item.name} className="relative group">
                  <Image
                    src={`/clothes/${item.image}`}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full md:h-[400px] object-cover cursor-pointer"
                  />
                  <p className="text-sm mt-2 ml-2">{item.name}</p>
                  <p className=" text-sm font-bold ml-2">{item.price} kr</p>

                  <div className="h-10 w-10 bg-[#C2B280]/70 rounded-full md:flex items-center justify-center hidden md:absolute right-2 top-96 hover:bg-[#C2B280] cursor-pointer">
                    <BiHeart size={25} />
                  </div>
                  <p className="absolute top-2 right-2 text-[#C2B280] uppercase invisible group-hover:visible cursor-pointer hover:underline transition-all duration-300">
                    Visit!
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShirtsPage;

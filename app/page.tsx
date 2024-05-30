import Hero from "@/components/hero";
import Image from "next/image";

import { BiHeart } from "react-icons/bi";

export default function Home() {
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
      {/* showcase */}
      <div className="max-w-screen-xl mx-auto my-10">
        <h2 className="font-bold font-sans text-xl uppercase mb-4">Nyheter</h2>
        <div className="grid grid-cols-4 gap-6">
          {/* item */}
          {newsItems.map((item) => (
            <div key={item.name} className="relative group">
              <Image
                src={`/clothes/${item.image}`}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[400px] object-cover cursor-pointer"
              />
              <p className="text-sm mt-2 ml-2">{item.name}</p>
              <p className=" text-sm font-bold ml-2">{item.price} kr</p>

              <div className="h-10 w-10 bg-[#C2B280]/70 rounded-full flex items-center justify-center absolute right-2 top-96 hover:bg-[#C2B280] cursor-pointer">
                <BiHeart size={25} />
              </div>
              <p className="absolute top-2 right-2 text-[#C2B280] uppercase invisible group-hover:visible cursor-pointer hover:underline transition-all duration-300">
                Visit!
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* showcase */}
      <div className="max-w-screen-xl mx-auto">
        <Image
          src="/showcase.jpg"
          alt=""
          width={1000}
          height={1000}
          className="w-full h-96 object-cover object-top mb-10"
        />

        <div className="grid grid-cols-3 gap-10 mb-10">
          <Image
            src="/showcase2.jpg"
            alt=""
            width={1000}
            height={1000}
            className="w-full h-96 object-cover object-center"
          />
          <Image
            src="/showcase4.jpg"
            alt=""
            width={1000}
            height={1000}
            className="w-full h-96 object-cover object-top"
          />
          <Image
            src="/showcase3.jpg"
            alt=""
            width={1000}
            height={1000}
            className="w-full h-96 object-cover object-top"
          />
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import { BiChevronDown, BiChevronRight, BiHeart } from "react-icons/bi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const SinglePage = () => {
  const newsItem = [
    {
      image: "shirt.jpg",
      name: "T-shirt, white",
      price: 100,
    },
  ];

  const otherItems = [
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
      <div className="max-w-screen-xl mx-auto mb-10 px-4 overflow-hidden">
        <div className="flex gap-2 md:gap-4 items-center text-sm mb-8 max-md:text-gray-400">
          Home <BiChevronRight /> Shirts <BiChevronRight /> T-shirt, white
        </div>
        {newsItem.map((item) => (
          <div key={item.name} className="flex max-md:flex-col md:gap-10">
            <div className="flex items-start gap-4 md:w-2/3">
              <Image
                src={`/clothes/${item.image}`}
                alt=""
                width={1000}
                height={1000}
                className="object-contain w-2/3"
              />
              <div className="w-1/3 space-y-4">
                <Image
                  src={`/clothes/shirt2.jpg`}
                  alt=""
                  width={1000}
                  height={1000}
                  className="object-cover w-full"
                />
                <Image
                  src={`/clothes/shirt3.jpg`}
                  alt=""
                  width={1000}
                  height={1000}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-10 w-[400px]">
              <h1 className="text-2xl">{item.name}</h1>
              <p className="font-bold">{item.price} kr</p>

              <div className="flex items-end gap-4 my-6">
                <div className="flex items-center gap-1">
                  Color
                  <div className="h-6 w-6 bg-transparent rounded-full border-4" />
                </div>
                <div className="flex items-center gap-1">
                  Sizes <BiChevronDown />
                </div>
              </div>

              <div className="flex gap-4">
                <button className="py-2 px-4 bg-[#C2B280]/70 hover:bg-[#C2B280] rounded">
                  Buy
                </button>
                <div className="h-10 w-10 bg-[#C2B280]/70 rounded-full flex items-center justify-center hover:bg-[#C2B280] cursor-pointer">
                  <BiHeart size={25} />
                </div>
              </div>

              <div className="mt-10 w-full">
                {/* <div>Product info</div> */}

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Produkt beskrivning</AccordionTrigger>
                    <AccordionContent>
                      Den här t-shirten har en rund halsringning. Den har korta
                      ärmar och en relaxed fit. Den här t-shirten kommer i vitt.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Material och skötselråd</AccordionTrigger>
                    <AccordionContent>
                      Komposition: <br /> Mudd: 95% <br /> Bomull Yttertyg: 100%
                      <br /> Bomull <br /> Rib: 5% Elastan
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Frakt info</AccordionTrigger>
                    <AccordionContent>
                      Betalnings metod, recensioner
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Andra produkter</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-fit">
            {/* item */}
            {otherItems.map((item) => (
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

                <div className="h-10 w-10 bg-[#C2B280]/70 rounded-full mdflex items-center justify-center hidden md:absolute right-2 top-96 hover:bg-[#C2B280] cursor-pointer">
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
    </>
  );
};

export default SinglePage;

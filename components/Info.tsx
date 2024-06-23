import { Product } from "@/types";
import { BiChevronDown, BiHeart } from "react-icons/bi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <>
      <div className="mt-10 w-[400px]">
        <h1 className="text-2xl">{data.name}</h1>
        <p className="font-bold">{data.price} kr</p>

        <div className="flex items-end gap-4 my-6">
          <div className="flex items-center gap-1">
            Color
            <div className="h-6 w-6 rounded-full border-4" style={{ backgroundColor: data?.color?.value }} />
          </div>
          <div className="flex items-center gap-1">
            Sizes <BiChevronDown />
            {/* {data?.size?.name} */}
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
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Produkt beskrivning</AccordionTrigger>
              <AccordionContent>
                Den här t-shirten har en rund halsringning. Den har korta ärmar
                och en relaxed fit. Den här t-shirten kommer i vitt.
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
              <AccordionContent>Betalnings metod, recensioner</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Info;

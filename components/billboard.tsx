import { Billboard as BillboardType } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface BillboardProps {
    data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
    return ( 
        <div className="relative">
        <Image
          src={data?.imageUrl}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-96 object-cover object-top"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h1 className="text-5xl text-center uppercase">{data.label}</h1>
          <Link
            href="/shirts"
            className="bg-white rounded py-2 px-4 shadow cursor-pointer hover:bg-[#C2B280]"
          >
            Shop now!
          </Link>
        </div>
      </div>
     );
}
 
export default Billboard;
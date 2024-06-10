import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        src="/hero.jpg"
        alt=""
        width={1000}
        height={1000}
        className="w-full h-96 object-cover object-top"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl text-center uppercase">Sommar rea 2024</h1>
        <Link
          href="/shirts"
          className="bg-white rounded py-2 px-4 shadow cursor-pointer hover:bg-[#C2B280]"
        >
          Shop now!
        </Link>
      </div>
    </div>
  );
};

export default Hero;

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

const Footer = () => {
    return ( 
        <div className="bg-[#90A276] text-xs">
        <div className="max-w-screen-lg mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">
          <div>
            <p className="hover:underline cursor-pointer w-fit">
              Customer service
            </p>
            <p className="hover:underline cursor-pointer w-fit">
              Find our stores
            </p>
            <p className="hover:underline cursor-pointer w-fit">
              Terms and conditions
            </p>
            <p className="hover:underline cursor-pointer w-fit">Shipping</p>
            <p className="hover:underline cursor-pointer w-fit">Jobs</p>
            <div className="flex gap-2 mt-4">
              <FaFacebook size={25} />
              <FaInstagram size={25} />
              <FaComments size={25} />
            </div>
          </div>

          <div>
            <div className="font-bold uppercase">Kategories</div>
            <div>Skirts</div>
            <div>Shorts</div>
            <div>Shoes</div>
            <div>Dresses</div>
            <div>Underwear</div>
          </div>

          <div className="flex h-fit items-bottom">
            <input
              type="text"
              className="border-b-2 border-black bg-transparent placeholder:text-black w-full"
              placeholder="Email address..."
            />
            <button className="border-b-2 border-black font-bold uppercase text-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
     );
}
 
export default Footer;
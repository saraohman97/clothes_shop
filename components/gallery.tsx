import { Image as ImageType } from "@/types";
import Image from "next/image";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <>
      {/* {images.map((item) => (
        <div key={item.id} className="flex items-start gap-4 md:w-2/3">
          <Image
            src={item.url}
            // src={`https://${item.url}`}
            alt=""
            width={1000}
            height={1000}
            className="object-contain w-2/3"
          />
        </div>
      ))} */}
      <div className="flex items-start gap-4 md:w-2/3">
      <Image
        src={images[0].url}
        alt=""
        width={1000}
        height={1000}
        className="object-contain w-2/3"
      />
      <div>
      {images[1] && (
          <Image
            src={images[1].url}
            alt=""
            width={1000}
            height={1000}
            className="object-contain w-2/3"
          />
      )}
      {images[2] && (
          <Image
            src={images[2].url}
            alt=""
            width={1000}
            height={1000}
            className="object-contain w-2/3"
          />
      )}
      </div>
      </div>
    </>
  );
};

export default Gallery;

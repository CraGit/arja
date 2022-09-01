import { Carousel } from "flowbite-react";
import Image from "next/image";

const Slider = ({ galerija }) => {

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={3000}>
        {galerija.map((image, index) => (
          <div className="h-full w-full" key={index}>
            <Image
              src={`https:${image.fields.file.url}`}
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;

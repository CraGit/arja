import Image from "next/image";
import { useRouter } from "next/router";
import HeroBar from "./HeroBar";
import { Carousel } from "flowbite-react";

const HeroSlider = ({ naslov, galerija }) => {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 overflow-hidden shadow-lg relative -mx-2">
      <div className="h-full max-w-[80vw] flex flex-col justify-center items-center top-0  absolute z-20">
        {/* <p className="text-white text-lg sm:text-xl text-center mb-4 md:mb-8 tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-100">
          {podnaslov}
        </p> */}
        <h1 className="text-5xl md:text-6xl font-semibold text-center mb-8 md:mb-12 tracking-tight text-white underline underline-offset-8 decoration-zuta">
          {naslov}
        </h1>
      </div>
      {/* <!-- image - start --> */}
      <div className="h-64 sm:h-[60vh] w-full">
        <Carousel slideInterval={3000} indicators={false}>
          {galerija.map((image, index) => (
            <div className="h-full w-full relative" key={index}>
              <Image
                src={`https:${image.fields.file.url}`}
                alt={
                  image.fields.description ? image.fields.description : naslov
                }
                layout="fill"
                objectFit="cover"
                priority
                quality={85}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSlider;

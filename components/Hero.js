import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Hero = ({
  naslov,
  podnaslov,
  botuni,
  slika,
  alt,
  cijena,
  podrucje,
  trajanje,
}) => {
  const router = useRouter();

  return (
    <section className="min-h-[20vh] md:min-h-[60vh] flex flex-col items-center justify-center flex-1 bg-gray-100 overflow-hidden shadow-lg  relative py-16 md:py-20 xl:py-36">
      {/* <!-- image - start --> */}
      <Image
        src={`https:${slika}`}
        priority
        quality={85}
        alt={alt ? alt : "Aria Interiers"}
        layout="fill"
        objectFit="cover"
      />
      {/* <!-- image - end -->

      <!-- overlay - start --> */}
      {/* <div className="bg-yellow-600 mix-blend-multiply absolute inset-0"></div> */}
      {/* <!-- overlay - end -->

      <!-- text start --> */}
      <div className="sm:max-w-xl flex flex-col items-center relative p-4">
        <p className=" text-lg font-light sm:text-xl text-center mb-1 md:mb-4 tracking-widest uppercase text-white">
          {podnaslov}
        </p>
        <h1 className=" text-5xl md:text-6xl font-semibold text-center mb-8 md:mb-12 tracking-tight text-white">
          {naslov}
        </h1>

        {botuni && (
          <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
            <Link href="/kontakt">
              <a className="inline-block bg-zuta hover:bg-yellow-600 active:bg-yellow-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                {router.locale === "en" ? "Rezerviraj" : "Book Now"}
              </a>
            </Link>

            <Link href="/cijena-i-info">
              <a className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                {router.locale === "en" ? "Cijene" : "Check Price"}
              </a>
            </Link>
          </div>
        )}
      </div>

      {/* <!-- text end --> */}
    </section>
  );
};

export default Hero;

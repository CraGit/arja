import Link from "next/link";
import Image from "next/image";
export default function ImageCard({ slika, link, naslov, podnaslov = "" }) {
  return (
    <Link href={link}>
      <a className="relative block overflow-hidden rounded-xl">
        <div className="relative p-8 pt-40 text-white opacity-100 hover:opacity-80 transition-all duration-200 ease-in-out cursor-pointer sm:h-96">
          <div className="absolute bottom-5 left-5 z-10">
            <h5 className="text-3xl text-white font-bold underline underline-offset-8 decoration-zuta">
              {naslov}
            </h5>
            <p className="text-sm">{podnaslov}</p>
          </div>
          <Image
            src={slika}
            objectFit="cover"
            layout="fill"
            loading="lazy"
            className="z-0"
            alt={naslov}
            quality={90}
          ></Image>

          {/* <div className="bg-white mix-blend-multiply absolute inset-0"></div>
           */}
          <div className="mix-blend-multiply absolute inset-0 bg-gradient-to-t from-gray-600 to-gray-100"></div>
        </div>
      </a>
    </Link>
  );
}

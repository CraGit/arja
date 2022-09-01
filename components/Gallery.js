import { useRouter } from "next/router";
import Image from "next/image";

export default function Gallery({ galerija }) {
  const router = useRouter();
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">
          {router.locale === "en" ? "Gallery" : "Galleria"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">
          {galerija.map((item, index) => (
            <div
              className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              key={index}
            >
              <Image
                src={`https:${item.fields.file.url}`}
                loading="lazy"
                layout="fill"
                alt={
                  item.fields.description
                    ? item.fields.description
                    : "Explore.hr One Day Trips and Activities"
                }
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />
              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none" />
              {/* <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                {item.fields.description}
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

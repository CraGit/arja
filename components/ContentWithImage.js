import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
const ContentWithImage = ({ slika, opis = "", opisNaslov = "" }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-96 lg:mb-0">
        <div className="relative z-10 lg:py-8">
          <div className="relative h-64 sm:h-96 lg:h-full">
            <Image
              className="absolute inset-0 object-cover w-full h-full"
              src={`https:${slika.fields.file.url}`}
              alt="Arja Interiers"
              layout="fill"
            />
          </div>
        </div>

        <div className="relative flex items-center bg-gray-100">
          <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-50 lg:block lg:-left-16"></span>

          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl text-gray-900">
              {opisNaslov}
            </h2>

            <p className="mt-4 text-gray-900">{opis}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentWithImage;

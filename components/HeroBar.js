import Image from "next/image";
import { useRouter } from "next/router";
const HeroBar = ({ cijena, cijenaTip, trajanje, podrucje }) => {
  const router = useRouter();
  return (
    <dl className="flex items-center justify-around space-x-3 md:space-x-8 mt-auto w-full text-base md:text-lg px-4 z-20 bg-white/40 absolute bottom-0 py-1 text-gray-800 mx-1">
      <div className="inline-flex items-center shrink-0">
        <Image
          src="/images/duration.svg"
          alt="language"
          height="64px"
          width="24px"
        />

        <div className="ml-3 mt-0 leading-3 flex flex-col justify-center">
          <dd className="font-semibold">{trajanje}h</dd>
          <dt className="text-gray-700 text-xs py-0 tracking-widest">
            {router.locale === "en" ? "duration" : "durata"}
          </dt>
        </div>
      </div>
      <div className="inline-flex items-center shrink-0 relative">
        <Image
          src="/images/area.svg"
          alt="language"
          height="64px"
          width="24px"
        />

        <div className="ml-3 mt-0 leading-3 flex flex-col justify-center">
          <dd className="font-semibold">
            {podrucje.map((area, index) => (
              <p className="py-0.5" key={index}>
                {area}
              </p>
            ))}
          </dd>
          <dt className="text-gray-700 text-xs py-0 tracking-widest">
            {router.locale === "en" ? "starts from" : "inizia da"}
          </dt>
        </div>
      </div>

      <div className="inline-flex items-center shrink-0">
        <Image
          src="/images/price.svg"
          alt="language"
          height="64px"
          width="24px"
        />
        <div className="ml-3 mt-0 leading-3 flex flex-col justify-center">
          <dd className="font-semibold"> {cijena}€</dd>
          <dt className="text-gray-700 text-xs py-0 tracking-widest">
            {cijenaTip}
          </dt>
        </div>
      </div>
    </dl>
  );
};

export default HeroBar;

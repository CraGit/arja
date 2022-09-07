import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
Link;
const Card = ({
  naslov,
  galerija,
  kratkiOpis,
  slug,
  cijena,
  cijenaTip,
  trajanje,
  podrucje,
}) => {
  const router = useRouter();

  return (
    <Link href={`/activities/${slug}`}>
      <a className="p-3 rounded-lg uppercase shadow-sm shadow-indigo-100 flex flex-col hover:scale-105 transition-transform duration-150 ease-in-out h-96">
        <Image
          alt="Aria Interiers slika"
          src={`https:${galerija[0].fields.file.url}`}
          className="object-cover w-full h-56 rounded-md hover:opacity-90"
          width={450}
          height={300}
          loading="lazy"
        />

        <div className="mt-2 flex flex-col mb-auto">
          <dl className="">
            <div>
              <dt className="sr-only">Activity name</dt>

              <dd className="font-semibold">
                <h3>{naslov}</h3>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Activity description</dt>

              <dd className="text-sm text-gray-500 h-24">{kratkiOpis}</dd>
            </div>
          </dl>

          <dl className="flex items-center justify-around space-x-4 text-xs mt-2 bg-gray-50 rounded-md px-4">
            <div className="inline-flex items-center shrink-0">
              <Image
                src="/images/duration.svg"
                alt="language"
                height="64px"
                width="20px"
              />

              <div className="ml-2 mt-0">
                <dd className="font-semibold ">{trajanje}h</dd>
                <dt className="text-gray-500 text-xs">
                  {router.locale === "en" ? "duration" : "durata"}
                </dt>
              </div>
            </div>
            <div className="inline-flex items-center shrink-0">
              <Image
                src="/images/area.svg"
                alt="language"
                height="64px"
                width="20px"
              />

              <div className="ml-2 mt-0">
                <dd className="font-semibold">
                  {podrucje.map((area, index) => (
                    <p key={index}>{area}</p>
                  ))}
                </dd>
                <dt className="text-gray-500 text-xs">
                  {router.locale === "en" ? "from" : "da"}
                </dt>
              </div>
            </div>

            <div className="inline-flex items-center shrink-0">
              <Image
                src="/images/price.svg"
                alt="language"
                height="64px"
                width="20px"
              />

              <div className="ml-2 mt-0">
                <dd className="font-semibold">{cijena} €</dd>
                <dt className="text-gray-500 text-xs">{cijenaTip}</dt>
              </div>
            </div>
          </dl>
        </div>
      </a>
    </Link>
  );
};

export default Card;

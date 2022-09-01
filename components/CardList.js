import Link from "next/link";
import { useRouter } from "next/router";
import Card from "./Card";
const CardList = ({ cards, naslov, podnaslov, botunLink = "" }) => {
  const router = useRouter();
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-1">
        {cards.map((item) => (
          <Card
            key={item.fields.slug}
            naslov={item.fields.naslov}
            galerija={item.fields.galerija}
            kratkiOpis={item.fields.kratkiOpis}
            slug={item.fields.slug}
            cijena={item.fields.cijena}
            cijenaTip={item.fields.cijenaTip}
            trajanje={item.fields.trajanje}
            podrucje={item.fields.podrucje}
          />
        ))}
      </div>
      {botunLink && (
        <div className="flex justify-center mt-4">
          <Link href={`/${botunLink}`}>
            <a className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-zuta rounded group active:bg-indigo-500 focus:outline-none focus:ring">
              <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:mr-4">
                {router.locale === "en" ? "Check All" : "Mostra tutto"}
              </span>
            </a>
          </Link>
        </div>
      )}
    </>
  );
};

export default CardList;

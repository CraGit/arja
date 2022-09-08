import Hero from "../../components/Hero";
import { createClient } from "contentful";
import SectionColor from "../../components/SectionColor";

import { useRouter } from "next/router";
import ImageCard from "../../components/ImageCard";
import Head from "next/head";
export default function VanjskiPodoviStranica({ stranica }) {
  const {
    naslovHero,
    podnaslovHero,
    slikaHero,
    slikaWpcDecking,
    slikaDrvniDecking,
    slikaFasadneObloge,
  } = stranica;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{naslovHero}- Arja Interiers</title>
        <meta name="description" content="Vanjski podovi iz naše ponude" />
      </Head>
      <Hero
        naslov={naslovHero}
        podnaslov={podnaslovHero}
        slika={slikaHero.fields.file.url || "/images/default.jpg"}
      />
      <SectionColor>
        <div className="grid md:grid-cols-2 gap-3 mx-1">
          <ImageCard
            naslov={router.locale === "hr" ? "WPC decking" : "WPC Decking"}
            link="/vanjski-podovi/wpc-decking"
            slika={`https:${slikaWpcDecking.fields.file.url}`}
          />
          <ImageCard
            naslov={router.locale === "hr" ? "Drvni decking" : "Wooden Decking"}
            link="/vanjski-podovi/drvni-decking"
            slika={`https:${slikaDrvniDecking.fields.file.url}`}
          />
          <ImageCard
            naslov={
              router.locale === "hr" ? "Fasadne obloge" : "Facade Covering"
            }
            link="/vanjski-podovi/fasadne-obloge"
            slika={`https:${slikaFasadneObloge.fields.file.url}`}
          />
        </div>
      </SectionColor>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const stranica = await client.getEntries({
    content_type: "vanjskiPodoviStranica",
    locale,
  });

  return {
    revalidate: 5,
    props: {
      stranica: stranica.items[0].fields,
    },
  };
}

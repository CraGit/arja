import Hero from "../../components/Hero";
import { createClient } from "contentful";
import SectionColor from "../../components/SectionColor";
import Section from "../../components/Section";
import { useRouter } from "next/router";
import ImageCard from "../../components/ImageCard";
import Head from "next/head";
export default function LaminatiIViniliStranica({ stranica }) {
  const { naslovHero, podnaslovHero, slikaHero, slikaLaminati, slikaVinili } =
    stranica;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{naslovHero}- Arja Interiers</title>
        <meta name="description" content="Laminati i vinili iz naše ponude" />
      </Head>
      <Hero
        naslov={naslovHero}
        podnaslov={podnaslovHero}
        slika={slikaHero.fields.file.url}
      />
      <SectionColor>
        <div className="grid md:grid-cols-2 gap-3 mx-1">
          <ImageCard
            naslov={router.locale === "hr" ? "Laminati" : "Laminates"}
            link="/laminati-i-vinili/laminati"
            slika={`https:${slikaLaminati.fields.file.url}`}
          />
          <ImageCard
            naslov={router.locale === "hr" ? "Vinili" : "Vinyls"}
            link="/laminati-i-vinili/vinili"
            slika={`https:${slikaVinili.fields.file.url}`}
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
    content_type: "laminatiIViniliStranica",
    locale,
  });

  return {
    revalidate: 5,
    props: {
      stranica: stranica.items[0].fields,
    },
  };
}

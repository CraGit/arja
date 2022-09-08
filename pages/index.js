import Head from "next/head";

import { createClient } from "contentful";

import { useRouter } from "next/router";
import Hero from "../components/Hero";
import SectionColor from "../components/SectionColor";
import Section from "../components/Section";
import ContentWithImage from "../components/ContentWithImage";
import ImageCard from "../components/ImageCard";
import Image from "next/image";

const Home = ({ home }) => {
  const router = useRouter();
  const {
    naslovHero,
    podnaslov,
    slikaHero,
    naslovONama,
    tekstONama,
    slikaONama,
    slikaParketi,
    slikaVrata,
    slikaLaminatiIVinili,
    slikaVanjskiPodovi,
    slikaPopratniMaterijali,
    partneri,
  } = home;

  return (
    <div>
      <Head>
        <title>{naslovHero} - Arja Interiers</title>
        <meta
          name="description"
          content="Svojom visokokvalitetnom ponudom ARJA interiers prednjači u ponudi
vrhunskih podnih obloga od drva, ulaznih vrata, protuprovalnih vrata, sobnih
vrata i drvene građevinske stolarije."
        />
        <meta property="og:title" content="Arja Interiers" />
        <meta property="og:description" content="Arja Interiers" />
      </Head>

      <Hero
        naslov={naslovHero}
        podnaslov={podnaslov}
        slika={slikaHero.fields.file.url}
      />

      <main>
        <SectionColor naslov={router.locale === "hr" ? "O nama" : "About us"}>
          <ContentWithImage
            opisNaslov={naslovONama}
            opis={tekstONama}
            slika={slikaONama}
          />
        </SectionColor>
        <Section naslov={router.locale === "hr" ? "Proizvodi" : "Products"}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mx-1">
            <ImageCard
              naslov={router.locale === "hr" ? "Parketi" : "Parquet"}
              link="/parketi"
              slika={`https:${slikaParketi.fields.file.url}`}
            />
            <ImageCard
              naslov={router.locale === "hr" ? "Vrata" : "Doors"}
              link="/vrata"
              slika={`https:${slikaVrata.fields.file.url}`}
            />
            <ImageCard
              naslov={
                router.locale === "hr"
                  ? "Laminati i vinili"
                  : "Laminate & Vinyl"
              }
              link="/laminati-i-vinili"
              slika={`https:${slikaLaminatiIVinili.fields.file.url}`}
            />
            <ImageCard
              naslov={router.locale === "hr" ? "Vanjski podovi" : "Decking"}
              link="/vanjski-podovi"
              slika={`https:${slikaVanjskiPodovi.fields.file.url}`}
            />
            <ImageCard
              naslov={
                router.locale === "hr" ? "Popratni materijal" : "Materials"
              }
              link="/popratni-materijal"
              slika={`https:${slikaPopratniMaterijali.fields.file.url}`}
            />
          </div>
        </Section>
        <SectionColor naslov={router.locale === "hr" ? "Partneri" : "Partners"}>
          <div className="flex flex-col md:flex-row gap-4 mx-1 items-center justify-center">
            {partneri.map((partner, index) => (
              <div key={index} className="px-16 py-2 md:p-0">
                <Image
                  src={`https:${partner.fields.file.url}`}
                  alt="partneri"
                  width={500}
                  height={100}
                />
              </div>
            ))}
          </div>
        </SectionColor>
      </main>
    </div>
  );
};

export default Home;
export async function getStaticProps({ locale }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const home = await client.getEntries({
    content_type: "home",
    locale,
  });

  return {
    revalidate: 5,
    props: {
      home: home.items[0].fields,
    },
  };
}

import Hero from "../../components/Hero";
import { createClient } from "contentful";
import SectionColor from "../../components/SectionColor";
import Section from "../../components/Section";
import { useRouter } from "next/router";
import ImageCard from "../../components/ImageCard";
import Head from "next/head";
export default function Vrata({ stranica }) {
  const {
    naslovHero,
    podnaslovHero,
    slikaHero,
    slikaSobna,
    slikaProtuprovalna,
  } = stranica;
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{naslovHero} - Arja Interiers</title>
        <meta name="description" content="Sve vrste vrata" />
        <meta property="og:title" content="" />

        <meta property="og:description" content="" />
      </Head>
      <Hero
        naslov={naslovHero}
        podnaslov={podnaslovHero}
        slika={slikaHero.fields.file.url}
      />
      <SectionColor>
        <div className="grid md:grid-cols-2 gap-3 mx-1">
          <ImageCard
            naslov={router.locale === "hr" ? "Sobna vrata" : "Room doors"}
            link="/vrata/sobna"
            slika={`https:${slikaSobna.fields.file.url}`}
          />
          <ImageCard
            naslov={
              router.locale === "hr"
                ? "Protuprovalna i protupožarna vrata"
                : "Anti-theft and fireproof doors"
            }
            link="/vrata/protuprovalna-i-protupozarna"
            slika={`https:${slikaProtuprovalna.fields.file.url}`}
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
    content_type: "vrataStranica",
    locale,
  });

  return {
    revalidate: 5,
    props: {
      stranica: stranica.items[0].fields,
    },
  };
}

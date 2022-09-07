import Hero from "../../components/Hero";
import { createClient } from "contentful";
import SectionColor from "../../components/SectionColor";
import Section from "../../components/Section";
import { useRouter } from "next/router";
import ImageCard from "../../components/ImageCard";

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
      <Hero
        naslov={naslovHero}
        podnaslov={podnaslovHero}
        slika={slikaHero.fields.file.url}
      />
      <SectionColor>
        <div className="grid md:grid-cols-2 gap-3 mx-1">
          <ImageCard
            naslov={router.locale === "hr" ? "Sobna vrata" : "Sobna"}
            link="/vrata/sobna"
            slika={`https:${slikaSobna.fields.file.url}`}
          />
          <ImageCard
            naslov={
              router.locale === "hr"
                ? "Protuprovalna i protupožarna vrata"
                : "Protuprovalna i protupožarna"
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

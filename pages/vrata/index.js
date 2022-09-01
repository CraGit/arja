import Hero from "../../components/Hero";
import { createClient } from "contentful";
import SectionColor from "../../components/SectionColor";
import Section from "../../components/Section";
import { useRouter } from "next/router";
import ImageCard from "../../components/ImageCard";

export default function Vrata({ vrata }) {
  const {
    naslovHero,
    podnaslovHero,
    slikaHero,
    slikaSobna,
    slikaProtuprovalna,
    slikaProtupozarna,
  } = vrata;
  const router = useRouter();
  return (
    <>
      <Hero
        naslov={naslovHero}
        podnaslov={podnaslovHero}
        slika={slikaHero.fields.file.url}
      />
      <SectionColor
        naslov={router.locale === "hr" ? "Vrsta vrata" : "Door type"}
      >
        <div className="grid md:grid-cols-3 gap-3 mx-1">
          <ImageCard
            naslov={router.locale === "hr" ? "Sobna vrata" : "Sobna"}
            link="/vrata/sobna-vrata"
            slika={`https:${slikaSobna.fields.file.url}`}
          />
          <ImageCard
            naslov={
              router.locale === "hr" ? "Protuprovalna vrata" : "Protuprovalna"
            }
            link="/vrata/protuprovalna-vrata"
            slika={`https:${slikaProtuprovalna.fields.file.url}`}
          />
          <ImageCard
            naslov={
              router.locale === "hr" ? "Protupožarna vrata" : "Protupožarna"
            }
            link="/vrata/protupozarna-vrata"
            slika={`https:${slikaProtupozarna.fields.file.url}`}
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
  const vrata = await client.getEntries({
    content_type: "vrataStranica",
    locale,
  });

  return {
    revalidate: 5,
    props: {
      vrata: vrata.items[0].fields,
    },
  };
}

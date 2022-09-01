import Hero from "../../components/Hero";
import { createClient } from "contentful";
import SectionColor from "../../components/SectionColor";
import Section from "../../components/Section";
import { useRouter } from "next/router";
import ImageCard from "../../components/ImageCard";

export default function Parketi({ parketi }) {
  const {
    naslovHero,
    podnaslovHero,
    slikaHero,
    slikaVieslojni,
    slikaMasivni,
  } = parketi;
  const router = useRouter();
  return (
    <>
      <Hero
        naslov={naslovHero}
        podnaslov={podnaslovHero}
        slika={slikaHero.fields.file.url}
      />
      <SectionColor
        naslov={router.locale === "hr" ? "Vrsta parketa" : "Parquet type"}
      >
        <div className="grid md:grid-cols-2 gap-3 mx-1">
          <ImageCard
            naslov={
              router.locale === "hr" ? "Višeslojni parketi" : "Višeslojni"
            }
            link="/parketi/viseslojni-parketi"
            slika={`https:${slikaVieslojni.fields.file.url}`}
          />
          <ImageCard
            naslov={
              router.locale === "hr" ? "Masivni parketi" : "Protuprovalna"
            }
            link="/parketi/masivni-parketi"
            slika={`https:${slikaMasivni.fields.file.url}`}
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
  const parketi = await client.getEntries({
    content_type: "parketiStranica",
    locale,
  });

  return {
    revalidate: 5,
    props: {
      parketi: parketi.items[0].fields,
    },
  };
}

import Hero from "../../components/Hero";
import { createClient } from "contentful";
import SectionColor from "../../components/SectionColor";
import Section from "../../components/Section";
import { useRouter } from "next/router";
import ImageCard from "../../components/ImageCard";

export default function Parketi({ parketi }) {
  const { naslovHero, podnaslovHero, slikaHero, slikaVieslojni, slikaMasivni } =
    parketi;
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
            naslov="Višeslojni parketi"
            link="/parketi/viseslojni"
            slika={`https:${slikaVieslojni.fields.file.url}`}
          />
          <ImageCard
            naslov="Masivni parketi"
            link="/parketi/masivni"
            slika={`https:${slikaMasivni.fields.file.url}`}
          />
          {/* {podstranice.map((podstranica) => (
            <ImageCard
              key={podstranica.sys.id}
              naslov={podstranica.fields.naslov}
              link={`/parketi/${podstranica.fields.slug}`}
              slika={`https:${podstranica.fields.slikaCard.fields.file.url}`}
            />
          ))} */}
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
    content_type: "parketiStranica",
    locale,
  });
  // const podstranice = await client.getEntries({
  //   content_type: "proizvod",
  //   "fields.spadaPod": "Parketi",
  //   locale,
  // });

  return {
    revalidate: 5,
    props: {
      parketi: stranica.items[0].fields,
      // podstranice: podstranice.items,
    },
  };
}

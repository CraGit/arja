import Hero from "../../../components/Hero";
import { createClient } from "contentful";
import SectionColor from "../../../components/SectionColor";

import { useRouter } from "next/router";
import ImageCard from "../../../components/ImageCard";

export default function WpcDeckingStranica({ stranica, podstranice }) {
  const { naslovHero, podnaslovHero, slikaHero } = stranica;
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
          {podstranice.length > 0 &&
            podstranice.map((podstranica) => (
              <ImageCard
                key={podstranica.sys.id}
                naslov={podstranica.fields.naslov}
                link={`/vanjski-podovi/wpc-decking/${podstranica.fields.slug}`}
                slika={`https:${podstranica.fields.slikaCard.fields.file.url}`}
              />
            ))}
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
    content_type: "wpcDeckingStranica",
    locale,
  });
  const podstranice = await client.getEntries({
    content_type: "proizvod",
    "fields.spadaPod": "WPC decking",
    locale,
  });

  return {
    revalidate: 5,
    props: {
      stranica: stranica.items[0].fields,
      podstranice: podstranice.items,
    },
  };
}

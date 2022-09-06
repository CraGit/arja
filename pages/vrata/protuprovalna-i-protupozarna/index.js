import Hero from "../../../components/Hero";
import { createClient } from "contentful";
import SectionColor from "../../../components/SectionColor";

import { useRouter } from "next/router";
import ImageCard from "../../../components/ImageCard";

export default function ProtuprovalnaIProtupozarnaStranica({
  stranica,
  podstranice,
}) {
  const { naslovHero, podnaslovHero, slikaHero, slikaVieslojni, slikaMasivni } =
    stranica;
  const router = useRouter();
  console.log(podstranice);
  return (
    <>
      <Hero
        naslov={naslovHero}
        podnaslov={podnaslovHero}
        slika={slikaHero.fields.file.url}
      />
      <SectionColor
        naslov={
          router.locale === "hr"
            ? "Protuprovalna i protupožarna vrata"
            : "Anti-theft and fire doors"
        }
      >
        <div className="grid md:grid-cols-2 gap-3 mx-1">
          {podstranica.length > 0 &&
            podstranice.map((podstranica) => (
              <ImageCard
                key={podstranica.sys.id}
                naslov={podstranica.fields.naslov}
                link={`/vrata/protuprovalna-i-protupozarna/${podstranica.fields.slug}`}
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
    content_type: "protuprovalnaIProtupozarnaStranica",
    locale,
  });
  const podstranice = await client.getEntries({
    content_type: "proizvod",
    "fields.spadaPod": "Protuprovalna/protupozarna vrata",
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

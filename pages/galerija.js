import { createClient } from "contentful";

import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Head from "next/head";
import Section from "../components/Section";
const Galerija = ({ stranica }) => {
  const { naslovHero, podnaslov = "", slikaHero, galerija } = stranica;

  return (
    <div className="bg-black">
      <Head>
      <title>{naslovHero} - Arja Interiers</title>
        <meta
          name="description"
          content="Galerija prijašnjih radova Arja Interiersa"
        />
        <meta property="og:title" content="Aria Interiers" />

        <meta property="og:description" content="Aria Interiers" />
      </Head>
      <Hero
        naslov={naslovHero}
        slika={slikaHero.fields.file.url}
        slikaAlt={slikaHero.fields.description}
      />

      {galerija && galerija.length > 0 && (
        <Section>
          <Gallery galerija={galerija} />
        </Section>
      )}
    </div>
  );
};

export default Galerija;

export async function getStaticProps({ locale }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const stranica = await client.getEntries({
    content_type: "galerijaStranica",
    locale,
  });

  return {
    revalidate: 360,
    props: {
      stranica: stranica.items[0].fields,
    },
  };
}

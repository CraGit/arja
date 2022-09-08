import { createClient } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import SectionColor from "../components/SectionColor";
import Head from "next/head";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Gallery from "../components/Gallery";

const Cijene = ({ stranica }) => {
  const { naslovHero, tekst, slikaHero, galerija } = stranica;

  const text = documentToHtmlString(tekst);
  return (
    <div>
      <Head>
        <title>{naslovHero} - Arja Interiers</title>
        <meta
          name="description"
          content="Već više od 20 godina ARJA interiers nameće se kao snažan konkurent na
          hrvatskom tržištu."
        />
        <meta property="og:title" content="" />

        <meta property="og:description" content="" />
      </Head>
      <Hero
        naslov={naslovHero}
        slika={slikaHero.fields.file.url}
        slikaAlt={slikaHero.fields.description}
      />
      <SectionColor>
        <main>
          <div
            className="bg-black text-white max-w-7xl mx-auto px-2 prose lg:prose-xl prose-headings:text-white"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </main>
      </SectionColor>
      {galerija && galerija.length > 0 && (
        <Section>
          <Gallery galerija={galerija} />
        </Section>
      )}
    </div>
  );
};

export default Cijene;

export async function getStaticProps({ locale }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const stranica = await client.getEntries({
    content_type: "oNamaStranica",
    locale,
  });

  return {
    revalidate: 5,
    props: {
      stranica: stranica.items[0].fields,
    },
  };
}

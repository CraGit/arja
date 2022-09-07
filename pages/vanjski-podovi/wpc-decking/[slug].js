import { createClient } from "contentful";
import HeroSlider from "../../../components/HeroSlider";
import ContentWithImage from "../../../components/ContentWithImage";
import SectionColor from "../../../components/SectionColor";
import Section from "../../../components/Section";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Gallery from "../../../components/Gallery";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
export default function Proizvod({ proizvod }) {
  const {
    naslov,
    galerijaSlider,
    opisNaslov,
    opis,
    kataloziPdf,
    slikaCard,
    galerijaObicna,
  } = proizvod;

  const router = useRouter();
  return (
    <main className="overflow-hidden">
      <HeroSlider naslov={naslov} galerija={galerijaSlider} />
      {opis && (
        <SectionColor>
          <ContentWithImage
            slika={slikaCard}
            opis={opis}
            opisNaslov={opisNaslov}
          />
        </SectionColor>
      )}
      {kataloziPdf && kataloziPdf.length > 0 && (
        <Section naslov={router.locale === "hr" ? "Katalozi" : "Catalogues"}>
          <div className="flex flex-col sm:flex.row gap-3 mx-1 items-center justify-center">
            {kataloziPdf.map((katalog) => (
              <>
                <Image
                  src={`/images/pdf.svg`}
                  width={80}
                  height={80}
                  alt="pdf icon"
                />
                <Link
                  href={`https:${katalog.fields.file.url}`}
                  key={katalog.sys.id}
                  target="_blank"
                  passHref
                >
                  <h4 className="cursor-pointer underline underline-offset-2 decoration-dotted hover:decoration-zuta">
                    {katalog.fields.title}
                  </h4>
                </Link>
              </>
            ))}
          </div>
        </Section>
      )}
      {galerijaObicna && galerijaObicna.length > 0 && (
        <SectionColor naslov={router.locale === "hr" ? "Galerija" : "Gallery"}>
          <Gallery galerija={galerijaObicna} />
        </SectionColor>
      )}
    </main>
  );
}

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "proizvod",
  });

  const pathsEn = res.items.map((item) => {
    return { params: { slug: item.fields.slug }, locale: "en" };
  });
  const pathsHr = res.items.map((item) => {
    return { params: { slug: item.fields.slug }, locale: "hr" };
  });
  const paths = pathsHr.concat(pathsEn);
  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps({ locale, params }) {
  const proizvodi = await client.getEntries({
    content_type: "proizvod",
    "fields.slug": params.slug,
    locale,
  });

  return {
    revalidate: 10,
    props: {
      proizvod: proizvodi.items[0].fields,
    },
  };
}

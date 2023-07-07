import Hero from "../../components/Hero";
import { createClient } from "contentful";
import SectionColor from "../../components/SectionColor";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ImageCard from "../../components/ImageCard";
import Head from "next/head";
export default function VanjskiPodoviStranica({ stranica }) {
  const {
    naslovHero,
    podnaslovHero,
    slikaHero,
    slikaWpcDecking,
    slikaDrvniDecking,
    slikaFasadneObloge,
    sadrzaj
  } = stranica;
  const router = useRouter();
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <Link href={node.data.uri}>
            <a>{children}</a>
          </Link>
        );
      },
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return (
          <div className="flex justify-center items-center my-2">
            <Image
              src={`https:${node.data.target.fields.file.url}`}
              height={300}
              width={500}
              className="rounded-lg"
              alt={node.data.target.fields.title}
            />
          </div>
        );
      },
    },
  };

  return (
    <>
      <Head>
        <title>{`${naslovHero} - Arja Interiers`}</title>
        <meta name="description" content="Vanjski podovi iz naše ponude" />
      </Head>
      <Hero
        naslov={naslovHero}
        podnaslov={podnaslovHero}
        slika={slikaHero.fields.file.url || "/images/default.jpg"}
      />
      <SectionColor>
        <div className="grid md:grid-cols-2 gap-3 mx-1">
          <ImageCard
            naslov={router.locale === "hr" ? "WPC decking" : "WPC Decking"}
            link="/vanjski-podovi/wpc-decking"
            slika={`https:${slikaWpcDecking.fields.file.url}`}
          />
          <ImageCard
            naslov={router.locale === "hr" ? "Drvni decking" : "Wooden Decking"}
            link="/vanjski-podovi/drvni-decking"
            slika={`https:${slikaDrvniDecking.fields.file.url}`}
          />
          <ImageCard
            naslov={
              router.locale === "hr" ? "Fasadne obloge" : "Facade Covering"
            }
            link="/vanjski-podovi/fasadne-obloge"
            slika={`https:${slikaFasadneObloge.fields.file.url}`}
          />
        </div>
      </SectionColor>
      <SectionColor>
        <div className="flex flex-col">
          <div className="prose md:leading-7 prose-p:my-0 prose-headings:my-6 max-w-none prose-p:text-justify text-lg prose-headings:text-zuta text-white">
            {documentToReactComponents(sadrzaj, options)}
          </div>
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
    content_type: "vanjskiPodoviStranica",
    locale,
  });

  return {
    revalidate: 5,
    props: {
      stranica: stranica.items[0].fields,
    },
  };
}

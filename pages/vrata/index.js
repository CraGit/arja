import Hero from "../../components/Hero";
import { createClient } from "contentful";
import SectionColor from "../../components/SectionColor";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import Section from "../../components/Section";
import { useRouter } from "next/router";
import ImageCard from "../../components/ImageCard";
import Head from "next/head";
export default function Vrata({ stranica }) {
  const {
    naslovHero,
    podnaslovHero,
    slikaHero,
    slikaSobna,
    slikaProtuprovalna,
    sadrzaj,
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
        <title>{naslovHero} - Arja Interiers</title>
        <meta name="description" content="Sve vrste vrata" />
        <meta property="og:title" content="" />

        <meta property="og:description" content="" />
      </Head>
      <Hero
        naslov={naslovHero}
        podnaslov={podnaslovHero}
        slika={slikaHero.fields.file.url}
      />
      <SectionColor>
        <div className="grid md:grid-cols-2 gap-3 mx-1">
          <ImageCard
            naslov={router.locale === "hr" ? "Sobna vrata" : "Room doors"}
            link="/vrata/sobna"
            slika={`https:${slikaSobna.fields.file.url}`}
          />
          <ImageCard
            naslov={
              router.locale === "hr"
                ? "Protuprovalna i protupožarna vrata"
                : "Anti-theft and fireproof doors"
            }
            link="/vrata/protuprovalna-i-protupozarna"
            slika={`https:${slikaProtuprovalna.fields.file.url}`}
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

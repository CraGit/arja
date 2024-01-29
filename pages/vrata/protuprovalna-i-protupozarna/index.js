import Hero from "../../../components/Hero";
import { createClient } from "contentful";
import SectionColor from "../../../components/SectionColor";
import Head from "next/head";
import { useRouter } from "next/router";
import ImageCard from "../../../components/ImageCard";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

export default function ProtuprovalnaIProtupozarnaStranica({
  stranica,
  podstranice,
}) {
  const {
    naslovHero,
    podnaslovHero,
    slikaHero,
    slikaVieslojni,
    slikaMasivni,
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
        <title>{`${naslovHero} - Arja Interiers`}</title>
        <meta
          name="description"
          content="Protuprovalna i protupožarna vrata iz naše ponude."
        />
      </Head>
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
                link={`/vrata/protuprovalna-i-protupozarna/${podstranica.fields.slug}`}
                slika={`https:${podstranica.fields.slikaCard.fields.file.url}`}
              />
            ))}
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
    content_type: "protuprovalnaIProtupozarnaStranica",
    locale,
  });
  const podstranice = await client.getEntries({
    content_type: "proizvod",
    "fields.spadaPod": "Protuprovalna/Protupozarna vrata",
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

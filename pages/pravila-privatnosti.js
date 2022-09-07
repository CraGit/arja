import Head from "next/head";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Section from "../components/Section";
import { createClient } from "contentful";

const PrivacyPolicy = ({ privacyPolicy }) => {
  const { naslov, sadrzaj } = privacyPolicy;
  const text = documentToHtmlString(sadrzaj);

  return (
    <div>
      <Head>
        <title>Privacy Policy |  Aria Interiers</title>
        <meta name="description" content="Aria Interiers" />
        <meta property="og:title" content="" />
        {/* <meta
          property="og:image"
          content="https://explore.hr/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmbkud2lk1r1a%2F54JtODSYu8GHHj8siUqSTb%2Ffc4e891ed5aa888b554d8b1be6f6c2f3%2Fbluecave.jpg"
        /> */}
        <meta property="og:description" content="" />
      </Head>
      <main>
        <Section>
          <div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4 text-center">
                {naslov}
              </h1>
              <div
                className="prose md:leading-7 prose-p:my-0 max-w-none prose-p:text-justify"
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

export async function getStaticProps({ locale }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const privacyPolicy = await client.getEntries({
    content_type: "pravilaPrivatnostiStranica",
    locale,
  });

  return {
    revalidate: 5,
    props: {
      privacyPolicy: privacyPolicy.items[0].fields,
    },
  };
}

import { createClient } from "contentful";
import FaqList from "../components/FaqList";
import Section from "../components/Section";
import Head from "next/head";

const FAQ = ({ faq }) => {
  const {naslov, questionAnswer, uvod } = faq;

  return (
    <div>
      <Head>
        <title>
          Frequently Asked Questions | Best Day Trips and Activities in Croatia
          | Best Price Guarantee | Explore.hr - Only Good Spots
        </title>
        <meta name="description" content="Explore.hr" />
        <meta
          property="og:title"
          content="Frequently Asked Questions | Best Day Trips and Activities in Croatia
          | Best Price Guarantee | Explore.hr - Only Good Spots"
        />
        <meta
          property="og:image"
          content="https://explore.hr/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmbkud2lk1r1a%2F2eVClBsw5NTrvcUWbfisoL%2F59073216a0b80ed03a40e365feec1673%2Foliver-ragfelt-gpPMMOKlO3w-unsplash__1_.jpg&w=3840&q=85"
        />
        <meta property="og:description" content="Explore.hr" />
      </Head>
      <Section naslov={naslov} uvod={uvod}>
        <FaqList faqList={questionAnswer} />
      </Section>
    </div>
  );
};

export default FAQ;

export async function getStaticProps({ locale }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const faq = await client.getEntries({
    content_type: "faq",
    locale,
  });

  return {
    revalidate: 5,
    props: {
      faq: faq.items[0].fields,
    },
  };
}

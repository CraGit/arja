import { createClient } from "contentful";
import CardList from "../../components/CardList";
import { useRouter } from "next/router";
import Head from "next/head";
import Section from "../../components/Section";
const SplitArea = ({ activities }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>
          Best day Trips and Activities from Split | Explore.hr - Only Good
          Spots
        </title>
        <meta name="description" content="Explore.hr" />
        <meta
          property="og:title"
          content=" Best day Trips and Activities from Split | Explore.hr - Only Good
          Spots"
        />
        <meta
          property="og:image"
          content="https://explore.hr/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmbkud2lk1r1a%2F2eVClBsw5NTrvcUWbfisoL%2F59073216a0b80ed03a40e365feec1673%2Foliver-ragfelt-gpPMMOKlO3w-unsplash__1_.jpg&w=3840&q=85"
        />
        <meta property="og:description" content="Explore.hr" />
      </Head>
      <Section
        naslov={router.locale === "en" ? "Activities" : "Attività"}
        podnaslov={router.locale === "en" ? "Split Area" : "Split area"}
        uvod={
          router.locale === "en"
            ? "Check our tours and activities with start from Split area"
            : "Guarda i nostri tour e attività con partenza dall'area di Split"
        }
      >
        <CardList cards={activities} />
      </Section>
    </div>
  );
};

export default SplitArea;

export async function getStaticProps({ locale }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const activities = await client.getEntries({
    content_type: "activitie",
    locale,
  });

  const filteredActivities = activities.items.filter((activity) =>
    activity.fields.podrucje.includes("Split")
  );

  return {
    revalidate: 5,
    props: {
      activities: filteredActivities,
    },
  };
}

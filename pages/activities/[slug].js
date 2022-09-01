import { createClient } from "contentful";
import FaqList from "../../components/FaqList";
import Head from "next/head";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Section from "../../components/Section";
import IncludedList from "../../components/IncludedList";
import Plan from "../../components/Plan";

import { useRouter } from "next/router";
import HeroSlider from "../../components/HeroSlider";
import Gallery from "../../components/Gallery";
import Tabs from "../../components/Tabs";
import ContentWithImage from "../../components/ContentWithImage";
import PlanSaSlikom from "../../components/PlanSaSlikom";
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const SingleActivity = ({ activity }) => {
  const router = useRouter();
  const {
    naslov,
    podnaslov,
    slika,
    faq,
    cijena,
    cijenaTip,
    trajanje,
    podrucje,
    detalji,
    detaljiDodatno,
    ukljuceno,
    nijeUkljuceno,
    plan,
    planSaSlikom,
    galerija,
    tabsPolasci,
    tabsNaslov,
    opis,
    opisNaslov,
    kratkiOpis,
  } = activity;
  const text = documentToHtmlString(detalji);



  return (
    <>
      <Head>
        <title>
          {naslov} | from {podrucje[0]} - Best day Trips | Explore.hr - Only
          Good Spots
        </title>
        <meta name="description" content="Explore.hr" />
        <meta
          property="og:title"
          content="Best day trips in Croatia | Explore.hr - Only Good Spots"
        />
        <meta property="og:image" content={`https:${slika.fields.file.url}`} />
        <meta property="og:description" content={kratkiOpis} />
      </Head>
      <main className="overflow-hidden">
        <HeroSlider
          galerija={galerija}
          naslov={naslov}
          podnaslov={podnaslov}
          cijena={cijena}
          cijenaTip={cijenaTip}
          trajanje={trajanje}
          podrucje={podrucje}
        />

        <Section>
          <div className="">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl mb-4 text-center">
                {router.locale === "en"
                  ? "Main Info"
                  : "Informazioni principali"}
              </h3>
              <div
                className="prose md:leading-7 prose-p:my-0 max-w-none prose-p:text-justify"
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            </div>
          </div>
        </Section>
        {opis && (
          <Section>
            <ContentWithImage
              slika={slika}
              opis={opis}
              opisNaslov={opisNaslov}
            />
          </Section>
        )}
        {tabsPolasci && (
          <Section>
            <h3 className="text-lg font-semibold my-3">{tabsNaslov}</h3>

            <Tabs tabs={tabsPolasci} />
          </Section>
        )}
        {plan && plan.length > 1 && (
          <Section naslov="Itinerary">
            <Plan plan={plan} />
          </Section>
        )}
        {planSaSlikom && planSaSlikom.length > 1 && (
          <Section naslov="Itinerary">
            <PlanSaSlikom planSaSlikom={planSaSlikom} />
          </Section>
        )}
        {ukljuceno && (
          <Section>
            <IncludedList included={ukljuceno} notIncluded={nijeUkljuceno} />
          </Section>
        )}

        {faq && (
          <Section naslov="Frequently Asked Questions">
            <FaqList faqList={faq} />
          </Section>
        )}
        {galerija && (
          <Section>
            <Gallery galerija={galerija} />
          </Section>
        )}
      </main>
    </>
  );
};

export default SingleActivity;

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "activitie",
  });

  const pathsIt = res.items.map((item) => {
    return { params: { slug: item.fields.slug }, locale: "it" };
  });
  const pathsEn = res.items.map((item) => {
    return { params: { slug: item.fields.slug }, locale: "en" };
  });
  const paths = pathsIt.concat(pathsEn);
  return {
    paths,
    fallback: "blocking",
  };
};
export async function getStaticProps({ locale, params }) {
  const activities = await client.getEntries({
    content_type: "activitie",
    "fields.slug": params.slug,
    locale,
  });

  return {
    revalidate: 10,
    props: {
      activity: activities.items[0].fields,
    },
  };
}

import Head from "next/head";
import Section from "../components/Section";
import { useRouter } from "next/router";

const MessageSent = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Poruka poslana - Arja Interiers</title>
        <meta
          name="description"
          content="Poruka je usješno poslana. Hvala na interesu."
        />
        <meta name="robots" content="noindex"></meta>;
        <meta property="og:title" content="Aria Interiers" />
        <meta property="og:description" content="Aria Interiers.hr" />
      </Head>
      <main className="my-16 md:mt-32">
        <Section
          podnaslov={router.locale === "en" ? "Thank you" : "Grazie"}
          naslov={
            router.locale === "en"
              ? "Message has been sent successfully."
              : "Poruka je uspješno poslana"
          }
          uvod={
            router.locale === "en"
              ? "We will get back to you as soon as possible."
              : "Kontaktiramo Vas u najkraćem mogućem roku."
          }
        />
      </main>
    </div>
  );
};

export default MessageSent;

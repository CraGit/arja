import Head from "next/head";
import Section from "../components/Section";
import { useRouter } from "next/router";

const MessageSent = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>
          Best Day Trips and Activities in Croatia | Best Price Guarantee |
          Explore.hr - Only Good Spots
        </title>
        <meta name="description" content="Explore.hr" />
        <meta name="robots" content="noindex"></meta>;
        <meta
          property="og:title"
          content="Best Day Trips and Activities in Croatia | Best Price Guarantee | Explore.hr - Only Good Spots"
        />
        <meta
          property="og:image"
          content="https://explore.hr/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmbkud2lk1r1a%2F54JtODSYu8GHHj8siUqSTb%2Ffc4e891ed5aa888b554d8b1be6f6c2f3%2Fbluecave.jpg"
        />
        <meta property="og:description" content="Explore.hr" />
      </Head>
      <main className="my-16 md:mt-32">
        <Section
          podnaslov={router.locale === "en" ? "Thank you" : "Grazie"}
          naslov={
            router.locale === "en"
              ? "Message has been sent successfully."
              : "Message has been sent."
          }
          uvod={
            router.locale === "en"
              ? "We will get back to you as soon as possible."
              : "We will get back to you as soon as possible."
          }
        />
      </main>
    </div>
  );
};

export default MessageSent;

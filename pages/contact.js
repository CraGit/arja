import { useRouter } from "next/router";
import { useState } from "react";
import { useContext } from "react";
import Section from "../components/Section";
import ActivitySelectedContext from "../context/ActivitySelectedContext";
import Head from "next/head";
import { createClient } from "contentful";
const Contact = ({ contact }) => {
  const { naslov, uvod } = contact;
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);
  const [isFlexible, setIsFlexible] = useState(false);
  const [message, setMessage] = useState("");


  const { activitySelected } = useContext(ActivitySelectedContext);
  let activitySelectedUrl = "Preko kontakt forme";
  if (activitySelected) {
    activitySelectedUrl = `https://explore.hr/activities/${activitySelected}`;
  }

  const handleValidation = () => {
    let isValid = true;
    if (name.length <= 0) {
      isValid = false;
    }
    if (phone.length <= 0) {
      isValid = false;
    }
    if (email.length <= 0) {
      isValid = false;
    }
    if (date.length <= 0) {
      isValid = false;
    }
    if (people.length <= 0) {
      isValid = false;
    }
    if (message.length <= 0) {
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const data = {
        name,
        phone,
        email,
        date,
        isFlexible,
        people,
        message,
        activitySelectedUrl,
      };
      const res = await fetch("/api/sendgrid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!result.error) {
        router.push("/message-sent");
      }
    }
  };

  return (
    <div>
      <Head>
        <title>
          Contact Us | Best Day Trips and Activities in Croatia | Best Price
          Guarantee | Explore.hr - Only Good Spots
        </title>
        <meta name="description" content="Explore.hr" />
        <meta
          property="og:title"
          content="Contact Us | Best Day Trips and Activities in Croatia | Best Price Guarantee | Explore.hr - Only Good Spots"
        />
        <meta
          property="og:image"
          content="https://explore.hr/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmbkud2lk1r1a%2F54JtODSYu8GHHj8siUqSTb%2Ffc4e891ed5aa888b554d8b1be6f6c2f3%2Fbluecave.jpg"
        />
        <meta property="og:description" content="Explore.hr" />
      </Head>
      <Section naslov={naslov} uvod={uvod}>
        <div>
          <form className="flex flex-row flex-wrap" onSubmit={handleSubmit}>
            <div className="w-full px-2">
              <label
                htmlFor="name"
                className="inline-block text-sm sm:text-base mb-2"
              >
                {router.locale === "en" ? "Name*" : "Nome*"}
              </label>
              <input
                name="name"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-zuta rounded outline-none transition duration-100 px-3 py-2"
                value={name}
                type="text"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="w-full md:w-1/2  px-2">
              <label
                htmlFor="email"
                className="inline-block text-sm sm:text-base mb-2"
              >
                {router.locale === "en" ? "E-mail*" : "E-mail*"}
              </label>
              <input
                name="email"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-zuta rounded outline-none transition duration-100 px-3 py-2"
                value={email}
                type="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="w-full md:w-1/2  px-2">
              <label
                htmlFor="phone"
                className="inline-block text-sm sm:text-base mb-2"
              >
                {router.locale === "en" ? "Tel.*" : "Tel.*"}
              </label>
              <input
                name="phone"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-zuta rounded outline-none transition duration-100 px-3 py-2"
                value={phone}
                type="tel"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="w-1/2  px-2">
              <label
                htmlFor="date"
                className="inline-block text-sm sm:text-base mb-2"
              >
                {router.locale === "en" ? "Date*" : "Data*"}
              </label>
              <input
                name="date"
                type="date"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-zuta rounded outline-none transition duration-100 px-3 py-2"
                value={date}
                required
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div className="w-1/2  px-2">
              <label
                htmlFor="people"
                className="inline-block text-sm sm:text-base mb-2"
              >
                {router.locale === "en" ? "People*" : "Numero di persone*"}
              </label>
              <input
                name="people"
                type="number"
                min={1}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-zuta rounded outline-none transition duration-100 px-3 py-2"
                value={people}
                required
                onChange={(e) => {
                  setPeople(e.target.value);
                }}
              />
            </div>
            <div className="w-full  px-2">
              <input
                name="isFlexible"
                type="checkbox"
                className=" bg-gray-50 text-gray-800 border focus:ring ring-zuta rounded outline-none transition duration-100 px-3 py-2"
                value={isFlexible}
                onChange={(e) => {
                  setIsFlexible(!isFlexible);
                }}
              />
              <label
                htmlFor="flexible"
                className="inline-block text-sm sm:text-base m-2"
              >
                {router.locale === "en"
                  ? "I am flexible with dates?"
                  : "FLEX ITAL*"}
              </label>
            </div>
            <div className="w-full  px-2">
              <label
                htmlFor="message"
                className="inline-blocktext-sm sm:text-base mb-2"
              >
                {router.locale === "en" ? "Message*" : "Messagio*"}
              </label>
              <textarea
                name="message"
                className="w-full h-36 md:h-48 bg-gray-50 text-gray-800 border focus:ring ring-zuta rounded outline-none transition duration-100 px-3 py-2"
                value={message}
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="p-2">
              <button
                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-zuta border border-zuta rounded  hover:bg-transparent hover:text-zuta focus:outline-none focus:ring"
                type="submit"
              >
                {router.locale === "en" ? "Send" : "Invia"}
              </button>
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Contact;

export async function getStaticProps({ locale }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const contact = await client.getEntries({
    content_type: "contact",
    locale,
  });

  return {
    revalidate: 5,
    props: {
      contact: contact.items[0].fields,
    },
  };
}

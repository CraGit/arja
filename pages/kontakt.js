import { useRouter } from "next/router";
import { useState } from "react";
import Section from "../components/Section";
import Head from "next/head";
import { createClient } from "contentful";
const Kontakt = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
        message,
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
        <title>Contact Us | Arja Interiers</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Arja Interiers" />

        <meta property="og:description" content="Arja Interiers" />
      </Head>
      <Section
        naslov={
          router.locale === "hr" ? "Pošaljite nam poruku" : "Send us a message"
        }
      >
        <div>
          <form className="flex flex-row flex-wrap" onSubmit={handleSubmit}>
            <div className="w-full px-2">
              <label
                htmlFor="name"
                className="inline-block text-sm sm:text-base mb-2"
              >
                {router.locale === "en" ? "Name*" : "Ime*"}
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

            <div className="w-full  px-2">
              <label
                htmlFor="message"
                className="inline-blocktext-sm sm:text-base mb-2"
              >
                {router.locale === "en" ? "Message*" : "Poruka*"}
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
                {router.locale === "en" ? "Send" : "Pošalji"}
              </button>
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Kontakt;

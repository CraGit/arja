import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Footer = ({ slikaFooter }) => {
  const router = useRouter();
  return (
    <footer className="text-white bg-black lg:grid lg:grid-cols-5">
      <aside className="hidden lg:relative lg:col-span-2 lg:block">
        <Image
          className="absolute inset-0 object-cover w-full"
          src="/images/footer/footer.jpg"
          alt="Aria Interiers"
          objectFit="cover"
          layout="fill"
        />
      </aside>
      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:col-span-3">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <div className="font-medium">
              <span className="text-xl tracking-widest uppercase underline underline-offset-8 decoration-zuta">
                Abonos d.o.o. - SPLIT{" "}
              </span>
              <ul className="mt-2 space-y-1">
                <a
                  href="https://www.google.com/maps?q=ARJA+interiers,+Mostarska+ul.+1,+21000,+Split&ftid=0x13355e6a5c03a121:0xf05df8d824668c48&hl=hr-HR&gl=hr&entry=gps&g_ep=CAISBjYuMzMuMRgAINeCAw%3D%3D&g_st=iw"
                  className="hover:opacity-75 underline underline-offset-4 decoration-dotted"
                >
                  <li>Mostarska ulica 1</li>
                  <li>21000 Split</li>
                </a>
                <li>
                  <a
                    className="mt-2 hover:opacity-75 underline underline-offset-4 decoration-dotted"
                    href="tel:+385912288232"
                  >
                    Mob.: 091 228 82 32
                  </a>
                </li>

                <li>
                  <a
                    className="mt-2 
                    hover:opacity-75 underline underline-offset-4 decoration-dotted"
                    href="tel:+385915276184"
                  >
                    Mob.: 091 527 61 84
                  </a>
                </li>
                <li>
                  <a
                    className="mt-2 
                    hover:opacity-75 underline underline-offset-4 decoration-dotted"
                    href="mailto:abonos.st@gmail.com"
                  >
                    E-mail: abonos.st@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="font-medium">
              <span className="text-xl tracking-widest uppercase underline underline-offset-8 decoration-zuta">
                Internus d.o.o. - ZADAR{" "}
              </span>
              <ul className="mt-2 space-y-1">
                <a
                  href="https://www.google.com/maps/place/INTERNUS+d.o.o./@44.1281398,15.2530757,17z/data=!3m1!4b1!4m5!3m4!1s0x4761f077fef3b547:0x409fa87762da9120!8m2!3d44.1281012!4d15.2551894?hl=hr-HR"
                  className="hover:opacity-75 underline underline-offset-4 decoration-dotted"
                >
                  <li>Hrvatskog sabora 26</li>
                  <li>23000 Zadar</li>
                </a>
                <li>
                  <a
                    className="mt-2 hover:opacity-75 underline underline-offset-4 decoration-dotted"
                    href="tel:+38523324111"
                  >
                    Tel.: 023 324 111
                  </a>
                </li>
                <li>
                  <a className="mt-2 ">Fax: 023 324 124</a>
                </li>
                <li>
                  <a
                    className="mt-2 
                    hover:opacity-75 underline underline-offset-4 decoration-dotted"
                    href="tel:+385913214567"
                  >
                    Mob.: 091 321 45 67
                  </a>
                </li>
                <li>
                  <a
                    className="mt-2 
                    hover:opacity-75 underline underline-offset-4 decoration-dotted"
                    href="mailto:info.internus@gmail.com"
                  >
                    E-mail: info.internus@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-12 mt-12 border-t border-gray-800 ">
          <div className="text-sm text-gray-300 sm:items-center sm:justify-between sm:flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 items-center justify-center p-12 md:p-6">
              <div>
                <Image
                  className="object-contain w-full"
                  src="/images/footer/hamag.svg"
                  alt="Hamag"
                  width={500}
                  height={300}
                />
              </div>
              <div>
                <Image
                  className="object-contain w-full"
                  src="/images/footer/esifw.svg"
                  alt="Esif"
                  width={500}
                  height={300}
                />
              </div>
              <div>
                <Image
                  className="object-contain w-full"
                  src="/images/footer/eu.svg"
                  alt="EU"
                  width={500}
                  height={300}
                />
              </div>
            </div>
            <div className="flex space-x-3 self-start">
              <Link className="hover:opacity-75" href="/pravila-privatnosti">
                {router.locale === "hr"
                  ? "Pravila privatnosti"
                  : "Privacy Policy"}
              </Link>
            </div>
            <p className="mt-4 sm:mt-0 self-start">© 2022 Arja Interiers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
